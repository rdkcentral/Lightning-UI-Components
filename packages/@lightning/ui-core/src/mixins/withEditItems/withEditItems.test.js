import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import withEditItems from './index.js';
import { Button } from '../../components/index.js';
import { expect, jest } from '@jest/globals';
import { Row } from '../../components/index.js';

const createComponent = makeCreateComponent(
  withEditItems(Row),
  {
    w: 1920 - 160, // x offset from preview.js * 2
    itemSpacing: 24,
    editMode: false,
    alwaysScroll: false,
    neverScroll: true,
    items: Array.apply(null, { length: 6 }).map((_, i) => ({
      type: Button,
      title: `Button ${i + 1}`,
      w: 150
    }))
  },
  { focused: false },
  { spyOnMethods: ['swapItemArrayPos'] }
);

describe('withEdititems', () => {
  let withEditItemsRow, testRenderer;

  beforeEach(() => {
    [withEditItemsRow, testRenderer] = createComponent({
      spyOnMethods: ['_update']
    });
  });
  afterEach(() => {
    withEditItemsRow = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('re-arranges its items array after enter press and nav', () => {
    const spy = jest.spyOn(withEditItemsRow, '_swapItemArrayPos');
    withEditItemsRow.toggleEdit();
    withEditItemsRow.selectNext();
    expect(spy).toBeCalled();
  });
});
