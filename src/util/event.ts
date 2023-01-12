export type onReadyOpts = {
  /**
   * ブラウザの戻るボタンで戻ってきたときに画面をリロードさせるかどうか
   */
  forceReloadAtHistory?: boolean;
};

/**
 * @description `window.addEventListener("DOMContentLoaded", cb);` のショートカット版
 * @category event
 * @param handler
 * @param opts
 */
export const setOnReady = (handler: () => void, opts?: onReadyOpts) => {
  window.addEventListener("DOMContentLoaded", handler);
  if (opts?.forceReloadAtHistory) {
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        location.reload();
      }
    });
  }
};

/**
 * @description `window.addEventListener("load", cb);` のショートカット版
 * @category event
 * @param handler
 */
export const setOnLoad = (handler: () => void) => {
  window.addEventListener("load", handler);
};

/**
 * @description `window.addEventListener("resize", cb);` のショートカット版
 * @category event
 * @param handler
 */
export const setOnResize = (handler: () => void) => {
  window.addEventListener("resize", handler);
};

/**
 * @description `document.addEventListener("scroll", cb);` のショートカット版
 * @category event
 * @param handler
 */
export const setOnScroll = (handler: () => void) => {
  document.addEventListener("scroll", handler);
};

/**
 * @description リサイズイベントが発生してしばらく落ち着いてから`handler` を実行する
 * @category event
 * @param handler
 * @param completeMs デフォルトの166は60FPSにおける10フレーム分(1000/60*10 = 166.666)
 */
export const setOnResizeComplete = (handler: () => void, completeMs = 166) => {
  let timeout = 0;
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = window.setTimeout(handler, completeMs);
  });
};

/**
 * @description スクロールイベントが発生してしばらく落ち着いてから`handler` を実行する
 * @category event
 * @param handler
 * @param completeMs デフォルトの166は60FPSにおける10フレーム分(1000/60*10 = 166.666)
 */
export const setOnScrollComplete = (handler: () => void, completeMs = 166) => {
  let timeout = 0;
  document.addEventListener("scroll", () => {
    clearTimeout(timeout);
    timeout = window.setTimeout(handler, completeMs);
  });
};
