import lng from '@lightningjs/core';
import Base from '../../elements/Base';
import CardArtwork from '../../elements/CardArtwork';
import Metadata from '../../elements/Metadata';
import FocusRing from '../../elements/FocusRing';
import withStyles from '../../mixins/withStyles';

export const artCardProps = [
  'src',
  'artWidth',
  'artHeight',
  'badge',
  'badgeLocation',
  'progress'
];

export const baseCardProps = [
  'title',
  'description',
  'backgroundColor',
  'focusColor'
];

export const logoProps = ['logo', 'logoWidth', 'logoHeight'];

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
  metadata: {
    title: {
      flexItem: { marginBottom: -theme.spacing(1) }
    }
  }
});

export default class Card extends withStyles(Base, styles) {
  static _template() {
    return {
      Background: {},
      Artwork: {
        type: CardArtwork
      },
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
      'action',
      'focusRing',
      'radius',
      'imgRadius'
    ];
  }

  static get tags() {
    return ['Background', 'Artwork', 'Metadata', 'FocusRing'];
  }

  _construct() {
    super._construct();
    this._radius = this.styles.radius;
    this._imgRadius = this.styles.imgRadius || this._radius;
    this._orientation = this.styles.orientation || this._orientation;
    this._backgroundColor = this.styles.background.color;
    this._focusRingColor = this.styles.focusRingColor;
    this.w = this.styles.w || this.w;
    this.h = this.styles.h || this.h;
  }

  _init() {
    this._update();
  }

  _update() {
    this._checkCollapseProps();
    this._updateBackground();
    this._updateArtwork();
    this._updateMetadata();
    this._updateFocusRing();
    this._updateScale();
  }

  vibrantCallback() {
    this.focusRingColor = this.vibrantFocusRing;
    this.backgroundColor = this.vibrantFill;
    this._update();
  }

  _checkCollapseProps() {
    if (this._collapseArt && this._collapseData) {
      this._collapseArt = false;
    }
  }

  _updateBackground() {
    this._Background.texture = lng.Tools.getRoundRect(
      // Compensating for the extra two pixels getRoundRect adds.
      this.w - 2,
      this.h - 2,
      this._radius,
      0,
      null,
      true,
      this.backgroundColor
    );
  }

  _updateArtwork() {
    let dimensions = this._calculateArtDimensions();
    this._Artwork.patch({
      src: this._src,
      w: dimensions.w,
      h: dimensions.h,
      badge: this._badge,
      badgeLocation: this._badgeLocation,
      progress: this._progress,
      alpha: this._collapseArt ? 0 : 1,
      rtt: true,
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius: this._imgRadius
      }
    });
    if (!this._collapseArt) {
      this.finalArtHeight = dimensions.h || 0;
      this.finalArtWidth = dimensions.w || 0;
    } else {
      this.finalArtHeight = 0;
      this.finalArtWidth = 0;
    }
  }

  _calculateArtDimensions() {
    let ratio = this._artWidth / this._artHeight;
    if (this._orientation === 'horizontal') {
      return {
        w: ratio * this.h,
        h: this.h
      };
    } else {
      return {
        w: this.w,
        h: this.w / ratio
      };
    }
  }

  _updateMetadata() {
    let dimensions = this._calculateMetadataDimensions();
    if (!this._collapseData) {
      this._Metadata.patch({
        w: dimensions.w,
        h: dimensions.h,
        title: this._title,
        description: this._description,
        data: this._data,
        action: this._action,
        logo: this._logo,
        logoHeight: this._logoHeight,
        logoWidth: this._logoWidth
      });
      this._moveMetadata();
    }
  }

  _calculateMetadataDimensions() {
    if (this._orientation === 'horizontal') {
      return {
        w: this.w - this.finalArtWidth - 2 * this.styles.paddingHorizontal,
        h: this.h - 2 * this.styles.paddingVertical
      };
    } else {
      return {
        w: this.w - 2 * this.styles.paddingHorizontal,
        h: this.h - this.finalArtHeight - 2 * this.styles.paddingVertical
      };
    }
  }

  _moveMetadata() {
    if (this._orientation === 'horizontal') {
      this._Metadata.x = this.finalArtWidth + this.styles.paddingHorizontal;
      this._Metadata.y = this.styles.paddingVertical;
    } else {
      this._Metadata.x = this.styles.paddingHorizontal;
      this._Metadata.y = this.finalArtHeight + this.styles.paddingVertical;
    }
  }

  _updateFocusRing() {
    if (this.hasFocus() || this._focusRing) {
      if (!this._focusRing) {
        this._focusRing = this.styles.focusRing({
          w: this.w,
          h: this.h,
          radius: this._radius + 2
        });
      }
      let FocusRingComponent = this._focusRing;
      const style = this.hasFocus()
        ? this.styles.focused.focusring
        : this.styles.unfocused.focusring;
      if (this._smooth) {
        FocusRingComponent.smooth = style;
      } else {
        FocusRingComponent = { ...FocusRingComponent, ...style };
      }
      FocusRingComponent.color = this.focusRingColor;
      this.patch({ FocusRing: FocusRingComponent });

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
}

const basicStyles = theme => ({
  w: 410,
  h: 231
});

export class BasicCard extends withStyles(Card, basicStyles) {
  static get properties() {
    return [...baseCardProps, 'logo', 'logoWidth', 'logoHeight'];
  }
}

const horizontalStyles = theme => ({
  orientation: 'horizontal',
  w: 860,
  h: 231,
  imgRadius: [theme.border.radius.medium, 0, 0, theme.border.radius.medium]
});

export class HorizontalCard extends withStyles(Card, horizontalStyles) {
  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'action'];
  }
}

