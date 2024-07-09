import { nodeListToArray } from "./node-list-to-array";
import { StylableElement } from "../css/types";

/**
 * `document.querySelectorAll` のショートカット版。
 * `querySelectorAll` は NodeListオブジェクトを返すのでそのままではmapやforEachなどの配列処理を行えない。
 * `qsa` は配列で返すためのその後の処理を書きやすい。
 * @param query
 * @param queryRoot クエリを実行するルートオブジェクト
 * @category dom
 * @see {@link qs}
 * @example
 * ```
 * // 以下はほぼ同等
 * qsa(".hoge");
 * document.querySelectorAll(".hoge");
 *
 * // さらに qsa の戻り値へは配列処理が使える。
 * qsa(".hoge").map(elm => doSomething()).forEach(elm => doAnotherThing());
 * ```
 */

export const qsa = <T extends StylableElement>(
  query: string,
  queryRoot: ParentNode = document,
): T[] => {
  const items = queryRoot.querySelectorAll(query);
  return nodeListToArray<T>(items);
};
