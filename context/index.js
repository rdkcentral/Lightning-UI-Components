import { capitalizeFirstLetter } from '../utils';
import logger from './logger';
import metrics from './metrics';
import events from './events';
import themeManager from './theme-manager';

/**
 * Class to create a context object. Context is a singleton that will hold settings and logic to be used across all Lightning UI components.
 */
export class Context {
  /**
   * @type {Object}
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
   * @property {Object}
   * @return {Object}
   */
  setTheme(value) {
    themeManager.setTheme(value);
    return themeManager.getTheme();
  }
  /**
   * @property {Object}
   * @return {Object}
   */
  updateTheme(value) {
    themeManager.updateTheme(value);
    return themeManager.getTheme();
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
    themeManager.setSubTheme(subThemeName, value);
    return themeManager.getSubTheme(subThemeName);
  }
  /**
   * @property {string}
   * @return {object}
   */
  updateSubTheme(subThemeName, value) {
    themeManager.updateSubTheme(subThemeName, value);
    return themeManager.getSubTheme(subThemeName);
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
  config(config) {
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
