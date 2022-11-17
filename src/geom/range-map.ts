import { NumberRange } from "./types";

export const rangeMap = ([a1, a2]: NumberRange, [b1, b2]: NumberRange, value: number): number => {
  //
  const ratio = (value - a1) / (a2 - a1);
  return (b2 - b1) * ratio + b1;
};
