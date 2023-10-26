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

  it('will provide correct source for a component with no styles', () => {
    const source = generateComponentStyleSource();
    expect(source).toStrictEqual({});
  });

  it('will provide correct source for a component with componentDefaults for base', () => {
    const source = generateComponentStyleSource({
      styleChain: [
        {
          style: {
            base: {
              color: 'primary'
            }
          }
        }
      ]
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'primary' },
      unfocused_inverse: { color: 'primary' },
      unfocused_brand: { color: 'primary' },
      focused_neutral: { color: 'primary' },
      focused_inverse: { color: 'primary' },
      focused_brand: { color: 'primary' },
      disabled_neutral: { color: 'primary' },
      disabled_inverse: { color: 'primary' },
      disabled_brand: { color: 'primary' }
    });
  });

  it('should have all objects in source be pointers to the same object in memory', () => {
    const source = generateComponentStyleSource({
      styleChain: [
        {
          style: {
            base: {
              color: 'primary'
            }
          }
        }
      ]
    });
   
    const objects = Object.values(source);
    const firstObject = objects[0];

    for (let i = 1; i < objects.length; i++) {
      expect(objects[i]).toBe(firstObject);
    }
  });

  it('will provide correct source for a component with componentDefaults for tone', () => {
    const source = generateComponentStyleSource({
      styleChain: [
        {
          style: {
            tone: {
              neutral: {
                color: 'primary'
              }
            }
          }
        }
      ]
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'primary' },
      focused_neutral: { color: 'primary' },
      disabled_neutral: { color: 'primary' }
    });
  });

  it('will provide correct source for a component with componentDefaults for mode', () => {
    const source = generateComponentStyleSource({
      styleChain: [
        {
          style: {
            mode: {
              unfocused: {
                color: 'primary'
              }
            }
          }
        }
      ]
    });
    // TODO: Feels like this should be normalized
    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'primary' },
      unfocused_inverse: { color: 'primary' },
      unfocused_brand: { color: 'primary' }
    });
  });

  it('will provide correct source for a component with componentConfig', () => {
    const source = generateComponentStyleSource({
      componentConfig: {
        style: {
          base: {
            color: 'primary'
          }
        }
      }
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'primary' },
      unfocused_inverse: { color: 'primary' },
      unfocused_brand: { color: 'primary' },
      focused_neutral: { color: 'primary' },
      focused_inverse: { color: 'primary' },
      focused_brand: { color: 'primary' },
      disabled_neutral: { color: 'primary' },
      disabled_inverse: { color: 'primary' },
      disabled_brand: { color: 'primary' }
    });
  });

  it('will provide correct source for a component with componentConfig with tone', () => {
    const source = generateComponentStyleSource({
      componentConfig: {
        style: {
          base: {
            color: 'primary'
          }, 
          tone: {
            neutral: {
              color: 'secondary'
            }
          }
        }
      }
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'secondary' },
      unfocused_inverse: { color: 'primary' },
      unfocused_brand: { color: 'primary' },
      focused_neutral: { color: 'secondary' },
      focused_inverse: { color: 'primary' },
      focused_brand: { color: 'primary' },
      disabled_neutral: { color: 'secondary' },
      disabled_inverse: { color: 'primary' },
      disabled_brand: { color: 'primary' }
    });
  });

  
});
