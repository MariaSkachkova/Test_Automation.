const { Builder, By, until } = require('selenium-webdriver');
const { login } = require('./authorization');
const fs = require('fs');

(async function testSearchingProduct() {
    let driver = await new Builder().forBrowser('chrome').build();
    let errorLogStream = fs.createWriteStream('error.log', { flags: 'a' });
    try {
        console.log("\nTest №5");

        await login(driver);

        console.log("Navigating to the products page");
        await driver.findElement(By.xpath("//a[contains(text(), 'Products')]")).click();

        await driver.wait(until.titleContains("Automation Exercise - All Products"), 4000);

        console.log("Searching for the 'Soft Stretch Jeans' product");
        await driver.findElement(By.id("search_product")).sendKeys("Soft Stretch Jeans");

        await driver.findElement(By.id("submit_search")).click();

        let productElement = await driver.findElement(By.xpath(`//div[@class="productinfo text-center"]/p[contains(text(), "Soft Stretch Jeans")]`));
        if (productElement) {
            console.log("The 'Soft Stretch Jeans' product is found");
        } else {
            console.log("The 'Soft Stretch Jeans' product is not found");
        }

        await driver.get("https://automationexercise.com/product_details/33");

        let imgElement = await driver.findElement(By.css('img.newarrival[src="/static/images/product-details/new.jpg"]'));
        if (imgElement) {
            console.log("This product is categorized as 'New'");
        } else {
            console.log("This product is from the old collection");
        }

    } catch (error) {
        if (error.name === 'TimeoutError') {
            console.error('Test failed: Timeout while waiting for the title');
        } else {
            console.error('Test failed:', error.message);
            // Write the error message to the log file
            errorLogStream.write(`${error.message}\n`);
        }
    } finally {
        console.log("\n");
        await driver.quit();
        errorLogStream.end();
    }
})();
