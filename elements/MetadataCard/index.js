import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import withTags from '../../mixins/withTags';
import InlineContent from '../../layout/InlineContent';
import MarqueeText from '../MarqueeText';
import Icon from '../Icon';

export const styles = theme => ({
  logoSpacing: theme.spacing(4),
  logoW: 99,
  w: 410,
  justify: 'flex-start',
  marqueeProperties: {},
  firstLineTextProperties: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary,
    maxLines: 1
  },
  secondLineTextProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    maxLines: 1
  },
  thirdLineTextProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
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

class MetadataCard extends withTags(lng.Component) {
  static _template() {
    return {
      flex: { direction: 'row', justifyContent: 'flex-start' },
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
        SecondLineWrapper: {
          Marquee: {
            type: MarqueeText,
            alpha: 0
          },
          SecondLine: {
            type: InlineContent,
            alpha: 0.001,
            rtt: true
          }
        },
        ThirdLineWrapper: {
          Marquee: {
            type: MarqueeText,
            alpha: 0
          },
          ThirdLine: {
            type: InlineContent,
            alpha: 0.001,
            rtt: true
          }
        }
      },
      Logo: {
        type: Icon,
        flexItem: { alignSelf: 'center' }
      }
    };
  }

  static get tags() {
    return [
      'Text',
      'FirstLineWrapper',
      'SecondLineWrapper',
      'ThirdLineWrapper',
      'Logo',
      { name: 'FirstLineMarquee', path: 'FirstLineWrapper.Marquee' },
      { name: 'FirstLine', path: 'FirstLineWrapper.FirstLine' },
      { name: 'SecondLine', path: 'SecondLineWrapper.SecondLine' },
      { name: 'SecondLineMarquee', path: 'SecondLineWrapper.Marquee' },
      { name: 'ThirdLine', path: 'ThirdLineWrapper.ThirdLine' },
      { name: 'ThirdLineMarquee', path: 'ThirdLineWrapper.Marquee' }
    ];
  }

  _construct() {
    this._logoSpacing = this.styles.logoSpacing;
    this._logoW = this.styles.logoW;
    this._justify = this.styles.justify;
    this._marqueeProperties = this.styles.marqueeProperties;
    this._firstLineTextProperties = this.styles.firstLineTextProperties;
    this._secondLineTextProperties = this.styles.secondLineTextProperties;
    this._thirdLineTextProperties = this.styles.thirdLineTextProperties;
    this._getFocusScale = this.styles.focused.scale;
    this._getUnfocusScale = this.styles.unfocused.scale;
    this.w = this.styles.w;
    super._construct && super._construct();
  }

  _init() {
    if (this.originalW === undefined) {
      this.originalW = this.w;
    }
    if (this._focusScale === undefined) {
      this._focusScale = this._getFocusScale(this.originalW);
    }
    if (this._unfocusScale === undefined) {
      this._unfocusScale = this._getUnfocusScale(this.originalW);
    }
    this._update();
  }

  $loadedInlineContent(line) {
    if (line.ref && this.tag(line.ref + 'Wrapper')) {
      this.tag(line.ref + 'Wrapper').h = line.textHeight;
    }
    line.h = line.content && line.content.length ? line.textHeight : 0;
    this._Text.h = this._FirstLine.h + this._SecondLine.h + this._ThirdLine.h;
  }

  _update() {
    this._updateLines();
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

  get _linesArray() {
    return [
      this._firstLineObject,
      this._secondLineObject,
      this._thirdLineObject
    ];
  }

  get _firstLineObject() {
    return {
      wrapper: this._FirstLineWrapper,
      component: this._FirstLine,
      marquee: this._FirstLineMarquee,
      content: this._firstLine,
      textProps: this._firstLineTextProperties
    };
  }

  get _secondLineObject() {
    return {
      wrapper: this._SecondLineWrapper,
      component: this._SecondLine,
      marquee: this._SecondLineMarquee,
      content: this._secondLine,
      textProps: this._secondLineTextProperties
    };
  }

  get _thirdLineObject() {
    return {
      wrapper: this._ThirdLineWrapper,
      component: this._ThirdLine,
      marquee: this._ThirdLineMarquee,
      content: this._thirdLine,
      textProps: this._thirdLineTextProperties
    };
  }

  _updateLines() {
    this._linesArray.forEach(line => {
      line.component.justify = this._justify;
      line.component.content = line.content;
      line.component.textProperties = line.textProps;
      line.marquee.patch(this._marqueeProperties);
      line.marquee.w = this._textW;
      line.marquee.contentTexture = line.component.getTexture();
      line.marquee.smooth = { alpha: line.content ? 1 : 0 };
      line.wrapper.visible = line.content ? true : false;
    });
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

  get announce() {
    return `${this._FirstLine.announce}. ${this._SecondLine.announce}. ${this._ThirdLine.announce}.`;
  }

  get _textW() {
    const currentW = this.hasFocus() ? this._focusW : this.originalW;
    return currentW - (this.logo ? this.logoW + this.logoSpacing : 0);
  }

  get _focusW() {
    if (this.originalW) {
      const scale = this.hasFocus() ? this.focusScale : this.unfocusScale;
      return scale * this.originalW;
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

  set originalW(w) {
    this._originalW = w;
    this._update();
  }

  get originalW() {
    return this._originalW;
  }

  get h() {
    return (
      this.firstLineTextProperties.lineHeight +
      this.secondLineTextProperties.lineHeight +
      this.thirdLineTextProperties.lineHeight
    );
  }
}

export default withStyles(MetadataCard, styles);
