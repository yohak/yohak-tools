import { isArray, isBoolean, isFunction, isNumber, isString, isValidNumber } from "./is";
import { Nullable } from "../index";

describe("isNumber", () => {
  it("should work", () => {
    expect(isNumber(100)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber("abc")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
  it("should pass type check", () => {
    const setNumberOrNull = (): Nullable<number> => {
      return Math.random() < 0.5 ? 1 : null;
    };
    const value = setNumberOrNull();
    if (isNumber(value)) {
      const result = Math.abs(value);
      expect(result).toBeTruthy();
    } else {
      expect(value).toBe(null);
    }
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
  it("should pass type check", () => {
    const setNumberOrNull = (): Nullable<number> => {
      return Math.random() < 0.5 ? 1 : null;
    };
    const value = setNumberOrNull();
    if (isValidNumber(value)) {
      const result = Math.abs(value);
      expect(result).toBeTruthy();
    } else {
      expect(value).toBe(null);
    }
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
    expect(isString(true)).toBe(false);
  });
  it("should pass type check", () => {
    const setStringOrNull = (): Nullable<string> => {
      return Math.random() < 0.5 ? "abc" : null;
    };
    const value = setStringOrNull();
    if (isString(value)) {
      const result = value.split(",");
      expect(result).toBeTruthy();
    } else {
      expect(value).toBe(null);
    }
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
  it("should pass type check", () => {
    const setBoolOrNull = (): Nullable<boolean> => {
      return Math.random() < 0.5 ? true : null;
    };
    const receiveBoolen = (bool: boolean) => (bool ? "abc" : "def");
    const value = setBoolOrNull();
    if (isBoolean(value)) {
      const result = receiveBoolen(value);
      expect(result).toBeTruthy();
    } else {
      expect(value).toBe(null);
    }
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

  it("should pass type check", () => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const setFuncOrNull = (): Nullable<Function> => {
      return Math.random() < 0.5 ? () => "abc" : null;
    };
    const value = setFuncOrNull();
    if (isFunction(value)) {
      const result = value.call(this, []);
      expect(result).toBeTruthy();
    } else {
      expect(value).toBe(null);
    }
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

  it("should pass type check", () => {
    const setArrayOrNull = (): Nullable<Date[]> => {
      return Math.random() < 0.5 ? [new Date()] : null;
    };
    const value = setArrayOrNull();
    if (isArray(value)) {
      const result = value.map((item) => item.getDay());
      expect(result).toBeTruthy();
    } else {
      expect(value).toBe(null);
    }
  });
});
