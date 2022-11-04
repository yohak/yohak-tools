import { paramCase, pascalCase, snakeCase } from "change-case";
import { qs } from "./qs";
import { qsa } from "./qsa";

export const findByDataSet = <T extends Element | null>(
  key: string,
  dataSetKey = "js-target",
  parent: ParentNode = document,
): T => {
  return qs<T>(`*[data-${paramCase(dataSetKey)}='${key}']`, parent);
};

export const findMultipleByDataSet = <T extends Element>(
  key: string | null,
  dataSetKey = "js-target",
  parent: ParentNode = document,
): T[] => {
  if (key) {
    return qsa<T>(`*[data-${paramCase(dataSetKey)}='${key}']`, parent);
  } else {
    return qsa<T>(`*[data-${paramCase(dataSetKey)}]`, parent);
  }
};
