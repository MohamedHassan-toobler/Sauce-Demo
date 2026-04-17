import { test as BaseTest, expect } from "@playwright/test";
import { loginPage } from "../Pages/loginPage";
import { HomePage } from "../Pages/HomePage";
import { cartPage } from "../Pages/cartPage";
import { checkoutPage } from "../Pages/checkoutPage";
export const test = BaseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
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
    await page.goto("/");
    await use(page);
  },
});
export { expect };
