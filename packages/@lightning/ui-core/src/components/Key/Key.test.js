import { makeCreateComponent, pathToDataURI } from '@lightning/ui-test-utils';
import Key from './index.js';
import { jest } from '@jest/globals';

const createKey = makeCreateComponent(Key);
const icon = pathToDataURI('src/assets/images/ic_lightning_white_32.png');

describe('Key', () => {
  let key, testRenderer;

  beforeEach(async () => {
    [key, testRenderer] = createKey(
      { title: 'a' },
      { spyOnMethods: ['_update'] }
    );
    await key.__updateSpyPromise;
  });

  afterEach(() => {
    key = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should patch in an icon if provided', () => {
    [key, testRenderer] = createKey({ icon: { src: icon } });
    expect(key._Icon).toBeUndefined();
  });

  it('should adjust its width if given a size', async () => {
    key.size = 'md';
    await key.__updateSpyPromise;
    expect(key.w).toEqual(120);
  });

  it('should make its width the default size given a size that doesnt exist', async () => {
    key.size = 'blue';
    await key.__updateSpyPromise;
    expect(key.w).toEqual(56);
  });

  it('should set its char as its title', () => {
    key.title = 'B';
    expect(key.title).toEqual('B');
  });

  it('should fire $onSoftKey events on enter press', () => {
    key.fireAncestors = jest.fn();
    key._handleEnter();
    expect(key.fireAncestors).toHaveBeenCalledWith('$onSoftKey', { key: 'a' });
  });

  it('should fire $toggleKeyboard events on enter press if a toggle is present', () => {
    [key, testRenderer] = createKey({ toggle: 'lowercase' });
    key.fireAncestors = jest.fn();
    key._handleEnter();
    expect(key.fireAncestors).toHaveBeenCalledWith(
      '$toggleKeyboard',
      'lowercase'
    );
  });

  // announcer specific tests
  describe('announcer', () => {
    it('should set nato', () => {
      [key, testRenderer] = createKey({ title: 'a' });
      expect(key.announce).toEqual('a, alpha, button');
    });

    it('should add capital for capital characters', () => {
      [key, testRenderer] = createKey({ title: 'Z' });
      expect(key.announce).toEqual('Capital Z, zulu, button');
    });

    it('should work for numeric', () => {
      [key, testRenderer] = createKey({ title: '4' });
      expect(key.announce).toEqual('4, button');
    });

    it('overrides the announce string', () => {
      const overrideString = 'Custom announce string';
      key.announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(key.announce).toBe(overrideString);
    });
  });
});
