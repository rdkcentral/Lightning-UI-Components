import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import InlineContent from '../InlineContent';
import MarqueeText from '../MarqueeText';

export const styles = theme => ({
  w: 410,
  justify: 'center',
  marqueeProperties: {
    centerAlign: true
  },
  firstLineTextProperties: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary,
    textAlign: 'center',
    maxLines: 1
  },
  secondLineTextProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary,
    maxLinesSuffix: '...',
    textAlign: 'center',
    maxLines: 1
  },
  unfocused: {
    scale: () => 1
  },
  focused: {
    scale: theme.getFocusScale
  }
});

class MetadataTile extends lng.Component {
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
        Marquee: {
          type: MarqueeText,
          alpha: 0
        },
        SecondLine: {
          type: InlineContent,
          alpha: 0.001,
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
    if (line.ref === this._FirstLine.ref) {
      this._FirstLineWrapper.h = line.textHeight;
    }
    line.h = line.textHeight;
  }

  _update() {
    this._updateLines();
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

  _updateLines() {
    const lines = [
      {
        wrapper: this._FirstLineWrapper,
        component: this._FirstLine,
        marquee: this._FirstLineMarquee,
        content: this._firstLine,
        textProps: this._firstLineTextProperties
      },
      {
        wrapper: this._SecondLineWrapper,
        component: this._SecondLine,
        marquee: this._SecondLineMarquee,
        content: this._secondLine,
        textProps: this._secondLineTextProperties
      }
    ];

    lines.forEach(line => {
      // if losing focus, we don't want the lines to "pop" back into place
      // as the tile width chages, but we want them to start in place when alphaing on
      line.marquee.shouldSmooth = !this.hasFocus();

      line.component.justify = this._justify;
      line.component.content = line.content;
      line.component.textProperties = line.textProps;
      line.marquee.patch(this._marqueeProperties);
      line.marquee.contentTexture = line.component.getTexture();
      line.marquee.w = this._textW;
      line.marquee.smooth = { alpha: line.content ? 1 : 0 };
      line.wrapper.visible = line.content ? true : false;
    });
  }

  get announce() {
    return `${this._FirstLine.announce}. ${this._SecondLine.announce}.`;
  }

  get _textW() {
    return this.hasFocus() ? this._focusW : this.originalW;
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
      this.secondLineTextProperties.lineHeight
    );
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

  get _SecondLineWrapper() {
    return this.tag('SecondLineWrapper');
  }

  get _SecondLineMarquee() {
    return this._SecondLineWrapper.tag('Marquee');
  }

  get _SecondLine() {
    return this._SecondLineWrapper.tag('SecondLine');
  }
}

export default withStyles(MetadataTile, styles);
