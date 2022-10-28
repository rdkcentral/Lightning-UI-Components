import { getWidthByUpCount } from '../../utils';

export const base = theme => ({
  w: getWidthByUpCount(1),
  titleMarginLeft: theme.layout.gutterX.xs,
  titleTextStyle: {
    ...theme.typography.headline1,
    textColor: theme.color.fillNeutral
  },
  rowMarginTop: theme.layout.gutterY.xs
});
