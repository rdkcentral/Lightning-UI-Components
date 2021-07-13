import lng from '@lightningjs/core';
import Base from '../../elements/Base';
import CardArtwork from '../../elements/CardArtwork';
import Metadata from '../../elements/Metadata';
import FocusRing from '../../elements/FocusRing';
import withStyles from '../../mixins/withStyles';
import { getValidColor } from '../../Styles';

export const artCardProps = [
  'src',
  'artWidth',
  'artHeight',
  'badge',
  'badgeLocation',
  'progress'
];

export const baseCardProps = [
  'orientation',
  'title',
  'description',
  'backgroundColor',
  'focusRing',
  'focusRingFocused',
  'focusRingUnfocused',
  'radius',
  'imgRadius',
  'paddingHorizontal',
  'paddingVertical'
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
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'action'];
  }

  static get tags() {
    return ['Background', 'Artwork', 'Metadata', 'FocusRing'];
  }

  _construct() {
    super._construct();
    this.w = this.styles.w || this.w;
    this.h = this.styles.h || this.h;
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
    if (this.collapseArt && this.collapseData) {
      this.collapseArt = false;
    }
  }

  _updateBackground() {
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this.w - 2,
        this.h - 2,
        this.radius,
        0,
        null,
        true,
        this.backgroundColor
      )
    });
  }

  _updateArtwork() {
    const dimensions = this._calculateArtDimensions();
    this._Artwork.patch({
      src: this.src,
      w: dimensions.w,
      h: dimensions.h,
      badge: this.badge,
      badgeLocation: this.badgeLocation,
      progress: this.progress,
      alpha: this.collapseArt ? 0 : 1,
      rtt: true,
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius: this.imgRadius
      }
    });
    if (!this.collapseArt) {
      this.finalArtHeight = dimensions.h || 0;
      this.finalArtWidth = dimensions.w || 0;
    } else {
      this.finalArtHeight = 0;
      this.finalArtWidth = 0;
    }
  }

  _calculateArtDimensions() {
    const ratio = this.artWidth / this.artHeight;
    if (this.orientation === 'horizontal') {
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
    const dimensions = this._calculateMetadataDimensions();
    if (!this.collapseData) {
      this._Metadata.patch({
        w: dimensions.w,
        h: dimensions.h,
        title: this.title,
        description: this.description,
        data: this.data,
        action: this.action,
        logo: this.logo,
        logoHeight: this.logoHeight,
        logoWidth: this.logoWidth
      });
      this._moveMetadata();
    }
  }

  _calculateMetadataDimensions() {
    if (this.orientation === 'horizontal') {
      return {
        w: this.w - this.finalArtWidth - 2 * this.paddingHorizontal,
        h: this.h - 2 * this.paddingVertical
      };
    } else {
      return {
        w: this.w - 2 * this.paddingHorizontal,
        h: this.h - this.finalArtHeight - 2 * this.paddingVertical
      };
    }
  }

  _moveMetadata() {
    if (this.orientation === 'horizontal') {
      this._Metadata.x = this.finalArtWidth + this.paddingHorizontal;
      this._Metadata.y = this.paddingVertical;
    } else {
      this._Metadata.x = this.paddingHorizontal;
      this._Metadata.y = this.finalArtHeight + this.paddingVertical;
    }
  }

  _updateFocusRing() {
    if (this.hasFocus() || this.focusRing) {
      if (!this.focusRing) {
        this.focusRing = this._createFocusRing({
          w: this.w,
          h: this.h,
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
  h: 502,
  gradient: {
    w: 820,
    h: 410,
    radius: 410,
    blur: 100,
    margin: 100
  }
});

export class VerticalCardDynamic extends withStyles(
  Card,
  verticalDynamicStyles
) {
  _construct() {
    super._construct();
    this.gradientW = this.styles.gradient.w;
    this.gradientH = this.styles.gradient.h;
    this.gradientRadius = this.styles.gradient.radius;
    this.gradientBlur = this.styles.gradient.blur;
    this.gradientMargin = this.styles.gradient.margin;
  }

  static get properties() {
    return [
      ...artCardProps,
      ...baseCardProps,
      ...logoProps,
      'data',
      'action',
      'gradientColor',
      'gradientW',
      'gradientH',
      'gradientRadius',
      'gradientBlur',
      'gradientMargin'
    ];
  }

  _updateBackground() {
    const gradientColor = getValidColor(this._gradientColor);
    if (gradientColor) {
      this._Background.patch({
        texture: undefined,
        rect: true,
        w: this.w,
        h: this.h,
        color: this.backgroundColor,
        rtt: true,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.radius
        },
        Gradient: {
          mountX: 0.5,
          x: this.w / 2,
          y: this.h - this._gradientMargin - 50,
          color: gradientColor,
          texture: lng.Tools.getShadowRect(
            this._gradientW,
            this._gradientH,
            this._gradientRadius,
            this._gradientBlur,
            this._gradientMargin
          ),
          smooth: { alpha: this.hasFocus() ? 1 : 0 }
        }
      });
    } else {
      super._updateBackground();
    }
  }

  _updateArtwork() {
    const dimensions = this._calculateArtRatio();
    this._Artwork.patch({
      src: this._src,
      w: dimensions.w,
      h: dimensions.h
    });
    this._Artwork.x = this.paddingHorizontal;
    this._Artwork.y = this.paddingVertical;
    this.finalArtHeight = dimensions.h || 0;
    this.finalArtWidth = dimensions.w || 0;
  }

  _calculateArtRatio() {
    if (this.artWidth && this.artHeight) {
      const ratio = this.artWidth / this.artHeight;
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
      w: this.w - 2 * this.paddingHorizontal,
      h:
        this.h - this.finalArtHeight - (this.src ? 3 : 2) * this.paddingVertical
    };
  }

  _moveMetadata() {
    this._Metadata.x = this.paddingHorizontal;
    this._Metadata.y =
      this.finalArtHeight + (this.src ? 2 : 1) * this.paddingVertical;
  }
}
