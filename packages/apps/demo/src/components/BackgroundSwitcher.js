import {
  context,
  Column,
  Artwork,
  Base,
  TextBox,
  Gradient
} from '@lightningjs/ui-components';

export default class BackgroundSwitcher extends Base {
  static __componentName() {
    return 'BackgroundSwitcher';
  }

  static _template() {
    return {
      Background1: {
        type: Artwork,
        h: context.theme.layout.screenH,
        w: context.theme.layout.screenW,
        gradient: true,
        srcCallback({ src, w, aspectRatio }) {
          return `https://image.tmdb.org/t/p/w1280/${src}`;
        }
      },
      Background2: {
        alpha: 0.001,
        type: Artwork,
        h: context.theme.layout.screenH,
        w: context.theme.layout.screenW,
        gradient: true,
        srcCallback({ src, w, aspectRatio }) {
          return `https://image.tmdb.org/t/p/w1280/${src}`;
        }
      },
      Overlay: {
        type: class extends Gradient {
          _update() {
            this.patch({
              rect: true,
              rtt: true,
              colorRight: this.style.gradientTop,
              colorLeft: this.style.gradientColor,
              texture: lng.Tools.getRoundRect(this.w, this.h, this.style.radius)
            });
          }
        },
        h: context.theme.layout.screenH,
        w: context.theme.layout.screenW
      },
      Metadata: {
        y: context.theme.layout.screenH * 0.4,
        x: context.theme.layout.marginX,
        type: Column,
        items: [
          {
            type: TextBox,
            style: {
              textStyle: {
                ...context.theme.typography.display1,
                wordWrapWidth:
                  context.theme.layout.screenW -
                  context.theme.layout.marginX * 2,
                maxLines: 2
              }
            }
          },
          {
            type: TextBox,
            w: 500,
            style: {
              textStyle: {
                wordWrapWidth:
                  context.theme.layout.screenW -
                  context.theme.layout.marginX * 2,
                maxLines: 2
              }
            }
          }
        ]
      }
    };
  }

  static get properties() {
    return ['title', 'description', 'src'];
  }

  _construct() {
    super._construct && super._construct();
    this._activeBackground = 0;
  }

  _update() {
    const target = this.childList.getAt(this._activeBackground);
    target.src = this.src;
    const fadeOut = this.childList.getAt(+!this._activeBackground);
    this._activeBackground = +!this._activeBackground;
    target.smooth = { alpha: 1 };
    fadeOut.smooth = { alpha: 0.001 };
    this.tag('Metadata').childList.first.childList.first.content = this.title;
    this.tag(
      'Metadata'
    ).childList.first.childList.last.content = this.description;
  }
}
