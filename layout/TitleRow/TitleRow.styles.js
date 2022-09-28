import { getWidthByUpCount } from '../../utils';

export const base = theme => ({
  w: getWidthByUpCount(1),
  titleMarginLeft: theme.layout.gutterX.xs,
  titleTextStyle: theme.typography.headline1,
  titleTextColor: theme.colors.coreNeutral,
  rowMarginTop: theme.layout.gutterY.xs
});
