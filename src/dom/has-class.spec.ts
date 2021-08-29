import { qs } from "./qs";
import { hasClass } from "./has-class";
import { addClass } from "./add-class";

describe("has-class", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const target = qs("div");
    expect(hasClass(target, "foo")).toBeFalsy();
    addClass(target, "foo");
    expect(hasClass(target, "foo")).toBeTruthy();
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
