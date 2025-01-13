/*2. Створіть просту асинхронну функцію, яка повертає проміс, а потім протестуйте її за
допомогою вбудованих функцій Jest expect та resolves. Щоб виконати це завдання, створіть
асинхронну функцію, яка повертає проміс, що вирішується рядком "hello world". Потім
використовуйте функцію expect з Jest, щоб перевірити, що проміс вирішується з очікуваним
рядком.*/


async function asyncFunction() {
    return new Promise((resolve) => {
      resolve("hello world");
    });
}

module.exports = { asyncFunction };
