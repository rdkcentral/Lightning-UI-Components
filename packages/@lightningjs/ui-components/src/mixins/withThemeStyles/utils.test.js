import {
  getCharacterValue,
  getCharacterSum,
  getHash,
  executeWithContextRecursive,
  isPlainObject,
  getSubTheme,
  getComponentConfig,
  getPrototypeChain,
  removeEmptyObjects,
  findPropertiesBySubProperty,
  generateSolution,
  enforceContract,
  generateComponentStyleSource,
  generateStyle,
  generateNameFromPrototypeChain,
  getStyleChainMemoized,
  getStyleChain,
  formatStyleObj,
  replaceAliasValues,
  colorParser
} from './utils';

import { jest } from '@jest/globals';

// Mock other function calls
jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  executeWithContextRecursive: jest.fn(),
  clone: jest.fn(),
  generateSolution: jest.fn(),
  formatStyleObj: jest.fn(),
  getValFromObjPath: jest.fn(),
  removeEmptyObjects: jest.fn(),
  getHexColor: jest.fn(),
  colorParser: jest.fn(),
  log: {
    warn: jest.fn()
  }
}));

jest.mock('../../utils', () => ({
  clone: jest.fn(),
  getValFromObjPath: jest.fn(),
  getHexColor: jest.fn()
}));

jest.mock('../../globals/context/logger', () => ({
  warn: jest.fn()
}));

describe('getCharacterValue', () => {
  it('should calculate the correct character value for a lowercase letter', () => {
    const charValue = getCharacterValue('a', 0);
    // ASCII value of 'a' is 97, and index is 0
    // Expected result: 97 * 1 = 97
    expect(charValue).toEqual(97);
  });

  it('should calculate the correct character value for an uppercase letter', () => {
    const charValue = getCharacterValue('Z', 2);
    // ASCII value of 'Z' is 90, and index is 2
    // Expected result: 90 * 3 = 270
    expect(charValue).toEqual(270);
  });

  it('should calculate the correct character value for a special character', () => {
    const charValue = getCharacterValue('@', 5);
    // ASCII value of '@' is 64, and index is 5
    // Expected result: 64 * 6 = 384
    expect(charValue).toEqual(384);
  });

  it('should calculate the correct character value for a space character', () => {
    const charValue = getCharacterValue(' ', 1);
    // ASCII value of space ' ' is 32, and index is 1
    // Expected result: 32 * 2 = 64
    expect(charValue).toEqual(64);
  });

  it('should calculate the correct character value for a digit character', () => {
    const charValue = getCharacterValue('7', 3);
    // ASCII value of '7' is 55, and index is 3
    // Expected result: 55 * 4 = 220
    expect(charValue).toEqual(220);
  });
});

describe('getCharacterSum', () => {
  it('should return the expected sum of characters for a given object', () => {
    const obj = {
      a: 1,
      b: 'test'
    };
    // 'a1btest' => 97*1 + 49*2 + 98*3 + 116*4 + 101*5 + 115*6 + 116*7
    const expectedSum =
      97 * 1 + 49 * 2 + 98 * 3 + 116 * 4 + 101 * 5 + 115 * 6 + 116 * 7;
    expect(getCharacterSum(obj)).toBe(expectedSum);
  });

  it('should handle objects with keys in different orders consistently', () => {
    const obj1 = {
      a: 1,
      b: 'test'
    };
    const obj2 = {
      b: 'test',
      a: 1
    };
    expect(getCharacterSum(obj1)).toBe(getCharacterSum(obj2));
  });

  it('should work with more complex objects', () => {
    const obj = {
      foo: 'bar',
      baz: 123,
      qux: {
        quux: 'corge'
      }
    };

    // After sorting the object and its nested objects and then removing unwanted characters,
    // the expected string would be 'baz123foobarquxquuxcorge'
    const expectedSum =
      98 * 1 +
      97 * 2 +
      122 * 3 +
      49 * 4 +
      50 * 5 +
      51 * 6 +
      102 * 7 +
      111 * 8 +
      111 * 9 +
      98 * 10 +
      97 * 11 +
      114 * 12 +
      113 * 13 +
      117 * 14 +
      120 * 15 +
      113 * 16 +
      117 * 17 +
      117 * 18 +
      120 * 19 +
      99 * 20 +
      111 * 21 +
      114 * 22 +
      103 * 23 +
      101 * 24;

    expect(getCharacterSum(obj)).toBe(expectedSum);
  });
});

