import { stripPx, stripVw } from "./strip-unit";
import { NumberOrString } from "./types";

export function pxToVw(value: NumberOrString, addUnit: true): string | undefined;
export function pxToVw(value: NumberOrString, addUnit: false): number | undefined;
export function pxToVw(value: NumberOrString): number | undefined;
export function pxToVw(
  value: NumberOrString,
  addUnit: boolean = false,
): NumberOrString | undefined {
  const px: number | undefined = typeof value === "string" ? stripPx(value) : value;
  if (px === undefined) return undefined;
  //
  const vw = (px / window.innerWidth) * 100;
  return addUnit ? `${vw}vw` : vw;
}

export function pxToVh(value: NumberOrString, addUnit: true): string | undefined;
export function pxToVh(value: NumberOrString, addUnit: false): number | undefined;
export function pxToVh(value: NumberOrString): number | undefined;
export function pxToVh(
  value: NumberOrString,
  addUnit: boolean = false,
): NumberOrString | undefined {
  const px: number | undefined = typeof value === "string" ? stripPx(value) : value;
  if (px === undefined) return undefined;
  //
  const vh = (px / window.innerHeight) * 100;
  return addUnit ? `${vh}vh` : vh;
}

export function vwToPx(value: NumberOrString, addUnit: true): string | undefined;
export function vwToPx(value: NumberOrString, addUnit: false): number | undefined;
export function vwToPx(value: NumberOrString): number | undefined;
export function vwToPx(value: NumberOrString, addUnit = false): NumberOrString | undefined {
  const vw: number | undefined = typeof value === "string" ? stripVw(value) : value;
  if (vw === undefined) return undefined;
  //
  const px = (window.innerWidth * vw) / 100;
  return addUnit ? `${px}px` : px;
}

export function vhToPx(value: NumberOrString, addUnit: true): string | undefined;
export function vhToPx(value: NumberOrString, addUnit: false): number | undefined;
export function vhToPx(value: NumberOrString): number | undefined;
export function vhToPx(value: NumberOrString, addUnit = false): NumberOrString | undefined {
  const vh: number | undefined = typeof value === "string" ? stripVw(value) : value;
  if (vh === undefined) return undefined;
  //
  const px = (window.innerHeight * vh) / 100;
  return addUnit ? `${px}px` : px;
}
