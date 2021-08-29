export type SingleOrArray<T> = T | T[];

export const forceAsArray = <T>(target: SingleOrArray<T>): T[] => {
  return Array.isArray(target) ? target : [target];
};
