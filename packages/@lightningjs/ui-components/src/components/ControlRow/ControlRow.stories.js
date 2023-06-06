/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import lng from '@lightningjs/core';
import Tile from '../Tile';
import ControlSmall from '../Control/ControlSmall';
import lightningIcon from '../../assets/images/ic_lightning_white_32.png';
import playIcon from '../../assets/images/ic_play_white_32.png';
import { default as TitleRowStory } from '../TitleRow/TitleRow.stories';
import ControlRowComponent from '.';
import mdx from './ControlRow.mdx';
import { CATEGORIES } from '../../docs/constants';
import { createModeControl } from '../../docs/utils';

export default {
  title: `${CATEGORIES[64]}/ControlRow`,
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    ...TitleRowStory.args,
    lazyScroll: true,
    mode: 'focused'
  },
  argTypes: {
    ...TitleRowStory.argTypes,
    ...createModeControl({ summaryValue: 'focused' })
  }
};

const createItems = (length, src, props = {}) => {
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
    announceContext: `${index + 1} of ${length}`,
    ...props
  }));
};
const createControls = (length, icon = lightningIcon, props = {}) => {
  return Array.from({ length }).map(() => ({
    type: ControlSmall,
    icon,
    fixed: true,
    h: 64,
    w: 64,
    ...props
  }));
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ControlRow: {
          type: ControlRowComponent,
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
  class LazyLoading extends lng.Component {
    static _template() {
      return {
        ControlRow: {
          type: ControlRowComponent,
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
        this._ControlRow.addContentItems(
          createItems(
            3,
            'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
          )
        );
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
LazyLoading.argTypes = {
  lazyLoadBuffer: {
    control: 'number',
    description:
      'The number of items before the last content item at which a signal, "loadMoreItems", is emitted.',
    remount: true,
    table: { defaultValue: { summary: 0 } }
  }
};
LazyLoading.parameters = {
  storyDetails:
    'The loadMoreItems signal is emitted each time a contentItem is selected at and after the index defined by the lazyLoadBuffer property. This story adds a method that is invoked when that signal is emitted and adds 3 additional contentItems to the ControlRow via ControlRow.addContentItems. That method will append items in response to the signal two times, then will do nothing in response to further invocations from the signal.'
};

const createSignal = signalName => ({
  onEnter: function () {
    this.signal(signalName);
  },
  passSignals: { [signalName]: true }
});

const parksUrl =
  'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg';

export const AddingAndRemoving = () =>
  class AddingAndRemoving extends lng.Component {
    static _template() {
      return {
        ControlRow: {
          type: ControlRowComponent,
          signals: {
            addLeftControl: true,
            removeLeftControl: true,
            addContentItem: true,
            removeContentItem: true,
            addRightControl: true,
            removeRightControl: true
          },
          leftControls: createControls(
            1,
            lightningIcon,
            createSignal('addLeftControl')
          ),
          contentItems: createItems(
            3,
            undefined,
            createSignal('addContentItem')
          ),
          rightControls: createControls(
            1,
            lightningIcon,
            createSignal('addRightControl')
          )
        }
      };
    }

    addLeftControl() {
      this._ControlRow.addLeftControlsAt(
        createControls(1, playIcon, createSignal('removeLeftControl')),
        0
      );
    }

    removeLeftControl() {
      this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);
    }

    addContentItem() {
      this._ControlRow.addContentItemsAt(
        createItems(1, parksUrl, createSignal('removeContentItem')),
        this.contentItemIndex + 1
      );
    }

    removeContentItem() {
      this._ControlRow.removeContentItemAt(this.contentItemIndex);
    }

    addRightControl() {
      this._ControlRow.addRightControls(
        createControls(1, playIcon, createSignal('removeRightControl'))
      );
    }

    removeRightControl() {
      this._ControlRow.removeRightControlAt(this.rightControlIndex);
    }

    get _ControlRow() {
      return this.tag('ControlRow');
    }

    get contentItemIndex() {
      return (
        this._ControlRow.selectedIndex - this._ControlRow.leftControls.length
      );
    }

    get rightControlIndex() {
      return (
        this._ControlRow.selectedIndex -
        this._ControlRow.leftControls.length -
        this._ControlRow.contentItems.length
      );
    }

    _getFocused() {
      return this._ControlRow;
    }
  };

AddingAndRemoving.parameters = {
  storyDetails: `
  Press the Enter key while focused on any controls or items in the ControlRow for the following effects:
      - left controls: prepend a new control with a play icon to the left controls
      - content items: append a tile with a background after the selected index
      - right controls: append a new control with a play icon to the right controls
  Press the Enter key while focused on any of the added controls or content items to remove that control or content item.  
  `
};
