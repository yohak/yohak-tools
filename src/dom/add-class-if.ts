import { forceAsArray } from "../array/force-as-array";
import { nodeListToArray } from "./node-list-to-array";
import { addClass } from "./add-class";
import { removeClass } from "./remove-class";
import { SingleOrArray } from "../array/types";

type BooleanFunc = (t: Element) => boolean;

export const addClassIf = (
  target: SingleOrArray<Element> | NodeList,
  condition: boolean | BooleanFunc,
  token: string,
  alt: string = "",
  remove: boolean = true
): void => {
  if (target instanceof NodeList) {
    target = nodeListToArray(target);
  }
  const targets = forceAsArray(target);
  targets.forEach((elm) => process(elm, condition, token, remove, alt));
};

const process = (
  target: Element,
  condition: boolean | BooleanFunc,
  token: string,
  remove: boolean = true,
  alt: string = ""
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
