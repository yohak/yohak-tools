export const setOnReady = (handler: () => void) => {
  window.addEventListener("DOMContentLoaded", handler);
};

export const setOnLoad = (handler: () => void) => {
  window.addEventListener("load", handler);
};

export const setOnResize = (handler: () => void) => {
  window.addEventListener("resize", handler);
};

export const setOnScroll = (handler: () => void) => {
  document.addEventListener("scroll", handler);
};

export const setOnResizeComplete = (handler: () => void, completeMs = 166) => {
  let timeout = 0;
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = window.setTimeout(handler, completeMs);
  });
};
export const setOnScrollComplete = (handler: () => void, completeMs = 166) => {
  let timeout = 0;
  document.addEventListener("scroll", () => {
    clearTimeout(timeout);
    timeout = window.setTimeout(handler, completeMs);
  });
};
