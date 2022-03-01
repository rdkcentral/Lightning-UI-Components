import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';
export function base(theme) {
  return {
    blur: 4,
    blurAlphaDelay: theme.animations.functionalEntranceDelay,
    blurAlphaDuration: theme.animations.functionalEntranceDuration,
    blurAlphaTimingFunction: theme.animations.functionalEntrance,
    blurBackgroundColor: theme.colors.material,
    blurBackgroundColorAlpha: 0,
    centerImageRadius: theme.radius.medium,
    componentAlphaDelay: theme.animations.functionalEntranceDelay,
    componentAlphaDuration: theme.animations.functionalEntranceDuration,
    componentAlphaTimingFunction: theme.animations.functionalEntrance,
    gradientAlphaDelay: theme.animations.functionalEntranceDelay,
    gradientAlphaDuration: theme.animations.functionalEntranceDuration,
    gradientAlphaTimingFunction: theme.animations.functionalEntrance,
    gradientColor: theme.colors.material,
    imageScale: undefined,
    imageScaleDelayEntrance: theme.animations.emphasizedStandardDelay,
    imageScaleDurationEntrance: theme.animations.emphasizedStandardDuration,
    imageScaleTimingFunctionEntrance: theme.animations.emphasizedStandard,
    imageScaleDelayExit: theme.animations.functionalExitDelay,
    imageScaleDurationExit: theme.animations.functionalExitDuration,
    imageScaleTimingFunctionExit: theme.animations.functionalExit,
    logoPercentageX: undefined,
    logoPercentageY: undefined,
    padding: theme.spacing(1),
    radius: 0
  };
}

export function variants() {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
