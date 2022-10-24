import { ButtonSmall } from '../Button';
import Icon from '../Icon';
import { withExtensions } from '../../mixins';
import * as styles from './Control.styles';

class Control extends ButtonSmall {
  static get __componentName() {
    return 'Control';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'icon', 'logo', 'shouldCollapse'];
  }

  _update() {
    // ordering this way to make sure that this._Title is defined so the title visibility can be set properly when _updateCollapseStatus is called
    this._updatePrefixStyle();
    super._update();
    this._updateCollapseStatus();
  }

  _updateCollapseStatus() {
    if (this._Title) {
      this._Title.visible = !this._collapse;
    }
  }

  // if user provides styling of either logo or icon, apply the style to the respected element
  _updatePrefixStyle() {
    if (this._prefix) {
      // checking logo first since it takes precedence
      if (this.logo) {
        this._updatePrefixObj(this.logo, {
          style: { color: undefined, ...this.style.logoStyles }
        });
      } else if (this.icon) {
        this._updatePrefixObj(this.icon, { style: this.style.iconStyles });
      }
    }
  }

  // optimization
  // sets Title's x and mountX values
  _patchTitle(x, mountX) {
    this._Title.patch({
      x,
      mountX
    });
  }

  _updateContentPosition() {
    if (this._prefix && this._Title) {
      // placing prefix always to the left if title is present
      // justification should only apply to title in this case
      this._Content.patch({
        mountX: 0,
        x: this._paddingLeft
      });

      switch (this._justify) {
        case 'left':
          this._patchTitle(0, 0);
          break;
        case 'right':
          if (this.w < this._Prefix.w + this._Title.w) {
            this._patchTitle(0, 0);
          } else {
            const leftOverSpace =
              this.w -
              (this._paddingLeft +
                this._paddingRight +
                this._Prefix.w +
                this.style.titlePadding);

            this._patchTitle(leftOverSpace, 1);
          }
          break;
        case 'center':
        default:
          if (this.fixed) {
            // if the component width is less than the prefix and title then we go to the default padding on left and right of title
            if (this.w < this._Prefix.w + this._Title.w) {
              this._patchTitle(0, 0);
            } else {
              const middle =
                (this.w -
                  (this._paddingLeft + this._Prefix.w + this._paddingRight)) /
                2;
              this._patchTitle(middle, 0.5);
            }
          } else {
            const middle =
              (this.w -
                (this._paddingLeft +
                  this._Prefix.w +
                  this.style.titlePadding +
                  this._paddingRight)) /
              2;
            this._patchTitle(middle, 0.5);
          }
          break;
      }
    } else {
      super._updateContentPosition();
      this._Title && this._patchTitle(0, 0); // RESET Title back to original position
    }
  }

  // does nothing if a prefix property is passed in for Control
  _setPrefix() {
    return;
  }

  // does nothing if a suffix property is passed in for Control
  _setSuffix() {
    return;
  }

  // optimization
  // turning prefix property setter into a function since functionality is repeated
  _updatePrefixObj(icon, props = {}) {
    this._prefix = {
      type: Icon,
      icon,
      ...props
    };
  }

  _setIcon(icon) {
    if (!this.logo) {
      // if icon is defined then set it otherwise set prefix to be undefined
      if (icon) {
        this._updatePrefixObj(icon, { style: this.style.iconStyles });
      } else {
        this._prefix = icon;
      }
    }
    return icon;
  }

  _setLogo(logo) {
    if (logo) {
      this._updatePrefixObj(logo, {
        style: { color: undefined, ...this.style.logoStyles }
      });
      // if logo is set to undefined but an icon is provided, display the icon
    } else if (this.icon) {
      this._updatePrefixObj(this.icon);
    } else {
      this._prefix = logo;
    }
    return logo;
  }

  get _paddingLeft() {
    return this.logo ? this.style.paddingXNoTitle : this.style.paddingX;
  }

  get _paddingRight() {
    return this.logo && (!this._hasTitle || this._collapse)
      ? this.style.paddingXNoTitle
      : this.style.paddingX;
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  get _announceComponentName() {
    return Control.__componentName;
  }
}

export default withExtensions(Control);
