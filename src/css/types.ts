export type NumberOrString = number | string;
export type DisplayValue =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "none"
  | "inherit"
  | "unset";
export type VisibilityValue = "visible" | "hidden" | "collapse" | "inherit" | "unset";
export type PositionValue =
  | "static"
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky"
  | "inherit"
  | "unset";
export type PointerEventsValue = "auto" | "none" | "inherit" | "unset";
export type OverflowValue = "visible" | "hidden" | "clip" | "scroll" | "auto" | "inherit" | "unset";

export type ValueOverRide = {
  display: DisplayValue;
  visibility: VisibilityValue;
  position: PositionValue;
  pointerEvents: PointerEventsValue;
  overflow: OverflowValue;
  overflowX: OverflowValue;
  overflowY: OverflowValue;
};
export const numberProps = ["opacity", "zIndex", "lineHeight"] as const;
export const numberToPxProps = [
  "fontSize",
  "width",
  "height",
  "left",
  "right",
  "top",
  "bottom",
  "marginLeft",
  "marginRight",
  "marginBottom",
  "marginTop",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "borderRadius",
] as const;

// TODO implement scale3d, rotate3d
export const transformSingleProps = [
  "translateX",
  "translateY",
  "translateZ",
  "scaleX",
  "scaleY",
  "rotate",
  "skewX",
  "skewY",
] as const;

export type NumberKeys = typeof numberProps[number];
export type NumberToPxKeys = typeof numberToPxProps[number];
export type TransformKeys = typeof transformSingleProps[number];
export type OmitKeys = NumberKeys | NumberToPxKeys | "rotate";
export type AcceptsNumberObject = Record<NumberToPxKeys | TransformKeys | OmitKeys, NumberOrString>;

export type TransformObject = Partial<Record<TransformKeys, NumberOrString>>;

type WholeCSSStyles = Omit<CSSStyleDeclaration, OmitKeys> & ValueOverRide & AcceptsNumberObject;
export type CSSStyles = Partial<WholeCSSStyles>;

export type CSSProps = keyof WholeCSSStyles;

/**
 * @internal
 */
export type StylableElement = HTMLElement | SVGElement;
