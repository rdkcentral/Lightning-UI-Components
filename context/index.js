export { default as theme } from './theme';
import { capitalizeFirstLetter } from '../utils';
import logger from './logger';
import metrics from './metrics';
import theme from './theme';
import events from './events';
/**
 * Class to create a context object. Context is a singleton that will hold settings and logic to be used across all Lightning UI components.
 */
export class Context {
  /**
   * @type {Object}
   */
  get theme() {
    return theme.getTheme();
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
   * A log function that will show in the console only in
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
    theme.setTheme(value);
    return theme.getTheme();
  }
  /**
   * @property {Object}
   * @return {Object}
   */
  updateTheme(value) {
    theme.updateTheme(value);
    return theme.getTheme();
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
