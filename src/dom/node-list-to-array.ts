export const nodeListToArray = <T extends Element>(items: NodeList): Array<T> => {
  const elms: T[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i] as T;
    elms.push(item);
  }
  return elms;
};
