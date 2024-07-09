import { NumberRange } from "./types";

/**
 * `from` における `value` は `to` においていくつなのかをマッピングする
 * @category geom
 * @param from
 * @param to
 * @param value
 * @example
 * ```
 * const result = rangeMap([0,100],[0,50],50);
 * console.log(result);
 * // 25
 * ```
 */
export const rangeMap = (from: NumberRange, to: NumberRange, value: number): number => {
  //
  const [a1, a2] = from;
  const [b1, b2] = to;
  const ratio = (value - a1) / (a2 - a1);
  return (b2 - b1) * ratio + b1;
};
