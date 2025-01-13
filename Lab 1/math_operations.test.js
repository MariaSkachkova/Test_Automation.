const { add, subtract, multiply, divide } = require('./math_operations');

//Додавання
test('addition of positive numbers', () => {
  expect(add(27.3, 11.5)).toBe(38.8);
});

test('addition of positiv and negative numbers', () => {
  expect(add(138, -227.5)).toBe(-89.5);
});

//Віднімання
test('subtraction of negative numbers', () => {
  expect(subtract(-33, -2.3)).toBe(-30.7);
});

test('subtraction of positiv numbers', () => {
  expect(subtract(81, 90)).toBe(-9);
});

//Множення
test('multiplication of negative numbers', () => {
  expect(multiply(-7, -3)).toBe(21);
});

test('multiplication of positiv and negative numbers', () => {
  expect(multiply(22, -3)).toBe(-66);
});

//Ділення
test('division of positive numbers', () => {
  expect(divide(4.6, 2)).toBe(2.3);
});

test('division of negative and positive numbers', () => {
  expect(divide(-5, 2)).toBe(-2.5);
});
