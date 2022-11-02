import { utils } from '@lightning/ui-core';

export const base = theme => ({
  contentSpacing: theme.spacer.md,
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutral,
    wordWrap: true,
    maxLines: 3
  },
  paddingFirstLine: theme.spacer.lg + theme.spacer.xs,
  paddingVertical: theme.spacer.lg,
  inlineContentStyle: {
    iconW: theme.spacer.xxl * 2,
    iconH: theme.spacer.xxl * 2,
    textStyle: {
      ...theme.typography.display2,
      textColor: theme.color.textNeutral
    }
  },
  titleTextStyle: {
    ...theme.typography.callout1,
    textColor: theme.color.textNeutralSecondary,
    maxLines: 1,
    wordWrap: true
  },
  w: utils.getWidthByUpCount(theme, 3),
  h: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 3 }).h,
  alpha: 1
});

export const mode = theme => ({
  disabled: {
    titleTextStyle: { textColor: theme.color.textNeutralDisabled },
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled },
    inlineContentStyle: {
      textStyle: { textColor: theme.color.textNeutralDisabled }
    },
    alpha: theme.alpha.inactive
  }
});
