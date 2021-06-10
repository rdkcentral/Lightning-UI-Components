import Tile from '../../elements/Tile';
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
      return ['badge', 'badgeLocation', 'progress', ...super.properties];
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
      this._setDimensions();
    }

    _setDimensions() {
      const focusScale = this._getFocusScale ? this._getFocusScale(this.w) : 1;
      this._unfocusedHeight = this.h;
      this._focusedHeight = this.h * focusScale;
      this._ScaleOffsetHeight =
        (this._focusedHeight - this._unfocusedHeight) / 2;
      this._unfocusedWidth = this.w;
      this._focusedWidth = this.w * focusScale;
      this._ScaleOffsetWidth = (this._focusedWidth - this._unfocusedWidth) / 2;
    }

    _update() {
      super._update();
      this._updateBadge();
      this._updateProgressBar();
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
        let w = this._unfocusedWidth - this._progressBarPadding * 2;
        let x = this._progressBarPadding;
        let y =
          this._unfocusedHeight -
          this._ProgressBar.h -
          this._progressBarPadding;

        if (this.hasFocus()) {
          w = this._focusedWidth - this._progressBarPadding * 2;
          x -= (this._focusedWidth - this._unfocusedWidth) / 2;
          y += (this._focusedHeight - this._unfocusedHeight) / 2;
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
      const badgeWidthOffset = this._Badge.w + this._badgePadding;
      const badgeHeightOffset = this._Badge.h + this._badgePadding;
      const progressBarOffset = this._ProgressBar
        ? this._ProgressBar.h + this._progressBarPadding
        : 0;

      // calculate focus state offsets
      const xFocusOffset =
        this._getFocusScale && this.hasFocus()
          ? (this._focusedWidth - this._unfocusedWidth) / 2
          : 0;
      const yFocusOffset =
        this._getFocusScale && this.hasFocus()
          ? (this._focusedHeight - this._unfocusedHeight) / 2
          : 0;

      // calculate positions
      const xLeft = this._badgePadding - xFocusOffset;
      const xRight = this._unfocusedWidth - badgeWidthOffset + xFocusOffset;
      const yTop = this._badgePadding - yFocusOffset;
      const yBottom =
        this._unfocusedHeight -
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
