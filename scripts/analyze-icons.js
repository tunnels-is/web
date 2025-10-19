import puppeteer from 'puppeteer';
import fs from 'fs';

const pages = [
  { name: 'Home', url: 'http://localhost:5173/' },
  { name: 'Features', url: 'http://localhost:5173/features' },
  { name: 'DNS', url: 'http://localhost:5173/dns' },
  { name: 'Enterprise', url: 'http://localhost:5173/enterprise' },
  { name: 'Technical', url: 'http://localhost:5173/technical' },
  { name: 'Download', url: 'http://localhost:5173/download' },
  { name: 'Pricing', url: 'http://localhost:5173/pricing' },
  { name: 'FreeAndOpenSource', url: 'http://localhost:5173/free-and-opensource' },
  { name: 'CloudBaremetal', url: 'http://localhost:5173/cloud' },
  { name: 'Homelab', url: 'http://localhost:5173/homelab' },
  { name: 'PersonalVPN', url: 'http://localhost:5173/personal-vpn' }
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const report = [];

  for (const pageInfo of pages) {
    console.log(`Analyzing ${pageInfo.name}...`);

    try {
      await page.goto(pageInfo.url, { waitUntil: 'networkidle0', timeout: 10000 });

      // Wait a bit for any animations
      await page.waitForTimeout(1000);

      // Analyze icons on the page
      const iconAnalysis = await page.evaluate(() => {
        const icons = [];

        // Find all SVG elements
        const svgs = document.querySelectorAll('svg');

        svgs.forEach((svg, index) => {
          const rect = svg.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(svg);
          const parent = svg.parentElement;
          const parentStyle = parent ? window.getComputedStyle(parent) : null;

          // Get the actual color
          const color = computedStyle.color;
          const fill = computedStyle.fill;
          const stroke = computedStyle.stroke;

          icons.push({
            index,
            width: rect.width,
            height: rect.height,
            color: color,
            fill: fill,
            stroke: stroke,
            viewBox: svg.getAttribute('viewBox'),
            className: svg.className.baseVal || svg.className,
            parentClassName: parent ? (parent.className.baseVal || parent.className) : '',
            isVisible: rect.width > 0 && rect.height > 0
          });
        });

        return icons;
      });

      report.push({
        page: pageInfo.name,
        url: pageInfo.url,
        iconCount: iconAnalysis.length,
        icons: iconAnalysis
      });

      // Take screenshot
      await page.screenshot({
        path: `screenshots/${pageInfo.name}.png`,
        fullPage: true
      });

    } catch (error) {
      console.error(`Error analyzing ${pageInfo.name}:`, error.message);
      report.push({
        page: pageInfo.name,
        url: pageInfo.url,
        error: error.message
      });
    }
  }

  // Save the report
  fs.writeFileSync('icon-analysis-report.json', JSON.stringify(report, null, 2));

  console.log('\nAnalysis complete! Check icon-analysis-report.json for details.');
  console.log('Screenshots saved to screenshots/ directory.');

  await browser.close();
})();
