import lng from '@lightningjs/core';
import { withStyles } from '../../mixins';
import { Base, CardArtwork, FocusRing, Metadata } from '../../elements';
import { getValidColor } from '../../Styles/Colors';
export const artCardProps = [
  'src',
  'icon',
  'artWidth',
  'artHeight',
  'badge',
  'badgeLocation',
  'progress'
];

export const baseCardProps = [
  'orientation',
  'title',
  'subtitle',
  'description',
  'backgroundColor',
  'backgroundColorFocus',
  'focusRing',
  'focusRingFocused',
  'focusRingUnfocused',
  'radius',
  'imgRadius',
  'paddingHorizontal',
  'paddingVertical'
];

export const logoProps = ['logo', 'logoWidth', 'logoHeight', 'logoTitle'];

export const styles = theme => ({
  paddingHorizontal: theme.spacing(3),
  paddingVertical: theme.spacing(2),
  focusRing: function ({ w, h, radius }) {
    return {
      type: FocusRing,
      w,
      h,
      radius: radius + 2,
      size: theme.spacing(0.5),
      zIndex: 1
    };
  },
  unfocused: {
    focusring: { alpha: 0 },
    shadow: { alpha: 0 }
  },
  focused: {
    focusring: { alpha: 1 },
    shadow: { alpha: 1 }
  },
  radius: theme.border.radius.medium,
  background: { color: theme.palette.grey[70] },
  shouldAnimate: true
});

export default class Card extends withStyles(Base, styles) {
  static _template() {
    return {
      Background: {},
      Metadata: {
        type: withStyles(Metadata, this.styles.metadata)
      }
    };
  }

  static get properties() {
    return [
      ...artCardProps,
      ...baseCardProps,
      ...logoProps,
      'data',
      'cta',
      'shouldAnimate'
    ];
  }

  static get tags() {
    return ['Background', 'Artwork', 'Metadata', 'FocusRing'];
  }

  _construct() {
    super._construct();
    this._shouldAnimate = this.styles.shouldAnimate;
    this.circleImage = false;
    this.w = this.styles.w || this.w;
    this.h = this.styles.h || this.h;
    this._originalDimensions = { w: this.w, h: this.h };
    this._radius = this.styles.radius;
    this._imgRadius = this.styles.imgRadius;
    this._orientation = this.styles.orientation;
    this._backgroundColor = this.styles.background.color;
    this._focusRingColor = this.styles.focusRingColor;
    this._focusRingFocused = this.styles.focused.focusring;
    this._focusRingUnfocused = this.styles.unfocused.focusring;
    this._createFocusRing = this.styles.focusRing;
    this._paddingHorizontal = this.styles.paddingHorizontal;
    this._paddingVertical = this.styles.paddingVertical;
    this._collapsed = this.collapseArt || this.collapseData;
    this._artWidth = this.styles.artWidth;
    this._artHeight = this.styles.artHeight;
  }

  _init() {
    this._update();
  }

  _update() {
    this._checkCollapseProps();
    this._storeCardDimensions();
    this._setCardDimensions();
    this._updateCardDimensions();
    this._updateBackground();
    this._updateArtwork();
    this._updateMetadata();
    //this._updateFocusRing();
    this._updateScale();
  }

  _setBackgroundColorFocus(v) {
    return getValidColor(v);
  }

  vibrantCallback() {
    this.focusRingColor = this.vibrantFocusRing;
    this.backgroundColor = this.vibrantFill;
    this._update();
  }

  _checkCollapseProps() {
    if (this.collapseArt && this.collapseData) {
      this.collapseArt = false;
    }
  }

  _storeCardDimensions() {
    // keeps track of the full dimensions of the card for collapsing purposes
    if (!this._collapsed) {
      this._originalDimensions.w = this.w;
      this._originalDimensions.h = this.h;
    }
  }

  _setCardDimensions() {
    const dimensions = { ...this._originalDimensions };
    const toUpdate = this.orientation === 'vertical' ? 'h' : 'w';

    dimensions[toUpdate] = this._originalDimensions[toUpdate];
    if (this._Artwork) {
      if (this.collapseArt) {
        dimensions[toUpdate] =
          this._originalDimensions[toUpdate] - this._Artwork[toUpdate];
      } else if (this.collapseData) {
        dimensions[toUpdate] = this._Artwork[toUpdate];
      }
    }

    this._collapsed = this.collapseArt || this.collapseData;
    this._dimensions = dimensions;
  }

