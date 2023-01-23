export const base = theme => {
  const paddingX = theme.spacer.lg;
  const radius = theme.radius.xl;
  const logoRadius = Math.max(radius - paddingX / 2, 0);

  return {
    h: theme.spacer.md * 8,
    iconStyle: {},
    logoStyle: {
      radius: logoRadius,
      w: theme.spacer.md * 7,
      h: theme.spacer.md * 6
    },
    minWidth: theme.spacer.md * 9,
    paddingX,
    paddingXNoTitle: theme.spacer.md,
    prefixH: theme.spacer.md * 6,
    prefixPadding: theme.spacer.md,
    radius,
    titlePadding: theme.spacer.md
  };
};
