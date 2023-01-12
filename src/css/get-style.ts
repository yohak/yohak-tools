import { stripPx } from "./strip-unit";
import {
  CSSProps,
  DisplayValue,
  NumberOrString,
  PointerEventsValue,
  PositionValue,
  StylableElement as SE,
  TransformKeys,
  VisibilityValue,
} from "./types";
import { extractCurrentTransform, isTransformProp } from "./utils";
import { Optional } from "../index";

/**
 * @category css
 * @description 対象のスタイル属性を取得する。"display,visibility,position,pointerEvents"に関してはタイプ補完が発生する
 * @param target
 * @param prop
 */
export function getStyle(target: SE, prop: "display"): Optional<DisplayValue>;
export function getStyle(target: SE, prop: "visibility"): Optional<VisibilityValue>;
export function getStyle(target: SE, prop: "position"): Optional<PositionValue>;
export function getStyle(target: SE, prop: "pointerEvents"): Optional<PointerEventsValue>;
export function getStyle(target: SE, prop: CSSProps): Optional<NumberOrString>;
export function getStyle(target: SE, prop: CSSProps): Optional<NumberOrString> {
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
