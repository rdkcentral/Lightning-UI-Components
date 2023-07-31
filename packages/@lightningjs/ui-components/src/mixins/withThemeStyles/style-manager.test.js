import StyleManager from './StyleManager';
import lng from '@lightningjs/core';
import { jest } from '@jest/globals';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import context from '../../globals/context';

const createComponent = makeCreateComponent(
  class Test extends lng.Component {
    static get __componentName() {
      return 'Test';
    }
  }
);

describe('StyleManager', () => {
  let component;
  let styleManager;

  beforeEach(() => {
    window.LUI_STYLE_CACHE = undefined;
    component = createComponent()[0];
    styleManager = new StyleManager({ component });
  });

  afterEach(() => {
    styleManager.destroy();
    styleManager = null;
  });

  describe('constructor', () => {
    it('should create a StyleManager instance', () => {
      expect(styleManager).toBeInstanceOf(StyleManager);
    });

    it('should set the component property', () => {
      expect(styleManager.component).toBe(component);
    });

    it('should initialize the _style property as an empty object', () => {
      expect(styleManager._style).toEqual({});
    });
  });

  describe('destroy', () => {
    it('should destroy the StyleManager instance', () => {
      styleManager.destroy();
      expect(styleManager.component).toBeNull();
    });
  });

  describe('_onThemeUpdate', () => {
    it('should update the style when the theme is updated', () => {
      const updateSpy = jest.spyOn(styleManager, 'update');
      styleManager._onThemeUpdate();
      expect(updateSpy).toHaveBeenCalled();
    });
  });

  describe('clearSourceCache', () => {
    it.skip('should clear the source cache', () => {
      styleManager.clearSourceCache();
      const cacheKey = styleManager._generateCacheKey('styleSource');
      const cache = window.LUI_STYLE_CACHE.get(cacheKey);
      expect(cache).toBeUndefined();
    });
  });

  describe('clearStyleCache', () => {
    it('should clear the style cache for the current mode and tone', () => {
      styleManager.clearStyleCache();
      const { mode, tone } = styleManager.component;
      const cacheKey = styleManager._generateCacheKey(`style_${mode}_${tone}`);
      const cache = window.LUI_STYLE_CACHE.get(cacheKey);
      expect(cache).toBeUndefined();
    });
  });

  describe('_generateCacheKey', () => {
    it('should generate a cache key for the given name', () => {
      const name = 'styleSource';
      const cacheKey = styleManager._generateCacheKey(name);
      const expectedCacheKey = `${name}_${component.constructor.__componentName}`;
      expect(cacheKey).toBe(expectedCacheKey);
    });

    it('should add component id from the cache key if the component has component level style', () => {
      component._componentLevelStyle = { foo: 'bar' };
      const name = 'styleSource';
      const cacheKey = styleManager._generateCacheKey(name);
      const expectedCacheKey = `${name}_${component.constructor.__componentName}_${component.__id}`;
      expect(cacheKey).toBe(expectedCacheKey);
    });
  });

  describe('_addCache', () => {
    it('should add a cache entry with the given name and payload', () => {
      const name = 'styleSource';
      const payload = { color: 'red' };
      styleManager._addCache(name, payload);
      const cacheKey = styleManager._generateCacheKey(name);
      const cache = window.LUI_STYLE_CACHE.get(cacheKey);
      expect(cache).toEqual({
        ids: [component.__id],
        payload
      });
    });

    it('should append the current component id to the existing cache entry', () => {
      const name = 'styleSource';
      const existingPayload = { color: 'red' };
      const existingIds = ['123'];
      const expectedIds = [...existingIds, component.__id];
      window.LUI_STYLE_CACHE.set(styleManager._generateCacheKey(name), {
        ids: existingIds,
        payload: existingPayload
      });
      const newPayload = { fontSize: 16 };
      styleManager._addCache(name, newPayload);
      const cacheKey = styleManager._generateCacheKey(name);
      const cache = window.LUI_STYLE_CACHE.get(cacheKey);
      expect(cache).toEqual({
        ids: expectedIds,
        payload: newPayload
      });
    });
  });

  describe('_cleanupCache', () => {
    it('should remove the current component id from the cache entries', () => {
      const name1 = 'styleSource';
      const name2 = `style_${component.mode}_${component.tone}`;
      const existingIds = ['123', component.__id, '456'];
      const expectedIds = ['123', '456'];
      const payload = { color: 'red' };
      window.LUI_STYLE_CACHE.set(styleManager._generateCacheKey(name1), {
        ids: existingIds,
        payload
      });
      window.LUI_STYLE_CACHE.set(styleManager._generateCacheKey(name2), {
        ids: existingIds,
        payload
      });
      styleManager._cleanupCache();
      const cacheKey1 = styleManager._generateCacheKey(name1);
      const cache1 = window.LUI_STYLE_CACHE.get(cacheKey1);
      const cacheKey2 = styleManager._generateCacheKey(name2);
      const cache2 = window.LUI_STYLE_CACHE.get(cacheKey2);
      expect(cache1).toEqual({
        ids: expectedIds,
        payload
      });
      expect(cache2).toEqual({
        ids: expectedIds,
        payload
      });
    });

    it('should remove the cache entry if the current component id is the only id in the entry', () => {
      const name = 'styleSource';
      const existingIds = [component.__id];
      const payload = { color: 'red' };
      window.LUI_STYLE_CACHE.set(styleManager._generateCacheKey(name), {
        ids: existingIds,
        payload
      });
      styleManager._cleanupCache();
      const cacheKey = styleManager._generateCacheKey(name);
      const cache = window.LUI_STYLE_CACHE.get(cacheKey);
      expect(cache).toBeUndefined();
    });
  });

  describe('_removeCache', () => {
    it('should remove the cache entry with the given name', () => {
      const name = 'styleSource';
      const payload = { color: 'red' };
      const cacheKey = styleManager._generateCacheKey(name);
      window.LUI_STYLE_CACHE.set(cacheKey, {
        ids: [component.__id],
        payload
      });
      styleManager._removeCache(name);
      const cache = window.LUI_STYLE_CACHE.get(cacheKey);
      expect(cache).toBeUndefined();
    });
  });

  describe('_getCache', () => {
    it('should return the cache entry with the given name', () => {
      const name = 'styleSource';
      const payload = { color: 'red' };
      const cacheKey = styleManager._generateCacheKey(name);
      window.LUI_STYLE_CACHE.set(cacheKey, {
        ids: [component.__id],
        payload
      });
      const cache = styleManager._getCache(name);
      expect(cache).toEqual({
        ids: [component.__id],
        payload
      });
    });
  });

  describe('_update', () => {
    it('should update the component style based on changes in tone, mode, and _componentLevelStyle', () => {
      const mode = 'focused';
      const tone = 'dark';
      const componentLevelStyle = { fontSize: 16 };
      const styleSource = { base: { color: 'red' } };
      const style = { color: 'blue' };

      const createComponent = makeCreateComponent(
        class Test extends lng.Component {
          static get __componentName() {
            return 'Test';
          }

          static get __themeStyle() {
            return { fontSize: 16 };
          }
        }
      );

      [component] = createComponent({
        mode,
        tone,
        style: {
          ...componentLevelStyle,
          styleConfig: {
            mode: {
              color: 'red'
            }
          }
        }
      });

      styleManager = new StyleManager({ component });

      jest.spyOn(styleManager, 'clearStyleCache');
      jest.spyOn(styleManager, '_getCache').mockReturnValueOnce(undefined);
      jest.spyOn(styleManager, '_getCache').mockReturnValueOnce(styleSource);
      jest.spyOn(styleManager, '_getCache').mockReturnValueOnce(style);
      jest.spyOn(styleManager, '_addCache');
      jest.spyOn(styleManager, 'emit');

      component.mode = mode;
      component.tone = tone;

      styleManager._update();

      // expect(styleManager.clearStyleCache).toHaveBeenCalled();
      expect(styleManager._getCache).toHaveBeenCalledWith('styleSource');
      expect(styleManager._getCache).toHaveBeenCalledWith(
        `style_${mode}_${tone}`
      );
      // expect(styleManager._addCache).toHaveBeenCalledWith(
      //   'styleSource',
      //   styleSource
      // );
      // expect(styleManager._addCache).toHaveBeenCalledWith(
      //   `style_${mode}_${tone}`,
      //   style
      // );
      // expect(styleManager.emit).toHaveBeenCalledWith(
      //   'styleUpdate',
      //   styleManager.style
      // );
    });

    it.skip('should handle errors and log them to the context', () => {
      jest.spyOn(context, 'error').mockImplementationOnce(() => {});

      jest.spyOn(styleManager, 'clearStyleCache');
      jest.spyOn(styleManager, '_getCache').mockReturnValueOnce(undefined);
      jest.spyOn(styleManager, '_getCache').mockImplementationOnce(() => {
        throw new Error('Failed to get style cache');
      });

      styleManager._update();

      expect(styleManager.clearStyleCache).toHaveBeenCalled();
      expect(styleManager._getCache).toHaveBeenCalledWith('styleSource');
      expect(context.error).toHaveBeenCalledWith(
        'styleManager: ',
        'Failed to get style cache'
      );
    });
  });

  describe('style', () => {
    it.skip('should throw an error when attempting to set the style directly', () => {
      const setStyle = () => {
        styleManager.style = { color: 'red' };
      };
      expect(setStyle).toThrow('Cannot mutate style directly');
    });

    it('should return the current style', () => {
      const expectedStyle = { color: 'red' };
      styleManager._style = expectedStyle;
      expect(styleManager.style).toBe(expectedStyle);
    });
  });

  describe('_hasComponentStyle', () => {
    it('should return true if the component has mixin styles or component-level styles', () => {
      component.constructor.__mixinStyle = { color: 'red' };
      component._componentLevelStyle = { fontSize: 16 };
      expect(styleManager._hasComponentStyle).toBeTruthy();
    });

    it('should return false if the component does not have mixin styles or component-level styles', () => {
      styleManager = new StyleManager();
      expect(styleManager._hasComponentStyle).toBeFalsy();
    });
  });
});
