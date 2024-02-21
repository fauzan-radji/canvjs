export default {
  testEnvironment: "jsdom",
  setupFiles: ["jest-canvas-mock"],
  testRegex: "/tests/.*\\.(test|spec)?\\.js$",
  moduleFileExtensions: ["js"],
};
