import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import Artwork from '../Artwork';
import Badge from '../Badge';
import Base from '../../Base';
import Checkbox from '../Checkbox';
import MetadataTile from '../MetadataSmall'; //TODO: Change this to MetadataTile once refactor is complete
import ProgressBar from '../ProgressBar';
import styles from './Tile.styles.js';
import Label from '../Label';

class Tile extends Base {
  static get __componentName() {
    return 'Tile';
  }

  static _template() {
    return {
      Artwork: {
        type: Artwork,
        mount: 0.5
      },
      Item: {
        mount: 0.5
      }
    };
  }

  static get properties() {
    return [
      'artwork',
      'badge',
      'checkbox',
      'metadata',
      'metadataLocation',
      'persistentMetadata',
      'progressBar',
      'label'
    ];
  }

  static get tags() {
    return [
      'Artwork',
      'Item',
      { name: 'Badge', path: 'Item.Badge' },
      { name: 'Checkbox', path: 'Item.Checkbox' },
      { name: 'Metadata', path: 'Item.Metadata' },
      { name: 'ProgressBar', path: 'Item.ProgressBar' },
      { name: 'Label', path: 'Item.Label' }
    ];
  }

  // Disable the ability to set src directly on the base component
  set src(v) {
    return;
  }

  get _gradient() {
    if (this._isCircleLayout) return false;
    return (
      ('inset' === this._metadataLocation &&
        this._hasMetadata &&
        this._shouldShowMetadata) ||
      (this.progressBar && this.progressBar.progress > 0)
    );
  }

  get _hasMetadata() {
    return MetadataTile.properties.some(
      prop => this.metadata && this.metadata[prop]
    );
  }

  get _isCircleLayout() {
    return Boolean(this._itemLayout && this._itemLayout.circle);
  }

  get _focusScale() {
    return this._componentStyles.getFocusScale(this.w, this.h);
  }

  get _unfocusScale() {
    return this._componentStyles.getUnfocusScale(this.w, this.h);
  }

  get _scale() {
    return this._hasFocus ? this._focusScale : this._unfocusScale;
  }

  get _progressBarHeight() {
    return (
      (this._ProgressBar &&
        this._ProgressBar.h + this._componentStyles.paddingY) ||
      0
    );
  }

  get _foregroundDefaultWidth() {
    return parseFloat(this.w / this.h).toFixed(2) ===
      parseFloat(16 / 9).toFixed(2)
      ? this.w * 0.5
      : this.w * 0.75;
  }

  get _shouldShowMetadata() {
    return this._persistentMetadata || this._hasFocus;
  }

  get _topMetadataTransitions() {
    return {
      y: [
        this._shouldShowMetadata ? this._componentStyles.paddingY : 0,
        this._shouldShowMetadata
          ? this._componentStyles.animationEntrance
          : this._componentStyles.animationExit
      ],
      alpha: [
        this._shouldShowMetadata ? 1 : 0,
        this._shouldShowMetadata
          ? this._componentStyles.animationEntrance
          : this._componentStyles.animationExit
      ]
    };
  }

  get _metadataY() {
    return 'inset' === this._metadataLocation
      ? this.h * this._scale -
          this._componentStyles.paddingY -
          this._progressBarHeight
      : this.h * this._scale + this._componentStyles.paddingY;
  }

  get _metadataTransitions() {
    return {
      y: [
        this._persistentMetadata ||
        ('inset' === this._metadataLocation && this._hasFocus)
          ? this._metadataY
          : this.h * this._scale + this._componentStyles.paddingY,
        this._shouldShowMetadata
          ? this._componentStyles.animationEntrance
          : this._componentStyles.animationExit
      ],
      alpha: [
        this._shouldShowMetadata ? 1 : 0,
        this._hasFocus
          ? this._componentStyles.animationEntrance
          : this._componentStyles.animationExit
      ]
    };
  }

  async _update() {
    this._updateItemContainer();
    this._updateArtwork();
    this._updateBadge();
    this._updateLabel();
    this._updateCheckbox();
    await this._updateProgressBar();
    this._updateMetadata();
    if (this._smooth === undefined) this._smooth = true;
  }

  _updateItemContainer() {
    const itemContainerPatch = {
      h: this.h * this._scale,
      w: this.w * this._scale,
      x: this.w / 2,
      y: this.h / 2
    };
    if (this._smooth) {
      // Make sure container animates with same values as badge, label, and metadata
      this._Item.smooth = Object.keys(itemContainerPatch).reduce(
        (acc, prop) => {
          acc[prop] = [
            itemContainerPatch[prop],
            this._hasFocus
              ? this._componentStyles.animationEntrance
              : this._componentStyles.animationExit
          ];
          return acc;
        },
        {}
      );
    } else {
      this._Item.patch(itemContainerPatch);
    }
  }

  _updateArtwork() {
    this._Artwork.patch({
      variant: this.variant,
      ...(this.artwork || {}),
      gradient: this._gradient,
      h: this._h,
      w: this.w,
      x: this.w / 2,
      y: this.h / 2,
      style: {
        radius: this._componentStyles.radius, // This can be overwritten by artworkStyles to support no rounding for performance
        imageScale: this._hasFocus
          ? this._componentStyles.artworkFocusScale
          : 1,
        ...this._componentStyles.artworkStyles
      }
    });

    if (this._smooth) {
      this._Artwork.smooth = {
        scale: [
          this._scale,
          this._hasFocus
            ? this._componentStyles.animationEntrance
            : this._componentStyles.animationExit
        ]
      };
    } else {
      this._Artwork.patch({ scale: this._scale });
    }
  }

