#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const DIR = path.join(process.cwd(), 'screenshots');
const pagePath = process.argv[2] || '/';
const scrollY = parseInt(process.argv[3]) || 0;
const name = process.argv[4] || 'scroll';
async function run() {
  if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(`${BASE_URL}${pagePath}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 500));
  for (let y = 0; y <= scrollY; y += 400) { await page.evaluate(s => window.scrollTo(0, s), y); await new Promise(r => setTimeout(r, 150)); }
  await page.evaluate(s => window.scrollTo(0, s), scrollY);
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(DIR, `${name}.png`), fullPage: false });
  await browser.close();
}
run().catch(e => { console.error(e); process.exit(1); });
