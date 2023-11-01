import { calculator } from "../src/calculator";

test("Add", () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test("Substract", () => {
  expect(calculator.substract(2, 3)).toEqual(-1);
});

test("Multiply", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});

test("Divides two numbers", () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
  expect(calculator.divide(-6, 3)).toBe(-2);
});

test("Throws an error when dividing by zero", () => {
  expect(() => {
    calculator.divide(5, 0);
  }).toThrow();
});

test("Throws an error when adding non-numbers", () => {
  expect(() => calculator.add("2", 3)).toThrow(
    "Both arguments should be numbers."
  );
  expect(() => calculator.add(2, "3")).toThrow(
    "Both arguments should be numbers."
  );
});

test("Throws an error when subtracting non-numbers", () => {
  expect(() => calculator.substract("2", 3)).toThrow(
    "Both arguments should be numbers."
  );
  expect(() => calculator.substract(2, "3")).toThrow(
    "Both arguments should be numbers."
  );
});

test("Throws an error when multiplying non-numbers", () => {
  expect(() => calculator.multiply("2", 3)).toThrow(
    "Both arguments should be numbers."
  );
  expect(() => calculator.multiply(2, "3")).toThrow(
    "Both arguments should be numbers."
  );
});

test("Throws an error when dividing non-numbers", () => {
  expect(() => calculator.divide("2", 3)).toThrow(
    "Both arguments should be numbers."
  );
  expect(() => calculator.divide(2, "3")).toThrow(
    "Both arguments should be numbers."
  );
});