const horizontalLargeStyles = theme => ({
  orientation: 'horizontal',
  w: 1085,
  h: 231,
  imgRadius: [theme.border.radius.medium, 0, 0, theme.border.radius.medium]
});

export class HorizontalCardLarge extends withStyles(
  Card,
  horizontalLargeStyles
) {
  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'action'];
  }
}

const smallMetadataStyles = theme => ({
  title: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.tertiary
  }
});

const verticalStyles = theme => ({
  orientation: 'vertical',
  w: 410,
  h: 335,
  imgRadius: [theme.border.radius.medium, theme.border.radius.medium, 0, 0],
  metadata: {
    ...smallMetadataStyles(theme),
    title: {
      ...smallMetadataStyles(theme).title,
      maxLines: 1
    },
    description: {
      ...smallMetadataStyles(theme).description,
      maxLines: 1
    }
  }
});

export class VerticalCard extends withStyles(Card, verticalStyles) {
  static get properties() {
    return [...artCardProps, ...baseCardProps];
  }
}

const verticalLargeStyles = theme => ({
  metadata: smallMetadataStyles(theme),
  orientation: 'vertical',
  w: 410,
  h: 502,
  imgRadius: [theme.border.radius.medium, theme.border.radius.medium, 0, 0]
});

export class VerticalCardLarge extends withStyles(Card, verticalLargeStyles) {
  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'action'];
  }
}

const verticalDynamicStyles = theme => ({
  orientation: 'vertical',
  w: 410,
  h: 502
});

export class VerticalCardDynamic extends withStyles(
  Card,
  verticalDynamicStyles
) {
  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'action'];
  }

  _updateArtwork() {
    let dimensions = this._calculateArtRatio();
    this._Artwork.patch({
      src: this._src,
      w: dimensions.w,
      h: dimensions.h
    });
    this._Artwork.x = this.styles.paddingHorizontal;
    this._Artwork.y = this.styles.paddingVertical;
    this.finalArtHeight = dimensions.h || 0;
    this.finalArtWidth = dimensions.w || 0;
  }

  _calculateArtRatio() {
    if (this._artWidth && this._artHeight) {
      let ratio = this._artWidth / this._artHeight;
      return {
        w: ratio * 100,
        h: 100
      };
    } else {
      return {
        w: 0,
        h: 0
      };
    }
  }

  _calculateMetadataDimensions() {
    return {
      w: this.w - 2 * this.styles.paddingHorizontal,
      h:
        this.h -
        this.finalArtHeight -
        (this._src ? 3 : 2) * this.styles.paddingVertical
    };
  }

  _moveMetadata() {
    this._Metadata.x = this.styles.paddingHorizontal;
    this._Metadata.y =
      this.finalArtHeight + (this._src ? 2 : 1) * this.styles.paddingVertical;
  }
}
