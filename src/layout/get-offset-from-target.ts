import { Point } from "../geom/types";

/**
 * @category layout
 * @description ある要素の左上を基準として、対象の座標を取得する
 * @param self 座標を取得する要素
 * @param target 基準となる要素
 * @see {@link getOffsetXFromTarget}
 * @see {@link getOffsetYFromTarget}
 */
export const getOffsetFromTarget = (self: HTMLElement, target: HTMLElement): Point => {
  const selfRect = self.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const x = selfRect.left - targetRect.left;
  const y = selfRect.top - targetRect.top;
  return { x, y };
};

/**
 * @category layout
 * @description ある要素の左上を基準として、対象のX座標を取得する
 * @param self 座標を取得する要素
 * @param target 基準となる要素
 * @see {@link getOffsetFromTarget}
 * @see {@link getOffsetYFromTarget}
 */
export const getOffsetXFromTarget = (self: HTMLElement, target: HTMLElement): number => {
  return getOffsetFromTarget(self, target).x;
};

/**
 * @category layout
 * @description ある要素の左上を基準として、対象のY座標を取得する
 * @param self 座標を取得する要素
 * @param target 基準となる要素
 * @see {@link getOffsetFromTarget}
 * @see {@link getOffsetXFromTarget}
 */
export const getOffsetYFromTarget = (self: HTMLElement, target: HTMLElement): number => {
  return getOffsetFromTarget(self, target).y;
};
