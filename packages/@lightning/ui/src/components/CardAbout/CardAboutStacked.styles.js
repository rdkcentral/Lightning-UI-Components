import { utils } from '@lightning/ui-core';

export const base = theme => ({
  descriptionTextStyle: { maxLines: 2 },
  w: utils.getWidthByUpCount(theme, 3)
});
