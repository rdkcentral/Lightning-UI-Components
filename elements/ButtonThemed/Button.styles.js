import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    h: theme.spacing(10),
    w: 0,
    fontOffsetY: 2,
    justify: 'center',
    minWidth: theme.calculateColumnWidth(theme.layout.columnCount / 3),
    paddingX: theme.spacing(5),
    paddingXIcon: theme.spacing(3),
    prefixMargin: theme.spacing(1),
    radius: theme.radius.medium,
    textColorUnfocused: theme.colors.coreNeutral,
    textColorDisabled: theme.colors.coreNeutralDisabled,
    textStyle: theme.typography.button1,
    prefixStyle: {
      w: theme.spacing(4),
      h: theme.spacing(4),
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
