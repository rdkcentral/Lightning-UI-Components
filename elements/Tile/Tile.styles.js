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
    paddingX: theme.spacing(3),
    paddingY: theme.spacing(2),
    progressBarStyles: {},
    radius: theme.radius.medium,
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
