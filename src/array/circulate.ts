/**
 * 配列を循環させた新たな配列を返す
 * @category array
 * @param target
 * @param value
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4, 5];
 * console.log(circulate(arr, 3));
 * // [4, 5, 1, 2, 3]
 * console.log(circulate(arr, -1));
 * // [5, 1, 2, 3, 4]
 * ```
 */

export const circulate = <T>(target: T[], value: number): T[] => {
  const arr = [...target];
  if(value === 0) return arr;
  //
  const startIndex = value > 0 ? 0 : value;
  const spliceCount = value > 0 ? value : value * -1;
  const spliced = arr.splice(startIndex, spliceCount);
  return value > 0 ? [...arr, ...spliced] : [...spliced, ...arr];
};
