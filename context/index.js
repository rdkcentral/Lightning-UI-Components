import { capitalizeFirstLetter } from '../utils';
import logger from './logger';
import metrics from './metrics';
import events from './events';
import themeManager from './theme-manager';

/**
 * Class to create a context object. Context is a singleton that will hold settings and logic to be used across all Lightning UI components.
 */
export class Context {
  constructor() {
    /** Different projects may have multiple instances of LUI - Store references to keep everything in sync */
    if (!window.LUI) {
      window.LUI = {};
    }
    if (!window.LUI.themeManagerInstances) {
      window.LUI.themeManagerInstances = [{ themeManager, events }];
    } else {
      window.LUI.themeManagerInstances.push({ themeManager, events });
    }
  }
  /**
   * @type {object}
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
   * @type {object}
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
   * @property {object|array}
   * @return {object}
   */
  setTheme(value) {
    return themeManager.setTheme(value);
  }
  /**
   * @property {object|array}}
   * @return {object}
   */
  updateTheme(value) {
    return themeManager.updateTheme(value);
  }
  /**
   * @property {string}
   * @return {object}
   */
  getSubTheme(subThemeName) {
    return themeManager.getSubTheme(subThemeName);
  }
  /**
   * Expects an object where properties are child theme names. Values will be merged with the global themeManager.
   * @property {object}
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
   * @return {object}
   */
  setSubTheme(subThemeName, value) {
    return themeManager.setSubTheme(subThemeName, value);
  }
  /**
   * @property {string}
   * @return {object}
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
   * @return {object}
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

export default new Context();
