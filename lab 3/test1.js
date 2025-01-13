const { Builder, By, until } = require('selenium-webdriver');

(async function googleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');

    // Перевіряємо title сторінки
    let title = await driver.getTitle();
    console.log('Title сторінки:', title);
    if (title !== 'Google') {
      throw new Error('Title is incorrect');
    }

    // Присутність рядка пошуку
    try {
      let searchBox = await driver.findElement(By.name('q'));
      let isSearchBoxDisplayed = await searchBox.isDisplayed();
      console.log('Рядок пошуку присутній:', isSearchBoxDisplayed);
    } catch (error) {
      console.error('Помилка: Рядок пошуку не знайдено або не відображається.');
    }

    // Присутність посилання на Gmail
    try {
      let gmailLink = await driver.findElement(By.linkText('Gmail'));
      let isGmailLinkDisplayed = await gmailLink.isDisplayed();
      console.log('Посилання на Gmail присутнє:', isGmailLinkDisplayed);
    } catch (error) {
      console.error('Помилка: Посилання на Gmail не знайдено або не відображається.');
    }

    // Присутність логотипу Google
    try {
      let googleLogo = await driver.findElement(By.css('img[alt="Google"]'));
      let isGoogleLogoDisplayed = await googleLogo.isDisplayed();
      console.log('Логотип Google присутній:', isGoogleLogoDisplayed);
    } catch (error) {
      console.error('Помилка: Логотип Google не знайдено або не відображається.');
    }

    // Присутність кнопки "Пошук"
    try {
      await driver.wait(until.elementLocated(By.name('btnK')), 10000);
      console.log('Кнопка "Пошук Google" присутня на сторінці.');
    } catch (error) {
      console.error('Помилка: Кнопка "Пошук Google" не знайдена або не відображається.');
    }

  } finally {
    await driver.quit();
  }
})();
