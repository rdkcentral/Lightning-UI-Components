import { getThemeAnimation } from '../../utils';

export const base = theme => ({
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
  alpha: 1
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alphas.inactive / 100
  }
});
