#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(dirname(__dirname), 'screenshots', 'nested-borders');

import { existsSync, mkdirSync } from 'fs';
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

const pages = [
  { name: 'home', path: '/' },
  { name: 'cloud', path: '/cloud' },
  { name: 'features', path: '/features' },
  { name: 'dns', path: '/dns' },
  { name: 'enterprise', path: '/enterprise' },
  { name: 'technical', path: '/technical' },
  { name: 'download', path: '/download' },
  { name: 'pricing', path: '/pricing' },
  { name: 'free-opensource', path: '/free-and-opensource' },
];

async function findNestedBorders() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];

  try {
    for (const pageInfo of pages) {
      console.log(`\n📄 Analyzing: ${pageInfo.name} (${pageInfo.path})`);

      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });

      try {
        await page.goto(`http://localhost:5173${pageInfo.path}`, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Find nested elements with borders inside gray sections
        const analysis = await page.evaluate(() => {
          const sections = document.querySelectorAll('section');
          const findings = [];

          sections.forEach((section, idx) => {
            const bgColor = window.getComputedStyle(section).backgroundColor;

            // Check if it's a gray background
            if (bgColor === 'rgb(18, 18, 18)' || bgColor === 'rgba(18, 18, 18, 1)') {
              // Find all elements with borders inside this section
              const allElements = section.querySelectorAll('*');
              const nestedBorders = [];

              allElements.forEach(el => {
                const style = window.getComputedStyle(el);
                const hasBorder = style.borderWidth && style.borderWidth !== '0px';

                if (hasBorder) {
                  // Get parent chain to understand nesting
                  let parent = el.parentElement;
                  let nestingLevel = 0;
                  while (parent && parent !== section) {
                    nestingLevel++;
                    parent = parent.parentElement;
                  }

                  nestedBorders.push({
                    tag: el.tagName.toLowerCase(),
                    classes: el.className,
                    borderWidth: style.borderWidth,
                    borderColor: style.borderColor,
                    nestingLevel: nestingLevel
                  });
                }
              });

              if (nestedBorders.length > 0) {
                findings.push({
                  index: idx,
                  top: section.offsetTop,
                  heading: section.querySelector('h1, h2, h3')?.textContent?.trim() || 'No heading',
                  nestedBorders: nestedBorders
                });
              }
            }
          });

          return findings;
        });

        if (analysis.length > 0) {
          console.log(`  ✓ Found ${analysis.length} gray section(s) with nested borders:`);
          analysis.forEach(s => {
            console.log(`    - Section ${s.index}: "${s.heading}"`);
            console.log(`      Nested elements with borders: ${s.nestedBorders.length}`);
          });

          // Take screenshots
          for (const section of analysis) {
            await page.evaluate((y) => window.scrollTo(0, y), section.top);
            await new Promise(resolve => setTimeout(resolve, 500));

            const filepath = join(screenshotsDir, `${pageInfo.name}-section-${section.index}.png`);
            await page.screenshot({
              path: filepath,
              fullPage: false,
            });
          }

          results.push({
            page: pageInfo.name,
            path: pageInfo.path,
            sections: analysis
          });
        } else {
          console.log(`  ✓ No nested borders found in gray sections`);
        }

      } catch (error) {
        console.log(`  ✗ Error: ${error.message}`);
      }

      await page.close();
    }

    // Summary
    console.log('\n\n📊 SUMMARY\n');
    console.log('Pages with nested borders in gray sections:\n');

    if (results.length === 0) {
      console.log('  None found!');
    } else {
      results.forEach(r => {
        console.log(`${r.page} (${r.path}):`);
        r.sections.forEach(s => {
          console.log(`  - Section ${s.index}: "${s.heading}" (${s.nestedBorders.length} bordered elements)`);
        });
        console.log('');
      });
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

findNestedBorders();
