#!/usr/bin/env node
import puppeteer from 'puppeteer';
import path from 'path';

const DIR = path.join(process.cwd(), 'screenshots', 'topbar');
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

await page.setViewport({ width: 1280, height: 800 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 500));
await page.evaluate(() => window.scrollTo(0, 50));
await new Promise(r => setTimeout(r, 500));

// Get the nav element bounds
const navBounds = await page.evaluate(() => {
  const nav = document.querySelector('nav');
  const rect = nav.getBoundingClientRect();
  return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
});
console.log('Nav bounds:', navBounds);

await page.screenshot({
  path: path.join(DIR, 'navbar-desktop.png'),
  clip: { x: 0, y: 0, width: 1280, height: Math.max(navBounds.height + 10, 80) }
});

await browser.close();
console.log('Done!');
