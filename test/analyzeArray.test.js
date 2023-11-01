import { analyzeArray } from "../src/analyzeArray";

test("Array analysis test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Array analysis test 2", () => {
  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test("Array analysis test 3", () => {
  expect(analyzeArray([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});
