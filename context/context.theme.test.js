import withThemeStyles from '../mixins/withThemeStyles';
import Base from '../Base';
import TestUtils from '../test/lightning-test-utils';
import { fontLoader } from './fonts';
import logger from './logger';
import events from './events';

jest.mock('./fonts');
jest.mock('./logger');
jest.mock('./events');

class TestComponent extends withThemeStyles(Base, theme => ({
  radius: theme.radius.medium
})) {
  static __componentName() {
    return 'Test';
  }
}

const createComponent = TestUtils.makeCreateComponent(TestComponent, {});

describe('theme context', () => {
  let theme;

  beforeEach(() => {
    let themeModule;
    // create a new instance of theme module for each test
    jest.isolateModules(() => {
      themeModule = require('./theme');
    });
    theme = themeModule.default;
    theme._clearCache();
    jest.clearAllMocks();
  });

  describe('basic theme functionality', () => {
    it('should have default theme', () => {
      const processedBaseTheme = theme._processTheme();
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
    });
    it('should deep merge object with existing theme when theme is set', () => {
      const processedBaseTheme = theme._processTheme([{ foo: 'bar' }]);
      theme.setTheme({ foo: 'bar' });
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
    });
    it('should not attempt to set any value for theme that is not an object', () => {
      const processedBaseTheme = theme._processTheme();
      theme.setTheme('string');
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      theme.setTheme(() => {
        // eslint-disable-next-line
        console.log('invalid');
      });
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      theme.setTheme(1);
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      theme.setTheme(null);
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      expect(logger.warn).toHaveBeenCalledTimes(4);
      expect(logger.warn.mock.calls).toContainEqual(
        ['context theme expected an object. Received string'],
        ['context theme expected an object. Received function'],
        ['context theme expected an object. Received function'],
        ['context theme expected an object. Received object']
      );
    });
    it('should return a _getComponentUUID', () => {
      expect(theme._getComponentUUID(100)).toMatch('componentStyle100');
    });
    it('should process the theme correctly', () => {
      const processedBaseTheme = theme._processTheme();
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      theme.setTheme({ foo: 'bar' });
      expect(theme.getTheme().foo).toBe('bar');
      theme.setTheme({ colors: { primary: ['#ff0000', 100] } });
      expect(theme.getTheme().colors.primary).toBe(4294901760);
    });
    // NOTE: This error is currently unreachable by public methods.
    // It is only used internally and is always called with an array
    it('should throw an error if attempting to process a non array theme update', () => {
      expect(() => {
        theme._processTheme('newThemeValue');
      }).toThrow('context processTheme expected an array. Received string');
    });
  });

  describe('when loading fonts - _loadFonts', () => {
    const mockFont = { family: 'MockFont', url: 'mockurl' };
    it('should emit a message when fonts have been loaded', async () => {
      const fontLoaderPromise = Promise.resolve(['mockFontA', 'mockFontB']);
      fontLoader.mockReturnValue(fontLoaderPromise);

      expect(fontLoader).not.toHaveBeenCalled();
      expect(events.emit).not.toHaveBeenCalledWith('fontsLoaded');
      expect(logger.error).not.toHaveBeenCalledWith();

      theme.updateTheme({
        fonts: [mockFont]
      });
      const currTheme = theme.getTheme();

      expect(fontLoader).toHaveBeenCalledWith(currTheme.fonts);
      expect(events.emit).not.toHaveBeenCalledWith('fontsLoaded');
      expect(logger.error).not.toHaveBeenCalledWith();

      await fontLoaderPromise;

      expect(events.emit).toHaveBeenCalledWith('fontsLoaded');
      expect(logger.error).not.toHaveBeenCalledWith();
    });
    it('should log an error if fonts fail to load', async () => {
      const errorMessage = 'err';
      const fontLoaderPromise = Promise.reject(errorMessage);
      fontLoader.mockReturnValue(fontLoaderPromise);

      expect(fontLoader).not.toHaveBeenCalled();
      expect(events.emit).not.toHaveBeenCalledWith('fontsLoaded');
      expect(logger.error).not.toHaveBeenCalledWith();

      theme.updateTheme({
        fonts: [mockFont]
      });
      const currTheme = theme.getTheme();

      expect(fontLoader).toHaveBeenCalledWith(currTheme.fonts);
      expect(events.emit).not.toHaveBeenCalledWith('fontsLoaded');
      expect(logger.error).not.toHaveBeenCalledWith();

      await fontLoaderPromise.catch(() => {});

      expect(events.emit).not.toHaveBeenCalledWith('fontsLoaded');
      expect(logger.error).toHaveBeenCalledWith(
        `Unable to load font: ${errorMessage}`
      );
    });
  });

  describe('sub theming', () => {
    it('should log a warning if no sub theme name is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();

      theme.setSubTheme();

      expect(logger.warn).toHaveBeenCalled();
    });
    it('should persist a sub theme after theme changes', async () => {
      const subThemeName = 'MyTheme';
      const subTheme = { foo: 'bar' };

      expect(theme.getSubTheme(subThemeName)).toBeUndefined();

      theme.setSubTheme(subThemeName, subTheme);

      expect(theme.getSubTheme(subThemeName)).toMatchObject(subTheme);

      await theme.setTheme({
        foo: 'baz'
      });

      const cachedSubTheme = theme._cache.get('subThemeMyTheme');
      expect(theme.getSubTheme(subThemeName)).toMatchObject(subTheme);
      expect(cachedSubTheme.original).toEqual(subTheme);
      expect(cachedSubTheme.result.foo).toEqual('bar');
    });
    it('should log a warning if no subTheme name is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();
      theme.updateSubTheme();
      expect(logger.warn).toHaveBeenCalledWith('Sub theme name not specified');
    });
    it('should log a warning if a non-object subTheme value is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();
      theme.updateSubTheme('MockTheme', 'makeItPop');
      expect(logger.warn).toHaveBeenCalledWith(
        'Could not update subTheme MockTheme due to invalid value'
      );
    });
    it('should log a warning if an empty object subTheme value is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();
      theme.updateSubTheme('MockTheme', {});
      expect(logger.warn).toHaveBeenCalledWith(
        'Could not update subTheme MockTheme due to invalid value'
      );
    });
  });

  describe('storage and caching', () => {
    it('should have a cache', () => {
      expect(theme._cache.constructor.name).toMatch('Map');
    });
    it('should setComponentInstantiationStyles to the cache', () => {
      const [component] = createComponent();
      const payload = { foo: 'bar' };
      const response = theme.setComponentInstantiationStyles(
        component,
        payload
      );
      expect(theme._cache.get(component)).toEqual(payload);
      expect(response).toBeUndefined();
    });
    it('should getComponentInstantiationStyles from the cache', () => {
      const [component] = createComponent();
      const payload = { foo: 'bar' };
      expect(theme.getComponentInstantiationStyles(component)).toBeUndefined();
      theme.setComponentInstantiationStyles(component, payload);
      expect(theme.getComponentInstantiationStyles(component)).toEqual(payload);
    });
    it('should reset component instantiation styles', () => {
      const [component] = createComponent();
      const payload = { foo: 'bar' };
      theme.setComponentInstantiationStyles(component, payload);
      expect(theme.getComponentInstantiationStyles(component)).toEqual(payload);
      theme.resetComponentInstantiationStyles(component);
      expect(theme.getComponentInstantiationStyles(component)).toBeUndefined();
    });
    it('should setComponentLevelStyles to the cache', () => {
      const payload = { foo: 'bar' };
      const response = theme.setComponentLevelStyles(123, payload);
      expect(theme._cache.get('componentStyle123')).toEqual(payload);
      expect(response).toBeUndefined();
    });
    it('should getComponentLevelStyles to the cache', () => {
      const payload = { foo: 'bar' };
      expect(
        theme.getComponentLevelStyles('componentStyle123')
      ).toBeUndefined();
      theme.setComponentLevelStyles(123, payload);
      expect(theme.getComponentLevelStyles(123)).toEqual(payload);
    });
    it('should reset componentLevelStyles', () => {
      const payload = { foo: 'bar' };
      theme.setComponentLevelStyles(123, payload);
      expect(theme._cache.get('componentStyle123')).toEqual(payload);
      theme.resetComponentLevelStyles(123);
      expect(theme._cache.has('componentStyle123')).toEqual(false);
    });
  });
});
