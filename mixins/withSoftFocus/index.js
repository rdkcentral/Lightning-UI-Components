import { PALETTE } from '../../Styles';

export default function withSoftFocus(Base) {
  return class extends Base {
    static _template() {
      return {
        flex: {
          alignItems: 'center',
          direction: 'row',
          justifyContent: 'space-between'
        },
        SoftFocusMarker: {
          zIndex: 2,
          h: 45,
          w: 4,
          alpha: 0,
          rect: true,
          color: PALETTE.white
        },
        ...super._template()
      };
    }

    _init() {
      super._init();
      this._softFocused = false;
    }

    _focus() {
      super._focus();
      this._softFocused = true;
      this._SoftFocusMarker.patch({ alpha: 0 });
    }

    _unfocus() {
      super._unfocus();
      this._softFocused
        ? this._SoftFocusMarker.patch({ alpha: 1 })
        : this._SoftFocusMarker.patch({ alpha: 0 });
    }

    set softFocused(softFocused) {
      this._softFocused = softFocused;
      this._softFocused && !this.hasFocus()
        ? this._SoftFocusMarker.patch({ alpha: 1 })
        : this._SoftFocusMarker.patch({ alpha: 0 });
    }

    get softFocused() {
      return this._softFocused;
    }

    get _SoftFocusMarker() {
      return this.tag('SoftFocusMarker');
    }
  };
}
