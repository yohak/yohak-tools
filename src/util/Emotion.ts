import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils";
import { isValidNumber } from "./is";

export type AcceptsEmotion = {
  css?: SerializedStyles | SerializedStyles[];
  className?: string;
};

type EaseParams = [number, number, number, number];

const _1_EASE_IN_SINE: EaseParams = [0.12, 0, 0.39, 0];
const _1_EASE_OUT_SINE: EaseParams = [0.61, 1, 0.88, 1];
const _1_EASE_IN_OUT_SINE: EaseParams = [0.37, 0, 0.63, 1];
const _2_EASE_IN_QUAD: EaseParams = [0.11, 0, 0.5, 0];
const _2_EASE_OUT_QUAD: EaseParams = [0.5, 1, 0.89, 1];
const _2_EASE_IN_OUT_QUAD: EaseParams = [0.45, 0, 0.55, 1];
const _3_EASE_IN_QUBIC: EaseParams = [0.32, 0, 0.67, 0];
const _3_EASE_OUT_QUBIC: EaseParams = [0.33, 1, 0.68, 1];
const _3_EASE_IN_OUT_QUBIC: EaseParams = [0.65, 0, 0.35, 1];
const _4_EASE_IN_QUART: EaseParams = [0.5, 0, 0.75, 0];
const _4_EASE_OUT_QUART: EaseParams = [0.25, 1, 0.5, 1];
const _4_EASE_IN_OUT_QUART: EaseParams = [0.76, 0, 0.24, 1];
const _5_EASE_IN_QUINT: EaseParams = [0.64, 0, 0.78, 0];
const _5_EASE_OUT_QUINT: EaseParams = [0.22, 1, 0.36, 1];
const _5_EASE_IN_OUT_QUINT: EaseParams = [0.83, 0, 0.17, 1];
const _6_EASE_IN_EXPO: EaseParams = [0.7, 0, 0.84, 0];
const _6_EASE_OUT_EXPO: EaseParams = [0.16, 1, 0.3, 1];
const _6_EASE_IN_OUT_EXPO: EaseParams = [0.87, 0, 0.13, 1];
const EASE_IN_CIRC: EaseParams = [0.55, 0, 1, 0.45];
const EASE_OUT_CIRC: EaseParams = [0, 0.55, 0.45, 1];
const EASE_IN_OUT_CIRC: EaseParams = [0.85, 0, 0.15, 1];
const EASE_IN_BACK: EaseParams = [0.36, 0, 0.66, -0.56];
const EASE_OUT_BACK: EaseParams = [0.34, 1.56, 0.64, 1];
const EASE_IN_OUT_BACK: EaseParams = [0.68, -0.6, 0.32, 1.6];

const transition = (ease: EaseParams | null, ms?: number): SerializedStyles => {
  const timingFunction: string = ease ? `cubic-bezier(${ease.join(",")})` : "linear";
  const duration: string = isValidNumber(ms) ? `transition-duration: ${ms}ms` : "";

  return css`
    transition-timing-function: ${timingFunction};
    ${duration};
  `;
};

export const Transition = {
  _1_easeInSine: (ms?: number) => transition(_1_EASE_IN_SINE, ms),
  _1_easeOutSine: (ms?: number) => transition(_1_EASE_OUT_SINE, ms),
  _1_easeInOutSine: (ms?: number) => transition(_1_EASE_IN_OUT_SINE, ms),
  _2_easeInQuad: (ms?: number) => transition(_2_EASE_IN_QUAD, ms),
  _2_easeOutQuad: (ms?: number) => transition(_2_EASE_OUT_QUAD, ms),
  _2_easeInOutQuad: (ms?: number) => transition(_2_EASE_IN_OUT_QUAD, ms),
  _3_easeInQubic: (ms?: number) => transition(_3_EASE_IN_QUBIC, ms),
  _3_easeOutQubic: (ms?: number) => transition(_3_EASE_OUT_QUBIC, ms),
  _3_easeInOutQubic: (ms?: number) => transition(_3_EASE_IN_OUT_QUBIC, ms),
  _4_easeInQuart: (ms?: number) => transition(_4_EASE_IN_QUART, ms),
  _4_easeOutQuart: (ms?: number) => transition(_4_EASE_OUT_QUART, ms),
  _4_easeInOutQuart: (ms?: number) => transition(_4_EASE_IN_OUT_QUART, ms),
  _5_easeInQuint: (ms?: number) => transition(_5_EASE_IN_QUINT, ms),
  _5_easeOutQuint: (ms?: number) => transition(_5_EASE_OUT_QUINT, ms),
  _5_easeInOutQuint: (ms?: number) => transition(_5_EASE_IN_OUT_QUINT, ms),
  _6_easeInExpo: (ms?: number) => transition(_6_EASE_IN_EXPO, ms),
  _6_easeOutExpo: (ms?: number) => transition(_6_EASE_OUT_EXPO, ms),
  _6_easeInOutExpo: (ms?: number) => transition(_6_EASE_IN_OUT_EXPO, ms),
  _easeInCirc: (ms?: number) => transition(EASE_IN_CIRC, ms),
  _easeOutCirc: (ms?: number) => transition(EASE_OUT_CIRC, ms),
  _easeInOutCirc: (ms?: number) => transition(EASE_IN_OUT_CIRC, ms),
  _easeInBack: (ms?: number) => transition(EASE_IN_BACK, ms),
  _easeOutBack: (ms?: number) => transition(EASE_OUT_BACK, ms),
  _easeInOutBack: (ms?: number) => transition(EASE_IN_OUT_BACK, ms),
  _easeLinear: (ms?: number) => transition(null, ms),
  _easeCustom: (params: EaseParams, ms?: number) => transition(params, ms),
};
