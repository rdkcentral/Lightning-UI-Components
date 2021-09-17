export default theme => ({
  logoSpacing: theme.spacing(4),
  logoW: 99,
  fadeWidth: 100,
  w: 410,
  justify: 'flex-start',
  marqueeProperties: {},
  firstLineTextProperties: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary,
    maxLines: 1
  },
  secondLineTextProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    maxLines: 1
  },
  thirdLineTextProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    maxLines: 1
  }
});
