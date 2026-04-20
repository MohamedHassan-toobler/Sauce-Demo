import { test, expect } from "../fixtures/BaseTest";
import { HomePage } from "../pages/HomePage";
import { cartPage } from "../pages/cartPage";
let home, cart, itemName;
test.beforeEach(async ({ loginApp }) => {
  home = new HomePage(loginApp);
  cart = new cartPage(loginApp);
  itemName = await home.itemCardName.first().textContent();
  await home.addToCart();
  await home.cartClick();
});
test("Verify the added product is available in cart", async () => {
  await expect(home.cartItemName).toHaveText(itemName);
});
test("Verify checkout button is visible", async () => {
  await expect(cart.checkoutButton).toBeVisible();
});
test("Remove product from the cart", async () => {
  await cart.removeFromCart();
});
test("Click Continue Shipping", async () => {
  await cart.continueShipping();
});
test("Checkout the added product", async () => {
  await cart.clickCheckout();
});
