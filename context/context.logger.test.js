describe('context logger', () => {
  beforeAll(() => {
    global.console.log = jest.fn().mockImplementation(() => {});
    global.console.info = jest.fn().mockImplementation(() => {});
    global.console.warn = jest.fn().mockImplementation(() => {});
    global.console.error = jest.fn().mockImplementation(() => {});
  });
  beforeEach(() => {
    jest.resetModules();
  });
  it('should allow context.debug to be set', () => {
    const logger = require('./logger').default;
    expect(logger.debug).toBe(false);
    logger.debug = true;
    expect(logger.debug).toBe(true);
    logger.debug = 0;
    expect(logger.debug).toBe(false);
    logger.debug = 1;
    expect(logger.debug).toBe(true);
  });
  it('should return undefined for logCallback if not yet set', () => {
    const logger = require('./logger').default;
    expect(logger.logCallback).toBeUndefined();
  });
  it('should only set logCallback if is a function', () => {
    const logger = require('./logger').default;
    logger.logCallback = 'invalid';
    expect(logger.logCallback).toBeUndefined();
    logger.logCallback = {};
    expect(logger.logCallback).toBeUndefined();
    logger.logCallback = 123;
    expect(logger.logCallback).toBeUndefined();
  });
  it('should contain a log method', () => {
    const logger = require('./logger').default;
    expect(typeof logger.log).toBe('function');
  });
  it('should call console.log if debug is set to true', () => {
    const logger = require('./logger').default;
    logger.debug = true;
    logger.log('message');
    expect(console.log).toHaveBeenCalled();
  });
  it('should contain a info method', () => {
    const logger = require('./logger').default;
    expect(typeof logger.info).toBe('function');
  });
  it('should call console.info if debug is set to true', () => {
    const logger = require('./logger').default;
    logger.debug = true;
    logger.info('message');
    expect(console.info).toHaveBeenCalled();
  });
  it('should contain a warn method', () => {
    const logger = require('./logger').default;
    expect(typeof logger.warn).toBe('function');
  });
  it('should call console.warn if debug is set to true', () => {
    const logger = require('./logger').default;
    logger.debug = true;
    logger.warn('message');
    expect(console.warn).toHaveBeenCalled();
  });
  it('should contain a error method', () => {
    const logger = require('./logger').default;
    expect(typeof logger.error).toBe('function');
  });
  it('should call console.error if debug is set to true', () => {
    const logger = require('./logger').default;
    logger.debug = true;
    logger.error('message');
    expect(console.error).toHaveBeenCalled();
  });
  it('should call the logCallback if set when calling log, info, warn, or error', () => {
    const logCallback = jest.fn();
    const logger = require('./logger').default;
    logger.logCallback = logCallback;
    logger.log('one');
    logger.warn('two');
    logger.error('three');
    logger.info('four');
    expect(logCallback).toHaveBeenCalledTimes(4);
  });
});
