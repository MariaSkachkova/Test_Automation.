/*4. Створіть асинхронну функцію, яка відхиляє з помилкою, і протестуйте її за допомогою Jest.
Cтворіть асинхронну функцію, яка повертає проміс, яка відхиляється з помилкою. Потім
скористайтеся функцією очікування Jest, щоб переконатися, що проміс відхилено з
очікуваною помилкою.*/

async function asyncFunctionThrowingError() {
    throw new Error('This is an error');
}

module.exports = { asyncFunctionThrowingError };
