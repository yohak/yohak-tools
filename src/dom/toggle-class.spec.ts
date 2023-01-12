import { hasClass } from "./has-class";
import { qs } from "./qs";
import { toggleClass } from "./toggle-class";

describe("toggleClass", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const target = qs("div.wrapper")!;
    expect(hasClass(target, "wrapper")).toBeTruthy();
    toggleClass(target, "wrapper");
    expect(hasClass(target, "wrapper")).toBeFalsy();
  });
  it("should toggle with alt token", () => {
    const target = qs("li.active")!;
    expect(hasClass(target, "active")).toBeTruthy();
    toggleClass(target, "active", "inactive");
    expect(hasClass(target, "active")).toBeFalsy();
    expect(hasClass(target, "inactive")).toBeTruthy();
  });
  it("should toggle with alt token", () => {
    const target = qs("ul")!;
    expect(hasClass(target, "active")).toBeFalsy();
    toggleClass(target, "active", "inactive");
    expect(hasClass(target, "active")).toBeTruthy();
    expect(hasClass(target, "inactive")).toBeFalsy();
  });
});

const fixture = `
<div class="wrapper">
  <ul>
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
`;
