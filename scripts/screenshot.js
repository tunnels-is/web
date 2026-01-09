#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const SCREENSHOTS_DIR = path.join(process.cwd(), 'screenshots');

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' },
  { path: '/features', name: 'features' },
  { path: '/dns', name: 'dns' },
  { path: '/enterprise', name: 'enterprise' },
  { path: '/technical', name: 'technical' },
  { path: '/download', name: 'download' },
  { path: '/pricing', name: 'pricing' }
];

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function takeScreenshots() {
  await ensureDir(SCREENSHOTS_DIR);

  console.log('Starting comprehensive screenshot suite...');
  console.log(`Base URL: ${BASE_URL}`);
  console.log('');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const results = [];

  try {
    const page = await browser.newPage();

    for (const viewport of VIEWPORTS) {
      console.log(`\n--- ${viewport.name.toUpperCase()} (${viewport.width}x${viewport.height}) ---\n`);
      await page.setViewport({ width: viewport.width, height: viewport.height });

      for (const pageConfig of PAGES) {
        const url = `${BASE_URL}${pageConfig.path}`;
        const filename = `${pageConfig.name}-${viewport.name}-${timestamp}.png`;
        const filepath = path.join(SCREENSHOTS_DIR, filename);

        try {
          await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 30000
          });

          // Wait for animations
          await new Promise(resolve => setTimeout(resolve, 500));

          await page.screenshot({
            path: filepath,
            fullPage: false
          });

          console.log(`  ${pageConfig.name}: ${filename}`);
          results.push({ page: pageConfig.name, viewport: viewport.name, status: 'success', file: filename });
        } catch (err) {
          console.log(`  ${pageConfig.name}: FAILED - ${err.message}`);
          results.push({ page: pageConfig.name, viewport: viewport.name, status: 'failed', error: err.message });
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\n--- SUMMARY ---');
  const succeeded = results.filter(r => r.status === 'success').length;
  const failed = results.filter(r => r.status === 'failed').length;
  console.log(`Total: ${results.length} | Success: ${succeeded} | Failed: ${failed}`);
  console.log(`Screenshots saved to: ${SCREENSHOTS_DIR}`);
}

takeScreenshots().catch(err => {
  console.error('Screenshot suite failed:', err.message);
  process.exit(1);
});
