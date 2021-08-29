import { extractCurrentTransform } from "./_internal";

describe("extractCurrentTranslate", () => {
  it("should find translateValue", () => {
    const result = extractCurrentTransform(
      "translate3d(0, 20px, 40px) scale(1,1)"
    );
    expect(result.translateX).toBe("0");
    expect(result.translateY).toBe("20px");
    expect(result.translateZ).toBe("40px");
  });
  it("should set translate value undefined", () => {
    const result = extractCurrentTransform("scale(1,1)");
    expect(result.translateX).toBe(undefined);
    expect(result.translateY).toBe(undefined);
    expect(result.translateZ).toBe(undefined);
  });
  it("should find rotate value", () => {
    const result = extractCurrentTransform("rotate(45rad)");
    expect(result.rotate).toBe("45rad");
  });
  it("should find scale value", () => {
    const result = extractCurrentTransform(
      "translate3d(0, 20px, 40px) scale(1,0.5)"
    );
    expect(result.scaleX).toBe("1");
    expect(result.scaleY).toBe("0.5");
  });
  it("should find skew value", () => {
    const result = extractCurrentTransform(
      "translate3d(0, 20px, 40px) skew(0, 50deg)"
    );
    expect(result.skewX).toBe("0");
    expect(result.skewY).toBe("50deg");
  });
});
