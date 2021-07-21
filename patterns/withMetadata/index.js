import Tile from '../../elements/Tile';
import withStyles from '../../mixins/withStyles';
import withBadgeProgress from '../withBadgeProgress';

export const styles = theme => ({
  paddingTop: theme.spacing(1),
  paddingSide: theme.spacing(2)
});

export default (base = Tile) =>
  class withMetadata extends withStyles(withBadgeProgress(base), styles) {
    static get properties() {
      return [
        'metadataLocation',
        'paddingSide',
        'paddingTop',
        ...super.properties
      ];
    }

    _construct() {
      this._paddingTop = this.styles.paddingTop;
      this._paddingSide = this.styles.paddingSide;
      this._progressBarPadding = this.styles.progressBarPadding; // available via withBadgeProgress
      this._metadataLocation = this._metadataLocation || 'bottom';
      super._construct();
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
        this._updateGradient();
      }
    }

    _updateDimensions() {
      this._unfocusedTileHeight = this.h;
      this._focusedTileHeight = this.h * this._getFocusScale(this.w, this.h);
      this._tileScaleOffsetHeight =
        (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
      this._unfocusedTileWidth = this.w;
      this._focusedTileWidth = this.w * this._getFocusScale(this.w, this.h);
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

      const focusOffset = this.hasFocus() ? this._tileScaleOffsetHeight : 0;

      const progressBarOffset = this._ProgressBar
        ? this._ProgressBar.h + this._progressBarPadding
        : 0;

      const metadataHeight = this.Metadata.h;

      const locations = {
        bottom: this._paddingTop + currentTileHeight - focusOffset,
        inset:
          currentTileHeight -
          (metadataHeight +
            progressBarOffset +
            this._paddingTop * 2 +
            focusOffset)
      };

      const metadataY = locations[this._metadataLocation];

      if (this._smooth) {
        this.Metadata.smooth = { y: metadataY };
      } else {
        this.Metadata.y = metadataY;
      }
    }

    _updateGradient() {
      if (this._metadataLocation === 'inset') {
        this._focusGradient = true;
      }
      super._updateGradient && super._updateGradient();
    }

    _getFocused() {
      return this.Metadata || super._getFocused();
    }

    _setMetadataLocation(metadataLocation) {
      const metadataLocations = ['bottom', 'inset'];
      if (this._metadataLocation !== metadataLocation) {
        if (metadataLocations.includes(metadataLocation)) {
          return metadataLocation;
        } else {
          console.warn(
            `invalid property value: metadataLocation must match one of:${metadataLocations.map(
              Position => ` ${Position}`
            )}`
          );
          return metadataLocations[0];
        }
      }
    }

    set Metadata(Metadata) {
      this.patch({ Metadata });
      this._update();
    }

    get Metadata() {
      return this.tag('Metadata');
    }
  };
