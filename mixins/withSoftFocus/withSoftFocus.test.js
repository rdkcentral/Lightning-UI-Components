import TestUtils from '../../test/lightning-test-utils';
import withSoftFocus from '.';
import { ListItem } from '../../patterns';

const createComponent = TestUtils.makeCreateComponent(
  withSoftFocus(ListItem),
  {},
  { focused: false }
);

describe('withSoftFocus', () => {
  let withSoftFocusListItem, testRenderer;

  beforeEach(() => {
    [withSoftFocusListItem, testRenderer] = createComponent();
  });
  afterEach(() => {
    withSoftFocusListItem = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
  it('Initial state: not focused, not softFocused', () => {
    expect(withSoftFocusListItem.hasFocus()).toBe(false);
    expect(withSoftFocusListItem._softFocused).toBeDefined();
    expect(withSoftFocusListItem._softFocused).toBe(false);
    expect(withSoftFocusListItem._SoftFocusMarker).toBeDefined();
    expect(withSoftFocusListItem._SoftFocusMarker.alpha).toBe(0);
  });
  it('gain focus', () => {
    withSoftFocusListItem._focus();
    testRenderer.focus();
    expect(withSoftFocusListItem.hasFocus()).toBe(true);
    expect(withSoftFocusListItem._softFocused).toBeDefined();
    expect(withSoftFocusListItem._softFocused).toBe(true);
    expect(withSoftFocusListItem._SoftFocusMarker).toBeDefined();
    expect(withSoftFocusListItem._SoftFocusMarker.alpha).toBe(0);
  });
  it('lose focus', () => {
    withSoftFocusListItem._focus();
    testRenderer.focus();
    withSoftFocusListItem._unfocus();
    testRenderer.unfocus();
    expect(withSoftFocusListItem.hasFocus()).toBe(false);
    expect(withSoftFocusListItem._softFocused).toBeDefined();
    expect(withSoftFocusListItem._softFocused).toBe(true);
    expect(withSoftFocusListItem._SoftFocusMarker).toBeDefined();
    expect(withSoftFocusListItem._SoftFocusMarker.alpha).toBe(1);
  });
  it('lose softFocus', () => {
    withSoftFocusListItem._focus();
    testRenderer.focus();
    withSoftFocusListItem._unfocus();
    testRenderer.unfocus();
    withSoftFocusListItem.softFocused = false;
    expect(withSoftFocusListItem.hasFocus()).toBe(false);
    expect(withSoftFocusListItem._softFocused).toBeDefined();
    expect(withSoftFocusListItem._softFocused).toBe(false);
    expect(withSoftFocusListItem._SoftFocusMarker).toBeDefined();
    expect(withSoftFocusListItem._SoftFocusMarker.alpha).toBe(0);
  });
});
