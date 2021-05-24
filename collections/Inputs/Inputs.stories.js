import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import mdx from './Inputs.mdx';
import Column from '../../layout/Column';
import Input from '../../patterns/Input';
import icEye from '../../assets/images/ic_eye_white_48.png';

import CollectionDocItem from '../CollectionDocItem';

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
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 1 (focus)',
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
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 2 (focus)',
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
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 3 (focus)',
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
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 4 (focus)',
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
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 5 (focus)',
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
                  type: Input,
                  placeholder: 'Suggested Text',
                  label: 'Input Label 6 (focus)',
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
