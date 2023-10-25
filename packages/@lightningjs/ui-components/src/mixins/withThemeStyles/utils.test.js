import { generateComponentStyleSource } from './utils';
import { jest } from '@jest/globals';

// Mock other function calls
jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  executeWithContextRecursive: jest.fn(),
  clone: jest.fn(),
  generateSolution: jest.fn(),
  formatStyleObj: jest.fn(),
  removeEmptyObjects: jest.fn(),
  colorParser: jest.fn(),
  log: {
    warn: jest.fn()
  }
}));

describe('generateComponentStyleSource', () => {

  // Resetting all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('throws an error if theme is not an object', () => {
    expect(() => {
      generateComponentStyleSource({ theme: 'string' });
    }).toThrow('Expected theme to be an object');
  });

  it('throws an error if componentConfig is not an object', () => {
    expect(() => {
      generateComponentStyleSource({ componentConfig: 'string' });
    }).toThrow('Expected componentConfig to be an object');
  });

  it('throws an error if styleChain is not an array', () => {
    expect(() => {
      generateComponentStyleSource({ styleChain: 'string' });
    }).toThrow('Expected styleChain to be an array');
  });

  it('throws an error if inlineStyle is not an object', () => {
    expect(() => {
      generateComponentStyleSource({ inlineStyle: 'string' });
    }).toThrow('Expected inlineStyle to be an object');
  });

  it('throws an error if alias is not an array', () => {
    expect(() => {
      generateComponentStyleSource({ alias: 'string' });
    }).toThrow('Expected alias to be an array');
  });

  it('throws an error if componentName is not a string', () => {
    expect(() => {
      generateComponentStyleSource({ componentName: {} });
    }).toThrow('Expected componentName to be a string');
  });

  // More tests for functionality and edge cases can go here...
  // For example:

  // it('logs a deprecation warning if styleConfig is present in componentConfig', () => {
  //   generateComponentStyleSource({
  //     componentConfig: {
  //       styleConfig: {}
  //     },
  //     componentName: 'TestComponent'
  //   });
  //   expect(log.warn).toHaveBeenCalledWith(
  //     '[Deprecation Warning]: "styleConfig" in TestComponent will soon be deprecated. Refer to the theming section of the latest documentation for guidance on updates and alternatives.'
  //   );
  // });

  // ...and so on.

});

