import { processThemeStyles } from '../../mixins/withThemeStyles';

export function base(theme) {
  return {
    textY: 0,
    iconW: theme.spacing(4.5),
    iconH: theme.spacing(4.5),
    contentSpacing: theme.spacing(1),
    marginBottom: theme.typography.body1.lineHeight / -10,
    textProperties: theme.typography.body1,
    maxLines: 1,
    justify: 'center'
  };
}

export default (theme, variant) => processThemeStyles(theme, variant, base);