describe('getHash', () => {
  it('should return a string', () => {
    const result = getHash('test');
    expect(typeof result).toBe('string');
  });

  it('should return the same hash for the same input', () => {
    const input = 'test';
    const result1 = getHash(input);
    const result2 = getHash(input);
    expect(result1).toBe(result2);
  });

  it('should return different hashes for different inputs', () => {
    const input1 = 'test1';
    const input2 = 'test2';
    const result1 = getHash(input1);
    const result2 = getHash(input2);
    expect(result1).not.toBe(result2);
  });
});

describe('executeWithContextRecursive', () => {
  it('should execute the callback function with the provided context', () => {
    const context = { foo: 'bar' };
    const callback = jest.fn();
    executeWithContextRecursive(callback, context);
    expect(callback).toHaveBeenCalledWith(context);
  });

  it('should execute the callback function with the provided context and child contexts', () => {
    const context = { foo: 'bar', children: [{ baz: 'qux' }] };
    const callback2 = jest.fn(theme => ({ base2: theme.foo }));
    const callback = jest.fn(() => ({ base: callback2 }));
    const result = executeWithContextRecursive(callback, context);
    expect(callback).toHaveBeenCalledWith(context);
    expect(callback2).toHaveBeenCalledWith(context);
    expect(callback2).toHaveReturnedWith({ base2: 'bar' }) 
    expect(result).toEqual({ base: { base2: 'bar' } });
  });

  it('should execute the callback function with the provided context and nested child contexts', () => {
    const context = {
      foo: 'bar',
      children: [{ baz: 'qux', children: [{ fizz: 'buzz' }] }]
    };
    const callback = jest.fn();
    executeWithContextRecursive(callback, context);
    expect(callback).toHaveBeenCalledWith(context);
  });
});

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for non-plain objects', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject('')).toBe(false);
    expect(isPlainObject(42)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(/foo/)).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
  });
});

// Tests for the updated getSubTheme function
describe('getSubTheme', () => {
  it('should return the correct sub-theme when it exists and is a string', () => {
    const theme = {
      subTheme: 'primary',
      p: {
        subTheme: 'secondary'
      }
    };
    expect(getSubTheme(theme)).toBe('primary');
  });

  it('should return the parent sub-theme when the main object’s subTheme is not a string', () => {
    const theme = {
      subTheme: 123, // Not a string
      p: {
        subTheme: 'secondary',
        p: {
          subTheme: 'tertiary'
        }
      }
    };
    expect(getSubTheme(theme)).toBe('secondary');
  });

  it('should return undefined if neither the object nor its parents have a subTheme of type string', () => {
    const theme = {
      subTheme: 123, // Not a string
      p: {
        subTheme: { name: 'not-a-string' }, // Not a string
        p: {}
      }
    };
    expect(getSubTheme(theme)).toBeUndefined();
  });
});

