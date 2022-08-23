import { getWidthByUpCount, getDimensions } from '../../utils';

export const base = theme => ({
  contentSpacing: theme.spacer.md,
  descriptionTextProperties: {
    ...theme.typography.body2,
    textColor: theme.colors.coreNeutral,
    wordWrap: true,
    maxLines: 3
  },
  paddingFirstLine: theme.spacer.lg + theme.spacer.xs,
  paddingVertical: theme.spacer.lg,
  textContainerProperties: {
    ...theme.typography.display2,
    textColor: theme.colors.coreNeutral
  },
  titleTextProperties: {
    ...theme.typography.callout1,
    textColor: theme.colors.coreNeutralSecondary,
    maxLines: 1,
    wordWrap: true
  },
  w: getWidthByUpCount(3),
  h: getDimensions({ ratioX: 16, ratioY: 9, upCount: 3 }).h
});
