const calc = require('../calculator');

describe('calculator core functions', () => {
  test('add(2,3) === 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtract(10,4) === 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiply(45,2) === 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('divide(20,5) === 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('divide by zero throws', () => {
    expect(() => calc.divide(1, 0)).toThrow('Division by zero');
  });

  test('modulo(7,3) === 1', () => {
    expect(calc.modulo(7,3)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => calc.modulo(1,0)).toThrow('Division by zero');
  });

  test('power(2,3) === 8', () => {
    expect(calc.power(2,3)).toBe(8);
  });

  test('squareRoot(9) === 3', () => {
    expect(calc.squareRoot(9)).toBe(3);
  });

  test('squareRoot negative throws', () => {
    expect(() => calc.squareRoot(-1)).toThrow('Square root of negative number');
  });
});

describe('compute(operator, left, right) integration', () => {
  test('2 + 3 => 5', () => {
    expect(calc.compute('+', '2', '3')).toBe(5);
  });

  test('10 - 4 => 6', () => {
    expect(calc.compute('-', '10', '4')).toBe(6);
  });

  test("45 * 2 => 90 (star operator)", () => {
    expect(calc.compute('*', '45', '2')).toBe(90);
  });

  test('45 x 2 => 90 (lowercase x)', () => {
    expect(calc.compute('x', '45', '2')).toBe(90);
  });

  test('45 × 2 => 90 (unicode multiply)', () => {
    expect(calc.compute('×', '45', '2')).toBe(90);
  });

  test('20 / 5 => 4 (slash)', () => {
    expect(calc.compute('/', '20', '5')).toBe(4);
  });

  test('20 ÷ 5 => 4 (unicode divide)', () => {
    expect(calc.compute('÷', '20', '5')).toBe(4);
  });

  test('operator words: add/multiply/subtract/divide', () => {
    expect(calc.compute('add', '1', '2')).toBe(3);
    expect(calc.compute('multiply', '3', '5')).toBe(15);
    expect(calc.compute('subtract', '7', '2')).toBe(5);
    expect(calc.compute('divide', '8', '4')).toBe(2);
  });

  test('invalid numeric input throws', () => {
    expect(() => calc.compute('+', 'a', '1')).toThrow('Invalid number');
  });

  test('power operator ^ works', () => {
    expect(calc.compute('^', '2', '3')).toBe(8);
    expect(calc.compute('pow', '2', '3')).toBe(8);
    expect(calc.compute('**', '2', '3')).toBe(8);
  });

  test('modulo operator % works', () => {
    expect(calc.compute('%', '7', '3')).toBe(1);
    expect(calc.compute('%', '5', '2')).toBe(1);
  });

  test('sqrt operator is unary and works', () => {
    expect(calc.compute('sqrt', '16')).toBe(4);
    expect(calc.compute('sqrt', '9')).toBe(3);
    expect(() => calc.compute('sqrt', '-4')).toThrow('Square root of negative number');
  });

  test('unsupported operator throws', () => {
    expect(() => calc.compute('???', '2', '3')).toThrow('Unsupported operator');
  });
});
