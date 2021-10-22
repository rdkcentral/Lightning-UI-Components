import blackBackground from '../../Styles/black_background_tile';

export default theme => {
  return {
    radius: theme.radius.medium,
    blur: 0,
    src: blackBackground,
    unfocused: {
      shadow: { alpha: 0 }
    },
    focused: {
      shadow: { alpha: 1 }
    },
    focusRing: true,
    getFocusScale: theme.getFocusScale,
    getUnfocusScale: theme.getUnfocusScale
  };
};
