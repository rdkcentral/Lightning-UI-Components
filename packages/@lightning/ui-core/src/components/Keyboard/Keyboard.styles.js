export const base = theme => {
  return {
    spacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX,
    itemSpacing: theme.spacer.md * 10 + theme.spacer.md,
    inputStyle: { radius: theme.radius.md }
  };
};
