import { getWidthByColumnSpan } from '../../utils';

export const base = theme => ({
  h: theme.spacer.md * 8,
  minWidth: getWidthByColumnSpan(1),
  paddingX: theme.spacer.xxl,
  prefixH: theme.spacer.xl,
  suffixH: theme.spacer.xl,
  textStyle: theme.typography.button2
});
