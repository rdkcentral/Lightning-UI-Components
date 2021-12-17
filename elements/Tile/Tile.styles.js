import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    w: 400,
    radius: theme.radius.medium,
    blur: 0,
    unfocused: {
      shadow: { alpha: 0 }
    },
    focused: {
      shadow: { alpha: 1 }
    },
    focusRing: true,
    getFocusScale: theme.getFocusScale,
    getUnfocusScale: theme.getUnfocusScale
  };
}

export function variants(theme) {
  return {
    neutral: {
      progressColor: theme.colors.fillInverseBase
    },
    brand: {
      progressColor: theme.colors.fillPositiveFocus
    },
    inverse: {
      progressColor: theme.colors.materialNegative
    }
  };
}

export default (theme, variant) =>
  processThemeStyles(theme, variant, base, variants);
