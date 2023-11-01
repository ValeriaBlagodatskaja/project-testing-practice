import { caesarCipher } from "../src/caesarCipher";

test("Caesar sipher test 1", () => {
  expect(caesarCipher("greetings Earth!", 1)).toBe("hsffujoht Fbsui!");
});

test("Caesar sipher test 2", () => {
  expect(caesarCipher("Zimbabwe flag", 1)).toBe("Ajncbcxf gmbh");
});

test("Caesar sipher test 3", () => {
  expect(caesarCipher("SOS", 2)).toBe("UQU");
});

test("Caesar sipher test 4", () => {
  expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
});
