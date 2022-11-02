import Control from './Control.js';
import Icon from '../Icon/index.js';
import {
  makeCreateComponent,
  pathToDataURI
} from '../../../test/lightning-test-utils.js';

const lightningIcon = pathToDataURI(
  'src/assets/images/ic_lightning_white_32.png'
);
const xfinityLogo = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-Square.png'
);

const createControl = makeCreateComponent(Control);

describe('Control', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createControl(
      { title: 'Control', shouldCollapse: false },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  function checkPrefixTag() {
    expect(component._Prefix).toBeUndefined();

    component._prefix = { type: Icon };
    testRenderer.forceAllUpdates();
    expect(component._Prefix).toBeDefined();
  }

  describe('title visibility', () => {
    describe('shouldCollapse is false', () => {
      it('should be visible if in focused mode', () => {
        component.mode = 'focused';
        expect(component._Title.visible).toEqual(true);
      });

      it('should be visible if in unfocused mode', () => {
        component.mode = 'unfocused';
        expect(component._Title.visible).toEqual(true);
      });

      it('should be visible if in disabled mode', () => {
        component.mode = 'disabled';
        expect(component._Title.visible).toEqual(true);
      });
    });

    describe('shouldCollapse is true', () => {
      it('should be visible if in focused mode', () => {
        component.shouldCollapse = true;
        component.mode = 'focused';
        expect(component._Title.visible).toEqual(true);
      });

      it('should NOT be visible if in unfocused mode', () => {
        component.shouldCollapse = true;
        component.mode = 'unfocused';
        testRenderer.forceAllUpdates();
        expect(component._Title.visible).toEqual(false);
      });

      it('should NOT be visible if in disabled mode', () => {
        component.shouldCollapse = true;
        component.mode = 'disabled';
        testRenderer.forceAllUpdates();
        expect(component._Title.visible).toEqual(false);
      });
    });

    it('should be undefined if there is no title element at all', () => {
      component.title = undefined;
      testRenderer.forceAllUpdates();
      expect(component._Title).toBeUndefined();
    });
  });

  describe('logo', () => {
    describe('provided', () => {
      it('prefix should display logo', () => {
        checkPrefixTag();

        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();
        expect(component._prefix.icon).toEqual(xfinityLogo);
      });
    });

    describe('not provided', () => {
      it('prefix should display icon if no logo is set', () => {
        component.icon = lightningIcon;
        component.logo = null;
        expect(component._prefix.icon).toEqual(lightningIcon);
      });

      it('prefix should be null if no logo or icon is set', () => {
        component.logo = null;
        component.icon = null;
        expect(component._prefix).toBeNull();
      });
    });
  });

  describe('icon', () => {
    describe('provided', () => {
      it('prefix should display icon', () => {
        checkPrefixTag();

        component.icon = lightningIcon;
        testRenderer.forceAllUpdates();
        expect(component._prefix.icon).toEqual(lightningIcon);
      });

      it('prefix should display logo if both icon and logo are set', () => {
        checkPrefixTag();

        component.logo = xfinityLogo;
        component.icon = lightningIcon;
        expect(component._prefix.icon).toEqual(xfinityLogo);
      });
    });

    describe('not provided', () => {
      it('prefix should be null if no icon or logo is set', () => {
        checkPrefixTag();

        component.logo = null;
        component.icon = null;
        testRenderer.forceAllUpdates();
        expect(component._prefix).toBeNull();
      });
    });
  });

  describe('_setPrefix', () => {
    it('should do nothing if a prefix property is passed into Control', () => {
      component.prefix = { type: Icon };
      testRenderer.forceAllUpdates();

      expect(component.prefix).toBeUndefined();
    });
  });

  describe('_setSuffix', () => {
    it('should do nothing if a suffix property is passed into Control', () => {
      component.suffix = { type: Icon };
      testRenderer.forceAllUpdates();

      expect(component.suffix).toBeUndefined();
    });
  });

  describe('_paddingLeft', () => {
    it('should have less padding if a logo is set', () => {
      checkPrefixTag();
      component.logo = xfinityLogo;
      expect(component._paddingLeft).toEqual(component.style.paddingXNoTitle);
    });

    it('should have more padding if no logo is set', () => {
      checkPrefixTag();
      component.logo = null;
      expect(component._paddingLeft).toEqual(component.style.paddingX);
    });
  });

  describe('_paddingRight', () => {
    it('should have more padding if there is a title and a logo', () => {
      component.logo = xfinityLogo;
      expect(component._paddingRight).toEqual(component.style.paddingX);
    });

    it('should have less padding if there is just a logo and no title', () => {
      component.logo = xfinityLogo;
      component.title = null;
      expect(component._paddingRight).toEqual(component.style.paddingXNoTitle);
    });
  });

  describe('_updateContentPosition', () => {
    describe('justify LEFT', () => {
      it('Title x should be 0 if just icon displayed', () => {
        component.justify = 'left';
        component.icon = lightningIcon;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(0);
        expect(component._Title.mountX).toEqual(0);
      });

      it('Title x should be 0 if logo is displayed', () => {
        component.justify = 'left';
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(0);
        expect(component._Title.mountX).toEqual(0);
      });

      it('Title x should be 0 if both logo and icon are defined', () => {
        component.justify = 'left';
        component.icon = lightningIcon;
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(0);
        expect(component._Title.mountX).toEqual(0);
      });
    });

    describe('justify RIGHT', () => {
      it('should set Title x and mountX to 0 if the fixed component width is less than content width', () => {
        component.w = 20;
        component.fixed = true;
        component.justify = 'right';
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(0);
        expect(component._Title.mountX).toEqual(0);
      });

      it('should patch the title position to the right if the fixed width is much greater than the content width', () => {
        component.w = 500;
        component.fixed = true;
        component.justify = 'right';
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(
          component.w -
            (component._paddingLeft +
              component._paddingRight +
              component._Prefix.w +
              component.style.titlePadding)
        );
        expect(component._Title.mountX).toEqual(1);
      });
    });

    describe('justify CENTER', () => {
      it('should set Title x and mountX to 0 if fixed and the component width is less than content width', () => {
        component.justify = 'center';
        component.fixed = true;
        component.w = 20;
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(0);
        expect(component._Title.mountX).toEqual(0);
      });

      it('should find the middle when icon is defined and fixed width is greater than content width', () => {
        component.justify = 'center';
        component.fixed = true;
        component.w = 500;
        component.icon = lightningIcon;
        component.logo = null;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(
          (component.w -
            (component._paddingLeft + component._Prefix.w) -
            component._paddingRight) /
            2
        );
        expect(component._Title.mountX).toEqual(0.5);
      });

      it('should find the middle when logo is defined and fixed width is greater than content width', () => {
        component.justify = 'center';
        component.fixed = true;
        component.w = 500;
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(
          (component.w -
            (component._paddingLeft + component._Prefix.w) -
            component._paddingRight) /
            2
        );
        expect(component._Title.mountX).toEqual(0.5);
      });

      it('should have a different calculation when fixed is false', () => {
        component.justify = 'center';
        component.fixed = false;
        component.w = 500;
        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(component._Title.x).toEqual(
          (component.w -
            (component._paddingLeft +
              component._Prefix.w +
              component.style.titlePadding) -
            component._paddingRight) /
            2
        );
        expect(component._Title.mountX).toEqual(0.5);
      });
    });

    it('should run through Button getContentX if Control width is greater than content width', () => {
      component.title = null;
      component.logo = xfinityLogo;
      component.w = 200;
      component.fixed = true;
      testRenderer.forceAllUpdates();

      expect(component._Content.x).toBe(component.w / 2);
      expect(component._Content.mountX).toBe(0.5);
    });
  });

  describe('announcer', () => {
    it('sets the announce string to the title', () => {
      const title = 'title';
      component.title = title;
      testRenderer.forceAllUpdates();
      expect(component.announce).toEqual([title, 'Control']);
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';
      component.announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(component.announce).toEqual(overrideString);
    });
  });
});
