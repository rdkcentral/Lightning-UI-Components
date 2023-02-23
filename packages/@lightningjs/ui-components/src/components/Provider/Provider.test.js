import { pathToDataURI, makeCreateComponent } from '@lightningjs/ui-test-utils';
import { Icon } from '@lightningjs/ui-components';
import Provider from '.';

const iconSquare = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-Square.png'
);
const iconRect = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-2x1.png'
);

const properties = {
  visibleCount: 3,
  providers: Array(4).fill(iconSquare)
};

const createComponent = makeCreateComponent(Provider, properties);

describe('Provider', () => {
  let provider, testRenderer;

  beforeEach(() => {
    [provider, testRenderer] = createComponent();
  });
  afterEach(() => {
    provider = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the appropriate image alt text and hidden amount', () => {
    const announce = 'test';
    provider.visibleCount = 5;
    provider.providers = [{ icon: 'test.png', announce }];
    testRenderer.forceAllUpdates();
    expect(provider.announce).toEqual(['test']);
    provider.providers = Array(10).fill({
      icon: 'test.png',
      announce: 'test'
    });
    testRenderer.forceAllUpdates();
    const providerAnnounce = Array(5).fill(announce);
    providerAnnounce.push('+5');
    expect(provider.announce).toEqual(providerAnnounce);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    provider.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(provider.announce).toBe(overrideString);
  });

  it('displays the correct number of providers as Icons', () => {
    expect(provider._Row.items.length).toBe(4);
    expect(provider._Row.items[0]).toBeInstanceOf(Icon);
    expect(provider._Row.items[1]).toBeInstanceOf(Icon);
    expect(provider._Row.items[2]).toBeInstanceOf(Icon);
    expect(provider._Row.items[3]).not.toBeInstanceOf(Icon);
  });

  it('displays the correct counter', () => {
    [provider, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare)
    });
    expect(provider._Row.items[3]).not.toBeInstanceOf(Icon);
    expect(provider._Row.items[3].tag('Text').content).toBe('+17');
  });

  it('displays the correct counter with custom counterText', () => {
    [provider, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare),
      counterText: '...'
    });
    expect(provider._Row.items[3].tag('Text').content).toBe('...');
  });

  it('scales a non-square icon to the correct dimensions', () => {
    [provider, testRenderer] = createComponent({
      providers: [
        iconSquare,
        {
          type: Icon,
          w: 128,
          h: 64,
          icon: iconRect
        },
        ...Array.apply(null, { length: 18 }).map(() => iconSquare)
      ]
    });
    // Second provider should maintain its 2:1 ratio and have a height of 40 (itemSize from the styles file)
    const { w, h } = provider._Row.items[1];
    const ratio = 2 / 1;
    expect({ w, h }).toMatchObject({
      w: provider.style.itemSize * ratio,
      h: provider.style.itemSize
    });
  });
});
