module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/__test__/mock/styleMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
};
