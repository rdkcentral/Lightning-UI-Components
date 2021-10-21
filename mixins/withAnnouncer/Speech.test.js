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
/* global SpeechSynthesisErrorEvent */

/* global SpeechSynthesisErrorEvent */

import Speech from './Speech';

let speakError;

global.SpeechSynthesisErrorEvent = class SpeechSynthesisErrorEvent {};

global.speechSynthesis = {
  speak: jest.fn(utter => {
    if (speakError === 'nonSpeechSynthesisErrorEvent') {
      const error = new Error('nonSpeechSynthesisErrorEvent');
      utter.onerror(error);
    } else if (speakError) {
      const errorEvent = new SpeechSynthesisErrorEvent();
      errorEvent.error = speakError;
      utter.onerror(errorEvent);
    } else {
      utter.onend();
    }
  }),
  cancel: jest.fn()
};
global.SpeechSynthesisUtterance = jest.fn();

const utter = global.SpeechSynthesisUtterance;
const realSetTimeout = setTimeout; // Some tests override setTimeout to use fake timers

async function nextFrame() {
  return new Promise(resolve => {
    realSetTimeout(resolve, 0);
  });
}

describe('Speech', () => {
  beforeEach(() => {
    speakError = undefined;
    jest.clearAllMocks();
  });

  it('should create an utterance from string', () => {
    return Speech('Hello There').series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should create an utterance from array', () => {
    return Speech(['Hello', 'There']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('Hello, There');
    });
  });

  it('should handle nested arrays', () => {
    return Speech(['Well', ['Hello', ['There']]]).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Well');
      expect(utter).toHaveBeenCalledWith('Hello');
      expect(utter).toHaveBeenCalledWith('There');
    });
  });

  it('should handle a function that returns a string', () => {
    return Speech([() => 'Hello There']).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should handle a function that returns an array', () => {
    return Speech([() => ['Well', () => 'Hello There']]).series.then(() => {
      expect(utter).toHaveBeenNthCalledWith(1, 'Well');
      expect(utter).toHaveBeenNthCalledWith(2, 'Hello There');
    });
  });

  it('should handle a function that returns a promise', () => {
    return Speech([() => Promise.resolve('Hello There')]).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should handle promise of string', () => {
    return Speech([Promise.resolve('Hello There')]).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should handle promise with empty string', () => {
    return Speech(['Hello', Promise.resolve(''), 'There']).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello');
      expect(utter).toHaveBeenCalledWith('There');
    });
  });

  it('should handle promise of array', () => {
    return Speech(['Well', Promise.resolve(['Hello', 'There'])]).series.then(
      () => {
        expect(utter).toHaveBeenCalledWith('Well');
        expect(utter).toHaveBeenCalledWith('Hello, There');
      }
    );
  });

  it('should handle promise of a function', () => {
    return Speech([Promise.resolve(() => 'Hello There')]).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello There');
    });
  });

  it('should ignore invalid values', async () => {
    const speaking = Speech(['Hello', 999, undefined, null, 'World']);
    await speaking.series;
    expect(utter).toHaveBeenNthCalledWith(1, 'Hello');
    expect(utter).toHaveBeenNthCalledWith(2, 'World');
  });

  it('should do nothing on undefined', async () => {
    const speaking = Speech();
    await speaking.series;
    expect(utter).not.toHaveBeenCalled();
  });

  it('should cancel a running series', () => {
    const unresolvedPromise = new Promise(() => {});
    const speaking1 = Speech(['Hello', unresolvedPromise]);
    expect(speaking1.active).toBe(true);
    const speaking2 = Speech(['Cancelled']);
    expect(speaking1.active).toBe(false);
    return speaking2.series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('Cancelled');
    });
  });

  it('should support cancelling a running series', async () => {
    const speaking = Speech(['Hello', ['PAUSE-0', 'World']]);
    expect(speaking.active).toBe(true);
    await nextFrame();
    expect(speaking.active).toBe(true);
    speaking.cancel();
    expect(speaking.active).toBe(false);
    await speaking.series;
    expect(speaking.active).toBe(false);
    expect(utter).toHaveBeenCalledTimes(1);
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

  it('should not read out PAUSE-', () => {
    return Speech(['Hello', 'PAUSE-0.01']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('Hello');
    });
  });

  it('should not read out PAUSE- from direct promise', () => {
    return Speech(Promise.resolve('PAUSE-0.01')).series.then(() => {
      expect(utter).not.toHaveBeenCalled();
    });
  });

  it('should not read out PAUSE- from a promise array', () => {
    return Speech([
      'Hello',
      Promise.resolve(['There', 'PAUSE-0.01'])
    ]).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('There');
    });
  });

  it('should support appending to an existing speak call', async () => {
    const speaking = Speech('Hello');
    speaking.append('PAUSE-0');
    await nextFrame();
    speaking.append(Promise.resolve(['World']));
    await nextFrame();
    await speaking.series;
    expect(utter).toHaveBeenNthCalledWith(1, 'Hello');
    expect(utter).toHaveBeenNthCalledWith(2, 'World');
  });

  it('should not append after cancelling', async () => {
    const speaking = Speech('Hello');
    await nextFrame();
    speaking.cancel();
    speaking.append('World');
    await speaking.series;
    expect(utter).toHaveBeenLastCalledWith('Hello');
  });

  it('is active while speaking and inactive when done', async () => {
    const speaking = Speech(['Hello', 'World']);
    expect(speaking.active).toBe(true);
    await speaking.series;
    expect(speaking.active).toBe(false);
  });

  it('should retry 2 times on network errors', async () => {
    speakError = 'network';
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.useFakeTimers();
    Speech(['Hello', 'World']);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenLastCalledWith(
      'Speech synthesis network error. Retries left: 2'
    );
    jest.advanceTimersByTime(500);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(2);
    expect(warnSpy).toHaveBeenLastCalledWith(
      'Speech synthesis network error. Retries left: 1'
    );
    jest.advanceTimersByTime(1000);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(3);
    expect(warnSpy).toHaveBeenLastCalledWith(
      'Speech synthesis network error. Retries left: 0'
    );
    jest.advanceTimersByTime(1500);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(3);
    jest.useRealTimers();
    warnSpy.mockRestore();
  });

  it('should not retry on canceled errors', async () => {
    speakError = 'canceled';
    jest.useFakeTimers();
    Speech(['Hello', 'World']);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });

  it('should not retry on interrupted errors', async () => {
    speakError = 'interrupted';
    jest.useFakeTimers();
    Speech(['Hello', 'World']);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500);
    await nextFrame();
    expect(utter).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });

  it('should throw an error on unknown SpeechSynthesisErrorEvent errors', async () => {
    speakError = 'someOtherError';
    expect(Speech(['Hello', 'World']).series).rejects.toThrow(
      'SpeechSynthesisErrorEvent: someOtherError'
    );
  });

  it('should throw an error on other unknown errors', async () => {
    speakError = 'nonSpeechSynthesisErrorEvent';
    expect(Speech(['Hello', 'World']).series).rejects.toThrow(
      'nonSpeechSynthesisErrorEvent'
    );
  });
});
