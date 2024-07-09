// https://stackoverflow.com/questions/211703/is-it-possible-to-get-the-position-of-div-within-the-browser-viewport-not-withi

import { getDocumentScroll, getDocumentScrollX, getDocumentScrollY } from "./get-document-scroll";
import { Point } from "../geom/types";
/**
 * 現在のブラウザのビューポート左上を基準として、対象の座標を取得する
 * @category layout
 * @param target 基準となる要素
 * @see {@link getOffsetXFromViewport}
 * @see {@link getOffsetYFromViewport}
 */
export const getOffsetFromViewport = (target: HTMLElement): Point => {
  const offset = { x: 0, y: 0 };
  while (target) {
    offset.x += target.offsetLeft;
    offset.y += target.offsetTop;
    target = <HTMLElement>target.offsetParent;
  }

  const documentScroll = getDocumentScroll();
  offset.x -= documentScroll.x;
  offset.y -= documentScroll.y;

  return offset;
};

/**
 * 現在のブラウザのビューポート左上を基準として、対象のX座標を取得する
 * @category layout
 * @param target 基準となる要素
 * @see {@link getOffsetFromViewport}
 * @see {@link getOffsetYFromViewport}
 */
export const getOffsetXFromViewport = (target: HTMLElement): number => {
  let result = 0;
  while (target) {
    result += target.offsetLeft;
    target = <HTMLElement>target.offsetParent;
  }
  result -= getDocumentScrollX();
  return result;
};

/**
 * 現在のブラウザのビューポート左上を基準として、対象のY座標を取得する
 * @category layout
 * @param target 基準となる要素
 * @see {@link getOffsetFromViewport}
 * @see {@link getOffsetXFromViewport}
 */
export const getOffsetYFromViewport = (target: HTMLElement): number => {
  let result = 0;
  while (target) {
    result += target.offsetTop;
    target = <HTMLElement>target.offsetParent;
  }
  result -= getDocumentScrollY();
  return result;
};
