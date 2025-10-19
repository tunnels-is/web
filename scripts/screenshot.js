#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const screenshotsDir = join(projectRoot, 'screenshots');

// Ensure screenshots directory exists
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

// Configuration
const BASE_URL = process.env.SCREENSHOT_URL || 'http://localhost:5173';
const VIEWPORT_DESKTOP = { width: 1920, height: 1080 };
const VIEWPORT_TABLET = { width: 768, height: 1024 };
const VIEWPORT_MOBILE = { width: 375, height: 667 };

// Pages to screenshot
const pages = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' },
  { path: '/404', name: '404' },
];

// Viewports to test
const viewports = [
  { ...VIEWPORT_DESKTOP, name: 'desktop' },
  { ...VIEWPORT_TABLET, name: 'tablet' },
  { ...VIEWPORT_MOBILE, name: 'mobile' },
];

async function takeScreenshot(browser, url, pageName, viewport) {
  const page = await browser.newPage();

  try {
    await page.setViewport(viewport);

    console.log(`  📸 Capturing ${pageName} (${viewport.name})...`);

    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for animations to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take full page screenshot
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    const filename = join(screenshotsDir, `${pageName}-${viewport.name}-${timestamp}.png`);

    await page.screenshot({
      path: filename,
      fullPage: true,
    });

    console.log(`  ✅ Saved: ${filename}`);

    return filename;
  } catch (error) {
    console.error(`  ❌ Error capturing ${pageName} (${viewport.name}):`, error.message);
  } finally {
    await page.close();
  }
}

async function takeQuickScreenshot(url, outputPath, viewport = VIEWPORT_DESKTOP) {
  console.log(`📸 Taking screenshot of ${url}...`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport(viewport);

    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for animations
    await new Promise(resolve => setTimeout(resolve, 1000));

    const fullPath = outputPath.startsWith('/')
      ? outputPath
      : join(screenshotsDir, outputPath);

    await page.screenshot({
      path: fullPath,
      fullPage: true,
    });

    console.log(`✅ Screenshot saved: ${fullPath}`);

    return fullPath;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

async function takeAllScreenshots() {
  console.log('🚀 Starting screenshot capture...');
  console.log(`📍 Base URL: ${BASE_URL}`);
  console.log(`📁 Output directory: ${screenshotsDir}\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const page of pages) {
      const url = `${BASE_URL}${page.path}`;
      console.log(`\n📄 Page: ${page.name} (${url})`);

      for (const viewport of viewports) {
        await takeScreenshot(browser, url, page.name, viewport);
      }
    }

    console.log('\n✨ All screenshots captured successfully!');
  } catch (error) {
    console.error('\n❌ Error during screenshot capture:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// CLI handling
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Screenshot Utility for Website Development

Usage:
  npm run screenshot              Take all screenshots
  npm run screenshot:quick <url>  Take a quick screenshot of a specific URL

Environment Variables:
  SCREENSHOT_URL                  Base URL (default: http://localhost:5173)

Examples:
  npm run screenshot
  SCREENSHOT_URL=http://localhost:3000 npm run screenshot
  npm run screenshot:quick http://localhost:5173/about

Output:
  Screenshots are saved to: ./screenshots/
  `);
  process.exit(0);
}

// Check if this is a quick screenshot
if (args.includes('--quick') || process.env.QUICK_MODE) {
  const url = args[args.indexOf('--quick') + 1] || args[0] || BASE_URL;
  const outputName = args[args.indexOf('--output') + 1] || `quick-${Date.now()}.png`;

  takeQuickScreenshot(url, outputName)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
} else {
  // Take all screenshots
  takeAllScreenshots()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

// Export for programmatic use
export { takeScreenshot, takeQuickScreenshot, takeAllScreenshots };
