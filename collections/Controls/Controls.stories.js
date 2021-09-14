//import statements to create the controls collection
import lng from '@lightningjs/core';
import mdx from './Controls.mdx';
import Column from '../../layout/Column';
import CollectionDocItem from '../CollectionDocItem';
import CollectionLabel from '../CollectionLabel';
import { withFocusAlways } from '..';
import icPlay from '../../assets/images/ic_play_white_32.png';
import { ControlMedium, ControlSmall } from '../../elements/Control';
import { withStyles } from '../../mixins';

export default {
  title: 'Collections / Controls',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const styles = theme => {
  return {
    space: theme.spacing(4)
  };
};

export const Basic = () =>
  class Basic extends withStyles(lng.Component, styles) {
    static _template() {
      return {
        Controls: {
          Column: {
            type: Column,
            itemSpacing: this.styles.space,
            items: [
              {
                type: CollectionLabel,
                title: 'Medium'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ControlMedium,
                    backgroundType: 'fill',
                    icon: icPlay
                  },
                  {
                    type: ControlMedium,
                    icon: icPlay
                  },
                  {
                    type: withFocusAlways(ControlMedium),
                    icon: icPlay
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Small'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ControlSmall,
                    icon: icPlay,
                    backgroundType: 'fill'
                  },
                  {
                    type: ControlSmall,
                    icon: icPlay
                  },
                  {
                    type: withFocusAlways(ControlSmall),
                    icon: icPlay,
                    backgroundType: 'fill'
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Controls.Column');
    }
  };
