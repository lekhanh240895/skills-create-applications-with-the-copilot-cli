#!/usr/bin/env node
// Node.js CLI calculator
// Supports the four basic operations shown in the provided image:
//  - Addition (+)
//  - Subtraction (-)
//  - Multiplication (×, *, x)
//  - Division (÷, /)

const calc = require('./calculator');

function printUsage() {
  console.log('Usage: node src/index.js <left> <operator> <right>');
  console.log('Examples:');
  console.log('  node src/index.js 2 + 3');
  console.log("  node src/index.js 10 × 5");
  console.log('  node src/index.js 10 / 2');
  console.log('Also accepts operator words: add, subtract, multiply, divide.');
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    printUsage();
    process.exit(args.length === 0 ? 0 : 1);
  }

  const [left, operator, right] = args;
  try {
    const result = calc.compute(operator, left, right);
    // Print result with no extra formatting so it can be used in scripts
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}

main();
