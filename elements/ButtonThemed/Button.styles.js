import { processThemeStyles } from '../../mixins/withThemeStyles';
import { getWidthByColumnSpan } from '../../utils';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    h: theme.spacer.md * 10,
    w: 0,
    fontOffsetY: 2,
    justify: 'center',
    minWidth: getWidthByColumnSpan(3),
    paddingX: theme.spacer.xxxl,
    paddingXIcon: theme.spacer.xl,
    prefixMargin: theme.spacer.md,
    radius: theme.radius.md,
    textColorUnfocused: theme.colors.coreNeutral,
    textColorDisabled: theme.colors.coreNeutralDisabled,
    textStyle: theme.typography.button1,
    prefixStyle: {
      w: theme.spacer.xxl,
      h: theme.spacer.xxl,
      iconColor: theme.colors.coreNeutral,
      colorFocused: theme.colors.coreInverse,
      checkedBackgroundColor: theme.colors.coreBrand
    }
  };
}

export function variants(theme) {
  return {
    neutral: {
      textColorFocused: theme.colors.coreInverse,
      prefixStyle: {
        colorFocused: theme.colors.coreInverse,
        checkedBackgroundColor: theme.colors.coreBrand
      }
    },
    inverse: {
      textColorFocused: theme.colors.coreNeutral,
      prefixStyle: {
        colorFocused: theme.colors.coreNeutral,
        checkedBackgroundColor: theme.colors.coreBrand
      }
    },
    brand: {
      textColorFocused: theme.colors.coreNeutral,
      prefixStyle: {
        colorFocused: theme.colors.coreNeutral,
        checkedBackgroundColor: theme.colors.coreBrand
      }
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
