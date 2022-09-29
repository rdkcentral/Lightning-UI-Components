import Card from '../Card/Card';
import Tile from '../../elements/Tile';
import MetadataCardContent from '../../elements/MetadataCardContent';
import * as styles from './CardContent.styles';
import { withExtensions } from '../../mixins';
class CardContent extends Card {
  static get __componentName() {
    return 'CardContent';
  }

  static get __themeStyles() {
    return styles;
  }

  static get properties() {
    return [
      ...super.properties,
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

  static _template() {
    return {
      ...super._template(),
      Title: undefined,
      Tile: { type: Tile }
    };
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

    const tilePatch = {
      w,
      h,
      artwork: { src: this.src },
      persistentMetadata: true,
      badge: this.badge,
      label: this.label,
      progressBar: this.progressBar,
      alpha: this._shouldShowTile ? 1 : 0
    };

    this._Tile.patch(tilePatch);
  }

  _updateMetadata() {
    const metadataPatch = {
      ...this.metadata,
      ...this._metadataPosition,
      ...this._metadataDimensions,
      alpha: this._shouldShowMetadata ? 1 : 0
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
}

export default withExtensions(CardContent);
