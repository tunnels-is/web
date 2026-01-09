#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const args = process.argv.slice(2);

// Parse arguments
const url = args[0] || 'http://localhost:5173';
const name = args[1] || 'screenshot';
const width = parseInt(args[2]) || 1280;
const height = parseInt(args[3]) || 800;

// Ensure screenshots directory exists
const screenshotsDir = path.join(process.cwd(), 'screenshots');
if (!existsSync(screenshotsDir)) {
  await mkdir(screenshotsDir, { recursive: true });
}

async function takeScreenshot() {
  console.log(`Taking screenshot of ${url}`);
  console.log(`Viewport: ${width}x${height}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height });

    // Navigate and wait for network to be idle
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait a bit for animations to settle
    await new Promise(resolve => setTimeout(resolve, 500));

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = `${name}-${width}x${height}-${timestamp}.png`;
    const filepath = path.join(screenshotsDir, filename);

    await page.screenshot({
      path: filepath,
      fullPage: false
    });

    console.log(`Screenshot saved: ${filepath}`);
    return filepath;
  } finally {
    await browser.close();
  }
}

takeScreenshot().catch(err => {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
});
