/**
 * iOS端末かどうかを判別する
 * @category is
 */
export const isIOS = (): boolean => {
  return getMobileOS() === "iOS";
};

/**
 * Android端末かどうかを判別する
 * @category is
 */
export const isAndroid = (): boolean => {
  return getMobileOS() === "Android";
};

/**
 * モバイル端末かどうかを判別する
 * @category is
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
