//document.body.scrollTop always returns 0 in Safari
//https://github.com/nuxt/nuxt.js/issues/2512#issuecomment-358215583

import { Point } from "../geom/types";

export const getDocumentScroll = (): Point => {
  const x: number = getDocumentScrollX();
  const y: number = getDocumentScrollY();
  return { x, y };
};

export const getDocumentScrollX = (): number =>
  Math.max(
    window.pageXOffset,
    document.documentElement.scrollLeft,
    document.body.scrollLeft
  );

export const getDocumentScrollY = (): number =>
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
