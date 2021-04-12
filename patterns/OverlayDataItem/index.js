import DataItem from '../DataItem';
import withStyles from '../../mixins/withStyles';
import { getValidColor } from '../../Styles';

export const styles = theme => ({
  overlay: {
    alpha: 0.2,
    justify: 'right',
    size: 160,
    margin: theme.spacing(2)
  }
});

export default class OverlayDataItem extends withStyles(DataItem, styles) {
  static _template() {
    const template = super._template();
    return {
      Background: {
        ...template.Background
      },
      OverlayImage: {
        alpha: 0,
        zIndex: 3
      },
      Content: {
        ...template.Content,
        zIndex: 4
      }
    };
  }

  _construct() {
    super._construct();
    this._overlay = this.styles.overlay;
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
      const { size, justify, margin, alpha } = this._overlay;

      if (this.h < size + margin * 2) {
        this.h = size + margin * 2;
        this._Background.h = size + margin * 2;
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

  get _OverlayImage() {
    return this.tag('OverlayImage');
  }
}
