import { rangeMap } from "./range-map";

describe("rangeMap", () => {
  it("should work", () => {
    const result = rangeMap([0, 100], [50, 500], 25);
    expect(result).toBe(162.5);
  });

  it("should work", () => {
    const result = rangeMap([-100, 100], [100, 500], 0);
    expect(result).toBe(300);
  });

  it("should work", () => {
    const result = rangeMap([100, -100], [500, 100], 0);
    expect(result).toBe(300);
  });

  it("should work", () => {
    const result = rangeMap([0, 100], [100, 0], 10);
    expect(result).toBe(90);
  });
});
