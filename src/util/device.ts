/**
 * @category is
 * @description iOS端末かどうかを判別する
 */
export const isIOS = (): boolean => {
  return getMobileOS() === "iOS";
};

/**
 * @category is
 * @description Android端末かどうかを判別する
 */
export const isAndroid = (): boolean => {
  return getMobileOS() === "Android";
};

/**
 * @category util
 * @description モバイル端末かどうかを判別する
 */
type OS = "Android" | "iOS" | "Other";
const getMobileOS = (): OS => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "Android";
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "iOS";
  }
  return "Other";
};
