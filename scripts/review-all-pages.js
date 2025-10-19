#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots', 'review');

// Create review directory
import { existsSync, mkdirSync } from 'fs';
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

const pages = [
  { name: 'home', path: '/' },
  { name: 'cloud', path: '/cloud' },
  { name: 'features', path: '/features' },
  { name: 'dns', path: '/dns' },
  { name: 'enterprise', path: '/enterprise' },
  { name: 'technical', path: '/technical' },
  { name: 'download', path: '/download' },
  { name: 'pricing', path: '/pricing' },
  { name: 'free-opensource', path: '/free-and-opensource' },
];

async function reviewAllPages() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];

  try {
    for (const pageInfo of pages) {
      console.log(`\n📄 Reviewing: ${pageInfo.name} (${pageInfo.path})`);

      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });

      try {
        await page.goto(`http://localhost:5173${pageInfo.path}`, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Analyze sections with gray backgrounds
        const analysis = await page.evaluate(() => {
          const sections = document.querySelectorAll('section');
          const graySections = [];

          sections.forEach((section, idx) => {
            const bgColor = window.getComputedStyle(section).backgroundColor;

            // Check if it's a gray background (rgb(18, 18, 18) is dark-surface)
            if (bgColor === 'rgb(18, 18, 18)' || bgColor === 'rgba(18, 18, 18, 1)') {
              // Find elements with borders or glass-effect
              const borderedElements = section.querySelectorAll('.glass-effect, [class*="border"]');

              if (borderedElements.length > 0) {
                graySections.push({
                  index: idx,
                  top: section.offsetTop,
                  height: section.offsetHeight,
                  borderedCount: borderedElements.length,
                  heading: section.querySelector('h1, h2, h3')?.textContent?.trim() || 'No heading'
                });
              }
            }
          });

          return graySections;
        });

        if (analysis.length > 0) {
          console.log(`  ✓ Found ${analysis.length} gray section(s) with bordered elements:`);
          analysis.forEach(s => {
            console.log(`    - Section ${s.index}: "${s.heading}" (${s.borderedCount} bordered elements)`);
          });

          // Take screenshots of each gray section
          for (const section of analysis) {
            await page.evaluate((y) => window.scrollTo(0, y), section.top);
            await new Promise(resolve => setTimeout(resolve, 500));

            const filepath = join(screenshotsDir, `${pageInfo.name}-section-${section.index}.png`);
            await page.screenshot({
              path: filepath,
              fullPage: false,
            });
          }

          results.push({
            page: pageInfo.name,
            path: pageInfo.path,
            sections: analysis
          });
        } else {
          console.log(`  ✓ No gray sections with bordered elements`);
        }

      } catch (error) {
        console.log(`  ✗ Error loading page: ${error.message}`);
      }

      await page.close();
    }

    // Summary
    console.log('\n\n📊 SUMMARY\n');
    console.log('Pages with gray sections containing bordered elements:\n');

    if (results.length === 0) {
      console.log('  None found!');
    } else {
      results.forEach(r => {
        console.log(`${r.page} (${r.path}):`);
        r.sections.forEach(s => {
          console.log(`  - Section ${s.index}: "${s.heading}"`);
        });
        console.log('');
      });
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

reviewAllPages();
