#!/usr/bin/env node

/**
 * Screenshot each FeatureShowcase variation individually
 */

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots', 'variations');

// Ensure screenshots directory exists
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

async function screenshotVariations() {
  let browser;

  try {
    console.log('\n🚀 Starting variation screenshots...\n');

    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('🌐 Loading DNS page...');
    await page.goto('http://127.0.0.1:5173/dns', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait for page to fully load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Define the variations we want to screenshot with their CSS selectors
    const variations = [
      { name: '01-original', comment: 'DNS Server Side Configuration' },
      { name: '02-original', comment: 'DNS Device Side Configuration' },
      { name: '03-card', comment: 'Card Style Variation' },
      { name: '04-bento', comment: 'Bento Style Variation' },
      { name: '05-floating', comment: 'Floating Style Variation' },
      { name: '06-split', comment: 'Split Panel Style Variation' },
      { name: '07-magazine', comment: 'Magazine Style Variation' },
      { name: '08-spotlight', comment: 'Spotlight Style Variation' },
      { name: '09-overlay-left', comment: 'Overlay Left Style Variation' },
      { name: '10-overlay-bottom', comment: 'Overlay Bottom Style Variation' },
      { name: '11-overlay-corner', comment: 'Overlay Corner Style Variation' },
      { name: '12-overlay-diagonal', comment: 'Overlay Diagonal Style Variation' },
      { name: '13-overlay-center', comment: 'Overlay Center Style Variation' },
      { name: '14-overlay-sidepanel', comment: 'Overlay Side Panel Style Variation' },
    ];

    // Get all ContentSection elements that contain FeatureShowcase components
    const sections = await page.$$('section');

    // Skip hero and feature grid sections (first 2), start from index 2
    let variationIndex = 0;

    for (let i = 2; i < sections.length && variationIndex < variations.length; i++) {
      const section = sections[i];
      const variation = variations[variationIndex];

      try {
        console.log(`📸 Capturing: ${variation.comment}`);

        // Scroll to section
        await section.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
        await new Promise(resolve => setTimeout(resolve, 500));

        // Take screenshot of the section
        const filepath = join(screenshotsDir, `variation-${variation.name}.png`);
        await section.screenshot({
          path: filepath,
        });

        console.log(`✅ Saved: variation-${variation.name}.png`);
        variationIndex++;

      } catch (error) {
        console.error(`❌ Error capturing ${variation.name}:`, error.message);
      }
    }

    console.log('\n✨ All variation screenshots captured!\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

screenshotVariations()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
