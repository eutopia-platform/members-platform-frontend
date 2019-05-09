const testRegex = ({
  TEST: '\\.test.js$',
  VISUAL_TEST: '\\.visualTest.js$',
})[process.env.NODE_ENV]

const config = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'vue'],
  transform: {
    '.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex,
}

module.exports = config
