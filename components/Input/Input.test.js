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
    expect(input._Container.texture._lookupId).toEqual('rect,64,,,0,,8,8,8,8');
  });

  it('cursor moves left and right', done => {
    [input, testRenderer] = createInput({
      value: 'hello'
    });

    expect(input._Cursor.x).toEqual(0);
    input.position = 1;
    testRenderer.update();
    input._whenEnabled.then(() => {
      expect(input._Cursor.x).toEqual(1);
      done();
    });
  });

  it('cursor position stays within bounds', () => {
    [input, testRenderer] = createInput({
      value: 'hello'
    });

    input.position = -1;
    expect(input._Cursor.x).toBe(0);
  });

  it('inputs values if listening', done => {
    input.listening = true;
    input.insert('x');
    testRenderer.update();
    input._whenEnabled.then(() => {
      expect(input._Content.text.text).toEqual('x');
      done();
    });
  });

  it('should not input values if not listening', () => {
    input.listening = false;
    input.insert('x');
    expect(input._Content.text.text).toEqual('');
  });

  it('clears values if listening', done => {
    input.listening = true;
    input.value = 'xxx';
    input.clear();
    input._whenEnabled.then(() => {
      expect(input._Content.text.text).toEqual('');
      done();
    });
  });

  it('should not clear values if not listening', done => {
    input.listening = false;
    input.value = 'xxx';
    input.clear();
    input._whenEnabled.then(() => {
      expect(input._Content.text.text).toEqual('xxx');
      done();
    });
  });

  it('does backspace deletions if listening', done => {
    input.listening = true;
    input.insert('xoxoxo');
    input.backspace();

    input._whenEnabled.then(() => {
      expect(input._Content.text.text).toEqual('xoxox');
      done();
    });
  });

  it('should not backspace deletions if not listening', done => {
    input.listening = false;
    input.value = 'xoxoxo';
    input.backspace();

    input._whenEnabled.then(() => {
      expect(input._Content.text.text).toEqual('xoxoxo');
      done();
    });
  });

  it('masks password input', done => {
    input.password = true;
    input.value = 'hello';
    input._whenEnabled.then(() => {
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      expect(input.value).toBe('hello');
      expect(input._Content.text.text).toBe('•••••');
      done();
    });
  });

  it('supports custom mask types', done => {
    input.password = true;
    input.mask = '*';
    input.value = 'hello';
    input._whenEnabled.then(() => {
      testRenderer.update();
      expect(input._Content.text.text).toBe('*****');
      done();
    });
  });
});
