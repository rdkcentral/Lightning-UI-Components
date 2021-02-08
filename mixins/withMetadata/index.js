import Tile from '../../components/Tile';
import ProgressBar from '../../components/ProgressBar';
import Badge from '../../components/Badge';
import withStyles from '../withStyles';

export const styles = theme => ({
  paddingTop: theme.spacing(1),
  paddingSide: theme.spacing(2),
  badgePadding: theme.spacing(3),
  progressBarPadding: theme.spacing(3)
});

export default (base = Tile) =>
  class withMetadata extends withStyles(base, styles) {
    _construct() {
      super._construct();
      this._paddingTop = this.styles.paddingTop;
      this._paddingSide = this.styles.paddingSide;
      this._badgePadding = this.styles.badgePadding;
      this._progressBarPadding = this.styles.progressBarPadding;
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
      this._updateProgressBar();
      this._updateBadge();
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

    _updateProgressBar() {
      if (!this._ProgressBar && this.progress) {
        this.patch({
          ProgressBar: {
            type: ProgressBar,
            zIndex: 5
          }
        });
      }
      if (this._ProgressBar) {
        this._ProgressBar.progress = this.progress;

        const alpha = this.progress ? 1 : 0;
        let w = this._unfocusedTileWidth - (this.progressBarPadding * 2);
        let x = this.progressBarPadding;
        let y = this._unfocusedTileHeight - this._ProgressBar.h - this.progressBarPadding;

        if (this.hasFocus()) {
          w = this._focusedTileWidth - (this.progressBarPadding * 2);
          x -= (this._focusedTileWidth - this._unfocusedTileWidth) / 2;
          y += (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
        }

        if (this._smooth) {
          this._ProgressBar.smooth = { alpha, w, x, y };
        } else {
          this._ProgressBar.patch({ alpha, w, x, y });
        }
      }
    }

    _updateBadge() {
      if (!this._Badge && this.badge) {
        this.patch({ Badge: { type: Badge, zIndex: 6 }});
      }
      if (this._Badge) {
        this._Badge.title = this.badge;

        let x = this.badgePadding;
        let y = this.badgePadding;

        if (this.hasFocus()) {
          x -= (this._focusedTileWidth - this._unfocusedTileWidth) / 2;
          y -= (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
        }

        if (this._smooth) {
          this._Badge.smooth = { x, y };
        } else {
          this._Badge.patch({ x, y });
        }
      }
    }

    _getFocused() {
      return this.Metadata || super._getFocused();
    }

    set badgePadding(padding) {
      if (padding !== this._badgePadding) {
        this._badgePadding = padding;
        this._update();
      }
    }

    get badgePadding() {
      return this._badgePadding;
    }

    set badge(badge) {
      if (badge !== this._badge) {
        this._badge = badge;
        this._update();
      }
    }

    get badge() {
      return this._badge;
    }

    set progressBarPadding(padding) {
      if (padding !== this._progressBarPadding) {
        this._progressBarPadding = padding;
        this._update();
      }
    }

    get progressBarPadding() {
      return this._progressBarPadding;
    }

    set progress(progress) {
      if (this._progress !== progress) {
        this._progress = progress;
        this._update();
      }
    }

    get progress() {
      return this._progress;
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

    get _ProgressBar() {
      return this.tag('ProgressBar');
    }

    get _Badge() {
      return this.tag('Badge');
    }
  };
