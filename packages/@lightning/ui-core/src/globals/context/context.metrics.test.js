describe('metrics', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should return undefined for keyMetricsCallback if not yet set', () => {
    const metrics = require('./metrics').default;
    expect(metrics.keyMetricsCallback).toBeUndefined();
  });
  it('should set the keyMetricsCallback only if is a function', () => {
    const metrics = require('./metrics').default;
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
