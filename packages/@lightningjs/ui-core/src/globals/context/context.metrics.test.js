import { jest } from '@jest/globals';
import metrics from './metrics';

describe('context metrics', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should return undefined for keyMetricsCallback if not yet set', () => {
    expect(metrics.keyMetricsCallback).toBeUndefined();
  });

  it('should set the keyMetricsCallback only if is a function', () => {
    metrics.keyMetricsCallback = 'invalid';
    expect(metrics.keyMetricsCallback).toBeUndefined();
    metrics.keyMetricsCallback = {};
    expect(metrics.keyMetricsCallback).toBeUndefined();
    metrics.keyMetricsCallback = 123;
    expect(metrics.keyMetricsCallback).toBeUndefined();
    const validFunction = () => {};
    metrics.keyMetricsCallback = validFunction;
    expect(metrics.keyMetricsCallback).toEqual(validFunction);
  });
});
