export const stripPx = (value: string): number | undefined => {
  const reg = /(.*)px/.exec(value);
  const result: any = !!reg ? reg[1] : value;
  return isNaN(result) || !value ? undefined : parseInt(result);
};
