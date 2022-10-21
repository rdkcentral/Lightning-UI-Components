import Input from '.';
import Icon from '../../elements/Icon';
import TestUtils from '../../test/lightning-test-utils';

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

  it('should update Eyebrow', () => {
    input.eyebrow = 'Description';
    testRenderer.forceAllUpdates();
    expect(input._Eyebrow.content).toEqual('Description');
    expect(input._Eyebrow.textColor).toEqual(input.style.eyebrowColor);
  });

  describe('cursor movement', () => {
    it('when cursor handles left movement ', () => {
      [input, testRenderer] = createInput();
      input.title = '';
      input.mode = 'focused';
      testRenderer.forceAllUpdates();
      input._handleLeft();
      expect(input.position).toBe(-1);
    });

    it('when cursor handles left movement ', () => {
      [input, testRenderer] = createInput();
      input.title = '';
      input.mode = 'disabled';
      testRenderer.forceAllUpdates();
      input._handleLeft();
      expect(input.position).toBe(0);
    });

    it('when cursor handles left movement ', () => {
      [input, testRenderer] = createInput();
      input.mode = 'focused';
      input.listening = true;
      input.insert('h');
      input.insert('e');
      input.insert('l');
      testRenderer.forceAllUpdates();
      input._handleLeft();
      expect(input.position).toBe(2);
    });

    it('handle left when mode is set to disabled', () => {
      [input, testRenderer] = createInput({
        mode: 'disabled'
      });
      expect(input._handleLeft()).toEqual(false);
    });
    it('when cursor handles right movement ', () => {
      [input, testRenderer] = createInput();
      input.mode = 'focused';
      input.listening = true;
      input.insert('h');
      input.insert('e');
      input.insert('l');
      testRenderer.forceAllUpdates();
      input._handleRight();
      expect(input.position).toBe(3);
    });

    it('handle right when mode is set to disabled', () => {
      [input, testRenderer] = createInput({
        mode: 'disabled'
      });
      expect(input._handleRight()).toEqual(false);
    });

    it('inputs titles will update if listening', () => {
      [input, testRenderer] = createInput({});
      input.listening = true;
      input.mode = 'focused';
      input.actualTitle = 'x';
      input.insert('x');
      expect(input.actualTitle).toEqual('xx');
    });

    it('inputs titles will update if not listening', () => {
      [input, testRenderer] = createInput({});
      input.listening = false;
      input.mode === 'disabled';
      input.actualTitle = 'x';
      input.insert('x');
      expect(input.actualTitle).toEqual('x');
    });

    it('clears titles if listening', () => {
      [input, testRenderer] = createInput({});
      input.listening = true;
      input.mode = 'focused';
      input.actualTitle = 'xxx';
      input.clear();
      expect(input.actualTitle).toEqual('');
    });

    it('should not clear titles if not listening', () => {
      [input, testRenderer] = createInput({});
      input.listening = false;
      input.actualTitle = 'xxx';
      input.clear();
      expect(input.actualTitle).toEqual('xxx');
    });

    it('cursor position should when no prefix and content', () => {
      [input, testRenderer] = createInput();
      input.prefix = [];
      testRenderer.forceAllUpdates();
      expect(input._Cursor.x).toBe(input._titleX);
    });
    it('cursor position should change based on prefix', () => {
      [input, testRenderer] = createInput();
      expect(input._Cursor.x).toBe(input._titleX);
      input.prefix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      expect(input._Cursor.x).toBe(input._prefixX + input._titleX);
    });

    it('cursor position should change based on prefix and when text entered is not null', () => {
      [input, testRenderer] = createInput();
      expect(input._Cursor.x).toBe(input._titleX);
      input.prefix = [{ type: Icon }];
      testRenderer.forceAllUpdates();
      input.title = 'Hello';
      expect(input._Cursor.x).toBe(
        input._prefixX + input._titleX + input._HiddenContent.w
      );
    });
  });

  describe('backspace', () => {
    it('does backspace deletions if listening', done => {
      input.listening = true;
      input.title = '';
      input.insert('xoxoxo');
      input.backspace();
      input._whenEnabled.then(() => {
        expect(input.title).toEqual('xoxox');
        input.position--;
        input.backspace();
        expect(input.title).toEqual('xoxx');
        done();
      });
    });

    it('should not backspace deletions if not listening', () => {
      input.listening = false;
      input.title = 'xoxoxo';
      input.backspace();
      expect(input.title).toEqual('xoxoxo');
    });

    it('should not decrement the cursor position if the input is empty', () => {
      [input, testRenderer] = createInput({ listening: true });
      expect(input.position).toEqual(0);
      input.backspace();
      expect(input.position).toEqual(0);
    });
  });

  it('masks password input', () => {
    input.actualTitle = 'Hello';
    input.mask = '•';
    input.password = true;
    testRenderer.forceAllUpdates();
    expect(input.title).toBe('•••••');
  });

  it('supports custom mask types', () => {
    input.actualTitle = 'Hello';
    input.mask = '*';
    input.password = true;
    testRenderer.forceAllUpdates();
    expect(input.title).toBe('*****');
  });

  it('should update HelpText', () => {
    input.helpText = 'Test Description';
    testRenderer.forceAllUpdates();
    expect(input._HelpText.content).toEqual('Test Description');
    expect(input._HelpText.textColor).toEqual(input.style.helpTextColor);
  });

  it('suffix should be always on the right', () => {
    [input, testRenderer] = createInput({ listening: true });
    input.suffix = [{ type: Icon }];
    testRenderer.forceAllUpdates();
    expect(input._Suffix.x).toBe(input.w - 2 * input.style.paddingX);
  });

  it('HiddenContent should be always on the hidden', () => {
    [input, testRenderer] = createInput({ listening: true });
    testRenderer.forceAllUpdates();
    input.title = 'Hello';
    expect(input._HiddenContent.alpha).toBe(0.001);
  });

  describe('when the input value width exceeds the input container width', () => {
    it('should keep the cursor and entered text in view', async () => {
      [input, testRenderer] = createInput(
        {
          title: '',
          listening: true,
          w: 50
        },
        {
          spyOnMethods: ['_updateCursorPosition']
        }
      );

      const initialContentX = input._Content.x;

      input.insert(
        'really really really really really really really really really really really really really really long string'
      );
      testRenderer.forceAllUpdates();

      const newContentX = testRenderer.getInstance()._Content.x;
      expect(newContentX).toEqual(initialContentX);
    });
  });

  describe('announcer', () => {
    it('should announce the eyebrow and helptext as the default announce string if password is true', () => {
      input.password = true;
      input.eyebrow = 'eyebrow';
      input.helpText = 'helpText';
      expect(input.announce).toEqual(['eyebrow', 'helpText']);
    });

    it('should append helptext to end of announce context', () => {
      input.password = false;
      input.eyebrow = 'eyebrow';
      input.helpText = 'helpText';
      input.title = 'title';
      expect(input.announce).toEqual(['eyebrow', 'Input: title', 'helpText']);
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';

      input._announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(input.announce).toEqual(overrideString);
    });
  });
});
