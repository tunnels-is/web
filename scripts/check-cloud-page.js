#!/usr/bin/env node

import puppeteer from 'puppeteer';

async function checkPage() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    const errors = [];
    const warnings = [];

    // Capture console logs
    page.on('console', msg => {
      const type = msg.type();
      if (type === 'error') {
        errors.push(msg.text());
      } else if (type === 'warning') {
        warnings.push(msg.text());
      }
    });

    // Capture page errors
    page.on('pageerror', error => {
      errors.push(error.message);
    });

    await page.goto('http://localhost:5173/cloud', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get page info
    const title = await page.title();
    const sections = await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      return Array.from(sections).map((s, i) => ({
        index: i,
        height: s.offsetHeight,
        classes: s.className
      }));
    });

    console.log('\n✅ Page loaded successfully!');
    console.log(`📄 Title: ${title}`);
    console.log(`📦 Sections found: ${sections.length}`);
    sections.forEach(s => {
      console.log(`   Section ${s.index + 1}: ${s.height}px tall`);
    });

    if (errors.length > 0) {
      console.log('\n❌ Errors found:');
      errors.forEach(e => console.log('  -', e));
    } else {
      console.log('\n✅ No errors detected!');
    }

    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings found:');
      warnings.forEach(w => console.log('  -', w));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

checkPage();
