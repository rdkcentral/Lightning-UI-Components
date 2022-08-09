import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variants, variantDefault } from './Toggle.styles';

export function base(theme) {
  return {
    w: theme.layout.gutterX.sm,
    strokeRadius: theme.radius.md * 0.75,
    strokeWeight: theme.stroke.sm,
    knobWidth: theme.spacer.lg,
    knobHeight: theme.spacer.lg,
    knobRadius: theme.radius.sm,
    knobPadding: theme.spacer.xs,
    knobCheckedX: theme.spacer.xl + theme.spacer.xs,
    knobUncheckedX: theme.spacer.sm
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
