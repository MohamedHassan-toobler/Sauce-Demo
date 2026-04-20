import { expect, test } from "../fixtures/BaseTest";

test.describe("Cart", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.addToCart();
  });
  test("Add a product to cart", async ({ homePage }) => {
    await expect(homePage.addToCartButton).toHaveText("Remove");
  });
  test("Verify the clicking of cart icon navigating to the cart page", async ({
    homePage,
  }) => {
    await homePage.cartClick();
  });
});
test.describe("Filters", () => {
  let itemPrices;
  test("Sort by Name Z to A", async ({ homePage }) => {
    await homePage.ZtoASort();
    const itemNames = await homePage.itemCardName.allTextContents();
    const sortedDesc = [...itemNames].sort((a, b) => b.localeCompare(a));
    expect(itemNames).toEqual(sortedDesc);
  });
  test("Sort by price low to high", async ({ homePage }) => {
    await homePage.priceLowtoHighSort();
    itemPrices = await homePage.itemCardPrice.allTextContents();
    const sortedAsc = [...itemPrices].sort((a, b) => a - b);
    expect(itemPrices).toEqual(sortedAsc);
  });
  test("Sort by price high to low", async ({ homePage }) => {
    await homePage.priceHightoLowSort();
    itemPrices = await homePage.itemCardPrice.allTextContents();
    const sortedDsc = [...itemPrices].sort((a, b) => b - a);
    expect(itemPrices).toEqual(sortedDsc);
  });
});
