import CardTitle from '../NewCards/CardTitle';
import withStyles from '../../mixins/withThemeStyles';
import styles from './AboutCard.styles';
import InlineContent from '../../layout/InlineContent';
import { withExtensions } from '../../mixins';

class AboutCard extends CardTitle {
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

  static get __componentName() {
    return 'AboutCard';
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
      contentSpacing: this._componentStyles.contentSpacing,
      y:
        this._Title.textStyle.lineHeight +
        this._componentStyles.paddingVertical +
        this._componentStyles.paddingFirstLine
    };
    this.patch({
      LeftIconTextContainer: {
        x: this._componentStyles.paddingHorizontal,
        ...iconTextContainerObject
      },
      RightIconTextContainer: {
        mountX: !this.iconLeft && !this.textLeft ? 0 : 1,
        x:
          !this.iconLeft && !this.textLeft
            ? this._componentStyles.paddingHorizontal
            : this.w - this._componentStyles.paddingHorizontal,
        ...iconTextContainerObject
      }
    });
  }

  _updateTitleStyle() {
    this._Title.patch({
      textStyle: {
        ...this._componentStyles.titleTextProperties,
        textColor: this.disabled
          ? this._componentStyles.textColorDisabled
          : this._componentStyles.titleTextProperties.textColor
      },
      y: this._componentStyles.paddingFirstLine,
      content: this.title.toUpperCase()
    });
  }

  _updateDescriptionPosition() {
    this._Description.patch({
      y: this._hasContent
        ? (this._RightIconTextContainer.y || this._LeftIconTextContainer.y) +
          (this.iconHeight ||
            this._LeftIconTextContainer.textProperties.lineHeight ||
            this._RightIconTextContainer.textProperties.lineHeight) +
          this._componentStyles.paddingVertical
        : this._Title.textStyle.lineHeight +
          this._componentStyles.paddingVertical +
          this._componentStyles.paddingFirstLine,
      textStyle: {
        ...this._componentStyles.descriptionTextProperties,
        textColor: this.disabled
          ? this._componentStyles.textColorDisabled
          : this._componentStyles.descriptionTextProperties.textColor
      },
      maxLines: this._hasContent ? 3 : 5,
      x: this._componentStyles.paddingHorizontal
    });
  }

  get _hasContent() {
    return Boolean(
      this.iconLeft || this.iconRight || this.textLeft || this.textRight
    );
  }

  _updateContent() {
    const contentLeft = [];
    this.iconLeft &&
      contentLeft.push({
        icon: this.iconLeft,
        color: this.disabled
          ? this._componentStyles.textColorDisabled
          : undefined
      });
    this.textLeft && contentLeft.push(this.textLeft);
    this._LeftIconTextContainer.content = contentLeft;
    this._LeftIconTextContainer.patch({
      textProperties: {
        ...this._componentStyles.textContainerProperties,
        textColor: this.disabled
          ? this._componentStyles.textColorDisabled
          : this._componentStyles.textContainerProperties.textColor
      }
    });
    const contentRight = [];
    this.iconRight &&
      contentRight.push({
        icon: this.iconRight,
        color: this.disabled
          ? this._componentStyles.textColorDisabled
          : undefined
      });
    this.textRight && contentRight.push(this.textRight);
    this._RightIconTextContainer.content = contentRight;
    this._RightIconTextContainer.textProperties = {
      ...this._componentStyles.textContainerProperties,
      textColor: this.disabled
        ? this._componentStyles.textColorDisabled
        : this._componentStyles.textContainerProperties.textColor
    };
  }
}

export default withExtensions(withStyles(AboutCard, styles));
