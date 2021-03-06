import { nodeListToArray } from "./node-list-to-array";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";

export const addClass = (
  target: SingleOrArray<Element> | NodeList,
  token: SingleOrArray<string>,
): void => {
  if (target instanceof NodeList) {
    target = nodeListToArray(target);
  }
  const targets: Element[] = forceAsArray(target);
  const tokens = forceAsArray(token);
  targets.forEach((elm) => elm.classList.add(...tokens));
};
