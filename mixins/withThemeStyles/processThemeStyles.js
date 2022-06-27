import { clone } from '../../utils';

/**
 * Used by Component.style.js files to merge variants with base styles
 * @param {object} - Theme
 * @param {string} - Variant string - example: brand, neutral, inverse
 * @param {function} - Base theme function that returns an object
 * @param {function} - Variant theme function that returns an object with properties of brand, neutral, inverse
 * @return {object} - Final theme style object
 */
export default function processThemeStyles(
  theme = {},
  variant,
  base = () => {},
  variants = () => {}
) {
  if (
    'string' !== typeof variant ||
    -1 === ['neutral', 'inverse', 'brand'].indexOf(variant)
  ) {
    variant = 'neutral';
  }
  if (typeof theme !== 'object')
    throw new Error('processThemeStyles theme parameter must be an object');
  if (typeof base !== 'function')
    throw new Error('processThemeStyles base parameter must be a function');
  if (typeof variants !== 'function')
    throw new Error('processThemeStyles variant parameter must be a function');
  const baseStyles = base(theme);
  const variantStyles = variants(theme);
  const selectedVariant =
    ('object' === typeof variantStyles && variantStyles[variant]) || {};
  return clone(
    ('object' === typeof baseStyles && baseStyles) || {},
    selectedVariant
  );
}
