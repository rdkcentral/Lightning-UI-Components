export const base = theme => ({
  textY: 0,
  iconW: theme.spacer.xxl + theme.spacer.xs,
  iconH: theme.spacer.xxl + theme.spacer.xs,
  contentSpacing: theme.spacer.md,
  marginBottom: theme.typography.body1.lineHeight / -10,
  textStyle: {
    ...theme.typography.body1,
    verticalAlign: 'bottom'
  },
  maxLines: 1,
  justify: 'center'
});
