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
    this._updateCollapseStatus();
    this._updatePrefixStyle();
    super._update();
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
        this.justify = 'left';
        this._updatePrefixObj(this.logo, {
          style: { color: undefined, ...this.style.logoStyles }
        });
      } else if (this.icon) {
        this.justify = 'center';
        this._updatePrefixObj(this.icon, { style: this.style.iconStyles });
      }
    } else {
      this.justify = 'center';
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
    return this.shouldCollapse && this.mode !== 'focused';
  }
}

export default withExtensions(Control);
