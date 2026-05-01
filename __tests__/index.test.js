const { add, subtract, multiply, divide, power, modulo, factorial } = require("../src/index");

describe("Math utilities", () => {
  test("add returns correct sum", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract returns correct difference", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("multiply returns correct product", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test("divide returns correct quotient", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divide throws on zero", () => {
    expect(() => divide(1, 0)).toThrow("Division by zero");
  });

  test("power returns correct result", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
  });

  test("modulo returns correct remainder", () => {
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(15, 5)).toBe(0);
  });

  test("factorial returns correct result", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
  });
});
