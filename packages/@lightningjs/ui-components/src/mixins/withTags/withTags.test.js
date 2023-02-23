import lng from '@lightningjs/core';
import { makeCreateComponent } from '@lightningjs/ui-test-utils';

import withTags from './index.js';

describe('withTags', () => {
  let withTagsComponent;
  class Example extends lng.Component {
    static get tags() {
      return ['Title', { name: 'WrappedItem', path: 'Wrapper.WrappedItem' }];
    }

    static _template() {
      return {
        x: 50,
        y: 50,
        Title: {
          text: 'title'
        },
        Wrapper: {
          WrappedItem: {
            text: 'WrappedItem'
          }
        }
      };
    }
  }

  beforeEach(() => {
    [withTagsComponent] = makeCreateComponent(withTags(Example))();
  });

  afterEach(() => {
    withTagsComponent = null;
  });

  it('extends the base class', () => {
    expect(withTagsComponent.constructor.name).toBe('Example');
  });

  it('creates tag for _Title', () => {
    const tag = withTagsComponent.tag('Title');
    expect(withTagsComponent._Title).toEqual(tag);
  });

  it('creates tags _WrappedItem', () => {
    const tag = withTagsComponent.tag('Wrapper.WrappedItem');
    expect(withTagsComponent._WrappedItem).toEqual(tag);
  });
});
