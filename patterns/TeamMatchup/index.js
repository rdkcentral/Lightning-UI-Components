import lng from '@lightningjs/core';
import Icon from '../../elements/Icon';
import withStyles from '../../mixins/withStyles';
import OverlayDataItem from '../OverlayDataItem';
import { withTags } from '../../mixins';

export const styles = theme => ({
  title: {
    h: 48,
    text: {
      ...theme.typography.headline1,
      lineHeight: 48
    }
  },
  subtitle: {
    h: 24,
    text: {
      ...theme.typography.caption,
      lineHeight: 24
    }
  },
  logo: {
    h: 100,
    w: 100
  },
  margin: {
    x: theme.spacing(2),
    y: theme.spacing(2.5)
  },
  metadata: {
    h: 48,
    text: {
      ...theme.typography.headline2,
      textAlign: 'center'
    }
  },
  getFocusScale: theme.getFocusScale
});
export class Matchup extends withTags(lng.Component) {
  static _template() {
    return {
      h: 140,
      alpha: 0,
      DataItem: {
        type: OverlayDataItem,
        h: 140,
        w: 410,
        margin: this.styles.margin,
        content: {
          w: 410 - this.styles.margin.x * 2,
          Wrapper: {
            w: 410 - this.styles.margin.x * 2,
            flex: {
              direction: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            LeftIcon: {
              type: Icon,
              ...this.styles.logo
            },
            Text: {
              h: this.styles.logo.h,
              y:
                (this.styles.logo.h -
                  this.styles.title.h -
                  this.styles.subtitle.h) /
                2,
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
                h: this.styles.subtitle.h,
                text: {
                  ...this.styles.subtitle.text,
                  wordWrapWidth: 160,
                  textOverflow: 'ellipsis',
                  maxLines: 1,
                  maxLinesSuffix: '...'
                }
              },
              Title: {
                h: this.styles.title.h,
                text: {
                  ...this.styles.title.text,
                  wordWrapWidth: 170,
                  textOverflow: 'ellipsis',
                  maxLines: 1,
                  maxLinesSuffix: '...'
                }
              }
            },
            RightIcon: {
              type: Icon,
              ...this.styles.logo
            }
          }
        }
      },
      Metadata: {
        h: this.styles.metadata.h,
        type: lng.Component,
        y: 120,
        w: 410,
        alpha: 0,
        text: this.styles.metadata.text
      }
    };
  }

  static get tags() {
    return [
      'DataItem',
      'Metadata',
      { name: 'Content', path: 'DataItem.Content' },
      { name: 'LeftIcon', path: 'DataItem.Content.Wrapper.LeftIcon' },
      { name: 'RightIcon', path: 'DataItem.Content.Wrapper.RightIcon' },
      { name: 'Subtitle', path: 'DataItem.Content.Wrapper.Text.Subtitle' },
      { name: 'Title', path: 'DataItem.Content.Wrapper.Text.Title' }
    ];
  }

  _focus() {
    const h =
      this._DataItem.h *
      this.styles.getFocusScale(this._DataItem.w, this._DataItem.h);
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
    if (this._announce) {
      return this._announce;
    }

    let announceScore;
    const { left, right } = this._items;
    if (left.score === right.score) {
      announceScore = `${left.score} to ${right.score}`;
    } else if (left.score > right.score) {
      announceScore = `${left.score} to ${right.score}, ${left.name}`;
    } else {
      announceScore = `${right.score} to ${left.score}, ${right.name}`;
    }

    const metadata = this._metadata ? [this._metadata] : [];
    const subtitle = this._subtitle ? [this._subtitle] : [];
    return [...metadata, ...subtitle, announceScore].join(',');
  }

  set announce(announce) {
    this._announce = announce;
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
      this.smooth = { alpha: [1, { duration: 0.15 }] };
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
}

export default withStyles(Matchup, styles);
