import ActionButton, {
  ActionButtonIconLarge,
  ActionButtonIconMedium,
  ActionButtonIconSmall,
  ActionButtonLarge,
  ActionButtonMedium,
  ActionButtonSmall,
  ActionButtonXsmall
} from '.';
import TestUtils from '../../test/lightning-test-utils';
import { getHexColor } from '../../Styles';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createActionButton = TestUtils.makeCreateComponent(
  ActionButton,
  {},
  { focused: false }
);

describe('ActionButton', () => {
  let actionbutton, testRenderer;
  beforeEach(() => {
    [actionbutton, testRenderer] = createActionButton({
      title: 'Action Button'
    });
    testRenderer.update();
  });
  afterEach(() => {
    actionbutton = null;
    testRenderer = null;
    jest.clearAllMocks();
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should update it's shadow width for long titles", async () => {
    [actionbutton, testRenderer] = createActionButton(
      {
        title:
          'This is a really long title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title'
      },
      { spyOnMethods: ['_updateDropShadow'] }
    );

    await actionbutton.__updateDropShadowSpyPromise;

    expect(actionbutton.w).toBe(473);
    actionbutton._DropShadow.loadTexture();
    expect(actionbutton._DropShadow.texture._lookupId).toEqual(
      'shadow457,56,16,32,8,8,8,8'
    );
  });

  describe('style', () => {
    it('should set background to stroke', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'stroke'
      });
      expect(actionbutton.background).toBe(0);
      expect(actionbutton.stroke).toBe(true);
      expect(actionbutton.strokeColor).toBe(0xffececf2);
      expect(actionbutton.strokeWeight).toBe(2);
    });

    it('should set background to fill', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'fill'
      });

      expect(actionbutton.background).toBe(0xff232328);
      expect(actionbutton.stroke).toBe(false);
    });

    it('should set background to float', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'float'
      });
      expect(actionbutton.background).toBe(0);
      expect(actionbutton.stroke).toBe(false);
    });

    it('should default background to float', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'orange'
      });
      expect(actionbutton.background).toBe(0);
      expect(actionbutton.stroke).toBe(false);
    });
  });

  describe('icon', () => {
    it('should patch in an icon', () => {
      [actionbutton, testRenderer] = createActionButton({
        title: 'Action Button',
        icon
      });
      expect(actionbutton.icon).toEqual(
        expect.objectContaining({ src: icon, size: 40, spacing: 8 })
      );
    });
  });

  describe('rendering with a checkbox', () => {
    it('should prepend button text with a checkbox', () => {
      [actionbutton, testRenderer] = createActionButton({
        title: 'Action Button',
        checkbox: {
          checked: false
        }
      });
      expect(actionbutton.checkbox).toMatchObject({
        checked: false,
        spacing: expect.any(Number)
      });
      expect(actionbutton._Checkbox).toMatchObject({
        ref: 'Checkbox',
        checked: false
      });
    });
    it('should allow custom spacing between the checkbox and button text', () => {
      const spacing = 20;
      [actionbutton, testRenderer] = createActionButton({
        title: 'Action Button',
        checkbox: {
          checked: false,
          spacing
        }
      });
      expect(actionbutton.checkbox).toMatchObject({
        checked: false,
        spacing
      });
      expect(actionbutton._Checkbox.flexItem.marginRight).toEqual(spacing);
    });
    it('should not prepend with a checkbox if the checked property is invalid', () => {
      [actionbutton, testRenderer] = createActionButton({
        title: 'Action Button',
        checkbox: {
          checked: 'yes'
        }
      });
      expect(actionbutton.checkbox).toBeNull();
      expect(actionbutton._Checkbox).toBeUndefined();
    });
  });

  describe('loading', () => {
    it('should load if no title is set', async () => {
      [actionbutton, testRenderer] = createActionButton(
        {},
        { spyOnMethods: ['_firstEnable'] }
      );
      await actionbutton.__firstEnableSpyPromise;
      expect(actionbutton._loading.isPlaying()).toBe(true);
    });

    it('should stop loading once title is set', async () => {
      [actionbutton, testRenderer] = createActionButton(
        {},
        { spyOnMethods: ['_update'] }
      );
      await actionbutton.__updateSpyPromise;
      expect(actionbutton._loading.isPlaying()).toBe(true);
      actionbutton.title = 'Action Button';
      await actionbutton.__updateSpyPromise;
      expect(actionbutton._loading.isPlaying()).toBe(false);
    });
  });

  describe('focus', () => {
    it('should update color and scale on focus', () => {
      actionbutton._smooth = false;
      actionbutton._focus();
      testRenderer.focus();

      expect(actionbutton.color).toBe(getHexColor('ECECF2'));
      expect(actionbutton.scale).toBe((actionbutton.w + 40) / actionbutton.w);
      expect(actionbutton._Title.color).toBe(4060086272);
    });

    it('should update color and scale on unfocus', () => {
      actionbutton._unfocus();
      testRenderer.update();
      expect(actionbutton.color).toBe(0);
      expect(actionbutton.scale).toBe(1);
      expect(actionbutton._Title.color).toBe(0xf2ffffff);
    });

    it('should alpha in drop shadow and scale up on focus', done => {
      actionbutton._smooth = false;
      actionbutton._focus();
      testRenderer.focus();
      testRenderer.update();
      actionbutton._whenEnabled.then(() => {
        expect(actionbutton._DropShadow.alpha).toBe(1);
        expect(actionbutton.alpha).toBe(1);
        done();
      });
    });
    it('should alpha out drop shadow on unfocus', () => {
      actionbutton._unfocus();
      testRenderer.update();
      expect(actionbutton._DropShadow.alpha).toBe(0);
    });
  });
});

