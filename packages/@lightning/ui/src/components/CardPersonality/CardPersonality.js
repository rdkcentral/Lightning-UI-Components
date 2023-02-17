import * as styles from './CardPersonality.styles';
import { Tile, CardTitle, withExtensions } from '@lightning/ui-core';

class CardPersonality extends CardTitle {
  static _template() {
    return {
      ...super._template(),
      Details: undefined,
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
    const tags = [...super.tags, 'Tile'];
    //Remove the 'Details' tag inherited from CardTitle
    const detailsIndex = tags.indexOf('Details');
    if (detailsIndex > -1) {
      tags.splice(detailsIndex, 1);
    }
    return tags;
  }

  static get properties() {
    const properties = [...super.properties, 'src'];
    //Remove the 'details' property inherited from CardTitle
    const detailsIndex = properties.indexOf('details');
    if (detailsIndex > -1) {
      properties.splice(detailsIndex, 1);
    }
    return properties;
  }

  _update() {
    super._update();
    this._updateTile();
    this._updateItemLayout();
    this._updateDescription();
    this._updateDescriptionPosition();
    this._updateTitlePosition();
  }

  _updateDetails() {}

  _updateDetailsPosition() {}

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
