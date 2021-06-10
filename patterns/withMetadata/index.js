import Tile from '../../elements/Tile';
import ProgressBar from '../../elements/ProgressBar';
import Badge from '../../elements/Badge';
import withStyles from '../../mixins/withStyles';
import withBadgeProgress from '../../patterns/withBadgeProgress';

export const styles = theme => ({
  paddingTop: theme.spacing(1),
  paddingSide: theme.spacing(2)
});

export default (base = Tile) =>
  class withMetadata extends withStyles(withBadgeProgress(base), styles) {
    _construct() {
      super._construct();
      this._paddingTop = this.styles.paddingTop;
      this._paddingSide = this.styles.paddingSide;
    }

    _update() {
      super._update();
      this._updateDimensions();
      if (this.Metadata) {
        if (!this.Metadata.zIndex) {
          this.Metadata.zIndex = 5;
        }
        this._updateMetadataAlpha();
        this._updateMetadataW();
        this._updateMetadataX();
        this._updateMetadataY();
      }
    }

    _updateDimensions() {
      this._unfocusedTileHeight = this.h;
      this._focusedTileHeight = this.h * this._getFocusScale(this.w);
      this._tileScaleOffsetHeight =
        (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
      this._unfocusedTileWidth = this.w;
      this._focusedTileWidth = this.w * this._getFocusScale(this.w);
      this._tileScaleOffsetWidth =
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
        ? this._paddingSide - this._tileScaleOffsetWidth
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
      const offset = this.hasFocus() ? this._tileScaleOffsetHeight : 0;
      const metadataY = this._paddingTop + currentTileHeight - offset;

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

    set Metadata(Metadata) {
      this.patch({ Metadata });
      this._update();
    }

    get Metadata() {
      return this.tag('Metadata');
    }

    get Badge() {
      return this.tag('Badge');
    }

    get ProgressBar() {
      return this.tag('ProgressBar');
    }
  };