describe('getComponentConfig', () => {
  it('should return the component config for a given component name', () => {
    const componentName = 'MyComponent';
    const expectedConfig = {
      prop1: 'value1',
      prop2: 'value2'
    };

    function MyClass() {
      const instance = Object.create(MyClass.prototype);
      instance.theme = {
        componentConfig: {
          [componentName]: expectedConfig
        }
      };
      return instance;
    }

    MyClass.__componentName = componentName;
    const config = getComponentConfig(new MyClass());
    expect(config).toEqual(expectedConfig);
  });

  it('should return an empty object if the component config is not found', () => {
    const componentName = 'MyComponent';
    const expectedConfig = {
      prop1: 'value1',
      prop2: 'value2'
    };

    function MyClass() {
      const instance = Object.create(MyClass.prototype);
      instance.theme = {
        componentConfig: {
          Foo: expectedConfig
        }
      };
      return instance;
    }

    MyClass.__componentName = componentName;
    const config = getComponentConfig(new MyClass());
    expect(config).toEqual({});
  });
});

describe('getPrototypeChain', () => {
  it('should return an empty array if prototypes do not contain __componentName', () => {
    const obj = {};
    const chain = getPrototypeChain(obj);
    expect(chain).toEqual([]);
  });

  it('should return an array of prototype chain for a given object with custom prototype', () => {
    function MyClass() {
      const instance = Object.create(MyClass.prototype)
      instance.constructor = {
        __componentName : 'MyClass'
      }
      return instance
    }
    
    function MyClass2() {
      this.prototype = new MyClass(this)
      const instance = Object.create(new MyClass(this))
      instance.constructor = {
        __componentName : 'MyClass2'
      }
      return instance
    }

    const chain = getPrototypeChain(new MyClass2());
    console.log(chain)
    expect(chain).toEqual([ 'MyClass2', 'MyClass' ]);
  });

  it('should return an empty array for a null object', () => {
    const obj = null;
    const chain = getPrototypeChain(obj);
    expect(chain).toEqual([]);
  });

  it('should return an empty array for an undefined object', () => {
    const obj = undefined;
    const chain = getPrototypeChain(obj);
    expect(chain).toEqual([]);
  });
});

describe('removeEmptyObjects', () => {
  it('should remove empty objects from a given object', () => {
    const obj = {
      a: {
        b: {},
        c: 'hello',
        d: {
          e: {},
          f: 'world'
        }
      },
      g: {},
      h: 'foo',
      i: {
        j: {},
        k: 'bar'
      }
    };
    const expected = {
      a: {
        c: 'hello',
        d: {
          f: 'world'
        }
      },
      h: 'foo',
      i: {
        k: 'bar'
      }
    };
    const result = removeEmptyObjects(obj);
    expect(result).toEqual(expected);
  });

  it('should return an empty object if given an empty object', () => {
    const obj = {};
    const expected = {};
    const result = removeEmptyObjects(obj);
    expect(result).toEqual(expected);
  });

  it('should return the same object if no empty objects are present', () => {
    const obj = {
      a: {
        b: {
          c: 'hello'
        }
      },
      d: 'world'
    };
    const expected = {
      a: {
        b: {
          c: 'hello'
        }
      },
      d: 'world'
    };
    const result = removeEmptyObjects(obj);
    expect(result).toEqual(expected);
  });
});

describe('findPropertiesBySubProperty', () => {
  const obj = {
    a: {
      b: {
        c: 'value1',
        d: 'value2'
      },
      e: {
        f: 'value3'
      }
    },
    g: {
      h: {
        i: 'value4'
      }
    }
  };

  it('should return an empty array if the object is empty', () => {
    expect(findPropertiesBySubProperty({}, 'c')).toEqual([]);
  });

  it('should return an empty array if the subProperty is not found', () => {
    expect(findPropertiesBySubProperty(obj, 'z')).toEqual([]);
  });

  it('should return an array of matching properties', () => {
    expect(findPropertiesBySubProperty(obj, 'c')).toEqual(['value1']);
    expect(findPropertiesBySubProperty(obj, 'd')).toEqual(['value2']);
    expect(findPropertiesBySubProperty(obj, 'f')).toEqual(['value3']);
    expect(findPropertiesBySubProperty(obj, 'i')).toEqual(['value4']);
  });

});

