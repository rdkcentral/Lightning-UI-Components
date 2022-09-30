import { getWidthByUpCount } from '../../utils';

export const base = () => ({
  descriptionTextProperties: { maxLines: 2 },
  w: getWidthByUpCount(3)
});
