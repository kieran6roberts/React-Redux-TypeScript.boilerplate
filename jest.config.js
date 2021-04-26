module.exports = {
    testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/public/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
     transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
        ".(css|scss)$": "<rootDir>/src/__mocks__/stylesMock.ts"
    },
      testMatch: [
          "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
          "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
      ],
}