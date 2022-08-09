import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variants, variantDefault } from './Slider.styles';

export function base(theme) {
  const size = theme.spacer.xxl;
  return {
    innerCircleSize: size,
    radius: size / 2
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
