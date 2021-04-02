import TestUtils from '../../test/lightning-test-utils';
import Keyboard, { KEYBOARD_FORMATS } from '.';
import Key from '../../elements/Key';
import KeyboardInput from './KeyboardInput';

const createKeyboard = TestUtils.makeCreateComponent(Keyboard);
const createKey = TestUtils.makeCreateComponent(Key);
const createKeyboardInput = TestUtils.makeCreateComponent(KeyboardInput);

describe('Keyboard', () => {
  let keyboard, testRenderer;

  beforeEach(() => {
    [keyboard, testRenderer] = createKeyboard({
      defaultFormat: 'lowercase',
      formats: KEYBOARD_FORMATS.qwerty
    });
    return keyboard._whenEnabled;
  });

  afterEach(() => {
    testRenderer.destroy();
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should take in multi line format', () => {
    expect(keyboard.tag('Lowercase').constructor.name).toEqual('Column');
  });

  it('should take in a single line format', () => {
    [keyboard, testRenderer] = createKeyboard({
      inline: true,
      formats: KEYBOARD_FORMATS.numbers,
      defaultFormat: 'numbers'
    });
    return keyboard._whenEnabled.then(() => {
      expect(keyboard.tag('Numbers').constructor.name).toEqual('Row');
    });
  });

  it('should take in keysConfig to be passed as a config to the keys', () => {
    [keyboard, testRenderer] = createKeyboard({
      keysConfig: {
        h: 60
      },
      defaultFormat: 'lowercase',
      formats: KEYBOARD_FORMATS.qwerty
    });

    return keyboard._whenEnabled.then(() => {
      expect(keyboard.tag('Lowercase').items[0].h).toEqual(60);
    });
  });

  it('should add a spacer in if an empty char is passed', () => {
    [keyboard, testRenderer] = createKeyboard({
      inline: true,
      defaultFormat: 'spacers',
      formats: {
        spacers: ['a', '', '', 'b']
      }
    });

    return keyboard._whenEnabled.then(() => {
      expect(keyboard.tag('Spacers').items[1].skipFocus).toBe(true);
      expect(keyboard.tag('Spacers').items[2].skipFocus).toBe(true);
    });
  });

  it('should take in a column count and return the correct column count', () => {
    [keyboard, testRenderer] = createKeyboard({
      columnCount: 5,
      defaultFormat: 'test',
      formats: {
        test: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
      }
    });
    expect(keyboard._columnCount).toEqual(5);
  });

  it('should take in a row count and adjust the column count', () => {
    [keyboard, testRenderer] = createKeyboard({
      rowCount: 5,
      defaultFormat: 'test',
      formats: {
        test: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
      }
    });
    expect(keyboard.columnCount).toEqual(2);
  });

  it('should adjust the column count if the keyboard is inline', () => {
    [keyboard, testRenderer] = createKeyboard({
      inline: true,
      formats: {
        test: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
      }
    });
    expect(keyboard.columnCount).toEqual(10);
  });

  it('should default column count if no params around it are passed', () => {
    [keyboard, testRenderer] = createKeyboard({
      formats: {
        test: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
      }
    });
    expect(keyboard.columnCount).toEqual(11);
  });

  it('should toggle to a different format', () => {
    keyboard.$toggleKeyboard('symbols');
    expect(keyboard.tag('Lowercase').alpha).toEqual(0);
    expect(keyboard.tag('Symbols').alpha).toEqual(1);
  });

  it('should toggle to a different format of an inline keyboards', () => {
    [keyboard, testRenderer] = createKeyboard({
      inline: true,
      formats: {
        abc: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        num: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      }
    });
    return keyboard._whenEnabled.then(() => {
      keyboard.$toggleKeyboard('num');
      expect(keyboard.tag('Abc').alpha).toEqual(0);
      expect(keyboard.tag('Num').alpha).toEqual(1);
    });
  });
});

describe('KeyboardInput', () => {
  let keyboardInput, testRenderer;

  beforeEach(() => {
    [keyboardInput, testRenderer] = createKeyboardInput({ placeholder: '' });
  });

  afterEach(() => {
    keyboardInput = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('handels soft key events', () => {
    keyboardInput.$onSoftKey({ key: 'a' });
    expect(keyboardInput._Input.value).toEqual('a');

    keyboardInput.$onSoftKey({ key: 'Space' });
    expect(keyboardInput._Input.value).toEqual('a ');

    keyboardInput.$onSoftKey({ key: 'b' });
    expect(keyboardInput._Input.value).toEqual('a b');

    keyboardInput.$onSoftKey({ key: 'Delete' });
    expect(keyboardInput._Input.value).toEqual('a ');

    keyboardInput.$onSoftKey({ key: 'Clear' });
    expect(keyboardInput._Input.value).toEqual('');

    keyboardInput.$onSoftKey({ key: 'Done' });
    expect(keyboardInput._Input.value).toEqual('');
  });

  it('stops input from listening if the keyboard is unfocused', () => {
    keyboardInput.$keyboardFocused(false);
    expect(keyboardInput._Input._listening).toEqual(false);
  });
});
