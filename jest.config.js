// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      statements: 85,
      functions: 85,
      lines: 85
    }
  },
  maxWorkers: '4',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx', 'mjs'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/../ui-test-utils/src/jest.env.setup.js'],
  testEnvironment: '<rootDir>/../ui-test-utils/src/lng-test-env',
  testEnvironmentOptions: { url: 'http://localhost', resources: 'usable' },
  transform: {},
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
