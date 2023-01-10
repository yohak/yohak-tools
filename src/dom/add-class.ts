import { nodeListToArray } from "./node-list-to-array";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";
import { StylableElement } from "../css/types";

/**
 * @category dom
 * @param target 対象のオブジェクトor配列
 * @param token クラス名
 */
export const addClass = (
  target: SingleOrArray<StylableElement> | NodeList,
  token: SingleOrArray<string>,
): void => {
  if (target instanceof NodeList) {
    target = nodeListToArray(target);
  }
  const targets: StylableElement[] = forceAsArray(target);
  const tokens = forceAsArray(token);
  targets.forEach((elm) => elm.classList.add(...tokens));
};
