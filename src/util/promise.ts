/**
 * 指定時間後にPromiseを完了する。主にasync/awaitと組み合わせて使う。
 * @category util
 * @param ms 待機するミリ秒数
 */

export const sleep = (ms: number): Promise<null> => {
  return new Promise<null>((resolve) => setTimeout(resolve, ms));
};
