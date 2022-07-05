const capitalize = require('./capitalize');

test('capitalize first letter of string 1', () => {
  expect(capitalize('/index.html')).toBe('/index.html');
});

test('capitalize first letter of string 2', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});

test('capitalize first letter of string 3', () => {
  expect(capitalize('the Eiffel Tower')).toBe('The Eiffel Tower');
});