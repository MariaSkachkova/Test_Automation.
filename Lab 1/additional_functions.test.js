const { containsArray, containsWord, containsField, executeCallbackOnArray, 
    executeCallbackOnPhrase,createPerson } = require('./additional_functions');


//Чи містить масив вказаний об’єкт  
test('containsArray should return true if array contains the object', () => {
    expect(containsArray([8, 6, 3], 9)).toBe(true);
});
  
test('containsArray should return false if array does not contain the object', () => {
    expect(containsArray([8, 6, 3], 24)).toBe(false);
});
  


//Чи містить об’єкт який повертає функція вказане поле
test('containsWord should return true if string contains the word', () => {
    expect(containsWord('My name is Maria', 'Maria')).toBe(true);
});
  
test('containsWord should return false if string does not contain the word', () => {
    expect(containsWord('My name is Maria', 'Andrey')).toBe(false);
});
  


/*Функцію яка приймає масив та зворотній виклик який виконується над елементами масиву.
Напишіть тест який перевіряє кількість запусків зворотного виклику.*/
test('containsField should return true if object contains the field', () => {
    expect(containsField({ name: 'Maria', age: 21 }, 'name')).toBe(true);
});

test('containsField should return false if object does not contain the field', () => {
    expect(containsField({ name: 'Maria', age: 21 }, 'gender')).toBe(false);
});
  


/*Функція яка приймає текстовий рядок із фразою та зворотній виклик. Функція перетворює
фразу на масив слів передає її у зворотній виклик. Протестуйте з якими аргументами
викликається зворотній виклик.*/
test('executeCallbackOnArray should call callback for each array element', () => {
    const callback = jest.fn();
    executeCallbackOnArray([1, 2, 3], callback);
    expect(callback).toHaveBeenCalledTimes(3);
});
  
test('executeCallbackOnPhrase should call callback with array of words', () => {
    const callback = jest.fn();
    executeCallbackOnPhrase('hello Mary', callback);
    expect(callback).toHaveBeenCalledWith(['hello', 'Mary']);
});
  


/*Створіть об’єкт який містить поле імені та поле прізвища, додайте в об’єкт метод introduce
який виводить у консоль фразу «Hello, I’m firstname lastname». З використання jest.spyOn
преревірте кількість викликів методу.*/
test('createPerson should create a person with introduce method', () => {
    const person = createPerson('Kristina', 'Dzhola');
    const spy = jest.spyOn(person, 'introduce');
    person.introduce();
    expect(spy).toHaveBeenCalled();
});
  
