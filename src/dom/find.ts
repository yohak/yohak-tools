import { paramCase, pascalCase, snakeCase } from "change-case";
import { qs } from "./qs";
import { qsa } from "./qsa";
import { StylableElement } from "../css/types";

export const findByDataSet = <T extends StylableElement>(
  key: string | null,
  dataSetKey = "js-target",
  parent: ParentNode = document,
): T | null => {
  if (key) {
    return qs<T>(`*[data-${paramCase(dataSetKey)}='${key}']`, parent);
  } else {
    return qs<T>(`*[data-${paramCase(dataSetKey)}]`, parent);
  }
};

export const findMultipleByDataSet = <T extends StylableElement>(
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