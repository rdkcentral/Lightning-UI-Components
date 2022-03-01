import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variants } from './Checkbox.styles';

export const variantDefault = 'neutral';

export function base(theme) {
  const strokeWidth = theme.stroke.small;
  const size = theme.spacing(3) - strokeWidth * 2;
  return {
    w: size,
    h: size,
    radius: size / 2,
    strokeWidth,
    checkW: theme.spacing(1),
    checkH: theme.spacing(1.25)
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
