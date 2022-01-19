export const isNumber = (value: any): value is number => {
  return typeof value === "number";
};
export const isValidNumber = (value: any): value is number => {
  return isNumber(value) && !isNaN(value);
};
export const isString = (value: any): value is string => {
  return typeof value === "string";
};

export const isBoolean = (value: any): value is boolean => {
  return typeof value === "boolean";
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: any): value is Function => {
  return typeof value === "function";
};

export const isArray = (value: any): value is Array<any> => {
  return Array.isArray(value);
};
