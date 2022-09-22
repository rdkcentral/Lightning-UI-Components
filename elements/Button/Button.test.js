import Button from './Button';
import TestUtils from '../../test/lightning-test-utils';
import Icon from '../Icon';

const createButton = TestUtils.makeCreateComponent(
  Button,
  {},
  { focused: false }
);

describe('Button', () => {
  let component, testRenderer;
  beforeEach(() => {
    [component, testRenderer] = createButton(
      { title: 'Button' },
      { spyOnMethods: ['_update'] }
    );
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

  describe('updateContentPosition', () => {
    it('If justify value is left, then mountX and X position should be', () => {
      component.justify = 'left';
      testRenderer.forceAllUpdates();
      expect(component._Content.x).toEqual(component.style.paddingX);
      expect(component._Content.mountX).toEqual(0);
    });

    it('If justify value is right, then mountX and X position should be', () => {
      component.justify = 'right';
      testRenderer.forceAllUpdates();
      expect(component._Content.x).toEqual(
        component.w - component.style.paddingX
      );
      expect(component._Content.mountX).toEqual(1);
    });
  });

  describe('prefix', () => {
    it('should have a prefix if prefix array is passed to the component', () => {
      expect(component._Prefix).toBeUndefined();

      component.prefix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(component._Prefix).toBeDefined();
    });

    it('should have items populated on Prefix row if prefix is passed', () => {
      expect(component._Prefix).toBeUndefined();

      component.prefix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(component._Prefix.items.length).toEqual(component.prefix.length);
    });
  });

  describe('suffix', () => {
    it('should have a Suffix if suffix array is passed to the component', () => {
      expect(component._Suffix).toBeUndefined();

      component.suffix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(component._Suffix).toBeDefined();
    });

    it('should have items populated on Prefix row if suffix is passed', () => {
      expect(component._Suffix).toBeUndefined();

      component.suffix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(component._Suffix.items.length).toEqual(component.suffix.length);
    });

    it('Suffix should be positioned based on the title and prefix postion', () => {
      expect(component._Prefix).toBeUndefined();

      component.prefix = [{ type: Icon }];
      component.title = '';
      testRenderer.forceAllUpdates();
      expect(component._hasTitle).toBeFalsy();
      expect(component._suffixX).toEqual(
        component._prefixW + component.style.prefixPadding + component._titleW
      );
    });

    it('Suffix should be postioned horizontally at zero if title is empty', () => {
      component.title = '';
      testRenderer.forceAllUpdates();
      expect(component._hasTitle).toBeFalsy();
      expect(component._suffixX).toEqual(0);
    });
  });
});
