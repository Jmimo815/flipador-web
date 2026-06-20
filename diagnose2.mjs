import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => {
    errors.push('PAGEERROR: ' + err.message);
  });
  page.on('response', resp => {
    if (resp.status() >= 400) {
      errors.push(`HTTP ${resp.status()}: ${resp.url()}`);
    }
  });
  await page.goto('https://flipadoor.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: '/c/FLIP∀DOOR/flipador-web/screenshot-live.png', fullPage: true });
  console.log('Screenshot saved. Total errors:', errors.length);
  errors.forEach((e, i) => console.log(`[${i}] ${e}`));
  await browser.close();
})();
