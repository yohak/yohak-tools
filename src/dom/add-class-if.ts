import { addClass } from "./add-class";
import { nodeListToArray } from "./node-list-to-array";
import { removeClass } from "./remove-class";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";
import { StylableElement } from "../css/types";

type BooleanFunc = (t: StylableElement) => boolean;

/**
 * @category dom
 * @param target
 * @param condition 条件
 * @param token クラス名
 * @param alt `condition` が `false` だった場合に代わりに設定するクラス名
 * @param remove `condition` が `false` だった場合に `token` を外すか
 * @description 条件によってクラスを設定するかどうかを決める
 */
export const addClassIf = (
  target: SingleOrArray<StylableElement> | NodeList,
  condition: boolean | BooleanFunc,
  token: string,
  alt: string = "",
  remove: boolean = true,
): void => {
  if (target instanceof NodeList) {
    target = nodeListToArray(target);
  }
  const targets = forceAsArray(target);
  targets.forEach((elm) => process(elm, condition, token, remove, alt));
};

const process = (
  target: StylableElement,
  condition: boolean | BooleanFunc,
  token: string,
  remove: boolean = true,
  alt: string = "",
) => {
  const c: boolean = typeof condition === "function" ? condition(target) : condition;

  if (c) {
    addClass(target, token);
    remove && alt ? removeClass(target, alt) : "";
  } else {
    alt ? addClass(target, alt) : "";
    remove ? removeClass(target, token) : "";
  }
};
