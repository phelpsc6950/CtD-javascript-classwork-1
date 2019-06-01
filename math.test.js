var math = require('./math.js');

test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });
test('subtract 50 - 8 to equal 42', () =>{
    expect(math.subtract(50,8)).toBe(42);
});
test('multiply 13 * 5 to equal 65', () =>{
    expect(math.multiply(13,5)).toBe(65);
});