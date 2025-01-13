const { Builder, By } = require('selenium-webdriver'); // Додайте імпорт з бібліотеки selenium-webdriver
const chrome = require('selenium-webdriver/chrome');
const { login } = require('./authorization');

(async function testAddingItemToCart() {
    // Налаштування для ігнорування помилок сертифікатів
    let options = new chrome.Options();
    options.addArguments('--ignore-certificate-errors');

    // Ініціалізація драйвера з налаштуваннями
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log("\nTest №4");

        await login(driver);

        console.log("Navigating to the BABYHUG page");
        await driver.get('https://automationexercise.com/brand_products/Babyhug');

        console.log("Opening 'Sleeves Printed Top - White' product page");
        await driver.get("https://automationexercise.com/product_details/11");

        let quantityInput = await driver.findElement(By.name("quantity"));
        console.log("Setting quantity to 4");
        await quantityInput.clear();
        await quantityInput.sendKeys('4');

        console.log("Adding t-shirt to cart");
        await driver.findElement(By.xpath('//button[@class="btn btn-default cart"]')).click();

        console.log("Navigating to cart");
        await driver.findElement(By.linkText("Cart")).click();

        let productNameElement = await driver.findElement(By.css('td.cart_description h4'));
        let productName = await productNameElement.getText();
        console.log('Product Name in the cart:', productName);

        let priceElement = await driver.findElement(By.css('td.cart_price p'));
        let priceText = await priceElement.getText();
        let priceNum = parseFloat(priceText.replace('Rs. ', ''));
        console.log(`Product Price: ${priceNum}`);

        let totalPriceElement = await driver.findElement(By.css('td.cart_total p'));
        let totalPriceText = (await totalPriceElement.getText()).replace("Rs. ", "");
        let totalPriceNum = parseFloat(totalPriceText);

        if (totalPriceNum == priceNum * 4) { // Перевірка правильної суми
            console.log(`The total price is correct: ${totalPriceNum}`);
        } else {
            console.log(`The total price is incorrect: ${totalPriceNum}`);
        }

    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        console.log("\n");
        await driver.quit();
    }
})();
