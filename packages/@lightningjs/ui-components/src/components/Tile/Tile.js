import Artwork from '../Artwork';
import Badge from '../Badge';
import Checkbox from '../Checkbox';
import Label from '../Label';
import MetadataTile from '../MetadataTile';
import ProgressBar from '../ProgressBar';
import * as styles from './Tile.styles';
import Surface from '../Surface';

export default class Tile extends Surface {
  static get __componentName() {
    return 'Tile';
  }

  static get __themeStyle() {
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
      'label',
      'src'
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

  //#region accessors

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

  get _gradient() {
    if (this._isCircleLayout) return false;
    return Boolean(
      (this._isInsetMetadata &&
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
    return this._persistentMetadata || this._isFocusedMode;
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
    return this._isInsetMetadata
      ? this._h - this.style.paddingY - this._progressBarHeight
      : this._h + this.style.paddingY;
  }

  get _metadataTransitions() {
    return {
      y: [
        this._persistentMetadata ||
        (this._isInsetMetadata && this._isFocusedMode)
          ? this._metadataY
          : this._h + this.style.paddingY,
        this._shouldShowMetadata
          ? this.style.animationEntrance
          : this.style.animationExit
      ],
      alpha: [
        this._shouldShowMetadata ? 1 : 0.001,
        this._isFocusedMode
          ? this.style.animationEntrance
          : this.style.animationExit
      ]
    };
  }
  //#endregion accessors

  get _isInsetMetadata() {
    return this._metadataLocation === 'inset';
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

    // Make sure container animates with same values as badge, label, and metadata
    this.applySmooth(
      this._Content,
      itemContainerPatch,
      Object.keys(itemContainerPatch).reduce((acc, prop) => {
        acc[prop] = [
          itemContainerPatch[prop],
          this._isFocusedMode
            ? this.style.animationEntrance
            : this.style.animationExit
        ];
        return acc;
      }, {})
    );
  }

  _updateArtwork() {
    // ensure a nested artwork src takes precedence over the class's src setter,
    // but that if src is undefined in both the setter and artwork object,
    // we don't incorrectly pass "src: undefined" to the Artwork component)
    this._Artwork.patch({
      h: this._h,
      w: this._w,
      x: this._w / 2,
      y: this._h / 2,
      src: this.src,
      ...(this.artwork || {}),
      style: {
        radius: this.style?.radius,
        ...this.artwork?.style
      },
      gradient: this._gradient,
      shouldScale: this._isFocusedMode
    });
  }

  _imageLoaded() {
    this._Background.alpha = 0; // Since the image is loaded the surface does not need to be shown
  }

  _updateBadge() {
    // Remove Badge if no longer required
    if (!this.badge?.title || this._isCircleLayout) {
      if (this._Badge) {
        this._Content.patch({
          Badge: undefined
        });
      }
      return;
    }

    const badgePatch = {
      ...this.badge,
      x: this.style.paddingX,
      y: this.style.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1
    };
    if (!this._Badge) {
      this._Content.patch({
        Badge: {
          type: Badge,
          ...badgePatch,
          signals: {
            loadedBadge: '_updateBadge'
          }
        }
      });
      return;
    }

    this.applySmooth(this._Badge, badgePatch, {
      ...badgePatch,
      ...this._topMetadataTransitions // Badge and Label should animate in with the same values
    });
  }

  _updateLabel() {
    // Remove Label if no longer required
    if (!this.label?.title || this._isCircleLayout) {
      if (this._Label) {
        this._Content.patch({
          Label: undefined
        });
      }
      return;
    }

    const labelPatch = {
      ...this.label,
      x: this._w - this.style.paddingX,
      y: this.style.paddingY,
      alpha: !this._persistentMetadata ? 0.001 : 1
    };

    if (!this._Label) {
      this._Content.patch({
        Label: {
          type: Label,
          mountX: 1,
          ...labelPatch,
          signals: {
            loadedLabel: '_updateLabel'
          }
        }
      });
      return;
    }

    this.applySmooth(this._Label, labelPatch, {
      ...labelPatch,
      x: [
        labelPatch.x,
        this._shouldShowMetadata
          ? this.style.animationEntrance
          : this.style.animationExit
      ],
      ...this._topMetadataTransitions // Badge and Label should animate in with the same values
    });
  }

  _updateCheckbox() {
    // Remove Checkbox if no longer required
    if (
      !(typeof this.checkbox?.checked === 'boolean' && this.checkbox.checked) ||
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
      y: this._h - this.style.paddingY
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

    this.applySmooth(this._Checkbox, checkboxPatch);
  }

  _removeProgressBar() {
    this._Content.patch({ ProgressBar: undefined });
    this._updateMetadata();
  }

  _updateProgressBar() {
    // Remove ProgressBar if no longer required
    if (
      !(
        typeof this.progressBar?.progress === 'number' &&
        this.progressBar.progress
      ) ||
      this._isCircleLayout
    ) {
      if (this._ProgressBar) {
        if (this.shouldSmooth) {
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
        ...this.progressBar,
        w: this._w - this.style.paddingX * 2,
        x: this._w / 2,
        y: this._h - this.style.paddingYProgress
      };

      if (!this._ProgressBar) {
        this._Content.patch({
          ProgressBar: {
            ...progressPatch,
            type: ProgressBar,
            mountX: 0.5,
            mountY: 1,
            alpha: this._hasMetadata && this.shouldSmooth ? 0.001 : 1
          }
        });

        if (this.shouldSmooth) {
          this._ProgressBar.smooth = {
            alpha: [
              1,
              { delay: this.style.animationEntrance.duration } // Wait for metadata to animate in
            ]
          };
        }
        return;
      }

      // TODO: See if we need to add animation to every property individually or can set parent
      this.applySmooth(
        this._ProgressBar,
        progressPatch,
        Object.keys(progressPatch).reduce((acc, prop) => {
          acc[prop] = [
            progressPatch[prop],
            this._isFocusedMode
              ? this.style.animationEntrance
              : this.style.animationExit
          ];
          return acc;
        }, {})
      );
    }
  }

  _inactive() {
    super._inactive();
    // Cleanup components and elements that may not be used again
    this._cleanupMetadata();
  }

  get _metadataPatch() {
    return {
      alpha: this._hasMetadata && this._shouldShowMetadata ? 1 : 0.001,
      mountX: 0.5,
      mountY: this._isInsetMetadata ? 1 : 0,
      marquee: this._isFocusedMode,
      w: this._w - this.style.paddingX * 2,
      x: this._w / 2,
      y:
        this._persistentMetadata ||
        (this._isInsetMetadata && this._isFocusedMode)
          ? this._metadataY
          : this._h + this.style.paddingY,
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

    if (!this._persistentMetadata && !this._isFocusedMode) {
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
          y: !(this._isInsetMetadata && this._isFocusedMode)
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
    this.applySmooth(
      this._Metadata,
      this._metadataPatch,
      this._metadataTransitions
    );

    if (!this._isFocusedMode) {
      this._resetMarqueeAnimation();
    }
  }

  _cleanupMetadata() {
    if (
      this._persistentMetadata ||
      this.metadataLocation !== 'inset' || // Do not remove the metadata element when not focused when not inset
      !this._Metadata
    ) {
      return;
    }
    this._Content.patch({
      Metadata: undefined
    });
  }

  _resetMarqueeAnimation() {
    const alphaTransition = this._Metadata._getTransition('alpha');
    if (alphaTransition) {
      alphaTransition.on('finish', () => {
        if (this._Metadata) {
          this._Metadata.resetMarquee();
        }
      });
    } else {
      this._Metadata.resetMarquee();
    }
  }

  _metadataLoaded() {
    this._animateMetadata();
    if (this.metadataLocation !== 'inset') this.fireAncestors('$itemChanged'); // Send event to columns/rows that the height has been updated since metadata will be displayed below the Tile
  }

  _getSrc() {
    return (this.artwork && this.artwork.src) || this._src;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Metadata && this._Metadata.announce,
        this._Badge && this._Badge.announce,
        this._Label && this._Label.announce,
        this._ProgressBar && this._ProgressBar.announce
      ]
    );
  }
}