import { qs } from "./qs";

describe("qs", () => {
  it("should work as document.querySelector", () => {
    document.body.innerHTML = `
    <div class="foo">FOO</div>
    `;
    const result = qs(".foo");
    expect(result.textContent).toBe("FOO");
  });
  it("should respect query root", () => {
    document.body.innerHTML = `
      <div id="first">
        <p>this is first's child</p>
      </div>
      <div id="second">
        <p>this is second's child</p> 
      </div>
    `;
    const result1 = qs("p");
    expect(result1.textContent).toBe("this is first's child");
    const target = qs("#second");
    const result2 = qs("p", target);
    expect(result2.textContent).toBe("this is second's child");
  });
});
