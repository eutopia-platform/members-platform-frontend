const config = {
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'vue'],
  transform: {
    '.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
}

module.exports = config
