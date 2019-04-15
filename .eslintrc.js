const config = {
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  globals: {
    module: true,
    process: true,
    require: true,
  },
  rules: {
    'vue/max-attributes-per-line': false,
    'vue/html-closing-bracket-newline': false,
    'vue/html-indent': false,
    'vue/html-self-closing': false,
  },
}

module.exports = config
