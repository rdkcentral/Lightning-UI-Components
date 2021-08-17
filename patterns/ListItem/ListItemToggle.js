import ListItem from '.';
import Toggle from '../../elements/Toggle';

export default class ListItemToggle extends ListItem {
  _init() {
    super._init();
    this.icon = undefined;
    this._Right.patch({
      w: 64,
      h: 32,
      Toggle: {
        type: Toggle,
        checked: this.checked
      }
    });
  }

  _getTitleW() {
    const w =
      this.w ||
      this.styles.dimensions[this.size] ||
      this.styles.dimensions.large;

    return w - this.styles.paddingLeft - this.styles.paddingRight - 72;
  }

  isChecked() {
    return Boolean(this._Toggle.checked);
  }

  toggle() {
    return this._Toggle.toggle();
  }

  _getFocused() {
    return this._Toggle;
  }

  get onEnter() {
    return this._Toggle.onEnter;
  }

  set onEnter(onEnter) {
    this._Toggle.onEnter = onEnter;
  }

  get _Toggle() {
    return this.tag('Container').tag('Toggle');
  }

  get _rightOffset() {
    return 72;
  }
}
