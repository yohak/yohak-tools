import { degreeToRadian, radianToDegree } from "./angles";

describe("degreeToRadian", () => {
  it("should work", () => {
    const result = degreeToRadian(180);
    expect(result).toBe(Math.PI);
  });
});

describe("radianToDegree", () => {
  it("should work", () => {
    const result = radianToDegree(Math.PI);
    expect(result).toBe(180);
  });
});
