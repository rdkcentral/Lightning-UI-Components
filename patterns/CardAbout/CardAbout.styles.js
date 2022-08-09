import { processThemeStyles } from '../../mixins/withThemeStyles';
import { getWidthByUpCount, getDimensions } from '../../utils';
export const variantDefault = 'neutral';

export function base(theme) {
  return {
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
  };
}

// eslint-disable-next-line no-unused-vars
export function variants(theme) {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
