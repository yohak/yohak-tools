import type { JestConfigWithTsJest } from "ts-jest";
const config: JestConfigWithTsJest = {
  verbose: true,
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/js-with-ts-esm",
  transform: {
    "^.+\\.m?[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!(?:.pnpm/)?change-case)"],
};
export default config;
