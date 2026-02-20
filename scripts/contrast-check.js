#!/usr/bin/env node
import puppeteer from 'puppeteer';
import path from 'path';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const DIR = path.join(process.cwd(), 'screenshots', 'contrast');
if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 812 });

const pages = [
  { path: '/', name: 'home' },
  { path: '/features', name: 'features' },
  { path: '/security', name: 'security' },
];

for (const pg of pages) {
  await page.goto(`http://localhost:5173${pg.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 500));
  // Scroll past hero to see content sections
  await page.evaluate(() => window.scrollTo(0, 900));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(DIR, `${pg.name}-content.png`), fullPage: false });
}

await browser.close();
console.log('Done!');
