import { setStyle } from "./set-style";
import { qs } from "../dom/qs";
import { qsa } from "../dom/qsa";

describe("setClass", () => {
  let section: HTMLElement;
  beforeEach(() => {
    document.body.innerHTML = fixture;
    section = qs("section")!;
  });
  it("should work", () => {
    setStyle(section, { display: "none" });
    expect(section.style.display).toBe("none");
  });
  it("should accept value without unit", () => {
    setStyle(section, { marginLeft: 20 });
    expect(section.style.marginLeft).toBe("20px");
  });
  it("should accept value with unit", () => {
    setStyle(section, { width: "20vw" });
    expect(section.style.width).toBe("20vw");
  });
  it("should accept opacity with number", () => {
    setStyle(section, { opacity: 0.5 });
    expect(section.style.opacity).toBe("0.5");
  });
  describe("transformValues", () => {
    it("should apply translate", () => {
      setStyle(section, { translateX: 20 });
      expect(section.style.transform).toBe("translate3d(20px, 0, 0)");
    });
    it("should apply scale", () => {
      setStyle(section, { scaleY: 0.1 });
      expect(section.style.transform).toBe("scale(1, 0.1)");
    });
    it("should apply rotate", () => {
      setStyle(section, { rotate: 90 });
      expect(section.style.transform).toBe("rotate(90deg)");
    });
    it("should apply multiple transform values", () => {
      setStyle(section, {
        translateX: 20,
        translateY: 10,
        scaleX: 0.5,
        rotate: 45,
        skewX: 45,
      });
      expect(section.style.transform).toBe(
        "translate3d(20px, 10px, 0) rotate(45deg) scale(0.5, 1) skew(45deg, 0)",
      );
    });
    it("should respect current value", () => {
      setStyle(section, { translateX: 20 });
      expect(section.style.transform).toBe("translate3d(20px, 0, 0)");
      setStyle(section, { translateY: 20 });
      expect(section.style.transform).toBe("translate3d(20px, 20px, 0)");
      setStyle(section, { translateX: 50, scaleX: 1.5, rotate: 20, skewY: 15 });
      expect(section.style.transform).toBe(
        "translate3d(50px, 20px, 0) rotate(20deg) scale(1.5, 1) skew(0, 15deg)",
      );
      setStyle(section, { translateZ: -15, scaleY: 3, skewX: "30rad" });
      expect(section.style.transform).toBe(
        "translate3d(50px, 20px, -15px) rotate(20deg) scale(1.5, 3) skew(30rad, 15deg)",
      );
    });
  });
  it("should accept multiple object", () => {
    const targets = qsa("p");
    setStyle(targets, { display: "none" });
  });
});

const fixture = `
  <section>
    <h1>This is title</h1>
    <p>hoge</p>
    <p>moge</p>
  </section>
`;
