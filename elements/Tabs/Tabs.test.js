import TestUtils from '../../test/lightning-test-utils';
import TabBar, { Tab } from '.';

const createTabBar = TestUtils.makeCreateComponent(TabBar);
const createTab = TestUtils.makeCreateComponent(Tab, {}, { focused: false });
const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

describe('Tab', () => {
  let tab, testRenderer;

  beforeEach(() => {
    [tab, testRenderer] = createTab();
  });

  afterEach(() => {
    tab = null;
    testRenderer = null;
  });

  it('renders', () => {
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders with a title', () => {
    [tab, testRenderer] = createTab({ title: 'Tab' });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tab._Text.text.text).toBe('Tab');
  });

  it('renders with an icon', () => {
    [tab, testRenderer] = createTab({ icon });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tab._Icon.icon).toBe(icon);
  });

  it('renders with a title and icon', () => {
    [tab, testRenderer] = createTab({ title: 'Tab', icon });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets iconWidth and iconHeight', () => {
    [tab, testRenderer] = createTab({
      icon,
      iconWidth: 22,
      iconHeight: 20
    });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);

    expect(tree).toMatchSnapshot();
    expect(tab._Icon.w).toBe(22);
    expect(tab._Icon.h).toBe(20);
  });

  it('sets iconSize', () => {
    [tab, testRenderer] = createTab({
      icon,
      iconSize: 'small'
    });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tab._Icon.w).toBe(tab.styles.icon.sizes.small);
    expect(tab._Icon.h).toBe(tab.styles.icon.sizes.small);
  });

  it('sets default values', () => {
    expect(tab.iconSize).toBe('medium');
  });

  it('sets initial color', () => {
    testRenderer.update();
    expect(tab._Icon.color).toBe(tab.styles.icon.color);
    expect(tab._Text.color).toBe(tab.styles.text.color);
  });

  it('sets color on focus', () => {
    testRenderer.focus();
    testRenderer.update();
    expect(tab._Icon.color).toBe(tab.styles.focused.icon.color);
    expect(tab._Text.color).toBe(tab.styles.focused.text.color);
  });

  it('sets color on select', () => {
    tab.select();
    testRenderer.update();
    expect(tab._Icon.color).toBe(tab.styles.selected.icon.color);
    expect(tab._Text.color).toBe(tab.styles.selected.text.color);
  });

  it('has announcer text', () => {
    [tab, testRenderer] = createTab({ title: 'Foo' });
    expect(tab.announce).toBe('Foo, Tab');
  });
});

describe('TabBar', () => {
  let tabBar, testRenderer;

  beforeEach(() => {
    [tabBar, testRenderer] = createTabBar();
  });
  afterEach(() => {
    tabBar = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has default values', () => {
    expect(tabBar.barSpacing).toBe(4);
    expect(tabBar.barLength).toBe(0);
    expect(tabBar.tabHeight).toBe(0);
    expect(tabBar.tabWidth).toBe(0);
  });

  it('renders tabs', done => {
    [tabBar, testRenderer] = createTabBar({
      tabs: [
        { type: Tab, title: 'Foo' },
        { type: Tab, title: 'Bar' }
      ]
    });

    tabBar._whenEnabled.then(() => {
      TestUtils.fastForward(tabBar.tabs);
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    });
  });

  it('renders tabs with tabHeight and tabWidth', done => {
    [tabBar, testRenderer] = createTabBar({
      tabHeight: 100,
      tabWidth: 100,
      tabs: [
        { type: Tab, title: 'Foo' },
        { type: Tab, title: 'Bar', w: 50, h: 50 }
      ]
    });

    tabBar._whenEnabled.then(() => {
      TestUtils.fastForward(tabBar.tabs);
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      setTimeout(() => {
        expect(tabBar._Container.items[0].w).toBe(100);
        expect(tabBar._Container.items[0].h).toBe(100);
        expect(tabBar._Container.items[1].w).toBe(50);
        expect(tabBar._Container.items[1].h).toBe(50);
        done();
      }, 0);
    });
  });

  it('renders a focus bar with barLength and barSpacing', done => {
    [tabBar, testRenderer] = createTabBar({
      barLength: 100,
      barSpacing: 10,
      tabs: [
        { type: Tab, title: 'Foo' },
        { type: Tab, title: 'Bar' }
      ]
    });

    setTimeout(() => {
      TestUtils.fastForward(tabBar.tabs);
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      setTimeout(() => {
        expect(tabBar._FocusBar.y).toBe(10);
        expect(tabBar._FocusBar.w).toBe(100);
        done();
      }, 0);
    });
  });

  it('focus bar transitions to selected value on key navigation', done => {
    [tabBar, testRenderer] = createTabBar({
      barLength: 50,
      tabHeight: 50,
      tabWidth: 100,
      tabs: [{ type: Tab }, { type: Tab }]
    });

    setTimeout(() => {
      expect(tabBar._FocusBar.x).toBe(50);
      testRenderer.keyPress('Right');
      TestUtils.fastForward(tabBar._FocusBar);
      expect(tabBar._FocusBar.x).toBe(150);
      done();
    });
  });

  it('focus bar width adjusts to Tab barLength definition', done => {
    [tabBar, testRenderer] = createTabBar({
      tabs: [
        { type: Tab, barLength: 100 },
        { type: Tab, barLength: 50 }
      ]
    });

    setTimeout(() => {
      expect(tabBar._FocusBar.w).toBe(100);
      testRenderer.keyPress('Right');
      TestUtils.fastForward(tabBar._FocusBar);
      expect(tabBar._FocusBar.w).toBe(50);
      testRenderer.keyPress('Left');
      expect(tabBar._FocusBar.w).toBe(100);
      done();
    }, 0);
  });

  it('supports Row props itemSpacing and wrapSelected', done => {
    [tabBar, testRenderer] = createTabBar({
      itemSpacing: 20,
      wrapSelected: true,
      tabs: [
        { type: Tab, title: 'One' },
        { type: Tab, title: 'Two' }
      ]
    });

    expect(tabBar.wrapSelected).toBe(true);
    expect(tabBar.itemSpacing).toBe(20);

    setTimeout(() => {
      TestUtils.fastForward(tabBar.tabs);
      TestUtils.fastForward(tabBar._Container);
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      expect(tabBar.selected.title).toBe('One');
      testRenderer.keyPress('Right');
      expect(tabBar.selected.title).toBe('Two');
      testRenderer.keyPress('Right');
      expect(tabBar.selected.title).toBe('One');
      testRenderer.keyPress('Left');
      expect(tabBar.selected.title).toBe('Two');
      done();
    }, 0);
  });

  it('focus bar alpha changes on unfocus', done => {
    [tabBar, testRenderer] = createTabBar({
      barLength: 10,
      tabs: [{ type: Tab }]
    });

    setTimeout(() => {
      testRenderer.unfocus();
      expect(tabBar._FocusBar.alpha).toBe(0.48);
      done();
    });
  });
});
