import lng from '@lightningjs/core';
import Base from '../../elements/Base';
import defaultIcon from '../../Styles/assets/notification_64';
import Icon from '../../elements/Icon';
import InlineContent from '../../layout/InlineContent';
import styles from './Notification.style';
import TextBox from '../../elements/TextBox';
import withStyles from '../../mixins/withStyles';
import { stringifyCompare } from '../../utils';

export default class Notification extends withStyles(Base, styles) {
  static _template() {
    return {
      Container: {
        alpha: this.styles.dismiss.icon.alpha,
        clipping: true,
        color: this.styles.background.color,
        h: this.styles.icon.size + this.styles.margin.y * 2,
        rect: true,
        scale: this.styles.dismiss.container.scale,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.radius
        },
        w: this.styles.icon.size + this.styles.margin.x * 2,
        x: this.styles.w - (this.styles.icon.size + this.styles.margin.x * 2),
        Content: {
          flex: { direction: 'row' },
          x: this.styles.margin.x,
          y: this.styles.margin.y,
          Icon: {
            alpha: this.styles.dismiss.icon.alpha,
            flexItem: { marginRight: this.styles.icon.spacing },
            type: Icon
          },
          Text: {
            alpha: this.styles.dismiss.text.alpha,
            flex: { direction: 'column' },
            Title: {
              signals: {
                textBoxChanged: '_titleChanged'
              },
              style: 'headline3',
              type: TextBox,
              wordWrapWidth:
                this.styles.w -
                (this.styles.icon.size +
                  this.styles.margin.x * 2 +
                  this.styles.margin.x)
            },
            Description: {
              contentWrap: true,
              justify: 'flex-start',
              textStyle: this.styles.description,
              type: InlineContent,
              w:
                this.styles.w -
                (this.styles.icon.size +
                  this.styles.margin.x * 2 +
                  this.styles.margin.x)
            }
          }
        },
        ActionArea: {
          alpha: 0.001,
          color: this.styles.actionArea.background.color,
          w: this.styles.w,
          rect: true,
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: [0, 0, this.styles.radius, this.styles.radius]
          },
          Content: {
            w: this.styles.w - this.styles.margin.x * 2,
            x: this.styles.actionArea.margin.x,
            y: this.styles.actionArea.margin.y,
            Text: {
              contentWrap: true,
              justify: 'flex-start',
              textStyle: this.styles.actionArea.text,
              type: InlineContent,
              y: -4,
              w: this.styles.w - this.styles.margin.x * 2
            }
          }
        }
      }
    };
  }

  static get properties() {
    return ['icon', 'title', 'description', 'actionArea', 'entered'];
  }

  static get tags() {
    return [
      'Container',
      { name: 'Content', path: 'Container.Content' },
      { name: 'Text', path: 'Container.Content.Text' },
      { name: 'ActionArea', path: 'Container.ActionArea' },
      { name: 'ActionAreaText', path: 'Container.ActionArea.Content.Text' },
      { name: 'Icon', path: 'Container.Content.Icon' },
      { name: 'Title', path: 'Container.Content.Title' },
      { name: 'Description', path: 'Container.Content.Description' }
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

  get _totalHeight() {
    const descLineLayouter =
      this._Description.flex && this._Description.flex._layout._lineLayouter;
    if (
      (this._Title.h,
      descLineLayouter &&
        descLineLayouter._lines &&
        descLineLayouter._lines.length)
    ) {
      return (
        this._Title.h +
        this.styles.margin.y * 2 +
        this._Description.textStyle.lineHeight * descLineLayouter._lines.length
      );
    } else {
      return (
        Math.max(this.styles.icon.size, this._Title.h) +
        this.styles.margin.y * 2
      );
    }
  }

  get _actionAreaHeight() {
    if (this.actionArea && this.actionArea.text) {
      const actionAreaLinesLength =
        this._ActionAreaText.flex &&
        this._ActionAreaText.flex._layout._lineLayouter &&
        this._ActionAreaText.flex._layout._lineLayouter._lines &&
        this._ActionAreaText.flex._layout._lineLayouter._lines.length;
      if (actionAreaLinesLength) {
        const actionTextHeight =
          this._ActionAreaText.textStyle.lineHeight * actionAreaLinesLength;
        const actionYMargins = this.styles.actionArea.margin.y * 2;
        return actionTextHeight + actionYMargins;
      }
    }

    return 0;
  }

  _construct() {
    super._construct();
    this._animating = false; // Track if animation is still being processed
    this._descriptionLoadedPromise = null;
    this._actionAreaTextLoadedPromise = null;
    this._icon = defaultIcon; // Resolved when description texture is loaded
    this._notificationActivated = false; // Toggled when enter() is called
    this._notificationOpen = false; // Animation has completed
    this._titleLoadedPromise = null; // Resolved when title texture is loaded
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

  _update() {
    this._updateIcon();
    this._updateTitle();
    this._updateDescription();
    this._updateActionArea();
    if (this._notificationActivated && this._triggerUpdate) {
      this._updateLayout();
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

  async _updateLayout() {
    if (this._animating || !this._notificationOpen) return;
    await this._waitForElementsToRender();
    const actionAreaHeight = this._actionAreaHeight;
    this._Container.h = this._totalHeight + actionAreaHeight;
    if (this._actionArea) {
      this._ActionArea.patch({
        y: this._totalHeight,
        h: actionAreaHeight,
        alpha: 1
      });
    }
  }

  _updateIcon() {
    this._Icon.patch({
      icon: this._icon,
      h: this.styles.icon.size,
      w: this.styles.icon.size
    });
  }

  _updateTitle() {
    if (this._title) {
      this._Title.content = this._title;
    } else {
      this._Title.content = undefined;
    }
    // Position the title in the center if description is not defined
    if (this._title && !this._description) {
      this._Content.patch({
        flex: { direction: 'row', alignItems: 'center' }
      });
    } else {
      this._Content.patch({
        flex: { direction: 'row' }
      });
    }
  }

  _updateDescription() {
    if (this._description) {
      this._Description.content = this._description;
    } else {
      this._Description.content = undefined;
      this._descriptionLoaded(true);
    }
  }

  _updateActionArea() {
    if (this._actionArea && this._actionArea.text) {
      this._ActionAreaText.patch({
        content: this._actionArea.text
      });
    } else {
      this._ActionAreaText.patch({
        content: undefined
      });
      this._actionAreaTextLoaded(true);
    }
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
    if (!stringifyCompare(this._actionArea, actionArea)) {
      this._triggerUpdate = true; // This will effect the height of the component if changed after Notification is open
      this._actionAreaTextLoadedPromise = new Promise(resolve => {
        this._actionAreaTextLoaded = resolve;
      });
    }
    return actionArea;
  }

  _titleChanged() {
    // Resolve promise after title is completely loaded
    this._titleLoaded(true);
  }

  $loadedInlineContent(inlineContent) {
    const loadedTag = inlineContent.ref;
    // Resolve promises for each InlineContent element once they have loaded
    if (loadedTag === 'Description') {
      this._descriptionLoaded(true);
    }
    if (loadedTag === 'Text') {
      this._actionAreaTextLoaded(true);
    }
  }

  async enter() {
    if (this._animating || this._notificationOpen) return;
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

  async _animate(updateOnly = false) {
    this._animating = true;
    await this._waitForElementsToRender();
    for (const step in this._animations) {
      await this._animations[step].call(this, updateOnly);
    }

    this._animating = false;
    this._notificationOpen = this._notificationActivated;
  }

  _step1(updateOnly = false) {
    return new Promise(resolve => {
      let animation;
      if (this._notificationActivated) {
        this._Content.h = this.styles.icon.size; // Make sure icon is always centered
        animation = this._Container.animation({
          duration: 0.34,
          delay: 0,
          actions: [
            {
              p: 'alpha',
              v: {
                0: this.styles.dismiss.icon.alpha,
                1: this.styles.enter.container.alpha
              }
            },
            {
              p: 'scale',
              v: {
                0: this.styles.dismiss.container.scale,
                0.8: this.styles.enter.container.scale + (updateOnly ? 0 : 0.1),
                1: this.styles.enter.container.scale
              }
            }
          ]
        });
        this._Icon.smooth = {
          alpha: this.styles.enter.icon.alpha
        };
      } else {
        animation = this._Container.animation({
          duration: 0.34,
          delay: 0,
          actions: [
            {
              p: 'alpha',
              v: {
                0: this.styles.enter.container.alpha,
                1: this.styles.dismiss.container.alpha
              }
            },
            {
              p: 'scale',
              v: {
                0: this.styles.enter.container.scale,
                0.1:
                  this.styles.dismiss.container.scale + (updateOnly ? 0 : 0.1),
                1: this.styles.dismiss.container.scale
              }
            }
          ]
        });

        this._Icon.smooth = {
          alpha: this.styles.dismiss.icon.alpha
        };
      }
      animation.start();
      animation.on('finish', resolve);
    });
  }

  _step2() {
    const animation1 = new Promise(resolve => {
      let animation;
      if (this._notificationActivated) {
        this._Text.smooth = {
          alpha: [this.styles.enter.text.alpha, { duration: 0.28, delay: 0.4 }]
        };
        animation = this._Container.animation({
          duration: 0.24,
          delay: 0.2,
          actions: [
            {
              p: 'w',
              v: {
                0: this.styles.icon.size + this.styles.margin.x * 2,
                1: this.styles.w
              }
            },
            {
              p: 'h',
              v: {
                0: this.styles.icon.size + this.styles.margin.y * 2,
                1: this._totalHeight
              }
            },
            {
              p: 'x',
              v: {
                0:
                  this.styles.w -
                  (this.styles.icon.size + this.styles.margin.x * 2),
                1: 0
              }
            }
          ]
        });
      } else {
        this._Text.smooth = {
          alpha: [this.styles.dismiss.text.alpha, { duration: 0.28, delay: 0 }]
        };
        animation = this._Container.animation({
          duration: 0.24,
          delay: 0.2,
          actions: [
            {
              p: 'w',
              v: {
                0: this.styles.w,
                1: this.styles.icon.size + this.styles.margin.x * 2
              }
            },
            {
              p: 'h',
              v: {
                0: this._totalHeight,
                1: this.styles.icon.size + this.styles.margin.y * 2
              }
            },
            {
              p: 'x',
              v: {
                0: 0,
                1:
                  this.styles.w -
                  (this.styles.icon.size + this.styles.margin.x * 2)
              }
            }
          ]
        });
      }
      animation.start();
      animation.on('finish', resolve);
    });

    const animation2 = new Promise(resolve => {
      let animation;
      if (this._notificationActivated) {
        animation = this._Content.animation({
          duration: 0.24,
          delay: 0.2,
          actions: [
            {
              p: 'h',
              v: {
                0: this._Content.h,
                1: this._totalHeight - this.styles.margin.y * 2
              }
            }
          ]
        });
      } else {
        animation = this._Content.animation({
          duration: 0.24,
          delay: 0.2,
          actions: [
            {
              p: 'h',
              v: {
                0: this._totalHeight - this.styles.margin.y * 2,
                1: this.styles.icon.size
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
      const actionAreaHeight = this._actionAreaHeight;
      if (
        this._notificationActivated &&
        this._actionArea &&
        this._actionArea.text
      ) {
        this._ActionArea.patch({
          y: this._totalHeight,
          alpha: 1,
          h: actionAreaHeight
        });
        animation = this._Container.animation({
          duration: 0.24,
          delay: 0.5,
          actions: [
            {
              p: 'h',
              v: {
                0: this._totalHeight,
                1: this._totalHeight + actionAreaHeight
              }
            }
          ]
        });
      } else if (this._actionArea) {
        animation = this._Container.animation({
          duration: 0.24,
          delay: 0.5,
          actions: [
            {
              p: 'h',
              v: {
                0: this._totalHeight + actionAreaHeight,
                1: this._totalHeight
              }
            }
          ]
        });
      } else {
        resolve();
        return;
      }

      animation.start();
      animation.on('finish', resolve);
    });
  }
}
