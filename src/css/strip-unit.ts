import { Optional } from "../index";

/**
 * @category css
 * @description 対象の文字列から単位を除去し数字で返す
 * @param value
 * @param unit 単位を特定する
 * @see {@link stripPx}
 * @see {@link stripVw}
 * @see {@link stripVh}
 * @see {@link stripPercent}
 */
export const stripUnit = (value: string, unit: string): Optional<number> => {
  const pattern = `(.*)${unit}`;
  const reg = new RegExp(pattern).exec(value);
  const result: any = !!reg ? reg[1] : value;
  return isNaN(result) || !value ? undefined : parseInt(result);
};
/**
 * @category css
 * @description 対象の文字列から"px"を除去し数字で返す
 * @param value
 * @see {@link stripUnit}
 * @see {@link stripVw}
 * @see {@link stripVh}
 * @see {@link stripPercent}
 */
export const stripPx = (value: string): Optional<number> => stripUnit(value, "px");
/**
 * @category css
 * @description 対象の文字列から"vw"を除去し数字で返す
 * @param value
 * @see {@link stripUnit}
 * @see {@link stripPx}
 * @see {@link stripVh}
 * @see {@link stripPercent}
 */
export const stripVw = (value: string): Optional<number> => stripUnit(value, "vw");
/**
 * @category css
 * @description 対象の文字列から"vh"を除去し数字で返す
 * @param value
 * @see {@link stripUnit}
 * @see {@link stripPx}
 * @see {@link stripVw}
 * @see {@link stripPercent}
 */
export const stripVh = (value: string): Optional<number> => stripUnit(value, "vh");
/**
 * @category css
 * @description 対象の文字列から"percent"を除去し数字で返す
 * @param value
 * @see {@link stripUnit}
 * @see {@link stripPx}
 * @see {@link stripVw}
 * @see {@link stripVh}
 */
export const stripPercent = (value: string): Optional<number> => stripUnit(value, "%");
