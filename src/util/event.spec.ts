import { setOnReady } from "./event";

describe("setOnReady", () => {
  it("should accept normal handler", () => {
    setOnReady(() => {});
  });
  it("should accept async handler", () => {
    setOnReady(async () => {});
  });
});

