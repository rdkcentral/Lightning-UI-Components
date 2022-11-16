// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/*.js'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text', 'html'],

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  maxWorkers: '4',

  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx', 'mjs'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  },

  // TODO: Need to fix these tests after monorepo refactor
  modulePathIgnorePatterns: [
    '<rootDir>/src/mixins/withExtensions',
    '<rootDir>/src/components/Tooltip',
    '<rootDir>/src/mixins/withHandleKey',
    '<rootDir>/src/mixins/withLayout',
    '<rootDir>/src/globals/context'
  ],

  // The root directory that Jest should scan for tests and modules within
  rootDir: '.',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['jest-webgl-canvas-mock'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: { url: 'http://localhost', resources: 'usable' },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [],

  // Ensure all is run as module
  transform: {},

  // Indicates whether each individual test should be reported during the run
  verbose: true // null,
};
