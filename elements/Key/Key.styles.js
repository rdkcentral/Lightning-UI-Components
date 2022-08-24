export const base = theme => {
  return {
    h: theme.spacer.md * 9,
    minWidth: theme.spacer.md * 7,
    paddingX: theme.spacer.md,
    textStyle: theme.typography.headline2,
    sizes: {
      sm: theme.spacer.md * 7,
      md: theme.spacer.md * 15,
      lg: theme.spacer.md * 23,
      xl: theme.spacer.md * 47
    }
  };
};
