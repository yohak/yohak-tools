import { kebabCase } from "change-case";
import { stripPx } from "./strip-unit";
import { CSSProps, NumberOrString, StylableElement, TransformKeys } from "./types";
import { extractCurrentTransform, isTransformProp } from "./utils";
import { Optional } from "../index";

/**
 * @experimental
 * @category css
 * @param elm
 * @param key
 */
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
    const result = computed.getPropertyValue(kebabCase(key as string));
    const stripped = stripPx(result);
    return stripped ? stripped : result;
  }
}
