const { Builder, By, until } = require('selenium-webdriver');

(async function testEmptyPasswordErrorMessage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("\nTest №3");

        console.log('Navigating to https://automationexercise.com/');
        await driver.get('https://automationexercise.com/');

        console.log("Clicking on 'Signup / Login' link on the menu panel");
        await driver.findElement(By.linkText("Signup / Login")).click();

        await driver.wait(until.titleIs('Automation Exercise - Signup / Login'), 10000);

        console.log("Entering the email");
        await driver.findElement(By.css('[data-qa="login-email"]')).sendKeys('21fi.k.dzhola@std.npu.edu.ua');

        console.log("Clicking the 'Login' button without entering password");
        await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Отримання повідомлення про валідацію поля паролю
        let errorMessage = await driver.findElement(By.name("password")).getAttribute("validationMessage");
        console.log(`Validation Message: ${errorMessage}`);
    } finally {
        console.log("\n");
        await driver.quit();
    }
})();
