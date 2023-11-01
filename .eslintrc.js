module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true, // Add this for Jest-specific global variables
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended", // Add this to use recommended Jest rules
  ],
  plugins: [
    "jest", // Add the Jest plugin
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // You can add or override specific rules here
  },
};
