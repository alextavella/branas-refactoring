import { sum } from "../src/math";

test("should sum correctly", () => {
  expect(sum(2, 2)).toBe(4);
});
