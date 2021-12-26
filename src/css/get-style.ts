import { extractCurrentTransform, isTransformProp } from "./utils";
import {
  CSSProps,
  DisplayValue,
  NumberOrString,
  PointerEventsValue,
  PositionValue,
  TransformKeys,
  VisibilityValue,
} from "./types";
import { stripPx } from "./strip-unit";

export function getStyle(target: HTMLElement, prop: "display"): DisplayValue | undefined;
export function getStyle(target: HTMLElement, prop: "visibility"): VisibilityValue | undefined;
export function getStyle(target: HTMLElement, prop: "position"): PositionValue | undefined;
export function getStyle(target: HTMLElement, prop: "pointerEvents"): PointerEventsValue | undefined;
export function getStyle(target: HTMLElement, prop: CSSProps): NumberOrString | undefined;
export function getStyle(target: HTMLElement, prop: CSSProps): NumberOrString | undefined {
  let result: string;
  if (isTransformProp(prop as any)) {
    const transforms = extractCurrentTransform(target.style.transform);
    result = String(transforms[prop as TransformKeys]);
  } else {
    result = target.style[prop as any];
  }
  if (!result) return undefined;
  //
  const stripped = stripPx(result);
  return stripped ? stripped : result;
}
