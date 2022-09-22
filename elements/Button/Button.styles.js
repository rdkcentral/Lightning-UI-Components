import { getWidthByColumnSpan } from '../../utils';

export const base = theme => ({
  h: theme.spacer.md * 10,
  w: 0,
  justify: 'center',
  minWidth: getWidthByColumnSpan(3),
  paddingX: theme.spacer.xxxl,
  paddingXNoTitle: theme.spacer.xl,
  titlePadding: theme.spacer.md,
  prefixPadding: theme.spacer.lg,
  suffixPadding: theme.spacer.lg,
  prefixH: theme.spacer.xxl,
  suffixH: theme.spacer.xxl,
  textStyle: { ...theme.typography.button1, maxLines: 1 },
  contentColor: theme.colors.coreNeutral
});

export const mode = theme => ({
  focused: {
    contentColor: theme.colors.coreInverse
  },
  disabled: {
    contentColor: theme.colors.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        contentColor: theme.colors.coreNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        contentColor: theme.colors.coreNeutral
      }
    }
  }
});