describe.only('createSharedReferences', () => {
  it('should return an empty object if no arguments are passed', () => {
    const result = createSharedReferences();
    expect(result).toEqual({});
  });

  it('should return an object with the same keys as the input object', () => {
    const input = {
      a: 1,
      b: 2,
      c: 3
    };
    const result = createSharedReferences(input);
    expect(Object.keys(result)).toEqual(Object.keys(input));
  });

  it('should return an object with the same values as the input object', () => {
    const input = {
      a: 1,
      b: 2,
      c: 3
    };
    const result = createSharedReferences(input);
    expect(Object.values(result)).toEqual(Object.values(input));
  });

  it('should return an object with shared references for equal values', () => {
    const input = {
      a: 1,
      b: 2,
      c: 1
    };
    const result = createSharedReferences(input);
    expect(result.a).toBe(result.c);
  });

  it('should return an object with no shared references for unequal values', () => {
    const input = {
      a: { x: 1 },
      b: { x: 2 },
      c: { x: 1 }
    };
    const result = createSharedReferences(input);
    expect(result.a).not.toBe(result.c);
  });
});

describe('getUniqueProperties', () => {
  it('should return an empty array if no arguments are passed', () => {
    const result = getUniqueProperties();
    expect(result).toEqual([]);
  });

  it('should return an empty array if an empty object is passed', () => {
    const result = getUniqueProperties({});
    expect(result).toEqual([]);
  });

  it('should return an array of unique properties', () => {
    const input = {
      a: 1,
      b: 2,
      c: 3,
      d: 1,
      e: 2
    };
    const result = getUniqueProperties(input);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should return an array of unique properties for nested objects', () => {
    const input = {
      a: {
        x: 1,
        y: 2
      },
      b: {
        x: 2,
        y: 3
      },
      c: {
        x: 1,
        y: 2
      }
    };
    const result = getUniqueProperties(input);
    expect(result).toEqual(['a', 'b']);
  });

  it('should return an array of unique properties for arrays of objects', () => {
    const input = [
      {
        a: 1,
        b: 2
      },
      {
        a: 2,
        b: 3
      },
      {
        a: 1,
        b: 2
      }
    ];
    const result = getUniqueProperties(input);
    expect(result).toEqual(['a', 'b']);
  });
});

import { generatePayload } from './utils';

describe('generatePayload', () => {
  it('should return an object with the correct properties', () => {
    const payload = generatePayload('example', { foo: 'bar' });
    expect(payload).toEqual({
      type: 'example',
      payload: { foo: 'bar' }
    });
  });

  it('should return an object with an empty payload if none is provided', () => {
    const payload = generatePayload('example');
    expect(payload).toEqual({
      type: 'example',
      payload: {}
    });
  });
});

describe('generateSolution', () => {
  it('should return a string with the correct format', () => {
    const solution = generateSolution('example', { foo: 'bar' });
    expect(typeof solution).toBe('string');
    expect(solution).toMatch(/\/\/ example/);
    expect(solution).toMatch(/const solution = { foo: 'bar' };/);
    expect(solution).toMatch(/export default solution;/);
  });

  it('should return a string with an empty object if no payload is provided', () => {
    const solution = generateSolution('example');
    expect(typeof solution).toBe('string');
    expect(solution).toMatch(/\/\/ example/);
    expect(solution).toMatch(/const solution = {};/);
    expect(solution).toMatch(/export default solution;/);
  });
});

