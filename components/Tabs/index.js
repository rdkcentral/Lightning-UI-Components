import lng from '@lightningjs/core';
import Row from '../Row';
import Icon from '../Icon';
import { Line } from '../textures';
import withStyles from '../../mixins/withStyles';

export const tabStyles = theme => ({
  icon: {
    color: theme.palette.text.light.tertiary,
    sizes: theme.sizes.icon
  },
  text: {
    ...theme.typography.headline2,
    color: theme.palette.text.light.tertiary
  },
  focused: {
    icon: {
      color: theme.palette.text.light.primary
    },
    text: {
      color: theme.palette.text.light.primary
    }
  },
  selected: {
    icon: {
      color: theme.palette.text.light.secondary
    },
    text: {
      color: theme.palette.text.light.secondary
    }
  }
});

export class TabBase extends lng.Component {
  static _template() {
    return {
      flex: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      Icon: {
        type: Icon
      },
      Text: { text: this.styles.text }
    };
  }

  _construct() {
    this._iconSize = 'medium';
  }

  _init() {
    this._updateColor();
  }

  _focus() {
    this._updateColor();
  }

  _unfocus() {
    this._updateColor();
  }

  _update() {
    if (this.icon) {
      if (this.iconWidth && this.iconHeight) {
        this._Icon.patch({
          icon: this.icon,
          w: this.iconWidth,
          h: this.iconHeight
        });
      } else {
        const size =
          this.styles.icon.sizes[this.iconSize] ||
          this.styles.icon.sizes.medium;
        this._Icon.patch({
          icon: this.icon,
          w: size,
          h: size
        });
      }
    }
  }

  _updateColor() {
    if (this.hasFocus()) {
      this._Icon.smooth = {
        color: this.focusedIconColor || this.styles.focused.icon.color
      };
      this._Text.smooth = {
        color: this.focusedTextColor || this.styles.focused.text.color
      };
    } else if (this.isSelected) {
      this._Icon.smooth = {
        color: this.selectedIconColor || this.styles.selected.icon.color
      };
      this._Text.smooth = {
        color: this.selectedTextColor || this.styles.selected.text.color
      };
    } else {
      this._Icon.smooth = { color: this.iconColor || this.styles.icon.color };
      this._Text.smooth = { color: this.textColor || this.styles.text.color };
    }
  }

  select() {
    this._selected = true;
    this._updateColor();
  }

  deselect() {
    this._selected = false;
    this._updateColor();
  }

  get announce() {
    return this.title + ', Tab';
  }

  get icon() {
    return this._icon;
  }

  set icon(icon) {
    if (icon !== this._icon) {
      this._icon = icon;
      this._update();
    }
  }

  get iconHeight() {
    return this._iconHeight;
  }

  set iconHeight(iconHeight) {
    if (iconHeight !== this._iconHeight) {
      this._iconHeight = iconHeight;
      this._update();
    }
  }

  get iconSize() {
    return this._iconSize;
  }

  set iconSize(iconSize) {
    if (iconSize !== this._iconSize) {
      this._iconSize = iconSize;
      this._update();
    }
  }

  get iconWidth() {
    return this._iconWidth;
  }

  set iconWidth(iconWidth) {
    if (iconWidth !== this._iconWidth) {
      this._iconWidth = iconWidth;
      this._update();
    }
  }

  get isSelected() {
    return this._selected;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (title !== this._title) {
      this._title = title;
      this._Text.text = title;
    }
  }

  get _Icon() {
    return this.tag('Icon');
  }

  get _Text() {
    return this.tag('Text');
  }
}

export class Tab extends withStyles(TabBase, tabStyles) {}

export default class TabBar extends lng.Component {
  static _template() {
    return {
      Container: {
        type: Row,
        signals: {
          selectedChange: true
        }
      },
      FocusBar: {
        alpha: 0.48,
        mountX: 0.5,
        color: 0xffffffff
      }
    };
  }

  _construct() {
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
        const y = Math.max(...this.tabs.map(({ h }) => h)) + this.barSpacing;
        const barLength =
          selected.barLength && selected.barLength !== this.barLength
            ? selected.barLength
            : this.barLength;

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

    const barLength =
      selected.barLength && selected.barLength !== this.barLength
        ? selected.barLength
        : this.barLength;
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

  get barLength() {
    return this._barLength;
  }

  set barLength(barLength) {
    if (this._barLength !== barLength) {
      this._barLength = barLength;
      this._update();
    }
  }

  get barSpacing() {
    return this._barSpacing;
  }

  set barSpacing(barSpacing) {
    if (barSpacing !== this._barSpacing) {
      this._barSpacing = barSpacing;
      this._update();
    }
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
      this._Container.selected.select();
      this._update();
    });
  }

  get itemSpacing() {
    return this._Container.itemSpacing;
  }

  set itemSpacing(itemSpacing) {
    if (itemSpacing !== this._Container.itemSpacing) {
      this._Container.itemSpacing = itemSpacing;
      this._update();
    }
  }

  get wrapSelected() {
    return this._Container.wrapSelected;
  }

  set wrapSelected(wrapSelected) {
    if (wrapSelected !== this._Container.wrapSelected) {
      this._Container.wrapSelected = wrapSelected;
      this._update();
    }
  }

  get _Container() {
    return this.tag('Container');
  }

  get _FocusBar() {
    return this.tag('FocusBar');
  }
}
