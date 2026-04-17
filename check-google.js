const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://www.google.com");

  // Find the search button and get its text
  const searchButton = await page
    .locator('input[value="Google Search"]')
    .first();
  const buttonText = await searchButton.getAttribute("value");

  console.log("Search button text:", buttonText);

  await browser.close();
})();
