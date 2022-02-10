export const sleep = (ms: number): Promise<null> => {
  return new Promise<null>((resolve) => setTimeout(resolve, ms));
};
