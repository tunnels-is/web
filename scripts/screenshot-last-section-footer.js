#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots');

async function screenshot() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 2000 }); // Taller viewport

    await page.goto('http://localhost:5173/cloud', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get positions
    const info = await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      const lastSection = sections[sections.length - 1];
      const footer = document.querySelector('footer');

      return {
        lastSectionTop: lastSection ? lastSection.offsetTop : 0,
        lastSectionHeight: lastSection ? lastSection.offsetHeight : 0,
        footerTop: footer ? footer.offsetTop : 0,
        footerHeight: footer ? footer.offsetHeight : 0
      };
    });

    console.log('Last section:', info.lastSectionTop, 'height:', info.lastSectionHeight);
    console.log('Footer:', info.footerTop, 'height:', info.footerHeight);

    // Scroll to show bottom part of last section and beginning of footer
    const scrollPos = info.lastSectionTop + info.lastSectionHeight - 800;
    await page.evaluate((y) => window.scrollTo(0, y), scrollPos);
    await new Promise(resolve => setTimeout(resolve, 500));

    const filepath = join(screenshotsDir, 'cloud-last-section-and-footer.png');
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

screenshot();
