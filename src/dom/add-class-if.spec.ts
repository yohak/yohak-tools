import { qs } from "./qs";
import { hasClass } from "./has-class";
import { addClassIf } from "./add-class-if";
import { qsa } from "./qsa";

describe("addClassIf", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const target = qs("div");
    expect(hasClass(target, "foo")).toBeFalsy();
    addClassIf(target, false, "foo");
    expect(hasClass(target, "foo")).toBeFalsy();
    addClassIf(target, true, "foo");
    expect(hasClass(target, "foo")).toBeTruthy();
  });
  it("should accept function as condition", () => {
    const targets = qsa("li");
    addClassIf(
      targets,
      (target) => target.textContent === "2",
      "found",
      "not-found"
    );
    expect(hasClass(targets[0], "not-found")).toBeTruthy();
    expect(hasClass(targets[1], "found")).toBeTruthy();
    expect(hasClass(targets[2], "not-found")).toBeTruthy();
    addClassIf(
      targets,
      (target) => target.textContent === "1",
      "found",
      "not-found"
    );
    expect(hasClass(targets[0], "not-found")).toBeFalsy();
    expect(hasClass(targets[0], "found")).toBeTruthy();
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
