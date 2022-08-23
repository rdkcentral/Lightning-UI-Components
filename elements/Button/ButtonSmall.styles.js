import { getWidthByColumnSpan } from '../../utils';

export const base = theme => ({
  h: theme.spacer.md * 8,
  minWidth: getWidthByColumnSpan(1),
  paddingX: theme.spacer.xxl,
  prefixSize: theme.spacer.xl + theme.spacer.xs,
  textStyle: theme.typography.button2
});
