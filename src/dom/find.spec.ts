/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { findByDataSet, findMultipleByDataSet } from "./find";

describe("findByDataSet", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const result = findByDataSet("myList")!;
    expect(result.tagName).toBe("UL");
  });
  it("should accept any case", () => {
    const result = findByDataSet("myList", "jsTarget")!;
    expect(result.tagName).toBe("UL");
  });
  it("should find any items with dataset", () => {
    const result = findByDataSet(null, "jsTarget")!;
    expect(result.tagName).toBe("UL");
  });
  it("should return null", () => {
    const result = findByDataSet("myyList")!;
    expect(result).toBe(null);
  });
});

describe("findMultipleByDataSet", () => {
  beforeEach(() => {
    document.body.innerHTML = fixture;
  });
  it("should work", () => {
    const result = findMultipleByDataSet("1", "listItem")!;
    expect(result.length).toBe(1);
  });
  it("should find any items with dataset", () => {
    const result = findMultipleByDataSet(null, "listItem")!;
    expect(result.length).toBe(3);
  });
});

const fixture = `
<div>
  <ul data-js-target="myList">
    <li data-list-item="1">1</li>
    <li data-list-item="2">2</li>
    <li data-list-item="3">3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
`;
