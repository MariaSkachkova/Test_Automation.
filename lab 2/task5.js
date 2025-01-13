/*5. Створіть асинхронну функцію, яка виконує симульований виклик API, і протестуйте її за
допомогою Jest. Створіть асинхронну функцію, яка здійснює виклик API за допомогою fetch
і повертає проміс, який вирішується за допомогою обєкта JSON. Потім скористайтеся
функцією очікування Jest, щоб переконатися, що відповідь є очікуваним об’єктом JSON.*/

async function asyncAPICall() {
    return new Promise((resolve) => {
      resolve({ message: 'API response' });
    });
}

module.exports = { asyncAPICall };