import { qs } from "../dom/qs";
import { setStyle } from "./set-style";
import { getComputedStyleValue } from "./get-computed-style";

describe("getComputedStyle", () => {
  let section: HTMLElement;
  beforeEach(() => {
    document.body.innerHTML = fixture;
    section = qs("section");
    setStyle(section, {
      marginLeft: 20,
    });
  });
  it("should work", () => {
    const result = getComputedStyleValue(section, "marginTop");
    expect(result).toBe(100);
  });
  it("should work", () => {
    const result = getComputedStyleValue(section, "translateX");
    expect(result).toBe(100);
  });
  it("should work", () => {
    const result = getComputedStyleValue(section, "translateY");
    expect(result).toBe("50%");
  });
});
const fixture = `
  <style rel="stylesheet">
    section{
      margin:100px;
      transform: translate3d(100px, 50%, 0);
    }
  </style>
  <section>
    <h1>This is title</h1>
    <p>hoge</p>
    <p>moge</p>
  </section>
`;
