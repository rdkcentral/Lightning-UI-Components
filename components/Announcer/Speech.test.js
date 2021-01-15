import Speech from './Speech';

global.speechSynthesis = {
  speak: jest.fn(utter => utter.onend()),
  cancel: jest.fn()
};
global.SpeechSynthesisUtterance = jest.fn();

const utter = global.SpeechSynthesisUtterance;

async function nextFrame() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

describe('Speech', () => {
  beforeEach(() => {
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
    let unresolvedPromise = new Promise((resolve, reject) => {});
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
});
