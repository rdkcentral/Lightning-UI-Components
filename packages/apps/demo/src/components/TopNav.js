import { Base, context, Row, TextBox } from '@lightningjs/ui-components';

export default class TopNav extends Base {
  static get __componentName() {
    return 'TopNav';
  }

  static _template() {
    return {
      w: (app.stage.w / app.stage.getRenderPrecision()) - context.theme.layout.safe * 2,
      y: context.theme.layout.safe,
      x: context.theme.layout.safe,
      Logo: {
        w: 98,
        h: 48
      },
      Controls: {
        x: w => w,
        mountX: 1,
        autoResizeWidth: true,
        type: Row,
        items: [
          {
            type: class extends TextBox {
              _construct() {
                super._construct();
                this._startTime();
              }

              _update() {
                this.style.textStyle = this.theme.typography.headline1;
                super._update();
              }

              _startTime() {
                const today = new Date();
                let h = today.getHours();
                let m = today.getMinutes();
                let s = today.getSeconds();
                m = this._checkTime(m);
                s = this._checkTime(s);
                this.content = h + ':' + m;
                setTimeout(this._startTime.bind(this), 1000);
              }

              _checkTime(i) {
                if (i < 10) {
                  i = '0' + i;
                } // add zero in front of numbers < 10
                return i;
              }
            }
          }
        ]
      }
    };
  }

  _update() {
    if (this.theme.logo) {
      this.tag('Logo').alpha = 1
      this.tag('Logo').src = this.theme.logo
    } else {
      this.tag('Logo').alpha = 0
    }
    super._update();
  }
}
