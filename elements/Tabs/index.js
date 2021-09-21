import lng from '@lightningjs/core';
import Row from '../../layout/Row';
import Base from '../Base';
import Icon from '../Icon';
import { Line } from '../../textures';
import withStyles from '../../mixins/withStyles';
import { tabStyles } from './Tabs.styles';

export class TabBase extends Base {
  static _template() {
    return {
      flex: {
        direction: 'column'
      },
      Tab: {
        type: Base,
        flex: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        Icon: {
          type: Icon
        },
        Text: { text: this.styles.text }
      }
    };
  }

  static get properties() {
    return [
      'barLength',
      'content',
      'focusedIconColor',
      'focusedTextColor',
      'icon',
      'iconColor',
      'iconHeight',
      'iconSize',
      'iconWidth',
      'selectedIconColor',
      'selectedTextColor',
      'textColor',
      'title'
    ];
  }

  static get tags() {
    return [
      'Tab',
      {
        name: 'Icon',
        path: 'Tab.Icon'
      },
      {
        name: 'Text',
        path: 'Tab.Text'
      }
    ];
  }

  _construct() {
    super._construct();
    this._iconSize = 'medium';
    this._iconColor = this._iconColor || this.styles.icon.color;
    this._iconStyles = this.styles.icon;
    this._textColor = this._textColor || this.styles.text.color;
    this._textStyles = this.styles.text;
    this._focusedIconColor =
      this._focusedIconColor || this.styles.focused.icon.color;
    this._focusedTextColor =
      this._focusedTextColor || this.styles.focused.text.color;
    this._selectedIconColor =
      this._selectedIconColor || this.styles.selected.icon.color;
    this._selectedTextColor =
      this._selectedTextColor || this.styles.selected.text.color;
  }

  _init() {
    this.selected = this._Tab;
    this._Tab.selected = true;
    this._updateColor();
    this._updateContent();
    this._Text.on('txLoaded', () => {
      this._dynamicBarLength = this._Text.renderWidth;
      this.signal('tabLoaded');
    });
  }

  _focus() {
    this._updateColor();
    this._updateContent();
  }

  _unfocus() {
    this._updateColor();
    this._updateContent();
  }

  _update() {
    if (this.icon) {
      if (this.iconWidth && this.iconHeight) {
        this._Icon.patch({
          flexItem: this._iconStyles.flexParams,
          icon: this.icon,
          w: this.iconWidth,
          h: this.iconHeight
        });
      } else {
        const size =
          this._iconStyles.sizes[this.iconSize] ||
          this._iconStyles.sizes.medium;
        this._Icon.patch({
          flexItem: this._iconStyles.flexParams,
          icon: this.icon,
          w: size,
          h: size
        });
      }
    }
    this._tabHeight = this.h;
    if (this._content) {
      const { h, y } = this.childList.last;
      this.h = this.h + h || 0 + y || 0;
    }
  }

  _updateColor() {
    const tabFocused = this.hasFocus() && this._Tab.selected;
    const contentFocused = this.hasFocus() && !this._Tab.selected;
    if (tabFocused) {
      this._Icon.smooth = {
        color: this.focusedIconColor
      };
      this._Text.smooth = {
        color: this.focusedTextColor
      };
    } else if (contentFocused || this.isSelected) {
      this._Icon.smooth = {
        color: this.selectedIconColor
      };
      this._Text.smooth = {
        color: this.selectedTextColor
      };
    } else {
      this._Icon.smooth = { color: this.iconColor };
      this._Text.smooth = { color: this.textColor };
    }
  }

  _updateContent() {
    if (this._content) {
      this.childList.last.smooth = {
        alpha: this.hasFocus() || this.isSelected ? 1 : 0
      };
    }
  }

  select() {
    this._selected = true;
    this._updateColor();
    this._updateContent();
  }

  deselect() {
    this._selected = false;
    this._updateColor();
    this._updateContent();
  }

  _setContent(content) {
    this.patch(content, true);
    return content;
  }

  get announce() {
    return this.title + ', Tab';
  }

  get isSelected() {
    return this._selected;
  }

  _setTitle(title) {
    this._Text.text = title;
    return title;
  }

  _handleUp() {
    if (this._content) {
      this._Tab.selected = true;
      this.selected = this._Tab;
      this._updateColor();
      return true;
    }
    return false;
  }

