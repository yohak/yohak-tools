import { StylableElement } from "../css/types";

/**
 * `document.querySelector` のショートカット版。主に文字数を削減するために使用している。
 * @category dom
 * @param query
 * @param queryRoot クエリを実行するルートオブジェクト
 * @see {@link qsa}
 * @example
 * ```
 * qs("#hoge");
 * // is equivalent to
 * document.querySelector("#hoge");
 *
 * as("#hoge", myElement);
 * // is equivalent to
 * myElement.querySelector("#hoge");
 * ```
 */
export const qs = <T extends StylableElement>(
  query: string,
  queryRoot: ParentNode = document,
): T | null => {
  const item = queryRoot.querySelector(query);
  return <T | null>item;
};
