import TestUtils from '../../test/lightning-test-utils';
import Input from '.';
import { PALETTE, getHexColor } from '../../Styles/Colors';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';

const createInput = TestUtils.makeCreateComponent(Input);

describe('Input', () => {
  let input, testRenderer;

  beforeEach(() => {
    [input, testRenderer] = createInput();
  });
  afterEach(() => {
    input = null;
    testRenderer = null;
    jest.clearAllMocks();
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders a placeholder', () => {
    [input, testRenderer] = createInput({
      placeholder: 'placeholder'
    });

    const tree = testRenderer.toJSON(2);
    expect(input.placeholder).toBe('placeholder');
    expect(tree).toMatchSnapshot();
  });

  it('renders a value', () => {
    [input, testRenderer] = createInput({
      placeholder: 'placeholder',
      value: 'value'
    });

    const tree = testRenderer.toJSON(2);
    expect(input.value).toBe('value');
    expect(tree).toMatchSnapshot();
  });

  it('renders a label', () => {
    [input, testRenderer] = createInput({
      label: 'Label'
    });
    expect(input._label).toBe('LABEL');
  });

  it('renders custom dimensions', () => {
    [input, testRenderer] = createInput({
      w: 200,
      h: 50,
      radius: 2
    });
    input._Container.loadTexture();
    // lookup ID provides texture dimensions: shadow{w}{h}{radius}{blur}{...margin}
    expect(input._Container.texture._lookupId).toEqual('rect,64,,,0,,8,8,8,8');
  });

  it('cursor moves left and right', async () => {
    [input, testRenderer] = createInput(
      { value: 'hello' },
      { spyOnMethods: ['_update'] }
    );

    expect(input._Cursor.x).toEqual(0);
    input.position = 1;
    await input.__updatePromiseSpy;
    expect(input._Cursor.x).toEqual(1);
  });

  it('cursor position stays within bounds', () => {
    [input, testRenderer] = createInput({
      value: 'hello'
    });

    input.position = -1;
    expect(input._Cursor.x).toBe(0);
  });

  it('position moves with arrow key navigation', () => {
    [input, testRenderer] = createInput({
      value: 'hello'
    });
    testRenderer.keyPress('Left');
    testRenderer.update();
    expect(input.position).toBe(0);
    testRenderer.keyPress('Right');
    testRenderer.update();
    expect(input.position).toBe(1);
    testRenderer.keyPress('Left');
    testRenderer.update();
    expect(input.position).toBe(0);
    input.position = 5;
    testRenderer.keyPress('Right');
    testRenderer.update();
    expect(input.position).toBe(5);
  });

  it('inputs values if listening', async () => {
    [input, testRenderer] = createInput({}, { spyOnMethods: ['_update'] });
    input.listening = true;

    input.insert('x');
    await input._updateSpyPromise;

    expect(input.value).toEqual('x');
    expect(input._Content.text.text).toEqual('x');
  });

  it('should not input values if not listening', () => {
    input.listening = false;
    input.insert('x');
    expect(input._Content.text.text).toEqual('');
  });

  it('clears values if listening', async () => {
    [input, testRenderer] = createInput({}, { spyOnMethods: ['_update'] });
    input.listening = true;
    input.value = 'xxx';
    input.clear();
    await input._updateSpyPromise;
    expect(input._Content.text.text).toEqual('');
  });

  it('should not clear values if not listening', async () => {
    [input, testRenderer] = createInput({}, { spyOnMethods: ['_update'] });
    input.listening = false;
    input.value = 'xxx';
    await input._updateSpyPromise;
    input.clear();
    expect(input._Content.text.text).toEqual('xxx');
  });

  describe('backspace', () => {
    it('does backspace deletions if listening', done => {
      input.listening = true;
      input.insert('xoxoxo');
      input.backspace();
      testRenderer.update();
      input._whenEnabled.then(() => {
        expect(input.value).toEqual('xoxox');
        input.position--;
        input.backspace();
        testRenderer.update();
        expect(input.value).toEqual('xoxx');
        done();
      });
    });

    it('should not backspace deletions if not listening', done => {
      input.listening = false;
      input.value = 'xoxoxo';
      input.backspace();

      setTimeout(() => {
        expect(input._Content.text.text).toEqual('xoxoxo');
        done();
      }, 1);
    });

    it('should not decrement the cursor position if the input is empty', () => {
      [input, testRenderer] = createInput({ listening: true });
      expect(input.position).toEqual(0);
      input.backspace();
      expect(input.position).toEqual(0);
    });
  });

  it('masks password input', async () => {
    [input, testRenderer] = createInput({}, { spyOnMethods: ['_update'] });
    input.password = true;
    input.value = 'hello';
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();

    await input._updateSpyPromise;
    expect(input.value).toBe('hello');
    expect(input._Content.text.text).toBe('•••••');
  });

  it('supports custom mask types', async () => {
    [input, testRenderer] = createInput({}, { spyOnMethods: ['_update'] });
    input.password = true;
    input.mask = '*';
    input.value = 'hello';
    await input._updateSpyPromise;
    expect(input._Content.text.text).toBe('*****');
  });

  it('should allow adding a caption', () => {
    const caption = 'test caption';
    [input, testRenderer] = createInput({ caption });
    expect(input._Caption.content).toEqual(caption);
  });

  it('announces', () => {
    input.placeholder = 'placeholder';
    expect(input.announce).toBe('placeholder');
    input.value = 'value';
    expect(input.announce).toBe('value');
    input.password = true;
    expect(input.announce).toBe('Input hidden');
  });

  describe('Input Icon', () => {
    it('should set icon properties from withStyles', () => {
      expect(input.iconColor).toBe(getHexColor(PALETTE.grey[5]));
      expect(input.iconFocusColor).toBe(getHexColor(PALETTE.grey[90]));
    });

    it('should set icon properties from args', () => {
      [input, testRenderer] = createInput({
        iconColor: getHexColor(PALETTE.grey[10]),
        iconFocusColor: getHexColor(PALETTE.grey[80])
      });
      expect(input.iconColor).toBe(getHexColor(PALETTE.grey[10]));
      expect(input.iconFocusColor).toBe(getHexColor(PALETTE.grey[80]));
    });

    it('should set icon from args', () => {
      [input, testRenderer] = createInput({
        icon: eye
      });
      expect(input.icon).toBe(eye);
      // Change Icon
      input.icon = eyeHide;
      expect(input.icon).toBe(eyeHide);
    });

    it('should change icon color based on focus state', () => {
      [input, testRenderer] = createInput({
        icon: eye
      });
      input._focus();
      testRenderer.focus();
      input._updateIcon();
      expect(input._Icon.color).toBe(
        getHexColor(input.styles.iconProperties.focusColor)
      );
      input._unfocus();
      testRenderer.unfocus();
      input._updateIcon();
      expect(input._Icon.color).toBe(
        getHexColor(input.styles.iconProperties.color)
      );
    });
  });
});
