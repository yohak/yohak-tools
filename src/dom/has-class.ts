import { StylableElement } from "../css/types";

export const hasClass = (target: StylableElement, token: string): boolean =>
  target.classList.contains(token);
