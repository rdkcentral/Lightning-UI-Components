import Tile from '../../components/Tile';
import withStyles from '../withStyles';

export const styles = theme => ({
  paddingTop: theme.spacing(1),
  paddingSide: theme.spacing(2)
});

export default (base = Tile) => {
  if (!((base === Tile) || (base.prototype instanceof Tile))) {
    throw new TypeError('Expected base type to be a type of Tile component');
  } else {
    return class withMetadata extends withStyles(base, styles) {
      _construct() {
        super._construct();
        this._paddingTop = this.styles.paddingTop;
        this._paddingSide = this.styles.paddingSide;
      }

      _update() {
        super._update();
        this._updateDimensions();
        if (this.Metadata) {
          this._updateMetadataAlpha();
          this._updateMetadataW();
          this._updateMetadataX();
          this._updateMetadataY();
        }
      }

      _updateDimensions() {
        this._unfocusedTileHeight = this.h;
        this._focusedTileHeight = this.h * this._getFocusScale(this.w);
        this._unfocusedTileWidth = this.w;
        this._focusedTileWidth = this.w * this._getFocusScale(this.w);
        this._tileScaleOffset =
          (this._focusedTileWidth - this._unfocusedTileWidth) / 2;
      }

      _updateMetadataAlpha() {
        const unfocusAlpha = this.persistentMetadata ? 1 : 0;
        const alpha = this.hasFocus() ? 1 : unfocusAlpha;
        if (this._smooth) {
          this.Metadata.smooth = { alpha };
        } else {
          this.Metadata.alpha = alpha;
        }
      }

      _updateMetadataW() {
        this.Metadata.focusScale = 1;
        const currentTileWidth = this.hasFocus()
          ? this._focusedTileWidth
          : this._unfocusedTileWidth;
        this.Metadata.originalW = currentTileWidth - this._paddingSide * 2;
      }

      _updateMetadataX() {
        const metadataX = this.hasFocus()
          ? this._paddingSide - this._tileScaleOffset
          : this._paddingSide;
        if (this._smooth) {
          this.Metadata.smooth = { x: metadataX };
        } else {
          this.Metadata.x = metadataX;
        }
      }

      _updateMetadataY() {
        const currentTileHeight = this.hasFocus()
          ? this._focusedTileHeight
          : this._unfocusedTileHeight;
        const metadataY = this._paddingTop + currentTileHeight;

        if (this._smooth) {
          this.Metadata.smooth = { y: metadataY };
        } else {
          this.Metadata.y = metadataY;
        }
      }

      _getFocused() {
        return this.Metadata || super._getFocused();
      }

      set paddingTop(padding) {
        if (padding !== this._paddingTop) {
          this._paddingTop = padding;
          this._update();
        }
      }

      get paddingTop() {
        return this._paddingTop;
      }

      set paddingSide(padding) {
        if (padding !== this._paddingSide) {
          this._paddingSide = padding;
          this._update();
        }
      }

      get paddingSide() {
        return this._paddingSide;
      }

      set Metadata(metadata) {
        this.patch({ Metadata: metadata });
        this._update();
      }

      get Metadata() {
        return this.tag('Metadata');
      }
    }
  }
};
