#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const DIR = path.join(process.cwd(), 'screenshots', 'sections');

async function run() {
  if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  // Check features page sections
  await page.goto(`${BASE_URL}/features`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));

  // Scroll down to trigger animations and take viewport screenshots at intervals
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = 812;
  let i = 0;

  for (let y = 0; y < totalHeight; y += viewportHeight * 0.7) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(DIR, `features-mobile-section-${i}.png`),
      fullPage: false,
    });
    i++;
  }

  // Also do enterprise page
  await page.goto(`${BASE_URL}/enterprise`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  const totalHeight2 = await page.evaluate(() => document.body.scrollHeight);
  i = 0;
  for (let y = 0; y < totalHeight2; y += viewportHeight * 0.7) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(DIR, `enterprise-mobile-section-${i}.png`),
      fullPage: false,
    });
    i++;
  }

  // Also check dns
  await page.goto(`${BASE_URL}/dns`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  const totalHeight3 = await page.evaluate(() => document.body.scrollHeight);
  i = 0;
  for (let y = 0; y < totalHeight3; y += viewportHeight * 0.7) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(DIR, `dns-mobile-section-${i}.png`),
      fullPage: false,
    });
    i++;
  }

  await browser.close();
  console.log('Done! Screenshots in', DIR);
}
run();
