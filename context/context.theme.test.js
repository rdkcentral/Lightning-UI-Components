import logger from './logger';

jest.mock('./fonts');
jest.mock('./logger');
jest.mock('./events');

describe('theme context', () => {
  let themeManager;

  beforeEach(() => {
    // create a new instance of theme module for each test
    jest.isolateModules(() => {
      themeManager = require('./theme-manager').default;
    });
    themeManager._clearCache();
    jest.clearAllMocks();
  });

  describe('basic theme functionality', () => {
    it('should have default theme', () => {
      const processedBaseTheme = themeManager._processTheme();
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
    });
    it('should deep merge object with existing theme when theme is set', () => {
      const processedBaseTheme = themeManager._processTheme([{ foo: 'bar' }]);
      themeManager.setTheme({ foo: 'bar' });
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
    });
    it('should not attempt to set any value for theme that is not an object', () => {
      const processedBaseTheme = themeManager._processTheme();
      themeManager.setTheme('string');
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
      themeManager.setTheme(() => {
        // eslint-disable-next-line
        console.log('invalid');
      });
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
      themeManager.setTheme(1);
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
      themeManager.setTheme(null);
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
      expect(logger.warn).toHaveBeenCalledTimes(4);
      expect(logger.warn.mock.calls).toContainEqual(
        ['context theme expected an object. Received string'],
        ['context theme expected an object. Received function'],
        ['context theme expected an object. Received function'],
        ['context theme expected an object. Received object']
      );
    });
    it('should return a _getComponentUUID', () => {
      expect(themeManager._getComponentUUID(100)).toMatch('componentStyle100');
    });
    it('should process the theme correctly', () => {
      const processedBaseTheme = themeManager._processTheme();
      expect(themeManager.getTheme()).toMatchObject(processedBaseTheme);
      themeManager.setTheme({ foo: 'bar' });
      expect(themeManager.getTheme().foo).toBe('bar');
      themeManager.setTheme({ color: { primary: ['#ff0000', 1] } });
      expect(themeManager.getTheme().color.primary).toBe(4294901760);

      const processedThemeWithArray = themeManager._processTheme([
        {
          componentStyle: { Tile: { radius: [1, 2, 3, 4] } }
        }
      ]);
      expect(processedThemeWithArray.componentStyle.Tile.radius).toEqual([
        1, 2, 3, 4
      ]);
    });

    // NOTE: This error is currently unreachable by public methods.
    // It is only used internally and is always called with an array
    it('should throw an error if attempting to process a non array theme update', () => {
      expect(() => {
        themeManager._processTheme('newThemeValue');
      }).toThrow('context processTheme expected an array. Received string');
    });
  });

  describe('sub theming', () => {
    it('should log a warning if no sub theme name is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();

      themeManager.setSubTheme();

      expect(logger.warn).toHaveBeenCalled();
    });
    it('should persist a sub theme after theme changes', async () => {
      const subThemeName = 'MyTheme';
      const subTheme = { foo: 'bar' };

      expect(themeManager.getSubTheme(subThemeName)).toBeUndefined();

      themeManager.setSubTheme(subThemeName, subTheme);

      expect(themeManager.getSubTheme(subThemeName)).toMatchObject(subTheme);

      await themeManager.setTheme({
        foo: 'baz'
      });

      const cachedSubTheme = themeManager._cache.get('subThemeMyTheme');
      expect(themeManager.getSubTheme(subThemeName)).toMatchObject(subTheme);
      expect(cachedSubTheme.original).toEqual(subTheme);
      expect(cachedSubTheme.result.foo).toEqual('bar');
    });
    it('should log a warning if no subTheme name is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();
      themeManager.updateSubTheme();
      expect(logger.warn).toHaveBeenCalledWith('Sub theme name not specified');
    });
    it('should log a warning if a non-object subTheme value is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();
      themeManager.updateSubTheme('MockTheme', 'makeItPop');
      expect(logger.warn).toHaveBeenCalledWith(
        'Could not update subTheme MockTheme due to invalid value'
      );
    });
    it('should log a warning if an empty object subTheme value is provided', () => {
      expect(logger.warn).not.toHaveBeenCalled();
      themeManager.updateSubTheme('MockTheme', {});
      expect(logger.warn).toHaveBeenCalledWith(
        'Could not update subTheme MockTheme due to invalid value'
      );
    });
  });
});
