import lng from '@lightningjs/core';
import DataItem from '../DataItem';
import FocusRing from '../../elements/FocusRing';
import withStyles from '../../mixins/withStyles';
import withUpdates from '../../mixins/withUpdates';
import withTags from '../../mixins/withTags';

export const styles = theme => ({
  title: theme.typography.headline1,
  subtitle: {
    ...theme.typography.button1,
    textColor: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary
  },
  padding: theme.spacing(2),
  wordWrapWidth: 410 - theme.spacing(4),
  focusring: function ({ w, h, radius, color }) {
    return {
      type: FocusRing,
      w,
      h,
      radius: radius + 2,
      color,
      size: theme.spacing(0.5),
      zIndex: 1
    };
  },
  unfocused: {
    focusring: { alpha: 0 },
    shadow: { alpha: 0 }
  },
  focused: {
    focusring: { alpha: 1 },
    shadow: { alpha: 1 }
  }
});

export default class MenuCard extends withTags(
  withUpdates(withStyles(lng.Component, styles))
) {
  static _template() {
    return {
      DataItem: {
        type: DataItem,
        margin: this.styles.padding,
        content: {
          flex: { direction: 'column' },
          w: this.w,
          h: this.h,
          Header: {},
          Body: {
            text: {
              ...this.styles.subtitle,
              wordWrapWidth: this.styles.wordWrapWidth
            }
          }
        },
        Footer: {
          x: this.styles.padding,
          text: {
            ...this.styles.description,
            wordWrapWidth: this.styles.wordWrapWidth
          }
        }
      }
    };
  }

  static get properties() {
    return ['headerText', 'bodyText', 'footerText', 'focusRing', 'radius'];
  }

  static get tags() {
    return ['FocusRing'];
  }

  _init() {
    this.tag('DataItem').w = this.w;
    this.tag('DataItem').h = this.h;
    this._radius = 20;

    this._updateHeader(this.headerImage !== undefined);
    this._updateBody();
    this._updateFooter();

    this._Footer.on('txLoaded', () => {
      this._Footer.y = this.h - this.styles.padding - this._Footer.renderHeight;
    });
  }

  _update() {
    this._updateHeader(this.headerImage !== undefined);
    this._updateBody();
    this._updateFooter();

    this._updateFocusRing();
  }

  _getFocused() {
    return this._DataItem;
  }

  _updateFocusRing() {
    if (this.hasFocus() || this._focusRing) {
      if (!this._focusRing) {
        this._focusRing = this.styles.focusring({
          w: this.w,
          h: this.h,
          radius: this._radius + 2,
          color: this.color
        });
      }
      let FocusRingComponent = this._focusRing;
      const style = this.hasFocus()
        ? this.styles.focused.focusring
        : this.styles.unfocused.focusring;
      if (this._smooth) {
        FocusRingComponent.smooth = style;
      } else {
        FocusRingComponent = { ...FocusRingComponent, ...style };
      }
      this.patch({ FocusRing: FocusRingComponent });

      if (this.hasFocus()) {
        this._FocusRing.startAnimation();
      } else {
        this._FocusRing.stopAnimation();
      }
    }
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  _updateHeader(withImage = true) {
    if (withImage && !this?._headerImageFailed) {
      this._Header.patch({
        rtt: true,
        w: this.w - this.styles.padding * 2,
        h: (9 * (this.w - this.styles.padding * 2)) / 16,
        texture: {
          type: lng.textures.ImageTexture,
          src: this.headerImage
        }
      });
      this._Header.on('txError', () => {
        this._headerImageFailed = true;
        let bodyTemp = this._Body;
        this._Content.patch({
          Header: undefined,
          Body: undefined
        });
        this._Content.patch({
          Header: {
            ...this.styles.title,
            wordWrapWidth: this.styles.wordWrapWidth,
            text: this.headerText
          },
          Body: bodyTemp
        });
      });
    } else {
      this._Header.patch({
        ...this.styles.title,
        wordWrapWidth: this.styles.wordWrapWidth,
        text: this.headerText
      });
    }
  }

  _updateBody() {
    this._Body.patch({
      text: {
        text: this.bodyText
      }
    });
  }

  _updateFooter() {
    this._Footer.patch({
      text: {
        text: this.footerText
      }
    });
  }

  get _Content() {
    return this.tag('DataItem')._Content;
  }

  get _Header() {
    return this._Content.tag('Header');
  }

  get _Body() {
    return this._Content.tag('Body');
  }

  get _Footer() {
    return this.tag('DataItem.Footer');
  }
}
