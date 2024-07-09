import { StylableElement } from "../css/types";

/**
 * 対象が該当のクラスを持っているかどうか調べる
 * @param target
 * @param token クラス名
 * @category dom
 */
export const hasClass = (target: StylableElement, token: string): boolean =>
  target.classList.contains(token);
