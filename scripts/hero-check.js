#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'screenshots', 'hero');
if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

// Mobile
await page.setViewport({ width: 375, height: 812 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: path.join(DIR, 'home-hero-mobile.png'), fullPage: false });

// Small mobile
await page.setViewport({ width: 375, height: 667 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: path.join(DIR, 'home-hero-mobile-small.png'), fullPage: false });

// Tablet
await page.setViewport({ width: 768, height: 1024 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: path.join(DIR, 'home-hero-tablet.png'), fullPage: false });

await browser.close();
console.log('Done!');
