const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Opening https://google.com...');
  await page.goto('https://google.com');
  
  console.log('✅ Successfully opened Google.com');
  console.log('Current URL:', page.url());
  console.log('Page title:', await page.title());
  
  await browser.close();
})();
