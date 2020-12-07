import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import InlineContent from '../InlineContent';
import MarqueeText from '../MarqueeText';
import Icon from '../Icon';

export const styles = theme => ({
  logoSpacing: theme.spacing(4),
  logoW: 99,
  w: 410,
  justify: 'flex-start',
  marqueeProperties: {},
  firstLineTextProperties: {
    ...theme.typography.headline2,
    color: theme.palette.text.light.secondary,
    maxLines: 1
  },
  secondLineTextProperties: {
    ...theme.typography.body2,
    color: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    maxLines: 1
  },
  thirdLineTextProperties: {
    ...theme.typography.body2,
    color: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    maxLines: 1
  },
  unfocused: {
    scale: () => 1
  },
  focused: {
    scale: theme.getFocusScale
  }
});

class MetadataCard extends lng.Component {
  static _template() {
    return {
      flex: { direction: 'row', justify: 'flex-start' },
      Text: {
        flex: { direction: 'column' },
        FirstLineWrapper: {
          Marquee: {
            type: MarqueeText,
            alpha: 0
          },
          FirstLine: {
            type: InlineContent,
            alpha: 0.001,
            rtt: true
          }
        },
        SecondLine: {},
        ThirdLine: {}
      },
      Logo: {
        type: Icon,
        flexItem: { alignSelf: 'center' }
      }
    };
  }

  _construct() {
    this._logoSpacing = this.styles.logoSpacing;
    this._logoW = this.styles.logoW;
    this._justify = this.styles.justify;
    this._marqueeProperties = this.styles.marqueeProperties;
    this._firstLineTextProperties = this.styles.firstLineTextProperties;
    this._secondLineTextProperties = this.styles.secondLineTextProperties;
    this._thirdLineTextProperties = this.styles.thirdLineTextProperties;
    this.w = this.styles.w;
  }

  _init() {
    this._originalW = this.w;
    this._focusScale = this.styles.focused.scale(this._originalW);
    this._unfocusScale = this.styles.unfocused.scale(this._originalW);
    this._update();

    this._SecondLine.on('txLoaded', () => {
      let marginBottom =
        this._SecondLine.text._source.renderInfo.lines.length *
          this._secondLineTextProperties.lineHeight -
        this._SecondLine.renderHeight;
      this._SecondLine.patch({ flexItem: { marginBottom } });
    });
  }

  $loadedInlineContent(line) {
    if (line.ref === this._FirstLine.ref) {
      this._FirstLineWrapper.h = line.multiLineHeight;
    }
    line.h = line.multiLineHeight;
  }

