import { forceAsArray } from "../array/force-as-array";
import { nodeListToArray } from "./node-list-to-array";
import { SingleOrArray } from "../array/types";

export const toggleClass = (
  target: SingleOrArray<Element> | NodeList,
  token: string,
  alt?: string
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
