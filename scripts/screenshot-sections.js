#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots');

async function screenshotSections() {
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

    // Get section positions
    const sections = await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      return Array.from(sections).map((s, i) => ({
        index: i,
        top: s.offsetTop,
        height: s.offsetHeight
      }));
    });

    console.log(`📦 Found ${sections.length} sections`);

    // Take a few key screenshots
    const positions = [
      { name: 'hero', y: 0 },
      { name: 'benefits', y: sections[1]?.top || 1000 },
      { name: 'architecture', y: sections[2]?.top || 2000 },
      { name: 'use-cases', y: sections[3]?.top || 3000 },
      { name: 'deployment', y: sections[5]?.top || 5000 },
    ];

    for (const pos of positions) {
      console.log(`📸 Capturing ${pos.name} section...`);
      await page.evaluate((y) => window.scrollTo(0, y), pos.y);
      await new Promise(resolve => setTimeout(resolve, 500));

      const filepath = join(screenshotsDir, `cloud-${pos.name}.png`);
      await page.screenshot({
        path: filepath,
        fullPage: false,
      });
      console.log(`✅ Saved ${pos.name} screenshot`);
    }

    console.log('\n✅ All screenshots captured!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

screenshotSections();
