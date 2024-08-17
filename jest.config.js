const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  collectCoverageFrom: [
    "./src/**",
    "!./**/_*.tsx",
    "!./src/lib/utils/index.ts",
    "!./src/lib/contentful/index.ts",
    "!./src/schemas/**/*",
  ],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@ui/(.*)$": "<rootDir>/src/components/ui/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