  _updateCardDimensions() {
    if (this._smooth) {
      this.smooth = { w: this._dimensions.w };
      this.smooth = { h: this._dimensions.h };
    } else {
      this.w = this._dimensions.w;
      this.h = this._dimensions.h;
    }
  }

  _updateBackground() {
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this._dimensions.w - 2,
        this._dimensions.h - 2,
        this.radius,
        0,
        null,
        true,
        this.hasFocus()
          ? this._backgroundColorFocus || this._backgroundColor
          : this._backgroundColor
      )
    });
  }

  _updateArtwork() {
    if (this.src) {
      const radius = this._artRadius;
      const artworkPatch = {
        src: this.src,
        icon: this.icon,
        w: this.artWidth,
        h: this.artHeight,
        imageSize: this.artHeight,
        circleImage: this.circleImage,
        blurBackground: this.circleImage,
        badge: this.badge,
        badgeLocation: this.badgeLocation || 'upperLeft',
        progress: this.progress,
        alpha: this.collapseArt ? 0 : 1,
        rtt: true,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius
        }
      };
      if (!this._Artwork) {
        this.patch({
          Artwork: {
            type: CardArtwork
          }
        });
      }
      this._Artwork.patch(artworkPatch);
    }
    this.finalArtHeight = this.artHeight || 0;
    this.finalArtWidth = this.artWidth || 0;
  }

  get _artRadius() {
    if (this.collapseData || this.collapseArt) {
      return this.imgRadius;
    }
    if (this._orientation === 'horizontal') {
      return [this.imgRadius, 0, 0, this.imgRadius];
    } else {
      return [this.imgRadius, this.imgRadius, 0, 0];
    }
  }

  _updateMetadata() {
    if (!this.collapseData) {
      const dimensions = this._calculateMetadataDimensions();
      this._Metadata.patch({
        w: dimensions.w,
        h: dimensions.h,
        title: this.title,
        subtitle: this.subtitle,
        description: this.description,
        data: this.data,
        cta: this.cta,
        logo: this.logo,
        logoHeight: this.logoHeight,
        logoWidth: this.logoWidth,
        alpha: 1
      });
      this._moveMetadata();
    } else {
      this._Metadata.patch({
        alpha: 0
      });
    }
  }

  _calculateMetadataDimensions() {
    if (this.orientation === 'horizontal') {
      return {
        w:
          this._originalDimensions.w -
          this.finalArtWidth -
          2 * this.paddingHorizontal,
        h: this._originalDimensions.h - 2 * this.paddingVertical
      };
    } else {
      return {
        w: this._originalDimensions.w - 2 * this.paddingHorizontal,
        h:
          this._originalDimensions.h -
          this.finalArtHeight -
          2 * this.paddingVertical
      };
    }
  }

  _moveMetadata() {
    const collapseArtOffsetW = this.collapseArt ? this.finalArtWidth : 0;
    const collapseArtOffsetH = this.collapseArt ? this.finalArtHeight : 0;
    if (this.orientation === 'horizontal') {
      this._Metadata.x =
        this.finalArtWidth + this.paddingHorizontal - collapseArtOffsetW;
      this._Metadata.y = this.paddingVertical;
    } else {
      this._Metadata.x = this.paddingHorizontal;
      this._Metadata.y =
        this.finalArtHeight + this.paddingVertical - collapseArtOffsetH;
    }
  }

  _updateFocusRing() {
    if (this.hasFocus() || this.focusRing) {
      if (!this.focusRing) {
        this.focusRing = this._createFocusRing({
          w: this._originalDimensions.w,
          h: this._originalDimensions.h,
          radius: this.radius + 2
        });
      }
      let FocusRingComponent = this.focusRing;
      const style = this.hasFocus()
        ? this.focusRingFocused
        : this.focusRingUnfocused;
      if (this._smooth) {
        FocusRingComponent.smooth = style;
      } else {
        FocusRingComponent = { ...FocusRingComponent, ...style };
      }
      FocusRingComponent.color = this.focusRingColor;
      this.patch({ FocusRing: FocusRingComponent });
      this._FocusRing._shouldAnimate = this.shouldAnimate;
      if (this.hasFocus()) {
        this._FocusRing.startAnimation();
      } else {
        this._FocusRing.stopAnimation();
      }
    }
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this._getFocusScale(this.w, this.h)
      : this._getUnfocusScale(this.w, this.h);
    if (this._smooth) {
      this.smooth = { scale };
    } else {
      this.scale = scale;
    }
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [
      this.title,
      this.subtitle,
      this.description,
      this._Metadata._Data.announce,
      this.cta,
      this.logoTitle
    ];
  }

  set announce(announce) {
    super.announce = announce;
  }
}
