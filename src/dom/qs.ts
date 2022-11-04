import { StylableElement } from "../css/types";

/**
 * shorthand for (document.)querySelector
 */
export const qs = <T extends StylableElement | null>(
  query: string,
  queryRoot: ParentNode = document,
): T => {
  const item = queryRoot.querySelector(query);
  return <T>item;
};
