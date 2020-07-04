module.exports = {
    moduleFileExtensions: [
      "js",
      "jsx",
    ],
    testMatch: [
      "**/*.(test|spec).(js|jsx)"
    ],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js",],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "img",
      // "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js",
      "\\.(s?css|less)$": "identity-obj-proxy"
    },
  };
