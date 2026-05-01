const { capitalize, reverse, truncate, repeat } = require('../src/strings');

describe('String Utilities', () => {
  test('capitalize makes first letter uppercase', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('reverse reverses a string', () => {
    expect(reverse('abc')).toBe('cba');
    expect(reverse('hello')).toBe('olleh');
  });

  test('truncate shortens long strings', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
    expect(truncate('hi', 5)).toBe('hi');
  });

  test('repeat duplicates a string', () => {
    expect(repeat('ab', 3)).toBe('ababab');
    expect(repeat('x', 5)).toBe('xxxxx');
  });
});
