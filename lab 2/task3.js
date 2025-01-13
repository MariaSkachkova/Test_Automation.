/*3. Створіть асинхронну функцію, яка використовує синтаксис async/await та протестуйте її за
допомогою Jest. Щоб виконати це завдання, створіть асинхронну функцію, яка викликає
іншу асинхронну функцію, яка повертає обіцянку, що вирішується числом. Потім
використовуйте синтаксис async/await, щоб отримати значення вирішеної обіцянки та
використовуйте функцію expect з Jest, щоб перевірити, що значення є очікуваним числом.*/


async function asyncFunctionReturningNumber() {
    return new Promise((resolve) => {
      resolve(10);
    });
}
  
async function asyncFunctionCaller() {
    const result = await asyncFunctionReturningNumber();
    return result;
}

module.exports = { asyncFunctionReturningNumber, asyncFunctionCaller };
