class cartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator("#checkout");
    this.removeButton = page.getByRole("button", { name: "Remove" }).first();
    this.continueShippingButton = page.getByRole("button", {
      name: /Continue Shopping/i,
    });
  }
  async removeFromCart() {
    await this.removeButton.click();
  }
  async continueShipping() {
    await this.continueShippingButton.click();
  }
  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
export { cartPage };
