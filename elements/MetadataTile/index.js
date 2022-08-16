import InlineContent from '../../layout/InlineContent';
import Marquee from '../Marquee';
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
            type: Marquee,
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
    this.queueRequestUpdate();
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

  _resolveSubtitle({ h }) {
    this._subtitlePromiseResolver && this._subtitlePromiseResolver();
    if (this.subtitle && !this.description) {
      this._SubtitleWrapper.h = h;
      this._SubtitleWrapper.alpha = 1;
    } else {
      this._SubtitleWrapper.h = 0;
    }
  }
  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [this._FirstLine.announce, this._SecondLine.announce];
  }

  _textH() {
    const titleH = (this.title && this._Title && this._Title.h) || 0;
    const subtitleH =
      (this.subtitle &&
        this._Subtitle &&
        this._Subtitle.visible &&
        this._SubtitleWrapper.h) ||
      0;
    const descriptionH =
      (this.description && this._Description && this._Description.h) || 0;
    return titleH + subtitleH + descriptionH;
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
