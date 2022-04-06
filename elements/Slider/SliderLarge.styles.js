import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variants, variantDefault } from './Slider.styles';

export function base(theme) {
  const size = theme.spacing(4);
  return {
    innerCircleSize: size,
    radius: size / 2
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
