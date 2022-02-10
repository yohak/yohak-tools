import { qs } from "./qs";
import { qsa } from "./qsa";

describe("qsa", () => {
  it("should return as an array", () => {
    document.body.innerHTML = `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    `;
    const result = qsa("li");
    expect(result.length).toBe(3);
    expect(Array.isArray(result)).toBeTruthy();
  });
  it("should respectQueryRoot", () => {
    document.body.innerHTML = `
    <ul id="first">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ul id="second">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    `;
    const result1 = qsa("li");
    expect(result1.length).toBe(7);
    const target = qs("#second")!;
    const result2 = qsa("li", target);
    expect(result2.length).toBe(4);
  });
});
