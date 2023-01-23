import { utils } from '@lightning/ui-core';

export const base = theme => {
  const { w, h } = utils.getDimensions(theme, {
    ratioX: 16,
    ratioY: 9,
    upCount: 3
  });
  return {
    expandedW: utils.getWidthByColumnSpan(theme, 8),
    expandedH: h,
    imageSize: { w, h },
    metadataStyle: { descriptionTextStyle: { maxLines: 3 } }
  };
};
