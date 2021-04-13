import lng from '@lightningjs/core';
import Icon from '../../elements/Icon';
import withStyles from '../../mixins/withStyles';
import { getFocusScale } from '../../Styles';
import OverlayDataItem from '../OverlayDataItem';

export const styles = theme => ({
  title: theme.typography.headline1,
  subtitle: theme.typography.caption,
  logo: {
    h: 100,
    w: 100
  },
  margin: {
    x: theme.spacing(2),
    y: theme.spacing(2.5)
  },
  metadata: {
    ...theme.typography.headline2,
    textAlign: 'center'
  }
});
export default class Matchup extends withStyles(lng.Component, styles) {
  static _template() {
    return {
      h: 120,
      DataItem: {
        type: OverlayDataItem,
        h: 120,
        w: 410,
        margin: this.styles.margin,
        content: {
          w: w => w - this.styles.margin.x * 2,
          Wrapper: {
            w: w => w,
            flex: {
              direction: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-around'
            },
            LeftIcon: {
              flexItem: { marginTop: -10 },
              type: Icon,
              ...this.styles.logo
            },
            Text: {
              flexItem: {
                marginLeft: this.styles.margin.x,
                marginRight: this.styles.margin.x
              },
              flex: {
                direction: 'column',
                alignContent: 'center',
                alignItems: 'center'
              },
              Subtitle: {
                text: {
                  ...this.styles.subtitle,
                  wordWrapWidth: 160,
                  textOverflow: 'ellipsis',
                  maxLines: 1,
                  maxLinesSuffix: '...'
                }
              },
              Title: {
                flexItem: { marginTop: -10 },
                text: {
                  ...this.styles.title,
                  wordWrapWidth: 170,
                  textOverflow: 'ellipsis',
                  maxLines: 1,
                  maxLinesSuffix: '...'
                }
              }
            },
            RightIcon: {
              flexItem: { marginTop: -10 },
              type: Icon,
              ...this.styles.logo
            }
          }
        }
      },
      Metadata: {
        type: lng.Component,
        y: 120,
        w: 410,
        alpha: 0,
        text: this.styles.metadata
      }
    };
  }

  _focus() {
    const h = this._DataItem.h * getFocusScale(this._DataItem.w);
    this._Metadata.smooth = { alpha: 1, y: h };
    this.h = h + this._Metadata.h;
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    this._Metadata.smooth = { alpha: 0, y: this._DataItem.h };
    this.h = this._DataItem.h;
    this.fireAncestors('$itemChanged');
  }

  _getFocused() {
    return this._DataItem;
  }

  get announce() {
    const metadata = this._metadata ? [this._metadata] : [];
    const subtitle = this._subtitle ? [this._subtitle] : [];
    const title = this._title ? [this._title] : [];
    return [...metadata, ...title, ...subtitle].join(',');
  }

  set removeBackground(removeBackground) {
    const alpha = removeBackground ? 0 : 1;
    if (this._DataItem._Background.alpha !== alpha) {
      this._DataItem._Background.alpha = alpha;
    }
  }

  set backgroundColors(backgroundColors) {
    if (backgroundColors !== this._DataItem.backgroundColors) {
      this._DataItem.backgroundColors = backgroundColors;
    }
  }

  set icons(icons) {
    if (this._icons !== icons) {
      const { left, right } = icons;
      this._icons = icons;
      this._LeftIcon.icon = left;
      this._RightIcon.icon = right;
    }
  }

  set subtitle(subtitle) {
    if (this._subtitle !== subtitle) {
      this._subtitle = subtitle;
      this._Subtitle.text = subtitle;
    }
  }

  set title(title) {
    if (this._title !== title) {
      this._title = title;
      this._Title.text = title;
    }
  }

  set items(items) {
    if (items !== this._items) {
      const { left, right } = items;
      this._items = items;
      this.backgroundColors = {
        colorLeft: left && left.color,
        colorRight: right && right.color
      };
      this.icons = { left: left && left.src, right: right && right.src };
    }
  }

  set metadata(metadata) {
    if (this._metadata !== metadata) {
      this._metadata = metadata;
      this._Metadata.text.text = metadata;
    }
  }

  get _DataItem() {
    return this.tag('DataItem');
  }

  get _Metadata() {
    return this.tag('Metadata');
  }

  get _Content() {
    return this.tag('DataItem')._Content;
  }

  get _LeftIcon() {
    return this._Content.tag('Wrapper.LeftIcon');
  }

  get _RightIcon() {
    return this._Content.tag('Wrapper.RightIcon');
  }

  get _Subtitle() {
    return this._Content.tag('Wrapper.Text.Subtitle');
  }

  get _Title() {
    return this._Content.tag('Wrapper.Text.Title');
  }
}
