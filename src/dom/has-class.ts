import { StylableElement } from "../css/types";

/**
 * @description 対象が該当のクラスを持っているかどうか調べる
 * @param target
 * @param token クラス名
 */
export const hasClass = (target: StylableElement, token: string): boolean =>
  target.classList.contains(token);
