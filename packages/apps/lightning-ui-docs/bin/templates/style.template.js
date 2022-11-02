module.exports = () => {
  return `
    import { processThemeStyles } from '@lightning/ui-core';

    export const variantDefault = 'neutral';

    export function base(theme) {
      return {
        
      };
    }

    export function variants(theme) {
      return {
        neutral: {
          
        },
        inverse: {
        
        },
        brand: {
          
        }
      };
    }

    export default (theme, variant = variantDefault) =>
      processThemeStyles(theme, variant, base, variants);
  `
}
