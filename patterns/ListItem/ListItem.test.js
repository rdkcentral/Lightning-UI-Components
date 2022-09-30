import lng from '@lightningjs/core';
import ListItem, {
  ListItemBase,
  ListItemImage,
  ListItemSlider,
  ListItemToggle,
  ListItemRadio,
  ListItemPicker,
  ListItemPlan
} from '.';
import { getHexColor } from '../../utils';
import TestUtils from '../../test/lightning-test-utils';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');
const src = TestUtils.pathToDataURI('assets/images/56.png');

const createListItem = TestUtils.makeCreateComponent(ListItem);
const createListItemBase = TestUtils.makeCreateComponent(
  ListItemBase,
  {},
  { focused: false }
);
const createListItemImage = TestUtils.makeCreateComponent(ListItemImage);
const createListItemSlider = TestUtils.makeCreateComponent(ListItemSlider);
const createListItemToggle = TestUtils.makeCreateComponent(ListItemToggle);
const createListItemRadio = TestUtils.makeCreateComponent(ListItemRadio);
const createListItemPicker = TestUtils.makeCreateComponent(ListItemPicker);
const createListItemPlan = TestUtils.makeCreateComponent(ListItemPlan);

describe('ListItemBase', () => {
  let listItemBase, testRenderer;
  beforeEach(() => {
    [listItemBase, testRenderer] = createListItemBase();
    testRenderer.update();
  });
  afterEach(() => {
    listItemBase = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(listItemBase._Container.finalH).toBe(96);
  });

  it('supports rendering at xsmall, small, medium, and large sizes', () => {
    const sizes = ['xsmall', 'small', 'medium', 'large'];
    sizes.forEach(size => {
      [listItemBase, testRenderer] = createListItemBase({ size });
      testRenderer.update();
      expect(typeof listItemBase.styles.dimensions[size]).toBe('number');
      expect(listItemBase._Container.finalW).toBe(
        listItemBase.styles.dimensions[size]
      );
    });
  });

  it('renders custom size', () => {
    [listItemBase, testRenderer] = createListItemBase({ w: 500 });
    testRenderer.update();
    expect(listItemBase._Container.finalW).toBe(500);
  });

  describe('focus', () => {
    it('has a default unfocus background', () => {
      expect(listItemBase._Container.color).toBe(0xff232328);
    });
    it('supports backgroundType props', () => {
      [listItemBase, testRenderer] = createListItemBase({
        backgroundType: 'ghost'
      });
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(0x7a232328);

      [listItemBase, testRenderer] = createListItemBase({
        backgroundType: 'float'
      });
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(0);
    });
    it('has a focus background', () => {
      listItemBase._focus();
      testRenderer.focus();
      testRenderer.forceAllUpdates();
      expect(listItemBase._Container.color).toBe(getHexColor('ECECF2'));
    });
    it('resets colors on unfocus', () => {
      listItemBase._focus();
      testRenderer.update();

      listItemBase._unfocus();
      testRenderer.update();
      expect(listItemBase._Container.color).toBe(0xff232328);
    });
  });
});

