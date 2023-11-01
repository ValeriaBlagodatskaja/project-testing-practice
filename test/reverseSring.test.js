import { reverseString } from "../src/reverseString";

test("Reverses a string", () => {
  expect(reverseString("Monday")).toBe("yadnoM");
});

test("None string parameter return an empty string", () => {
  expect(reverseString()).toBe("");
  expect(reverseString(null)).toBe("");
  expect(reverseString([])).toBe("");
  expect(reverseString({})).toBe("");
  expect(reverseString(9)).toBe("");
});
