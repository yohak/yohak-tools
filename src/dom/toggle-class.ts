import { nodeListToArray } from "./node-list-to-array";
import { forceAsArray } from "../array/force-as-array";
import { SingleOrArray } from "../array/types";
import { StylableElement } from "../css/types";

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
