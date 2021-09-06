/**
 * shorthand for (document.)querySelector
 */
export const qs = <T extends HTMLElement>(query: string, queryRoot: ParentNode = document): T => {
  const item = queryRoot.querySelector(query);
  return <T>item;
};
