import { GREY, OPACITY, getHexColor } from '../../Styles';

import { processThemeStyles } from '../../mixins/withThemeStyles';

export function base(theme) {
  return {
    blurBackgroundColor: getHexColor(GREY[90], OPACITY[4]), //TODO: Get this from theme
    blur: 4,
    spacing: theme.spacing(2)
  };
}

export function variants() {
  return {
    neutral: {},
    brand: {},
    inverse: {}
  };
}

export default (theme, variant) =>
  processThemeStyles(theme, variant, base, variants);
