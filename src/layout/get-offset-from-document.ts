import { getDocumentScroll, getDocumentScrollX, getDocumentScrollY } from "./get-document-scroll";
import { StylableElement } from "../css/types";
import { Point } from "../geom/types";

export const getOffsetFromDocument = (target: StylableElement): Point => {
  const rect = target.getBoundingClientRect();
  const bodyScroll = getDocumentScroll();
  const x: number = rect.left + bodyScroll.x;
  const y: number = rect.top + bodyScroll.y;
  return { x, y };
};

export const getOffsetXFromDocument = (target: StylableElement): number => {
  const rect = target.getBoundingClientRect();
  const bodyScrollX = getDocumentScrollX();
  return rect.left + bodyScrollX;
};

export const getOffsetYFromDocument = (target: StylableElement): number => {
  const rect = target.getBoundingClientRect();
  const bodyScrollY = getDocumentScrollY();
  return rect.top + bodyScrollY;
};
