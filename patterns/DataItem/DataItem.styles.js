import { FocusRing } from '../../elements';

export default theme => ({
  background: {
    color: theme.palette.background.ghost
  },
  radius: theme.border.radius.medium,
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
  unfocused: {
    scale: () => 1,
    focusring: { alpha: 0 }
  },
  focused: {
    scale: theme.getFocusScale,
    focusring: { alpha: 1 }
  }
});
