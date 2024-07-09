import {pxToVw} from "./convert-unit";

describe("pxToVw", () => {
  it("should work", () => {});
});
/* disabled test due to JSDOM's inability to mock document.documentElement.clientWidth
TODO: setup storybook to run tests in a browser environment
describe("pxToVw", () => {

  it("should work", () => {
    const result = pxToVw(512);
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result = pxToVw(512, true);
    expect(result).toBe("50vw");
  });
  it("should work", () => {
    const result = pxToVw("512px");
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result = pxToVw("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result = pxToVw("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result = pxToVw("1024");
    expect(result).toBe(100);
  });
});

describe("pxToVh", () => {
  it("should work", () => {
    const result = pxToVh(384);
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result = pxToVh(384, true);
    expect(result).toBe("50vh");
  });
  it("should work", () => {
    const result = pxToVh("384px");
    expect(result).toBe(50);
  });
  it("should work", () => {
    const result = pxToVh("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result = pxToVh("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result = pxToVh("768");
    expect(result).toBe(100);
  });
});

describe("vwToPx", () => {
  it("should work", () => {
    const result = vwToPx(50);
    expect(result).toBe(512);
  });
  it("should work", () => {
    const result = vwToPx(50, true);
    expect(result).toBe("512px");
  });
  it("should work", () => {
    const result = vwToPx("50vw");
    expect(result).toBe(512);
  });
  it("should work", () => {
    const result = vwToPx("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result = vwToPx("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result = vwToPx("100");
    expect(result).toBe(1024);
  });
});

describe("vhToPx", () => {
  it("should work", () => {
    const result = vhToPx(50);
    expect(result).toBe(384);
  });
  it("should work", () => {
    const result = vhToPx(50, true);
    expect(result).toBe("384px");
  });
  it("should work", () => {
    const result = vhToPx("50vw");
    expect(result).toBe(384);
  });
  it("should work", () => {
    const result = vhToPx("50%");
    expect(result).toBe(undefined);
  });
  it("should work", () => {
    const result = vhToPx("0");
    expect(result).toBe(0);
  });
  it("should work", () => {
    const result = vhToPx("100");
    expect(result).toBe(768);
  });
});
*/
