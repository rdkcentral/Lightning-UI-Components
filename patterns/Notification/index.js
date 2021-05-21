import lng from '@lightningjs/core';
import MarqueeText from '../../elements/MarqueeText';
import InlineContent from '../../layout/InlineContent';
import Icon from '../../elements/Icon';
import withStyles from '../../mixins/withStyles';
import { withTransitions } from '../../mixins';

export const styles = theme => ({
  minHeight: 120,
  w: 560,
  background: {
    color: theme.palette.background.fill
  },
  backgrounds: theme.palette.background,
  radius: theme.border.radius.small,
  margin: {
    x: theme.spacing(3),
    y: theme.spacing(3)
  },
  shadow: theme.materials.shadow,
  icon: {
    size: 64,
    spacing: theme.spacing(2)
  },
  title: {
    ...theme.typography.headline3,
    lineHeight: theme.typography.headline3.lineHeight + 6,
    color: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    lineHeight: theme.typography.body3.lineHeight + 4,
    textColor: theme.palette.text.light.secondary
  },
  actionArea: {
    margin: {
      x: theme.spacing(3),
      y: theme.spacing(2)
    },
    background: {
      color: theme.palette.grey[60],
      h: 64
    },
    text: {
      ...theme.typography.body3,
      lineHeight: theme.typography.body3.lineHeight + 4,
      textColor: theme.palette.text.light.tertiary
    },
    icon: {
      size: 32
    }
  },
  enter: {
    icon: {
      alpha: 1,
      scale: 1
    },
    container: {
      alpha: 1,
      scale: 1,
      x: 0,
      w: 560
    },
    text: {
      alpha: 1,
      x: 0
    }
  },
  dismiss: {
    icon: {
      alpha: 0.001,
      scale: 0.2
    },
    container: {
      alpha: 0.001,
      scale: 0.4,
      x: 440,
      w: 120
    },
    text: {
      alpha: 0.001,
      x: 64
    }
  }
});

