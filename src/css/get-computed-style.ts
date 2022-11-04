import { paramCase } from "change-case";
import { stripPx } from "./strip-unit";
import { CSSProps, NumberOrString, StylableElement, TransformKeys } from "./types";
import { extractCurrentTransform, isTransformProp } from "./utils";
import { Optional } from "../index";

export function getComputedStyleValue(
  elm: StylableElement,
  key: CSSProps,
): Optional<NumberOrString> {
  const computed = window.getComputedStyle(elm);
  if (isTransformProp(key as string)) {
    const str = computed.getPropertyValue("transform");
    const transform = extractCurrentTransform(str);
    const result = transform[key as TransformKeys];
    const stripped = stripPx(result as string);
    return stripped ? stripped : result;
  } else {
    const result = computed.getPropertyValue(paramCase(key as string));
    const stripped = stripPx(result);
    return stripped ? stripped : result;
  }
}
