import { getStyle } from "./get-style";
import { setStyle } from "./set-style";
import { qs } from "../dom/qs";

describe("getStyle", () => {
  let section: HTMLElement;
  beforeEach(() => {
    document.body.innerHTML = fixture;
    section = qs("section");
    setStyle(section, {
      display: "flex",
      marginLeft: 20,
      translateX: "100%",
      scaleX: 0.1,
      scaleY: 0.2,
      opacity: 1,
    });
  });

  it("should work", () => {
    const result = getStyle(section, "display");
    expect(result).toBe("flex");
  });
  it("should parse to number", () => {
    const result = getStyle(section, "opacity");
    expect(result).toBe(1);
  });
  it("should strip px", () => {
    const result = getStyle(section, "marginLeft");
    expect(result).toBe(20);
  });
  it("should return undefined", () => {
    const result = getStyle(section, "marginRight");
    expect(result).toBe(undefined);
  });
  it("should find transform value", () => {
    const result = getStyle(section, "translateX");
    expect(result).toBe("100%");
  });
});

const fixture = `
  <section>
    <h1>This is title</h1>
    <p>hoge</p>
    <p>moge</p>
  </section>
`;
