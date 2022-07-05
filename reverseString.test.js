const reverse = require('./reverseString');

test('reverse string 1', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('reverse string 2', () => {
    expect(reverse('Howdy')).toBe('ydwoH');
});

test('reverse string 3', () => {
    expect(reverse('Greetings from Earth')).toBe('htraE morf sgniteerG');
});