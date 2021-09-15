export default theme => ({
  w: 410,
  fadeWidth: theme.spacing(12.5),
  centerAlign: 'True',
  justify: 'center',
  marqueeProperties: {
    centerAlign: true
  },
  firstLineTextProperties: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary,
    textAlign: 'center',
    maxLines: 1
  },
  secondLineTextProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    textAlign: 'center',
    maxLines: 1
  },
  unfocused: {
    scale: () => 1
  },
  focused: {
    scale: theme.getFocusScale
  }
});
