import TestUtils from '../../test/lightning-test-utils';
import BoardRow from '.';
import { Tile } from '../../elements';
import { CardVerticalLarge } from '../../patterns/Card';
import BoardRowComponent from './BoardRowComponent';

const jurassic = TestUtils.pathToDataURI(
  './assets/images/Jurassic_World_16x9.jpg'
);

const menuCard = {
  title: 'Test title',
  description: 'Test description',
  cta: 'View All',
  gradientColor: '#663399',
  onEnter: () => {},
  onInfo: () => {}
};

const mockItemsValid = type => {
  return new Array(10).fill().map((item, index) => {
    return {
      type,
      src: jurassic,
      title: `Item ${index + 1}`
    };
  });
};

const createComponent = TestUtils.makeCreateComponent(BoardRow);

describe('BoardRow', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });

  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should have a height if layout is not defined', () => {
    expect(component.h).toEqual(461.25);
  });

  it('should deliver the correct height for default layout', () => {
    const component = createComponent({ layout: 'standard' })[0];
    expect(component.h).toEqual(461.25);
  });

  it('should deliver the correct height for hero layout', () => {
    const component = createComponent({ layout: 'hero' })[0];
    expect(component.h).toEqual(461.25);
  });

  it('should deliver the correct height for poster layout', () => {
    const component = createComponent({ layout: 'poster' })[0];
    const roundedHeight = Math.round(component.h * 100) / 100;
    expect(roundedHeight).toEqual(546.67);
  });

  it('should deliver the correct height for card layout', () => {
    const component = createComponent({ layout: 'card' })[0];
    const roundedHeight = Math.round(component.h * 100) / 100;
    expect(roundedHeight).toEqual(546.67);
  });

  it('should deliver the correct height for square layout', () => {
    const component = createComponent({ layout: 'square' })[0];
    expect(component.h).toEqual(410);
  });

  it('should deliver the correct height for square small layout', () => {
    const component = createComponent({ layout: 'squareSmall' })[0];
    expect(component.h).toEqual(370); // Not sure this one is right
  });

  it('should accept all properties for menuCard', () => {
    [component] = createComponent({ menuCard });
    expect(
      component._Layout.constructor.properties.includes('menuCard')
    ).toEqual(true);
    expect(component._Layout.MenuCard.title).toEqual('Test title');
    expect(component._Layout.MenuCard.description).toEqual('Test description');
    expect(component._Layout.MenuCard.cta).toEqual('View All');
    expect(typeof component._Layout.MenuCard.onEnter).toBe('function');
    expect(typeof component._Layout.MenuCard.onInfo).toBe('function');
  });

  it('should accept all valid row props', () => {
    const rowProps = [
      'itemSpacing',
      'scrollIndex',
      'alwaysScroll',
      'neverScroll',
      'lazyScroll'
    ];

    expect(
      rowProps.every(prop =>
        component._Layout.constructor.properties.includes(prop)
      )
    ).toBe(true);
  });

  it('should execute function if enter is pressed while focused on the first vertical card', async () => {
    [component, testRenderer] = createComponent(
      {
        menuCard,
        items: mockItemsValid(Tile)
      },
      { spyOnMethods: ['_update'] }
    );
    await component.__updatePromiseSpy;

    const spy = jest.spyOn(component._Layout._Row.items[0], 'onEnter');
    testRenderer.keyPress('Enter');
    expect(spy).toBeCalled();
  });

  it('should accept viewAll prop', () => {
    [component, testRenderer] = createComponent({
      viewAll: true
    });
    expect(component.viewAll).toBe(true);
  });

  it('should show a duplicate the verticalCard dynamic at the end of the row if viewAll is equal to true', async done => {
    [component, testRenderer] = createComponent({
      viewAll: true,
      menuCard
    });

    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;

    expect(
      component._Layout._Row.items[component._Layout._Row.items.length - 1]
        .constructor.name
    ).toEqual(component._Layout._Row.items[0].constructor.name);
    done();
  });

  it('should show standard layout update', () => {
    [component, testRenderer] = createComponent({
      layout: 'standard'
    });
    expect(component._Layout._layoutType.name).toBe('StandardLayout');
  });

  it('should display items in the proper order for standard layout', async done => {
    [component, testRenderer] = createComponent({
      layout: 'standard',
      items: mockItemsValid(Tile),
      menuCard
    });

    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;
    const whenColumnEnabled =
      testRenderer.getInstance()._Layout._Row.selected._whenEnabled;
    await component._whenEnabled;
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 1');
    testRenderer.keyPress('Down');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 2');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 4');
    testRenderer.keyPress('Up');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 3');
    done();
  });

  it('should show hero layout', () => {
    [component, testRenderer] = createComponent({
      layout: 'hero'
    });
    expect(component._Layout._layoutType.name).toBe('HeroLayout');
  });

  it('should display items in the proper order for hero layout', async done => {
    [component, testRenderer] = createComponent({
      layout: 'hero',
      items: mockItemsValid(Tile),
      menuCard
    });
    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;
    const whenColumnEnabled =
      testRenderer.getInstance()._Layout._Row.selected._whenEnabled;
    await component._whenEnabled;
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 1');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 2');
    testRenderer.keyPress('Down');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 3');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 4');
    done();
  });

  it('should show poster layout', () => {
    [component, testRenderer] = createComponent({
      layout: 'poster'
    });
    expect(component._Layout._layoutType.name).toBe('PosterLayout');
  });

  it('should display items in the proper order for poster layout', async done => {
    [component, testRenderer] = createComponent({
      layout: 'poster',
      items: mockItemsValid(Tile),
      menuCard
    });
    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;
    const whenColumnEnabled =
      testRenderer.getInstance()._Layout._Row.selected._whenEnabled;
    await component._whenEnabled;
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 1');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 2');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 3');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 4');
    done();
  });

  it('should show card layout', () => {
    [component, testRenderer] = createComponent({
      layout: 'card'
    });
    expect(component._Layout._layoutType.name).toBe('CardLayout');
  });

  it('should display items in the proper order for card layout', async done => {
    [component, testRenderer] = createComponent({
      layout: 'card',
      items: mockItemsValid(CardVerticalLarge),
      menuCard
    });
    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;
    const whenColumnEnabled =
      testRenderer.getInstance()._Layout._Row.selected._whenEnabled;
    await component._whenEnabled;
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 1');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 2');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 3');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 4');
    done();
  });

  it('should show square layout', () => {
    [component, testRenderer] = createComponent({
      layout: 'square'
    });
    expect(component._Layout._layoutType.name).toBe('SquareLayout');
  });

  it('should display items in the proper order for square layout', async done => {
    [component, testRenderer] = createComponent({
      layout: 'square',
      items: mockItemsValid(Tile),
      menuCard
    });
    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;
    const whenColumnEnabled =
      testRenderer.getInstance()._Layout._Row.selected._whenEnabled;
    await component._whenEnabled;
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 1');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 2');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 3');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 4');
    done();
  });

  it('should show squareSmall layout', () => {
    [component, testRenderer] = createComponent({
      layout: 'squareSmall'
    });
    expect(component._Layout._layoutType.name).toBe('SquareSmallLayout');
  });

  it('should display items in the proper order for squareSmall layout', async done => {
    [component, testRenderer] = createComponent({
      layout: 'squareSmall',
      items: mockItemsValid(Tile),
      menuCard
    });
    testRenderer.getInstance()._Layout._Row.appendItemsPromise = new Promise(
      resolve =>
        (testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver =
          resolve)
    );
    const originalSetItems =
      testRenderer.getInstance()._Layout._Row.appendItems;
    jest
      .spyOn(testRenderer.getInstance()._Layout._Row, 'appendItems')
      .mockImplementation(function (items) {
        originalSetItems.call(this, items);
        testRenderer.getInstance()._Layout._Row.appendItemsPromiseResolver();
      });
    await testRenderer.getInstance()._Layout._Row.appendItemsPromise;
    const whenColumnEnabled =
      testRenderer.getInstance()._Layout._Row.selected._whenEnabled;
    await component._whenEnabled;
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 1');
    testRenderer.keyPress('Down');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 2');
    testRenderer.keyPress('Right');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 4');
    testRenderer.keyPress('Up');
    await whenColumnEnabled;
    expect(testRenderer.getFocused().title).toBe('Item 3');
    done();
  });

  it('should fallback to the standard layout if none specified', () => {
    expect(component._Layout._layoutType.name).toBe('StandardLayout');
  });

  it('should fallback to the standard layout if wrong value is specified', () => {
    [component, testRenderer] = createComponent({
      layout: 'foobar',
      items: mockItemsValid(Tile)
    });

    expect(component._Layout._layoutType.name).toBe('StandardLayout');
  });

  it('should return each item in items as a BoardRowComponent that extends the item type', () => {
    const mock = jest.fn();

    mock.mockImplementation(async () => {
      return jurassic;
    });

    const createTileComponent = TestUtils.makeCreateComponent(
      BoardRowComponent(Tile, mock)
    );

    [component, testRenderer] = createTileComponent({
      srcCached: jurassic
    });

    expect(mock).toBeCalledTimes(1);
  });
});
