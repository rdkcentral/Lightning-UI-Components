export const base = theme => ({
  fadeW: theme.layout.gutterX.lg,
  offset: theme.spacer.xxl,
  shouldSmooth: false,
  textStyle: {
    ...theme.typography.body1,
    textAlign: 'center'
  }
});
