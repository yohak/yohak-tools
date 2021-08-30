import { NumberOrString } from "./types";
import { stripPx, stripVw } from "./strip-unit";

export function pxToVw(
  value: NumberOrString,
  addUnit: true
): string | undefined;
export function pxToVw(
  value: NumberOrString,
  addUnit: false
): number | undefined;
export function pxToVw(value: NumberOrString): number;
export function pxToVw(
  value: NumberOrString,
  addUnit: boolean = false
): NumberOrString {
  const px: number = typeof value === "string" ? stripPx(value) : value;
  const vw = (px / window.innerWidth) * 100;
  if (!vw && vw !== 0) return undefined;
  return addUnit ? `${vw}vw` : vw;
}

export function pxToVh(
  value: NumberOrString,
  addUnit: true
): string | undefined;
export function pxToVh(
  value: NumberOrString,
  addUnit: false
): number | undefined;
export function pxToVh(value: NumberOrString): number;
export function pxToVh(
  value: NumberOrString,
  addUnit: boolean = false
): NumberOrString {
  const px: number = typeof value === "string" ? stripPx(value) : value;
  const vh = (px / window.innerHeight) * 100;
  if (!vh && vh !== 0) return undefined;
  return addUnit ? `${vh}vh` : vh;
}
export function vwToPx(
  value: NumberOrString,
  addUnit: true
): string | undefined;
export function vwToPx(
  value: NumberOrString,
  addUnit: false
): number | undefined;
export function vwToPx(value: NumberOrString): number;
export function vwToPx(value: NumberOrString, addUnit = false): NumberOrString {
  const vw: number = typeof value === "string" ? stripVw(value) : value;
  const px = (window.innerWidth * vw) / 100;
  if (!px && px !== 0) return undefined;
  return addUnit ? `${px}px` : px;
}

export function vhToPx(
  value: NumberOrString,
  addUnit: true
): string | undefined;
export function vhToPx(
  value: NumberOrString,
  addUnit: false
): number | undefined;
export function vhToPx(value: NumberOrString): number;
export function vhToPx(value: NumberOrString, addUnit = false): NumberOrString {
  const vh: number = typeof value === "string" ? stripVw(value) : value;
  const px = (window.innerHeight * vh) / 100;
  if (!px && px !== 0) return undefined;
  return addUnit ? `${px}px` : px;
}
