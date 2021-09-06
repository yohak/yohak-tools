import { isArray, isBoolean, isFunction, isNumber, isString, isValidNumber } from "./is";

describe("isNumber", () => {
  it("should work", () => {
    expect(isNumber(100)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber("abc")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
});
describe("isValidNumber", () => {
  it("should work", () => {
    expect(isValidNumber(100)).toBe(true);
    expect(isValidNumber(0)).toBe(true);
    expect(isValidNumber(NaN)).toBe(false);
    expect(isValidNumber("abc")).toBe(false);
    expect(isValidNumber(null)).toBe(false);
    expect(isValidNumber(undefined)).toBe(false);
  });
});
describe("isString", () => {
  it("should work", () => {
    expect(isString("abc")).toBe(true);
    expect(isString("")).toBe(true);
    expect(isString(100)).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
describe("isBoolean", () => {
  it("should work", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean("true")).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
describe("isFunction", () => {
  it("should work", () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });
});
describe("isArray", () => {
  it("should work", () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
  });
});