describe('ActionButtonIconLarge', () => {
  it('renders', () => {
    const createActionButtonIconLarge = TestUtils.makeCreateComponent(
      ActionButtonIconLarge,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonIconLarge();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(96);
    expect(actionButton.h).toBe(96);
    expect(actionButton.fixed).toBe(true);
  });
});

describe('ActionButtonIconMedium', () => {
  it('renders', () => {
    const createActionButtonIconMedium = TestUtils.makeCreateComponent(
      ActionButtonIconMedium,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonIconMedium();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(72);
    expect(actionButton.h).toBe(72);
    expect(actionButton.fixed).toBe(true);
  });
});

describe('ActionButtonIconSmall', () => {
  it('renders', () => {
    const createActionButtonIconSmall = TestUtils.makeCreateComponent(
      ActionButtonIconSmall,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonIconSmall();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(64);
    expect(actionButton.h).toBe(64);
    expect(actionButton.fixed).toBe(true);
  });
});

describe('ActionButtonLarge', () => {
  it('renders', () => {
    const createActionButtonLarge = TestUtils.makeCreateComponent(
      ActionButtonLarge,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonLarge();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(320);
    expect(actionButton.h).toBe(96);
  });
});

describe('ActionButtonMedium', () => {
  it('renders', () => {
    const createActionButtonMedium = TestUtils.makeCreateComponent(
      ActionButtonMedium,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonMedium();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(410);
    expect(actionButton.h).toBe(72);
  });
});

describe('ActionButtonSmall', () => {
  it('renders', () => {
    const createActionButtonSmall = TestUtils.makeCreateComponent(
      ActionButtonSmall,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonSmall();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(185);
    expect(actionButton.h).toBe(64);
  });
});

describe('ActionButtonXsmall', () => {
  it('renders', () => {
    const createActionButtonXsmall = TestUtils.makeCreateComponent(
      ActionButtonXsmall,
      {},
      { focused: false }
    );
    const [actionButton, testRenderer] = createActionButtonXsmall();
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actionButton.w).toBe(152);
    expect(actionButton.h).toBe(48);
  });
});
