/*6. Створіть асинхронну функцію, яка викликає іншу функцію, яка здійснює виклик фіктивного
API, і повертає проміс, який вирішується за допомогою відповіді JSON. Потім скористайтеся
функцією очікування Jest, щоб переконатися, що відповідь є очікуваним об’єктом JSON.*/

function fakeAPICall() {
    return new Promise((resolve) => {
      resolve({ message: 'Fake API response' });
    });
}
  
async function asyncFunctionCallingAPI() {
    const response = await fakeAPICall();
    return response;
}

module.exports = { fakeAPICall, asyncFunctionCallingAPI };
