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
      contentSpacing: this.style.contentSpacing,
      y:
        this._Title.textStyle.lineHeight +
        this.style.paddingVertical +
        this.style.paddingFirstLine,
      style: this.style.inlineContentStyle
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
    const iconStyle = { alpha: this.style.alpha };

    const contentLeft = [];
    if (this.iconLeft) {
      if (typeof this.iconLeft === 'string') {
        contentLeft.push({ icon: this.iconLeft, ...iconStyle });
      } else {
        contentLeft.push(this.iconLeft);
      }
    }
    this.textLeft && contentLeft.push(this.textLeft);
    this._LeftIconTextContainer.content = contentLeft;

    const contentRight = [];
    if (this.iconRight) {
      if (typeof this.iconRight === 'string') {
        contentRight.push({ icon: this.iconRight, ...iconStyle });
      } else {
        contentRight.push(this.iconRight);
      }
    }
    this.textRight && contentRight.push(this.textRight);
    this._RightIconTextContainer.content = contentRight;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._LeftIconTextContainer && this._LeftIconTextContainer.announce,
        this._RightIconTextContainer && this._RightIconTextContainer.announce,
        this._Description && this._Description.announce
      ]
    );
  }
}

export default withExtensions(CardAbout);
