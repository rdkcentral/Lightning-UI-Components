import { withExtensions } from '../../mixins';
import * as styles from './CardPersonality.styles';
import CardTitle from './CardTitle';
import Tile from '../../elements/Tile';

class CardPersonality extends CardTitle {
  static _template() {
    return {
      ...super._template(),
      Tile: {
        type: Tile
      }
    };
  }

  static get __componentName() {
    return 'CardPersonality';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return [...super.tags, 'Tile'];
  }

  static get properties() {
    return [...super.properties, 'src'];
  }

  _update() {
    super._update();
    this._updateTile();
    this._updateItemLayout();
    this._updateDescription();
    this._updateDescriptionPosition();
    this._updateTitlePosition();
  }

  _updateTile() {
    const imageSize = this.w - this.style.paddingHorizontal * 2;
    const tileObj = {
      w: imageSize,
      h: imageSize,
      // have to put itemLayout after width and height is set
      itemLayout: { w: imageSize, h: imageSize, circle: true },
      x: this.style.paddingHorizontal,
      y: this.style.paddingVertical,
      artwork: { src: this.src }
    };

    if (!this._Tile) {
      tileObj.type = Tile;
    }
    this.patch({ Tile: tileObj });
  }

  _updateTitlePosition() {
    this._Title.patch({
      x: this.style.paddingHorizontal,
      y: this._Description.y - this.style.descriptionTextStyle.lineHeight,
      mountY: 1
    });
  }

  _updateDescriptionPosition() {
    this._Description.patch({
      mountY: 1,
      x: this.style.paddingHorizontal,
      y: this.h - (this.style.paddingVertical * 2) / 3
    });
  }
}
export default withExtensions(CardPersonality);
