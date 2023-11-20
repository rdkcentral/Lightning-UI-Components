import {
  createSharedReferences,
  generatePayload,
  getCharacterValue,
  getCharacterSum,
  getHash,
  executeWithContextRecursive,
  isPlainObject,
  getSubTheme,
  getComponentConfig,
  getPrototypeChain,
  getUniqueProperties,
  removeEmptyObjects,
  removeDuplicateObjects,
  // generateSolution, // TODO: Need a test for this
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
import log from '../../globals/context/logger';

import { jest } from '@jest/globals';

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  executeWithContextRecursive: jest.fn(),
  clone: jest.fn(),
  generateSolution: jest.fn(),
  formatStyleObj: jest.fn(),
  getValFromObjPath: jest.fn(),
  removeEmptyObjects: jest.fn(),
  getHexColor: jest.fn(),
  colorParser: jest.fn()
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
    expect(callback2).toHaveReturnedWith({ base2: 'bar' });
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
      const instance = Object.create(MyClass.prototype);
      instance.constructor = {
        __componentName: 'MyClass'
      };
      return instance;
    }

    function MyClass2() {
      this.prototype = new MyClass(this);
      const instance = Object.create(new MyClass(this));
      instance.constructor = {
        __componentName: 'MyClass2'
      };
      return instance;
    }

    const chain = getPrototypeChain(new MyClass2());

    expect(chain).toEqual(['MyClass2', 'MyClass']);
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

describe('createSharedReferences', () => {
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
    expect(result.a).not.toBe(result.b);
  });
});

describe('getUniqueProperties', () => {
  it('should return unique properties', () => {
    const defaultProps = ['color', 'size', 'color'];
    const result = getUniqueProperties(defaultProps);
    expect(result).toEqual(['color', 'size']);
  });

  it('should throw TypeError when defaultProps is not an array', () => {
    expect(() => getUniqueProperties('notArray')).toThrow(TypeError);
    expect(() => getUniqueProperties('notArray')).toThrow(
      'Expected defaultProps to be an array of strings.'
    );
  });

  it('should handle default values', () => {
    const result = getUniqueProperties();
    expect(result).toEqual([]);
  });
});

describe('generatePayload', () => {
  // Define base objects for testing
  const baseObject = { baseProp: 'baseValue' };
  const defaultStyleObject = { defaultProp: 'defaultValue' };
  const toneObject = {
    toneItem: {
      toneProp: 'toneValue'
    }
  };
  const modeObject = {
    modeItem: {
      modeProp: 'modeValue'
    }
  };

  it('should merge base, defaultStyle, tone, and mode objects when all inputs are provided', () => {
    const result = generatePayload(
      baseObject,
      defaultStyleObject,
      'toneItem',
      'modeItem',
      toneObject,
      modeObject
    );

    expect(result).toEqual({
      baseProp: 'baseValue',
      defaultProp: 'defaultValue',
      toneProp: 'toneValue',
      modeProp: 'modeValue'
    });
  });

  it('should merge base and defaultStyle objects when tone and mode are not provided', () => {
    const result = generatePayload(
      baseObject,
      defaultStyleObject,
      null,
      null,
      null,
      null
    );

    expect(result).toEqual({
      baseProp: 'baseValue',
      defaultProp: 'defaultValue'
    });
  });

  it('should handle missing toneItem and modeItem gracefully', () => {
    const result = generatePayload(
      baseObject,
      defaultStyleObject,
      'nonExistentTone',
      'nonExistentMode',
      toneObject,
      modeObject
    );

    expect(result).toEqual({
      baseProp: 'baseValue',
      defaultProp: 'defaultValue'
    });
  });
});

