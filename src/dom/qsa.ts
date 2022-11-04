import { nodeListToArray } from "./node-list-to-array";
import { StylableElement } from "../css/types";

export const qsa = <T extends StylableElement>(
  query: string,
  queryRoot: ParentNode = document,
): T[] => {
  const items = queryRoot.querySelectorAll(query);
  return nodeListToArray<T>(items);
};
