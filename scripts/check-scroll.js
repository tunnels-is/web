#!/usr/bin/env node
import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:5173';
const PAGES = [
  '/', '/features', '/dns', '/enterprise', '/download', '/pricing',
  '/free-and-opensource', '/security', '/public', '/homelab',
  '/cloud', '/iot', '/office', '/lan-over-wan', '/personal-vpn', '/technical',
];

async function check() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  for (const p of PAGES) {
    await page.goto(`${BASE_URL}${p}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 500));
    const scroll = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasHScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    }));
    if (scroll.hasHScroll) {
      console.log(`❌ ${p}: scrollWidth=${scroll.scrollWidth} > clientWidth=${scroll.clientWidth}`);
    } else {
      console.log(`✓ ${p}: no horizontal scroll`);
    }
  }
  await browser.close();
}
check();
