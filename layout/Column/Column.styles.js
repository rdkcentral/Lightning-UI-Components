export const base = theme => ({
  itemSpacing: theme.layout.gutterY.xs,
  scrollIndex: 0,
  itemTransition: {
    timingFunction: theme.animations.expressiveEntrance,
    delay: theme.animations.expressiveEntranceDelay,
    duration: theme.animations.expressiveEntranceDuration
  }
});
