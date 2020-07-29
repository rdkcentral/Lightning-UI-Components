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

  it('should cancel a running series', () => {
    let unresolvedPromise = new Promise((resolve, reject) => {});
    Speech(['Hello', unresolvedPromise]);
    return Speech(['Cancelled']).series.then(() => {
      expect(utter).toHaveBeenLastCalledWith('Cancelled');
    });
  });
});
