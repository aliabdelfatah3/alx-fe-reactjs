module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest", // Use babel-jest to handle JS/JSX files
  },
  testEnvironment: "jest-environment-jsdom", // Use jsdom for DOM-based testing
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Optional for extending matchers
  // moduleNameMapper: {
  //   "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  // },
};