describe('ListItem', () => {
  let listItem, testRenderer;

  beforeEach(() => {
    [listItem, testRenderer] = createListItem();
    testRenderer.update();
  });

  afterEach(() => {
    listItem = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a title', () => {
    [listItem, testRenderer] = createListItem({
      title: 'My Title'
    });
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(listItem._Title.title.text).toEqual(listItem.title);
  });

  it('should render a subtitle', () => {
    [listItem, testRenderer] = createListItem({
      subtitle: 'My Subtitle'
    });
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(listItem._Subtitle).toBeDefined();
    expect(listItem._Subtitle.title.text).toEqual('My Subtitle');
  });

  it('should render a title and subtitle together', () => {
    [listItem, testRenderer] = createListItem({
      title: 'My Title',
      subtitle: 'My Subtitle'
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should update subtitle', () => {
    [listItem, testRenderer] = createListItem({});
    testRenderer.update();
    expect(listItem._Subtitle).toBeUndefined();
    listItem.subtitle = 'Update Subtitle';
    testRenderer.forceAllUpdates();
    expect(listItem._Subtitle).toBeDefined();
    expect(listItem._Subtitle.title.text).toEqual('Update Subtitle');
  });

  it('should render an icon', () => {
    [listItem, testRenderer] = createListItem({
      icon: icon
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(listItem._Icon.icon).toEqual(listItem.icon);
  });

  it('should hide icon on focus when flag is true', () => {
    [listItem, testRenderer] = createListItem({
      icon: icon,
      collapseIcon: true
    });
    listItem._focus();
    testRenderer.forceAllUpdates();
    expect(listItem._Right.alpha).toEqual(1);
  });

  it('should render multiple icons', () => {
    [listItem, testRenderer] = createListItem({
      icon: [icon, icon]
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(listItem._icons.map(icon => icon.icon)).toEqual(
      expect.arrayContaining(listItem.icon)
    );
  });

  describe('focus', () => {
    beforeEach(() => {
      [listItem, testRenderer] = createListItem({
        title: 'My Title',
        subtitle: 'My Subtitle',
        icon: icon
      });
      listItem._focus();
      testRenderer.forceAllUpdates();
    });
    it('focused items transition color', () => {
      expect(listItem._Title.color).toEqual(0xf2000000);
      expect(listItem._Subtitle.color).toEqual(0xcc000000);
      expect(listItem._Icon.color).toEqual(4294967295);
    });
    it('unfocused items transition color', () => {
      listItem._unfocus();
      testRenderer.unfocus();
      testRenderer.forceAllUpdates();

      expect(listItem._Title.color).toEqual(0xf2ffffff);
      expect(listItem._Subtitle.color).toEqual(0xccffffff);
      expect(listItem._Icon.color).toEqual(4294967295);
    });

    it('should announce title and subtitle', () => {
      expect(listItem.announce).toBe('My Title My Subtitle');
    });

    it('should announce title when no subtitle/annouce passed', () => {
      [listItem, testRenderer] = createListItem({
        title: 'My Title'
      });
      expect(listItem.announce).toEqual('My Title ');
    });

    it('should announce when passed', () => {
      [listItem, testRenderer] = createListItem({
        announce: 'Override the default announce text'
      });
      expect(listItem.announce).toEqual('Override the default announce text');
    });
  });

  describe('collapse set to true', () => {
    beforeEach(() => {
      [listItem, testRenderer] = createListItem({
        title: 'My Title',
        subtitle: 'My Subtitle',
        collapse: true
      });
      testRenderer.update();
    });

    describe('on focus', () => {
      beforeEach(() => {
        listItem._focus();
        testRenderer.forceAllUpdates();
      });
      it('should show subtitle', () => {
        expect(listItem._Subtitle.alpha).toEqual(1);
      });
      it('should shift title to top', () => {
        expect(listItem._Left.y).toEqual(0);
      });
      it('should not shift text if no subtitle', () => {
        listItem.subtitle = false;
        testRenderer.forceAllUpdates();
        expect(listItem._Left.y).toEqual(0);
      });
    });
    describe('on unfocus', () => {
      beforeEach(() => {
        listItem._unfocus();
        testRenderer.unfocus();
        testRenderer.update();
      });
      it('should hide subtitle', () => {
        expect(listItem._Subtitle.alpha).toEqual(0);
      });
      it('should vertically center title', () => {
        expect(listItem._Left.y).toBeGreaterThan(0);
      });
      it('should not shift text if no subtitle', () => {
        listItem.subtitle = false;
        testRenderer.forceAllUpdates();
        expect(listItem._Subtitle).toEqual(undefined);

        expect(listItem._Left.y).toEqual(0);
      });
    });
  });
});

describe('ListItemToggle', () => {
  let listItemToggle, testRenderer;

  beforeEach(() => {
    [listItemToggle, testRenderer] = createListItemToggle();
    testRenderer.update();
  });

  afterEach(() => {
    listItemToggle = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in a checked state', () => {
    [listItemToggle, testRenderer] = createListItemToggle({
      checked: true
    });
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('puts focus on the toggle', () => {
    expect(listItemToggle._getFocused()).toEqual(
      listItemToggle._Toggle._getFocused()
    );
  });

  it('toggles on enter', async () => {
    [listItemToggle, testRenderer] = createListItemToggle(
      {},
      { spyOnMethods: ['_update'] }
    );
    testRenderer.keyPress('Enter');
    await listItemToggle.__updatePromiseSpy;
    testRenderer.update();
    expect(listItemToggle.isChecked()).toBe(true);
  });

  describe('#toggle', () => {
    it('toggles checked state', () => {
      const spy = jest.spyOn(listItemToggle._Toggle, 'toggle');
      listItemToggle.toggle();
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('ListItemRadio', () => {
  let listItemRadio, testRenderer;

  beforeEach(() => {
    [listItemRadio, testRenderer] = createListItemRadio();
    testRenderer.update();
  });

  afterEach(() => {
    listItemRadio = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in a checked state', () => {
    [listItemRadio, testRenderer] = createListItemRadio({
      checked: true
    });
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('puts focus on the radio', () => {
    expect(listItemRadio._getFocused()).toEqual(
      listItemRadio._Radio._getFocused()
    );
  });

  it('toggles on enter', () => {
    listItemRadio._handleEnter();
    testRenderer.keyPress('Enter');
    testRenderer.update();

    expect(listItemRadio.isChecked()).toBe(true);
  });

  describe('#radio', () => {
    it('radios checked state', () => {
      const spy = jest.spyOn(listItemRadio._Radio, 'toggle');
      listItemRadio.toggle();
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('ListItemImage', () => {
  let listItemImage, testRenderer;

  beforeEach(() => {
    [listItemImage, testRenderer] = createListItemImage({
      title: 'List Item',
      subtitle: 'List Item Metadata',
      src
    });
    testRenderer.update();
  });

  afterEach(() => {
    listItemImage = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders optional icon', () => {
    const { title, subtitle } = listItemImage;
    [listItemImage, testRenderer] = createListItemImage({
      title,
      subtitle,
      src,
      icon
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('accepts texture change', () => {
    listItemImage.texture = {
      type: lng.textures.ImageTexture,
      resizeMode: { type: 'cover', w: 56, h: 56 },
      src
    };
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('updates image size', async done => {
    listItemImage.image = src;

    const test1 = () => {
      return new Promise(resolve => {
        listItemImage.imageSize = 80;
        testRenderer.forceAllUpdates();
        // setTimeout(() => {
        expect(listItemImage.h).toBe(96);
        resolve();
        // }, 0);
      });
    };

    const test2 = () => {
      return new Promise(resolve => {
        listItemImage.imageSize = 60;
        // setTimeout(() => {
        testRenderer.forceAllUpdates();
        expect(listItemImage.h).toBe(96);
        resolve();
        //}, 0);
      });
    };

    await test1();
    await test2();
    done();
  });
});

describe('ListItemSlider', () => {
  let listItemSlider, testRenderer;
  beforeEach(() => {
    [listItemSlider, testRenderer] = createListItemSlider({
      title: 'List Item'
    });
    testRenderer.update();
  });
  afterEach(() => {
    listItemSlider = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders with default values', () => {
    expect(listItemSlider.max).toEqual(100);
    expect(listItemSlider.min).toEqual(0);
    expect(listItemSlider.step).toEqual(1);
    expect(listItemSlider.value).toEqual(0);
  });

  it('renders a slider on focus', () => {
    listItemSlider._focus();
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('passes properties to the Slider', () => {
    [listItemSlider, testRenderer] = createListItemSlider({
      value: 8,
      min: 1,
      max: 10,
      step: 2
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    testRenderer.forceAllUpdates();
    // setTimeout(() => {
    expect(listItemSlider._Slider.value).toEqual(8);
    expect(listItemSlider._Slider.min).toEqual(1);
    expect(listItemSlider._Slider.max).toEqual(10);
    expect(listItemSlider._Slider.step).toEqual(2);
    //   done();
    // }, 0);
  });

  it('renders properly on unfocus', () => {
    listItemSlider._focus();
    testRenderer.update();
    listItemSlider._unfocus();
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('updates the value', done => {
    let tree;
    listItemSlider._focus();

    testRenderer.keyPress('Right');
    tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(listItemSlider.value).toEqual(1);

    testRenderer.keyPress('Left');
    tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(listItemSlider.value).toEqual(0);
    done();
  });

  it('should announce title and value', () => {
    expect(listItemSlider.announce).toBe('List Item 0');
  });
});

describe('ListItemPicker', () => {
  let listItemPicker, testRenderer;
  beforeEach(() => {
    [listItemPicker, testRenderer] = createListItemPicker({
      title: 'List Item Picker',
      options: ['op1', 'op2', 'op3']
    });
    testRenderer.update();
  });
  afterEach(() => {
    listItemPicker = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(listItemPicker.selectedOption).toBe('op1');
    expect(listItemPicker._Subtitle.title.text).toBe('op1');
  });

  it('renders with options', done => {
    [listItemPicker, testRenderer] = createListItemPicker({
      title: 'List Item Picker',
      options: ['op1', 'op2', 'op3'],
      backgroundType: 'fill',
      size: 'small',
      selectedOptionIndex: 1
    });
    let tree = testRenderer.toJSON(2);
    listItemPicker._whenEnabled.then(() => {
      expect(tree).toMatchSnapshot();
      expect(listItemPicker.selectedOptionIndex).toBe(1);
      expect(listItemPicker.selectedOption).toBe('op2');
      expect(listItemPicker.hasFocus()).toBe(true);
      testRenderer.unfocus();
      tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      expect(listItemPicker._Subtitle.title.text).toBe('op2');
      done();
    });
  });
  it('renders selected option as subtitle on unfocus', async () => {
    [listItemPicker, testRenderer] = createListItemPicker(
      {
        title: 'List Item Picker',
        options: ['op1', 'op2', 'op3']
      },
      { spyOnMethods: ['_updateSubtitle'] }
    );
    await listItemPicker.__updateSubtitleSpyPromise;
    testRenderer.forceAllUpdates();

    expect(listItemPicker.hasFocus()).toBe(true);
    expect(listItemPicker._Subtitle.visible).toBe(false);

    testRenderer.unfocus();
    await listItemPicker.__updateSubtitleSpyPromise;

    expect(listItemPicker.hasFocus()).toBe(false);
    expect(listItemPicker._Subtitle.visible).toBe(true);
  });
});

describe('ListItemPlan', () => {
  let listItemPlan, testRenderer;

  beforeEach(() => {
    [listItemPlan, testRenderer] = createListItemPlan({
      title: 'ListItemPlan title',
      subtitle: 'ListItemPlan subtitle',
      content: 'ListItemPlan content',
      disclaimer: 'ListItemPlan disclaimer'
    });
    testRenderer.update();
  });

  afterEach(() => {
    listItemPlan = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a content', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(listItemPlan._Content.content).toEqual(listItemPlan.content);
  });

  it('should update content', () => {
    [listItemPlan, testRenderer] = createListItemPlan({});
    testRenderer.update();
    expect(listItemPlan._Content).toBeUndefined();
    listItemPlan.content = 'Update Content';
    testRenderer.forceAllUpdates();
    expect(listItemPlan._Content).toBeDefined();
    expect(listItemPlan._Content.content).toEqual('Update Content');
  });

  it('should render a disclaimer', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(listItemPlan._Disclaimer.content).toEqual(listItemPlan.disclaimer);
  });

  it('should update disclaimer', () => {
    [listItemPlan, testRenderer] = createListItemPlan({});
    testRenderer.update();
    expect(listItemPlan._Disclaimer).toBeUndefined();
    listItemPlan.disclaimer = 'Update Content';
    testRenderer.forceAllUpdates();
    expect(listItemPlan._Disclaimer).toBeDefined();
    expect(listItemPlan._Disclaimer.content).toEqual('Update Content');
  });

  describe('focus', () => {
    beforeEach(() => {
      [listItemPlan, testRenderer] = createListItemPlan({
        title: 'ListItemPlan title',
        subtitle: 'ListItemPlan subtitle',
        content: 'ListItemPlan content',
        disclaimer: 'ListItemPlan disclaimer'
      });
      listItemPlan._focus();
      testRenderer.forceAllUpdates();
    });
    it('focused items transition color', () => {
      expect(listItemPlan._Content.textColor).toEqual(0x99000000);
    });
    it('unfocused items transition color', () => {
      listItemPlan._unfocus();
      testRenderer.unfocus();
      testRenderer.forceAllUpdates();

      expect(listItemPlan._Content.textColor).toEqual(0x99ffffff);
    });

    it('should announce all text', () => {
      expect(listItemPlan.announce).toStrictEqual([
        listItemPlan.title,
        listItemPlan.subtitle,
        listItemPlan.content,
        listItemPlan.disclaimer
      ]);
    });
  });
});
