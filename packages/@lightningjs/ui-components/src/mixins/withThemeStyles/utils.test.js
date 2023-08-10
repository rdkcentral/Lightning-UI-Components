// Mock context.theme
import { expect } from '@jest/globals';
import context from '../../globals/context';
// Import the functions to be tested
import {
  getSubTheme,
  getComponentConfig,
  getPrototypeChain,
  generateComponentStyleSource,
  generateStyle,
  getStyleChain,
  replaceAliasValues
} from './utils'; // Replace with the correct path

// Sample test data
class GrandParent {
  static get __componentName() {
    return 'GrandParent';
  }
  static get __themeStyle() {
    return {
      base: {
        spacing: 1
      }
    };
  }
}
class Parent extends GrandParent {
  static get __componentName() {
    return 'Parent';
  }

  static get __themeStyle() {
    return {
      base: {
        spacing: 2
      }
    };
  }
}
class Child extends Parent {
  static get __componentName() {
    return 'Child';
  }

  static get __themeStyle() {
    return {
      base: {
        spacing: 3
      }
    };
  }

  get theme() {
    return context.theme
  }
}

afterEach(async () => {
  await context.setTheme({}); // Replace with your actual asynchronous cleanup tasks
});

const childComponentInstance = new Child();

describe('Test Suite for Custom Utils', () => {
  describe('getSubTheme', () => {
    // Test cases for getSubTheme function
    it('should return the subTheme property value of the first parent object with subTheme', () => {
      const childObj = { p: { parent: { subTheme: 'mySubTheme' } } };
      expect(getSubTheme(childObj)).toBe('mySubTheme');
    });

    it('should return undefined if no parent object has subTheme', () => {
      const childObj = { p: { parent: { parent: {} } } };
      expect(getSubTheme(childObj)).toBeUndefined();
    });
  });

  describe('getComponentConfig', () => {
    // Test cases for getComponentConfig function
    it('should return the component configuration object for the given object', async () => {
      await context.setTheme({
        componentConfig: {
          Child: {
            tone: 'inverse',
            mode: 'focused',
            style: {
              backgroundColor: ['#ffffff', 1]
            }
          }
        }
      });

      const componentConfig = getComponentConfig(childComponentInstance);
      expect(componentConfig).toEqual({
        mode: 'focused',
        style: {
          backgroundColor: 4294967295
        },
        tone: 'inverse'
      });
    });

    it('should return an empty object if the object is not a plain object', () => {
      const nonObject = 123; // Not an object
      expect(getComponentConfig(nonObject)).toEqual({});
    });
  });

  describe('getPrototypeChain', () => {
    // Test cases for getPrototypeChain function
    it('should return an array of component names in the prototype chain of the given object', () => {
      const prototypeChain = getPrototypeChain(childComponentInstance);
      expect(prototypeChain).toEqual(['Child', 'Parent', 'GrandParent']);
    });

    it('should return an empty array if the object is not a plain object', () => {
      const nonObject = 123; // Not an object
      expect(getPrototypeChain(nonObject)).toEqual([]);
    });
  });

  describe('generateComponentStyleSource', () => {
    // Test cases for generateComponentStyleSource function
    it('should generate the source style object for a given component', () => {
      const styleSource = generateComponentStyleSource(childComponentInstance);
      expect(styleSource).toEqual({
        unfocused_neutral: { spacing: 3 }
      });
    });

    it('should return an empty object if the object is not a plain object', () => {
      const nonObject = 123; // Not an object
      expect(generateComponentStyleSource(nonObject)).toEqual({});
    });
  });

  describe('generateStyle', () => {
    // Test cases for generateStyle function
    it('should generate the final style object for a component', () => {
      const componentStyleSource = {
        unfocused_neutral: { fontSize: 14, backgroundColor: 'green' }
      };
      const style = generateStyle(childComponentInstance, componentStyleSource);
      expect(style).toEqual({
        fontSize: 14,
        backgroundColor: 'green'
      });
    });

    it('should return an empty object if the object is not a plain object', () => {
      const nonObject = 123; // Not an object
      const style = generateStyle(nonObject);
      expect(style).toEqual({});
    });
  });

  describe('getStyleChain', () => {
    // Test cases for getStyleChain function
    it('should return an array of style objects from the prototype chain of the given component object', async () => {
      const styleChain = getStyleChain(childComponentInstance);
      expect(styleChain).toEqual([
        { style: { base: { spacing: 1 } } },
        { style: { base: { spacing: 2 } } },
        { style: { base: { spacing: 3 } } }
      ]);
    });

    it('should return an empty array if no styles are found in the prototype chain', () => {
      const nonStyledComponent = {};
      const styleChain = getStyleChain(nonStyledComponent);
      expect(styleChain).toEqual([]);
    });
  });

  describe('replaceAliasValues', () => {
    // Test cases for replaceAliasValues function
    it('should replace alias values in the style object with their corresponding aliases', () => {
      const styleObj = { height: '100%', width: '50%' };
      const aliasStyles = [
        { prev: 'height', curr: 'h' },
        { prev: 'width', curr: 'w' }
      ];
      const processedStyle = replaceAliasValues(styleObj, aliasStyles);
      expect(processedStyle).toEqual({ h: '100%', w: '50%' });
    });

    it('should not modify the object if alias values are not present', () => {
      const styleObj = { color: 'red', fontSize: '16px' };
      const processedStyle = replaceAliasValues(styleObj);
      expect(processedStyle).toEqual(styleObj);
    });
  });
});
