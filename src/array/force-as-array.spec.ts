import { forceAsArray } from "./force-as-array";

describe("forceAsArray", () => {
  it("should simply return the original array when an array is passed", () => {
    const arr = [1, 2, 3];
    const result = forceAsArray(arr);
    expect(result).toBe(arr);
  });
  it("should return an array wrapping the source value when none-array item is passed", () => {
    const src = "SRC";
    const result = forceAsArray(src);
    expect(result).toEqual([src]);
  });
});
