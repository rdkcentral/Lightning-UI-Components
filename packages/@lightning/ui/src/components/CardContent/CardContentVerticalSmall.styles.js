import { utils } from '@lightning/ui-core';

export const base = theme => ({
  expandedW: utils.getWidthByUpCount(theme, 4),
  expandedH:
    utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h +
    theme.spacer.md * 14,
  metadataStyles: { descriptionTextStyle: { maxLines: 1 } }
});
