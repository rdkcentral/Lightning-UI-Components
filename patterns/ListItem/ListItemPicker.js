import ListItem from '.';
import { Arrow } from '../../textures';
import Row from '../../layout/Row';

export default class ListItemPicker extends ListItem {
  _construct() {
    super._construct();
    this._whenEnabled = new Promise(
      resolve => (this._firstActive = resolve),
      console.error
    );
    this._options = [];
    this._selectedOptionIndex = 0;
  }
  _init() {
    this.subtitle = this.selectedOption;
    super._init();
    this._Container.patch({
      LeftArrow: {
        visible: this.hasFocus(),
        flexItem: false,
        mount: 0.5,
        x: 24,
        y: h => h / 2,
        zIndex: 2,
        texture: {
          type: Arrow,
          direction: 'left',
          h: 25,
          w: 14
        }
      },
      RightArrow: {
        visible: this.hasFocus(),
        flexItem: false,
        mount: 0.5,
        x: w => w - 24,
        y: h => h / 2,
        zIndex: 2,
        texture: {
          type: Arrow,
          direction: 'right',
          h: 25,
          w: 14
        }
      }
    });
    this._update();
  }

  _unfocus() {
    super._unfocus();
    this._update();
  }

  _focus() {
    super._focus();
    this._update();
  }

  _updateArrows() {
    this._Container.patch({
      LeftArrow: {
        visible: this.hasFocus()
      },
      RightArrow: {
        visible: this.hasFocus()
      }
    });
  }

  _updateCarousel() {
    this._Left.patch({
      Carousel: {
        type: Row,
        h: this.styles.subtitle.text.lineHeight,
        w: this._Left.finalW,
        visible: this.hasFocus(),
        alwaysScroll: true,
        scrollMount: 0,
        clipping: true,
        items: this.options.map(option => ({
          h: this.styles.subtitle.text.lineHeight,
          w: this._Left.finalW,
          text: {
            ...this.styles.subtitle.text,
            textAlign: 'center',
            textColor: this.styles.focused.subtitle.color,
            text: option
          }
        })),
        signals: {
          selectedChange: '_onSelectedChange'
        }
      }
    });

    // TODO: hack to get around wonky rendering when selectedIndex > 1
    // can remove when issue is resolved in Row/FocusManager
    const { _selectedOptionIndex } = this;
    while (
      Number.isInteger(_selectedOptionIndex) &&
      _selectedOptionIndex !== this._Carousel.selectedIndex
    ) {
      if (_selectedOptionIndex > this._Carousel.selectedIndex) {
        this._Carousel.selectedIndex++;
      } else {
        this._Carousel.selectedIndex--;
      }
    }
  }

  _updateLeft() {
    this._Left.patch({
      flex: {
        alignItems: this.hasFocus() ? 'center' : 'flex-start'
      },
      flexItem: {
        grow: 1
      }
    });
  }

  _updateTitle() {
    super._updateTitle();
    this._Left.patch({
      Title: {
        h: this.styles.title.text.lineHeight,
        text: { textAlign: this.hasFocus() ? 'center' : 'left' }
      }
    });
  }

  _updateSubtitle() {
    super._updateSubtitle();
    this._Left.patch({
      Subtitle: {
        visible: !this.hasFocus(),
        text: this.selectedOption
      }
    });
  }

  _update() {
    this._whenEnabled.then(() => {
      super._update();
      this._updateLeft();
      this._updateArrows();
      this._updateCarousel();
      this._updateTitle();
      this._updateSubtitle();
    });
  }

  _getFocused() {
    return this._Carousel;
  }

  _onSelectedChange() {
    if (this._selectedOptionIndex !== this._Carousel.selectedIndex) {
      this._selectedOptionIndex = this._Carousel.selectedIndex;
      this.fireAncestors(
        '$listItemPickerChanged',
        this.selectedOption,
        this._selectedOptionIndex,
        this
      );
      if (this._Carousel.selectedIndex === 0) {
        this._Container.tag('LeftArrow').smooth = { alpha: 0.48 };
      } else if (this._Carousel.selectedIndex === this.options.length - 1) {
        this._Container.tag('RightArrow').smooth = { alpha: 0.48 };
      } else {
        this._Container.patch({
          LeftArrow: {
            smooth: {
              alpha: 1
            }
          },
          RightArrow: {
            smooth: {
              alpha: 1
            }
          }
        });
      }
    }
  }

  get selectedOption() {
    return this.options[this._selectedOptionIndex];
  }

  get selectedOptionIndex() {
    return this._selectedOptionIndex;
  }

  set selectedOptionIndex(index) {
    if (index !== this._selectedOptionIndex) {
      this._selectedOptionIndex = index;
      this._update();
    }
  }

  get options() {
    return this._options;
  }

  set options(options) {
    if (options !== this._options) {
      this._options = options;
      this._update();
    }
  }

  get _Carousel() {
    return this.tag('Container.Left.Carousel');
  }
}
