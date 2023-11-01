export const calculator = {
  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments should be numbers.");
    }
    return a + b;
  },
  substract: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments should be numbers.");
    }
    return a - b;
  },
  multiply: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments should be numbers.");
    }
    return a * b;
  },
  divide: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments should be numbers.");
    }
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  },
};
