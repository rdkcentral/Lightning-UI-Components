import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import withUpdates from '../../mixins/withUpdates';
import { RoundRect } from '../../utils';

export const styles = theme => ({
  shadow: theme.materials.glow,
  horizontalPadding: theme.spacing(2),
  radius: theme.border.radius.small,
  textProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.dark.primary,
    textAlign: 'center',
    wordWrapWidth: 400
  },
  bottomMargin: theme.spacing(5)
});

export class Tooltip extends lng.Component {
  static _template() {
    return {
      alpha: 0,
      scale: 0.5,
      mountX: 0.5,
      x: w => w / 2,
      Background: {
        zIndex: 2
      },
      Text: {
        zIndex: 3
      }
    };
  }

  static get properties() {
    return [
      'bottomMargin',
      'horizontalPadding',
      'radius',
      'shadow',
      'textProperties',
      'title'
    ];
  }

  _construct() {
    this.shadow = this.styles.shadow;
    this.textProperties = this.styles.textProperties;
    this.radius = this.styles.radius;
    this.horizontalPadding = this.styles.horizontalPadding;
    this.bottomMargin = this.styles.bottomMargin;
  }

  _init() {
    this._Text.on('txLoaded', () => this._updateContainer());
  }

  _update() {
    this._updateText();
  }

  _updateText() {
    this._Text.text = {
      ...this.textProperties,
      text: this.title
    };
    this._Text.x = this.horizontalPadding;
  }

  _updateContainer() {
    // set background size based on text size
    const backgroundW = this._Text.finalW + this.horizontalPadding * 2;
    const backgroundH =
      this._Text.finalH -
      (this._Text.finalH % this.textProperties.lineHeight) / 2; // calculates even padding

    this.h = backgroundH;
    this.w = backgroundW;

    this._updateBackground();
    this._updateDropShadow();

    this.y = -backgroundH - this.bottomMargin;
  }

  _updateBackground() {
    this._Background.texture = lng.Tools.getRoundRect(
      this.w,
      this.h,
      this.radius
    );
  }

  _updateDropShadow() {
    const DropShadow = this.styles.shadow({
      w: this.w,
      h: this.h,
      borderRadius: this.radius
    });
    this.patch({ DropShadow });
    const alpha = Number(this.hasFocus());
    if (this._smooth) {
      this._DropShadow.smooth = { alpha };
    } else {
      this._DropShadow.alpha = alpha;
    }
  }

  _focus() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);

    this.delayVisible
      ? (this._showTimer = setTimeout(() => {
          this.smooth = { alpha: 1, scale: 1 };
        }, this.delayVisible))
      : (this.smooth = { alpha: 1, scale: 1 });

    this._hideTimer = this.timeVisible
      ? setTimeout(() => {
          this._unfocus();
        }, this.timeVisible + this.delayVisible)
      : null;
  }

  _unfocus() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);

    this.smooth = { alpha: 0, scale: 0.5 };
  }

  get _Text() {
    return this.tag('Text');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
  get _Background() {
    return this.tag('Background');
  }
}

export default withUpdates(withStyles(Tooltip, styles));
