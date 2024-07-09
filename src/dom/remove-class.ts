import { nodeListToArray } from "./node-list-to-array";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";
import { StylableElement } from "../css/types";

/**
 * 対象のクラスを取り除く
 * @category dom
 * @param target 対象の単一オブジェクトもしくは配列
 * @param token クラス名
 */
export const removeClass = (
  target: SingleOrArray<StylableElement> | NodeList,
  token: SingleOrArray<string>,
): void => {
  if (target instanceof NodeList) {
    target = nodeListToArray(target);
  }
  const targets = forceAsArray(target);
  const tokens = forceAsArray(token);
  targets.forEach((elm) => elm.classList.remove(...tokens));
};
