import { processThemeStyles } from '../../mixins';
import { getThemeAnimation } from '../../utils';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    animationEntrance: getThemeAnimation('emphasizedEntrance', 'fast'),
    animationExit: getThemeAnimation('expressiveEntrance', 'fast'),
    artworkStyles: {},
    badgeStyles: {},
    checkboxStyles: {},
    labelStyles: {},
    metadataStyles: {},
    paddingX: theme.spacer.xl,
    paddingY: theme.spacer.lg,
    progressBarStyles: {},
    radius: theme.radius.md,
    disabledAlpha: theme.alphas.inactive / 100
  };
}

export function variants() {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
