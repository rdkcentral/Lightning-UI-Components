import { getWidthByColumnSpan } from '../../utils';

export const base = theme => ({
  h: theme.spacer.md * 10,
  w: 0,
  fontOffsetY: 2,
  justify: 'center',
  minWidth: getWidthByColumnSpan(3),
  paddingX: theme.spacer.xxxl,
  paddingXIcon: theme.spacer.xl,
  prefixMargin: theme.spacer.md,
  radius: theme.radius.md,
  textStyle: theme.typography.button1,
  textColor: theme.colors.coreNeutral,
  prefixStyle: {
    w: theme.spacer.xxl,
    h: theme.spacer.xxl,
    iconColor: theme.colors.coreNeutral,
    checkedBackgroundColor: theme.colors.coreBrand
  }
});

export const mode = theme => ({
  focused: {
    textColor: theme.colors.coreInverse,
    prefixStyle: {
      iconColor: theme.colors.coreInverse
    }
  },
  disabled: {
    textColor: theme.colors.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        textColor: theme.colors.coreNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        textColor: theme.colors.coreNeutral
      }
    }
  }
});
