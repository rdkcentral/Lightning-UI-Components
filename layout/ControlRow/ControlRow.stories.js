import lng from '@lightningjs/core';
import Tile from '../../elements/Tile';
import ControlSmall from '../../elements/Control/ControlSmall';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import lightningIcon from '../../assets/images/ic_lightning_white_32.png';
import playIcon from '../../assets/images/ic_play_white_32.png';
import { default as TitleRowStory } from '../TitleRow/TitleRow.stories';
import ControlRow from '.';
import mdx from './ControlRow.mdx';

export default {
  title: 'Layout / ControlRow',
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    ...TitleRowStory.args,
    lazyLoadBuffer: 0,
    lazyScroll: true
  },
  argTypes: {
    ...TitleRowStory.argTypes,
    lazyLoadBuffer: {
      control: { type: 'number' },
      defaultValue: 0,
      description:
        'Number of content items prior to last content items where a "loadMoreItems" signal is emitted. Go to the "Actions" pannel to see when signal is fired.'
    }
  },
  lazyScroll: {
    defaultValue: true,
    control: { type: 'boolean' },
    description:
      'will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',
    table: { defaultValue: { summary: true } }
  }
};

const createItems = (length, src) => {
  return Array.from({ length }).map((_, index) => ({
    type: Tile,
    artwork: {
      src
    },
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    },
    announce: 'Tile',
    announceContext: `${index + 1} of ${length}`
  }));
};
const createControls = (length, icon = lightningIcon) => {
  return Array.from({ length }).map(() => ({
    type: ControlSmall,
    icon,
    fixed: true,
    h: 64,
    w: 64
  }));
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ControlRow: {
          type: ControlRow,
          leftControls: createControls(3),
          contentItems: createItems(5),
          rightControls: createControls(3)
        }
      };
    }

    _getFocused() {
      return this.tag('ControlRow');
    }
  };

export const LazyLoading = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ControlRow: {
          type: ControlRow,
          leftControls: createControls(3),
          contentItems: createItems(5),
          rightControls: createControls(3),
          lazyLoadBuffer: 1,
          signals: {
            loadMoreItems: '_loadMore'
          }
        }
      };
    }

    _construct() {
      this._counter = 0;
    }

    _loadMore() {
      if (this._counter < 2) {
        this._ControlRow.addContentItems(createItems(3, parks));
        this._counter++;
      }
    }

    _getFocused() {
      return this.tag('ControlRow');
    }

    get _ControlRow() {
      return this.tag('ControlRow');
    }
  };

LazyLoading.args = { lazyLoadBuffer: 1 };

export const AddingAndRemoving = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ControlRow: {
          type: ControlRow,
          leftControls: createControls(1),
          contentItems: createItems(2),
          rightControls: createControls(1)
        }
      };
    }

    _construct() {
      super._construct();
      setTimeout(() => {
        this._ControlRow.addLeftControlsAt(createControls(1, playIcon), 0);
      }, 1500);
      setTimeout(() => {
        this._ControlRow.addContentItemsAt(createItems(2, parks), 1);
      }, 3000);
      setTimeout(() => {
        this._ControlRow.addRightControls(createControls(3, playIcon));
      }, 4500);
      setTimeout(() => {
        this._ControlRow.removeRightControlAt(0);
      }, 6000);
    }

    _getFocused() {
      return this.tag('ControlRow');
    }

    get _ControlRow() {
      return this.tag('ControlRow');
    }
  };
