class Menus {
  constructor(page) {
    this.page = page;
    this.menuItems = page.getByRole("button", { name: "Open Menu" });
    this.closeButton = page.getByRole("button", { name: "Close Menu" });
    this.aboutOption = page.locator("#about_sidebar_link");
    this.logOutOption = page.locator("#logout_sidebar_link");
  }
  async openMenu() {
    await this.menuItems.click();
  }
  async closeMenu() {
    await this.closeButton.click();
  }
  async aboutMenu() {
    await this.aboutOption.click();
  }
  async logOut() {
    await this.logOutOption.click();
  }
}
export { Menus };
