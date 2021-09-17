import withStyles from '../../mixins/withStyles';
import InlineContent from '../../layout/InlineContent';
import MarqueeText from '../MarqueeText';
import Icon from '../Icon';
import Base from '../Base';
import { FadeShader } from '../../textures';
import styles from './MetadataCard.styles';

export default class MetadataCard extends withStyles(Base, styles) {
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
          SecondLine: {
            type: InlineContent,
            alpha: 1,
            rtt: true
          }
        },
        ThirdLineWrapper: {
          ThirdLine: {
            type: InlineContent,
            alpha: 1,
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
      },
      {
        name: 'ThirdLine',
        path: 'ThirdLineWrapper.ThirdLine'
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
      'thirdLine',
      'thirdLineTextProperties',
      'logo',
      'logoW',
      'logoSpacing',
      'originalW',
      'fadeWidth'
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
    this._focusScale = undefined;
    this._unfocusScale = undefined;
    this._fadeWidth = this.styles.fadeWidth;
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
    super._init();
  }

  $loadedInlineContent(line) {
    if (line.ref && this.tag(line.ref + 'Wrapper')) {
      this.tag(line.ref + 'Wrapper').h = line.textHeight;
    }
    line.h = line.content && line.content.length ? line.textHeight : 0;
    this._Text.h = this._FirstLine.h + this._SecondLine.h + this._ThirdLine.h;
    this._update();
  }

  _update() {
    this._updateWidth();
    this._updateFirstLine();
    this._updateSecondAndThirdLines();
    this._updateLogo();
    this._updateMarquee();
    this._updateShader();
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

  get _secondAndThirdLinesObjectsArray() {
    return [this._secondLineObject, this._thirdLineObject];
  }

  get _linesArray() {
    return [this._SecondLine, this._ThirdLine];
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

  _updateSecondAndThirdLines() {
    this._secondAndThirdLinesObjectsArray.forEach(line => {
      line.component.patch({
        justify: this._justify,
        content: line.content,
        textProperties: line.textProps
      });
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

  _updateShader() {
    this._linesArray.forEach(line => {
      if (line.finalW > this.w) {
        const logoOffset = this.logo ? this.logoW : 0;
        this.tag(line.ref + 'Wrapper').patch({
          w: this._focusW + this._fadeWidth / 2 - logoOffset,
          shader: {
            type: FadeShader,
            positionLeft: 0,
            positionRight: this._fadeWidth + logoOffset
          },
          rtt: true
        });
      }
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
    if (this.originalW && this.enabled) {
      const scale = this.hasFocus() ? this._focusScale : this._unfocusScale;
      return scale * this.originalW;
    }
    return this.w;
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
