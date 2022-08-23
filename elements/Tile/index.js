import { withExtensions } from '../../mixins';
import Artwork from '../Artwork';
import Badge from '../Badge';
import Checkbox from '../Checkbox';
import context from '../../context';
import Label from '../Label';
import MetadataTile from '../Metadata'; //TODO: Change this to MetadataTile once refactor is complete
import ProgressBar from '../ProgressBar';
import * as styles from './Tile.styles';
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
      ...super._template(), // Make sure surface elements are patched
      Tile: {
        Artwork: {
          type: Artwork,
          signals: {
            imageLoaded: '_imageLoaded'
          },
          mount: 0.5
        },
        Content: {
          mount: 0.5
        }
      }
    };
  }

  static get properties() {
    return [
      'artwork',
      'circle',
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
      'Tile',
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
    return Boolean(
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
    // Allow theme level overrides
    const themeLevelH =
      this._ProgressBar &&
      this.style.progressBarStyles &&
      this.style.progressBarStyles.h;

    return (
      (themeLevelH ? themeLevelH + this.style.paddingY : 0) ||
      (this._ProgressBar &&
        this._ProgressBar._getTransition('h')._targetValue +
          this.style.paddingY) ||
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
        this._shouldShowMetadata ? this.style.paddingY : 0,
        this._shouldShowMetadata
          ? this.style.animationEntrance
          : this.style.animationExit
      ],
      alpha: [
        this._shouldShowMetadata ? 1 : 0.001,
        this._shouldShowMetadata
          ? this.style.animationEntrance
          : this.style.animationExit
      ]
    };
  }

  get _metadataY() {
    return 'inset' === this._metadataLocation
      ? this._h - this.style.paddingY - this._progressBarHeight
      : this._h + this.style.paddingY;
  }

  get _metadataTransitions() {
    return {
      y: [
        this._persistentMetadata ||
        ('inset' === this._metadataLocation && this._hasFocus)
          ? this._metadataY
          : this._h + this.style.paddingY,
        this._shouldShowMetadata
          ? this.style.animationEntrance
          : this.style.animationExit
      ],
      alpha: [
        this._shouldShowMetadata ? 1 : 0.001,
        this._hasFocus ? this.style.animationEntrance : this.style.animationExit
      ]
    };
  }

  _update() {
    super._update();
    this._updateTileColor();
    this._updateContent();
    this._updateArtwork();
    this._updateBadge();
    this._updateLabel();
    this._updateCheckbox();
    this._updateProgressBar();
    this._updateMetadata();
    if (this._smooth === undefined) this._smooth = true;
  }

  _updateTileColor() {
    this._Tile.alpha = this.style.alpha;
  }

  _updateContent() {
    const itemContainerPatch = {
      h: this._h,
      w: this._w,
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
              ? this.style.animationEntrance
              : this.style.animationExit
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
      palette: this.palette,
      ...(this.artwork || {}),
      gradient: this._gradient,
      h: this._h,
      w: this._w,
      x: this._w / 2,
      y: this._h / 2,
      shouldScale: this._hasFocus,
      style: {
        radius: this.style.radius, // This can be overwritten by artworkStyles to support no rounding for performance
        ...this.style.artworkStyles
      }
    });
  }

  _imageLoaded() {
    this._Background.alpha = 0; // Since the image is loaded the surface does not need to be shown
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
      palette: this.palette,
      ...this.badge,
      x: this.style.paddingX,
      y: this.style.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1,
      style: this.style.badgeStyles
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
      palette: this.palette, // Allow palette to be overwritten
      ...this.label,
      x: this._w - this.style.paddingX,
      y: this.style.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1,
      style: this.style.labelStyles
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
          labelPatch.x,
          this._shouldShowMetadata
            ? this.style.animationEntrance
            : this.style.animationExit
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
      x: this._w - this.style.paddingX,
      y: this._h - this.style.paddingY,
      style: this.style.checkboxStyles
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

  _updateProgressBar() {
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
        palette: this.palette,
        ...this.progressBar,
        w: this._w - this.style.paddingX * 2,
        x: this._w / 2,
        y: this._h - this.style.paddingY,
        style: this.style.progressBarStyles
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
                delay: this.style.animationEntrance.duration // Wait for metadata to animate in
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
                ? this.style.animationEntrance
                : this.style.animationExit
            ];
            return acc;
          },
          {}
        );
      } else {
        this._ProgressBar.patch(progressPatch);
      }
    }
  }

  _inactive() {
    super._inactive();
    // Cleanup components and elements that may not be used again
    this._cleanupMetadata();
  }

  get _metadataPatch() {
    return {
      palette: this.palette,
      alpha: !this._persistentMetadata && this._hasMetadata ? 0.001 : 1,
      mountX: 0.5,
      mountY: 'inset' === this._metadataLocation ? 1 : 0,
      w: this._w - this.style.paddingX * 2,
      x: this._w / 2,
      style: this.style.metadataStyles,
      ...(this.metadata || {})
    };
  }

  _updateMetadata() {
    if (
      !this._hasMetadata ||
      (this._isCircleLayout && this._metadataLocation === 'inset')
    ) {
      this._cleanupMetadata();
      return;
    }

    if (
      !this._persistentMetadata &&
      this._metadataLocation === 'inset' &&
      !this._hasFocus
    ) {
      this._animateMetadata();
      return;
    }

    if (!this._Metadata) {
      // Patch in Metadata for the first time
      this._Content.patch({
        Metadata: {
          type: MetadataTile,
          signals: {
            updateComponentDimensions: '_metadataLoaded'
          },
          ...this._metadataPatch,
          // Patch in as if it was already in unfocused stage so it will animate up the first time
          y: !('inset' === this._metadataLocation && this._hasFocus)
            ? this._metadataY
            : this._h + this.style.paddingY
        }
      });

      return;
    }

    this._Metadata.patch(this._metadataPatch); // Metadata should never be patched with smooth

    this._animateMetadata();
  }

  _animateMetadata() {
    if (!this._Metadata) return;
    if (this._smooth) {
      this._Metadata.smooth = this._metadataTransitions;
    } else {
      this._Metadata.patch(this._metadataPatch);
    }
  }

  _cleanupMetadata() {
    if (
      this._persistentMetadata ||
      this.metadataLocation !== 'inset' || // Do not remove the metadata element when not focused when not inset
      !this._Metadata
    )
      return;
    this._Content.patch({
      Metadata: undefined
    });
  }

  _metadataLoaded() {
    this._animateMetadata();
    if (this.metadataLocation !== 'inset') this.fireAncestors('$itemChanged'); // Send event to columns/rows that the height has been updated since metadata will be displayed below the Tile
  }
}

export default withExtensions(Tile);
