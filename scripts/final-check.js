#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const DIR = path.join(process.cwd(), 'screenshots', 'final');

const PAGES = [
  '/', '/features', '/dns', '/enterprise', '/download', '/pricing',
  '/free-and-opensource', '/security', '/public', '/homelab',
  '/cloud', '/iot', '/office', '/lan-over-wan', '/personal-vpn', '/technical',
];

async function run() {
  if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const vp of [
    { name: 'mobile', w: 375, h: 812 },
    { name: 'tablet', w: 768, h: 1024 },
  ]) {
    await page.setViewport({ width: vp.w, height: vp.h });
    for (const p of PAGES) {
      const name = p === '/' ? 'home' : p.slice(1);
      await page.goto(`${BASE_URL}${p}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await new Promise(r => setTimeout(r, 500));

      // Scroll all the way down to trigger animations, then back up
      const totalHeight = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < totalHeight; y += vp.h * 0.5) {
        await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
        await new Promise(r => setTimeout(r, 150));
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 300));

      await page.screenshot({
        path: path.join(DIR, `${name}-${vp.name}.png`),
        fullPage: true,
      });
    }
  }
  await browser.close();
  console.log('Done!');
}
run();
