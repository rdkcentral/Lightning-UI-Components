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
      this._updateComponentDimensions();
      if (this.Metadata) {
        if (!this.Metadata.zIndex) {
          this.Metadata.zIndex = 5;
        }
        this._updateMetadataW();
        this._updateMetadataX();
        this._updateMetadataY();
        this._updateShowGradient();
        this._updateMetadataAlpha();
      }
    }

    _updateComponentDimensions() {
      super._updateComponentDimensions && super._updateComponentDimensions();
      this._tileScaleOffsetHeight =
        (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
      this._tileScaleOffsetWidth =
        (this._focusedTileWidth - this._unfocusedTileWidth) / 2;
    }

    _updateMetadataAlpha() {
      const unfocusAlpha = this.persistentMetadata ? 1 : 0.001;
      const alpha = this.hasFocus() ? 1 : unfocusAlpha;
      if (this._smooth) {
        this.Metadata.smooth = { alpha };
      } else {
        this.Metadata.alpha = alpha;
      }
    }

    _updateMetadataW() {
      this.Metadata.w = this._unfocusedTileWidth - this.paddingSide * 2;
      this.Metadata.focusScaleConst =
        (this._focusedTileWidth - this.paddingSide * 2) / this.Metadata.w;
    }

    _updateMetadataX() {
      const focusX =
        this.paddingSide - this._tileScaleOffsetWidth + this.Metadata.w / 2;
      const unfocusX = this.paddingSide + this.Metadata.w / 2;
      const nextX =
        (this.metadataLocation === 'inset' && !this.persistentMetadata) ||
        this.hasFocus()
          ? focusX
          : unfocusX;
      this.Metadata.mountX = 0.5;
      if (this._smooth) {
        this.Metadata.smooth = { x: nextX };
      } else {
        this.Metadata.x = nextX;
      }
    }

    _updateMetadataY() {
      this.Metadata.mountY = this.metadataLocation === 'inset' ? 1 : 0;
      const nextY = this._calcMetadataLocation();
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

      const locations = {
        bottom: this.paddingTop + currentTileHeight - focusOffset,
        inset:
          currentTileHeight -
          (progressBarOffset + this.paddingTop * 2 + focusOffset)
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
