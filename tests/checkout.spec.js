import { test, expect } from "../Fixtures/BaseTest";
import { HomePage } from "../Pages/HomePage";
import { cartPage } from "../Pages/cartPage";
import { checkoutPage } from "../Pages/checkoutPage";
let home, cart, checkout;
test.beforeEach(async ({ loginApp }) => {
  home = new HomePage(loginApp);
  cart = new cartPage(loginApp);
  checkout = new checkoutPage(loginApp);
  await home.addToCart();
  await home.cartClick();
  await cart.clickCheckout();
});
test("Checkout with valid data", async () => {
  await checkout.checkoutTheProduct();
  await expect(checkout.orderSuccessText).toHaveText(
    "Thank you for your order!",
  );
});
test("Validate the checkout by without giving First Name", async () => {
  await checkout.checkoutWithoutFirstName();
  await expect(checkout.firstNameErrorText).toHaveText(
    "Error: First Name is required",
  );
});
test("Validate the checkout by without giving Last Name", async () => {
  await checkout.checkoutWithoutLastName();
  await expect(checkout.firstNameErrorText).toHaveText(
    "Error: Last Name is required",
  );
});
test("Validate the checkout by without giving Postal Code", async () => {
  await checkout.checkoutWithoutPostalCode();
  await expect(checkout.firstNameErrorText).toHaveText(
    "Error: Postal Code is required",
  );
});
test("Verify that clicking the cancel button from checkout navigating back to Cart Page", async ({
  loginApp,
}) => {
  await checkout.cancelFromCheckout();
  await expect(loginApp).toHaveURL(process.env.BASE_URL + "/cart.html");
});
