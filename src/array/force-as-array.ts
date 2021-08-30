import { SingleOrArray } from "./types";

export const forceAsArray = <T>(target: SingleOrArray<T>): T[] => {
  return Array.isArray(target) ? target : [target];
};
