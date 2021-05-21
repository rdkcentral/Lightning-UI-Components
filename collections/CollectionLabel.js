import lng from '@lightningjs/core';
import withUpdates from '../mixins/withUpdates';
import withTags from '../mixins/withTags';
import { TYPOGRAPHY } from '../Styles';

export default class CollectionLabel extends withTags(
  withUpdates(lng.Component)
) {
  static _template() {
    return {
      h: TYPOGRAPHY.caption.lineHeight,
      skipFocus: true,
      Label: {
        text: {
          ...TYPOGRAPHY.caption
        }
      }
    };
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return ['Label'];
  }

  _update() {
    if (this.title) this._Label.text.text = this.title;
  }
}
