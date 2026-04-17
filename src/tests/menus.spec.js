import { test, expect } from "../Fixtures/BaseTest";
import { Menus } from "../Pages/Menus";
let menu;
test.beforeEach(async ({ loginApp }) => {
  menu = new Menus(loginApp);
  await menu.openMenu();
});
test("Verify the sidebar close button", async () => {
  await menu.closeMenu();
});
test("Verify the about menu is working", async ({ loginApp }) => {
  await menu.aboutMenu();
  await expect(loginApp).toHaveURL(/saucelabs\.com/);
});
test("Logout the Application", async ({ loginApp }) => {
  await menu.logOut();
  await expect(loginApp).toHaveURL(process.env.BASE_URL);
});
