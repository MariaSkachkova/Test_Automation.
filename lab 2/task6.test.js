/*6. Створіть асинхронну функцію, яка викликає іншу функцію, яка здійснює виклик фіктивного
API, і повертає проміс, який вирішується за допомогою відповіді JSON. Потім скористайтеся
функцією очікування Jest, щоб переконатися, що відповідь є очікуваним об’єктом JSON.*/

const { fakeAPICall, asyncFunctionCallingAPI } = require('./task6');

test('Async function should return expected JSON object from API call', async () => {
    // Очікуємо, що асинхронна функція поверне очікуваний об'єкт JSON
    await expect(asyncFunctionCallingAPI()).resolves.toMatchObject({ message: 'Fake API response' });
});
