//document.body.scrollTop always returns 0 in Safari
//https://github.com/nuxt/nuxt.js/issues/2512#issuecomment-358215583

import { Point } from "../geom/types";

/**
 * @category layout
 * @description 現在のドキュメントのスクロール座標を取得する(ブラウザによるプロパティの差異を吸収する)
 * @see {@link https://github.com/nuxt/nuxt.js/issues/2512}
 * @see {@link getDocumentScrollX}
 * @see {@link getDocumentScrollY}
 */
export const getDocumentScroll = (): Point => {
  const x: number = getDocumentScrollX();
  const y: number = getDocumentScrollY();
  return { x, y };
};

/**
 * @category layout
 * @description 現在のドキュメントのスクロールY座標を取得する
 * @see {@link getDocumentScroll}
 * @see {@link getDocumentScrollY}
 */
export const getDocumentScrollX = (): number =>
  Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);

/**
 * @category layout
 * @description 現在のドキュメントのスクロールX座標を取得する
 * @see {@link getDocumentScroll}
 * @see {@link getDocumentScrollX}
 */
export const getDocumentScrollY = (): number =>
  Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
