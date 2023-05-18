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

import { capitalizeFirstLetter } from '../../utils/index.js'; // Keep .js so it can be consumed by node
import logger from './logger.js';
import metrics from './metrics.js';
import events from './events.js';
import themeManager from './theme-manager.js';

/**
 * Class to create a context object. Context is a singleton that will hold settings and logic to be used across all Lightning UI components.
 */

/**
 * @typedef ThemeObject
 * @type {any}
 */
class Context {
  /**
   * @type {ThemeObject}
   */
  get theme() {
    return themeManager.getTheme();
  }
  /**
   * theme cannot be set directly
   */
  set theme(value) {
    logger.warn(
      'Context.theme must be set using context.setTheme or context.updateTheme'
    );
  }
  /**
   * @type {Object}
   */
  get keyMetricsCallback() {
    return metrics.keyMetricsCallback;
  }
  /**
   * keyMetricsCallback cannot be set directly
   */
  set keyMetricsCallback(value) {
    logger.warn(
      'Context.keyMetricsCallback must be set using context.setKeyMetricsCallback'
    );
  }
  /**
   * @type {Boolean}
   */
  get debug() {
    return logger.debug;
  }

  set debug(value) {
    logger.debug = value;
  }
  /**
   * @type {function}
   * @param {string} name
   * @param {function} callback
   */
  on() {
    return events.on(...arguments);
  }
  /**
   * @type {function}
   */
  off() {
    return events.off(...arguments);
  }
  /**
   * @type {function}
   * @param {string} name
   * @param {string|object|number|boolean} payload
   */
  emit() {
    return events.emit(...arguments);
  }
  /**
   * @property {function}
   * @return {void}
   */
  log(...args) {
    logger.log(...args);
  }
  /**
   * @property {function}
   * @return {void}
   */
  info(...args) {
    logger.info(...args);
  }
  /**
   * @property {function}
   * @return {void}
   */
  warn(...args) {
    logger.warn(...args);
  }
  /**
   * @property {function}
   * @return {void}
   */
  error(...args) {
    logger.error(args);
  }
  /**
   * @property {Object|array}
   * @return {Object}
   */
  setTheme(value) {
    return themeManager.setTheme(value);
  }
  /**
   * @property {Object|array}}
   * @return {Object}
   */
  updateTheme(value) {
    return themeManager.updateTheme(value);
  }
  /**
   * @property {string}
   * @return {Object}
   */
  getSubTheme(subThemeName) {
    return themeManager.getSubTheme(subThemeName);
  }
  /**
   * Expects an object where properties are child theme names. Values will be merged with the global themeManager.
   * @property {Object}
   */
  setSubThemes(subThemesObj) {
    if ('object' !== typeof subThemesObj) {
      logger.warn('subThemes must be an object');
      return;
    }
    for (const subTheme in subThemesObj) {
      themeManager.setSubTheme(subTheme, subThemesObj[subTheme]);
    }
  }
  /**
   * @property {string}
   * @return {Object}
   */
  setSubTheme(subThemeName, value) {
    return themeManager.setSubTheme(subThemeName, value);
  }
  /**
   * @property {string}
   * @return {Object}
   */
  updateSubTheme(subThemeName, value) {
    return themeManager.updateSubTheme(subThemeName, value);
  }
  /**
   * @property {string}
   * @return {void}
   */
  removeSubTheme(subThemeName) {
    themeManager.removeSubTheme(subThemeName);
  }
  /**
   * @property {function}
   * @return {void}
   */
  setLogCallback(value) {
    logger.logCallback = value;
  }
  /**
   * @property {function}
   * @return {void}
   */
  setKeyMetricsCallback(value) {
    metrics.keyMetricsCallback = value;
  }
  /**
   * @property {function}
   * @return {Object}
   */
  config(config = {}) {
    const configKeys = Object.keys(config);
    for (let i = 0; i < configKeys.length; i++) {
      const setMethod = this['set' + capitalizeFirstLetter(configKeys[i])];
      if (setMethod) {
        setMethod(config[configKeys[i]]);
      }
    }
    return this;
  }
}

const contextInstance = new Context();

export { contextInstance as default, Context };
