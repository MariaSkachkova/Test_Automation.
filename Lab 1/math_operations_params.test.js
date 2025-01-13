const { add, subtract, multiply, divide } = require('./math_operations');

test.each([
  [20, 17, 37],
  [-37, 37, 0],
  [15.5, 25.2, 40.7]
])('add(%i, %i) should return %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});

test.each([
  [5.8, 3.4, 2.4],
  [3, -10.5, 13.5],
  [10, 27.9, -17.9]
])('subtract(%i, %i) should return %i', (a, b, expected) => {
  expect(subtract(a, b)).toBe(expected);
});

test.each([
  [2.2, 3.3, 7.26],
  [2.5, -3, -7.5],
  [12.3, 7.5, 92.25]
])('multiply(%i, %i) should return %i', (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
});

test.each([
  [6.6, 3.3, 2],
  [5.5, -5.5, -1],
  [36.9, 9, 4.1]
])('divide(%i, %i) should return %i', (a, b, expected) => {
  expect(divide(a, b)).toBe(expected);
});
