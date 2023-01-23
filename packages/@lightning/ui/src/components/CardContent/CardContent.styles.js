import { utils } from '@lightning/ui-core';

export const base = theme => ({
  paddingVertical: theme.spacer.md * 1.5,
  radius: theme.radius.md,
  expandedW: utils.getWidthByUpCount(theme, 2),
  expandedH: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 })
    .h,
  imageSize: {
    w: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).w,
    h: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h
  },
  metadataStyle: { descriptionTextStyle: { maxLines: 2 } }
});
