export const base = theme => {
  const textStyle = theme.typography.headline2;
  return {
    h: theme.spacer.md * 9,
    minWidth: theme.spacer.md * 7,
    paddingX: theme.spacer.md,
    textStyle,
    sizes: {
      sm: theme.spacer.md * 7,
      md: theme.spacer.md * 15,
      lg: theme.spacer.md * 23,
      xl: theme.spacer.md * 47,
      xxl: theme.spacer.md * 95
    },
    iconW: textStyle.lineHeight,
    iconH: textStyle.lineHeight
  };
};
