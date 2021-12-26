export const valueBetween = (a: number, b: number, v: number, clamp: boolean = false): number => {
  if (clamp) {
    if (v > 1) v = 1;
    if (v < 0) v = 0;
  }
  return a + (b - a) * v;
};
