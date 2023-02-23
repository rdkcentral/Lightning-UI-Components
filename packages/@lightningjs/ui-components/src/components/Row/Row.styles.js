export const base = theme => ({
  itemSpacing: theme.layout.gutterX.xs,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  itemTransition: {
    ...theme.animation.standardEntrance,
    duration: theme.animation.duration.fast
  }
});
