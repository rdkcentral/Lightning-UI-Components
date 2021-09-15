import InlineContent from '../../layout/InlineContent';
import MarqueeText from '../MarqueeText';
import Base from '../Base';
import { FadeShader } from '../../textures';
import { withStyles } from '../../mixins';
import styles from './MetadataTile.styles';

export default class MetadataTile extends withStyles(Base, styles) {
  static _template() {
    return {
      flex: { direction: 'column', justifyContent: 'center' },
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
          type: InlineContent,
          alpha: 1,
          rtt: true
        }
      }
    };
  }
  _construct() {
    this._justify = this.styles.justify;
    this._marqueeProperties = this.styles.marqueeProperties;
    this._firstLineTextProperties = this.styles.firstLineTextProperties;
    this._secondLineTextProperties = this.styles.secondLineTextProperties;
    this._getFocusScale = this.styles.focused.scale;
    this._getUnfocusScale = this.styles.unfocused.scale;
    this.w = this.styles.w;
    this._fadeWidth = this.styles.fadeWidth;
    super._construct();
  }

  static get tags() {
    return [
      'Text',
      'FirstLineWrapper',
      'SecondLineWrapper',
      {
        name: 'FirstLineMarquee',
        path: 'FirstLineWrapper.Marquee'
      },
      {
        name: 'FirstLine',
        path: 'FirstLineWrapper.FirstLine'
      },
      {
        name: 'SecondLine',
        path: 'SecondLineWrapper.SecondLine'
      }
    ];
  }
  static get properties() {
    return [
      'focusScale',
      'justify',
      'unfocusScale',
      'marqueeProperties',
      'firstLine',
      'firstLineTextProperties',
      'secondLine',
      'secondLineTextProperties',
      'originalW',
      'fadeWidth'
    ];
  }

  _init() {
    if (this.originalW === undefined) {
      this.originalW = this.w;
    }
    if (this._focusScale === undefined) {
      this._focusScale = this._getFocusScale(this.originalW, this.h);
    }
    if (this._unfocusScale === undefined) {
      this._unfocusScale = this._getUnfocusScale(this.originalW, this.h);
    }
    this._update();
  }

  $loadedInlineContent(line) {
    if (line.ref === this._FirstLine.ref) {
      this._FirstLineWrapper.h = line.textHeight;
    }
    line.h = line.textHeight;
    this._update();
  }

  _update() {
    this._updateWidth();
    this._updateFirstLine();
    this._updateSecondLine();
    this._updateMarquee();
    this._updateShader();
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  _updateWidth() {
    const secondLineXPosition =
      this._focusW > this._SecondLine.finalW
        ? Math.abs((this._focusW - this._SecondLine.finalW) / 2)
        : 0;
    if (this.smooth) {
      this.smooth = { w: this._focusW };
      this._SecondLine.smooth = { x: secondLineXPosition };
    } else {
      this.w = this._focusW;
      this._SecondLine.x = secondLineXPosition;
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

  _updateFirstLine() {
    this._firstLineObject.component.patch({
      justify: this._justify,
      content: this._firstLineObject.content,
      textProperties: this._firstLineObject.textProps
    });
    this._firstLineObject.marquee.patch({
      ...this.marqueeProperties,
      w: this._textW,
      contentTexture: this._firstLineObject.component.getTexture(),
      smooth: { alpha: this._firstLineObject.content ? 1 : 0 }
    });
    this._firstLineObject.wrapper.visible = this._firstLineObject.content
      ? true
      : false;
  }
  _updateSecondLine() {
    this._secondLineObject.component.patch({
      justify: this._justify,
      content: this._secondLineObject.content,
      textProperties: this._secondLineObject.textProps
    });
  }
  _updateShader() {
    if (this._SecondLine.finalW > this.w) {
      this._SecondLineWrapper.patch({
        w: this._focusW + this._fadeWidth / 2,
        h: this._SecondLine.h,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this._fadeWidth
        },
        rtt: true
      });
    } else {
      this._SecondLineWrapper.shader = undefined;
    }
  }
  get announce() {
    return `${this._FirstLine.announce}. ${this._SecondLine.announce}.`;
  }

  get _textW() {
    return this.hasFocus() ? this._focusW : this.originalW;
  }

  get _focusW() {
    if (this.originalW) {
      const scale = this.hasFocus() ? this._focusScale : this._unfocusScale;
      return scale * this.originalW;
    }
    return this.w;
  }

  get h() {
    return (
      this.firstLineTextProperties.lineHeight +
      this.secondLineTextProperties.lineHeight
    );
  }

  set h(h) {
    console.warn('warning: cannot set property "h" of MetadataTile');
  }
}
