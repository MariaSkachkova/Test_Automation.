// filterByCategorySteps.js

const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the homepage', async () => {
  // Navigate to the homepage
});

When('I apply filter by category {string}', async (category) => {
  // Apply filter by category
});

Then('products in the {string} category should be displayed', async (category) => {
  // Verify that products in the specified category are displayed
});
