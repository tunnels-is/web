#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots');

async function screenshotFooterTransition() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto('http://localhost:5173/cloud', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get footer position
    const footerTop = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      return footer ? footer.offsetTop : 0;
    });

    // Scroll to show the transition between last section and footer
    // Position so footer is in middle/bottom of viewport
    await page.evaluate((y) => window.scrollTo(0, y - 540), footerTop);
    await new Promise(resolve => setTimeout(resolve, 500));

    const filepath = join(screenshotsDir, 'cloud-footer-transition.png');
    await page.screenshot({
      path: filepath,
      fullPage: false,
    });

    console.log('✅ Screenshot saved showing footer transition');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

screenshotFooterTransition();
