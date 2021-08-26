import lng from '@lightningjs/core';
import Base from '../../elements/Base';
import withStyles from '../../mixins/withStyles';
import styles from './ScrollWrapper.styles';

export default class ScrollWrapper extends withStyles(Base, styles) {
  static _template() {
    return {
      clipping: true,
      FadeContainer: {
        ScrollContainer: {
          w: w => w,
          wordWrap: true,
          flex: {
            direction: 'column'
          }
        }
      },
      ScrollBarWrapper: {
        ScrollBarProgressOverlay: {
          w: this.styles.scrollBarContainer.w,
          x: w => w,
          zIndex: 2
        },
        ScrollBarContainer: {
          // bar
          w: this.styles.scrollBarContainer.w,
          x: w => w,
          zIndex: 1
        },
        ScrollBar: {
          // indicator
          texture: lng.Tools.getRoundRect(
            this.styles.scrollBar.w,
            this.styles.scrollBar.h,
            this.styles.scrollBar.radius,
            this.styles.scrollBar.stroke,
            this.styles.scrollBar.strokeColor,
            true,
            this.styles.scrollBar.fillColor
          ),
          w: this.styles.scrollBar.w,
          h: this.styles.scrollBar.h,
          x: w => w,
          zIndex: 3
        }
      }
    };
  }

  static get properties() {
    return [
      'autoScroll',
      'autoScrollDelay',
      'autoScrollSpeed',
      'content',
      'fadeContent',
      'scrollBarY',
      'scrollContainerY',
      'scrollDuration',
      'scrollStep',
      'showScrollBar'
    ];
  }

  static get tags() {
    return [
      'FadeContainer',
      {
        name: 'ScrollContainer',
        path: 'FadeContainer.ScrollContainer'
      },
      {
        name: 'ScrollableText',
        path: 'ScrollContainer.ScrollableText'
      },
      'ScrollBarWrapper',
      {
        name: 'ScrollBarContainer',
        path: 'ScrollBarWrapper.ScrollBarContainer'
      },
      {
        name: 'ScrollBarProgressOverlay',
        path: 'ScrollBarWrapper.ScrollBarProgressOverlay'
      },
      {
        name: 'ScrollBar',
        path: 'ScrollBarWrapper.ScrollBar'
      }
    ];
  }

  _construct() {
    super._construct();
    this._scrollStep = 10;
    this._fadeContent = this.styles.fadeContent || true;
    this._fadeHeight = this.styles.fadeHeight;
  }

  _init() {
    this._contentWidth = this.w - this._ScrollBar.w;
    super._init();
  }

  _focus() {
    this._ScrollBarWrapper.patch({
      smooth: { alpha: this.showScrollBar ? 1 : 0 }
    });
  }

  _unfocus() {
    this._ScrollBarWrapper.patch({
      smooth: { alpha: 0 }
    });
  }

  _waitForComponentLoad() {
    if (this._ScrollContainer.children.length) {
      return Promise.all(
        this._ScrollContainer.children.map(
          child => new Promise(resolve => child.on('txLoaded', resolve))
        )
      );
    } else {
      this.h = 0;
      return Promise.resolve();
    }
  }

  _update() {
    if (this._contentChanged) {
      this.resetScroll();
      this._setupAutoScroll();
      this._contentChanged = false;
    }

    this._initScrollableContent();
    this._updateScrollBarPosition();

    this._waitForComponentLoad().then(() => {
      this._setScrollContainerSize();
      this._updateFadeContainer();
      this._initScrollBar();
    });

    this._updateAlpha();
  }

  _updateFadeContainer() {
    if (this._shouldFadeContent) {
      this._FadeContainer.patch({
        h: this.h,
        w: this._contentWidth,
        rtt: true,
        shader: {
          type: lng.shaders.FadeOut,
          bottom: this._fadeHeight
        }
      });
    }
  }

  _initScrollableContent() {
    if (!this.content) return;
    if (typeof this.content === 'string') {
      // if content is a string, create an element and patch it in
      this._ScrollContainer.patch({
        ScrollableText: {
          h: 0,
          wordWrap: true,
          w: this._contentWidth - this._ScrollBar.w,
          text: {
            ...this.styles.text,
            text: this.content
          }
        }
      });
    } else {
      // else, iterate through array items
      this.content.forEach((item, index) => {
        const content = {};
        const id = `ScrollText${index}`;
        content[id] = {
          w: this._contentWidth - this._ScrollBar.w,
          text: {
            ...this.styles.text,
            ...item.style,
            text: item.text
          }
        };
        this._ScrollContainer.patch(content);
      });
    }
  }

  _updateScrollBarPosition() {
    this._ScrollBar.patch({
      x:
        this._contentWidth -
        (this._ScrollBar.w - this._ScrollBarContainer.w) / 2,
      y: 0
    });
  }

