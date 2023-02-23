import utils from '../../utils';

export const base = theme => ({
  expandedW: utils.getWidthByUpCount(theme, 4),
  expandedH:
    utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h +
    theme.spacer.xxxl * 7 +
    theme.spacer.lg +
    theme.spacer.xxs,
  metadata: { descriptionTextStyle: { maxLines: 3 } }
});
