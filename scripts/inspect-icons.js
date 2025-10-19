const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function inspectIcons() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const pages = [
    { name: 'home', url: 'http://localhost:5173/' },
    { name: 'homelab', url: 'http://localhost:5173/homelab' },
    { name: 'personal-vpn', url: 'http://localhost:5173/personal-vpn' },
    { name: 'cloud', url: 'http://localhost:5173/cloud' },
    { name: 'enterprise', url: 'http://localhost:5173/enterprise' },
    { name: 'free-and-opensource', url: 'http://localhost:5173/free-and-opensource' }
  ];

  const screenshotsDir = '/home/sveinn/code/website-new/icon-screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  for (const pageInfo of pages) {
    try {
      console.log(`\n=== Inspecting ${pageInfo.name} ===`);
      await page.goto(pageInfo.url, { waitUntil: 'networkidle0', timeout: 10000 });
      await page.waitForTimeout(1000);

      // Take full page screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${pageInfo.name}-full.png`),
        fullPage: true
      });

      // Find all icon containers and measure them
      const iconInfo = await page.evaluate(() => {
        const icons = [];

        // Find SVG icons
        const svgs = document.querySelectorAll('svg');
        svgs.forEach((svg, index) => {
          const rect = svg.getBoundingClientRect();
          const parent = svg.closest('div');
          const parentRect = parent ? parent.getBoundingClientRect() : null;

          icons.push({
            type: 'svg',
            index,
            width: rect.width,
            height: rect.height,
            parentWidth: parentRect ? parentRect.width : null,
            parentHeight: parentRect ? parentRect.height : null,
            classes: svg.className.baseVal || svg.getAttribute('class') || '',
            parentClasses: parent ? parent.className : ''
          });
        });

        return icons;
      });

      console.log(`Found ${iconInfo.length} icons on ${pageInfo.name}`);

      // Group icons by size
      const sizeGroups = {};
      iconInfo.forEach(icon => {
        const size = `${Math.round(icon.width)}x${Math.round(icon.height)}`;
        if (!sizeGroups[size]) {
          sizeGroups[size] = [];
        }
        sizeGroups[size].push(icon);
      });

      console.log('Icon sizes:');
      Object.keys(sizeGroups).sort().forEach(size => {
        console.log(`  ${size}: ${sizeGroups[size].length} icons`);
      });

      // Save detailed info
      fs.writeFileSync(
        path.join(screenshotsDir, `${pageInfo.name}-icons.json`),
        JSON.stringify({ iconInfo, sizeGroups }, null, 2)
      );

    } catch (error) {
      console.error(`Error inspecting ${pageInfo.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✓ Inspection complete! Check icon-screenshots/ directory');
}

inspectIcons().catch(console.error);
