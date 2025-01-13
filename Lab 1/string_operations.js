/*Паліндром - це слово, число або фраза, яка читається однаково назад і вперед.
Наприклад, "рівень", "аба", "12321".*/

function isPalindrome(str) 
{
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
  

/*Анаграма - це слово, яке можна утворити з літер іншого слова, переставляючи їх місцями. 
Наприклад, "listen" і "silent".*/

  function isAnagram(str1, str2) 
{
    const normalize = str => str.replace(/[\W_]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
  
module.exports = { isPalindrome, isAnagram };
  
