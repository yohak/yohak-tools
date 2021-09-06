// https://stackoverflow.com/questions/211703/is-it-possible-to-get-the-position-of-div-within-the-browser-viewport-not-withi

import { Point } from "../geom/types";
import { getDocumentScroll, getDocumentScrollX, getDocumentScrollY } from "./get-document-scroll";

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

export const getOffsetXFromViewport = (target: HTMLElement): number => {
  let result = 0;
  while (target) {
    result += target.offsetLeft;
    target = <HTMLElement>target.offsetParent;
  }
  result -= getDocumentScrollX();
  return result;
};

export const getOffsetYFromViewport = (target: HTMLElement): number => {
  let result = 0;
  while (target) {
    result += target.offsetTop;
    target = <HTMLElement>target.offsetParent;
  }
  result -= getDocumentScrollY();
  return result;
};
