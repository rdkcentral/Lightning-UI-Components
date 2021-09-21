export const tabStyles = theme => ({
  icon: {
    color: theme.palette.text.light.tertiary,
    sizes: theme.sizes.icon,
    flexParams: {
      marginRight: theme.spacing(1.5)
    }
  },
  text: {
    ...theme.typography.headline2,
    color: theme.palette.text.light.tertiary
  },
  focused: {
    icon: {
      color: theme.palette.text.light.primary
    },
    text: {
      color: theme.palette.text.light.primary
    }
  },
  selected: {
    icon: {
      color: theme.palette.text.light.secondary
    },
    text: {
      color: theme.palette.text.light.secondary
    }
  }
});
