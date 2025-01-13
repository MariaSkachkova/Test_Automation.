//Чи містить масив вказаний об’єкт
function containsArray(arr, obj) 
{
    return arr.includes(obj);
}
  
//Чи містить текстовий фрагмент вказане слово
function containsWord(str, word) 
{
    return str.includes(word);
}

//Чи містить об’єкт який повертає функція вказане поле
function containsField(obj, field) 
{
    return obj.hasOwnProperty(field);
}
 
/*Функцію яка приймає масив та зворотній виклик який виконується над елементами масиву.
Напишіть тест який перевіряє кількість запусків зворотного виклику.*/
function executeCallbackOnArray(arr, callback) 
{
    arr.forEach(callback);
}
 
/*Функція яка приймає текстовий рядок із фразою та зворотній виклик. Функція перетворює
фразу на масив слів передає її у зворотній виклик. Протестуйте з якими аргументами
викликається зворотній виклик.*/
function executeCallbackOnPhrase(phrase, callback) 
{
    const words = phrase.split(' ');
    callback(words);
}
  
/*Створіть об’єкт який містить поле імені та поле прізвища, додайте в об’єкт метод introduce
який виводить у консоль фразу «Hello, I’m firstname lastname». З використання jest.spyOn
преревірте кількість викликів методу.*/
function createPerson(firstName, lastName) 
{
    return {
      firstName,
      lastName,
      introduce() {
        console.log(`Hello, I’m ${this.firstName} ${this.lastName}`);
      }
    };
}
  
module.exports = { containsArray, containsWord, containsField, 
    executeCallbackOnArray, executeCallbackOnPhrase,createPerson };
  
