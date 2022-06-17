export default theme => ({
  shouldAnimate: true,
  radius: theme.border.radius.medium,
  shadow: theme.materials.shadow,
  blur: 0,
  verticalSpacing: 60,
  tabSpacing: 24,
  resultSpacing: 48,
  visibleTabs: {
    alpha: 1
  },
  hideSoftFocus: {
    alpha: 0
  },
  fadedTabs: {
    alpha: 0.3
  },
  softFocus: {
    alpha: 1,
    rect: true,
    color: 0xfffffffff,
    h: 4,
    w: 76,
    y: 120,
    x: 12
  }
});
