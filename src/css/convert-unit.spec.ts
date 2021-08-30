import { pxToVh, pxToVw, vhToPx, vwToPx } from "./convert-unit";

describe("pxToVw", () => {
  it("should work", () => {
    const result: number = pxToVw(512);
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result: string = pxToVw(512, true);
    expect(result).toBe("50vw");
  });
  it("should work", () => {
    const result: number = pxToVw("512px");
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result: number = pxToVw("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result: number = pxToVw("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result: number = pxToVw("1024");
    expect(result).toBe(100);
  });
});

describe("pxToVh", () => {
  it("should work", () => {
    const result: number = pxToVh(384);
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result: string = pxToVh(384, true);
    expect(result).toBe("50vh");
  });
  it("should work", () => {
    const result: number = pxToVh("384px");
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result: number = pxToVh("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result: number = pxToVh("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result: number = pxToVh("768");
    expect(result).toBe(100);
  });
});

describe("vwToPx", () => {
  it("should work", () => {
    const result: number = vwToPx(50);
    expect(result).toBe(512);
  });
  it("should work", () => {
    const result: string = vwToPx(50, true);
    expect(result).toBe("512px");
  });
  it("should work", () => {
    const result: number = vwToPx("50vw");
    expect(result).toBe(512);
  });
  it("should work", () => {
    const result: number = vwToPx("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result: number = vwToPx("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result: number = vwToPx("100");
    expect(result).toBe(1024);
  });
});

describe("vhToPx", () => {
  it("should work", () => {
    const result: number = vhToPx(50);
    expect(result).toBe(384);
  });
  it("should work", () => {
    const result: string = vhToPx(50, true);
    expect(result).toBe("384px");
  });
  it("should work", () => {
    const result: number = vhToPx("50vw");
    expect(result).toBe(384);
  });
  it("should work", () => {
    const result: number = vhToPx("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result: number = vhToPx("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result: number = vhToPx("100");
    expect(result).toBe(768);
  });
});
