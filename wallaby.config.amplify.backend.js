module.exports = function (wallaby) {
  return {
    files: [
      "amplify/backend/function/**/*.{js,jsx,ts,tsx}",
      {
        pattern: "amplify/backend/function/**/*.{spec,test}.{js,jsx,ts,tsx}",
        ignore: true,
      },
    ],
    tests: ["amplify/backend/function/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    env: {
      type: "node",
    },
    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript({
        module: "commonjs",
        jsx: "React",
        isolatedModules: true,
        outDir: "./src",
      }),
    },
    testRunner: {
      config: "jest.config.amplify.backend.js"
    }
  };
};
