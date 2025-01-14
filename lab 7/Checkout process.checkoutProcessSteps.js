// checkoutProcessSteps.js

const { Given, When, Then, And } = require('@cucumber/cucumber');

Given('I have added items to my cart', async () => {
  // Add items to the cart
});

When('I proceed to checkout', async () => {
  // Proceed to the checkout process
});

Then('I should be prompted to enter my shipping details', async () => {
  // Verify that shipping details form is displayed
});

And('I should be able to select a payment method', async () => {
  // Select a payment method during checkout
});

And('I should be able to review and confirm my order', async () => {
  // Review and confirm the order details
});

And('I should receive a confirmation of my order', async () => {
  // Verify that an order confirmation message is displayed
});
