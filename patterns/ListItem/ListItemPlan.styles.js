export default theme => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  radio: {
    w: 32,
    h: 32
  },
  title: {
    color: theme.palette.text.light.primary,
    text: {
      ...theme.typography.button1,
      fontSize: 36,
      lineHeight: 48,
      verticalAlign: 'top',
      wordWrap: false,
      textOverflow: 'ellipsis',
      maxLinesSuffix: '...'
    }
  },
  subtitle: {
    color: theme.palette.text.light.secondary,
    text: {
      ...theme.typography.body2,
      lineHeight: 36,
      verticalAlign: 'top',
      wordWrap: false,
      textOverflow: 'ellipsis',
      maxLinesSuffix: '...'
    }
  },
  content: {
    color: theme.palette.text.light.tertiary,
    style: 'body3',
    verticalAlign: 'bottom',
    textAlign: 'left',
    maxLinesSuffix: '...',
    flexItem: {
      marginTop: theme.spacing(2)
    }
  },
  focused: {
    content: {
      color: theme.palette.text.dark.tertiary
    },
    radio: {
      w: 24,
      h: 24
    }
  }
});
