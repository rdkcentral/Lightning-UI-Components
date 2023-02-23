import lng from '@lightningjs/core';
import ProviderComponent from '.';
import { Icon } from '@lightningjs/ui-components';
import mdx from './Provider.mdx';
import xfinityLogo from '../../assets/images/XfinityLogo16x9.png';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Provider`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const sharedArgs = {
  counterText: null,
  disableRadius: false
};
const sharedArgTypes = {
  visibleCount: {
    control: { type: 'range', min: 1, max: 10, step: 1 },
    description: 'number of visible providers',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  counterText: {
    control: 'select',
    options: [null, '...'],
    description: 'Text to display in counter (overrides default behavior)',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  disableRadius: {
    control: 'boolean',
    description: 'Disable applying radius to icons',
    table: {
      defaultValue: { summary: false }
    }
  }
};

export const Provider = () =>
  class Provider extends lng.Component {
    static _template() {
      return {
        Provider: {
          type: ProviderComponent,
          providers: Array(10).fill({
            icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
            announce: 'Tomato'
          }),
          visibleCount: 3
        }
      };
    }
  };

Provider.args = sharedArgs;
Provider.argTypes = sharedArgTypes;

export const WithCustomIconSize = () =>
  class WithCustomIconSize extends lng.Component {
    static _template() {
      return {
        Provider: {
          type: ProviderComponent,
          providers: [
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              announce: 'tomato'
            },
            {
              type: Icon,
              w: 85,
              h: 48,
              // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit
              icon: xfinityLogo,
              announce: 'XFinity Logo Wide'
            },
            ...Array.apply(null, { length: 8 }).map(() => ({
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              announce: 'tomato'
            }))
          ],
          visibleCount: 3
        }
      };
    }
  };

WithCustomIconSize.args = sharedArgs;
WithCustomIconSize.argTypes = sharedArgTypes;