describe('enforceContract', () => {
  it('should enforce the contract with all default keys in the specified order', () => {
    const inputObj = {
      focused_inverse: {},
      disabled_neutral: {}
    };

    const result = enforceContract(inputObj);

    // Ensure that all default keys are present and in the specified order
    const expectedOutput = {
      ...inputObj,
      unfocused_neutral: {},
      unfocused_inverse: {},
      unfocused_brand: {},
      focused_neutral: {},
      focused_brand: {},
      disabled_neutral: {},
      disabled_inverse: {},
      disabled_brand: {}
    };

    expect(result).toEqual(expectedOutput);
  });

  it('should prioritize values in the order of FALLBACK_ORDER', () => {
    const inputObj = {
      unfocused_brand: {},
      focused_neutral: 'value1', // This value is not an object
      disabled_inverse: {}
    };

    const expectedOutput = {
      unfocused_neutral: {},
      unfocused_inverse: {},
      unfocused_brand: {},
      focused_neutral: {}, // This value is not an object
      focused_inverse: {},
      focused_brand: {},
      disabled_neutral: {},
      disabled_inverse: {},
      disabled_brand: {}
    };

    const result = enforceContract(inputObj);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty input object', () => {
    const inputObj = {};

    const expectedOutput = {
      unfocused_neutral: {},
      unfocused_inverse: {},
      unfocused_brand: {},
      focused_neutral: {},
      focused_inverse: {},
      focused_brand: {},
      disabled_neutral: {},
      disabled_inverse: {},
      disabled_brand: {}
    };

    const result = enforceContract(inputObj);

    expect(result).toEqual(expectedOutput);
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
  });
});

describe('colorParser', () => {
  it('should parse style object with theme strings and color arrays', () => {
    const targetObject = {
      theme: {
        radius: {
          md: '10'
        }
      }
    };

    const styleObj = {
      backgroundColor: 'theme.radius.md',
      borderColor: ['#663399', 1]
    };

    const result = colorParser(targetObject, styleObj);

    const expectedOutput = {
      backgroundColor: '10',
      borderColor: 4284887961
    };

    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty style object and return an empty object', () => {
    const targetObject = {
      theme: {}
    };

    const styleObj = {};

    const result = colorParser(targetObject, styleObj);

    expect(result).toEqual({});
  });

  it('should throw a TypeError if targetObject is not an object', () => {
    const targetObject = 'not an object'; // Passing a string instead of an object

    const styleObj = {
      backgroundColor: 'theme.radius.md'
    };

    expect(() => colorParser(targetObject, styleObj)).toThrow(TypeError);
  });

  it('should throw a TypeError if styleObj is not an object', () => {
    const targetObject = {
      theme: {}
    };

    const styleObj = 'not an object'; // Passing a string instead of an object

    expect(() => colorParser(targetObject, styleObj)).toThrow(TypeError);
  });
});

describe('generateStyle', () => {
  it('should generate style based on component properties', () => {
    const component = {
      mode: 'focused',
      tone: 'brand'
    };

    const componentStyleSource = {
      focused_brand: {
        fontSize: '20',
        color: 'blue'
      }
    };

    const generatedStyle = generateStyle(component, componentStyleSource);

    const expectedStyle = {
      fontSize: '20',
      color: 'blue'
    };

    expect(generatedStyle).toEqual(expectedStyle);
  });

  it('should use default mode and tone if not provided in component', () => {
    const component = {};

    const componentStyleSource = {
      unfocused_neutral: {
        fontSize: '16',
        color: 'black'
      }
    };

    const generatedStyle = generateStyle(component, componentStyleSource);

    const expectedStyle = {
      fontSize: '16',
      color: 'black'
    };

    expect(generatedStyle).toEqual(expectedStyle);
  });

  it('should return an empty object for non-object component', () => {
    const component = 'not an object';

    const componentStyleSource = {
      focused_brand: {
        fontSize: '20'
      }
    };

    const generatedStyle = generateStyle(component, componentStyleSource);

    expect(generatedStyle).toEqual({});
  });

  it('should return an empty object for missing styles', () => {
    const component = {
      mode: 'focused',
      tone: 'brand'
    };

    const componentStyleSource = {};

    const generatedStyle = generateStyle(component, componentStyleSource);

    expect(generatedStyle).toEqual({});
  });
});
class Parent {
  static get __componentName() {
    return 'ParentComponent';
  }
}

