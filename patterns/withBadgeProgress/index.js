import ProgressBar from '../../elements/ProgressBar';
import Badge from '../../elements/Badge';
import { withStyles, withUpdates } from '../../mixins';

export const styles = theme => ({
  paddingTop: theme.spacing(1),
  paddingSide: theme.spacing(2),
  badgePadding: theme.spacing(3),
  progressBarPadding: theme.spacing(3)
});

export default Base =>
  class withBadgeProgress extends withUpdates(withStyles(Base, styles)) {
    static get name() {
      return `${Base.name}WithBadgeProgress`;
    }

    static get properties() {
      return [
        'badge',
        'badgeLocation',
        'badgePadding',
        'progress',
        'progressBarPadding',
        ...super.properties
      ];
    }

    static get tags() {
      return ['Badge', 'ProgressBar', ...super.tags];
    }

    _construct() {
      super._construct();
      this._badgePadding = this.styles.badgePadding;
      this._paddingTop = this.styles.paddingTop;
      this._paddingSide = this.styles.paddingSide;
      this._progressBarPadding = this.styles.progressBarPadding;
      this._badgeLocation = this._badgeLocation || 'upperLeft';
    }

    _init() {
      super._init();
      this._update();
    }

    _update() {
      super._update();
      this._updateComponentDimensions();
      this._updateBadge();
      this._updateProgressBar();
    }

    $loadedBadge() {
      this._updateBadge();
    }

    _updateComponentDimensions() {
      const focusScale = this._getFocusScale
        ? this._getFocusScale(this.w, this.h)
        : 1;
      this._unfocusedTileHeight = this.h;
      this._focusedTileHeight = this.h * focusScale;
      this._unfocusedTileWidth = this.w;
      this._focusedTileWidth = this.w * focusScale;
    }

    _updateProgressBar() {
      if (!this._ProgressBar && this.progress) {
        this.patch({
          ProgressBar: {
            type: ProgressBar,
            zIndex: 6
          }
        });
      }
      if (this._ProgressBar) {
        this._ProgressBar.progress = this._progress;

        const alpha = this._progress ? 1 : 0;
        let w = this._unfocusedTileWidth - this.progressBarPadding * 2;
        let x = this.progressBarPadding;
        let y =
          this._unfocusedTileHeight -
          this._ProgressBar.h -
          this.progressBarPadding;

        if (this.hasFocus()) {
          w = this._focusedTileWidth - this.progressBarPadding * 2;
          x -= (this._focusedTileWidth - this._unfocusedTileWidth) / 2;
          y += (this._focusedTileHeight - this._unfocusedTileHeight) / 2;
        }

        const patch = { alpha, w, x, y };
        if (this._smooth) {
          this._ProgressBar.smooth = patch;
        } else {
          this._ProgressBar.patch(patch);
        }
      }
    }

    _updateBadge() {
      if (!this._Badge && this.badge) {
        this.patch({
          Badge: {
            type: Badge,
            zIndex: 6,
            title: this._badge
          }
        });
      }

      if (this._Badge) {
        this._Badge.title = this.badge;

        const { x, y } = this._getBadgeLocation();

        if (this._smooth) {
          this._Badge.smooth = { x, y };
        } else {
          this._Badge.patch({ x, y });
        }
      }
    }

    _getBadgeLocation() {
      // calculate component offsets
      const badgeWidthOffset = this._Badge.w + this.badgePadding;
      const badgeHeightOffset = this._Badge.h + this.badgePadding;
      const progressBarOffset = this._ProgressBar
        ? this._ProgressBar.h + this._progressBarPadding
        : 0;

      // calculate focus state offsets
      const xFocusOffset =
        this._getFocusScale && this.hasFocus()
          ? (this._focusedTileWidth - this._unfocusedTileWidth) / 2
          : 0;
      const yFocusOffset =
        this._getFocusScale && this.hasFocus()
          ? (this._focusedTileHeight - this._unfocusedTileHeight) / 2
          : 0;

      // calculate positions
      const xLeft = this.badgePadding - xFocusOffset;
      const xRight = this._unfocusedTileWidth - badgeWidthOffset + xFocusOffset;
      const yTop = this.badgePadding - yFocusOffset;
      const yBottom =
        this._unfocusedTileHeight -
        (badgeHeightOffset + progressBarOffset) +
        yFocusOffset;

      // define locations
      const locations = {
        upperLeft: {
          x: xLeft,
          y: yTop
        },
        upperRight: {
          x: xRight,
          y: yTop
        },
        lowerLeft: {
          x: xLeft,
          y: yBottom
        },
        lowerRight: {
          x: xRight,
          y: yBottom
        }
      };

      return locations[this._badgeLocation];
    }

    _setBadgeLocation(badgeLocation) {
      const badgeLocations = [
        'upperLeft',
        'upperRight',
        'lowerLeft',
        'lowerRight'
      ];
      if (this._badgeLocation !== badgeLocation) {
        if (badgeLocations.includes(badgeLocation)) {
          return badgeLocation;
        } else {
          console.warn(
            `invalid property value: badgeLocation must match one of:${badgeLocations.map(
              location => ` ${location}`
            )}`
          );
          return badgeLocations[0];
        }
      }
    }
  };
