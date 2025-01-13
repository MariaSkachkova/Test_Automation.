/*1. Напишіть тест, щоб перевірити, що функція 1 яка викликає іншу функцію 2 з аргументами
Name і Lastname викликається з значеннями name=John lastname=Doe. Використовуйте
макет функції для створення імітації функції.*/


function function1(function2, name, lastname) {
    return function2(name, lastname);
}

module.exports = { function1 };

  
