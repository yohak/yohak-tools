export const stripUnit = (value: string, unit: string): number | undefined => {
  const pattern = `(.*)${unit}`;
  const reg = new RegExp(pattern).exec(value);
  const result: any = !!reg ? reg[1] : value;
  return isNaN(result) || !value ? undefined : parseInt(result);
};
export const stripPx = (value: string): number | undefined =>
  stripUnit(value, "px");
export const stripVw = (value: string): number | undefined =>
  stripUnit(value, "vw");
export const stripVh = (value: string): number | undefined =>
  stripUnit(value, "vh");
export const stripPercent = (value: string): number | undefined =>
  stripUnit(value, "%");
