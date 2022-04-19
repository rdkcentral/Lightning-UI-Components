import InlineContent from '../../layout/InlineContent';
import MarqueeText from '../MarqueeText';
import Base from '../Base';
import { FadeShader } from '../../textures';
import { withStyles } from '../../mixins';
import styles from './MetadataTile.styles';

export default class MetadataTile extends withStyles(Base, styles) {
  static _template() {
    return {
      Text: {
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
            type: InlineContent
          }
        }
      }
    };
  }

  static get properties() {
    return [
      'firstLine',
      'secondLine',
      'justify',
      'fadeWidth',
      'marqueeProperties',
      'firstLineTextProperties',
      'secondLineTextProperties',
      'focusScaleConst',
      'unfocusScaleConst'
    ];
  }

  static get tags() {
    return [
      'Text',
      'FirstLineWrapper',
      'SecondLineWrapper',
      { name: 'FirstLineMarquee', path: 'FirstLineWrapper.Marquee' },
      { name: 'FirstLine', path: 'FirstLineWrapper.FirstLine' },
      { name: 'SecondLine', path: 'SecondLineWrapper.SecondLine' }
    ];
  }

  _construct() {
    super._construct();
    this._justify = this.styles.justify;
    this._marqueeProperties = this.styles.marqueeProperties;
    this._firstLineTextProperties = this.styles.firstLineTextProperties;
    this._secondLineTextProperties = this.styles.secondLineTextProperties;
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
    super._init();
  }

  $loadedInlineContent(line) {
    if (line.ref && this.tag(line.ref + 'Wrapper')) {
      this.tag(line.ref + 'Wrapper').h = line.textHeight;
      this.tag(line.ref + 'Wrapper').alpha = 1;
    }
    line.h = line.content ? line.textHeight : 0;
    this._Text.h = this._FirstLine.h + this._SecondLine.h;
    this._requestUpdateDebounce();
  }

  _update() {
    this._updateText();
    this._updatePosX();
    this._updateLines();
  }

  _updateText() {
    if (this._smooth) {
      this._Text.smooth = { w: this._textW };
    } else {
      this._Text.w = this._textW;
    }
  }

  _updatePosX() {
    if (this.secondLine !== this._SecondLine.content) {
      this._SecondLineWrapper.alpha = 0.001;
    }
    if (this.secondLine && this._textW && this._SecondLine.finalW) {
      const x =
        this._textW > this._SecondLine.finalW
          ? Math.abs((this._textW - this._SecondLine.finalW) / 2)
          : 0;
      if (this.smooth) {
        this._SecondLine.smooth = { x };
      } else {
        this._SecondLine.x = x;
      }
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
    return [this._firstLineObject, this._secondLineObject];
  }

  get _firstLineObject() {
    return {
      wrapper: this._FirstLineWrapper,
      component: this._FirstLine,
      marquee: this._FirstLineMarquee,
      content: this.firstLine,
      textProps: this.firstLineTextProperties
    };
  }

  get _secondLineObject() {
    return {
      wrapper: this._SecondLineWrapper,
      component: this._SecondLine,
      content: this.secondLine,
      textProps: this.secondLineTextProperties
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
    return [this._FirstLine.announce, this._SecondLine.announce];
  }

  get _textW() {
    return this._focusW; // MetadataCard has a logo so textW is different from focusW
  }

  get _focusW() {
    const scale =
      (this.hasFocus() ? this.focusScaleConst : this.unfocusScaleConst) || 1;
    return this.w * scale;
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
