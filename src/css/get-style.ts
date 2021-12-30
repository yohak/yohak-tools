import { stripPx } from "./strip-unit";
import {
  CSSProps,
  DisplayValue,
  NumberOrString,
  PointerEventsValue,
  PositionValue,
  TransformKeys,
  VisibilityValue,
} from "./types";
import { extractCurrentTransform, isTransformProp } from "./utils";
import { Optional } from "../index";

export function getStyle(target: HTMLElement, prop: "display"): Optional<DisplayValue>;
export function getStyle(target: HTMLElement, prop: "visibility"): Optional<VisibilityValue>;
export function getStyle(target: HTMLElement, prop: "position"): Optional<PositionValue>;
export function getStyle(target: HTMLElement, prop: "pointerEvents"): Optional<PointerEventsValue>;
export function getStyle(target: HTMLElement, prop: CSSProps): Optional<NumberOrString>;
export function getStyle(target: HTMLElement, prop: CSSProps): Optional<NumberOrString> {
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
