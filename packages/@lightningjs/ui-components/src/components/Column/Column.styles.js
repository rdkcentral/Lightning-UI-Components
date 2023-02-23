export const base = theme => ({
  itemSpacing: theme.layout.gutterY.xs,
  scrollIndex: 0,
  itemTransition: {
    ...theme.animation.standardEntrance,
    duration: theme.animation.duration.fast
  }
});
