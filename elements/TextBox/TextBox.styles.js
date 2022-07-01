import { processThemeStyles } from '../../mixins/withThemeStyles';

export function base(theme) {
  return {
    textStyle: theme.typography.body1,
    typography: theme.typography,
    maxLinesSuffix: '...',
    offsetY: 0,
    offsetX: 0
  };
}

export default (theme, variant) => processThemeStyles(theme, variant, base);