class Child extends Parent {
  static get __componentName() {
    return 'ChildComponent';
  }
}

describe('generateNameFromPrototypeChain', () => {
  it('should generate the name for an object with a prototype chain', () => {
    const obj = new Child();
    const result = generateNameFromPrototypeChain(obj);

    expect(result).toBe('ChildComponent.ParentComponent');
  });

  it('should generate the name for an object without a prototype chain', () => {
    const obj = {};
    const result = generateNameFromPrototypeChain(obj);

    expect(result).toBe('');
  });

  it('should handle an object with missing __componentName', () => {
    class ComponentWithoutName {}

    const obj = new ComponentWithoutName();
    const result = generateNameFromPrototypeChain(obj);

    expect(result).toBe('');
  });

  it('should handle an object with repeated __componentName', () => {
    class RepeatedComponent {
      static get __componentName() {
        return 'RepeatedComponent';
      }
    }

    const obj = new RepeatedComponent();
    obj.__proto__.constructor = RepeatedComponent; // Set a repeated __componentName

    const result = generateNameFromPrototypeChain(obj);

    expect(result).toBe('RepeatedComponent');
  });
});

describe('getStyleChainMemoized', () => {
  it('should memoize and return the same style chain for the same component', () => {
    const component = {
      constructor: {
        __themeStyle: {
          fontSize: '16',
          color: 'blue'
        }
      }
    };

    const styleChain = getStyleChainMemoized(component);
    const cachedStyleChain = getStyleChainMemoized(component);

    expect(styleChain).toBe(cachedStyleChain);
  });

  it('should return a different style chain for different components', () => {
    class Component1 {
      static get __themeStyle() {
        return {
          fontSize: '16',
          color: 'blue'
        };
      }

      static get __componentName() {
        return 'Component1';
      }
    }

    class Component2 {
      static get __themeStyle() {
        return {
          fontSize: '20',
          color: 'red'
        };
      }

      static get __componentName() {
        return 'Component2';
      }
    }

    const component1 = new Component1();
    const component2 = new Component2();

    const styleChain1 = getStyleChainMemoized(component1);
    const styleChain2 = getStyleChainMemoized(component2);

    expect(styleChain1).not.toBe(styleChain2);
  });
});

describe('removeDuplicateObjects', () => {
  test('should remove duplicates from array', () => {
    const input = [
      { style: { color: 'red' } },
      { style: { fontSize: 16 } },
      { style: { color: 'red' } }
    ];

    const expected = [{ style: { color: 'red' } }, { style: { fontSize: 16 } }];

    const result = removeDuplicateObjects(input);
    expect(result).toEqual(expected);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => {
      removeDuplicateObjects('not an array');
    }).toThrow('Input should be an array');
  });

  test('should return an empty array if input is empty', () => {
    expect(removeDuplicateObjects([])).toEqual([]);
  });
});

class ComponentA {
  static get __themeStyle() {
    return { color: 'red' };
  }
}

class ComponentB extends ComponentA {
  static get __mixinStyle() {
    return { fontSize: 16 };
  }
}

class ComponentC extends ComponentB {}

describe('getStyleChain', () => {
  it('should return an array of style objects from the prototype chain', () => {
    const componentC = new ComponentC();
    const styleChain = getStyleChain(componentC);
    expect(styleChain).toHaveLength(2); // Two styles in the chain
    expect(styleChain[0]).toEqual({ style: { fontSize: 16 } });
    expect(styleChain[1]).toEqual({ style: { color: 'red' } });
  });

  it('should handle components with no styles in the chain', () => {
    const componentWithoutStyles = {};

    const styleChain = getStyleChain(componentWithoutStyles);

    expect(styleChain).toHaveLength(0); // No styles in the chain
  });

  it('should handle styles defined as functions', () => {
    const style = () => ({ fontWeight: 'bold' });
    class FunctionStyleComponent {
      static get __themeStyle() {
        return style;
      }
    }
    const componentWithFunctionStyle = new FunctionStyleComponent();

    const styleChain = getStyleChain(componentWithFunctionStyle);

    expect(styleChain).toHaveLength(1);
    expect(styleChain[0]).toEqual({ style });
  });
});

