// Simple calculator module
// Supported operations:
//  - Addition: +
//  - Subtraction: -
//  - Multiplication: × (also supports '*', 'x')
//  - Division: ÷ (also supports '/')

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function compute(operator, left, right) {
  const a = toNumber(left);
  const b = toNumber(right);
  switch (operator) {
    case '+':
    case 'add':
      return add(a, b);
    case '-':
    case 'sub':
    case 'subtract':
      return subtract(a, b);
    case '*':
    case 'x':
    case 'X':
    case '×':
    case 'mul':
    case 'multiply':
      return multiply(a, b);
    case '/':
    case '÷':
    case 'div':
    case 'divide':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

module.exports = { add, subtract, multiply, divide, compute };
