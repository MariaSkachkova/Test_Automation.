const { Builder, By, until } = require('selenium-webdriver');

(async function testEmptyEmailErrorMessage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("\nTest №2");

        console.log('Navigating to https://automationexercise.com/');
        await driver.get('https://automationexercise.com/');

        console.log("Clicking on 'Signup / Login' link on the menu panel");
        await driver.findElement(By.linkText("Signup / Login")).click();

        await driver.wait(until.titleIs('Automation Exercise - Signup / Login'), 10000);

        console.log("Entering the password");
        await driver.findElement(By.css('[data-qa="login-password"]')).sendKeys('12345678');

        console.log("Clicking the 'Login' button without entering email address");
        await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Отримання повідомлення про валідацію поля електронної пошти
        let errorMessage = await driver.findElement(By.name("email")).getAttribute("validationMessage");
        console.log(`Validation message: ${errorMessage}`);

    } finally {
        console.log("\n");
        await driver.quit();
    }
})();
