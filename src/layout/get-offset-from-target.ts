import { Point } from "../geom/types";

const getOffsetFromTarget = (self: HTMLElement, target: HTMLElement): Point => {
  const selfRect = self.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const x = selfRect.left - targetRect.left;
  const y = selfRect.top - targetRect.top;
  return { x, y };
};
