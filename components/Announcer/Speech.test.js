/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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

import Speech from './Speech';

global.speechSynthesis = {
  speak: jest.fn(utter => utter.onend()),
  cancel: jest.fn()
};
global.SpeechSynthesisUtterance = jest.fn();

const utter = global.SpeechSynthesisUtterance;

describe('Speech', () => {
  it('should create an utterance from string', () => {
    return Speech('Hello There').series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should create an utterance from array', () => {
    return Speech(['Hello', 'There']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('There');
    });
  });

  it('should handle promise', () => {
    return Speech([Promise.resolve('Hello There')]).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should cancel a running series', () => {
    let unresolvedPromise = new Promise((resolve, reject) => {});
    Speech(['Hello', unresolvedPromise]);
    return Speech(['Cancelled']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('Cancelled');
    });
  });

  it('should support PAUSE-', () => {
    return Speech(['Hello', 'PAUSE-0.1', 'There']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('There');
    });
  });

  it('should support PAUSE-X with invalid number', () => {
    return Speech(['Hello', 'PAUSE-XD', 'There']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('There');
    });
  });
});
