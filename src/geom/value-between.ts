/**
 * a(0) と b(1) の間のvを求める
 * @category geom
 * @param a
 * @param b
 * @param v
 * @param clamp v を0−1に強制的に丸めるかどうかかどうか
 * @example
 * ```
 * const result1 = valueBetween(100,200,0.5);
 * console.log(result1);
 * // 150
 *
 * const result2 = valueBetween(100,200,-1);
 * console.log(result2);
 * // 0
 *
 * const result3 = valueBetween(100,200,-1, true)
 * console.log(result3);
 * // 100
 * ```
 */
export const valueBetween = (a: number, b: number, v: number, clamp: boolean = false): number => {
  if (clamp) {
    if (v > 1) v = 1;
    if (v < 0) v = 0;
  }
  return a + (b - a) * v;
};
