import lng from '@lightningjs/core';
import Icon from '../../elements/Icon';
import withStyles from '../../mixins/withStyles';
import OverlayDataItem from '../OverlayDataItem';
import styles from './TeamMatchup.styles';
import { Base } from '../../elements';

export default class Matchup extends withStyles(Base, styles) {
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
              flexItem: {
                marginLeft: this.styles.margin.x,
                marginRight: this.styles.margin.x
              },
              flex: {
                direction: 'column',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              },
              Subtitle: {
                text: {
                  ...this.styles.subtitle.text,
                  wordWrapWidth: 160,
                  textOverflow: 'ellipsis',
                  maxLines: 1,
                  maxLinesSuffix: '...'
                }
              },
              Title: {
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

  static get properties() {
    return [
      'backgroundColors',
      'icons',
      'items',
      'metadata',
      'removeBackground',
      'subtitle',
      'title'
    ];
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

  _construct() {
    super._construct();
    this._getFocusScale = this.styles.getFocusScale;
    this._fontSizes = {
      title: {
        fontSize: this.styles.title.text.fontSize,
        lineHeight: this.styles.title.text.lineHeight
      },
      subtitle: {
        fontSize: this.styles.subtitle.text.fontSize,
        lineHeight: this.styles.subtitle.text.lineHeight
      }
    };
  }

  _update() {
    this._updateRemoveBackground();
    this._updateBackgroundColors();
    this._updateSubtitle();
    this._updateTitle();

    this._Metadata.text.text = this.metadata;
  }

  _focus() {
    const h =
      this._DataItem.h *
      this._getFocusScale(this._DataItem.w, this._DataItem.h);
    this._Metadata.smooth = { alpha: 1, y: h };
    this.h = h + this._Metadata.h;
    this.fireAncestors('$itemChanged');
    super._focus();
  }

  _unfocus() {
    this._Metadata.smooth = { alpha: 0, y: this._DataItem.h };
    this.h = this._DataItem.h;
    this.fireAncestors('$itemChanged');
    super._unfocus();
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
    super.announce = announce;
  }

  _updateRemoveBackground() {
    const alpha = this._removeBackground ? 0 : 1;
    if (this._DataItem._Background.alpha !== alpha) {
      this._DataItem._Background.alpha = alpha;
    }
  }

  _updateBackgroundColors() {
    if (this._backgroundColors !== this._DataItem.backgroundColors) {
      this._DataItem.backgroundColors = this._backgroundColors;
    }
  }

  _updateSubtitle() {
    this._Subtitle.patch({
      visible: !!this.subtitle,
      /**
       * This component originally sized the title/subtitle elements by setting a 'h' value on the Title/Subtitle
       * equal to the lineHeight in the styles.  This had the side-effect of clipping off the descenders on 'y' and 'g'
       * To preserve the text placement behavior of the original implementation, adjust the offset to accommodate for
       * the difference in height of the text.
       * Lightning computes the height of a text element as 1.5 * fontSize + (lineHeight - fontSize)
       * The difference ((1.5 * fontSize + (lineHeight - fontSize)) - lineHeight) can be simplified to fontSize / 2.
       * Computing this instead of using a magic number (which is 14, btw)
       */
      y: this.title
        ? 0.25 *
          (this._fontSizes.title.fontSize + this._fontSizes.subtitle.fontSize)
        : 0,
      text: {
        text: this.subtitle
      }
    });
  }

  _updateTitle() {
    this._Title.patch({
      visible: !!this.title,
      // Adjust the positioning of the title to accommodate where it would have been placed with the old sizing
      // (top margin from centering - the difference in height of the subtitle element) (this ends up being 4)
      y: this.subtitle
        ? 0.25 *
            (this._fontSizes.title.fontSize +
              this._fontSizes.subtitle.fontSize) -
          0.5 * this._fontSizes.subtitle.fontSize
        : 0,
      text: {
        text: this.title
      }
    });
  }

  _setIcons(icons) {
    if (this._icons !== icons) {
      const { left, right } = icons;
      this._icons = icons;
      this._LeftIcon.icon = left;
      this._RightIcon.icon = right;
      this.smooth = { alpha: [1, { duration: 0.15 }] };
    }
    return icons;
  }

  _setItems(items) {
    if (items !== this._items) {
      const { left, right } = items;
      this._backgroundColors = {
        colorLeft: left && left.color,
        colorRight: right && right.color
      };
      this.icons = { left: left && left.src, right: right && right.src };
    }
    return items;
  }
}