describe('enforceContract', () => {
  it('should throw an error if the value does not match the contract', () => {
    const contract = {
      name: 'string',
      age: 'number',
      isEmployed: 'boolean'
    };
    const value = {
      name: 'John',
      age: '30',
      isEmployed: true
    };
    expect(() => enforceContract(contract, value)).toThrow();
  });

  it('should not throw an error if the value matches the contract', () => {
    const contract = {
      name: 'string',
      age: 'number',
      isEmployed: 'boolean'
    };
    const value = {
      name: 'John',
      age: 30,
      isEmployed: true
    };
    expect(() => enforceContract(contract, value)).not.toThrow();
  });

  it('should throw an error if the contract is not an object', () => {
    const contract = 'not an object';
    const value = {
      name: 'John',
      age: 30,
      isEmployed: true
    };
    expect(() => enforceContract(contract, value)).toThrow();
  });

  it('should throw an error if the value is not an object', () => {
    const contract = {
      name: 'string',
      age: 'number',
      isEmployed: 'boolean'
    };
    const value = 'not an object';
    expect(() => enforceContract(contract, value)).toThrow();
  });
});

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

  it('will provide correct source for a component with componentConfig with mode', () => {
    const source = generateComponentStyleSource({
      componentConfig: {
        style: {
          base: {
            color: 'primary'
          },
          mode: {
            unfocused: {
              color: 'secondary'
            }
          }
        }
      }
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'secondary' },
      unfocused_inverse: { color: 'secondary' },
      unfocused_brand: { color: 'secondary' },
      focused_neutral: { color: 'primary' },
      focused_inverse: { color: 'primary' },
      focused_brand: { color: 'primary' },
      disabled_neutral: { color: 'primary' },
      disabled_inverse: { color: 'primary' },
      disabled_brand: { color: 'primary' }
    });
  });

  it('will provide correct source for a component with componentConfig with mode', () => {
    const source = generateComponentStyleSource({
      componentConfig: {
        style: {
          base: {
            color: 'primary'
          },
          mode: {
            unfocused: {
              color: 'secondary'
            }
          }
        }
      }
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'secondary' },
      unfocused_inverse: { color: 'secondary' },
      unfocused_brand: { color: 'secondary' },
      focused_neutral: { color: 'primary' },
      focused_inverse: { color: 'primary' },
      focused_brand: { color: 'primary' },
      disabled_neutral: { color: 'primary' },
      disabled_inverse: { color: 'primary' },
      disabled_brand: { color: 'primary' }
    });
  });

  it('will provide correct source for a component with componentConfig with tone/mode', () => {
    const source = generateComponentStyleSource({
      componentConfig: {
        style: {
          base: {
            color: 'primary'
          },
          tone: {
            neutral: {
              mode: {
                unfocused: {
                  color: 'secondary'
                }
              }
            }
          }
        }
      }
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'secondary' },
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

  it('will provide correct source for a component with componentConfig with mode/tone', () => {
    const source = generateComponentStyleSource({
      componentConfig: {
        style: {
          base: {
            color: 'primary'
          },
          mode: {
            unfocused: {
              tone: {
                neutral: {
                  color: 'secondary'
                }
              }
            }
          }
        }
      }
    });

    expect(source).toStrictEqual({
      unfocused_neutral: { color: 'secondary' },
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

  it('will provide correct source for a component with inlineStyle', () => {
    const source = generateComponentStyleSource({
      inlineStyle: {
        color: 'primary'
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

  it('will provide correct source for a component with inlineStyle base', () => {
    const source = generateComponentStyleSource({
      inlineStyle: {
        base: {
          color: 'primary'
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

  it('will provide correct source for a component with inlineStyle tone', () => {
    const source = generateComponentStyleSource({
      inlineStyle: {
        tone: {
          neutral: {
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

  it('will provide correct source for a component with inlineStyle mode', () => {
    const source = generateComponentStyleSource({
      inlineStyle: {
        mode: {
          unfocused: {
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

  it('will provide correct source for a component with inlineStyle tone/mode', () => {
    const source = generateComponentStyleSource({
      inlineStyle: {
        tone: {
          neutral: {
            mode: {
              unfocused: {
                color: 'primary'
              }
            }
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

  it('will provide correct source for a component with inlineStyle mode/tone', () => {
    const source = generateComponentStyleSource({
      inlineStyle: {
        mode: {
          unfocused: {
            tone: {
              neutral: {
                color: 'primary'
              }
            }
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

    /**
     * TODO: Add more tests for the following: deep merge, alias, etc.
     */
  });
});

describe('colorParser', () => {
  it('should return the correct color object for a valid hex color string', () => {
    const hexColor = '#FF0000';
    const result = colorParser(hexColor);
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  it('should return the correct color object for a valid rgb color string', () => {
    const rgbColor = 'rgb(255, 0, 0)';
    const result = colorParser(rgbColor);
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  it('should return the correct color object for a valid rgba color string', () => {
    const rgbaColor = 'rgba(255, 0, 0, 0.5)';
    const result = colorParser(rgbaColor);
    expect(result).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
  });

  it('should throw an error for an invalid color string', () => {
    const invalidColor = 'invalid-color';
    expect(() => colorParser(invalidColor)).toThrow('Invalid color string');
  });
});

describe('generateStyle', () => {
  it('should generate correct style object for a component with no inlineStyle', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      }
    });

    expect(style).toStrictEqual({
      color: 'primary'
    });
  });

  it('should generate correct style object for a component with inlineStyle tone', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      },
      inlineStyle: {
        tone: 'neutral'
      }
    });

    expect(style).toStrictEqual({
      color: 'primary'
    });
  });

  it('should generate correct style object for a component with inlineStyle mode', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      },
      inlineStyle: {
        mode: 'unfocused'
      }
    });

    expect(style).toStrictEqual({
      color: 'primary'
    });
  });

  it('should generate correct style object for a component with inlineStyle tone/mode', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      },
      inlineStyle: {
        tone: 'neutral',
        mode: 'unfocused'
      }
    });

    expect(style).toStrictEqual({
      color: 'primary'
    });
  });

  it('should generate correct style object for a component with inlineStyle mode/tone', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      },
      inlineStyle: {
        mode: 'unfocused',
        tone: 'neutral'
      }
    });

    expect(style).toStrictEqual({
      color: 'primary'
    });
  });

  it('should generate correct style object for a component with inlineStyle tone/mode and overrides', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      },
      inlineStyle: {
        tone: 'neutral',
        mode: 'unfocused',
        overrides: {
          color: 'secondary'
        }
      }
    });

    expect(style).toStrictEqual({
      color: 'secondary'
    });
  });

  it('should generate correct style object for a component with inlineStyle mode/tone and overrides', () => {
    const style = generateStyle({
      themeStyles: {
        neutral: {
          color: 'primary'
        }
      },
      inlineStyle: {
        mode: 'unfocused',
        tone: 'neutral',
        overrides: {
          color: 'secondary'
        }
      }
    });

    expect(style).toStrictEqual({
      color: 'secondary'
    });
  });
});

describe('generateNameFromPrototypeChain', () => {
  it('should return the name of the constructor function if it exists', () => {
    function Foo() {}
    const result = generateNameFromPrototypeChain(Foo.prototype);
    expect(result).toBe('Foo');
  });

  it('should return the name of the constructor function if it exists and has a name property', () => {
    function Bar() {}
    Bar.name = 'CustomBarName';
    const result = generateNameFromPrototypeChain(Bar.prototype);
    expect(result).toBe('CustomBarName');
  });

  it('should return the name of the constructor function if it exists and has a displayName property', () => {
    function Baz() {}
    Baz.displayName = 'BazDisplayName';
    const result = generateNameFromPrototypeChain(Baz.prototype);
    expect(result).toBe('BazDisplayName');
  });

  it('should return the name of the constructor function if it exists and has a toString method', () => {
    function Qux() {}
    Qux.toString = () => 'QuxToString';
    const result = generateNameFromPrototypeChain(Qux.prototype);
    expect(result).toBe('QuxToString');
  });

  it('should return the name of the constructor function if it exists and has a name property and a displayName property', () => {
    function FooBar() {}
    FooBar.name = 'CustomFooBarName';
    FooBar.displayName = 'FooBarDisplayName';
    const result = generateNameFromPrototypeChain(FooBar.prototype);
    expect(result).toBe('CustomFooBarName');
  });

  it('should return the name of the constructor function if it exists and has a name property and a toString method', () => {
    function BarBaz() {}
    BarBaz.name = 'CustomBarBazName';
    BarBaz.toString = () => 'BarBazToString';
    const result = generateNameFromPrototypeChain(BarBaz.prototype);
    expect(result).toBe('CustomBarBazName');
  });

  it('should return the name of the constructor function if it exists and has a displayName property and a toString method', () => {
    function BazQux() {}
    BazQux.displayName = 'BazQuxDisplayName';
    BazQux.toString = () => 'BazQuxToString';
    const result = generateNameFromPrototypeChain(BazQux.prototype);
    expect(result).toBe('BazQuxDisplayName');
  });

  it('should return "Object" if the constructor function does not exist in the prototype chain', () => {
    const result = generateNameFromPrototypeChain({});
    expect(result).toBe('Object');
  });
});

describe('getStyleChainMemoized', () => {
  it('should return the same memoized function for the same input', () => {
    const memoized1 = getStyleChainMemoized({
      themeStyles: {},
      inlineStyle: {}
    });
    const memoized2 = getStyleChainMemoized({
      themeStyles: {},
      inlineStyle: {}
    });
    expect(memoized1).toBe(memoized2);
  });

  it('should return a different memoized function for different input', () => {
    const memoized1 = getStyleChainMemoized({
      themeStyles: {},
      inlineStyle: {}
    });
    const memoized2 = getStyleChainMemoized({
      themeStyles: { primary: { color: 'red' } },
      inlineStyle: {}
    });
    expect(memoized1).not.toBe(memoized2);
  });

  it('should return the correct style object for a component with only themeStyles', () => {
    const memoized = getStyleChainMemoized({
      themeStyles: {
        primary: {
          color: 'red'
        }
      },
      inlineStyle: {}
    });
    const style = memoized(['primary']);
    expect(style).toStrictEqual({
      color: 'red'
    });
  });

  it('should return the correct style object for a component with only inlineStyle', () => {
    const memoized = getStyleChainMemoized({
      themeStyles: {},
      inlineStyle: {
        color: 'red'
      }
    });
    const style = memoized([]);
    expect(style).toStrictEqual({
      color: 'red'
    });
  });

  it('should return the correct style object for a component with both themeStyles and inlineStyle', () => {
    const memoized = getStyleChainMemoized({
      themeStyles: {
        primary: {
          color: 'red'
        }
      },
      inlineStyle: {
        overrides: {
          color: 'blue'
        }
      }
    });
    const style = memoized(['primary']);
    expect(style).toStrictEqual({
      color: 'blue'
    });
  });
});

describe('getStyleChain', () => {
  it('should return an empty array if no themeStyles or inlineStyle are provided', () => {
    const styleChain = getStyleChain({ themeStyles: {}, inlineStyle: {} });
    expect(styleChain).toEqual([]);
  });

  it('should return an array with the theme style if only themeStyles are provided', () => {
    const styleChain = getStyleChain({
      themeStyles: {
        primary: {
          color: 'red'
        }
      },
      inlineStyle: {}
    });
    expect(styleChain).toEqual(['primary']);
  });

  it('should return an array with the inline style if only inlineStyle is provided', () => {
    const styleChain = getStyleChain({
      themeStyles: {},
      inlineStyle: {
        color: 'red'
      }
    });
    expect(styleChain).toEqual(['inline']);
  });

  it('should return an array with both the theme style and inline style if both are provided', () => {
    const styleChain = getStyleChain({
      themeStyles: {
        primary: {
          color: 'red'
        }
      },
      inlineStyle: {
        color: 'blue'
      }
    });
    expect(styleChain).toEqual(['primary', 'inline']);
  });

  it('should return an array with the theme style and any overrides from inline style', () => {
    const styleChain = getStyleChain({
      themeStyles: {
        primary: {
          color: 'red'
        }
      },
      inlineStyle: {
        overrides: {
          color: 'blue'
        }
      }
    });
    expect(styleChain).toEqual(['primary', 'overrides']);
  });
});

describe('formatStyleObj', () => {
  it('should return an empty string if no style object is provided', () => {
    const styleObj = undefined;
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('');
  });

  it('should return a string with a single CSS property if one property is provided', () => {
    const styleObj = {
      color: 'red'
    };
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('color: red;');
  });

  it('should return a string with multiple CSS properties if multiple properties are provided', () => {
    const styleObj = {
      color: 'red',
      backgroundColor: 'blue'
    };
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('color: red; background-color: blue;');
  });

  it('should handle hyphenated property names correctly', () => {
    const styleObj = {
      'background-color': 'red'
    };
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('background-color: red;');
  });

  it('should handle vendor-prefixed property names correctly', () => {
    const styleObj = {
      '-webkit-transition': 'all 1s ease'
    };
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('-webkit-transition: all 1s ease;');
  });

  it('should handle numeric property values correctly', () => {
    const styleObj = {
      fontSize: 16
    };
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('font-size: 16;');
  });

  it('should handle null and undefined property values correctly', () => {
    const styleObj = {
      color: null,
      backgroundColor: undefined
    };
    const formattedStyle = formatStyleObj(styleObj);
    expect(formattedStyle).toEqual('');
  });
});

describe('replaceAliasValues', () => {
  it('should replace alias values in a string', () => {
    const input = 'Hello $NAME, welcome to $COMPANY';
    const aliases = {
      NAME: 'John',
      COMPANY: 'GitHub'
    };
    const expectedOutput = 'Hello John, welcome to GitHub';
    const output = replaceAliasValues(input, aliases);
    expect(output).toEqual(expectedOutput);
  });

  it('should not replace alias values that are not present in the string', () => {
    const input = 'Hello $NAME, welcome to $COMPANY';
    const aliases = {
      NAME: 'John',
      LOCATION: 'San Francisco'
    };
    const expectedOutput = 'Hello John, welcome to $COMPANY';
    const output = replaceAliasValues(input, aliases);
    expect(output).toEqual(expectedOutput);
  });

  it('should handle empty input strings', () => {
    const input = '';
    const aliases = {
      NAME: 'John',
      COMPANY: 'GitHub'
    };
    const expectedOutput = '';
    const output = replaceAliasValues(input, aliases);
    expect(output).toEqual(expectedOutput);
  });

  it('should handle empty alias objects', () => {
    const input = 'Hello $NAME, welcome to $COMPANY';
    const aliases = {};
    const expectedOutput = 'Hello $NAME, welcome to $COMPANY';
    const output = replaceAliasValues(input, aliases);
    expect(output).toEqual(expectedOutput);
  });

  it('should handle null and undefined input strings', () => {
    const input1 = null;
    const input2 = undefined;
    const aliases = {
      NAME: 'John',
      COMPANY: 'GitHub'
    };
    const expectedOutput = '';
    const output1 = replaceAliasValues(input1, aliases);
    const output2 = replaceAliasValues(input2, aliases);
    expect(output1).toEqual(expectedOutput);
    expect(output2).toEqual(expectedOutput);
  });

  it('should handle null and undefined alias objects', () => {
    const input = 'Hello $NAME, welcome to $COMPANY';
    const aliases1 = null;
    const aliases2 = undefined;
    const expectedOutput = 'Hello $NAME, welcome to $COMPANY';
    const output1 = replaceAliasValues(input, aliases1);
    const output2 = replaceAliasValues(input, aliases2);
    expect(output1).toEqual(expectedOutput);
    expect(output2).toEqual(expectedOutput);
  });
});
