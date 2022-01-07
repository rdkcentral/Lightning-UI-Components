import { withExtensions } from '../../mixins';
import lng from '@lightningjs/core';
// import styles from './TileCircle.styles.js';
import Tile from '../Tile';
import withStyles from '../../mixins/withStyles';
import CardArtwork from '../CardArtwork';

export const styles = theme => ({
  spacing: theme.spacing(2)
});

class TileCircle extends Tile {
  static _template() {
    return {
      ...super._template,
      Item: {
        Image: {
          Artwork: {
            type: CardArtwork
          }
        }
      }
    };
  }
  static get tags() {
    return [...super.tags, 'Artwork', 'Item', 'Blur'];
  }
  static get properties() {
    return [...super.properties, 'blurBackgroundColor'];
  }

  _construct() {
    super._construct();
    this._spacing = this.styles.spacing;
  }

  _updateImage() {
    const imageSize = this.h;
    this._Artwork.patch({
      src: this.src,
      w: this.w,
      h: this.h,
      imageSize: imageSize,
      circleImage: true,
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius: this._radius
      },
      blurBackground: true,
      blurBackgroundColor: this.blurBackgroundColor
    });
  }
}

export default withExtensions(withStyles(TileCircle, styles));
