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
        this._updateMetadataH();
        this._updateMetadataX();
        this._updateMetadataY();
        this._updateShowGradient();
      }
    }

    _updateDimensions() {
      super._updateDimensions();
      this._tileScaleOffsetHeight =
        (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
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

    _updateMetadataH() {
      if (this.metadataLocation === 'inset') {
        if (this._smooth) {
          this.Metadata.smooth = { h: this.h - this.paddingTop };
        } else {
          this.Metadata.h = this.h - this.paddingTop;
        }
      }
    }

    _updateMetadataW() {
      this.Metadata.focusScale =
        this.metadataLocation !== 'inset' ? 1 : this.Metadata.focusScale;

      const currentTileWidth =
        this.hasFocus() || !this.persistentMetadata // prevent logo from sliding horizontally
          ? this._focusedTileWidth
          : this._unfocusedTileWidth;

      this.Metadata.originalW = currentTileWidth - this.paddingSide * 2;
    }

    _updateMetadataX() {
      const focusX = this.paddingSide - this._tileScaleOffsetWidth;
      const unfocusX = this.paddingSide;

      const nextX =
        (this._metadataLocation === 'inset' && !this.persistentMetadata) ||
        this.hasFocus()
          ? focusX
          : unfocusX;

      if (this._smooth) {
        this.Metadata.smooth = { x: nextX };
      } else {
        this.Metadata.x = nextX;
      }
    }

    _updateMetadataY() {
      const focusY = this._calcMetadataLocation();
      const unfocusY = this._metadataLocation === 'inset' ? focusY : focusY;
      this.Metadata.animate =
        !this.persistentMetadata && this.metadataLocation === 'inset';

      const nextY = this.hasFocus() ? focusY : unfocusY;
      if (this._smooth) {
        this.Metadata.smooth = { y: nextY };
      } else {
        this.Metadata.y = nextY;
      }
    }

    _calcMetadataLocation() {
      const currentTileHeight = this.hasFocus()
        ? this._focusedTileHeight
        : this._unfocusedTileHeight;

      const focusOffset = this.hasFocus() ? this._tileScaleOffsetHeight : 0;

      const progressBarOffset = this._ProgressBar
        ? this._ProgressBar.h + this._progressBarPadding
        : 0;

      const metadataHeight = this.Metadata.h;

      const locations = {
        bottom: this.paddingTop + currentTileHeight - focusOffset,
        inset:
          currentTileHeight -
          (metadataHeight +
            progressBarOffset +
            this.paddingTop * 2 +
            focusOffset)
      };

      const metadataY = locations[this._metadataLocation];

      return metadataY;
    }

    _updateShowGradient() {
      if (this.metadataLocation === 'inset') {
        this.focusGradient = true;
      }
      if (this.persistentMetadata && this.metadataLocation === 'inset') {
        this.persistGradient = true;
      }
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
