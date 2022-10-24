import { getWidthByUpCount, getDimensions } from '../../utils';

export const base = theme => ({
  expandedW: getWidthByUpCount(4),
  expandedH:
    getDimensions({ ratioX: 16, ratioY: 9, upCount: 4 }).h +
    theme.spacer.md * 14,
  metadataStyles: { descriptionTextProperties: { maxLines: 1 } }
});
