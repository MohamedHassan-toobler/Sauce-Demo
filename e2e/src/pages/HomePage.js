class HomePage {
  constructor(page) {
    this.page = page;
    this.itemCard = page.locator(".inventory_item").first();
    this.itemCardName = page.locator(".inventory_item_name");
    this.itemCardPrice = page.locator(".inventory_item_price");
    this.addToCartButton = this.itemCard.locator(".btn");
    this.cartIcon = page.locator("#shopping_cart_container");
    this.cartItemName = page.locator(".inventory_item_name");
    this.sortDropdown = page.locator(".product_sort_container");
    this.burgerIcon = page.getByRole("button", { name: "Open Menu" }).first();
  }
  async addToCart() {
    await this.addToCartButton.click();
  }
  async cartClick() {
    await this.cartIcon.click();
  }
  async ZtoASort() {
    await this.sortDropdown.selectOption("za");
  }
  async priceLowtoHighSort() {
    await this.sortDropdown.selectOption("lohi");
  }
  async priceHightoLowSort() {
    await this.sortDropdown.selectOption("hilo");
  }
  async homeBurger() {
    await this.burgerIcon.click();
  }
}
export { HomePage };
