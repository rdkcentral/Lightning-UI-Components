import Base from '../Base';
import styles from './MetadataCard.styles';
import withStyles from '../../mixins/withStyles';
import InlineContent from '../../layout/InlineContent';
import MarqueeText from '../MarqueeText';
import Icon from '../Icon';
import { FadeShader } from '../../textures';

export default class MetadataCard extends withStyles(Base, styles) {
  static _template() {
    return {
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
          SecondLine: {
            type: InlineContent
          }
        },
        ThirdLineWrapper: {
          ThirdLine: {
            type: InlineContent
          }
        }
      },
      Logo: {
        type: Icon
      }
    };
  }

  static get properties() {
    return [
      'logo',
      'logoW',
      'logoSpacing',
      'firstLine',
      'secondLine',
      'thirdLine',
      'justify',
      'fadeWidth',
      'marqueeProperties',
      'firstLineTextProperties',
      'secondLineTextProperties',
      'thirdLineTextProperties',
      'focusScaleConst',
      'unfocusScaleConst'
    ];
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
      { name: 'ThirdLine', path: 'ThirdLineWrapper.ThirdLine' }
    ];
  }

  _construct() {
    super._construct();
    this._logoSpacing = this.styles.logoSpacing;
    this._logoW = this.styles.logoW;
    this._justify = this.styles.justify;
    this._marqueeProperties = this.styles.marqueeProperties;
    this._firstLineTextProperties = this.styles.firstLineTextProperties;
    this._secondLineTextProperties = this.styles.secondLineTextProperties;
    this._thirdLineTextProperties = this.styles.thirdLineTextProperties;
    this._fadeWidth = this.styles.fadeWidth;
    this._w = this.styles.w;
  }

  _init() {
    if (this.focusScaleConst === undefined) {
      this._focusScaleConst = this._getFocusScale(this.w, this.h);
    }
    if (this.unfocusScaleConst === undefined) {
      this._unfocusScaleConst = this._getUnfocusScale(this.w, this.h);
    }
    this._Logo.on('txLoaded', this._requestUpdateDebounce.bind(this));
    super._init();
  }

  $loadedInlineContent(line) {
    if (line.ref && this.tag(line.ref + 'Wrapper')) {
      this.tag(line.ref + 'Wrapper').h = line.textHeight;
      this.tag(line.ref + 'Wrapper').alpha = 1;
    }
    line.h = line.content ? line.textHeight : 0;
    this._Text.h = this._FirstLine.h + this._SecondLine.h + this._ThirdLine.h;
    this._requestUpdateDebounce();
  }

  _update() {
    this._updateLogo();
    this._updateText();
    this._updateLines();
  }

  _updateLogo() {
    this._Logo.icon = this.logo;
    this._Logo.w = this.logoW;

    const alpha = this.logo ? 1 : 0;
    const logoX = this._textW + this.logoSpacing;
    const logoY =
      this._Text.h > this._Logo.finalH
        ? (this._Text.h - this._Logo.finalH) / 2
        : (this._Logo.finalH - this._Text.h) / 2;

    if (this._smooth) {
      this._Logo.smooth = { alpha, x: logoX, y: logoY };
    } else {
      this._Logo.patch({ alpha, x: logoX, y: logoY });
    }
  }

  _updateText() {
    if (this._smooth) {
      this._Text.smooth = { w: this._textW };
    } else {
      this._Text.w = this._textW;
    }
  }

  _updateLines() {
    this._linesArray.forEach(line => {
      line.component.patch({
        justify: this._justify,
        content: line.content,
        textProperties: line.textProps
      });
      if (line.marquee) {
        line.marquee.patch({
          ...this._marqueeProperties,
          w: this._textW,
          contentTexture: line.component.getTexture()
        });
        line.marquee.smooth = { alpha: line.content ? 1 : 0 };
        this._updateMarquee(line.marquee);
      } else {
        this._updateShader(line);
      }
      line.wrapper.visible = line.content ? true : false;
    });
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
      content: this._secondLine,
      textProps: this._secondLineTextProperties
    };
  }

  get _thirdLineObject() {
    return {
      wrapper: this._ThirdLineWrapper,
      component: this._ThirdLine,
      content: this._thirdLine,
      textProps: this._thirdLineTextProperties
    };
  }

  _updateMarquee(marquee) {
    if (this.hasFocus()) {
      marquee.startScrolling && marquee.startScrolling(this._textW);
    } else {
      marquee.stopScrolling && marquee.stopScrolling(this._textW);
    }
  }

  _updateShader(line) {
    if (line.component.finalW > this._textW) {
      line.wrapper.patch({
        w: this._textW + this.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.fadeWidth
        },
        rtt: true
      });
    } else {
      line.wrapper.shader = undefined;
    }
  }
  set announce(announce) {
    super._announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [
      this._FirstLine.announce,
      this._SecondLine.announce,
      this._ThirdLine.announce
    ];
  }

  get _textW() {
    return this._focusW - (this.logo ? this.logoW + this.logoSpacing : 0);
  }

  get _focusW() {
    const scale =
      (this.hasFocus() ? this.focusScaleConst : this.unfocusScaleConst) || 1;
    return this.w * scale;
  }

  get h() {
    return (
      this.firstLineTextProperties.lineHeight +
      this.secondLineTextProperties.lineHeight +
      this.thirdLineTextProperties.lineHeight
    );
  }

  set h(h) {
    console.warn('warning: cannot set property "h" of MetadataCard');
  }
}
