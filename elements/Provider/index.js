import lng from '@lightningjs/core';
import Base from '../../Base';
import Row from '../../layout/Row';
import { Icon, TextBox } from '..';
import styles from './Provider.styles.js';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';

class Provider extends Base {
  static get __componentName() {
    return 'Provider';
  }

  static _template() {
    return {
      Row: {
        type: Row
      }
    };
  }

  static get properties() {
    return ['disableRadius', 'counterText', 'providers', 'visibleCount'];
  }

  static get tags() {
    return ['Row'];
  }

  get providersHidden() {
    return this.providers.length - this.visibleCount;
  }

  _update() {
    this._updateProviders();
    this._updateCounter();
  }

  _updateProviders() {
    // Create an object to apply a radius to be re-used for each provider.
    const radiusPatch = this.disableRadius
      ? {}
      : {
          clipping: true,
          rect: true,
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: this._componentStyles.radius
          },
          rtt: true
        };
    const providerList = [];
    this.providers.slice(0, this.visibleCount).forEach(provider => {
      // Create a starting point for each provider icon.
      let patch = {
        centerInParent: true,
        ...radiusPatch
      };
      if (
        // If the provider is a pre-configured Icon, allow it to override the default behavior.
        provider.type === Icon &&
        provider.icon &&
        provider.w &&
        provider.h
      ) {
        // Maintain the ratio of the source icon while enforcing the height specified in the styles.
        const ratio = provider.w / provider.h;
        patch = {
          type: Icon,
          icon: provider.icon,
          w: this._componentStyles.itemSize * ratio,
          h: this._componentStyles.itemSize,
          ...patch
        };
      } else {
        // If the provider is just a string, create the rest of the Icon.
        patch = {
          type: Icon,
          icon: provider,
          w: this._componentStyles.itemSize,
          h: this._componentStyles.itemSize,
          ...patch
        };
      }
      providerList.push(patch);
    });
    this._Row.patch({
      itemSpacing: this._componentStyles.itemSpacing,
      items: providerList,
      h: this._componentStyles.itemSize
    });
  }

  _updateCounter() {
    if (this.providers.length > this.visibleCount) {
      const remaining = this.providersHidden;
      const counter = {
        w: this._componentStyles.itemSize,
        h: this._componentStyles.itemSize,
        centerInParent: true,
        Background: {
          w: this._componentStyles.itemSize,
          h: this._componentStyles.itemSize,
          texture: lng.Tools.getRoundRect(
            this._componentStyles.itemSize,
            this._componentStyles.itemSize,
            this._componentStyles.radius,
            0,
            null,
            true,
            this._componentStyles.counterBackgroundColor
          )
        },
        Text: {
          type: TextBox,
          mountX: 0.5,
          mountY: 0.5,
          x: this._componentStyles.itemSize / 2,
          y: this._componentStyles.itemSize / 2,
          content: this.counterText || `+${remaining}`,
          textStyle: this._componentStyles.counterTextProperties
        }
      };
      this._Row.appendItems([counter]);
    }
  }
}

export default withExtensions(withStyles(Provider, styles));
