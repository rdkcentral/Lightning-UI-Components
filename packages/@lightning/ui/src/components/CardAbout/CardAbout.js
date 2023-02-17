import * as styles from './CardAbout.styles';
import { CardTitle, InlineContent } from '@lightning/ui-core';

export default class CardAbout extends CardTitle {
  static get __componentName() {
    return 'CardAbout';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    const properties = [
      ...super.properties,
      'iconRight',
      'textRight',
      'iconLeft',
      'textLeft'
    ];
    // Remove the 'details' property inherited from CardTitle
    const detailsIndex = properties.indexOf('details');
    if (detailsIndex > -1) {
      properties.splice(detailsIndex, 1);
    }
    return properties;
  }

  static get tags() {
    const tags = [
      ...super.tags,
      'LeftIconTextContainer',
      'RightIconTextContainer'
    ];
    //Remove the 'Details' tag inherited from CardTitle
    const detailsIndex = tags.indexOf('Details');
    if (detailsIndex > -1) {
      tags.splice(detailsIndex, 1);
    }
    return tags;
  }

  static _template() {
    return {
      ...super._template(),
      Details: undefined,
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

  _updateDetails() {}

  _updateDetailsPosition() {}

  _updateContainer() {
    const iconTextContainerObject = {
      contentSpacing: this.style.contentSpacing,
      y:
        this._Title.style.textStyle.lineHeight +
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
        style: {
          textStyle: {
            ...this.style.titleTextStyle,
            wordWrapWidth: this._calculateTextWidth()
          }
        },
        y: this.style.paddingFirstLine,
        content: this.title.toUpperCase()
      });
    }
  }

  _updateDescriptionPosition() {
    this._Description.patch({
      y: this._hasContent
        ? (this._RightIconTextContainer.y || this._LeftIconTextContainer.y) +
          (this._LeftIconTextContainer.style.textStyle.lineHeight ||
            this._RightIconTextContainer.style.textStyle.lineHeight) +
          this.style.paddingVertical
        : this._Title.style.textStyle.lineHeight +
          this.style.paddingVertical +
          this.style.paddingFirstLine,
      style: {
        textStyle: {
          ...this.style.descriptionTextStyle,
          wordWrapWidth: this._calculateTextWidth(),
          maxLines: this._hasContent ? 3 : 5
        }
      },
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
    // content for left icon
    if (this.textLeft || this.textLeft === 0) {
      // type check for number 1 to 100
      if (
        typeof this.textLeft === 'number' &&
        this.textLeft >= 0 &&
        this.textLeft <= 100
      ) {
        contentLeft.push(`${this.textLeft}%`);
      } else {
        // return warning if number is outside of range
        console.warn('textLeft must be a number between 0 and 100');
      }
      this._LeftIconTextContainer.content = contentLeft;
    }

    const contentRight = [];
    if (this.iconRight) {
      if (typeof this.iconRight === 'string') {
        contentRight.push({ icon: this.iconRight, ...iconStyle });
      } else {
        contentRight.push(this.iconRight);
      }
    }
    // content for right icon
    if (this.textRight || this.textRight === 0) {
      // type check for number 1 to 100
      if (
        typeof this.textRight === 'number' &&
        this.textRight >= 0 &&
        this.textRight <= 100
      ) {
        contentRight.push(`${this.textRight}%`);
      } else {
        // return warning if number is outside of range
        console.warn('textRight must be a number between 0 and 100');
      }
    }
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