  _setScrollContainerSize() {
    this._ScrollContainer.patch({
      y: 0,
      h: this._scrollableContentHeight + this._fadeHeight,
      w: this._contentWidth
    });
    this._ScrollBarProgressOverlay.patch({
      texture: lng.Tools.getRoundRect(
        this._ScrollBarContainer.w,
        this.renderHeight,
        this.styles.scrollBarContainer.radius,
        0,
        0,
        true,
        this.styles.scrollBarContainer.progressColor
      ),
      h: 1,
      x: this._contentWidth,
      y: 4
    });
  }

  _initScrollBar() {
    if (this.showScrollBar) {
      this._ScrollBarContainer.patch({
        texture: lng.Tools.getRoundRect(
          this._ScrollBarContainer.w,
          this.renderHeight,
          this.styles.scrollBarContainer.radius,
          0,
          0,
          true,
          this.styles.scrollBarContainer.color
        ),
        h: this.renderHeight,
        x: this._contentWidth,
        y: 2
      });
    }
  }

  _handleDown() {
    if (this._scrollContainerY + this._ScrollContainer.h > this.renderHeight) {
      const containerY = this._scrollContainerY - this._scrollStep;
      this._ScrollContainer.patch({
        smooth: {
          y: [
            containerY + this._ScrollContainer.h <= this.renderHeight
              ? this.renderHeight - this._ScrollContainer.h
              : containerY,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      const scrollBarY =
        this._scrollBarY + this._getScrollStep(this.renderHeight);
      this._ScrollBar.patch({
        smooth: {
          y: [
            scrollBarY < this.renderHeight - this.styles.scrollBar.h
              ? scrollBarY
              : this.renderHeight - this.styles.scrollBar.h,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      this._ScrollBarProgressOverlay.patch({
        smooth: {
          h: [
            this._ScrollBar.renderHeight / 2 + this._scrollBarY,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      if (
        this._scrollContainerY + this._ScrollContainer.h <=
        this.renderHeight
      ) {
        this._autoScrollComplete = true;
        this.fireAncestors('$scrollChanged', 'endDown', this);
      }
    }
  }

  _handleUp() {
    if (this._scrollContainerY < 0) {
      const containerY = this._scrollContainerY + this._scrollStep;
      this._ScrollContainer.patch({
        smooth: {
          y: [
            containerY >= 0 ? 0 : this._scrollContainerY + this._scrollStep,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      const scrollBarY =
        this._scrollBarY - this._getScrollStep(this.renderHeight);
      this._ScrollBar.patch({
        smooth: {
          y: [
            scrollBarY > 0 ? scrollBarY : 0,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      this._ScrollBarProgressOverlay.patch({
        smooth: {
          h: [
            this._ScrollBar.renderHeight / 2 + this._scrollBarY,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      if (this._scrollContainerY >= 0) {
        this.fireAncestors('$scrollChanged', 'endUp', this);
      }
    }
  }

  resetScroll() {
    this._ScrollContainer.patch({ y: 0 });
    this._ScrollBar.patch({ y: 0 });
    this._ScrollContainer.transition('y').finish();
    this._ScrollBar.transition('y').finish();
    delete this._ScrollContainer._transitions;
    delete this._ScrollBar._transitions;
    this._autoScrollComplete = false;
  }

  _getScrollStep(height) {
    const numSteps = Math.ceil(
      (this._ScrollContainer.h - this.renderHeight) / this._scrollStep
    );
    return (height - this.styles.scrollBar.h) / numSteps;
  }

  _setAutoScroll(val) {
    if (this._autoScroll !== val) {
      this._autoScroll = val;
    }
    this._setupAutoScroll();
    return val;
  }

  _setupAutoScroll() {
    clearTimeout(this._startAutoScroll);
    clearTimeout(this._performAutoScrollTimer);

    if (this.autoScroll) {
      this._startAutoScroll = setTimeout(
        () => this._performAutoScroll(),
        isNaN(this.autoScrollDelay) ? 2000 : this.autoScrollDelay
      );
    }
  }

  _setShowScrollBar(val) {
    this._ScrollBarWrapper.smooth = { alpha: val ? 1 : 0 };
    return val;
  }

  _performAutoScroll() {
    if (this.autoScroll && !this._autoScrollComplete) {
      this._handleDown();
      this._performAutoScrollTimer = setTimeout(
        () => this._performAutoScroll(),
        isNaN(this.autoScrollSpeed) ? 200 : this.autoScrollSpeed
      );
    }
  }

  _setContent(content) {
    if (content !== this._content && this.enabled) {
      this._contentChanged = true;
    }
    return content;
  }

  _updateAlpha() {
    this._ScrollBarWrapper.patch({
      smooth: { alpha: this.showScrollBar && this.hasFocus() ? 1 : 0 }
    });
  }

  get _scrollContainerY() {
    return this._ScrollContainer.transition('y').targetValue;
  }

  get _scrollBarY() {
    return this._ScrollBar.transition('y').targetValue;
  }

  get _scrollableContentHeight() {
    return this._ScrollContainer.children.reduce(
      (acc, child) => acc + child.renderHeight,
      0
    );
  }

  get _shouldFadeContent() {
    return this._fadeContent && this._scrollableContentHeight > this.h;
  }
}
