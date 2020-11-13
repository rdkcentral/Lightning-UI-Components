import Speech from './Speech';

global.speechSynthesis = {
  speak: jest.fn(),
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

  it('should handle promise with empty string', () => {
    return Speech(['Hello', Promise.resolve(''), 'There']).series.then(() => {
      expect(utter).toHaveBeenCalledWith('Hello');
      expect(utter).toHaveBeenCalledWith('There');
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
