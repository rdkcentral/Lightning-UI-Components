import Card from '../Card/Card';
import { withExtensions, Tile } from '@lightning/ui-core';
import MetadataCardContent from '../MetadataCardContent';
import * as styles from './CardContent.styles';
import { utils } from '@lightning/ui-core';

class CardContent extends Card {
  static get __componentName() {
    return 'CardContent';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      Tile: { type: Tile }
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'tile',
      'metadata',
      'orientation',
      'collapseToMetadata',
      'shouldCollapse',
      'src'
    ];
  }

  static get tags() {
    return [...super.tags, 'Metadata', 'Tile'];
  }

  _update() {
    this._updateSize();
    this._updateTile();
    this._updateRadius();
    this._updateMetadata();
    super._update();
  }

  _updateTitle() {}

  _updateTitlePosition() {}

  _updateTile() {
    let w = this.style.imageSize.w;
    let h = this.style.expandedH;
    if (this._orientation !== 'horizontal') {
      w = this.style.expandedW;
      h = this.style.imageSize.h;
    }

    // ensure a nested tile artwork src takes precedence over the class's src setter,
    // but that if src is undefined in both the setter and tile artwork object,
    // we don't incorrectly pass "src: undefined" to the Tile component (and in turn, Artwork)
    let tile = this.tile;
    if (this.src) {
      tile = utils.clone({ src: this.src }, this.tile);
    }

    this._Tile.patch({
      w,
      h,
      ...tile,
      persistentMetadata: true,
      alpha: this._shouldShowTile ? 1 : 0
    });
  }

  _updateMetadata() {
    const metadataPatch = {
      ...this.metadata,
      ...this._metadataPosition,
      ...this._metadataDimensions,
      mode: this.mode,
      alpha: this._shouldShowMetadata ? 1 : 0,
      style: this.style.metadataStyles
    };
    if (!this._Metadata) {
      metadataPatch.type = MetadataCardContent;
    }

    this.patch({ Metadata: metadataPatch });
  }

  _updateSize() {
    let w = this.style.expandedW;
    let h = this.style.expandedH;
    if (this._collapse) {
      if (this._orientation === 'horizontal') {
        w = this._collapseW;
      } else {
        h = this._collapseH;
      }
    }
    this.w = w;
    this.h = h;
  }

  _updateRadius() {
    const radius =
      Array.isArray(this.style.radius) && this.style.radius.length === 4
        ? this.style.radius
        : Array(4).fill(this.style.radius);
    let tileRadius = radius;

    if (!this._collapse) {
      tileRadius =
        this._orientation === 'horizontal'
          ? [radius[0], 0, 0, radius[3]]
          : [radius[0], radius[1], 0, 0];
    }

    this._Tile.patch({ style: { radius: tileRadius } });
  }

  _getSrc() {
    return (
      (this.tile &&
        ((this.tile.artwork && this.tile.artwork.src) || this.tile.src)) ||
      this._src
    );
  }

  get _metadataDimensions() {
    const paddingHorizontal = this.style.paddingHorizontal * 2;
    const paddingVertical = this.style.paddingVertical * 2;

    let w = this.style.expandedW - this.style.imageSize.w - paddingHorizontal;
    let h = this.style.expandedH - paddingVertical;

    if (this.orientation !== 'horizontal') {
      w = this.style.expandedW - paddingHorizontal;
      h = this.style.expandedH - this.style.imageSize.h - paddingVertical;
    }
    return { w, h };
  }

  get _metadataPosition() {
    const paddingHorizontal = this.style.paddingHorizontal;
    const paddingVertical = this.style.paddingVertical;

    let x = paddingHorizontal + (this._collapse ? 0 : this.style.imageSize.w);
    let y = paddingVertical;

    if (this.orientation !== 'horizontal') {
      x = paddingHorizontal;
      y = paddingVertical + (this._collapse ? 0 : this.style.imageSize.h);
    }

    return { x, y };
  }

  get _shouldShowMetadata() {
    return !this._collapse || this.collapseToMetadata;
  }

  get _shouldShowTile() {
    return !this._collapse || (this._collapse && !this.collapseToMetadata);
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  get _collapseW() {
    return this.collapseToMetadata
      ? this.style.expandedW - this.style.imageSize.w
      : this.style.imageSize.w;
  }

  get _collapseH() {
    return this.collapseToMetadata
      ? this.style.expandedH - this.style.imageSize.h
      : this.style.imageSize.h;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Metadata && this._Metadata.announce,
        this._Tile && this._Tile.announce
      ]
    );
  }
}

export default withExtensions(CardContent);
