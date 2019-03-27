const config = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6
  }
};

module.exports = config;
