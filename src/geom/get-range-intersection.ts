/**
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 * @description ２つの範囲のうち重なる範囲を返す。重ならない場合はnullを返す。
 */
export const getRangeOfIntersection = (
  [a1, a2]: [number, number],
  [b1, b2]: [number, number],
): [number, number] | null => {
  // get range of intersection
  [a1, a2] = [a1, a2].sort(compare);
  [b1, b2] = [b1, b2].sort(compare);
  const min = Math.max(a1, b1);
  const max = Math.min(a2, b2);
  // if there is no intersection, return null
  if (min > max) {
    return null;
  }
  // otherwise, return the range of intersection
  return [min, max];
};

/**
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 * @description 2つの範囲のうち重なる範囲の長さを返す。重ならない場合は0を返す。
 */

export const getRangeValueOfIntersection = (
  [a1, a2]: [number, number],
  [b1, b2]: [number, number],
): number => {
  const range = getRangeOfIntersection([a1, a2], [b1, b2]);
  if (range === null) {
    return 0;
  }
  const [min, max] = range;
  return max - min;
};

const compare = (a: number, b: number) => a - b;