describe('formatStyleObj', () => {
  it('should format a valid style object', () => {
    const inputStyle = {
      fontSize: '16',
      color: 'blue'
    };

    const formattedStyle = formatStyleObj(inputStyle);

    expect(formattedStyle).toEqual(inputStyle); // Should return the same style object
  });

  it('should format a style object with alias styles', () => {
    const inputStyle = {
      fontSize: '1rem',
      width: '50%'
    };

    const aliasStyles = [
      { prev: 'fontSize', curr: 'fs' },
      { prev: 'width', curr: 'w' }
    ];

    const expectedFormattedStyle = {
      fs: '1rem',
      w: '50%'
    };

    const formattedStyle = formatStyleObj(inputStyle, aliasStyles);

    expect(formattedStyle).toEqual(expectedFormattedStyle);
  });

  it('should throw an error for non-object input', () => {
    const invalidInput = 'not an object';

    // Use an arrow function to invoke formatStyleObj with the invalid input
    const testFunction = () => {
      formatStyleObj(invalidInput);
    };

    expect(testFunction).toThrowError(
      'The originalObj parameter must be an object.'
    );
  });
});

describe('replaceAliasValues', () => {
  it('should replace alias values in the provided style object', () => {
    const styleObject = {
      width: 100,
      height: 50
    };

    const aliasStyles = [
      { prev: 'width', curr: 'w' },
      { prev: 'height', curr: 'h' }
    ];

    const result = replaceAliasValues(styleObject, aliasStyles);

    expect(result).toEqual({ w: 100, h: 50 });
  });

  it('should replace alias values with custom alias styles', () => {
    const styleObject = {
      maxW: 20,
      maxH: 10
    };

    const aliasStyles = [
      { prev: 'maxW', curr: 'maxWidth' },
      { prev: 'maxH', curr: 'maxHeight' }
    ];

    const result = replaceAliasValues(styleObject, aliasStyles);

    expect(result).toEqual({ maxWidth: 20, maxHeight: 10 });
  });

  it('should throw an error if the value is not an object', () => {
    const nonObjectValue = 'not an object';

    expect(() => replaceAliasValues(nonObjectValue)).toThrowError(
      'Value must be an object'
    );
  });

  it('should throw an error if aliasStyles is not an array', () => {
    const styleObject = {
      width: 100
    };

    const invalidAliasStyles = 'not an array';

    expect(() =>
      replaceAliasValues(styleObject, invalidAliasStyles)
    ).toThrowError('Alias styles must be an array');
  });

  it('should replace alias values with a warning when skipWarn is false', () => {
    const styleObject = {
      testW: 100
    };

    const aliasStyles = [{ prev: 'testW', curr: 'testWidth', skipWarn: false }];

    const consoleWarnSpy = jest.spyOn(log, 'warn').mockImplementation(() => {});

    const result = replaceAliasValues(styleObject, aliasStyles);

    expect(result).toEqual({ testWidth: 100 });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'The style property "testW" is deprecated and will be removed in a future release. Please use "testWidth" instead.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should replace alias values without a warning when skipWarn is true', () => {
    const styleObject = {
      width: 100
    };

    const aliasStyles = [{ prev: 'width', curr: 'w', skipWarn: true }];

    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    const result = replaceAliasValues(styleObject, aliasStyles);

    expect(result).toEqual({ w: 100 });
    expect(consoleWarnSpy).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });
});
