const config = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'never'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}

module.exports = config
