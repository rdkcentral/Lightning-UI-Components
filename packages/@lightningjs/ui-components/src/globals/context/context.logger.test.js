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

import { jest } from '@jest/globals';
import logger from './logger';

describe('context logger', () => {
  beforeAll(() => {
    global.console.log = jest.fn().mockImplementation(() => {});
    global.console.info = jest.fn().mockImplementation(() => {});
    global.console.warn = jest.fn().mockImplementation(() => {});
    global.console.error = jest.fn().mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.resetModules();
  });

  it('should allow context.debug to be set', () => {
    expect(logger.debug).toBe(false);
    logger.debug = true;
    expect(logger.debug).toBe(true);
    logger.debug = 0;
    expect(logger.debug).toBe(false);
    logger.debug = 1;
    expect(logger.debug).toBe(true);
  });

  it('should return undefined for logCallback if not yet set', () => {
    expect(logger.logCallback).toBeUndefined();
  });

  it('should only set logCallback if is a function', () => {
    logger.logCallback = 'invalid';
    expect(logger.logCallback).toBeUndefined();
    logger.logCallback = {};
    expect(logger.logCallback).toBeUndefined();
    logger.logCallback = 123;
    expect(logger.logCallback).toBeUndefined();
  });

  it('should contain a log method', () => {
    expect(typeof logger.log).toBe('function');
  });

  it('should call console.log if debug is set to true', () => {
    logger.debug = true;
    logger.log('message');
    expect(console.log).toHaveBeenCalled();
  });

  it('should contain a info method', () => {
    expect(typeof logger.info).toBe('function');
  });

  it('should call console.info if debug is set to true', () => {
    logger.debug = true;
    logger.info('message');
    expect(console.info).toHaveBeenCalled();
  });

  it('should contain a warn method', () => {
    expect(typeof logger.warn).toBe('function');
  });

  it('should call console.warn if debug is set to true', () => {
    logger.debug = true;
    logger.warn('message');
    expect(console.warn).toHaveBeenCalled();
  });

  it('should contain a error method', () => {
    expect(typeof logger.error).toBe('function');
  });

  it('should call console.error if debug is set to true', () => {
    logger.debug = true;
    logger.error('message');
    expect(console.error).toHaveBeenCalled();
  });

  it('should call the logCallback if set when calling log, info, warn, or error', () => {
    const logCallback = jest.fn();
    logger.logCallback = logCallback;
    logger.log('one');
    logger.warn('two');
    logger.error('three');
    logger.info('four');
    expect(logCallback).toHaveBeenCalledTimes(4);
  });
});
