import capitalize from "../src/capitalize";

test("Capitalizes a string", () => {
  expect(capitalize("monday")).toBe("Monday");
});

test("None string parameter return an empty string", () => {
  expect(capitalize()).toBe("");
  expect(capitalize(null)).toBe("");
  expect(capitalize([])).toBe("");
  expect(capitalize({})).toBe("");
  expect(capitalize(9)).toBe("");
});
