import context from '../context';

/**
 * This function will set up context for the test suite
 * Should be used when testing the context is required.
 * @param mockKeyMetricsHandler a user provided mock handler
 * @return {{keyMetricsCallback: jest.Mock}}
 */
const mockContext = (mockKeyMetricsHandler = jest.fn()) => {
  jest.mock('../context');
  context.config({
    keyMetricsCallback: mockKeyMetricsHandler
  });

  return {
    keyMetricsCallback: mockKeyMetricsHandler
  };
};

const resetContext = () => {
  context.setKeyMetricsCallback = undefined;
};

export { mockContext, resetContext };
