import { Optional } from "../index";

export const stripUnit = (value: string, unit: string): Optional<number> => {
  const pattern = `(.*)${unit}`;
  const reg = new RegExp(pattern).exec(value);
  const result: any = !!reg ? reg[1] : value;
  return isNaN(result) || !value ? undefined : parseInt(result);
};
export const stripPx = (value: string): Optional<number> => stripUnit(value, "px");
export const stripVw = (value: string): Optional<number> => stripUnit(value, "vw");
export const stripVh = (value: string): Optional<number> => stripUnit(value, "vh");
export const stripPercent = (value: string): Optional<number> => stripUnit(value, "%");
