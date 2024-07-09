import { kebabCase } from "change-case";
import { qs } from "./qs";
import { qsa } from "./qsa";
import { StylableElement } from "../css/types";

/**
 * {@link qs}をdataSet属性の利用に絞ったショートカット版。多くの場合、`key` だけを設定して、html内にある`data-js-target="key"`の要素を取得する際に使用する。
 * @category dom
 * @param key 検索対象のキーワード。`null` を与えると対象の`dataSeKey`が指定されているすべての要素が対象になる
 * @param dataSetKey 対象のdataSet属性。内部で自動的に`param-case`に変換されるので、JS的な`camelCase`で書いても、CSS的な`param-case`で書いても大丈夫
 * @param parent 検索対象のルート要素
 * @see {@link findMultipleByDataSet}
 * @example
 * ```
 * findByDataSet("#globalHeader");
 * document.querySelector("*[data-js-target='#globalHeader']");
 *
 * findByDataSet(null, "scrollTarget", parentElm);
 * parentElm.querySelector("*[data-scroll-target]");
 * ```
 */
export const findByDataSet = <T extends StylableElement>(
  key: string | null,
  dataSetKey = "js-target",
  parent: ParentNode = document,
): T | null => {
  if (key) {
    return qs<T>(`*[data-${kebabCase(dataSetKey)}='${key}']`, parent);
  } else {
    return qs<T>(`*[data-${kebabCase(dataSetKey)}]`, parent);
  }
};

/**
 * {@link qsa}をdataSet属性の利用に絞ったショートカット版。多くの場合、`key`を`null`にして特定のdataSet属性を持っている複数の要素を取得する際に使用する。
 * @category dom
 * @param key 検索対象のキーワード。`null` を与えると対象の`dataSeKey`が指定されているすべての要素が対象になる
 * @param dataSetKey 対象のdataSet属性。内部で自動的に`param-case`に変換されるので、JS的な`camelCase`で書いても、CSS的な`param-case`で書いても大丈夫
 * @param parent 検索対象のルート要素
 * @see {@link findByDataSet}
 * @example
 * ```
 * findMultipleByDataSet(null, "scrollTarget");
 * document.querySelectorAll("*[data-scroll-target]");
 * ```
 */
export const findMultipleByDataSet = <T extends StylableElement>(
  key: string | null,
  dataSetKey = "js-target",
  parent: ParentNode = document,
): T[] => {
  if (key) {
    return qsa<T>(`*[data-${kebabCase(dataSetKey)}='${key}']`, parent);
  } else {
    return qsa<T>(`*[data-${kebabCase(dataSetKey)}]`, parent);
  }
};
