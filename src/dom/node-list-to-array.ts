import { StylableElement } from "../css/types";

export const nodeListToArray = <T extends StylableElement>(items: NodeList): Array<T> => {
  const elms: T[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i] as T;
    elms.push(item);
  }
  return elms;
};
