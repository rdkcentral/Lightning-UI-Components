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

import lng from '@lightningjs/core';
import { jest } from '@jest/globals';
import {
  makeCreateComponent,
  mockContext,
  resetContext
} from '@lightningjs/ui-components-test-utils';
import context from '../../globals/context/index';
import withHandleKey from '.';

describe('withLongPress', () => {
  let handleLongPress, testRenderer, mockedContext;
  class Example extends lng.Component {}

  beforeAll(() => {
    mockedContext = mockContext(context);
  });

  beforeEach(() => {
    [handleLongPress, testRenderer] = makeCreateComponent(
      withHandleKey(Example),
      {},
      {
        keys: {
          777: 'Sideways'
        }
      }
    )();
  });

  afterEach(() => {
    handleLongPress = null;
  });

  afterAll(() => {
    resetContext();
  });

  it('extends the base class', () => {
    expect(handleLongPress.constructor.name).toBe('Example');
  });

  it('calls onEnter on key press down', () => {
    handleLongPress.onDown = jest.fn();
    testRenderer.keyPress('Down');
    expect(handleLongPress.onDown).toHaveBeenCalled();
  });

  it('calls keyMeyricsCallback with metricsPayload on key press down', () => {
    handleLongPress.onDown = jest.fn();
    handleLongPress.metricsPayload = { id: 123, saved: true };
    testRenderer.keyPress('Down');
    expect(handleLongPress.onDown).toHaveBeenCalled();
    expect(mockedContext.keyMetricsCallback).toHaveBeenCalledTimes(1);
    expect(mockedContext.keyMetricsCallback).toHaveBeenNthCalledWith(
      1,
      'Down',
      {
        id: 123,
        saved: true
      }
    );
  });

  it('does not call onEnter on key down up', () => {
    handleLongPress.onDown = jest.fn();
    testRenderer.keyRelease('Down');
    expect(handleLongPress.onDown).not.toHaveBeenCalled();
  });

  it('call onEnterRelease on key enter up', () => {
    handleLongPress.onEnterRelease = jest.fn();
    testRenderer.keyRelease('Enter');
    expect(handleLongPress.onEnterRelease).toHaveBeenCalled();
  });

  it('does not call onEnterRelease on key enter down', () => {
    handleLongPress.onEnterRelease = jest.fn();
    testRenderer.keyPress('Enter');
    expect(handleLongPress.onEnterRelease).not.toHaveBeenCalled();
  });

  it('fallback to keymap key resolution', () => {
    handleLongPress.onSideways = jest.fn();
    testRenderer.keyPress({ key: '', keyCode: 777 });
    expect(handleLongPress.onSideways).toHaveBeenCalled();
  });
});
