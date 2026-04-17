import { test, expect } from "../fixtures/BaseTest";
import { loginPage } from "../pages/loginPage";
let login;
test.beforeEach(async ({ launchApp }) => {
  login = new loginPage(launchApp);
});
test("Login with valid credentials", async ({ loginApp }) => {
  await expect(loginApp).toHaveURL(/inventory/);
});
test("Login using invalid credentials", async () => {
  await login.invalidLogin("new", "test");
  await expect(login.credError).toContainText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
test("Login without username", async () => {
  await login.withoutUserName("secret_sauce");
  await expect(login.credError).toContainText(
    "Epic sadface: Username is required",
  );
});
test("Login without password", async () => {
  await login.withoutPassword("standard_user");
  await expect(login.credError).toContainText(
    "Epic sadface: Password is required",
  );
});
