import { getHexColor } from '../utils';

describe('context', () => {
  let context;
  let logger;

  beforeAll(() => {
    global.console.info = jest.fn().mockImplementation(() => {});
    global.console.warn = jest.fn().mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.resetModules();
    context = require('./index').default;
    logger = require('./logger');
    jest.mock('./logger', () => ({
      info: jest.fn().mockImplementation(() => {}),
      log: jest.fn().mockImplementation(() => {}),
      warn: jest.fn().mockImplementation(() => {}),
      error: jest.fn().mockImplementation(() => {}),
      debug: false
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('context api', () => {
    it('should get the base theme by default', () => {
      const themeManager = require('./theme-manager').default;
      const processedBaseTheme = themeManager._processTheme();
      expect(context.theme).toMatchObject(processedBaseTheme);
    });

    it('should allow context.debug to be set', () => {
      expect(context.debug).toBe(false);
      context.debug = true;
      expect(logger.debug).toBe(true);
    });

    it('should not allow keyMetricsCallback to be set directly on context', () => {
      context.keyMetricsCallback = 'unable to set';
      expect(logger.warn).toBeCalledWith(
        'Context.keyMetricsCallback must be set using context.setKeyMetricsCallback'
      );
    });

    it('should have a on and emit method', () => {
      const events = require('./events').default;
      expect(events.constructor.name).toBe('EventEmitter');
      expect(typeof context.on).toBe('function');
      expect(typeof context.emit).toBe('function');
    });

    it('should not allow context.theme to be set directly', () => {
      const themeManager = require('./theme-manager').default;
      const processedBaseTheme = themeManager._processTheme();
      context.theme = { foo: 'bar' };
      expect(context.theme).toMatchObject(processedBaseTheme);
    });

    it('should be able to update theme using updateTheme', () => {
      context.setTheme({ foo: 'bar' });
      expect(context.theme.foo).toMatch('bar');
    });

    it('should remove previous theme and deep merge theme properties with the original baseTheme when using context.set', () => {
      const themeManager = require('./theme-manager').default;
      const { color: baseColors } = themeManager._processTheme();
      const firstColorProp = Object.keys(baseColors).unshift();
      const color = {};
      color[firstColorProp] = ['#663399', 1];
      context.setTheme({ color });
      expect(context.theme.color[firstColorProp]).toBe(getHexColor('#663399'));
      context.setTheme({ foo: 'bar' });
      expect(context.theme.foo).toBe('bar');
      context.setTheme({ foo2: 'bar' });
      expect(context.theme.foo2).toBe('bar');
      expect(context.theme.foo).toBeUndefined();
    });

    it('should merge previous theme properties context.update', () => {
      const themeManager = require('./theme-manager').default;
      const { color: baseColors } = themeManager._processTheme();
      const firstColorProp = Object.keys(baseColors).unshift();
      const color = {};
      color[firstColorProp] = ['#663399', 1];
      context.updateTheme({ color });
      expect(context.theme.color[firstColorProp]).toBe(getHexColor('#663399'));
      context.updateTheme({ foo: 'bar' });
      expect(context.theme.foo).toBe('bar');
      context.updateTheme({ foo2: 'bar' });
      expect(context.theme.foo2).toBe('bar');
      expect(context.theme.foo).toBe('bar');
    });

    it('should set a sub theme when with setSubTheme and fetch to appropriate theme when using getSubTheme', () => {
      context.setSubTheme('mySubTheme', { radius: { md: 80 } });
      const baseTheme = context.theme;
      const subTheme = context.getSubTheme('mySubTheme');
      baseTheme.radius.md = 80;
      expect(subTheme).toMatchObject(baseTheme);
    });

    it('should only accept a string as the first argument for setSubTheme', async done => {
      const subTheme = await context.setSubTheme({ foo: 'bar' });
      expect(logger.warn.mock.calls).toContainEqual([
        'Sub theme name must be a string. Received an object'
      ]);
      expect(subTheme).toBeUndefined();
      done();
    });

    it('should only accept an object as the second argument for setSubTheme', async done => {
      const subTheme = await context.setSubTheme('shouldFail', 50);
      expect(logger.warn.mock.calls).toContainEqual([
        'Could not set subTheme shouldFail, value should be an object with properties. Received an number'
      ]);
      expect(subTheme).toBeUndefined();
      done();
    });

    it('should update an existing subTheme when using updateSubTheme', () => {
      context.setSubTheme('mySubTheme', { radius: { md: 80 } });
      const baseTheme = context.theme;
      let subTheme = context.getSubTheme('mySubTheme');
      baseTheme.radius.md = 80;
      expect(subTheme).toMatchObject(baseTheme);
      context.updateSubTheme('mySubTheme', { radius: { md: 60 } });
      baseTheme.radius.md = 60;
      subTheme = context.getSubTheme('mySubTheme');
      expect(subTheme).toMatchObject(baseTheme);
      context.updateSubTheme('mySubTheme', { radius: { sm: 30 } });
      subTheme = context.getSubTheme('mySubTheme');
      baseTheme.radius.sm = 30;
      expect(subTheme).toMatchObject(baseTheme);
    });

    it('should remove a subTheme from memory', () => {
      context.setSubTheme('mySubTheme', { radius: { md: 80 } });
      let subTheme = context.getSubTheme('mySubTheme');
      expect(subTheme).not.toBeUndefined();
      context.removeSubTheme('mySubTheme');
      subTheme = context.getSubTheme('mySubTheme');
      expect(subTheme).toBeUndefined();
    });

    it('should emit an event when sub a sub theme is modified', () => {
      const spy = jest.fn();
      context.on('themeUpdatetest', spy);
      context.setSubTheme('test', { radius: { md: 80 } });
      expect(spy).toHaveBeenCalledTimes(1);
      context.updateSubTheme('test', { radius: { md: 60 } });
      expect(spy).toHaveBeenCalledTimes(2);
      context.removeSubTheme('test');
      expect(spy).toHaveBeenCalledTimes(3);
    });

    it('should return undefined for context.keyMetricsCallback if has not yet been set', () => {
      expect(context.keyMetricsCallback).toBeUndefined();
    });

    it('should be able to set keyMetricsCallback using setKeyMetricsCallback', () => {
      const metrics = require('./metrics').default;
      const keyMetricsCallback = () => {};
      context.setKeyMetricsCallback(keyMetricsCallback);
      expect(metrics.keyMetricsCallback).toEqual(keyMetricsCallback);
    });

    it('should only allow keyMetricsCallback to be a function using setKeyMetricsCallback', () => {
      const metrics = require('./metrics').default;
      const keyMetricsCallback = 'invalid';
      context.setKeyMetricsCallback(keyMetricsCallback);
      expect(metrics.keyMetricsCallback).toBeUndefined();
    });

    it('should set multiple subThemes', () => {
      const themeManager = require('./theme-manager').default;
      themeManager.setSubTheme = jest.fn().mockImplementation(() => {});
      context.setSubThemes({
        one: { foo: 'bar' },
        two: { foo2: 'bar2' }
      });
      expect(themeManager.setSubTheme).toHaveBeenCalledTimes(2);
      expect(themeManager.setSubTheme).toHaveBeenNthCalledWith(1, 'one', {
        foo: 'bar'
      });
      expect(themeManager.setSubTheme).toHaveBeenNthCalledWith(2, 'two', {
        foo2: 'bar2'
      });
    });

    it('should send warn to logger if setSubThemes payload is not an object', () => {
      logger.warn = jest.fn().mockImplementation(() => {});
      context.setSubThemes('invalid');
      expect(logger.warn).toHaveBeenCalledTimes(1);
      expect(logger.warn).toHaveBeenCalledWith('subThemes must be an object');
    });

    it('should be able to update logCallback using setLogCallback', () => {
      const logCallback = () => {};
      context.setLogCallback(logCallback);
      expect(logger.logCallback).toEqual(logCallback);
    });

    it('should only allow logCallback to be a function using context.set', () => {
      const logCallback = 'invalid';
      context.setLogCallback(logCallback);
      expect(context.logCallback).toBeUndefined();
    });

    it('should allow theme, keyMetricsCallback, logCallback to be set with context.config', () => {
      const metrics = require('./metrics').default;
      const themeManager = require('./theme-manager').default;
      const themeSetting = { foo: 'bar' };
      const keyMetricsCallback = () => {};
      const logCallback = () => {};
      context.config({
        theme: themeSetting,
        keyMetricsCallback,
        logCallback
      });
      expect(themeManager.getTheme().foo).toMatch('bar');
      expect(metrics.keyMetricsCallback).toBe(keyMetricsCallback);
      expect(logger.logCallback).toBe(logCallback);
    });

    it('should pass events to the context event emitter when calling context.emit', () => {
      const events = require('./events').default;
      events.emit = jest.fn().mockImplementation(() => {});
      context.emit('myEvent', { payload: 'myEventPayload' });
      expect(events.emit).toHaveBeenCalledTimes(1);
      expect(events.emit).toHaveBeenCalledWith('myEvent', {
        payload: 'myEventPayload'
      });
    });

    it('should have a log method', () => {
      context.log('should log a message');
      expect(logger.log).toHaveBeenCalled();
    });

    it('should have a info method', () => {
      context.info('should log a message');
      expect(logger.info).toHaveBeenCalled();
    });

    it('should have a warn method', () => {
      context.warn('should log a message');
      expect(logger.warn).toHaveBeenCalled();
    });

    it('should call have a error method', () => {
      context.error('should log a message');
      expect(logger.error).toHaveBeenCalled();
    });
  });
});
