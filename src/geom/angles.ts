/**
 * 「ラジアン」から一般的な「角度」に変換する
 * @category geom
 * @param deg
 * @see {@link radianToDegree}
 */
export const degreeToRadian = (deg: number): number => {
  return (deg * Math.PI) / 180;
};
/**
 * 一般的な「角度」から「ラジアン」に変換する
 * @category geom
 * @param rad
 * @see {@link degreeToRadian}
 */
export const radianToDegree = (rad: number): number => {
  return (rad / Math.PI) * 180;
};
