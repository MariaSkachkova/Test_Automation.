// filterByPriceRangeSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the homepage', async () => {
  // Navigate to the homepage
});

When('I apply filter by price range {string}', async (priceRange) => {
  // Apply filter by price range
});

Then('products within the price range should be displayed', async () => {
  // Verify that products within the specified price range are displayed
});
