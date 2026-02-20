#!/usr/bin/env node
import puppeteer from 'puppeteer';
import path from 'path';

const DIR = path.join(process.cwd(), 'screenshots', 'contrast');
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 812 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(DIR, 'home-hero.png'), fullPage: false });
await browser.close();
console.log('Done!');
