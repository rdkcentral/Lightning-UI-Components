/**
 * Action Button Component
 *
 * Action Button Class that contains styling and functionality for all Action Button items
 */
import lng from 'wpe-lightning';
import Button from '../Button';
import { RoundRect } from '../../utils';

// styles
import {
  TYPESCALE,
  GRID,
  CORNER_RADIUS,
  COLORS_BASE,
  getHexColor,
  COLORS_TEXT
} from '../Styles';

export const COLORS = {
  fill: getHexColor(`232328`, 48),
  float: COLORS_BASE.transparent,
  stroke: COLORS_BASE.transparent,
  focused: getHexColor('ECECF2')
};

export const ACTION_BUTTON_THEME = {
  radius: CORNER_RADIUS.small,
  text: {
    ...TYPESCALE.caption,
    textColor: getHexColor(COLORS_TEXT.light)
  },
  w: 410,
  h: 72,
  padding: 16,
  unfocus: {
    text: getHexColor(COLORS_TEXT.light),
    icon: getHexColor(COLORS_TEXT.light),
    patch: function() {
      let scale = 1;
      this.patch({
        smooth: { color: this._background, scale },
        Content: {
          smooth: { scale },
          Title: { smooth: { color: this._theme.unfocus.text } },
          Icon: { smooth: { color: this._theme.unfocus.icon } }
        }
      });
    }
  },
  focus: {
    background: getHexColor(`ECECF2`),
    text: getHexColor(COLORS_TEXT.dark),
    icon: getHexColor(COLORS_TEXT.dark),
    patch: function() {
      let scale = 1.12;
      this.patch({
        smooth: { color: this._theme.focus.background, scale },
        Content: {
          smooth: { scale: 1 / scale },
          Title: { smooth: { color: this._theme.focus.text } },
          Icon: { smooth: { color: this._theme.focus.icon } }
        }
      });
    }
  }
};

export default class ActionButton extends lng.Component {
  static _template() {
    return {
      Loader: {
        color: getHexColor('ffffff', 24),
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(ACTION_BUTTON_THEME.w),
          RoundRect.getHeight(ACTION_BUTTON_THEME.h),
          ACTION_BUTTON_THEME.radius
        )
      },
      Button: {
        type: Button,
        theme: ACTION_BUTTON_THEME,
        alpha: 0
      },
      DropShadow: {
        zIndex: -1,
        mount: 0.5,
        x: ACTION_BUTTON_THEME.w / 2,
        y: (ACTION_BUTTON_THEME.h + GRID.spacingIncrement * 2) / 2,
        color: getHexColor('ffffff', 64),
        alpha: 0,
        texture: lng.Tools.getShadowRect(
          ACTION_BUTTON_THEME.w,
          ACTION_BUTTON_THEME.h,
          CORNER_RADIUS.medium,
          16,
          24
        )
      }
    };
  }
  constructor(...args) {
    super(...args);
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  _init() {
    this.background = this.background ? this.background.toLowerCase() : 'float';
    if (this.background === 'stroke') {
      this._Button.stroke = {
        weight: 2,
        color: getHexColor('ECECF2')
      };
    }
    this._Button.background =
      COLORS[this.background] || COLORS_BASE.transparent;

    if (!this.title) {
      this._loading = this._Loader.animation({
        duration: 2,
        repeat: -1,
        stopMethod: 'immediate',
        actions: [{ p: 'alpha', v: { 0: 0.5, 0.5: 1, 1: 0.5 } }]
      });
      this._loading.start();
    }
  }

  set title(title) {
    this._title = title;
    if (this._loading && this._loading.isPlaying()) {
      this._loading.stop();
    }
    this._whenEnabled.then(() => {
      this.patch({
        Loader: undefined,
        Button: { title, alpha: 1 }
      });
    });
  }

  set icon(icon) {
    this._icon = icon;
    this._whenEnabled.then(() => {
      this._Button.icon = {
        src: icon,
        size: 32,
        spacing: GRID.spacingIncrement * 2
      };
    });
  }

  _focus() {
    this._DropShadow.smooth = { alpha: 1, scale: 1.04 };
  }

  _unfocus() {
    this._DropShadow.smooth = { alpha: 0, scale: 1 };
  }

  _getFocused() {
    return this._Button;
  }

  get _Button() {
    return this.tag('Button');
  }
  get _Loader() {
    return this.tag('Loader');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}
