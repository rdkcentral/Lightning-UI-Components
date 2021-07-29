import lng from '@lightningjs/core';

export default theme => ({
  padding: theme.spacing(1),
  background: {
    h: theme.spacing(4),
    rect: true,
    shader: {
      type: lng.shaders.RoundedRectangle,
      radius: theme.border.radius.xsmall
    },
    color: theme.palette.badge.default
  },
  textPosition: {
    x: theme.spacing(1),
    y: 1
  },
  textProperties: {
    ...theme.typography.caption,
    textColor: theme.palette.text.light.primary,
    textAlign: 'center'
  },
  iconAlign: 'left'
});
