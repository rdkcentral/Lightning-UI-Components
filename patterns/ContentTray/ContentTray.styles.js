import FocusRing from '../../elements/FocusRing';

export default theme => ({
  shouldAnimate: true,
  radius: theme.border.radius.medium,
  shadow: theme.materials.shadow,
  blur: 0,
  focusringType: FocusRing,
  focusring: function ({ w, h, radius, color }) {
    return {
      w,
      h,
      radius: radius + 2,
      color,
      size: theme.spacing(0.5),
      zIndex: 1
    };
  },
  text: {
    ...theme.typography.headline2,
    color: theme.palette.text.light.tertiary
  },
  unfocused: {
    focusring: { alpha: 0 },
    shadow: { alpha: 0 }
  },
  focused: {
    focusring: { alpha: 1 },
    shadow: { alpha: 1 }
  }
});
