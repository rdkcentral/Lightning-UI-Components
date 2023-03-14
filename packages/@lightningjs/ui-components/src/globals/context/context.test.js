/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { getHexColor } from '../../utils';
import { jest } from '@jest/globals';
import themeManager from './theme-manager';
import logger from './logger';
import events from './events';
import metrics from './metrics';
import { Context } from '.';

jest.spyOn(logger, 'info').mockImplementation(() => {});
jest.spyOn(logger, 'log').mockImplementation(() => {});
jest.spyOn(logger, 'warn').mockImplementation(() => {});
jest.spyOn(logger, 'error').mockImplementation(() => {});

describe('context', () => {
  let context;

  beforeAll(() => {
    global.console.info = jest.fn().mockImplementation(() => {});
    global.console.warn = jest.fn().mockImplementation(() => {});
  });

  beforeEach(async () => {
    jest.resetModules();
    context = new Context();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('context api', () => {
    it('should get the base theme by default', () => {
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

    it('should have an on and emit method', () => {
      expect(events.constructor.name).toBe('EventEmitter');
      expect(typeof context.on).toBe('function');
      expect(typeof context.emit).toBe('function');
    });

    it('should not allow context.theme to be set directly', () => {
      const processedBaseTheme = themeManager._processTheme();
      context.theme = { foo: 'bar' };
      expect(context.theme).toMatchObject(processedBaseTheme);
    });

    it('should be able to update theme using updateTheme', () => {
      context.setTheme({ foo: 'bar' });
      expect(context.theme.foo).toMatch('bar');
    });

    it('should remove previous theme and deep merge theme properties with the original baseTheme when using context.set', () => {
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

    it('should only accept a string as the first argument for setSubTheme', async () => {
      const subTheme = await context.setSubTheme({ foo: 'bar' });
      expect(logger.warn.mock.calls).toContainEqual([
        'Sub theme name must be a string. Received an object'
      ]);
      expect(subTheme).toBeUndefined();
    });

    it('should only accept an object as the second argument for setSubTheme', async () => {
      const subTheme = await context.setSubTheme('shouldFail', 50);
      expect(logger.warn.mock.calls).toContainEqual([
        'Could not set subTheme shouldFail, value should be an object with properties. Received an number'
      ]);
      expect(subTheme).toBeUndefined();
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
      const keyMetricsCallback = () => {};
      context.setKeyMetricsCallback(keyMetricsCallback);
      expect(metrics.keyMetricsCallback).toEqual(keyMetricsCallback);
    });

    it('should only allow keyMetricsCallback to be a function using setKeyMetricsCallback', () => {
      const keyMetricsCallback = 'invalid';
      context.setKeyMetricsCallback(keyMetricsCallback);
      expect(logger.warn).toHaveBeenLastCalledWith(
        'context keyMetricsCallback expected a function. Received string'
      );
    });

    it('should set multiple subThemes', () => {
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
