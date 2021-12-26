import { CSSProps, NumberOrString, TransformKeys } from "./types";
import { paramCase, snakeCase } from "change-case";
import { extractCurrentTransform, isTransformProp } from "./utils";
import { stripPx } from "./strip-unit";

export function getComputedStyleValue(elm: HTMLElement, key: CSSProps): NumberOrString | undefined {
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