class Notification extends lng.Component {
  static _template() {
    return {
      Container: {
        pivot: 0.5,
        h: this.styles.minHeight,
        w: this.styles.w,
        rect: true,
        clipping: true,
        color: this.styles.background.color,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.radius
        },
        pivotX: 1,
        Content: {
          x: this.styles.margin.x,
          y: this.styles.margin.y,
          flex: { direction: 'row' },
          Icon: {
            type: Icon,
            w: this.styles.icon.size,
            h: this.styles.icon.size,
            flexItem: { marginRight: this.styles.icon.spacing },
            pivot: 0.5
          },
          Text: {
            w: 432,
            flex: { direction: 'column' },
            Title: {
              type: MarqueeText,
              w: 432,
              h: this.styles.title.lineHeight,
              autoStart: true,
              delay: 3
            },
            Description: {
              type: InlineContent,
              w: 432,
              contentWrap: true,
              textProperties: this.styles.description,
              justify: 'flex-start'
            }
          }
        },
        ActionArea: {
          alpha: 0,
          rect: true,
          color: this.styles.actionArea.background.color,
          h: this.styles.actionArea.background.h,
          w: this.styles.w + 8,
          y: this.styles.minHeight,
          Content: {
            y: this.styles.actionArea.margin.y,
            x: this.styles.actionArea.margin.x,
            w: this.styles.w,
            Text: {
              y: -4,
              type: InlineContent,
              w: 464,
              textProperties: this.styles.actionArea.text,
              justify: 'flex-start'
            },
            Icon: {
              type: Icon,
              x:
                this.styles.w -
                this.styles.actionArea.icon.size -
                this.styles.actionArea.margin.x * 2,
              w: this.styles.actionArea.icon.size,
              h: this.styles.actionArea.icon.size
            }
          }
        }
      }
    };
  }

  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._enable = resolve),
      console.error
    );
    this._containerH = this.styles.minHeight;
    this.entered = false;
    this._icon = {};
    this._actionArea = false;
    this._contentLoaded = false;
    this._containerHIsFinal = new Promise(resolve => {
      var intervalId = setInterval(() => {
        if (this._contentLoaded) {
          clearInterval(intervalId);
          resolve();
        }
      }, 5);
    });
  }

  _init() {
    this._update();
  }

  set icon(src) {
    if (this._icon.src !== src) {
      this._icon = { ...this.styles.icon, src };
      this._update();
    }
  }

  set title(title) {
    if (this._title !== title) {
      this._title = title;
      this._update();
    }
  }

  set description(description) {
    if (this._description !== description) {
      this._description = description;
      this._update();
    }
  }

  set actionArea(actionArea) {
    if (
      !this._actionArea ||
      (this._actionArea &&
        (this._actionArea.text !== actionArea.text ||
          this._actionArea.icon !== actionArea.icon))
    ) {
      this._actionArea = actionArea;
      this._update();
    }
  }

  $loadedInlineContent() {
    this._contentLoaded = true;
    if (
      this._containerH === this.styles.minHeight &&
      this._Description.multiLineHeight > this.styles.description.lineHeight
    ) {
      this._containerH +=
        this._Description.multiLineHeight - this.styles.description.lineHeight;
      this._update();
    }
  }

  _update() {
    this._whenEnabled.then(() => {
      this._updateProps();
      this._updateIcon();
      this._updateText();
      this._udpateActionArea();
    });
  }

  _updateProps() {
    const state = this.entered ? 'enter' : 'dismiss';

    this._Container.alpha = this.styles[state].container.alpha;
    this._Container.scale = this.styles[state].container.scale;
    this._Container.x = this.styles[state].container.x;
    this._Container.w = this.styles[state].container.w;
  }

  _updateIcon() {
    const state = this.entered ? 'enter' : 'dismiss';
    this._Icon.alpha = this.styles[state].icon.alpha;
    this._Icon.scale = this.styles[state].icon.scale;

    if (this._icon) {
      this._Icon.icon = this._icon.src;
    }
  }

  _updateText() {
    this._Title.title = {
      ...this.styles.title,
      textColor: this.styles.title.color,
      maxLines: 1,
      text: this._title
    };
    this._Description.patch({
      content: this._description
    });

    const descLineLayouter = this._Description.flex._layout._lineLayouter;
    if (
      descLineLayouter &&
      descLineLayouter._lines &&
      descLineLayouter._lines.length
    ) {
      this._containerH =
        this.styles.margin.y * 2 + // top bottom margins
        this.styles.title.lineHeight + // title height
        this._Description.textProperties.lineHeight *
          descLineLayouter._lines.length; // description height
    }

    const state = this.entered ? 'enter' : 'dismiss';
    this._Text.alpha = this.styles[state].text.alpha;
    this._Text.x = this.styles[state].text.x;
  }

  _udpateActionArea() {
    if (this._actionArea && Object.keys(this._actionArea).length) {
      this._ActionArea.alpha = 1;
      this._ActionArea.y = this._containerH;
      this._ActionArea.w = this.styles.w;
      this._ActionArea.tag('Content.Text').content =
        this._actionArea.content || this._actionArea.text;
      this._ActionArea.tag('Content.Icon').icon = this._actionArea.icon;
    } else {
      this._ActionArea.alpha = 0;
    }
  }

  enter() {
    this._containerHIsFinal.then(() => {
      this._udpateActionArea();
      this.entered = true;

      this._Container.h = this._containerH;
      this._Icon.smooth = {
        scale: [this.styles.enter.icon.scale, { duration: 0.18, delay: 0.1 }],
        alpha: [this.styles.enter.icon.alpha, { duration: 0.18, delay: 0.1 }]
      };
      let pop = this._Container.animation({
        duration: 0.34,
        actions: [
          { p: 'alpha', v: { 0: 0, 1: this.styles.enter.container.alpha } },
          {
            p: 'scale',
            v: { 0: 0.4, 0.8: 1.1, 1: this.styles.enter.container.scale }
          }
        ]
      });
      pop.start();
      pop.on('finish', () => {
        this._Container.smooth = {
          w: [this.styles.enter.container.w, { duration: 0.24, delay: 0.2 }],
          x: [this.styles.enter.container.x, { duration: 0.24, delay: 0.2 }]
        };
        this._Text.smooth = {
          x: [this.styles.enter.text.x, { duration: 0.28, delay: 0.3 }],
          alpha: [this.styles.enter.text.alpha, { duration: 0.28, delay: 0.3 }]
        };

        if (this._actionArea && Object.keys(this._actionArea).length) {
          this._Container.smooth = {
            h: [
              this._containerH + this.styles.actionArea.background.h,
              { duration: 0.24, delay: 1 }
            ]
          };
        }
        this.fireAncestors('$notificationEntered');
      });
    });
  }

  dismiss() {
    this.entered = false;
    let delay = 0;
    if (this._actionArea && Object.keys(this._actionArea).length) {
      this._Container.smooth = {
        h: [this._containerH, { duration: 0.18 }]
      };
      delay = 0.18;
    }
    this._Text.smooth = {
      x: [this.styles.dismiss.text.x, { duration: 0.24, delay: delay }],
      alpha: [this.styles.dismiss.text.alpha, { duration: 0.24, delay: delay }]
    };
    this._Container.smooth = {
      w: [
        this.styles.dismiss.container.w,
        { duration: 0.16, delay: delay + 0.1 }
      ],
      x: [
        this.styles.dismiss.container.x,
        { duration: 0.16, delay: delay + 0.1 }
      ],
      scale: [
        this.styles.dismiss.container.scale,
        { duration: 0.16, delay: delay + 0.22 }
      ],
      alpha: [
        this.styles.dismiss.container.alpha,
        { duration: 0.16, delay: delay + 0.28 }
      ]
    };

    this.fireAncestors('$notificationDismissed');
  }

  get _Container() {
    return this.tag('Container');
  }
  get _Icon() {
    return this.tag('Container.Icon');
  }
  get _Text() {
    return this.tag('Container.Text');
  }
  get _Title() {
    return this.tag('Container.Text.Title');
  }
  get _Description() {
    return this.tag('Container.Text.Description');
  }
  get _ActionArea() {
    return this.tag('Container.ActionArea');
  }
}

export default withTransitions(withStyles(Notification, styles));
