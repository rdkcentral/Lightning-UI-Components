import CollectionDocItem from '../CollectionDocItem';
import Column from '../../layout/Column';
import lng from '@lightningjs/core';
import icEye from '../../assets/images/ic_eye_white_48.png';
import Input from '../../patterns/Input';
import mdx from './Inputs.mdx';
import { withFocusAlways } from '../';
import withStyles from '../../mixins/withStyles';

export default {
  title: 'Collections / Inputs',
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

const CollectionItemHeight = 160; // These components don't seam to be sending up proper measurements for height. Set default height to force it for now.

export const Basic = args =>
  class Basic extends withStyles(lng.Component, styles) {
    static _template() {
      return {
        Inputs: {
          type: Column,
          itemSpacing: this.styles.space,
          alwaysScroll: true,
          items: [
            {
              type: CollectionDocItem,
              defaultHeight: CollectionItemHeight,
              items: [
                {
                  w: 530,
                  type: Input,
                  title: '',
                  placeholder: 'Suggested Text',
                  label: 'Input Label 1',
                  icon: icEye
                },
                {
                  w: 530,
                  type: withFocusAlways(Input),
                  placeholder: 'Suggested Text',
                  label: 'Input Label 1',
                  icon: icEye
                }
              ]
            },
            {
              type: CollectionDocItem,
              defaultHeight: CollectionItemHeight,
              items: [
                {
                  w: 530,
                  title: '',
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 2',
                  icon: icEye,
                  caption: 'Press ··· Caption 1'
                },
                {
                  w: 530,
                  type: withFocusAlways(Input),
                  placeholder: 'Suggested Text',
                  label: 'Input Label 2',
                  icon: icEye,
                  caption: 'Press ··· Caption 1'
                }
              ]
            },
            {
              type: CollectionDocItem,
              defaultHeight: CollectionItemHeight,
              items: [
                {
                  w: 530,
                  title: '',
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 3',
                  icon: icEye,
                  password: true
                },
                {
                  w: 530,
                  type: withFocusAlways(Input),
                  placeholder: 'Suggested Text',
                  label: 'Input Label 3',
                  icon: icEye,
                  password: true
                }
              ]
            },
            {
              type: CollectionDocItem,
              defaultHeight: CollectionItemHeight,
              items: [
                {
                  w: 530,
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 4',
                  icon: icEye,
                  caption: 'Press ··· Caption 1',
                  password: true
                },
                {
                  w: 530,
                  type: withFocusAlways(Input),
                  placeholder: 'Suggested Text',
                  label: 'Input Label 4',
                  icon: icEye,
                  caption: 'Press ··· Caption 1',
                  password: true
                }
              ]
            },
            {
              type: CollectionDocItem,
              defaultHeight: CollectionItemHeight,
              items: [
                {
                  w: 380,
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 5',
                  icon: icEye
                },
                {
                  w: 380,
                  type: withFocusAlways(Input),
                  placeholder: 'Suggested Text',
                  label: 'Input Label 5',
                  icon: icEye
                }
              ]
            },
            {
              type: CollectionDocItem,
              defaultHeight: CollectionItemHeight,
              items: [
                {
                  w: 380,
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 6',
                  icon: icEye
                },
                {
                  w: 380,
                  type: withFocusAlways(Input),
                  placeholder: 'Suggested Text',
                  label: 'Input Label 6',
                  icon: icEye
                }
              ]
            }
          ]
        }
      };
    }

    _init() {
      this.tag('Inputs')
        .items.filter(item => {
          return (
            'Row' === item.constructor.name &&
            item.items[0] &&
            'Input' === item.items[0].constructor.name
          );
        })
        .forEach((input, index) => {
          return (input.items[0].value = args[`input${index + 1}`]);
        });
    }

    _getFocused() {
      return this.tag('Inputs');
    }
  };
