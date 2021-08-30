import { stripPx } from "./strip-unit";

describe("stripPx", () => {
  it("should return number", () => {
    const result = stripPx("-15px");
    expect(result).toBe(-15);
  });
  it("should return number", () => {
    const result = stripPx("10");
    expect(result).toBe(10);
  });
  it("should return undefined as the value doesn't contain px", () => {
    const result = stripPx("55p");
    expect(result).toBe(undefined);
  });
  it("should return undefined as it is invalid value", () => {
    const result = stripPx("bb10px");
    expect(result).toBe(undefined);
  });
  it("should return undefined when empty string has passed", () => {
    const result = stripPx("");
    expect(result).toBe(undefined);
  });
});