  _update() {
    this._updateFirstLine();
    this._updateSecondLine();
    this._updateThirdLine();
    this._updateLogo();
    this._updateWidth();
    this._updateMarquee();
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  _updateWidth() {
    if (this._smooth) {
      this.smooth = { w: this._focusW };
    } else {
      this.w = this._focusW;
    }
  }

  _updateMarquee() {
    if (this.hasFocus()) {
      this._FirstLineMarquee.startScrolling &&
        this._FirstLineMarquee.startScrolling(this._textW);
    } else {
      this._FirstLineMarquee.stopScrolling &&
        this._FirstLineMarquee.stopScrolling(this._textW);
    }
  }

  _updateFirstLine() {
    this._FirstLine.justify = this._justify;
    this._FirstLine.content = this._firstLine;
    this._FirstLine.textProperties = this._firstLineTextProperties;
    this._FirstLineMarquee.patch(this._marqueeProperties);
    this._FirstLineMarquee.w = this._textW;
    this._FirstLineMarquee.contentTexture = this._FirstLine.getTexture();
    this._FirstLineMarquee.smooth = { alpha: this._firstLine ? 1 : 0 };
  }

  _updateSecondLine() {
    this._SecondLine.text = {
      ...this._secondLineTextProperties,
      wordWrapWidth: this._textW,
      text: this._secondLine
    };
    this._SecondLine.visible = this._secondLine ? true : false;
  }

  _updateThirdLine() {
    this._ThirdLine.text = {
      ...this._thirdLineTextProperties,
      wordWrapWidth: this._textW,
      text: this._thirdLine
    };
    this._ThirdLine.visible = this._thirdLine ? true : false;
  }

  _updateLogo() {
    this._Logo.icon = this.logo;
    this._Logo.w = this.logoW;
    const alpha = this.logo ? 1 : 0;
    if (this._smooth) {
      this._Text.smooth = { w: this._textW };
      this._Logo.smooth = { alpha };
    } else {
      this._Text.w = this._textW;
      this._Logo.alpha = alpha;
    }
    this._Text.patch({
      flexItem: { marginRight: this.logo ? this.logoSpacing : 0 }
    });
  }

  get _textW() {
    const currentW = this.hasFocus() ? this._focusW : this._originalW;
    return currentW - (this.logo ? this.logoW + this.logoSpacing : 0);
  }

  get _focusW() {
    if (this._originalW) {
      const scale = this.hasFocus() ? this.focusScale : this.unfocusScale;
      return scale * this._originalW;
    }
    return this.w;
  }

  set focusScale(focusScale) {
    if (focusScale !== this._focusScale) {
      this._focusScale = focusScale;
      this._update();
    }
  }

  get focusScale() {
    return this._focusScale;
  }

  set unfocusScale(unfocusScale) {
    if (unfocusScale !== this._unfocusScale) {
      this._unfocusScale = unfocusScale;
      this._update();
    }
  }

  get unfocusScale() {
    return this._unfocusScale;
  }

  set justify(justify) {
    if (justify !== this._justify) {
      this._justify = justify;
      this._update();
    }
  }

  get justify() {
    return this._justify;
  }

  set marqueeProperties(marqueeProperties) {
    if (marqueeProperties !== this._marqueeProperties) {
      this._marqueeProperties = marqueeProperties;
      this._update();
    }
  }

  get marqueeProperties() {
    return this._marqueeProperties;
  }

  set firstLine(firstLine) {
    if (firstLine !== this._firstLine) {
      this._firstLine = firstLine;
      this._update();
    }
  }

  get firstLine() {
    return this._firstLine;
  }

  set firstLineTextProperties(firstLineTextProperties) {
    if (firstLineTextProperties !== this._firstLineTextProperties) {
      this._firstLineTextProperties = firstLineTextProperties;
      this._update();
    }
  }

  get firstLineTextProperties() {
    return this._firstLineTextProperties;
  }

  set secondLine(secondLine) {
    if (secondLine !== this._secondLine) {
      this._secondLine = secondLine;
      this._update();
    }
  }

  get secondLine() {
    return this._secondLine;
  }

  set secondLineTextProperties(secondLineTextProperties) {
    if (secondLineTextProperties !== this._secondLineTextProperties) {
      this._secondLineTextProperties = secondLineTextProperties;
      this._update();
    }
  }

  get secondLineTextProperties() {
    return this._secondLineTextProperties;
  }

  set thirdLine(thirdLine) {
    if (thirdLine !== this._thirdLine) {
      this._thirdLine = thirdLine;
      this._update();
    }
  }

  get thirdLine() {
    return this._thirdLine;
  }

  set thirdLineTextProperties(thirdLineTextProperties) {
    if (thirdLineTextProperties !== this._thirdLineTextProperties) {
      this._thirdLineTextProperties = thirdLineTextProperties;
      this._update();
    }
  }

  get thirdLineTextProperties() {
    return this._thirdLineTextProperties;
  }

  set logo(logo) {
    if (logo !== this._logo) {
      this._logo = logo;
      this._update();
    }
  }

  get logo() {
    return this._logo;
  }

  set logoW(logoW) {
    if (logoW !== this._logoW) {
      this._logoW = logoW;
      this._update();
    }
  }

  get logoW() {
    return this._logoW;
  }

  set logoSpacing(logoSpacing) {
    if (logoSpacing !== this._logoSpacing) {
      this._logoSpacing = logoSpacing;
      this._update();
    }
  }

  get logoSpacing() {
    return this._logoSpacing;
  }

  get _Text() {
    return this.tag('Text');
  }

  get _FirstLineWrapper() {
    return this.tag('FirstLineWrapper');
  }

  get _FirstLineMarquee() {
    return this._FirstLineWrapper.tag('Marquee');
  }

  get _FirstLine() {
    return this._FirstLineWrapper.tag('FirstLine');
  }

  get _SecondLine() {
    return this.tag('SecondLine');
  }

  get _ThirdLine() {
    return this.tag('ThirdLine');
  }

  get _Logo() {
    return this.tag('Logo');
  }
}

export default withStyles(MetadataCard, styles);
