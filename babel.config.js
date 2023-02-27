module.exports = {
  ignore: ["**/*.test.ts", "**/*.spec.ts", "**/*.test.js", "**/*.spec.js"],
  presets: [
    [
      "@babel/preset-env",
      { modules: ["esm"].includes(process.env.BABEL_ENV) ? false : "commonjs" },
    ],
    ["@babel/preset-typescript"],
  ],
  plugins: [["@babel/plugin-transform-runtime", { corejs: 3 }]],
};
