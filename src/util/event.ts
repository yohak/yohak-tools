export const setOnReady = (handler: () => void) => {
  window.addEventListener("DOMContentLoaded", handler);
};

export const setOnLoad = (handler: () => void) => {
  window.addEventListener("load", handler);
};
