import { getDocumentScroll } from "./get-document-scroll";
import { Point } from "../geom";

export const getOffsetFromDocument = (target: HTMLElement): Point => {
  const rect = target.getBoundingClientRect();
  const bodyScroll = getDocumentScroll();
  const x: number = rect.left + bodyScroll.x;
  const y: number = rect.top + bodyScroll.y;
  return { x, y };
};
