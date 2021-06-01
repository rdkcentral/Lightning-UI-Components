import TestUtils from '../../test/lightning-test-utils';
import Key from '.';

const createKey = TestUtils.makeCreateComponent(Key);
const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

describe('Key', () => {
  let key, testRenderer;

  beforeEach(() => {
    [key, testRenderer] = createKey({ title: 'a' });
  });

  afterEach(() => {
    key = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets sizes inside the config', () => {
    key.config = { sizes: { small: 70, medium: 115 } };
    expect(key._sizes).toEqual({
      small: 70,
      medium: 115,
      large: 196,
      xlarge: 400
    });
  });

  it('should patch in an icon if provided', () => {
    [key, testRenderer] = createKey({ icon: { src: icon } });
    expect(key._Icon).toBeDefined();
  });

  it('should adjust its width if given a size', () => {
    [key, testRenderer] = createKey({ size: 'medium' });
    expect(key.w).toEqual(128);
  });

  it('should make its width its height if given a size that doesnt exist', () => {
    [key, testRenderer] = createKey({ size: 'blue' });
    expect(key.w).toEqual(60);
  });

  it('should set its char as its title', () => {
    [key, testRenderer] = createKey({ char: 'a' });
    expect(key.title).toEqual('a');
  });

  it('should set its label as its title', () => {
    [key, testRenderer] = createKey({ label: 'done' });
    expect(key.title).toEqual('done');
  });

  describe('#announce', () => {
    it('should set nato', () => {
      [key, testRenderer] = createKey({ char: 'a' });
      expect(key.announce).toEqual('a, alpha, button');
    });

    it('should add capital for capital characters', () => {
      [key, testRenderer] = createKey({ char: 'Z' });
      expect(key.announce).toEqual('Capital Z, zulu, button');
    });

    it('should work for numeric', () => {
      [key, testRenderer] = createKey({ char: '4' });
      expect(key.announce).toEqual('4, button');
    });
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

  it('should update color and scale on focus', () => {
    key._smooth = false;
    key._focus();

    setTimeout(() => {
      expect(key.color).toBe(getHexColor('ECECF2'));
      expect(key.scale).toBe(1.12);
      expect(key._Title.color).toBe(4060086272);
      done();
    });
  });
});
