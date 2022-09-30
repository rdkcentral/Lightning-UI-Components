import CardTitle from '../Card/CardTitle';
import * as styles from './CardAbout.styles';
import InlineContent from '../../layout/InlineContent';
import { withExtensions } from '../../mixins';

class CardAbout extends CardTitle {
  static get __componentName() {
    return 'CardAbout';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [
      ...super.properties,
      'iconWidth',
      'iconHeight',
      'iconRight',
      'textRight',
      'iconLeft',
      'textLeft'
    ];
  }

  static get tags() {
    return [...super.tags, 'LeftIconTextContainer', 'RightIconTextContainer'];
  }

  static _template() {
    return {
      ...super._template(),
      LeftIconTextContainer: {
        type: InlineContent
      },
      RightIconTextContainer: {
        type: InlineContent
      }
    };
  }

  _update() {
    super._update();
    this._updateTitleStyle();
    this._updateContainer();
    this._updateContent();
  }

  _updateContainer() {
    const iconTextContainerObject = {
      iconW: this.iconWidth,
      iconH: this.iconHeight,
      contentSpacing: this.style.contentSpacing,
      y:
        this._Title.textStyle.lineHeight +
        this.style.paddingVertical +
        this.style.paddingFirstLine
    };
    this.patch({
      LeftIconTextContainer: {
        x: this.style.paddingHorizontal,
        iconY: 0,
        ...iconTextContainerObject
      },
      RightIconTextContainer: {
        mountX: !this.iconLeft && !this.textLeft ? 0 : 1,
        iconY: 0,
        x:
          !this.iconLeft && !this.textLeft
            ? this.style.paddingHorizontal
            : this.w - this.style.paddingHorizontal,
        ...iconTextContainerObject
      }
    });
  }

  _updateTitleStyle() {
    if (typeof this.title === 'string') {
      this._Title.patch({
        textStyle: this.style.titleTextProperties,
        y: this.style.paddingFirstLine,
        content: this.title.toUpperCase()
      });
    }
  }

  _updateDescriptionPosition() {
    this._Description.patch({
      y: this._hasContent
        ? (this._RightIconTextContainer.y || this._LeftIconTextContainer.y) +
          (this.iconHeight ||
            this._LeftIconTextContainer.style.textStyle.lineHeight ||
            this._RightIconTextContainer.style.textStyle.lineHeight) +
          this.style.paddingVertical
        : this._Title.textStyle.lineHeight +
          this.style.paddingVertical +
          this.style.paddingFirstLine,
      textStyle: this.style.descriptionTextProperties,
      maxLines: this._hasContent ? 3 : 5,
      x: this.style.paddingHorizontal
    });
  }

  get _hasContent() {
    return Boolean(
      this.iconLeft || this.iconRight || this.textLeft || this.textRight
    );
  }

  _updateContent() {
    const textStyle = { textStyle: this.style.textContainerProperties };
    const iconStyle = { alpha: this.style.alpha };

    const contentLeft = [];
    this.iconLeft && contentLeft.push({ icon: this.iconLeft, ...iconStyle });
    this.textLeft && contentLeft.push(this.textLeft);
    this._LeftIconTextContainer.content = contentLeft;
    this._LeftIconTextContainer.style = textStyle;

    const contentRight = [];
    this.iconRight && contentRight.push({ icon: this.iconRight, ...iconStyle });
    this.textRight && contentRight.push(this.textRight);
    this._RightIconTextContainer.content = contentRight;
    this._RightIconTextContainer.style = textStyle;
  }
}

export default withExtensions(CardAbout);
