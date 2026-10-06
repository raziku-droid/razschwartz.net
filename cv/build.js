// Rebuilds Raz_Schwartz_CV.pdf from cv/cv.html.
// Usage (from the repo root): node cv/build.js   (needs: npm i -g playwright)
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'cv.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(__dirname, '..', 'Raz_Schwartz_CV.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
})();
