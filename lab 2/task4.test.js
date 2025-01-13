/*4. Створіть асинхронну функцію, яка відхиляє з помилкою, і протестуйте її за допомогою Jest.
Cтворіть асинхронну функцію, яка повертає проміс, яка відхиляється з помилкою. Потім
скористайтеся функцією очікування Jest, щоб переконатися, що проміс відхилено з
очікуваною помилкою.*/

const { asyncFunctionThrowingError } = require('./task4');

test('Async function should throw expected error', async () => {
    // Очікуємо, що асинхронна функція відхилиться з очікуваною помилкою
    await expect(asyncFunctionThrowingError()).rejects.toThrow('This is an error');
});
