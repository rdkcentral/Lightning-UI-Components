export const base = theme => ({
  text: theme.typography.body2,
  fadeHeight: 100,
  scroll: {
    timingFunction: 'linear',
    duration: theme.animations.durations.xfast
  },
  contentMarginTop: theme.spacer.md,
  contentMarginLeft: theme.spacer.xl,
  sliderMarginLeft: theme.spacer.lg + theme.spacer.xxs
});
