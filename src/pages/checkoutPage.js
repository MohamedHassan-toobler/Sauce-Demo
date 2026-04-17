class checkoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator("#first-name");
    this.lastNameInput = page.locator("#last-name");
    this.postalCodeInput = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.finishButton = page.locator("#finish");
    this.orderSuccessText = page.locator('//h2[@class="complete-header"]');
    this.firstNameErrorText = page.locator('//h3[@data-test="error"]');
    this.checkoutCancelButton = page.getByRole("button", { name: "cancel" });
  }
  async checkoutTheProduct() {
    await this.firstNameInput.fill("Robert");
    await this.lastNameInput.fill("Williams");
    await this.postalCodeInput.fill("96325");
    await this.continueButton.click();
    await this.finishButton.click();
  }
  async checkoutWithoutFirstName() {
    await this.lastNameInput.fill("Williams");
    await this.postalCodeInput.fill("96325");
    await this.continueButton.click();
  }
  async checkoutWithoutLastName() {
    await this.firstNameInput.fill("Williams");
    await this.postalCodeInput.fill("96325");
    await this.continueButton.click();
  }
  async checkoutWithoutPostalCode() {
    await this.firstNameInput.fill("Robert");
    await this.lastNameInput.fill("Williams");
    await this.continueButton.click();
  }
  async cancelFromCheckout() {
    await this.checkoutCancelButton.click();
  }
}
export { checkoutPage };
