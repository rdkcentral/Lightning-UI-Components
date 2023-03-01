import { Base, context, Row, Button } from '@lightningjs/ui-components';
import { Router } from '@lightningjs/sdk';
import sky from '../themes/sky';

const themes = {
  sky
};

export default class ThemeSwitcher extends Base {
  static __componentName() {
    return 'ThemeSwitcher';
  }

  static _template() {
    return {
      alpha: 0.001,
      Background: {
        rtt: true,
        rect: true,
        color: 0xfff000000,
        w: app.stage.w / app.stage.getRenderPrecision(),
        h: app.stage.h / app.stage.getRenderPrecision()
      },
      Selector: {
        type: Row,
        neverScroll: true,
        autoResizeWidth: true,
        mount: 0.5,
        y: app.stage.h / app.stage.getRenderPrecision() / 2,
        x: (app.stage.w / app.stage.getRenderPrecision()) / 2,
        items: ['Base', 'Xfinity', 'Sky', 'A11y'].map(theme => ({
          type: Button,
          title: theme,
          onEnter() {
            context
              .setTheme(themes[theme.toLocaleLowerCase()] || {})
              .then(() => {
                Router.focusPage();
              });
          }
        }))
      }
    };
  }

  _handleKey() {
    return true;
  }

  _getFocused() {
    return this.tag('Selector');
  }

  _handleThemePanel(e) {
    Router.focusPage(); // Go back to active page
  }

  _focus() {
    this.smooth = { alpha: 1 };
  }

  _unfocus() {
    this.smooth = { alpha: 0.001 };
  }
}
