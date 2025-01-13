/*3. Створіть асинхронну функцію, яка використовує синтаксис async/await та протестуйте її за
допомогою Jest. Щоб виконати це завдання, створіть асинхронну функцію, яка викликає
іншу асинхронну функцію, яка повертає обіцянку, що вирішується числом. Потім
використовуйте синтаксис async/await, щоб отримати значення вирішеної обіцянки та
використовуйте функцію expect з Jest, щоб перевірити, що значення є очікуваним числом.*/

const { asyncFunctionReturningNumber, asyncFunctionCaller } = require('./task3');

test('Async function caller should return expected number', async () => {
    // Очікуємо, що асинхронна функція поверне очікуване число
    await expect(asyncFunctionCaller()).resolves.toBe(10);
});
