import { nodeListToArray } from "./node-list-to-array";

export const qsa = <T extends HTMLElement>(
  query: string,
  queryRoot: ParentNode = document
): T[] => {
  const items = queryRoot.querySelectorAll(query);
  return nodeListToArray<T>(items);
};
