const testRegex = {
  TEST: '\\.test.js$',
  VISUAL_TEST: '\\.visualTest.js$',
}[process.env.NODE_ENV]

const config = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'vue'],
  transform: {
    '.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
  setupFiles: ['<rootDir>/testFiles/jest.shared.setup.js'],
  testRegex,
}

if (process.env.NODE_ENV === 'VISUAL_TEST') {
  config.preset = 'jest-puppeteer'
}

module.exports = config
