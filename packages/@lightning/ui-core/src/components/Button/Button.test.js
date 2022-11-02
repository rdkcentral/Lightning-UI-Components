import lng from '@lightningjs/core';
import Button from './Button';
import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import Icon from '../Icon/index.js';
import Checkbox from '../Checkbox';
const createButton = makeCreateComponent(Button, {}, { focused: false });

describe('Button', () => {
  let button, testRenderer;
  beforeEach(() => {
    [button, testRenderer] = createButton(
      { title: 'Button' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });
  afterEach(() => {
    button = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('dimensions', () => {
    it('should grow width dynamically', () => {
      button.patch({
        title:
          'This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title'
      });

      testRenderer.forceAllUpdates();

      expect(button.w).toBeGreaterThan(button.style.minWidth);
    });

    it('should not grow width dynamically if static width is set', () => {
      const expectedW = 400;
      button.patch({
        w: expectedW,
        fixed: true,
        title:
          'This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title'
      });
      expect(button.w).toBe(expectedW);
      expect(button._Title.renderWidth).toBeLessThan(expectedW);
    });
  });

  describe('announcer', () => {
    it('sets the announce string to the title and relevant prefix/suffix strings', () => {
      const title = 'title';
      button.title = title;
      testRenderer.forceAllUpdates();
      expect(button.announce).toEqual([title, 'Button']);

      const prefix = [{ type: Icon, icon: 'test.png', announce: 'test' }];
      const suffix = [{ type: Checkbox, checked: true }];
      button.patch({ prefix, suffix });
      testRenderer.forceAllUpdates();
      expect(button.announce).toEqual([title, 'Button', 'test', 'Checked']);
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';
      button.announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(button.announce).toEqual(overrideString);
    });
  });

  describe('focus', () => {
    it('has a default unfocus text color', () => {
      expect(button._Title.textColor).toBe(button.style.textColor);
    });
    it('has a focus text color', () => {
      expect(button._Title.textColor).toBe(button.style.textColor);

      testRenderer.focus();
      testRenderer.forceAllUpdates();

      expect(button._Title.textColor).toBe(button.style.textColor);
    });
    it('should reset text color on unfocus', () => {
      testRenderer.focus();
      testRenderer.forceAllUpdates();

      expect(button._Title.textColor).toBe(button.style.textColor);

      testRenderer.unfocus();
      testRenderer.forceAllUpdates();

      expect(button._Title.textColor).toBe(button.style.textColor);
    });
  });

  describe('updateContentPosition', () => {
    it('If justify value is left, then mountX and X position should be', () => {
      button.justify = 'left';
      testRenderer.forceAllUpdates();
      expect(button._Content.x).toEqual(button.style.paddingX);
      expect(button._Content.mountX).toEqual(0);
    });

    it('If justify value is right, then mountX and X position should be', () => {
      button.justify = 'right';
      testRenderer.forceAllUpdates();
      expect(button._Content.x).toEqual(button.w - button.style.paddingX);
      expect(button._Content.mountX).toEqual(1);
    });
  });

  describe('prefix', () => {
    it('should have a prefix if prefix array is passed to the button', () => {
      expect(button._Prefix).toBeUndefined();

      button.prefix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(button._Prefix).toBeDefined();
    });

    it('should have items populated on Prefix row if prefix is passed', () => {
      expect(button._Prefix).toBeUndefined();

      button.prefix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(button._Prefix.items.length).toEqual(button.prefix.length);
    });
  });

  describe('suffix', () => {
    it('should have a Suffix if suffix array is passed to the button', () => {
      expect(button._Suffix).toBeUndefined();

      button.suffix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(button._Suffix).toBeDefined();
    });

    it('should have items populated on Prefix row if suffix is passed', () => {
      expect(button._Suffix).toBeUndefined();

      button.suffix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(button._Suffix.items.length).toEqual(button.suffix.length);
    });

    it('Suffix should be positioned based on the title and prefix position', () => {
      expect(button._Prefix).toBeUndefined();

      button.prefix = [{ type: Icon }];
      button.title = '';
      testRenderer.forceAllUpdates();
      expect(button._hasTitle).toBeFalsy();
      expect(button._suffixX).toEqual(
        button._prefixW + button.style.itemSpacing + button._titleW
      );
    });

    it('Suffix should be positioned horizontally at zero if title is empty', () => {
      button.title = '';
      testRenderer.forceAllUpdates();
      expect(button._hasTitle).toBeFalsy();
      expect(button._suffixX).toEqual(0);
    });
  });

  describe('truncation for Buttons with fixed width', () => {
    beforeEach(() => {
      const title = 'long text ';
      button.title = title.repeat(10);
      button.fixed = true;
      button.w = 500;
    });

    it('should truncate overflowing text', async () => {
      await button.__updateSpyPromise;
      testRenderer.update();
      const wA = button._fixedWordWrapWidth;
      expect(button._Title.wordWrapWidth).toBe(wA);

      button.prefix = [{ type: lng.Component, w: 20, h: 20 }];
      await button.__updateSpyPromise;
      testRenderer.update();
      const wB = button._fixedWordWrapWidth;
      expect(button._Title.wordWrapWidth).toBe(wB);
      expect(wB).toBeLessThan(wA);

      button.suffix = [{ type: lng.Component, w: 20, h: 20 }];
      await button.__updateSpyPromise;
      testRenderer.update();
      const wC = button._fixedWordWrapWidth;
      expect(button._Title.wordWrapWidth).toBe(wC);
      expect(wC).toBeLessThan(wB);
    });
  });
});
