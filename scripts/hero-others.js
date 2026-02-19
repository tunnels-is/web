#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'screenshots', 'hero');
if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

const pages = [
  { path: '/features', name: 'features' },
  { path: '/dns', name: 'dns' },
  { path: '/enterprise', name: 'enterprise' },
  { path: '/pricing', name: 'pricing' },
  { path: '/security', name: 'security' },
  { path: '/personal-vpn', name: 'personal-vpn' },
];

for (const vp of [{ name: 'mobile', w: 375, h: 812 }, { name: 'tablet', w: 768, h: 1024 }]) {
  await page.setViewport({ width: vp.w, height: vp.h });
  for (const pg of pages) {
    await page.goto(`http://localhost:5173${pg.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(DIR, `${pg.name}-${vp.name}.png`), fullPage: false });
  }
}
await browser.close();
console.log('Done!');
