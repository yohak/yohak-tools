import { stripPx, stripVw } from "./strip-unit";
import { NumberOrString } from "./types";
import { Optional } from "../index";

export function pxToVw(value: NumberOrString, addUnit: true): Optional<string>;
export function pxToVw(value: NumberOrString, addUnit: false): Optional<number>;
export function pxToVw(value: NumberOrString): Optional<number>;
export function pxToVw(value: NumberOrString, addUnit: boolean = false): Optional<NumberOrString> {
  const px: Optional<number> = typeof value === "string" ? stripPx(value) : value;
  if (px === undefined) return undefined;
  //
  const vw = (px / window.innerWidth) * 100;
  return addUnit ? `${vw}vw` : vw;
}

export function pxToVh(value: NumberOrString, addUnit: true): Optional<string>;
export function pxToVh(value: NumberOrString, addUnit: false): Optional<number>;
export function pxToVh(value: NumberOrString): Optional<number>;
export function pxToVh(value: NumberOrString, addUnit: boolean = false): Optional<NumberOrString> {
  const px: Optional<number> = typeof value === "string" ? stripPx(value) : value;
  if (px === undefined) return undefined;
  //
  const vh = (px / window.innerHeight) * 100;
  return addUnit ? `${vh}vh` : vh;
}

export function vwToPx(value: NumberOrString, addUnit: true): Optional<string>;
export function vwToPx(value: NumberOrString, addUnit: false): Optional<number>;
export function vwToPx(value: NumberOrString): Optional<number>;
export function vwToPx(value: NumberOrString, addUnit = false): Optional<NumberOrString> {
  const vw: Optional<number> = typeof value === "string" ? stripVw(value) : value;
  if (vw === undefined) return undefined;
  //
  const px = (window.innerWidth * vw) / 100;
  return addUnit ? `${px}px` : px;
}

export function vhToPx(value: NumberOrString, addUnit: true): Optional<string>;
export function vhToPx(value: NumberOrString, addUnit: false): Optional<number>;
export function vhToPx(value: NumberOrString): Optional<number>;
export function vhToPx(value: NumberOrString, addUnit = false): Optional<NumberOrString> {
  const vh: Optional<number> = typeof value === "string" ? stripVw(value) : value;
  if (vh === undefined) return undefined;
  //
  const px = (window.innerHeight * vh) / 100;
  return addUnit ? `${px}px` : px;
}
