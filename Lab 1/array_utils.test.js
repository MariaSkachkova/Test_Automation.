const { sumArray, filterPositive, filterNegative } = require('./array_utils');

let testArray;

beforeAll(() => {
  testArray = [3, -7, 11, -6, -5];
});

test('sumArray should return sum of array elements', () => {
  expect(sumArray(testArray)).toBe(-4);
});

test('filterPositive should return array of positive numbers', () => {
  expect(filterPositive(testArray)).toEqual([3, 11]);
});

test('filterNegative should return array of negative numbers', () => {
  expect(filterNegative(testArray)).toEqual([-7, -6, -5]);
});
