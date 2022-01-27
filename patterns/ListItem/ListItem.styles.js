export default theme => ({
  icon: {
    width: 40,
    height: 40,
    color: theme.palette.text.light.primary,
    spacing: theme.spacing(2)
  },
  iconVariantFocus: 'inverse', // these can change with additional listItem refactoring
  iconVariantUnfocus: 'neutral',
  title: {
    color: theme.palette.text.light.primary,
    text: {
      ...theme.typography.button1,
      verticalAlign: 'top',
      wordWrap: false,
      textOverflow: 'ellipsis',
      maxLinesSuffix: '...'
    }
  },

  subtitle: {
    color: theme.palette.text.light.secondary,
    text: {
      ...theme.typography.body3,
      verticalAlign: 'top',
      wordWrap: false,
      textOverflow: 'ellipsis',
      maxLinesSuffix: '...'
    }
  },
  focused: {
    icon: {
      color: theme.palette.text.dark.primary
    },
    title: {
      color: theme.palette.text.dark.primary
    },
    subtitle: {
      color: theme.palette.text.dark.secondary
    }
  },
  fixedText: {
    wordWrap: false,
    textOverflow: 'ellipsis',
    maxLinesSuffix: '...'
  }
});
