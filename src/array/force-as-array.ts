import { SingleOrArray } from "./types";

/**
 * `target` が arrayではない場合、`[target]` という形で返す
 * @internal
 * @category array
 * @param target
 */
export const forceAsArray = <T>(target: SingleOrArray<T>): T[] => {
  return Array.isArray(target) ? target : [target];
};
