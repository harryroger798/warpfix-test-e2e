/**
 * Simple math utilities for testing WarpFix CI repair
 */

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
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function factorial(n) {
  if (n < 0) throw new Error("Factorial of negative number");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, subtract, multiply, divide, factorial };