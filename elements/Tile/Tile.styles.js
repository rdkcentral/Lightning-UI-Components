export const base = theme => ({
  animationEntrance: theme.animations.standardEntrance,
  animationExit: theme.animations.expressiveEntrance,
  artworkStyles: {},
  badgeStyles: {},
  checkboxStyles: {},
  labelStyles: {},
  metadataStyles: {},
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  paddingYProgress: theme.spacer.lg + theme.spacer.xs,
  progressBarStyles: {},
  radius: theme.radius.md,
  alpha: 1
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alphas.inactive
  }
});
