import withThemeStyles from '../mixins/withThemeStyles';
import Base from '../Base';
import TestUtils from '../test/lightning-test-utils';
import { getHexColor } from '../Styles/Colors';

class TestComponent extends withThemeStyles(Base, theme => ({
  radius: theme.radius.medium
})) {
  static __componentName() {
    return 'Test';
  }
}

const createComponent = TestUtils.makeCreateComponent(
  TestComponent,
  {},
  { debug: true }
);

describe('context', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  describe('context api', () => {
    it('should get the base theme by default', () => {
      const context = require('./index').default;
      const theme = require('./theme').default;
      const processedBaseTheme = theme._processTheme();
      expect(context.theme).toMatchObject(processedBaseTheme);
    });
    it('should allow context.debug to be set', () => {
      const context = require('./index').default;
      expect(context.debug).toBe(false);
      context.debug = true;
      expect(context.debug).toBe(true);
      context.debug = 0;
      expect(context.debug).toBe(false);
      context.debug = 1;
      expect(context.debug).toBe(true);
    });
    it('should have a on and emit method', () => {
      const context = require('./index').default;
      const events = require('./events').default;
      expect(events.constructor.name).toBe('EventEmitter');
      expect(typeof context.on).toBe('function');
      expect(typeof context.emit).toBe('function');
    });
    it('should not allow context.theme to be set directly', () => {
      const context = require('./index').default;
      const theme = require('./theme').default;
      const processedBaseTheme = theme._processTheme();
      context.theme = { foo: 'bar' };
      expect(context.theme).toMatchObject(processedBaseTheme);
    });
    it('should be able to update theme using updateTheme', () => {
      const context = require('./index').default;
      context.setTheme({ foo: 'bar' });
      expect(context.theme.foo).toMatch('bar');
    });
    it('should remove previous theme and deep merge theme properties with the original baseTheme when using context.set', () => {
      const context = require('./index').default;
      const theme = require('./theme').default;
      const { colors: baseColors } = theme._processTheme();
      const firstColorProp = Object.keys(baseColors).unshift();
      const colors = {};
      colors[firstColorProp] = ['#663399', 100];
      context.setTheme({ colors });
      expect(context.theme.colors[firstColorProp]).toBe(getHexColor('#663399'));
      context.setTheme({ foo: 'bar' });
      expect(context.theme.foo).toBe('bar');
      context.setTheme({ foo2: 'bar' });
      expect(context.theme.foo2).toBe('bar');
      expect(context.theme.foo).toBeUndefined();
    });
    it('should merge previous theme properties context.update', () => {
      const context = require('./index').default;
      const theme = require('./theme').default;
      const { colors: baseColors } = theme._processTheme();
      const firstColorProp = Object.keys(baseColors).unshift();
      const colors = {};
      colors[firstColorProp] = ['#663399', 100];
      context.updateTheme({ colors });
      expect(context.theme.colors[firstColorProp]).toBe(getHexColor('#663399'));
      context.updateTheme({ foo: 'bar' });
      expect(context.theme.foo).toBe('bar');
      context.updateTheme({ foo2: 'bar' });
      expect(context.theme.foo2).toBe('bar');
      expect(context.theme.foo).toBe('bar');
    });
    it('should return undefined for context.keyMetricsCallback if has not yet been set', () => {
      const context = require('./index').default;
      expect(context.keyMetricsCallback).toBeUndefined();
    });
    it('should be able to set keyMetricsCallback using setKeyMetricsCallback', () => {
      const context = require('./index').default;
      const metrics = require('./metrics').default;
      const keyMetricsCallback = () => {};
      context.setKeyMetricsCallback(keyMetricsCallback);
      expect(metrics.keyMetricsCallback).toEqual(keyMetricsCallback);
    });
    it('should only allow keyMetricsCallback to be a function using setKeyMetricsCallback', () => {
      const context = require('./index').default;
      const metrics = require('./metrics').default;
      const keyMetricsCallback = 'foobar';
      context.setKeyMetricsCallback(keyMetricsCallback);
      expect(metrics.keyMetricsCallback).toBeUndefined();
    });
    it('should log to the console when using context.log() if context.debug is set to true', () => {
      const Context = require('./index').Context;
      const context = new Context();
      console.log = jest.fn();
      context.debug = true;
      context.log('message');
      expect(console.log).toHaveBeenCalledWith('LightningUI', 'message');
    });
    it('should not log to the console when using context.log() if context.debug is set to false', () => {
      const Context = require('./index').Context;
      const context = new Context();
      console.log = jest.fn();
      context.log('message');
      expect(console.log).not.toHaveBeenCalled();
    });
    it('should be able to update logCallback using setLogCallback', () => {
      const context = require('./index').default;
      const logger = require('./logger').default;
      const logCallback = () => {};
      context.setLogCallback(logCallback);
      expect(logger.logCallback).toEqual(logCallback);
    });
    it('should only allow logCallback to be a function using context.set', () => {
      const context = require('./index').default;
      const logCallback = 'foobar';
      context.setLogCallback(logCallback);
      expect(context.logCallback).toBeUndefined();
    });
    it('should send log arguments to the logCallback if set', () => {
      const context = require('./index').default;
      const logCallback = jest.fn();
      context.log('message');
      expect(logCallback).toHaveBeenCalledTimes(0);
      context.setLogCallback(logCallback);
      context.log('message');
      expect(logCallback).toHaveBeenCalledTimes(1);
      expect(logCallback).toHaveBeenLastCalledWith({
        level: 'log',
        payload: ['message']
      });
    });
    it('should allow theme, keyMetricsCallback, logCallback to be set with context.config', () => {
      const context = require('./index').default;
      const metrics = require('./metrics').default;
      const logger = require('./logger').default;
      const theme = require('./theme').default;
      const themeSetting = { foo: 'bar' };
      const keyMetricsCallback = () => {};
      const logCallback = () => {};
      context.config({
        theme: themeSetting,
        keyMetricsCallback,
        logCallback
      });
      expect(theme.getTheme().foo).toMatch('bar');
      expect(metrics.keyMetricsCallback).toBe(keyMetricsCallback);
      expect(logger.logCallback).toBe(logCallback);
    });
  });
  describe('context style object', () => {
    it('should have a cache', () => {
      const theme = require('./theme').default;
      expect(theme._cache.constructor.name).toMatch('Map');
    });
    it('should have default theme', () => {
      const theme = require('./theme').default;
      const processedBaseTheme = theme._processTheme();
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
    });
    it('should deep merge object with existing theme when theme is set', () => {
      const theme = require('./theme').default;
      const processedBaseTheme = theme._processTheme([{ foo: 'bar' }]);
      theme.setTheme({ foo: 'bar' });
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
    });
    it('should not attempt to set any value for theme that is not an object', () => {
      const theme = require('./theme').default;
      const logger = require('./logger').default;
      logger.warn = jest.fn();
      const processedBaseTheme = theme._processTheme();
      theme.setTheme('string');
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      theme.setTheme(() => {
        console.log('foobar');
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
    // Will not be required with clone. it('should return the correct value for _overwriteMerge')
    it('should return a _getComponentUUID', () => {
      const theme = require('./theme').default;
      expect(theme._getComponentUUID(100)).toMatch('componentStyle100');
    });
    it('should process the theme correctly', () => {
      const theme = require('./theme').default;
      const processedBaseTheme = theme._processTheme();
      expect(theme.getTheme()).toMatchObject(processedBaseTheme);
      theme.setTheme({ foo: 'bar' });
      expect(theme.getTheme().foo).toBe('bar');
      theme.setTheme({ colors: { primary: ['#ff0000', 100] } });
      expect(theme.getTheme().colors.primary).toBe(4294901760);
    });
    it('should setComponentInstantiationStyles to the cache', () => {
      const [component] = createComponent();
      const payload = { foo: 'bar' };
      const theme = require('./theme').default;
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
      const theme = require('./theme').default;
      expect(theme.getComponentInstantiationStyles(component)).toBeUndefined();
      theme.setComponentInstantiationStyles(component, payload);
      expect(theme.getComponentInstantiationStyles(component)).toEqual(payload);
    });
    it('should reset component instantiation styles', () => {
      const [component] = createComponent();
      const payload = { foo: 'bar' };
      const theme = require('./theme').default;
      theme.setComponentInstantiationStyles(component, payload);
      expect(theme.getComponentInstantiationStyles(component)).toEqual(payload);
      theme.resetComponentInstantiationStyles(component);
      expect(theme.getComponentInstantiationStyles(component)).toBeUndefined();
    });
    it('should setComponentLevelStyles to the cache', () => {
      const payload = { foo: 'bar' };
      const theme = require('./theme').default;
      const response = theme.setComponentLevelStyles(123, payload);
      expect(theme._cache.get('componentStyle123')).toEqual(payload);
      expect(response).toBeUndefined();
    });
    it('should getComponentLevelStyles to the cache', () => {
      const payload = { foo: 'bar' };
      const theme = require('./theme').default;
      expect(
        theme.getComponentLevelStyles('componentStyle123')
      ).toBeUndefined();
      theme.setComponentLevelStyles(123, payload);
      expect(theme.getComponentLevelStyles(123)).toEqual(payload);
    });
    it('should reset componentLevelStyles', () => {
      const payload = { foo: 'bar' };
      const theme = require('./theme').default;
      theme.setComponentLevelStyles(123, payload);
      expect(theme._cache.get('componentStyle123')).toEqual(payload);
      theme.resetComponentLevelStyles(123);
      expect(theme._cache.has('componentStyle123')).toEqual(false);
    });
  });
  describe('logger', () => {
    it('should return undefined for logCallback if not yet set', () => {
      const logger = require('./logger').default;
      expect(logger.logCallback).toBeUndefined();
    });
    it('should only set logCallback if is a function', () => {
      const logger = require('./logger').default;
      logger.logCallback = 'foobar';
      expect(logger.logCallback).toBeUndefined();
      logger.logCallback = {};
      expect(logger.logCallback).toBeUndefined();
      logger.logCallback = 123;
      expect(logger.logCallback).toBeUndefined();
    });
    it('should contain a log method', () => {
      const logger = require('./logger').default;
      expect(typeof logger.log).toBe('function');
    });
    it('should contain a warn method', () => {
      const logger = require('./logger').default;
      expect(typeof logger.warn).toBe('function');
    });
    it('should contain a error method', () => {
      const logger = require('./logger').default;
      expect(typeof logger.error).toBe('function');
    });
    it('should only log message to the console when debug is set to true', () => {
      const logger = require('./logger').default;
      expect(typeof logger.log).toBe('function');
    });
    it('should call the logCallback if set when calling log, warn, or error', () => {
      const logCallback = jest.fn();
      const logger = require('./logger').default;
      logger.logCallback = logCallback;
      logger.log('one');
      logger.warn('two');
      logger.error('three');
      expect(logCallback).toHaveBeenCalledTimes(3);
    });
  });
  describe('metrics', () => {
    it('should return undefined for keyMetricsCallback if not yet set', () => {
      const metrics = require('./metrics').default;
      expect(metrics.keyMetricsCallback).toBeUndefined();
    });
    it('should set the keyMetricsCallback only if is a function', () => {
      const metrics = require('./metrics').default;
      metrics.keyMetricsCallback = 'foobar';
      expect(metrics.keyMetricsCallback).toBeUndefined();
      metrics.keyMetricsCallback = {};
      expect(metrics.keyMetricsCallback).toBeUndefined();
      metrics.keyMetricsCallback = 123;
      expect(metrics.keyMetricsCallback).toBeUndefined();
      const validFunction = () => {};
      metrics.keyMetricsCallback = validFunction;
      expect(metrics.keyMetricsCallback).toEqual(validFunction);
    });
  });
});
