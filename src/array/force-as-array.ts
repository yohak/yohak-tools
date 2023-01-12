import { SingleOrArray } from "./types";

/**
 * @internal
 * @category array
 * @description `target` が arrayではない場合、`[target]` という形で返す
 * @param target
 */
export const forceAsArray = <T>(target: SingleOrArray<T>): T[] => {
  return Array.isArray(target) ? target : [target];
};
