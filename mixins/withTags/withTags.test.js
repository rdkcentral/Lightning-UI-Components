import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import withTags from '.';

const updateMock = jest.fn();

describe('withTags', () => {
  let withTagsComponent, testRenderer;
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
    [withTagsComponent, testRenderer] = TestUtils.makeCreateComponent(
      withTags(Example)
    )();
  });

  afterEach(() => {
    withTagsComponent = null;
  });

  it('extends the base class', () => {
    expect(withTagsComponent.constructor.name).toBe('Example');
  });

  it('creates tag for _Title', () => {
    let tag = withTagsComponent.tag('Title');
    expect(withTagsComponent._Title).toEqual(tag);
  });

  it('creates tags _WrappedItem', () => {
    let tag = withTagsComponent.tag('Wrapper.WrappedItem');
    expect(withTagsComponent._WrappedItem).toEqual(tag);
  });
});
