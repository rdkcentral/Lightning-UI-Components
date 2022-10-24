import { getWidthByUpCount, getDimensions } from '../../utils';

export const base = theme => ({
  paddingVertical: theme.spacer.md * 1.5,
  radius: theme.radius.md,
  expandedW: getWidthByUpCount(2),
  expandedH: getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).h,
  imageSize: {
    w: getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).w,
    h: getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).h
  },
  metadataStyles: { descriptionTextProperties: { maxLines: 2 } }
});
