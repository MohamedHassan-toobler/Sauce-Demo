import { test as BaseTest, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { HomePage } from "../pages/HomePage";
import { cartPage } from "../pages/cartPage";
import { checkoutPage } from "../pages/checkoutPage";
export const test = BaseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },
  homePage: async ({ loginApp }, use) => {
    await use(new HomePage(loginApp));
  },

  cartPage: async ({ page }, use) => {
    await use(new cartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new checkoutPage(page));
  },
  loginApp: async ({ loginPage }, use) => {
    await loginPage.navigate();
    await loginPage.login();
    await use(loginPage.page);
  },
  launchApp: async ({ page }, use) => {
    await page.goto(process.env.BASE_URL);
    await use(page);
  },
});
export { expect };
