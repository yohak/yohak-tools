import { stripPx, stripVw } from "./strip-unit";
import { NumberOrString } from "./types";
import { Optional } from "../index";

/**
 * px で渡された値をそのタイミングのvwに変換する
 * @category css
 * @param value 数字でも `100px`のような文字列でも両方受け付ける
 * @param addUnit 単位として"vw" を付与するか。
 * @return `addUnit` が `true` だとvwが付与された文字列で、`false` だと数字として返る
 * @see {@link pxToVh}
 * @see {@link vwToPx}
 * @see {@link vhToPx}
 */
export function pxToVw(value: NumberOrString, addUnit: true): Optional<string>;
export function pxToVw(value: NumberOrString, addUnit: false): Optional<number>;
export function pxToVw(value: NumberOrString): Optional<number>;
export function pxToVw(value: NumberOrString, addUnit: boolean = false): Optional<NumberOrString> {
  const px: Optional<number> = typeof value === "string" ? stripPx(value) : value;
  if (px === undefined) return undefined;
  //
  const vw = (px / document.documentElement.clientWidth) * 100;
  return addUnit ? `${vw}vw` : vw;
}

/**
 * px で渡された値をそのタイミングのvwに変換する
 * @category css
 * @param value 数字でも `100px`のような文字列でも両方受け付ける
 * @param addUnit 単位として"vw" を付与するか。
 * @return `addUnit` が `true` だとvwが付与された文字列で、`false` だと数字として返る
 * @see {@link pxToVw}
 * @see {@link vwToPx}
 * @see {@link vhToPx}
 */
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

/**
 * vw で渡された値をそのタイミングのpxに変換する
 * @category css
 * @param value 数字でも `100vw`のような文字列でも両方受け付ける
 * @param addUnit 単位として"px" を付与するか。
 * @return `addUnit` が `true` だとpxが付与された文字列で、`false` だと数字として返る
 * @see {@link pxToVw}
 * @see {@link pxToVh}
 * @see {@link vhToPx}
 */
export function vwToPx(value: NumberOrString, addUnit: true): Optional<string>;
export function vwToPx(value: NumberOrString, addUnit: false): Optional<number>;
export function vwToPx(value: NumberOrString): Optional<number>;
export function vwToPx(value: NumberOrString, addUnit = false): Optional<NumberOrString> {
  const vw: Optional<number> = typeof value === "string" ? stripVw(value) : value;
  if (vw === undefined) return undefined;
  //
  const px = (document.documentElement.clientWidth * vw) / 100;
  return addUnit ? `${px}px` : px;
}

/**
 * vh で渡された値をそのタイミングのpxに変換する
 * @category css
 * @param value 数字でも `100vh`のような文字列でも両方受け付ける
 * @param addUnit 単位として"px" を付与するか。
 * @return `addUnit` が `true` だとvhが付与された文字列で、`false` だと数字として返る
 * @see {@link pxToVw}
 * @see {@link pxToVh}
 * @see {@link vwToPx}
 */
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
