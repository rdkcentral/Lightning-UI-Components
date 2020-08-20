/**
 * Returns a styles object for use by components
 * @param {Object|function} styles - Object or callback that takes theme as an argument, ultimately the returned value
 * @param {Object} theme - theme to be provided to styles
 */
export default (styles, theme) => {
  return typeof styles === 'function' ? styles(theme) : styles;
};