  _handleDown() {
    if (this._content) {
      this._Tab.selected = false;
      this.selected = this.childList.last;
      this._updateColor();
      return true;
    }
    return false;
  }

  _getFocused() {
    return this.selected;
  }
}

export class Tab extends withStyles(TabBase, tabStyles) {}

export default class TabBar extends Base {
  static _template() {
    return {
      signals: {
        tabLoaded: true
      },
      Container: {
        type: Row,
        signals: {
          selectedChange: true
        },
        zIndex: 1
      },
      FocusBar: {
        alpha: 0.48,
        mountX: 0.5,
        color: 0xffffffff,
        zIndex: 2
      }
    };
  }

  static get properties() {
    return [
      'barLength',
      'barSpacing',
      'dynamicBar',
      'itemSpacing',
      'wrapSelected'
    ];
  }

  static get tags() {
    return ['Container', 'FocusBar'];
  }

  _construct() {
    super._construct();
    this._barSpacing = 4;
    this._barLength = 0;
    this._w = this.stage.w;

    // no setters/getters
    this.tabHeight = 0;
    this.tabWidth = 0;
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  _init() {
    this._FocusBar.transition('w').on('finish', () => {
      this._FocusBar.texture.w = this._FocusBar.w;
    });
  }

  _firstActive() {
    this._update();
  }

  _update() {
    this._whenEnabled.then(() => {
      this._Container.patch({
        w: this.w,
        h: this.h
      });
      if (this._Container.selected) {
        const { selected } = this._Container;
        const x = selected.transition('x').targetValue + selected.w / 2;
        const y =
          Math.max(...this.tabs.map(tab => tab._tabHeight)) + this.barSpacing;

        let barLength;
        if (this.dynamicBar) {
          barLength = selected._dynamicBarLength;
        } else {
          barLength =
            selected.barLength && selected.barLength !== this.barLength
              ? selected.barLength
              : this.barLength;
        }

        if (barLength) {
          this._FocusBar.patch({
            x,
            y,
            w: barLength,
            texture: {
              type: Line,
              rounded: true,
              w: barLength,
              h: 4
            }
          });
        }
      }
    });
  }

  _getFocused() {
    return this._Container;
  }

  _focus() {
    this._FocusBar.alpha = 0.96;
  }

  _unfocus() {
    const { selected } = this._Container;
    const prevSelected = this._Container.items.find(item => item.isSelected);

    if (prevSelected) prevSelected.deselect();
    if (selected) selected.select();
    this._FocusBar.alpha = 0.48;
  }

  selectedChange(selected, prevSelected) {
    if (prevSelected) prevSelected.deselect();
    if (selected) selected.select();
    if (selected.barLength && selected.barLength !== this.barLength) {
      this._FocusBar.setSmooth('w', selected.barLength);
    }

    let barLength;
    if (this.dynamicBar) {
      barLength = selected._dynamicBarLength;
    } else {
      barLength =
        selected.barLength && selected.barLength !== this.barLength
          ? selected.barLength
          : this.barLength;
    }

    if (barLength) {
      const selectedX = selected._transitions.x
        ? selected.transition('x').targetValue
        : selected.x;
      this._FocusBar.smooth = {
        x: selectedX + selected.w / 2,
        w: barLength
      };
    }
    this.fireAncestors('$tabChanged', selected, this);
  }

  get selected() {
    return this._Container.selected;
  }

  get tabs() {
    return this._Container.items;
  }

  set tabs(tabs) {
    // need to wait for tabWidth and tabHeight to be set
    this._whenEnabled.then(() => {
      this._Container.items = tabs.map(tab => ({
        ...tab,
        w: tab.w || this.tabWidth,
        h: tab.h || this.tabHeight
      }));
      let xPos = 0;
      this._Container.items.forEach((tab, tabIndex) => {
        const x = tabIndex ? -xPos : 0;
        if (tab._content) {
          tab.childList.last.x = x;
        }
        xPos += tab.w;
      });
      this._Container.selected.select();
      this._update();
    });
  }

  _setItemSpacing(itemSpacing) {
    this._Container.itemSpacing = itemSpacing;
    return itemSpacing;
  }

  _setWrapSelected(wrapSelected) {
    this._Container.wrapSelected = wrapSelected;
    return wrapSelected;
  }

  $tabLoaded() {
    this._update();
  }
}
