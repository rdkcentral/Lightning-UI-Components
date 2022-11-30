import { pathToDataURI, makeCreateComponent } from '@lightning/ui-test-utils';
import { Icon } from '@lightning/ui-core';
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
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  // TODO: skipping snapshot test until test:watch or updateSnapshot script has been re-added
  xit('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the appropriate image alt text and hidden amount', () => {
    const announce = 'test';
    component.visibleCount = 5;
    component.providers = [{ icon: 'test.png', announce }];
    testRenderer.forceAllUpdates();
    expect(component.announce).toEqual(['test']);
    component.providers = Array(10).fill({
      icon: 'test.png',
      announce: 'test'
    });
    testRenderer.forceAllUpdates();
    const providerAnnounce = Array(5).fill(announce);
    providerAnnounce.push('+5');
    expect(component.announce).toEqual(providerAnnounce);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
  });

  it('displays the correct number of providers as Icons', () => {
    expect(component._Row.items.length).toBe(4);
    expect(component._Row.items[0]).toBeInstanceOf(Icon);
    expect(component._Row.items[1]).toBeInstanceOf(Icon);
    expect(component._Row.items[2]).toBeInstanceOf(Icon);
    expect(component._Row.items[3]).not.toBeInstanceOf(Icon);
  });

  it('displays the correct counter', () => {
    [component, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare)
    });
    expect(component._Row.items[3]).not.toBeInstanceOf(Icon);
    expect(component._Row.items[3].tag('Text').content).toBe('+17');
  });

  it('displays the correct counter with custom counterText', () => {
    [component, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare),
      counterText: '...'
    });
    expect(component._Row.items[3].tag('Text').content).toBe('...');
  });

  it('scales a non-square icon to the correct dimensions', () => {
    [component, testRenderer] = createComponent({
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
    // Second provider should maintain its 2:1 ratio and have a height of 48 (from styles)
    const { w, h } = component._Row.items[1];
    expect({ w, h }).toMatchObject({
      w: 96,
      h: 48
    });
  });
});
