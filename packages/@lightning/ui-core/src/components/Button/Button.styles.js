import { getWidthByColumnSpan } from '../../utils/index.js';

export const base = theme => ({
  h: theme.spacer.md * 10,
  w: 0,
  justify: 'center',
  minWidth: getWidthByColumnSpan(theme, 3),
  paddingX: theme.spacer.xxxl,
  paddingXNoTitle: theme.spacer.xl,
  titlePadding: theme.spacer.md,
  itemSpacing: theme.spacer.md,
  prefixH: theme.spacer.xxl,
  suffixH: theme.spacer.xxl,
  textStyle: {
    ...theme.typography.button1,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  contentColor: theme.color.fillNeutral
});

export const mode = theme => ({
  focused: {
    textStyle: { textColor: theme.color.textInverse },
    contentColor: theme.color.fillInverse
  },
  disabled: {
    textStyle: { textColor: theme.color.textNeutralDisabled },
    contentColor: theme.color.fillNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        textStyle: { textColor: theme.color.textNeutral },
        contentColor: theme.color.fillNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        textStyle: { textColor: theme.color.textNeutral },
        contentColor: theme.color.fillNeutral
      }
    }
  }
});
