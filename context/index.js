export { default as theme } from './theme';
import app from './app';
import logger from './logger';
import metrics from './metrics';
import theme from './theme';
import { capitalizeFirstLetter } from '../utils';

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
   * @type {Object}
   */
  get stats() {
    return app.stats;
  }
  /**
   * stats cannot be set directly
   */
  set stats(value) {
    logger.warn('Context.stats cannot be updated');
  }
  /**
   * A log function that will show in the console only in
   * @property {Function}
   * @return {void}
   */
  log(...args) {
    logger.log(...args);
  }
  /**
   * @property {Function}
   * @return {void}
   */
  warn(...args) {
    logger.warn(...args);
  }
  /**
   * @property {Function}
   * @return {void}
   */
  error(...args) {
    logger.error(args);
  }
  /**
   * @property {Function}
   * @return {void}
   */
  addComponent(component) {
    app.addComponent(component);
  }
  /**
   * @property {Function}
   * @return {void}
   */
  removeComponent(component) {
    app.removeComponent(component);
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
   * @property {Function}
   * @return {void}
   */
  setLogCallback(value) {
    logger.logCallback = value;
  }
  /**
   * @property {Function}
   * @return {void}
   */
  setKeyMetricsCallback(value) {
    metrics.keyMetricsCallback = value;
  }
  /**
   * @property {Function}
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
