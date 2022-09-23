import Base from '../../Base';
import { withExtensions } from '../../mixins';
import { stringifyCompare } from '../../utils';

class ContentSwitcher extends Base {
  static get __componentName() {
    return 'ContentSwitcher';
  }

  static get properties() {
    return ['selectedIndex'];
  }

  _construct() {
    super._construct();
    this._selectedIndex = 0;
    this._contentItems = [];
  }

  _update() {
    super._update();
    this._updateSelected();
  }

  _updateSelected() {
    if (this._preveSelectedIndex !== this.selectedIndex) {
      if (this._preveSelectedIndex !== undefined) {
        const prevContent = this.tag(`Content${this._preveSelectedIndex}`);
        prevContent.smooth = { alpha: 0 };
        if (this._hasContent) {
          prevContent._getTransition('alpha').once('finish', () => {
            this._fadeInContent();
          });
        }
      } else if (this._hasContent) {
        this._fadeInContent();
      }
      this._preveSelectedIndex = this.selectedIndex;
    }
  }

  _fadeInContent() {
    this._selectedContent.smooth = { alpha: 1 };
    this._selectedContent._getTransition('alpha').once('finish', () => {
      this.h = this._selectedContent.h;
      this.signal('contentHeightChange', this.h);
    });
  }

  _updateContent() {
    const allContent = this.contentItems.reduce((acc, item, idx) => {
      let component;
      const tagName = `Content${idx}`;

      if (typeof item === 'function') {
        const componentLoader = item();
        if (componentLoader.then) {
          // update template async after component has loaded
          this._loadAsyncComponent(componentLoader, idx);
        } else {
          component = componentLoader;
        }
      } else {
        component = item;
      }

      if (component) {
        acc[tagName] = {
          ...component,
          alpha: 0
        };
      }

      return acc;
    }, {});
    this.patch(allContent);
  }

  _loadAsyncComponent(componentLoader, idx) {
    componentLoader.then(component => {
      const tagName = `Content${idx}`;
      this.patch({ [tagName]: { ...component, alpha: 0 } });
    });
  }

  set contentItems(contentItems) {
    if (!stringifyCompare(contentItems, this._contentItems)) {
      this._contentItems = contentItems;
      this._updateContent();
    }
  }

  get contentItems() {
    return this._contentItems;
  }

  get _hasContent() {
    return this._selectedContent && this._selectedContent.children.length > 0;
  }

  get _selectedContent() {
    return this.tag(`Content${this.selectedIndex}`);
  }

  _getFocused() {
    if (this._hasContent) {
      return this._selectedContent;
    }
  }
}

export default withExtensions(ContentSwitcher);
