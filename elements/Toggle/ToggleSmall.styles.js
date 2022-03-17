import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variants, variantDefault } from './Toggle.styles';

export function base(theme) {
  return {
    w: theme.spacing(6),
    strokeRadius: theme.radius.medium * 0.75,
    strokeWeight: theme.stroke.small,
    knobWidth: theme.spacing(2),
    knobHeight: theme.spacing(2),
    knobRadius: theme.radius.small,
    knobPadding: theme.spacing(0.25),
    knobCheckedX: theme.spacing(3.5),
    knobUncheckedX: theme.spacing(0.5)
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
