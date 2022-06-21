import withStyles from '../../mixins/withThemeStyles';
import { withExtensions } from '../../mixins';
import styles from './CardPersonality.styles';
import CardTitle from '../NewCards/CardTitle';
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

  static get tags() {
    return [...super.tags, 'Tile'];
  }

  static get properties() {
    return [...super.properties, 'src'];
  }

  _init() {
    super._init();
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
    const imageSize = this.w - this._componentStyles.paddingHorizontal * 2;
    const tileObj = {
      w: imageSize,
      h: imageSize,
      itemLayout: { circle: true }, // have to put itemLayout after width and height is set
      x: this._componentStyles.paddingHorizontal,
      y: this._componentStyles.paddingVertical,
      artwork: {
        src: this.src
      },
      disabled: this._disabled
    };

    if (!this._Tile) {
      tileObj.type = Tile;
    }
    this.patch({ Tile: tileObj });
  }

  _updateTitlePosition() {
    this._Title.patch({
      x: this._componentStyles.paddingHorizontal,
      y:
        this._Description.y -
        this._componentStyles.descriptionTextProperties.lineHeight,
      mountY: 1
    });
  }

  _updateDescriptionPosition() {
    this._Description.patch({
      mountY: 1,
      x: this._componentStyles.paddingHorizontal,
      y: this.h - (this._componentStyles.paddingVertical * 2) / 3
    });
  }
}
export default withExtensions(withStyles(CardPersonality, styles));
