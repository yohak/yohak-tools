import { CSSStyles, NumberOrString, TransformObject } from "./types";
import { extractCurrentTransform, isPxProp, isTransformProp } from "./utils";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";
import { Optional } from "../index";

export const setStyle = (target: SingleOrArray<HTMLElement>, styles: CSSStyles) => {
  forceAsArray(target).forEach((elm) => _setStyle(elm, styles));
};
const _setStyle = (target: HTMLElement, styles: CSSStyles) => {
  const transforms: TransformObject = {};
  try {
    Object.entries(styles).forEach(([key, value]) => {
      switch (true) {
        case isPxProp(key):
          setPxProp(target, key, <NumberOrString>value);
          break;
        case isTransformProp(key):
          (<any>transforms)[key] = value;
          break;
        default:
          setDefaultProp(target, key, String(value));
      }
    });
  } catch (e) {
    console.log(e);
  }
  setTransformProps(target, transforms);
};

const tryAddPx = (value: NumberOrString): string => {
  value = value === 0 ? "0" : value;
  return typeof value === "string" ? value : `${value}px`;
};
const tryAddDeg = (value: NumberOrString): string => {
  value = value === 0 ? "0" : value;
  return typeof value === "string" ? value : `${value}deg`;
};

const setDefaultProp = (target: HTMLElement, key: string, value: string) => {
  target.style[key as any] = value;
};
const setPxProp = (target: HTMLElement, key: string, value: NumberOrString) => {
  target.style[key as any] = tryAddPx(value);
};
const setTransformProps = (target: HTMLElement, next: TransformObject) => {
  const values: string[] = [];
  const current = extractCurrentTransform(target.style.transform);

  if (hasTranslateValue(next) || hasTranslateValue(current)) {
    const x = tryAddPx(chooseValue(next.translateX, current.translateX));
    const y = tryAddPx(chooseValue(next.translateY, current.translateY));
    const z = tryAddPx(chooseValue(next.translateZ, current.translateZ));
    values.push(`translate3d(${x}, ${y}, ${z})`);
  }
  if (hasRotateValue(next) || hasRotateValue(current)) {
    const r = tryAddDeg(chooseValue(next.rotate, current.rotate));
    values.push(`rotate(${r})`);
  }

  if (hasScaleValue(next) || hasScaleValue(current)) {
    const x = chooseValue(next.scaleX, current.scaleX, "1");
    const y = chooseValue(next.scaleY, current.scaleY, "1");
    values.push(`scale(${x}, ${y})`);
  }

  if (hasSkewValue(next) || hasSkewValue(current)) {
    const x = tryAddDeg(chooseValue(next.skewX, current.skewX));
    const y = tryAddDeg(chooseValue(next.skewY, current.skewY));
    values.push(`skew(${x}, ${y})`);
  }

  target.style.transform = values.join(" ");
};

const chooseValue = (
  newValue: Optional<NumberOrString>,
  currentValue: Optional<NumberOrString>,
  defaultValue: string = "0",
): NumberOrString => {
  if (newValue !== undefined) {
    return newValue;
  } else if (!!currentValue) {
    return currentValue;
  } else {
    return defaultValue;
  }
};

const hasTranslateValue = (transforms: TransformObject): boolean => {
  return (
    transforms.translateX !== undefined ||
    transforms.translateY !== undefined ||
    transforms.translateZ !== undefined
  );
};
const hasRotateValue = (transforms: TransformObject): boolean => {
  return transforms.rotate !== undefined;
};
const hasScaleValue = (transforms: TransformObject): boolean => {
  return transforms.scaleX !== undefined || transforms.scaleY !== undefined;
};
const hasSkewValue = (transforms: TransformObject): boolean => {
  return transforms.skewX !== undefined || transforms.skewY !== undefined;
};
