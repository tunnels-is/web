import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Taking screenshots to verify icon fixes...');

  const pages = [
    { name: 'Home', url: 'http://localhost:5173/' },
    { name: 'PersonalVPN', url: 'http://localhost:5173/personal-vpn' },
    { name: 'Homelab', url: 'http://localhost:5173/homelab' }
  ];

  for (const pageInfo of pages) {
    console.log(`Capturing ${pageInfo.name}...`);
    try {
      await page.goto(pageInfo.url, { waitUntil: 'networkidle0', timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.screenshot({
        path: `screenshots/${pageInfo.name}-after.png`,
        fullPage: false
      });
      console.log(`✓ ${pageInfo.name} captured`);
    } catch (error) {
      console.error(`✗ Error capturing ${pageInfo.name}:`, error.message);
    }
  }

  console.log('\nScreenshots saved to screenshots/ directory');
  await browser.close();
})();
