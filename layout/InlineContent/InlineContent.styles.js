import { processThemeStyles } from '../../mixins/withThemeStyles';

export function base(theme) {
  return {
    textY: 0,
    iconW: theme.spacer.xxl + theme.spacer.xs,
    iconH: theme.spacer.xxl + theme.spacer.xs,
    contentSpacing: theme.spacer.md,
    marginBottom: theme.typography.body1.lineHeight / -10,
    textProperties: theme.typography.body1,
    maxLines: 1,
    justify: 'center'
  };
}

export default (theme, variant) => processThemeStyles(theme, variant, base);
