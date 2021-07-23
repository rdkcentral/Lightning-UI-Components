import lng from '@lightningjs/core';
import DataItem from '../DataItem';
import withStyles from '../../mixins/withStyles';
import { getValidColor } from '../../Styles';

export const styles = theme => ({
  image: {
    alpha: 0.2,
    justify: 'right',
    size: 160,
    margin: theme.spacing(2)
  },
  color: {
    alpha: 0.5,
    radius: theme.border.radius.medium
  }
});

export default class OverlayDataItem extends withStyles(DataItem, styles) {
  static _template() {
    const template = super._template();
    return {
      Background: {
        ...template.Background
      },
      OverlayColor: {
        h: h => h,
        w: w => w,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.color.radius
        },
        rect: true,
        alpha: 0,
        zIndex: 3
      },
      OverlayImage: {
        alpha: 0,
        zIndex: 4
      },
      Content: {
        ...template.Content,
        zIndex: 5
      }
    };
  }

  _construct() {
    super._construct();
    this._image = this.styles.image;
    this._color = this.styles.color;
  }

  set overlayColor(overlayColor) {
    if (this._overlayColor !== overlayColor) {
      this._overlayColor = overlayColor;
      this._OverlayColor.patch({
        alpha: this._color.alpha,
        color: getValidColor(overlayColor)
      });
    }
  }

  set backgroundColors(backgroundColors) {
    if (this._backgroundColors !== backgroundColors) {
      const { colorLeft, colorRight } = backgroundColors;
      this._backgroundColors = backgroundColors;
      this._Background.patch({
        color: false,
        colorLeft: getValidColor(colorLeft),
        colorRight: getValidColor(colorRight)
      });
    }
  }

  set overlayImage(overlayImage) {
    if (this._OverlayImage.src !== overlayImage) {
      const { size, justify, margin, alpha } = this._image;

      if (this.h < size + margin) {
        this.h = size + margin;
        this._Background.h = size + margin;
      }
      const x = justify === 'right' ? this.w - size - margin : margin;
      const y = (this.h - size) / 2;

      this._OverlayImage.patch({
        src: overlayImage,
        alpha,
        x,
        y,
        h: size,
        w: size
      });
    }
  }

  get _OverlayColor() {
    return this.tag('OverlayColor');
  }

  get _OverlayImage() {
    return this.tag('OverlayImage');
  }
}
