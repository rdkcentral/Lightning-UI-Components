import { Tile } from '@lightningjs/ui-components';
import { Router } from '@lightningjs/sdk';

export default items => {
  return items.map(item => {
    return {
      type: Tile,
      onEnter() {
        Router.navigate(`video/${item.id}`);
      },
      originalData: item,
      itemLayout: {
        ratioX: 3,
        ratioY: 4,
        upCount: 7
      },
      artwork: {
        src: `https://image.tmdb.org/t/p/w200${item.poster_path}`
      }
    };
  });
};
