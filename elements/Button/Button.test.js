import Button from './Button';
import TestUtils from '../../test/lightning-test-utils';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createButton = TestUtils.makeCreateComponent(
  Button,
  {},
  { focused: false }
);

describe('Button', () => {
  let component, testRenderer;
  beforeEach(() => {
    [component, testRenderer] = createButton({
      title: 'Button'
    });
    testRenderer.update();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('dimensions', () => {
    it('should grow width dynamically', () => {
      component.patch({
        title:
          'This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title'
      });

      testRenderer.forceAllUpdates();

      expect(component.w).toBeGreaterThan(component.style.minWidth);
    });

    it('should not grow width dynamically if static width is set', () => {
      const expectedW = 400;
      component.patch({
        w: expectedW,
        fixed: true,
        title:
          'This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title'
      });
      expect(component.w).toBe(expectedW);
      expect(component._Title.renderWidth).toBeLessThan(expectedW);
    });
  });

  describe('announcer', () => {
    it('should use the title as the default announce string', () => {
      expect(component.announce).toEqual('Button, Button');
    });

    it('should append Button to end of announce context', () => {
      expect(component.announce).toEqual('Button, Button');
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';

      component._announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(component.announce).toEqual(overrideString);
    });
  });

  describe('focus', () => {
    it('has a default unfocus text color', () => {
      expect(component._Title.textColor).toBe(component.style.textColor);
    });
    it('has a focus text color', () => {
      expect(component._Title.textColor).toBe(component.style.textColor);

      testRenderer.focus();
      testRenderer.forceAllUpdates();

      expect(component._Title.textColor).toBe(component.style.textColor);
    });
    it('should reset text color on unfocus', () => {
      testRenderer.focus();
      testRenderer.forceAllUpdates();

      expect(component._Title.textColor).toBe(component.style.textColor);

      testRenderer.unfocus();
      testRenderer.forceAllUpdates();

      expect(component._Title.textColor).toBe(component.style.textColor);
    });
  });

  describe('prefix', () => {
    it('should have a prefix if either an icon or checkbox is provided', () => {
      expect(component._Prefix).toBeUndefined();

      component.patch({ icon });
      testRenderer.forceAllUpdates();
      expect(component._Prefix).toBeDefined();

      component.patch({ icon: undefined });
      testRenderer.forceAllUpdates();
      expect(component._Prefix).toBeUndefined();

      component.patch({ checkbox: true });
      testRenderer.forceAllUpdates();
      expect(component._Prefix).toBeDefined();
    });

    it('should have an icon if provided', () => {
      [component, testRenderer] = createButton({ icon });
      expect(component._Icon).toBeDefined();
    });

    it('should apply a margin if both prefix and text exist', () => {
      [component, testRenderer] = createButton({
        icon,
        title: 'Button'
      });

      const titleXOffset =
        component.style.prefixMargin + component.style.prefixStyle.w;

      expect(component._Title.x).toBe(titleXOffset);

      component.patch({
        icon: undefined,
        checkbox: true,
        title: 'Button'
      });

      testRenderer.forceAllUpdates();

      expect(component._Title.x).toBe(titleXOffset);
    });

    it('should use prefixStyles', async () => {
      [component, testRenderer] = createButton({ checkbox: true });

      testRenderer.forceAllUpdates();

      expect(component._Prefix.w).toBe(component.prefixStyle.w);
      expect(component._Checkbox.w).toBe(component.prefixStyle.w);
    });

    it('should should have a checkbox if provided', () => {
      [component, testRenderer] = createButton({
        checkbox: true,
        title: 'Button'
      });
      expect(component._Checkbox).toBeDefined();
    });
  });
});
