export const isNumber = (value: any): boolean => {
  return typeof value === "number";
};
export const isValidNumber = (value: any): boolean => {
  return isNumber(value) && !isNaN(value);
};
export const isString = (value: any): boolean => {
  return typeof value === "string";
};

export const isBoolean = (value: any): boolean => {
  return typeof value === "boolean";
};

export const isFunction = (value: any): boolean => {
  return typeof value === "function";
};

export const isArray = (value: any): boolean => {
  return Array.isArray(value);
};
