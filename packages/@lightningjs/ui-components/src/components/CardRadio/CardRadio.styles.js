

export const base = theme => ({
  w: 710,
  h: 487,
  paddingLeft: theme.spacer.xl,
  paddingRight: theme.spacer.xl,
  title: {
    ...theme.typography.headline1,
    y: 384 - 360,
    h: 96,
    text: undefined,
    verticalAlign: 'top',
    maxLines: 2,
    textColor: theme.palette.text.light.primary // Not sure the path for theme primary color
  },
  subtitle: {
    ...theme.typography.body2, // Need to verify body2 is supported
    y: 480 - 360,
    h: 36,
    text: undefined,
    verticalAlign: 'top',
    lineHeight: 36,
    textColor: theme.palette.text.light.secondary
  },
  content: {
    ...theme.typography.body3, // Need to verify body3 is supported
    y: 532 - 360,
    h: 203,
    verticalAlign: 'top',
    maxLines: 6,
    textColor: theme.palette.text.light.tertiary
  },
  disclaimer: {
    ...theme.typography.body3, // Need to verify body3 is supported
    y: 759 - 360,
    h: 64,
    verticalAlign: 'top',
    maxLines: 2,
    textColor: theme.palette.text.light.tertiary
  },
  radio: {
    w: 32,
    h: 32,
    y: 24
  },
});
  
export const mode = theme => ({
  focused: {
    title: {
      textColor: theme.palette.text.dark.primary // Not sure the path for palette theme primary color
    },
    subtitle: {
      textColor: theme.palette.text.dark.primary // Not sure the path for palette theme primary color
    },
    content: {
      textColor: theme.palette.text.dark.tertiary // Not sure the path for palette theme primary color
    },
    disclaimer: {
      textColor: theme.palette.text.dark.tertiary // Not sure the path for palette theme primary color
    },
    radio: {
      w: 24,
      h: 24
    }
  },
});
  