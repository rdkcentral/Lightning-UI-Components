import { context, TitleRow } from '@lightningjs/ui-components';
import tileFormatter from './tile.formatter';

window.CONTEXT = context;

export default data => {
  return data.map(item => {
    // Create sub theme
    const subTheme = item.title && item.theme ? `rowSubTheme${item.title}` : undefined;
    if (subTheme) {
      context.setSubTheme(`rowSubTheme${item.title}`, item.theme);
    }
    if (item.title)
      return {
        subTheme,
        type: TitleRow,
        title: item.title,
        items: tileFormatter(item?.data?.results)
      };
  });
};
