export const circulate = <T>(target: T[], value: number): T[] => {
  const arr = [...target];
  if (value === 0) return arr;
  //
  const startIndex = value > 0 ? 0 : value;
  const spliceCount = value > 0 ? value : value * -1;
  const spliced = arr.splice(startIndex, spliceCount);
  return value > 0 ? [...arr, ...spliced] : [...spliced, ...arr];
};
