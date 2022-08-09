import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variants } from './Checkbox.styles';

export const variantDefault = 'neutral';

export function base(theme) {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xl - strokeWidth * 2;
  return {
    w: size,
    h: size,
    radius: size / 2,
    strokeWidth,
    checkW: theme.spacer.md,
    checkH: theme.spacer.md + theme.spacer.xxs
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
