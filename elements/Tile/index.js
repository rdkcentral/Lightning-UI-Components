import { withExtensions } from '../../mixins';
import Artwork from '../Artwork';
import Badge from '../Badge';
import Checkbox from '../Checkbox';
import context from '../../context';
import Label from '../Label';
import MetadataTile from '../Metadata'; //TODO: Change this to MetadataTile once refactor is complete
import ProgressBar from '../ProgressBar';
import styles from './Tile.styles';
import Surface from '../Surface';

class Tile extends Surface {
  static get __componentName() {
    return 'Tile';
  }

  static get __themeStyles() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(), // Make sure surface elments are patched
      Artwork: {
        type: Artwork,
        mount: 0.5
      },
      Content: {
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
      ...super.tags,
      'Artwork',
      'Content',
      { name: 'Badge', path: 'Content.Badge' },
      { name: 'Checkbox', path: 'Content.Checkbox' },
      { name: 'Metadata', path: 'Content.Metadata' },
      { name: 'ProgressBar', path: 'Content.ProgressBar' },
      { name: 'Label', path: 'Content.Label' }
    ];
  }

  /**
   * When metadata is displayed below the Tile we need a way to tell the containing columns that it exists
   * in order for it to layout properly. This approach will not however show up in the DOM inspector
   */

  set h(v) {
    super.h = v;
  }

  get h() {
    return this.metadataLocation !== 'inset'
      ? super.h + ((this._Metadata && this._Metadata.h) || 0)
      : super.h;
  }

  get innerH() {
    return this._h; // Ensure that surface respects the correct height when metadata is displayed below
  }

  // Disable the ability to set src directly on the base component
  set src(v) {
    context.error(
      'src cannot be set on Tile. Please pass value in artwork property'
    );
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

  get _progressBarHeight() {
    return (
      (this._ProgressBar &&
        this._ProgressBar.h + this._componentStyles.paddingY) ||
      0
    );
  }

  get _foregroundDefaultWidth() {
    return parseFloat(this._w / this._h).toFixed(2) ===
      parseFloat(16 / 9).toFixed(2)
      ? this.innerW * 0.5
      : this.innerW * 0.75;
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
      ? this._h * this._scale -
          this._componentStyles.paddingY -
          this._progressBarHeight
      : this._h * this._scale + this._componentStyles.paddingY;
  }

  get _metadataTransitions() {
    return {
      y: [
        this._persistentMetadata ||
        ('inset' === this._metadataLocation && this._hasFocus)
          ? this._metadataY
          : this._h * this._scale + this._componentStyles.paddingY,
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
    super._update();
    this._updateContent();
    this._updateArtwork();
    this._updateBadge();
    this._updateLabel();
    this._updateCheckbox();
    await this._updateProgressBar();
    this._updateMetadata();
    if (this._smooth === undefined) this._smooth = true;
  }

  _updateContent() {
    const itemContainerPatch = {
      h: this._h * this._scale,
      w: this._w * this._scale,
      x: this._w / 2,
      y: this._h / 2
    };
    if (this._smooth) {
      // Make sure container animates with same values as badge, label, and metadata
      this._Content.smooth = Object.keys(itemContainerPatch).reduce(
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
      this._Content.patch(itemContainerPatch);
    }
  }

  _updateArtwork() {
    this._Artwork.patch({
      variant: this.variant,
      ...(this.artwork || {}),
      gradient: this._gradient,
      h: this._h,
      w: this._w,
      x: this._w / 2,
      y: this._h / 2,
      shouldScale: this._hasFocus,
      style: {
        radius: this._componentStyles.radius, // This can be overwritten by artworkStyles to support no rounding for performance
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
        this._Content.patch({
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
      this._Content.patch({
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
        ...this._topMetadataTransitions // Badge and Label should animate in with the same values
      };
    } else {
      this._Badge.patch(badgePatch);
    }
  }

  _updateLabel() {
    // Remove Label if no longer required
    if (!this.label || typeof this.label !== 'object' || this._isCircleLayout) {
      if (this._Label) {
        this._Content.patch({
          Label: undefined
        });
      }
      return;
    }

    const labelPatch = {
      variant: this.variant, // Allow variant to be overwritten
      ...this.label,
      x: this._w * this._scale - this._componentStyles.paddingX,
      y: this._componentStyles.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1,
      style: this._componentStyles.labelStyles
    };

    if (!this._Label) {
      this._Content.patch({
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
        x: [
          this._w * this._scale - this._componentStyles.paddingX,
          this._shouldShowMetadata
            ? this._componentStyles.animationEntrance
            : this._componentStyles.animationExit
        ],
        ...this._topMetadataTransitions // Badge and Label should animate in with the same values
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
        this._Content.patch({
          Checkbox: undefined
        });
      }
      return;
    }

    const checkboxPatch = {
      ...this.checkbox,
      x: this._w * this._scale - this._componentStyles.paddingX,
      y: this._h * this._scale - this._componentStyles.paddingY,
      style: this._componentStyles.checkboxStyles
    };

    if (!this._Checkbox) {
      this._Content.patch({
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
    this._Content.patch({ ProgressBar: undefined });
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
        w: this._w * this._scale - this._componentStyles.paddingX * 2,
        x: (this._w * this._scale) / 2,
        y: this._h * this._scale - this._componentStyles.paddingY,
        style: this._componentStyles.progressBarStyles
      };

      if (!this._ProgressBar) {
        this._Content.patch({
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
        this._Content.patch({
          Metadata: undefined
        });
      }
      return;
    }

    // Metadata placement and style overrides
    const metadataPatch = {
      variant: this.variant,
      alpha:
        !this._hasFocus && !this._persistentMetadata && this._hasMetadata
          ? 0.001
          : 1,
      mountX: 0.5,
      mountY: 'inset' === this._metadataLocation ? 1 : 0,
      w: this._w * this._scale - this._componentStyles.paddingX * 2,
      x: (this._w * this._scale) / 2,
      y: this._metadataY,
      style: this._componentStyles.metadataStyles
    };

    if (!this._Metadata) {
      this._Content.patch({
        Metadata: {
          type: MetadataTile,
          signals: {
            updateComponentDimensions: '_metadataLoaded'
          },
          ...metadataPatch
        }
      });
      return;
    }

    this._Metadata.patch(this.metadata); // Metadata should never be patched with smooth

    if (this._smooth) {
      this._Metadata.smooth = {
        ...metadataPatch,
        ...this._metadataTransitions // Defines how metadata should move when being placed on the Tile
      };
    } else {
      this._Metadata.patch(metadataPatch);
    }
  }

  _metadataLoaded() {
    if (this.metadataLocation !== 'inset') this.fireAncestors('$itemChanged'); // Send event to columns/rows that the height has been updated since metadata will be displayed below the Tile
  }
}

export default withExtensions(Tile);
