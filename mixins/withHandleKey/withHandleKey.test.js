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

import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import withHandleKey from '.';

class Example extends lng.Component {}
const createHandleKeyComp = TestUtils.makeCreateComponent(
  withHandleKey(Example)
);

describe('withHandleKey', () => {
  let HandleKeyComponent, testRenderer;

  beforeEach(() => {
    [HandleKeyComponent, testRenderer] = createHandleKeyComp();
  });

  afterEach(() => {
    HandleKeyComponent = null;
    testRenderer = null;
  });

  it('extends the base class', () => {
    expect(HandleKeyComponent.constructor.name).toBe('Example');
  });

  it('sends key down and release signals to parent components', () => {
    const onDown = jest.fn();
    const onDownRelease = jest.fn();
    [HandleKeyComponent, testRenderer] = createHandleKeyComp({
      onDown,
      onDownRelease
    });
    expect(onDown).not.toHaveBeenCalled();
    expect(onDownRelease).not.toHaveBeenCalled();

    testRenderer.keyPress('Down');
    expect(onDown).toHaveBeenCalled();
    expect(onDownRelease).not.toHaveBeenCalled();
    onDown.mockClear();

    testRenderer.keyRelease('Down');
    expect(onDown).not.toHaveBeenCalled();
    expect(onDownRelease).toHaveBeenCalled();
  });

  it('sends a signal when a key is pressed', () => {
    jest.spyOn(HandleKeyComponent, 'fireAncestors');
    expect(HandleKeyComponent.fireAncestors).not.toHaveBeenCalled();
    testRenderer.keyPress('Down');
    expect(HandleKeyComponent.fireAncestors).toHaveBeenCalledWith(
      '$onDown',
      HandleKeyComponent,
      {
        key: 'Down',
        preventDefault: expect.any(Function),
        type: 'keydown'
      }
    );
  });

  it('sends a signal when a key is released', () => {
    jest.spyOn(HandleKeyComponent, 'fireAncestors');
    testRenderer.keyRelease('Down');
    expect(HandleKeyComponent.fireAncestors).toBeCalledWith(
      '$onDownRelease',
      HandleKeyComponent,
      {
        key: 'Down',
        preventDefault: expect.any(Function),
        type: 'keyup'
      }
    );
  });

  it('falls back to keymap key resolution', () => {
    const createHandleKeyComp = TestUtils.makeCreateComponent(
      withHandleKey(Example),
      {},
      {
        keys: { 777: 'Sideways' }
      }
    );
    [HandleKeyComponent, testRenderer] = createHandleKeyComp({
      onSideways: jest.fn()
    });
    testRenderer.keyPress({ key: '', keyCode: 777 });
    expect(HandleKeyComponent.onSideways).toHaveBeenCalled();
  });

  it('propogates an undefined signal when a key cannot be mapped', () => {
    const createHandleKeyComp = TestUtils.makeCreateComponent(
      withHandleKey(Example),
      {},
      { keys: null }
    );
    const keyEvent = { keyCode: 777 };
    [HandleKeyComponent, testRenderer] = createHandleKeyComp();
    jest.spyOn(HandleKeyComponent, '_handleKey');
    jest.spyOn(HandleKeyComponent, 'fireAncestors');
    expect(HandleKeyComponent.fireAncestors).not.toHaveBeenCalled();
    testRenderer.keyPress(keyEvent);
    expect(HandleKeyComponent.fireAncestors).toHaveBeenCalledWith(
      '$onundefined',
      HandleKeyComponent,
      {
        ...keyEvent,
        preventDefault: expect.any(Function),
        type: 'keydown'
      }
    );
  });
});
