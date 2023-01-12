import { getDocumentScroll, getDocumentScrollX, getDocumentScrollY } from "./get-document-scroll";
import { StylableElement } from "../css/types";
import { Point } from "../geom/types";

/**
 * @category layout
 * @description ドキュメント左上を基準とした対象の座標を取得する
 * @param target
 * @see  {@link getOffsetXFromDocument}, {@link getOffsetYFromDocument}
 */
export const getOffsetFromDocument = (target: StylableElement): Point => {
  const rect = target.getBoundingClientRect();
  const bodyScroll = getDocumentScroll();
  const x: number = rect.left + bodyScroll.x;
  const y: number = rect.top + bodyScroll.y;
  return { x, y };
};

/**
 * @category layout
 * @description ドキュメント左上を基準とした対象のX座標を取得する
 * @param target
 * @see {@link getOffsetFromDocument}, {@link getOffsetYFromDocument}
 */
export const getOffsetXFromDocument = (target: StylableElement): number => {
  const rect = target.getBoundingClientRect();
  const bodyScrollX = getDocumentScrollX();
  return rect.left + bodyScrollX;
};

/**
 * @category layout
 * @description ドキュメント左上を基準とした対象のY座標を取得する
 * @param target
 * @see  {@link getOffsetFromDocument}, {@link getOffsetXFromDocument}
 */
export const getOffsetYFromDocument = (target: StylableElement): number => {
  const rect = target.getBoundingClientRect();
  const bodyScrollY = getDocumentScrollY();
  return rect.top + bodyScrollY;
};
