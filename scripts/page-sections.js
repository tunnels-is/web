#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const DIR = path.join(process.cwd(), 'screenshots', 'page-check');

const pagesToCheck = [
  { path: '/pricing', name: 'pricing' },
  { path: '/personal-vpn', name: 'personal-vpn' },
  { path: '/homelab', name: 'homelab' },
  { path: '/security', name: 'security' },
  { path: '/cloud', name: 'cloud' },
  { path: '/iot', name: 'iot' },
];

async function run() {
  if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const vp of [{ name: 'mobile', w: 375, h: 812 }, { name: 'tablet', w: 768, h: 1024 }]) {
    await page.setViewport({ width: vp.w, height: vp.h });
    for (const pg of pagesToCheck) {
      await page.goto(`${BASE_URL}${pg.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await new Promise(r => setTimeout(r, 800));
      // Scroll slowly to trigger all animations
      const totalHeight = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < totalHeight; y += vp.h * 0.5) {
        await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
        await new Promise(r => setTimeout(r, 200));
      }
      // Go back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 300));

      // Take sections
      let i = 0;
      for (let y = 0; y < totalHeight; y += vp.h * 0.8) {
        await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
        await new Promise(r => setTimeout(r, 300));
        await page.screenshot({
          path: path.join(DIR, `${pg.name}-${vp.name}-${i}.png`),
          fullPage: false,
        });
        i++;
      }
    }
  }
  await browser.close();
  console.log('Done!', DIR);
}
run();
