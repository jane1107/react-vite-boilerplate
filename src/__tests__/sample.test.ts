import { expect, test } from "vitest";

test("sample test", () => {
  expect(("b" + "a" + +"a" + "a").toLowerCase()).toBe("banana");
});
