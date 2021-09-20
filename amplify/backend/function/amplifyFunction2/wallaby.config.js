module.exports = function (wallaby) {
  return {
    autoDetect: true,
    // files: [
    //   "**/*.{js,jsx,ts,tsx}",
    //   {
    //     pattern: "**/*.{spec,test}.{js,jsx,ts,tsx}",
    //     ignore: true,
    //   },
    // ],
    // tests: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
    env: {
      type: "node",
    },
    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript({
        typescript: require('typescript'),
        module: "commonjs",
        target: "es2020",
        isolatedModules: true,
        useStandardDefaults: true
      }),
    },
    testFramework: 'jest'
  };
};
