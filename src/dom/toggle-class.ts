import { nodeListToArray } from "./node-list-to-array";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";
import { StylableElement } from "../css/types";

/**
 * @description 対象のクラスの有無を切り替える
 * @category dom
 * @param target 対象の単一オブジェクトもしくは配列
 * @param token クラス名
 * @param alt 設定されている場合、`token` が除去された際にはこの`alt`が付与される
 */
export const toggleClass = (
  target: SingleOrArray<StylableElement> | NodeList,
  token: string,
  alt?: string,
): void => {
  if (target instanceof NodeList) {
    target = nodeListToArray(target);
  }
  const targets = forceAsArray(target);
  targets.forEach((elm) => {
    const classList = elm.classList;
    const r = classList.toggle(token);
    if (alt !== undefined) {
      r ? classList.remove(alt) : classList.add(alt);
    }
  });
};
