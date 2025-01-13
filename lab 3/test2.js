const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://uk.wikipedia.org/');

    await driver.findElement(By.name('search')).sendKeys('Київ', Key.RETURN);

    await driver.wait(until.titleContains('Київ'), 5000);

    await driver.findElement(By.linkText('Київ')).click();

    // Перевірка присутності герба Києва
    try {
      let coatOfArms = await driver.findElement(By.css('a[title="Герб Києва"]'));
      let isCoatOfArmsDisplayed = await coatOfArms.isDisplayed();
      console.log('Елемент "Герб Києва" присутній на сторінці:', isCoatOfArmsDisplayed);
    } catch (error) {
      console.error('Елемент "Герб Києва" відсутній на сторінці.');
    }

    // Перевірка присутності зображення герба Києва
    try {
      let coatOfArmsImage = await driver.findElement(By.css('img[src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/COA_of_Kyiv_Kurovskyi.svg/90px-COA_of_Kyiv_Kurovskyi.svg.png"]'));
      let isCoatOfArmsImageDisplayed = await coatOfArmsImage.isDisplayed();
      console.log('Зображення герба Києва присутнє на сторінці:', isCoatOfArmsImageDisplayed);
    } catch (error) {
      console.error('Зображення герба Києва відсутнє на сторінці або не відображається.');
    }

    // Перевірка присутності елемента населення
    try {
      let populationElement = await driver.findElement(By.css('a[title="Населення"]'));
      let isPopulationDisplayed = await populationElement.isDisplayed();
      console.log('Елемент "Населення" присутній на сторінці:', isPopulationDisplayed);
    } catch (error) {
      console.error('Елемент "Населення" відсутній на сторінці.');
    }

    // Отримання значення населення
    try {
      let populationValueElement = await driver.findElement(By.xpath('//td[contains(text()," 2 952 301 (1 січня 2022)")]'));
      let populationText = await populationValueElement.getText();
      populationText = populationText.split('[')[0].trim();
      console.log('Населення Києва:', populationText);
    } catch (error) {
      console.error('Не вдалося отримати значення населення.');
    }

    // Перевірка присутності елемента густоти населення
    try {
      let densityElement = await driver.findElement(By.css('a[title="Густота населення"]'));
      let isDensityDisplayed = await densityElement.isDisplayed();
      console.log('Елемент "Густота населення" присутній на сторінці:', isDensityDisplayed);
    } catch (error) {
      console.error('Елемент "Густота населення" відсутній на сторінці.');
    }

    // Отримання значення густоти населення
    try {
      let densityValueElement = await driver.findElement(By.xpath('//td[contains(text(),"3516,93")]'));
      let densityText = await densityValueElement.getText();
      console.log('Значення величини густоти населення:', densityText);
    } catch (error) {
      console.error('Не вдалося отримати значення густоти населення.');
    }

    // Перевірка присутності підрозділу "Епідемія коронавірусу"
    try {
      let covidSection = await driver.findElement(By.linkText('Коронавірусна хвороба 2019 в Україні'));
      let isCovidSectionDisplayed = await covidSection.isDisplayed();
      console.log('Підрозділ "Коронавірусна хвороба 2019 в Україні" присутній на сторінці:', isCovidSectionDisplayed);
    } catch (error) {
      console.error('Підрозділ "Коронавірусна хвороба 2019 в Україні" не знайдений або не відображається.');
    }

    // Перевірка присутності елементу середньої температури
    try {
      let avgTempElement = await driver.findElement(By.xpath('//th[contains(text(),"Середня температура")]'));
      let isAvgTempDisplayed = await avgTempElement.isDisplayed();
      console.log('Елемент "Середня температура" присутній на сторінці:', isAvgTempDisplayed);
    } catch (error) {
      console.error('Елемент "Середня температура" відсутній на сторінці.');
    }

    // Отримання значення середньої температури в квітні
    try {
      let avgTempValueElement = await driver.findElement(By.xpath('//*[@id="collapsibleTable0"]/tbody/tr[5]/th[5]'));
      let avgTempText = await avgTempValueElement.getText();
      console.log('Середня температура в квітні, °C:', avgTempText);
    } catch (error) {
      console.error('Не вдалося отримати значення середньої температури в квітні.');
    }

    // Перевірка кількості елементів у списку найвизначніших архітектурних пам'яток
    try {
      let monumentsList = await driver.findElements(By.xpath('//*[@id="mw-content-text"]/div[1]/ul[11]/li'));
      if (monumentsList.length > 20) {
        console.log('Кількість елементів у списку найвизначніших архітектурних пам\'яток більше 20.');
      } else {
        console.log('Кількість елементів у списку найвизначніших архітектурних пам\'яток не більше 20.');
      }
    } catch (error) {
      console.error('Не вдалося отримати список найвизначніших архітектурних пам\'яток.');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await driver.quit();
  }
})();
