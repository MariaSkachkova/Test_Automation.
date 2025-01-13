/*2. Створіть просту асинхронну функцію, яка повертає проміс, а потім протестуйте її за
допомогою вбудованих функцій Jest expect та resolves. Щоб виконати це завдання, створіть
асинхронну функцію, яка повертає проміс, що вирішується рядком "hello world". Потім
використовуйте функцію expect з Jest, щоб перевірити, що проміс вирішується з очікуваним
рядком.*/

const { asyncFunction } = require('./task2');

test('Async function should resolve with "hello world"', async () => {
    await expect(asyncFunction()).resolves.toBe("hello world");
});
