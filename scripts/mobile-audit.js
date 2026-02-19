#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const SCREENSHOTS_DIR = path.join(process.cwd(), 'screenshots', 'mobile-audit');

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
];

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/features', name: 'features' },
  { path: '/dns', name: 'dns' },
  { path: '/enterprise', name: 'enterprise' },
  { path: '/download', name: 'download' },
  { path: '/pricing', name: 'pricing' },
  { path: '/free-and-opensource', name: 'free-opensource' },
  { path: '/security', name: 'security' },
  { path: '/public', name: 'public-vpn' },
  { path: '/homelab', name: 'homelab' },
  { path: '/cloud', name: 'cloud' },
  { path: '/iot', name: 'iot' },
  { path: '/office', name: 'office' },
  { path: '/lan-over-wan', name: 'lan-over-wan' },
  { path: '/personal-vpn', name: 'personal-vpn' },
  { path: '/technical', name: 'technical' },
];

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function audit() {
  await ensureDir(SCREENSHOTS_DIR);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const issues = [];

  try {
    const page = await browser.newPage();

    for (const viewport of VIEWPORTS) {
      console.log(`\n=== ${viewport.name.toUpperCase()} (${viewport.width}x${viewport.height}) ===\n`);
      await page.setViewport({ width: viewport.width, height: viewport.height });

      for (const pageConfig of PAGES) {
        const url = `${BASE_URL}${pageConfig.path}`;
        const filename = `${pageConfig.name}-${viewport.name}.png`;
        const filepath = path.join(SCREENSHOTS_DIR, filename);

        try {
          await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
          await new Promise(resolve => setTimeout(resolve, 800));

          // Check for horizontal overflow
          const overflowInfo = await page.evaluate(() => {
            const docWidth = document.documentElement.scrollWidth;
            const viewportWidth = window.innerWidth;
            const hasOverflow = docWidth > viewportWidth;

            // Find elements causing overflow
            const overflowingElements = [];
            if (hasOverflow) {
              const allElements = document.querySelectorAll('*');
              for (const el of allElements) {
                const rect = el.getBoundingClientRect();
                if (rect.right > viewportWidth + 5) {
                  overflowingElements.push({
                    tag: el.tagName,
                    class: el.className?.toString()?.slice(0, 100),
                    width: Math.round(rect.width),
                    right: Math.round(rect.right),
                  });
                }
              }
            }

            // Check for text that's too small
            const smallTextElements = [];
            const textElements = document.querySelectorAll('p, span, li, a, td, th, label');
            for (const el of textElements) {
              const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
              if (fontSize < 12 && el.textContent.trim().length > 0) {
                smallTextElements.push({
                  tag: el.tagName,
                  fontSize: fontSize,
                  text: el.textContent.trim().slice(0, 50),
                });
              }
            }

            // Check for touch targets too small
            const smallTargets = [];
            const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
            for (const el of interactiveElements) {
              const rect = el.getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0 && (rect.height < 44 || rect.width < 44)) {
                smallTargets.push({
                  tag: el.tagName,
                  text: el.textContent?.trim()?.slice(0, 30),
                  width: Math.round(rect.width),
                  height: Math.round(rect.height),
                });
              }
            }

            // Check for elements with fixed widths that might overflow
            const fixedWidthIssues = [];
            const allEls = document.querySelectorAll('*');
            for (const el of allEls) {
              const style = window.getComputedStyle(el);
              const width = parseFloat(style.width);
              if (width > viewportWidth && style.position !== 'fixed' && style.position !== 'absolute') {
                fixedWidthIssues.push({
                  tag: el.tagName,
                  class: el.className?.toString()?.slice(0, 80),
                  width: Math.round(width),
                });
              }
            }

            return {
              docWidth,
              viewportWidth,
              hasOverflow,
              overflowingElements: overflowingElements.slice(0, 5),
              smallTextElements: smallTextElements.slice(0, 5),
              smallTargets: smallTargets.slice(0, 10),
              fixedWidthIssues: fixedWidthIssues.slice(0, 5),
            };
          });

          // Take full page screenshot
          await page.screenshot({ path: filepath, fullPage: true });

          const pageIssues = [];
          if (overflowInfo.hasOverflow) {
            pageIssues.push(`OVERFLOW: Document ${overflowInfo.docWidth}px > viewport ${overflowInfo.viewportWidth}px`);
            overflowInfo.overflowingElements.forEach(el => {
              pageIssues.push(`  -> ${el.tag}.${el.class?.slice(0,60)} (width:${el.width}, right:${el.right})`);
            });
          }
          if (overflowInfo.smallTextElements.length > 0) {
            pageIssues.push(`SMALL TEXT: ${overflowInfo.smallTextElements.length} elements < 12px`);
            overflowInfo.smallTextElements.forEach(el => {
              pageIssues.push(`  -> ${el.tag} ${el.fontSize}px: "${el.text}"`);
            });
          }
          if (overflowInfo.fixedWidthIssues.length > 0) {
            pageIssues.push(`FIXED WIDTH: ${overflowInfo.fixedWidthIssues.length} elements wider than viewport`);
            overflowInfo.fixedWidthIssues.forEach(el => {
              pageIssues.push(`  -> ${el.tag}.${el.class?.slice(0,60)} (${el.width}px)`);
            });
          }

          if (pageIssues.length > 0) {
            console.log(`  ❌ ${pageConfig.name}: ISSUES FOUND`);
            pageIssues.forEach(i => console.log(`     ${i}`));
            issues.push({ page: pageConfig.name, viewport: viewport.name, issues: pageIssues });
          } else {
            console.log(`  ✓ ${pageConfig.name}: OK`);
          }

        } catch (err) {
          console.log(`  ❌ ${pageConfig.name}: ERROR - ${err.message}`);
          issues.push({ page: pageConfig.name, viewport: viewport.name, issues: [`ERROR: ${err.message}`] });
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\n\n=== AUDIT SUMMARY ===');
  if (issues.length === 0) {
    console.log('No issues found!');
  } else {
    console.log(`${issues.length} page/viewport combinations with issues:\n`);
    for (const issue of issues) {
      console.log(`${issue.page} (${issue.viewport}):`);
      issue.issues.forEach(i => console.log(`  ${i}`));
      console.log('');
    }
  }
}

audit().catch(err => {
  console.error('Audit failed:', err.message);
  process.exit(1);
});
