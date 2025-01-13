const { Builder, By } = require('selenium-webdriver'); // Додайте імпорт з бібліотеки selenium-webdriver
const chrome = require('selenium-webdriver/chrome');
const { login } = require('./authorization');

(async function signInTest() {
    // Створюємо параметри браузера для налаштування рівня виведення логів
    let options = new chrome.Options();
    options.addArguments('--log-level=3'); // Встановлюємо рівень виведення логів на мінімальний

    // Ініціалізуємо драйвер з використанням параметрів браузера
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log("\nTest №1");

        // Авторизація
        await login(driver);

        // Перевіряємо що title “Automation Exercise”
        const title = await driver.getTitle();
        console.log("Title is", title);

        // Перевіряємо що правильне ім’я користувача відображається на панелі меню
        let nameOfUser = await driver.findElement(By.xpath("//a[contains(text(), 'Logged in as')]/b")).getText();
        console.log(`Correct user name is displayed on the menu panel: ${nameOfUser}`);

    } catch (error) {
        console.error('Sign in test failed:', error);
    } finally {
        console.log("\n");
        await driver.quit();
    }
})();
