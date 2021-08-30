import {
  getDocumentScroll,
  getDocumentScrollX,
  getDocumentScrollY,
} from "./get-document-scroll";
import { Point } from "../geom/types";

export const getOffsetFromDocument = (target: HTMLElement): Point => {
  const rect = target.getBoundingClientRect();
  const bodyScroll = getDocumentScroll();
  const x: number = rect.left + bodyScroll.x;
  const y: number = rect.top + bodyScroll.y;
  return { x, y };
};

export const getOffsetXFromDocument = (target: HTMLElement): number => {
  const rect = target.getBoundingClientRect();
  const bodyScrollX = getDocumentScrollX();
  return rect.left + bodyScrollX;
};

export const getOffsetYFromDocument = (target: HTMLElement): number => {
  const rect = target.getBoundingClientRect();
  const bodyScrollY = getDocumentScrollY();
  return rect.top + bodyScrollY;
};
