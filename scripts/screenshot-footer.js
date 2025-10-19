#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots');

async function screenshotFooter() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('📸 Loading page...');
    await page.goto('http://localhost:5173/cloud', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get page height and footer position
    const pageInfo = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      const lastSection = document.querySelector('main > div > div:last-child section:last-child');
      return {
        pageHeight: document.body.scrollHeight,
        footerTop: footer ? footer.offsetTop : 0,
        footerClasses: footer ? footer.className : '',
        lastSectionBottom: lastSection ? lastSection.offsetTop + lastSection.offsetHeight : 0,
        lastSectionClasses: lastSection ? lastSection.className : ''
      };
    });

    console.log('Page info:', pageInfo);

    // Scroll to near the footer
    const scrollPosition = pageInfo.footerTop - 400;
    await page.evaluate((y) => window.scrollTo(0, y), scrollPosition);
    await new Promise(resolve => setTimeout(resolve, 500));

    const filepath = join(screenshotsDir, 'cloud-footer-area.png');
    await page.screenshot({
      path: filepath,
      fullPage: false,
    });

    console.log('✅ Screenshot saved:', filepath);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

screenshotFooter();
