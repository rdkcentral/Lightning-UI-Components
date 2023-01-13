import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './ScrollWrapper.styles.js';
import TextBox from '../TextBox/index.js';
import ScrollSlider from './ScrollSlider.js';

class ScrollWrapper extends Base {
  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      clipping: true,
      FadeContainer: {
        ScrollContainer: {
          w: w => w,
          wordWrap: true
        }
      },
      Slider: {
        type: ScrollSlider,
        vertical: true,
        signals: {
          onChange: '_updateScrollContainerSize'
        },
        announce: ' '
      }
    };
  }

  static get __componentName() {
    return 'ScrollWrapper';
  }

  static get properties() {
    return [
      'autoScroll',
      'autoScrollDelay',
      'autoScrollSpeed',
      'content',
      'fadeContent',
      'scrollDuration',
      'scrollStep',
      'showScrollBar',
      'shouldWrap',
      'flexDirection'
    ];
  }

  static get tags() {
    return [
      'FadeContainer',
      'Slider',
      {
        name: 'ScrollContainer',
        path: 'FadeContainer.ScrollContainer'
      },
      {
        name: 'ScrollableText',
        path: 'ScrollContainer.ScrollableText'
      }
    ];
  }

  _construct() {
    super._construct();
    this._scrollStep = 10;
    this._shouldWrap = false;
    this._flexDirection = 'column';
    this._fadeContent = true;
    this._sliderWidth = 0;
  }

  $itemChanged() {
    // ScrollContainer uses flexbox, ensure a full stage layout so finalH is accurate
    this.stage.update();
    this._updateScrollWrapperLayout();
    this._updateAlpha();
  }

  _resetFlexContainer() {
    this._FadeContainer.patch({ ScrollContainer: undefined });
    this._FadeContainer.patch({
      ScrollContainer: { w: w => w, wordWrap: true }
    });
  }

  _update() {
    if (this._contentChanged) {
      this._resetFlexContainer();
      this._updateAutoScroll();
    }
    this._updateScrollContainer();
    this._updateScrollWrapperLayout();
    this._updateAlpha();
  }

  _updateAutoScroll() {
    this.resetScroll();
    this._setupAutoScroll();
    this._contentChanged = false;
  }

  _updateScrollWrapperLayout() {
    this._ScrollContainer.patch({
      w: this._contentWidth
    });
    this._updateFadeContainer();
    this._updateSlider();
  }

  _updateAlpha() {
    this._Slider.patch({
      smooth: {
        alpha: this.showScrollBar && this._isFocusedMode ? 1 : 0
      }
    });
  }

  _updateFadeContainer() {
    const isScrollable = this._ScrollContainer.finalH > this.h;
    const shouldFade =
      this.fadeContent && isScrollable && !this._isEndContentVisible;

    this._FadeContainer.patch({
      h: this.h,
      w: this._contentWidth,
      y: this.style.contentMarginTop,
      x: this.style.contentMarginLeft,
      rtt: true,
      shader: shouldFade
        ? {
            type: lng.shaders.FadeOut,
            bottom: this.style.fadeHeight
          }
        : undefined
    });
  }

  _scrollContainerLoaded({ h }) {
    this._ScrollContainer.h = h;
    this._updateScrollWrapperLayout();
  }

  _updateScrollContainer() {
    if (!this.content) return;

    if (typeof this.content === 'string') {
      this._ScrollContainer.patch({
        flex: { direction: 'column' },
        ScrollableText: {
          h: 0,
          w: this._contentWidth,
          type: TextBox,
          content: this.content,
          style: {
            textStyle: {
              ...this.style.textStyle,
              wordWrap: true,
              wordWrapWidth: this._contentWidth
            }
          },
          signals: {
            textBoxChanged: '_scrollContainerLoaded'
          }
        }
      });
    } else if (Array.isArray(this.content)) {
      const content = {};
      this.content.forEach((item, index) => {
        const id = `ScrollText${index}`;
        content[id] = {
          w: this._contentWidth,
          ...item
        };
        if (item.text) {
          content[id] = {
            type: TextBox,
            content: item.text,
            style: {
              textStyle: {
                ...this.style.textStyle,
                ...item.style,
                wordWrap: true,
                wordWrapWidth: this._contentWidth
              }
            }
          };
        }
      });
      this._ScrollContainer.patch({
        flex: { direction: this.flexDirection, wrap: this.shouldWrap },
        ...content
      });
    }
  }

  _scrollDown() {
    const hasContentToScrollTo =
      this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight;
    if (hasContentToScrollTo) {
      const targetY = this._scrollContainerY - this.scrollStep;
      const canScrollByStepLength =
        targetY + this._ScrollContainer.finalH > this.renderHeight;
      const scrollEndY =
        this.renderHeight -
        this._ScrollContainer.finalH -
        this.style.contentMarginTop;

      this._ScrollContainer.patch({
        smooth: {
          y: [
            canScrollByStepLength ? targetY : scrollEndY,
            this._scrollAnimation
          ]
        }
      });

      const hasScrolledToEnd =
        this._scrollContainerY + this._ScrollContainer.finalH <= this.h;

      if (hasScrolledToEnd) {
        this._isEndContentVisible = true;
        this._autoScrollComplete = true;
        this.fireAncestors('$scrollChanged', 'endDown', this);
        this._updateFadeContainer();
      }
    }
  }

  _scrollUp() {
    const canScrollUp = this._scrollContainerY < 0;

    if (canScrollUp) {
      const targetY = this._scrollContainerY + this.scrollStep;
      const canScrollByStepLength = targetY < 0;

      this._ScrollContainer.patch({
        smooth: {
          y: [canScrollByStepLength ? targetY : 0, this._scrollAnimation]
        }
      });

      const isScrollable =
        this._scrollContainerY + this._ScrollContainer.finalH >
        this.renderHeight;
      if (isScrollable) {
        this._autoScrollComplete = false;
      }

      if (this._scrollContainerY >= 0) {
        this.fireAncestors('$scrollChanged', 'endUp', this);
      }

      if (this._isEndContentVisible) {
        this._isEndContentVisible = false;
        this._updateFadeContainer();
      }
    }
  }

  resetScroll() {
    this._ScrollContainer.patch({ y: 0 });
    this._Slider.patch({ value: 0 });
    this._ScrollContainer.transition('y').finish();
    delete this._ScrollContainer._transitions;
    this._autoScrollComplete = false;
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
    this._Slider.smooth = { alpha: val ? 1 : 0 };
    return val;
  }

  _performAutoScroll() {
    if (this.autoScroll && !this._autoScrollComplete) {
      this._Slider._handleDown();
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

  _updateScrollContainerSize(sliderValue, slider) {
    if (this._sliderWidth !== slider._Container.h) {
      this._sliderWidth = slider._Container.h;
      this._updateScrollContainer();
    }
  }

  _updateSlider() {
    // height of off screen items that can be scrolled to
    const scrollHeight = this._ScrollContainer.finalH - this.renderHeight;
    // number of steps to scroll to bottom of ScrollContainer
    const contentScrollSteps = Math.ceil(scrollHeight / this.scrollStep);
    // max value of slider
    const sliderMax = this.renderHeight;
    // distance slider should move on each key press
    const sliderStep = sliderMax / contentScrollSteps;

    // This is a vertical slider, so w is actually controlling the height
    this._Slider.patch({
      x: this.w - this._sliderWidth,
      w: sliderMax,
      min: 0,
      max: sliderMax,
      step: sliderStep,
      onUp: this._scrollUp.bind(this),
      onDown: this._scrollDown.bind(this)
    });
  }

  get _contentWidth() {
    return (
      this.w -
      this.style.contentMarginLeft -
      this.style.sliderMarginLeft -
      this._sliderWidth
    );
  }

  get _scrollContainerY() {
    return this._ScrollContainer.transition('y').targetValue;
  }

  get _scrollAnimation() {
    const duration = isNaN(this.scrollDuration)
      ? this.style.scroll.duration
      : this.scrollDuration;
    return {
      ...this.style.scroll,
      duration
    };
  }

  _getFocused() {
    return this._Slider;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    if (Array.isArray(this.content)) {
      if (
        this._ScrollContainer &&
        this._ScrollContainer.children &&
        this._ScrollContainer.children.length
      ) {
        return this._ScrollContainer.children.map(item => item.announce);
      } else {
        return this.content.map(item => item.announce || item.text);
      }
    }
    return this.content;
  }
}

export default withExtensions(ScrollWrapper);
