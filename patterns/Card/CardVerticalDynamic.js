import lng from '@lightningjs/core';
import { withStyles } from '../../mixins';
import Card, { baseCardProps, artCardProps, logoProps } from '.';
import { getValidColor } from '../../Styles';

const verticalDynamicStyles = theme => ({
  orientation: 'vertical',
  w: 410,
  h: 502,
  gradient: {
    w: 820,
    h: 410,
    radius: 410,
    blur: 100,
    margin: 100
  }
});

export default class CardVerticalDynamic extends withStyles(
  Card,
  verticalDynamicStyles
) {
  _construct() {
    super._construct();
    this.gradientW = this.styles.gradient.w;
    this.gradientH = this.styles.gradient.h;
    this.gradientRadius = this.styles.gradient.radius;
    this.gradientBlur = this.styles.gradient.blur;
    this.gradientMargin = this.styles.gradient.margin;
  }

  static get properties() {
    return [
      ...artCardProps,
      ...baseCardProps,
      ...logoProps,
      'data',
      'cta',
      'gradientColor',
      'gradientW',
      'gradientH',
      'gradientRadius',
      'gradientBlur',
      'gradientMargin'
    ];
  }

  _updateBackground() {
    const gradientColor = getValidColor(this._gradientColor);
    if (gradientColor) {
      this._Background.patch({
        texture: undefined,
        rect: true,
        w: this.w,
        h: this.h,
        color: this.backgroundColor,
        rtt: true,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.radius
        },
        Gradient: {
          mountX: 0.5,
          x: this.w / 2,
          y: this.h - this._gradientMargin - 50,
          color: gradientColor,
          texture: lng.Tools.getShadowRect(
            this._gradientW,
            this._gradientH,
            this._gradientRadius,
            this._gradientBlur,
            this._gradientMargin
          ),
          smooth: { alpha: this.hasFocus() ? 1 : 0 }
        }
      });
    } else {
      super._updateBackground();
    }
  }

  _updateArtwork() {
    const dimensions = this._calculateArtRatio();
    this._Artwork.patch({
      src: this._src,
      w: dimensions.w,
      h: dimensions.h
    });
    this._Artwork.x = this.paddingHorizontal;
    this._Artwork.y = this.paddingVertical;
    this.finalArtHeight = dimensions.h || 0;
    this.finalArtWidth = dimensions.w || 0;
  }

  _calculateArtRatio() {
    if (this.artWidth && this.artHeight) {
      const ratio = this.artWidth / this.artHeight;
      return {
        w: ratio * 100,
        h: 100
      };
    } else {
      return {
        w: 0,
        h: 0
      };
    }
  }

  _calculateMetadataDimensions() {
    return {
      w: this.w - 2 * this.paddingHorizontal,
      h:
        this.h - this.finalArtHeight - (this.src ? 3 : 2) * this.paddingVertical
    };
  }

  _moveMetadata() {
    this._Metadata.x = this.paddingHorizontal;
    this._Metadata.y =
      this.finalArtHeight + (this.src ? 2 : 1) * this.paddingVertical;
  }
}
