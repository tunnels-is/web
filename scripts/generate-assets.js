#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function generateOGImage(browser) {
  console.log('Generating OG image (1200x630)...');
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          width: 1200px;
          height: 630px;
          background: #06090f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', system-ui, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .icon {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon svg {
          width: 36px;
          height: 36px;
        }

        .brand-name {
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-size: 72px;
          font-weight: 700;
          letter-spacing: -2px;
          line-height: 1;
        }

        .brand-t { color: #3b82f6; }
        .brand-rest { color: #edf2f7; }

        .tagline {
          font-size: 24px;
          color: #a3b3cc;
          font-weight: 400;
          letter-spacing: -0.3px;
          max-width: 600px;
        }

        .domain {
          font-size: 16px;
          color: #6b7a8d;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 8px;
        }

        .border-line {
          position: absolute;
          left: 40px;
          right: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
        }
        .border-top { top: 40px; }
        .border-bottom { bottom: 40px; }
      </style>
    </head>
    <body>
      <div class="grid-bg"></div>
      <div class="glow"></div>
      <div class="border-line border-top"></div>
      <div class="border-line border-bottom"></div>
      <div class="content">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
            <path d="M12 2L12 22M2 12L22 12" opacity="0.7"/>
            <circle cx="12" cy="12" r="3" fill="white" stroke="none"/>
          </svg>
        </div>
        <div class="brand-name">
          <span class="brand-t">T</span><span class="brand-rest">unnels</span>
        </div>
        <div class="tagline">Modern VPN, LAN & Networking</div>
        <div class="domain">tunnels.is</div>
      </div>
    </body>
    </html>
  `, { waitUntil: 'networkidle0' });

  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 500));

  const screenshot = await page.screenshot({ type: 'png' });
  await writeFile(path.join(PUBLIC_DIR, 'og-image.png'), screenshot);
  console.log('  -> public/og-image.png');

  await page.close();
}

async function generateFavicons(browser) {
  console.log('Generating PNG favicons...');

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    const page = await browser.newPage();
    await page.setViewport({ width: size, height: size });

    const isApple = name === 'apple-touch-icon.png';
    const fontSize = Math.round(size * 0.65);
    const yOffset = Math.round(size * 0.75);
    const rx = isApple ? Math.round(size * 0.2) : Math.round(size * 0.19);

    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; }
          body {
            width: ${size}px;
            height: ${size}px;
            overflow: hidden;
          }
          svg { display: block; }
        </style>
      </head>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
          <rect width="${size}" height="${size}" rx="${rx}" fill="#06090f"/>
          <text x="${size/2}" y="${yOffset}" text-anchor="middle"
                font-family="system-ui, -apple-system, sans-serif"
                font-weight="700" font-size="${fontSize}" fill="#3b82f6">T</text>
        </svg>
      </body>
      </html>
    `);

    const screenshot = await page.screenshot({ type: 'png', omitBackground: !isApple });
    await writeFile(path.join(PUBLIC_DIR, name), screenshot);
    console.log(`  -> public/${name}`);
    await page.close();
  }
}

async function main() {
  await ensureDir(PUBLIC_DIR);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    await generateOGImage(browser);
    await generateFavicons(browser);
    console.log('\nAll assets generated successfully.');
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
