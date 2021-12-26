import { qs } from "./qs";
import { hasClass } from "./has-class";
import { removeClass } from "./remove-class";
import { qsa } from "./qsa";

describe("removeClass", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const target = qs("div");
    expect(hasClass(target, "hoge")).toBeTruthy();
    removeClass(target, "hoge");
    expect(hasClass(target, "hoge")).toBeFalsy();
  });
  it("should accept multiple objects", () => {
    const targets = qsa("li");
    expect(targets.map((elm) => hasClass(elm, "moge"))).toEqual([true, false, false, true, false]);
    removeClass(targets, "moge");
    expect(targets.map((elm) => hasClass(elm, "moge"))).toEqual([false, false, false, false, false]);
  });
});
const fixture = `
<div class="hoge">
  <ul>
    <li class="moge">1</li>
    <li class="hoge">2</li>
    <li>3</li>
    <li class="moge">4</li>
    <li>5</li>
  </ul>
</div>
`;
