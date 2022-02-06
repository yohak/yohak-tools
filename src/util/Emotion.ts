import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils";
import { isValidNumber } from "./is";

export type AcceptsEmotion = {
  css?: SerializedStyles | SerializedStyles[];
  className?: string;
};

type EaseParams = [number, number, number, number];

const _1_IN_SINE: EaseParams = [0.12, 0, 0.39, 0];
const _1_OUT_SINE: EaseParams = [0.61, 1, 0.88, 1];
const _1_IN_OUT_SINE: EaseParams = [0.37, 0, 0.63, 1];
const _2_IN_QUAD: EaseParams = [0.11, 0, 0.5, 0];
const _2_OUT_QUAD: EaseParams = [0.5, 1, 0.89, 1];
const _2_IN_OUT_QUAD: EaseParams = [0.45, 0, 0.55, 1];
const _3_IN_QUBIC: EaseParams = [0.32, 0, 0.67, 0];
const _3_OUT_QUBIC: EaseParams = [0.33, 1, 0.68, 1];
const _3_IN_OUT_QUBIC: EaseParams = [0.65, 0, 0.35, 1];
const _4_IN_QUART: EaseParams = [0.5, 0, 0.75, 0];
const _4_OUT_QUART: EaseParams = [0.25, 1, 0.5, 1];
const _4_IN_OUT_QUART: EaseParams = [0.76, 0, 0.24, 1];
const _5_IN_QUINT: EaseParams = [0.64, 0, 0.78, 0];
const _5_OUT_QUINT: EaseParams = [0.22, 1, 0.36, 1];
const _5_IN_OUT_QUINT: EaseParams = [0.83, 0, 0.17, 1];
const _6_IN_EXPO: EaseParams = [0.7, 0, 0.84, 0];
const _6_OUT_EXPO: EaseParams = [0.16, 1, 0.3, 1];
const _6_IN_OUT_EXPO: EaseParams = [0.87, 0, 0.13, 1];
const IN_CIRC: EaseParams = [0.55, 0, 1, 0.45];
const OUT_CIRC: EaseParams = [0, 0.55, 0.45, 1];
const IN_OUT_CIRC: EaseParams = [0.85, 0, 0.15, 1];
const IN_BACK: EaseParams = [0.36, 0, 0.66, -0.56];
const OUT_BACK: EaseParams = [0.34, 1.56, 0.64, 1];
const IN_OUT_BACK: EaseParams = [0.68, -0.6, 0.32, 1.6];

const transition = (ease: EaseParams | null, ms?: number): SerializedStyles => {
  const timingFunction: string = ease ? cubicBezier(ease) : "linear";
  const duration: string = isValidNumber(ms) ? `transition-duration: ${ms}ms` : "";

  return css`
    transition-timing-function: ${timingFunction};
    ${duration};
  `;
};

const cubicBezier = (ease: EaseParams) => `cubic-bezier(${ease.join(",")})`;

export const Ease = {
  _1_IN_SINE: cubicBezier(_1_IN_SINE),
  _1_OUT_SINE: cubicBezier(_1_OUT_SINE),
  _1_IN_OUT_SINE: cubicBezier(_1_IN_OUT_SINE),
  _2_IN_QUAD: cubicBezier(_2_IN_QUAD),
  _2_OUT_QUAD: cubicBezier(_2_OUT_QUAD),
  _2_IN_OUT_QUAD: cubicBezier(_2_IN_OUT_QUAD),
  _3_IN_QUBIC: cubicBezier(_3_IN_QUBIC),
  _3_OUT_QUBIC: cubicBezier(_3_OUT_QUBIC),
  _3_IN_OUT_QUBIC: cubicBezier(_3_IN_OUT_QUBIC),
  _4_IN_QUART: cubicBezier(_4_IN_QUART),
  _4_OUT_QUART: cubicBezier(_4_OUT_QUART),
  _4_IN_OUT_QUART: cubicBezier(_4_IN_OUT_QUART),
  _5_IN_QUINT: cubicBezier(_5_IN_QUINT),
  _5_OUT_QUINT: cubicBezier(_5_OUT_QUINT),
  _5_IN_OUT_QUINT: cubicBezier(_5_IN_OUT_QUINT),
  _6_IN_EXPO: cubicBezier(_6_IN_EXPO),
  _6_OUT_EXPO: cubicBezier(_6_OUT_EXPO),
  _6_IN_OUT_EXPO: cubicBezier(_6_IN_OUT_EXPO),
  IN_CIRC: cubicBezier(IN_CIRC),
  OUT_CIRC: cubicBezier(OUT_CIRC),
  IN_OUT_CIRC: cubicBezier(IN_OUT_CIRC),
  IN_BACK: cubicBezier(IN_BACK),
  OUT_BACK: cubicBezier(OUT_BACK),
  IN_OUT_BACK: cubicBezier(IN_OUT_BACK),
  custom: (ease: EaseParams) => cubicBezier(ease),
};

export const Transition = {
  _1_easeInSine: (ms?: number) => transition(_1_IN_SINE, ms),
  _1_easeOutSine: (ms?: number) => transition(_1_OUT_SINE, ms),
  _1_easeInOutSine: (ms?: number) => transition(_1_IN_OUT_SINE, ms),
  _2_easeInQuad: (ms?: number) => transition(_2_IN_QUAD, ms),
  _2_easeOutQuad: (ms?: number) => transition(_2_OUT_QUAD, ms),
  _2_easeInOutQuad: (ms?: number) => transition(_2_IN_OUT_QUAD, ms),
  _3_easeInQubic: (ms?: number) => transition(_3_IN_QUBIC, ms),
  _3_easeOutQubic: (ms?: number) => transition(_3_OUT_QUBIC, ms),
  _3_easeInOutQubic: (ms?: number) => transition(_3_IN_OUT_QUBIC, ms),
  _4_easeInQuart: (ms?: number) => transition(_4_IN_QUART, ms),
  _4_easeOutQuart: (ms?: number) => transition(_4_OUT_QUART, ms),
  _4_easeInOutQuart: (ms?: number) => transition(_4_IN_OUT_QUART, ms),
  _5_easeInQuint: (ms?: number) => transition(_5_IN_QUINT, ms),
  _5_easeOutQuint: (ms?: number) => transition(_5_OUT_QUINT, ms),
  _5_easeInOutQuint: (ms?: number) => transition(_5_IN_OUT_QUINT, ms),
  _6_easeInExpo: (ms?: number) => transition(_6_IN_EXPO, ms),
  _6_easeOutExpo: (ms?: number) => transition(_6_OUT_EXPO, ms),
  _6_easeInOutExpo: (ms?: number) => transition(_6_IN_OUT_EXPO, ms),
  _easeInCirc: (ms?: number) => transition(IN_CIRC, ms),
  _easeOutCirc: (ms?: number) => transition(OUT_CIRC, ms),
  _easeInOutCirc: (ms?: number) => transition(IN_OUT_CIRC, ms),
  _easeInBack: (ms?: number) => transition(IN_BACK, ms),
  _easeOutBack: (ms?: number) => transition(OUT_BACK, ms),
  _easeInOutBack: (ms?: number) => transition(IN_OUT_BACK, ms),
  _easeLinear: (ms?: number) => transition(null, ms),
  _easeCustom: (params: EaseParams, ms?: number) => transition(params, ms),
};
