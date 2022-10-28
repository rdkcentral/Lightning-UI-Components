import { getWidthByUpCount } from '../../utils';

export const base = () => ({
  descriptionTextStyle: { maxLines: 2 },
  w: getWidthByUpCount(3)
});
