import lng from '@lightningjs/core';
import Base from '../Base';
import withBadgeProgress from '../../patterns/withBadgeProgress';

class CardArtwork extends Base {
  static get properties() {
    return ['src'];
  }
  static get tags() {
    return ['Image'];
  }
  static _template() {
    return {
      w: w => w,
      h: h => h,
      Image: {}
    };
  }

  _construct() {
    super._construct();
  }

  _init() {
    this._update();
    super._init();
  }

  _update() {
    this._updateImage();
    super._update();
  }

  _updateImage() {
    this._Image.patch({
      w: this.w,
      h: this.h,
      texture: {
        type: lng.textures.ImageTexture,
        src: this._src,
        resizeMode: { type: 'cover', w: this.w, h: this.h }
      }
    });
  }
}

export default withBadgeProgress(CardArtwork);
