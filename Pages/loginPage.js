class loginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.credError = page.locator("h3[data-test='error']");
  }
  async navigate() {
    this.page.goto("/");
  }
  async login(
    username = process.env.APP_USERNAME,
    password = process.env.APP_PASSWORD,
  ) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
  async invalidLogin(invalidUserName, invalidPassword) {
    await this.userName.fill(invalidUserName);
    await this.password.fill(invalidPassword);
    await this.loginButton.click();
  }
  async withoutUserName(invalidPassword) {
    await this.password.fill(invalidPassword);
    await this.loginButton.click();
  }
  async withoutPassword(invalidUserName) {
    await this.userName.fill(invalidUserName);
    await this.loginButton.click();
  }
}
export { loginPage };
