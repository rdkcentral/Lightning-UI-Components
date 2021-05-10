/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import TestUtils from '../lightning-test-utils';
import Keyboard, { KEYBOARD_FORMATS } from '.';
import Key from './Key';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createKeyboard = TestUtils.makeCreateComponent(Keyboard);
const createKey = TestUtils.makeCreateComponent(Key);
const createKeyboardInput = TestUtils.makeCreateComponent(KeyboardInput);

describe('Key', () => {
  let key, testRenderer;

  beforeEach(() => {
    [key, testRenderer] = createKey({ title: 'a' });
  });

  afterEach(() => {
    key = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets sizes inside the config', () => {
    key.config = { sizes: { small: 70, medium: 115 } };
    expect(key._sizes).toEqual({
      small: 70,
      medium: 115,
      large: 196,
      xlarge: 400
    });
  });

  it('should patch in an icon if provided', () => {
    [key, testRenderer] = createKey({ icon });
    expect(key._Icon).toBeDefined();
  });

  it('should adjust its width if given a size', () => {
    [key, testRenderer] = createKey({ size: 'medium' });
    expect(key.w).toEqual(128);
  });

  it('should make its width its height if given a size that doesnt exist', () => {
    [key, testRenderer] = createKey({ size: 'blue' });
    expect(key.w).toEqual(60);
  });

  it('should set its char as its title', () => {
    [key, testRenderer] = createKey({ char: 'a' });
    expect(key.title).toEqual('a');
  });

  it('should set its label as its title', () => {
    [key, testRenderer] = createKey({ label: 'done' });
    expect(key.title).toEqual('done');
  });

  it('should fire $onSoftKey events on enter press', () => {
    key.fireAncestors = jest.fn();
    key._handleEnter();
    expect(key.fireAncestors).toHaveBeenCalledWith('$onSoftKey', { key: 'a' });
  });

  it('should fire $toggleKeyboard events on enter press if a toggle is present', () => {
    [key, testRenderer] = createKey({ toggle: 'lowercase' });
    key.fireAncestors = jest.fn();
    key._handleEnter();
    expect(key.fireAncestors).toHaveBeenCalledWith(
      '$toggleKeyboard',
      'lowercase'
    );
  });

  it('should update color and scale on focus', () => {
    key._smooth = false;
    key._focus();

    setTimeout(() => {
      expect(key.color).toBe(getHexColor('ECECF2'));
      expect(key.scale).toBe(1.12);
      expect(key._Title.color).toBe(4060086272);
      done();
    });
  });
});

describe('Keyboard', () => {
  let keyboard, testRenderer;

  beforeEach(() => {
    [keyboard, testRenderer] = createKeyboard({
      formats: KEYBOARD_FORMATS.qwerty,
      defaultFormat: 'lowercase'
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
    expect(keyboard.tag('Uppercase').alpha).toEqual(0);
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
