/**
 * 数字かどうかを判別しアサーション情報を付与する。
 * @category is
 * @param value
 */
export const isNumber = (value: any): value is number => {
  return typeof value === "number";
};
/**
 * NaNではない数字かどうかを判別しアサーション情報を付与する。
 * @category is
 * @param value
 * @returns {boolean}
 */
export const isValidNumber = (value: any): value is number => {
  return isNumber(value) && !isNaN(value);
};
/**
 * 文字列かどうかを判別しアサーション情報を付与する。
 * @category is
 * @param value
 * @returns {boolean}
 */
export const isString = (value: any): value is string => {
  return typeof value === "string";
};

/**
 * ブーリアンかどうかを判別しアサーション情報を付与する。
 * @category is
 * @param value
 * @returns {boolean}
 */
export const isBoolean = (value: any): value is boolean => {
  return typeof value === "boolean";
};

/**
 * 関数かどうかを判別しアサーション情報を付与する。
 * @category is
 * @param value
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: any): value is Function => {
  return typeof value === "function";
};

/**
 * 配列かどうかを判別しアサーション情報を付与する。
 * @category is
 * @param value
 * @returns {boolean}
 */
export const isArray = (value: any): value is Array<any> => {
  return Array.isArray(value);
};
