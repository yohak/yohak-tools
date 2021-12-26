import { valueBetween } from "./value-between";

describe("valueBetween", () => {
  it("should work", () => {
    const result = valueBetween(100, 200, 0.5);
    expect(result).toBe(150);
  });
  it("should work with reverse order", () => {
    const result = valueBetween(200, 100, 0.5);
    expect(result).toBe(150);
  });
  it("should work with overshoot value", () => {
    const result = valueBetween(100, 200, 2);
    expect(result).toBe(300);
  });
  it("should work with negative overshoot value", () => {
    const result = valueBetween(100, 200, -1);
    expect(result).toBe(0);
  });
  it("should clamp overshoot value", () => {
    const result = valueBetween(100, 200, 2, true);
    expect(result).toBe(200);
  });
  it("should clamp negative overshoot value", () => {
    const result = valueBetween(100, 200, -1, true);
    expect(result).toBe(100);
  });
});
