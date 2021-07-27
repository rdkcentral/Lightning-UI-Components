export default theme => ({
  text: {
    ...theme.typography.body1,
    textColor: theme.palette.text.light.primary
  },
  scrollBar: {
    fillColor: theme.palette.grey[80],
    strokeColor: theme.palette.grey[10],
    stroke: 5,
    w: 32,
    h: 32,
    radius: 16
  },
  scrollBarContainer: {
    color: theme.palette.grey[50],
    progressColor: theme.palette.grey[10],
    w: 8,
    radius: 4
  }
});
