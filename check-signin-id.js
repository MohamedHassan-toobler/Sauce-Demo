const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com');

  // Try to find the 'Sign In' button by text or role
  // On Sauce Demo, the login button is 'Login'
  const button = await page.$('input[type="submit"]');
  const id = await button.getAttribute('id');
  console.log('The ID of the Sign In button is:', id);

  await browser.close();
})();
