import Surface from '../../elements/Surface';
import withStyles from '../../mixins/withThemeStyles';
import { withExtensions } from '../../mixins';
import styles from './NewCard.styles';
import TextBox from '../../elements/TextBox';

class NewCard extends Surface {
  static _template() {
    return {
      ...super._template(),
      Title: {
        type: TextBox,
        signals: {
          textBoxChanged: '_requestUpdateDebounce'
        }
      }
    };
  }

  static get __componentName() {
    return 'NewCard';
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return [...super.tags, 'Title'];
  }

  _update() {
    super._update();
    this._updateTitle();
    this._updateTitlePosition();
    this._changeBackgroundColor();
  }

  _changeBackgroundColor() {
    if (this._disabled) {
      this.patch({
        style: {
          componentStyles: {
            Surface: {
              backgroundColorDisabled:
                this._componentStyles.disabledBackgroundColor
            }
          }
        }
      });
    } else if (this.hasFocus() && !this._disabled) {
      this.patch({
        style: {
          componentStyles: {
            Surface: {
              backgroundColorFocused:
                this._componentStyles.backgroundColorFocused
            }
          }
        }
      });
    } else if (!this.hasFocus() && !this._disabled) {
      this.patch({
        style: {
          componentStyles: {
            Surface: {
              backgroundColorUnfocused:
                this._componentStyles.backgroundColorUnfocused
            }
          }
        }
      });
    }
  }

  _updateTitle() {
    this._Title.patch({
      content: this.title,
      textStyle: {
        ...this._componentStyles.titleTextProperties,
        textColor: this.disabled
          ? this._componentStyles.textColorDisabled
          : this._componentStyles.titleTextProperties.textColor
      },
      wordWrapWidth: this._calculateTextWidth()
    });
  }

  _calculateTextWidth() {
    return this.w - this._componentStyles.paddingHorizontal * 2;
  }

  _updateTitlePosition() {
    this._Title.x = this._componentStyles.paddingHorizontal;
    this._Title.y = this._componentStyles.paddingVertical;
  }
}

export default withExtensions(withStyles(NewCard, styles));
