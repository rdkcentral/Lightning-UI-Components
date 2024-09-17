export const base = theme => ({
  animationDuration: theme.animation.duration.xslow * 4,
  borderWidth: theme.stroke.md,
  colorTransitionAlpha: theme.alpha.secondary,
  radius: theme.radius.md,
  spacing: theme.spacer.xs,
  shouldAnimate: true
});

export const tone = theme => ({
  neutral: {
    color: theme.color.interactiveNeutralFocus,
    transitionColor: null,
    secondaryColor: theme.color.interactiveNeutralFocusSoft
  },
  inverse: {
    color: theme.color.interactiveInverseFocus,
    transitionColor: null,
    secondaryColor: theme.color.interactiveInverseFocusSoft
  },
  brand: {
    color: theme.color.interactiveBrandFocus,
    transitionColor: null,
    secondaryColor: theme.color.interactiveBrandFocusSoft
  }
});
