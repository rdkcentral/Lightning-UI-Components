import { getWidthByUpCount, getDimensions } from '../../utils';

export const base = theme => ({
  contentSpacing: theme.spacer.md,
  descriptionTextProperties: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutral,
    wordWrap: true,
    maxLines: 3
  },
  paddingFirstLine: theme.spacer.lg + theme.spacer.xs,
  paddingVertical: theme.spacer.lg,
  textContainerProperties: {
    ...theme.typography.display2,
    textColor: theme.color.textNeutral
  },
  titleTextProperties: {
    ...theme.typography.callout1,
    textColor: theme.color.textNeutralSecondary,
    maxLines: 1,
    wordWrap: true
  },
  w: getWidthByUpCount(3),
  h: getDimensions({ ratioX: 16, ratioY: 9, upCount: 3 }).h,
  alpha: 1
});

export const mode = theme => ({
  disabled: {
    titleTextProperties: { textColor: theme.color.textNeutralDisabled },
    descriptionTextProperties: { textColor: theme.color.textNeutralDisabled },
    textContainerProperties: { textColor: theme.color.textNeutralDisabled },
    alpha: theme.alpha.inactive
  }
});
