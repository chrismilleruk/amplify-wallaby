// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/amplify/backend"],
  testMatch: [
    "<rootDir>/amplify/backend/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/amplify/backend/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
};
module.exports = config;
