import { getRangeOfIntersection, getRangeValueOfIntersection } from "./get-range-intersection";

describe("getRangeOfIntersection", () => {
  it("should return null if there is no intersection", () => {
    expect(getRangeOfIntersection([0, 1], [2, 3])).toBe(null);
  });
  it("should return the range of intersection", () => {
    expect(getRangeOfIntersection([0, 2], [1, 3])).toEqual([1, 2]);
  });
  it("should return the range of intersection", () => {
    expect(getRangeOfIntersection([1, 3], [0, 2])).toEqual([1, 2]);
  });
  it("should return the range of intersection", () => {
    expect(getRangeOfIntersection([0, 2], [0, 2])).toEqual([0, 2]);
  });
  it("should return the range of intersection", () => {
    expect(getRangeOfIntersection([2, 0], [1, 2])).toEqual([1, 2]);
  });
});
describe("getRangeValueOfIntersection", () => {
  it("should return zero if there is no intersection", () => {
    expect(getRangeValueOfIntersection([0, 1], [2, 3])).toBe(0);
  });
  it("should return the range of intersection", () => {
    expect(getRangeValueOfIntersection([0, 2], [1, 3])).toBe(1);
  });
  it("should return the range of intersection", () => {
    expect(getRangeValueOfIntersection([1, 3], [0, 2])).toBe(1);
  });
  it("should return the range of intersection", () => {
    expect(getRangeValueOfIntersection([0, 2], [0, 2])).toBe(2);
  });
  it("should return the range of intersection", () => {
    expect(getRangeValueOfIntersection([2, 0], [2, 1])).toBe(1);
  });
});
