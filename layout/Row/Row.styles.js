export const base = theme => ({
  itemSpacing: theme.layout.gutterX.xs,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  itemTransition: {
    timingFunction: theme.animations.functionalStandard,
    delay: theme.animations.functionalStandardDelay,
    duration: theme.animations.functionalStandardDuration
  }
});
