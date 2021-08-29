import { qs } from "./qs";
import { addClass } from "./add-class";
import { hasClass } from "./has-class";
import { qsa } from "./qsa";

describe("addClass", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const target = qs("div");
    addClass(target, "foo");
    expect(hasClass(target, "foo")).toBeTruthy();
  });
  it("should add multiple classes", () => {
    const target = qs("div");
    expect(hasClass(target, "foo")).toBeFalsy();
    expect(hasClass(target, "bar")).toBeFalsy();
    addClass(target, ["foo", "bar"]);
    expect(hasClass(target, "foo")).toBeTruthy();
    expect(hasClass(target, "bar")).toBeTruthy();
  });
  it("should handle multiple targets", () => {
    const targets = qsa("li");
    addClass(targets, "foo");
    targets.forEach((elm) => {
      expect(hasClass(elm, "foo")).toBeTruthy();
    });
  });
  it("should handle an instance of NodeList", () => {
    const targets = document.querySelectorAll("li");
    addClass(targets, "foo");
    targets.forEach((elm) => {
      expect(hasClass(elm, "foo")).toBeTruthy();
    });
  });
});

const fixture = `
<div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
`;
