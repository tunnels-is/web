#!/usr/bin/env node

/**
 * Simple screenshot utility for Claude to use during development
 *
 * Usage from command line:
 *   node scripts/take-screenshot.js <url> [output-name] [width] [height]
 *
 * Examples:
 *   node scripts/take-screenshot.js http://localhost:5173
 *   node scripts/take-screenshot.js http://localhost:5173/about about-page
 *   node scripts/take-screenshot.js http://localhost:5173 home 1920 1080
 */

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots');

// Ensure screenshots directory exists
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

async function takeScreenshot(url, outputName, width = 1920, height = 1080) {
  let browser;

  try {
    console.log(`\n🚀 Taking screenshot of: ${url}`);
    console.log(`📐 Viewport: ${width}x${height}`);

    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });

    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({
      width: parseInt(width),
      height: parseInt(height),
    });

    console.log(`🌐 Loading page...`);

    // Navigate to URL
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait a bit for animations to complete
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = outputName
      ? `${outputName}-${timestamp}.png`
      : `screenshot-${timestamp}.png`;

    const filepath = join(screenshotsDir, filename);

    console.log(`📸 Capturing screenshot...`);

    // Take screenshot
    await page.screenshot({
      path: filepath,
      fullPage: true,
    });

    console.log(`✅ Screenshot saved successfully!`);
    console.log(`📁 Location: ${filepath}\n`);

    return filepath;

  } catch (error) {
    console.error(`\n❌ Error taking screenshot:`, error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// CLI usage
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help')) {
  console.log(`
📸 Screenshot Utility

Usage:
  node scripts/take-screenshot.js <url> [output-name] [width] [height]

Arguments:
  url          URL to screenshot (required)
  output-name  Name for the output file (optional)
  width        Viewport width in pixels (default: 1920)
  height       Viewport height in pixels (default: 1080)

Examples:
  node scripts/take-screenshot.js http://localhost:5173
  node scripts/take-screenshot.js http://localhost:5173/about about-page
  node scripts/take-screenshot.js http://localhost:5173 home 1920 1080
  node scripts/take-screenshot.js http://localhost:5173 mobile 375 667

Output:
  Screenshots are saved to: ./screenshots/
  `);
  process.exit(0);
}

const [url, outputName, width, height] = args;

takeScreenshot(url, outputName, width, height)
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
