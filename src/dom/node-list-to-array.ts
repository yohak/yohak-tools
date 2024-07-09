import { StylableElement } from "../css/types";

/**
 * `querySelectorAll` などで返ってくるNodeListを単純な配列に変換する。{@link qsa} などでも内部的に使用している。
 * @param items
 * @category dom
 * @see {@link qsa}
 */
export const nodeListToArray = <T extends StylableElement>(items: NodeList): Array<T> => {
  const elms: T[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i] as T;
    elms.push(item);
  }
  return elms;
};
