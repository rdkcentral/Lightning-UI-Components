import lng from '@lightningjs/core';
import Provider from '.';
import { Icon } from '..';
import mdx from './Provider.mdx';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';

export default {
  title: 'Elements / Provider',
  parameters: {
    docs: {
      page: mdx
    }
  },
  argTypes: {
    visibleCount: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      defaultValue: 3,
      description: 'number of visible providers',
      table: {
        defaultValue: { summary: 3 }
      }
    },
    counterText: {
      control: {
        type: 'select',
        options: [null, '...']
      },
      defaultValue: null,
      description: 'text to display in counter (overrides default behavior)',
      table: {
        defaultValue: { summary: null }
      }
    },
    disableRadius: {
      control: 'boolean',
      defaultValue: false,
      description: 'disable applying radius to icons',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Provider: {
          type: Provider,
          visibleCount: args.visibleCount,
          providers: Array.apply(null, { length: 10 }).map(
            () => xfinityProviderLogoSquare
          ),
          counterText: args.counterText,
          disableRadius: args.disableRadius
        }
      };
    }

    _getFocused() {
      return this.tag('Provider');
    }
  };

export const With2x1 = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Provider: {
          type: Provider,
          visibleCount: args.visibleCount,
          providers: [
            xfinityProviderLogoSquare,
            {
              type: Icon,
              w: 96,
              h: 48,
              icon: xfinityLogo
            },
            ...Array.apply(null, { length: 8 }).map(
              () => xfinityProviderLogoSquare
            )
          ],
          counterText: args.counterText,
          disableRadius: args.disableRadius
        }
      };
    }

    _getFocused() {
      return this.tag('Provider');
    }
  };
