export default theme => ({
  w: 710,
  h: 487,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  title: {
    y: 384 - 360, // the dimension is calculated from the UX design doc
    h: 96,
    text: undefined, // clear the inherited text style
    style: 'headline1',
    verticalAlign: 'top',
    maxLines: 2,
    textColor: theme.palette.text.light.primary
  },
  subtitle: {
    y: 480 - 360,
    h: 36,
    text: undefined,
    style: 'body2',
    verticalAlign: 'top',
    lineHeight: 36,
    textColor: theme.palette.text.light.secondary
  },
  content: {
    y: 532 - 360,
    h: 203,
    style: 'body3',
    verticalAlign: 'top',
    maxLines: 6,
    textColor: theme.palette.text.light.tertiary
  },
  disclaimer: {
    y: 759 - 360,
    h: 64,
    style: 'body3',
    verticalAlign: 'top',
    maxLines: 2,
    textColor: theme.palette.text.light.tertiary
  },
  radio: {
    w: 32,
    h: 32,
    y: 24
  },
  focused: {
    title: {
      textColor: theme.palette.text.dark.primary
    },
    subtitle: {
      textColor: theme.palette.text.dark.primary
    },
    content: {
      textColor: theme.palette.text.dark.tertiary
    },
    disclaimer: {
      textColor: theme.palette.text.dark.tertiary
    },
    radio: {
      w: 24,
      h: 24
    }
  }
});
