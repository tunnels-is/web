#!/usr/bin/env node

import puppeteer from 'puppeteer';

async function debugFooter() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto('http://localhost:5173/cloud', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get detailed info about the page structure near footer
    const info = await page.evaluate(() => {
      const main = document.querySelector('main');
      const mainChild = main?.firstElementChild;
      const sections = document.querySelectorAll('section');
      const lastSection = sections[sections.length - 1];
      const footer = document.querySelector('footer');
      const body = document.body;

      const getComputedBg = (element) => {
        if (!element) return 'N/A';
        const style = window.getComputedStyle(element);
        return style.backgroundColor;
      };

      return {
        body: {
          bg: getComputedBg(body),
          height: body.scrollHeight
        },
        main: {
          exists: !!main,
          bg: getComputedBg(main),
          paddingBottom: main ? window.getComputedStyle(main).paddingBottom : 'N/A'
        },
        mainChild: {
          exists: !!mainChild,
          classes: mainChild?.className || 'N/A',
          bg: getComputedBg(mainChild),
          paddingBottom: mainChild ? window.getComputedStyle(mainChild).paddingBottom : 'N/A',
          height: mainChild?.offsetHeight || 0
        },
        lastSection: {
          exists: !!lastSection,
          classes: lastSection?.className || 'N/A',
          bg: getComputedBg(lastSection),
          top: lastSection?.offsetTop || 0,
          height: lastSection?.offsetHeight || 0,
          bottom: lastSection ? lastSection.offsetTop + lastSection.offsetHeight : 0
        },
        footer: {
          exists: !!footer,
          classes: footer?.className || 'N/A',
          bg: getComputedBg(footer),
          top: footer?.offsetTop || 0,
          height: footer?.offsetHeight || 0
        },
        gap: footer && lastSection ? footer.offsetTop - (lastSection.offsetTop + lastSection.offsetHeight) : 0
      };
    });

    console.log('\n📊 Page Structure Analysis:\n');
    console.log('Body background:', info.body.bg);
    console.log('Body height:', info.body.height);
    console.log('\nMain element:');
    console.log('  - Exists:', info.main.exists);
    console.log('  - Background:', info.main.bg);
    console.log('  - Padding bottom:', info.main.paddingBottom);
    console.log('\nMain child (page wrapper):');
    console.log('  - Classes:', info.mainChild.classes);
    console.log('  - Background:', info.mainChild.bg);
    console.log('  - Padding bottom:', info.mainChild.paddingBottom);
    console.log('  - Height:', info.mainChild.height);
    console.log('\nLast section:');
    console.log('  - Classes:', info.lastSection.classes);
    console.log('  - Background:', info.lastSection.bg);
    console.log('  - Bottom position:', info.lastSection.bottom);
    console.log('\nFooter:');
    console.log('  - Classes:', info.footer.classes);
    console.log('  - Background:', info.footer.bg);
    console.log('  - Top position:', info.footer.top);
    console.log('\n❗ Gap between last section and footer:', info.gap, 'pixels');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

debugFooter();
