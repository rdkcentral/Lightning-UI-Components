import {
  Base,
  Icon,
  TextBox,
  Surface,
  withExtensions
} from '@lightning/ui-core';
import defaultIcon from '../../assets/images/notification_64.png';
import * as styles from './Notification.styles';

class Notification extends Base {
  static get __componentName() {
    return 'Notification';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Container: {
        type: Surface,
        clipping: true,
        signals: {
          _titleChanged: true,
          _descriptionChanged: true,
          _actionAreaTextChanged: true
        },
        Content: {
          flex: { direction: 'row' },
          Icon: {
            type: Icon,
            fixed: true,
            alpha: 0.001
          },
          Text: {
            alpha: 0.001,
            flex: { direction: 'column' },
            Title: {
              type: TextBox,
              passSignals: {
                textBoxChanged: '_titleChanged'
              }
            },
            Description: {
              type: TextBox,
              passSignals: {
                textBoxChanged: '_descriptionChanged'
              }
            }
          }
        },
        ActionArea: {
          alpha: 0.001,
          Text: {
            type: TextBox,
            passSignals: {
              textBoxChanged: '_actionAreaTextChanged'
            }
          }
        }
      }
    };
  }

  static get properties() {
    return ['icon', 'logo', 'title', 'description', 'actionArea', 'entered'];
  }

  static get tags() {
    return [
      'Container',
      { name: 'Content', path: 'Container.Content' },
      { name: 'Icon', path: 'Container.Content.Icon' },
      { name: 'Text', path: 'Container.Content.Text' },
      { name: 'Title', path: 'Container.Content.Text.Title' },
      { name: 'Description', path: 'Container.Content.Text.Description' },
      { name: 'ActionArea', path: 'Container.ActionArea' },
      { name: 'ActionAreaText', path: 'Container.ActionArea.Text' }
    ];
  }

  get announce() {
    return [
      this.title,
      this._Description.announce,
      this._ActionAreaText.announce
    ];
  }

  get _animations() {
    const animations = [this._step1, this._step2, this._step3];
    if (!this._notificationActivated) animations.reverse();
    return animations;
  }

  get _totalIconOnlyMarginX() {
    return this.style.iconOnlyMarginX * 2;
  }

  get _totalExpandedMarginX() {
    return this.style.marginX * 2;
  }

  get _totalMarginY() {
    return this.style.marginY * 2;
  }

  get _contentHeight() {
    const textHeight = (this._Title.h || 0) + (this._Description.h || 0);
    const iconWithMargin = this._Icon.h + this.style.iconMarginTop * 2;
    return Math.max(textHeight, this._Icon.h, iconWithMargin);
  }

  get _contentWordWrapWidth() {
    return (
      this.style.w -
      (this.style.iconSize + this._totalExpandedMarginX) -
      this.style.iconMarginRight
    );
  }

  get _actionAreaHeight() {
    if (this.actionArea) {
      return this._ActionAreaText.h;
    }
    return 0;
  }

  _setTitle(title) {
    this._triggerUpdate = true; // This will effect the height of the component if changed after Notification is open
    this._titleLoadedPromise = new Promise(resolve => {
      this._titleLoaded = resolve;
    });
    return title;
  }

  _setDescription(description) {
    this._triggerUpdate = true; // This will effect the height of the component if changed after Notification is open
    this._descriptionLoadedPromise = new Promise(resolve => {
      this._descriptionLoaded = resolve;
    });
    return description;
  }

  _setActionArea(actionArea) {
    this._triggerUpdate = true; // This will effect the height of the component if changed after Notification is open
    this._actionAreaTextLoadedPromise = new Promise(resolve => {
      this._actionAreaTextLoaded = resolve;
    });
    return actionArea;
  }

  _construct() {
    super._construct();
    this._animating = false; // Track if animation is still being processed
    this._icon = defaultIcon;
    this._notificationActivated = false; // Toggled when enter() is called
    this._notificationOpen = false; // Animation has completed
    this._titleLoaded = () => {};
    this._descriptionLoaded = () => {};
    this._actionAreaTextLoaded = () => {};
  }

  _init() {
    // Open notification as soon as attached for the first time
    if (this._entered) {
      this.enter();
    }
  }

  _titleChanged({ w, h }) {
    // Resolve promise after title is completely loaded
    if (w > 0 || h > 0) {
      this._titleLoaded(true);
    }
  }

  _descriptionChanged({ w, h }) {
    if (w > 0 || h > 0) {
      this._descriptionLoaded(true);
    }
  }

  _actionAreaTextChanged({ w, h }) {
    if (w > 0 || h > 0) {
      this._actionAreaTextLoaded(true);
    }
  }

  _update() {
    super._update();
    this._updateContainer();
    this._updateContent();
    this._updateIcon();
    this._updateTitle();
    this._updateDescription();
    this._updateActionArea();
    this._updateActionAreaText();
    if (this._notificationActivated && this._triggerUpdate) {
      this._updateLayout();
    }
  }

  _updateContainer() {
    if (this._animating || this._notificationOpen) {
      return;
    }
    const containerW = this.style.iconSize + this._totalIconOnlyMarginX;
    this._Container.patch({
      alpha: this.style.dismissAlpha,
      x: this.style.w - containerW,
      w: containerW,
      h:
        this.style.iconSize + this.style.iconMarginTop * 2 + this._totalMarginY,
      scale: this.style.dismissScale,
      style: { backgroundColor: this.style.backgroundColor }
    });
  }

  _updateContent() {
    if (this._animating || this._notificationOpen) {
      return;
    }
    this._Content.patch({
      w: this.style.w - this._totalIconOnlyMarginX,
      h: this._contentHeight,
      x: this.style.iconOnlyMarginX,
      y: this.style.marginY,
      flex: {
        direction: 'row',
        alignItems: this.title && this.description ? 'flex-start' : 'center'
      }
    });
  }

  _updateIcon() {
    const iconPatch = {
      flexItem: {
        marginTop: this.style.iconMarginTop,
        marginRight: this.style.iconMarginRight
      },
      w: this.style.iconSize,
      h: this.style.iconSize
    };

    if (this.logo) {
      iconPatch.icon = this.logo;
      iconPatch.style = { color: undefined, ...this.style.logoStyles };
    } else {
      iconPatch.icon = this.icon || defaultIcon;
      iconPatch.style = this.style.iconStyles;
    }
    this._Icon.patch(iconPatch);
  }

  _updateTitle() {
    if (this._title) {
      this._Title.patch({
        content: this._title,
        style: {
          textStyle: {
            ...this.style.titleTextStyle,
            wordWrap: true,
            wordWrapWidth: this._contentWordWrapWidth
          }
        }
      });
    } else {
      this._Title.content = undefined;
      this._titleLoaded(true);
    }
  }

  _updateDescription() {
    if (this._description) {
      this._Description.patch({
        content: this._description,
        style: {
          textStyle: {
            ...this.style.descriptionTextStyle,
            wordWrap: true,
            wordWrapWidth: this._contentWordWrapWidth
          }
        }
      });
    } else {
      this._Description.content = undefined;
      this._descriptionLoaded(true);
    }
  }

  _updateActionArea() {
    if (this.actionArea) {
      this._ActionArea.patch({
        w: this._Content.w,
        x: this._Content.x
      });
    }
  }

  _updateActionAreaText() {
    if (this.actionArea) {
      const textWidth = this.style.w - this._totalExpandedMarginX;
      this._ActionAreaText.patch({
        content: this.actionArea,
        style: {
          textStyle: {
            ...this.style.actionAreaTextStyle,
            maxLines: 1,
            wordWrap: true,
            wordWrapWidth: textWidth
          }
        }
      });
    } else {
      this._ActionAreaText.patch({
        content: undefined
      });
      this._actionAreaTextLoaded(true);
    }
  }

  async _waitForElementsToRender() {
    return Promise.all(
      [
        this._titleLoadedPromise,
        this._descriptionLoadedPromise,
        this._actionAreaTextLoadedPromise
      ].filter(Boolean)
    );
  }

  // updates to the Notification after it is already open
  async _updateLayout() {
    if (
      this._animating ||
      !this._notificationOpen ||
      !this._completedAnimations
    ) {
      return;
    }

    await this._waitForElementsToRender();

    this._updateContainerHeight();
    this._updateContentAlignment();
    this._updateActionAreaDisplay();
  }

  _updateContainerHeight() {
    this._Container.h =
      this._contentHeight +
      this._actionAreaHeight +
      (this.actionArea ? this.style.actionAreaMarginTop : 0) +
      this._totalMarginY;
  }

  _updateContentAlignment() {
    const definedTextProps = [this.title, this.description].filter(Boolean);
    const isSingleTextProp = definedTextProps.length === 1;
    let canCenter = isSingleTextProp;
    if (isSingleTextProp) {
      const textTag = this.title ? this._Title : this._Description;
      const exceedsIconH = textTag.h > this._Icon.h;
      if (exceedsIconH) {
        canCenter = false;
      }
    }
    this._Content.patch({
      flex: {
        alignItems: canCenter ? 'center' : 'flex-start'
      }
    });
  }

  _updateActionAreaDisplay() {
    if (this._actionArea) {
      this._ActionArea.patch({
        y:
          this.style.marginY +
          this._contentHeight +
          this.style.actionAreaMarginTop,
        alpha: 1
      });
    }
  }

  async enter() {
    if (this._animating || this._notificationOpen) return;
    await this._waitForElementsToRender();
    this._notificationActivated = true;
    await this._animate();
    this.signal('notificationEntered');
    this.fireAncestors('$notificationEntered');
  }

  async dismiss() {
    if (this._animating || !this._notificationOpen) return;
    this._notificationActivated = false;
    await this._animate();
    this.signal('notificationDismissed');
    this.fireAncestors('$notificationDismissed');
  }

  async _animate() {
    this._animating = true;
    for (const step in this._animations) {
      await this._animations[step].call(this);
    }
    this._animating = false;
    this._notificationOpen = this._notificationActivated;
  }

  _step1() {
    return new Promise(resolve => {
      let animation;
      const enterSteps = {
        alpha: [this.style.dismissAlpha, this.style.enterAlpha],
        scale: [
          this.style.dismissScale,
          this.style.enterScale + 0.1,
          this.style.enterScale
        ]
      };

      if (this._notificationActivated) {
        animation = this._Container.animation({
          ...this.style.step1Animation,
          actions: [
            {
              p: 'alpha',
              v: {
                0: enterSteps.alpha[0],
                1: enterSteps.alpha[1]
              }
            },
            {
              p: 'scale',
              v: {
                0: enterSteps.scale[0],
                0.8: enterSteps.scale[1],
                1: enterSteps.scale[2]
              }
            }
          ]
        });
      } else {
        animation = this._Container.animation({
          ...this.style.step1Animation,
          actions: [
            {
              p: 'alpha',
              v: {
                0: enterSteps.alpha[1],
                1: enterSteps.alpha[0]
              }
            },
            {
              p: 'scale',
              v: {
                0: enterSteps.scale[2],
                0.1: enterSteps.scale[1],
                1: enterSteps.scale[0]
              }
            }
          ]
        });
      }
      this._Container.animation(animation);
      this._Icon.smooth = {
        alpha: enterSteps.alpha[this._notificationActivated ? 1 : 0]
      };
      animation.start();
      animation.on('finish', resolve);
    });
  }

  _step2() {
    const animation1 = new Promise(resolve => {
      let animation;
      const enterSteps = {
        w: [this.style.iconSize + this._totalIconOnlyMarginX, this.style.w],
        h: [
          this.style.iconSize +
            this.style.iconMarginTop * 2 +
            this._totalMarginY,
          this._contentHeight + this._totalMarginY
        ],
        x: [
          this.style.w - (this.style.iconSize + this._totalIconOnlyMarginX),
          0
        ]
      };

      if (this._notificationActivated) {
        this._Text.smooth = {
          alpha: [this.style.enterAlpha, this.style.step2TextEnterAnimation]
        };

        animation = this._Container.animation({
          ...this.style.step2Animation,
          actions: [
            {
              p: 'w',
              v: {
                0: enterSteps.w[0],
                1: enterSteps.w[1]
              }
            },
            {
              p: 'h',
              v: {
                0: enterSteps.h[0],
                1: enterSteps.h[1]
              }
            },
            {
              p: 'x',
              v: {
                0: enterSteps.x[0],
                1: enterSteps.x[1]
              }
            }
          ]
        });
      } else {
        this._Text.smooth = {
          alpha: [this.style.dismissAlpha, this.style.step2TextExitAnimation]
        };
        animation = this._Container.animation({
          ...this.style.step2Animation,
          actions: [
            {
              p: 'w',
              v: {
                0: enterSteps.w[1],
                1: enterSteps.w[0]
              }
            },
            {
              p: 'h',
              v: {
                0: enterSteps.h[1],
                1: enterSteps.h[0]
              }
            },
            {
              p: 'x',
              v: {
                0: enterSteps.x[1],
                1: enterSteps.x[0]
              }
            }
          ]
        });
      }
      animation.start();
      animation.on('finish', resolve);
    });

    const animation2 = new Promise(resolve => {
      const enterSteps = {
        x: [this.style.iconOnlyMarginX, this.style.marginX]
      };
      let animation;
      if (this._notificationActivated) {
        animation = this._Content.animation({
          ...this.style.step2Animation,
          actions: [
            {
              p: 'x',
              v: {
                0: enterSteps.x[0],
                1: enterSteps.x[1]
              }
            }
          ]
        });
      } else {
        animation = this._Content.animation({
          ...this.style.step2Animation,
          actions: [
            {
              p: 'x',
              v: {
                0: enterSteps.x[1],
                1: enterSteps.x[0]
              }
            }
          ]
        });
      }
      animation.start();
      animation.on('finish', resolve);
    });

    return Promise.all([animation1, animation2]);
  }

  _step3() {
    return new Promise(resolve => {
      let animation;
      const enterSteps = {
        h: [
          this._totalMarginY + this._contentHeight,
          this._totalMarginY +
            this._contentHeight +
            this.style.actionAreaMarginTop +
            this._actionAreaHeight
        ]
      };

      if (this._notificationActivated && this.actionArea) {
        this._ActionArea.patch({
          alpha: 1,
          x: this.style.marginX,
          y:
            this.style.marginY +
            this._contentHeight +
            this.style.actionAreaMarginTop,
          h: this._actionAreaHeight
        });

        animation = this._Container.animation({
          ...this.style.step3Animation,
          actions: [
            {
              p: 'h',
              v: {
                0: enterSteps.h[0],
                1: enterSteps.h[1]
              }
            }
          ]
        });
      } else if (this._actionArea) {
        animation = this._Container.animation({
          ...this.style.step3Animation,
          actions: [
            {
              p: 'h',
              v: {
                0: enterSteps.h[1],
                1: enterSteps.h[0]
              }
            }
          ]
        });
      } else {
        this._completedAnimations = true;
        resolve();
        return;
      }

      animation.start();
      animation.on('finish', () => {
        this._completedAnimations = true;
        resolve();
      });
    });
  }
}

export default withExtensions(Notification);
