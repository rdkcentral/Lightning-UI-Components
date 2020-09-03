import TestUtils from '../lightning-test-utils';
import Input from '.';

const createInput = TestUtils.makeCreateComponent(Input);

describe('Input', () => {
  let input, testRenderer;

  beforeEach(() => {
    [input, testRenderer] = createInput();
  });
  afterEach(() => {
    input = null;
    testRenderer = null;
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

  it('renders custom dimensions', () => {
    [input, testRenderer] = createInput({
      w: 200,
      h: 50,
      radius: 2
    });
    input._Container.loadTexture();
    // lookup ID provides texture dimensions: shadow{w}{h}{radius}{blur}{...margin}
    expect(input._Container.texture._lookupId).toEqual(
      'rect200,50,,,0,,2,2,2,2'
    );
  });

  it('cursor moves left and right', () => {
    [input, testRenderer] = createInput({
      value: 'hello'
    });

    expect(input._Cursor.x).toEqual(0);

    input.position = 1;
    expect(input._Cursor.x).toEqual(1);

    input.position = 2;
    expect(input._Cursor.x).toEqual(2);

    testRenderer.keyPress('Right');
    expect(input._Cursor.x).toEqual(3);

    testRenderer.keyPress('Left');
    expect(input._Cursor.x).toEqual(2);
  });

  it('cursor position stays within bounds', () => {
    [input, testRenderer] = createInput({
      value: 'hello'
    });

    input.position = -1;
    expect(input._Cursor.x).toBe(0);

    testRenderer.keyPress('Left');
    expect(input._Cursor.x).toBe(0);

    input.position = 4;
    expect(input._Cursor.x).toBe(4);

    input.position = 5;
    expect(input._Cursor.x).toBe(4);

    testRenderer.keyPress('Right');
    expect(input._Cursor.x).toBe(4);
  });

  it('inputs values', () => {
    input.insert('x');
    expect(input._Content.text.text).toEqual('x');

    input.insert('x');
    expect(input._Content.text.text).toEqual('xx');

    testRenderer.keyPress('Left');
    input.insert('o');
    expect(input._Content.text.text).toEqual('xox');

    testRenderer.keyPress('Left');
    testRenderer.keyPress('Left');
    input.insert('o');
    expect(input._Content.text.text).toEqual('oxox');

    testRenderer.keyPress('Right');
    input.insert('ox');
    expect(input._Content.text.text).toEqual('oxoxox');
  });

  it('clears values', () => {
    input.value = 'xxx';
    expect(input._Content.text.text).toEqual('xxx');
    input.clear();
    expect(input._Content.text.text).toEqual('');
  });

  it('does backspace deletions', () => {
    input.insert('xoxoxo');
    expect(input._Content.text.text).toEqual('xoxoxo');

    input.backspace();
    expect(input._Content.text.text).toEqual('xoxox');

    testRenderer.keyPress('Left');
    input.backspace();
    expect(input._Content.text.text).toEqual('xoxx');

    testRenderer.keyPress('Left');
    testRenderer.keyPress('Left');
    input.backspace();
    expect(input._Content.text.text).toEqual('oxx');

    // backspace shouldn't do anything if position is 0
    input.backspace();
    expect(input._Content.text.text).toEqual('oxx');
  });
});
