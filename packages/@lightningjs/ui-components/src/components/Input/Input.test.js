﻿/**
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

import Input from '.';
import Icon from '../Icon';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import { jest } from '@jest/globals';

const createInput = makeCreateComponent(Input);

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
    expect(input._Eyebrow.style.textStyle).toEqual(
      input.style.eyebrowTextStyle
    );
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
    expect(input._HelpText.style.textStyle).toEqual(input.style.helpTextStyle);
  });

  it('suffix should be always on the right', () => {
    [input, testRenderer] = createInput({ listening: true });
    input.suffix = [{ type: Icon }];
    testRenderer.forceAllUpdates();
    expect(input._Suffix.x).toBe(input._suffixX);
  });

  it('HiddenContent should be always on the hidden', () => {
    [input, testRenderer] = createInput({ listening: true });
    testRenderer.forceAllUpdates();
    input.title = 'Hello';
    expect(input._HiddenContent.alpha).toBe(0.001);
  });

  it('should overwrite existing text when usign the value setter', () => {
    expect(input.value).toBe('');
    expect(input.position).toBe(0);

    input.listening = true;
    input.insert('foo');

    expect(input.value).toBe('foo');
    expect(input.position).toBe(3);

    input.value = 'bar';

    expect(input.value).toBe('bar');
    expect(input.position).toBe(0);
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
    it('should announce the eyebrow and helpText as the default announce string if password is true', () => {
      input.password = true;
      input.eyebrow = 'eyebrow';
      input.helpText = 'helpText';
      expect(input.announce).toEqual(['eyebrow', 'helpText']);
    });

    it('should append helpText to end of announce context', () => {
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
