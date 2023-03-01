/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Keyboard from './index.js';
import KeyboardInput from './KeyboardInput.js';
import KeyboardQwerty from './KeyboardQwerty.js';
import KeyboardNumbers from './KeyboardNumbers.js';
import KeyboardFullscreen from './KeyboardFullscreen.js';
import KeyboardEmail from './KeyboardEmail.js';
const createKeyboard = makeCreateComponent(Keyboard);
const createKeyboardInput = makeCreateComponent(KeyboardInput);
const createKeyboardQwerty = makeCreateComponent(KeyboardQwerty);
const createKeyboardNumbers = makeCreateComponent(KeyboardNumbers);
const createKeyboardFullscreen = makeCreateComponent(KeyboardFullscreen);
const createKeyboardEmail = makeCreateComponent(KeyboardEmail);

describe('Keyboard', () => {
  let keyboard, testRenderer;

  beforeEach(() => {
    [keyboard, testRenderer] = createKeyboardQwerty({
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

  it('should have an announce', () => {
    keyboard.title = 'Search';
    expect(keyboard.announce).toEqual('Keyboard, Search');
  });

  it('should allow announce to be overridden', () => {
    keyboard.announce = 'Qwerty Keyboard';
    expect(keyboard.announce).toEqual('Qwerty Keyboard');
  });

  it('should not center the keyboard when centerKeyboard is false', () => {
    keyboard.centerKeyboard = false;
    expect(keyboard.x).toEqual(0);
  });

  it('should center the keyboard when centerKeyboard is true', async () => {
    [keyboard, testRenderer] = createKeyboardQwerty(
      {
        defaultFormat: 'lowercase',
        centerKeyboard: true
      },
      {
        spyOnMethods: ['$itemChanged', '_update']
      }
    );

    testRenderer.forceAllUpdates();
    await keyboard._$itemChangedSpyPromise;
    await keyboard.__updateSpyPromise;

    expect(keyboard.x).toEqual(
      (keyboard.style.screenW - keyboard.w) / 2 - keyboard.style.marginX
    );
  });

  it('should have an announceContext', () => {
    expect(keyboard.announceContext).toEqual([
      'PAUSE-2',
      'Use arrow keys to choose characters, press center to select'
    ]);
  });

  it('should allow announceContext to be overridden', () => {
    keyboard.announceContext = 'Context';
    expect(keyboard.announceContext).toEqual('Context');
  });

  it('should take in multi line format', () => {
    expect(keyboard.tag('Lowercase').constructor.name).toEqual('Column');
  });

  it('should take in a single line format', () => {
    [keyboard, testRenderer] = createKeyboardNumbers({
      inline: true,
      defaultFormat: 'numbers'
    });
    return keyboard._whenEnabled.then(() => {
      expect(keyboard.tag('Numbers').constructor.name).toEqual('Row');
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

  it('should toggle to a different format of an inline keyboard', () => {
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

  it('should not scroll child rows if a width prop smaller than the auto calculated row is passed', done => {
    [keyboard, testRenderer] = createKeyboardQwerty({
      w: 10,
      defaultFormat: 'lowercase'
    });
    keyboard._whenEnabled.then(() => {
      const firstRow = keyboard.tag('Lowercase').items[0];
      expect(firstRow._Items.x).toBe(0);
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.update();
      firstRow._whenEnabled.then(() => {
        expect(firstRow._selectedIndex).toBe(3);
        expect(firstRow._Items.transition('x').targetValue).toBe(0);
        done();
      });
    });
  });

  it('should not scroll child rows if no width prop is passed', done => {
    keyboard._whenEnabled.then(() => {
      const firstRow = keyboard.tag('Lowercase').items[0];
      expect(firstRow._Items.x).toBe(0);
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.update();
      firstRow._whenEnabled.then(() => {
        expect(firstRow._selectedIndex).toBe(3);
        expect(firstRow._Items.transition('x').targetValue).toBe(0);
        done();
      });
    });
  });

  it('should create a KeyboardQwerty format keyboard which has 5 formats', () => {
    [keyboard, testRenderer] = createKeyboardQwerty({
      defaultFormat: 'lowercase'
    });
    keyboard._whenEnabled.then(() => {
      expect(Object.keys(keyboard.formats)).toHaveLength(5);
    });
  });

  it('should create a KeyboardNumbers format keyboard which has 3 formats', () => {
    [keyboard, testRenderer] = createKeyboardNumbers({
      defaultFormat: 'numbers'
    });
    keyboard._whenEnabled.then(() => {
      expect(Object.keys(keyboard.formats)).toHaveLength(3);
    });
  });

  it('should create a KeyboardFullscreen format keyboard which has 2 formats', () => {
    [keyboard, testRenderer] = createKeyboardFullscreen({
      defaultFormat: 'letters'
    });
    keyboard._whenEnabled.then(() => {
      expect(Object.keys(keyboard.formats)).toHaveLength(2);
      expect(Object.keys(keyboard.formats)).toContain('letters');
      expect(Object.keys(keyboard.formats)).toContain('symbols');
    });
  });

  it('should create a KeyboardEmail format keyboard which has 5 formats', () => {
    [keyboard, testRenderer] = createKeyboardEmail({
      defaultFormat: 'lowercase'
    });
    keyboard._whenEnabled.then(() => {
      expect(Object.keys(keyboard.formats)).toHaveLength(5);
    });
  });
});

describe('KeyboardInput', () => {
  let keyboardInput, testRenderer;

  beforeEach(async () => {
    [keyboardInput, testRenderer] = createKeyboardInput(
      { placeholder: '', keyboardType: KeyboardQwerty },
      { spyOnMethods: ['_update'] }
    );
  });

  afterEach(() => {
    keyboardInput = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('handles soft key events', () => {
    keyboardInput.$onSoftKey({ key: 'a' });
    expect(keyboardInput._Input.title).toEqual('a');

    keyboardInput.$onSoftKey({ key: 'Space' });
    expect(keyboardInput._Input.title).toEqual('a ');

    keyboardInput.$onSoftKey({ key: 'b' });
    expect(keyboardInput._Input.title).toEqual('a b');

    keyboardInput.$onSoftKey({ key: 'Delete' });
    expect(keyboardInput._Input.title).toEqual('a ');

    keyboardInput.$onSoftKey({ key: 'Clear' });
    expect(keyboardInput._Input.title).toEqual('');

    keyboardInput.$onSoftKey({ key: 'Done' });
    expect(keyboardInput._Input.title).toEqual('');

    keyboardInput.$onSoftKey({ key: 'shift', toggle: 'uppercase' });
    expect(keyboardInput._Input.title).toEqual('');
  });

  it('stops input from listening if the keyboard is unfocused', () => {
    keyboardInput.$keyboardFocused(false);
    expect(keyboardInput._Input._listening).toEqual(false);
  });

  it('should update mask', () => {
    keyboardInput._Input.mask = '*';
    testRenderer.forceAllUpdates();
    expect(keyboardInput._Input.mask).toEqual('*');
  });

  it('should update password to match mask', () => {
    keyboardInput._Input.mask = '?';
    keyboardInput._Input.password = true;
    testRenderer.forceAllUpdates();
    keyboardInput.$onSoftKey({ key: 'a' });
    expect(keyboardInput._Input.title).toEqual('?');
  });
});
