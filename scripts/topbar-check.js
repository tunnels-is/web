#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'screenshots', 'topbar');
if (!existsSync(DIR)) await mkdir(DIR, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

// Desktop - to see the social icons
await page.setViewport({ width: 1280, height: 800 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 500));
// Scroll to trigger glass effect
await page.evaluate(() => window.scrollTo(0, 100));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(DIR, 'topbar-desktop.png'), fullPage: false, clip: { x: 0, y: 0, width: 1280, height: 60 } });

// Also full viewport for context
await page.screenshot({ path: path.join(DIR, 'topbar-desktop-full.png'), fullPage: false });

// Mobile
await page.setViewport({ width: 375, height: 812 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(DIR, 'topbar-mobile.png'), fullPage: false });

await browser.close();
console.log('Done!');
