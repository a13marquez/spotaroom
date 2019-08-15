module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '^.+\\.js[x]?$': 'babel-jest'
  },
  'collectCoverage': true,
  'setupFilesAfterEnv': ['<rootDir>/enzyme.config.js'],
  'moduleNameMapper': {
    '\\.scss$': '<rootDir>/src/__mocks__/fileMock.js',
  }
}