onst { sumArray, filterPositive, filterNegative } = require('./array_utils');
const { isPalindrome, isAnagram } = require('./string_operations');

//Тести для файлу array_utils.js
describe('array_utils test', () => {
  let testArray;

  beforeAll(() => {
    testArray = [1, -2, 3, -4, 5];
  });

  test('sumArray should return sum of array elements', () => {
    expect(sumArray(testArray)).toBe(3);
  });

  test('filterPositive should return array of positive numbers', () => {
    expect(filterPositive(testArray)).toEqual([1, 3, 5]);
  });

  test('filterNegative should return array of negative numbers', () => {
    expect(filterNegative(testArray)).toEqual([-2, -4]);
  });
});


//Тести для файлу string_operations.test.js 
describe('string_operations test', () => {
  test('isPalindrome should return true for a palindrome', () => {
    expect(isPalindrome('No lemon, no melon')).toBe(true);
  });

  test('isPalindrome should return false for a non-palindrome', () => {
    expect(isPalindrome('Christina')).toBe(false);
  });

  test('isAnagram should return true for anagrams', () => {
    expect(isAnagram('cinema', 'iceman')).toBe(true);
  });

  test('isAnagram should return false for non-anagrams', () => {
    expect(isAnagram('world', 'hello')).toBe(false);
  });
});