  _updateBadge() {
    // Remove Badge if no longer required
    if (!this.badge || typeof this.badge !== 'object' || this._isCircleLayout) {
      if (this._Badge) {
        this._Item.patch({
          Badge: undefined
        });
      }
      return;
    }

    const badgePatch = {
      variant: this.variant,
      ...this.badge,
      x: this._componentStyles.paddingX,
      y: this._componentStyles.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1,
      style: this._componentStyles.badgeStyles
    };
    if (!this._Badge) {
      this._Item.patch({
        Badge: {
          type: Badge,
          ...badgePatch
        }
      });
      return;
    }

    if (this._smooth) {
      this._Badge.smooth = {
        ...badgePatch,
        ...this._topMetadataTransitions
      };
    } else {
      this._Badge.patch(badgePatch);
    }
  }

  _updateLabel() {
    // Remove Label if no longer required
    if (!this.label || typeof this.label !== 'object' || this._isCircleLayout) {
      if (this._Label) {
        this._Item.patch({
          Label: undefined
        });
      }
      return;
    }

    const labelPatch = {
      variant: this.variant,
      ...this.label,
      x: this.w * this._scale - this._componentStyles.paddingX,
      y: this._componentStyles.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1,
      style: this._componentStyles.labelStyles
    };

    if (!this._Label) {
      this._Item.patch({
        Label: {
          type: Label,
          mountX: 1,
          ...labelPatch
        }
      });
      return;
    }

    if (this._smooth) {
      this._Label.smooth = {
        ...labelPatch,
        ...this._topMetadataTransitions
      };
    } else {
      this._Label.patch(labelPatch);
    }
  }

  _updateCheckbox() {
    // Remove Checkbox if no longer required
    if (
      !this.checkbox ||
      typeof this.checkbox !== 'object' ||
      !this.checkbox.checked ||
      this._isCircleLayout
    ) {
      if (this._Checkbox) {
        this._Item.patch({
          Checkbox: undefined
        });
      }
      return;
    }

    const checkboxPatch = {
      ...this.checkbox,
      x: this.w * this._scale - this._componentStyles.paddingX,
      y: this.h * this._scale - this._componentStyles.paddingY,
      style: this._componentStyles.checkboxStyles
    };

    if (!this._Checkbox) {
      this._Item.patch({
        Checkbox: {
          ...checkboxPatch,
          type: Checkbox,
          mount: 1
        }
      });
      return;
    }

    if (this._smooth) {
      this._Checkbox.smooth = checkboxPatch;
    } else {
      this._Checkbox.patch(checkboxPatch);
    }
  }

  _removeProgressBar() {
    this._Item.patch({ ProgressBar: undefined });
    this._updateMetadata();
  }

  async _updateProgressBar() {
    // Remove ProgressBar if no longer required
    if (
      !this.progressBar ||
      typeof this.progressBar !== 'object' ||
      !this.progressBar.progress ||
      this._isCircleLayout
    ) {
      if (this._ProgressBar) {
        if (this._smooth) {
          this._ProgressBar._getTransition('alpha').once('finish', () => {
            this._removeProgressBar();
          });
          this._ProgressBar.smooth = { alpha: 0 };
        } else {
          this._removeProgressBar();
        }
      }
      return;
    }

    if (this.progressBar.progress > 0) {
      const progressPatch = {
        variant: this.variant,
        ...this.progressBar,
        w: this.w * this._scale - this._componentStyles.paddingX * 2,
        x: (this.w * this._scale) / 2,
        y: this.h * this._scale - this._componentStyles.paddingY,
        style: this._componentStyles.progressBarStyles
      };

      if (!this._ProgressBar) {
        this._Item.patch({
          ProgressBar: {
            ...progressPatch,
            type: ProgressBar,
            mountX: 0.5,
            mountY: 1,
            alpha: this._hasMetadata && this._smooth ? 0.001 : 1
          }
        });

        if (this._smooth) {
          this._ProgressBar.smooth = {
            alpha: [
              1,
              {
                delay: this._componentStyles.animationEntrance.duration // Wait for metadata to animate in
              }
            ]
          };
        }
        return;
      }

      // TODO: See if we need to add animation to every property individually or can set parent
      if (this._smooth) {
        this._ProgressBar.smooth = Object.keys(progressPatch).reduce(
          (acc, prop) => {
            acc[prop] = [
              progressPatch[prop],
              this._hasFocus
                ? this._componentStyles.animationEntrance
                : this._componentStyles.animationExit
            ];
            return acc;
          },
          {}
        );
      } else {
        this._ProgressBar.patch(progressPatch);
      }
      await this._ProgressBar.loaded;
    }
  }

  _updateMetadata() {
    if (!this._hasMetadata || this._isCircleLayout) {
      if (this._Metadata) {
        this._Item.patch({
          Metadata: undefined
        });
      }
      return;
    }

    const metadataPatch = {
      variant: this.variant,
      ...this.metadata,
      alpha:
        !this._hasFocus && !this._persistentMetadata && this._hasMetadata
          ? 0.001
          : 1,
      mountX: 0.5,
      mountY: 'inset' === this._metadataLocation ? 1 : 0,
      w: this.w * this._scale - this._componentStyles.paddingX * 2,
      x: (this.w * this._scale) / 2,
      y: this._metadataY,
      style: this._componentStyles.metadataStyles
    };

    if (!this._Metadata) {
      this._Item.patch({
        Metadata: {
          type: MetadataTile,
          ...metadataPatch
        }
      });
      return;
    }

    if (this._smooth) {
      this._Metadata.smooth = {
        ...metadataPatch,
        ...this._metadataTransitions
      };
    } else {
      this._Metadata.patch(metadataPatch);
    }
  }
}

export default withExtensions(withStyles(Tile, styles));
