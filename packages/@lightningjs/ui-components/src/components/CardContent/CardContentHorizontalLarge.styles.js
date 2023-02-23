import utils from '../../utils';

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
    metadata: { descriptionTextStyle: { maxLines: 3 } }
  };
};
