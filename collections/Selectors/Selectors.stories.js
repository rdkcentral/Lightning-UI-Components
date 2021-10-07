import lng from '@lightningjs/core';

import mdx from './Selectors.mdx';
import Column from '../../layout/Column';
import CollectionDocItem from '../CollectionDocItem';
import CollectionHeader from '../CollectionHeader';
import CollectionLabel from '../CollectionLabel';
import Slider from '../../elements/Slider';
import Toggle from '../../elements/Toggle';
import Radio from '../../elements/Radio';
import Checkbox from '../../elements/Checkbox';
import { getXfinityTheme } from '../../Styles/createTheme';

export default {
  title: 'Collections/Selectors',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const theme = getXfinityTheme();
const style = {
  verticalSpace: theme.spacing(6),
  space: theme.spacing(12)
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        SelectorCollection: {
          Column: {
            type: Column,
            itemSpacing: style.verticalSpace,
            items: [
              {
                type: CollectionHeader,
                url: 'https://etwiki.sys.comcast.net/display/XDSS/List+items'
              },
              {
                type: CollectionLabel,
                title: 'Slider'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Slider,
                    value: 25
                  },
                  {
                    type: Slider,
                    value: 50
                  },
                  {
                    type: Slider,
                    value: 75
                  },
                  {
                    type: Slider,
                    value: 100
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Toggle'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 32,
                items: [
                  {
                    type: Toggle,
                    w: 64,
                    checked: true
                  },
                  {
                    type: Toggle,
                    w: 64
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Radio'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Radio,
                    checked: true
                  },
                  {
                    type: Radio
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Checkbox'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Checkbox,
                    checked: true
                  },
                  {
                    type: Checkbox
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('SelectorCollection.Column');
    }
  };
