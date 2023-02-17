import Control from './Control.js';
import Icon from '../Icon/index.js';
import { makeCreateComponent, pathToDataURI } from '@lightning/ui-test-utils';

const lightningIcon = pathToDataURI(
  'src/assets/images/ic_lightning_white_32.png'
);
const xfinityLogo = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-Square.png'
);

const createControl = makeCreateComponent(Control);

describe('Control', () => {
  let control, testRenderer;

  beforeEach(() => {
    [control, testRenderer] = createControl(
      { title: 'Control', shouldCollapse: false },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    control = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  function checkPrefixTag() {
    expect(control._Prefix).toBeUndefined();

    control._prefix = { type: Icon };
    testRenderer.forceAllUpdates();
    expect(control._Prefix).toBeDefined();
  }

  describe('title visibility', () => {
    describe('shouldCollapse is false', () => {
      it('should be visible if in focused mode', () => {
        control.mode = 'focused';
        expect(control._Title.visible).toEqual(true);
      });

      it('should be visible if in unfocused mode', () => {
        control.mode = 'unfocused';
        expect(control._Title.visible).toEqual(true);
      });

      it('should be visible if in disabled mode', () => {
        control.mode = 'disabled';
        expect(control._Title.visible).toEqual(true);
      });
    });

    describe('shouldCollapse is true', () => {
      it('should be visible if in focused mode', () => {
        control.shouldCollapse = true;
        control.mode = 'focused';
        expect(control._Title.visible).toEqual(true);
      });

      it('should NOT be visible if in unfocused mode', () => {
        control.shouldCollapse = true;
        control.mode = 'unfocused';
        testRenderer.forceAllUpdates();
        expect(control._Title.visible).toEqual(false);
      });

      it('should NOT be visible if in disabled mode', () => {
        control.shouldCollapse = true;
        control.mode = 'disabled';
        testRenderer.forceAllUpdates();
        expect(control._Title.visible).toEqual(false);
      });
    });

    it('should be undefined if there is no title element at all', () => {
      control.title = undefined;
      testRenderer.forceAllUpdates();
      expect(control._Title).toBeUndefined();
    });
  });

  describe('logo', () => {
    describe('provided', () => {
      it('prefix should display logo', () => {
        checkPrefixTag();

        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();
        expect(control._prefix.icon).toEqual(xfinityLogo);
      });
    });

    describe('not provided', () => {
      it('prefix should display icon if no logo is set', () => {
        control.icon = lightningIcon;
        control.logo = null;
        expect(control._prefix.icon).toEqual(lightningIcon);
      });

      it('prefix should be null if no logo or icon is set', () => {
        control.logo = null;
        control.icon = null;
        expect(control._prefix).toBeNull();
      });
    });
  });

  describe('icon', () => {
    describe('provided', () => {
      it('prefix should display icon', () => {
        checkPrefixTag();

        control.icon = lightningIcon;
        testRenderer.forceAllUpdates();
        expect(control._prefix.icon).toEqual(lightningIcon);
      });

      it('prefix should display logo if both icon and logo are set', () => {
        checkPrefixTag();

        control.logo = xfinityLogo;
        control.icon = lightningIcon;
        expect(control._prefix.icon).toEqual(xfinityLogo);
      });
    });

    describe('not provided', () => {
      it('prefix should be null if no icon or logo is set', () => {
        checkPrefixTag();

        control.logo = null;
        control.icon = null;
        testRenderer.forceAllUpdates();
        expect(control._prefix).toBeNull();
      });
    });
  });

  describe('_setPrefix', () => {
    it('should do nothing if a prefix property is passed into Control', () => {
      control.prefix = { type: Icon };
      testRenderer.forceAllUpdates();

      expect(control.prefix).toBeUndefined();
    });
  });

  describe('_setSuffix', () => {
    it('should do nothing if a suffix property is passed into Control', () => {
      control.suffix = { type: Icon };
      testRenderer.forceAllUpdates();

      expect(control.suffix).toBeUndefined();
    });
  });

  describe('_paddingLeft', () => {
    it('should have less padding if a logo is set', () => {
      checkPrefixTag();
      control.logo = xfinityLogo;
      expect(control._paddingLeft).toEqual(control.style.paddingXNoTitle);
    });

    it('should have more padding if no logo is set', () => {
      checkPrefixTag();
      control.logo = null;
      expect(control._paddingLeft).toEqual(control.style.paddingX);
    });
  });

  describe('_paddingRight', () => {
    it('should have more padding if there is a title and a logo', () => {
      control.logo = xfinityLogo;
      expect(control._paddingRight).toEqual(control.style.paddingX);
    });

    it('should have less padding if there is just a logo and no title', () => {
      control.logo = xfinityLogo;
      control.title = null;
      expect(control._paddingRight).toEqual(control.style.paddingXNoTitle);
    });
  });

  describe('_updateContentPosition', () => {
    describe('justify LEFT', () => {
      it('Title x should be 0 if just icon displayed', () => {
        control.justify = 'left';
        control.icon = lightningIcon;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(0);
        expect(control._Title.mountX).toEqual(0);
      });

      it('Title x should be 0 if logo is displayed', () => {
        control.justify = 'left';
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(0);
        expect(control._Title.mountX).toEqual(0);
      });

      it('Title x should be 0 if both logo and icon are defined', () => {
        control.justify = 'left';
        control.icon = lightningIcon;
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(0);
        expect(control._Title.mountX).toEqual(0);
      });
    });

    describe('justify RIGHT', () => {
      it('should set Title x and mountX to 0 if the fixed component width is less than content width', () => {
        control.w = 20;
        control.fixed = true;
        control.justify = 'right';
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(0);
        expect(control._Title.mountX).toEqual(0);
      });

      it('should patch the title position to the right if the fixed width is much greater than the content width', () => {
        control.w = 500;
        control.fixed = true;
        control.justify = 'right';
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(
          control.w -
            (control._paddingLeft +
              control._paddingRight +
              control._Prefix.w +
              control.style.titlePadding)
        );
        expect(control._Title.mountX).toEqual(1);
      });
    });

    describe('justify CENTER', () => {
      it('should set Title x and mountX to 0 if fixed and the component width is less than content width', () => {
        control.justify = 'center';
        control.fixed = true;
        control.w = 20;
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(0);
        expect(control._Title.mountX).toEqual(0);
      });

      it('should find the middle when icon is defined and fixed width is greater than content width', () => {
        control.justify = 'center';
        control.fixed = true;
        control.w = 500;
        control.icon = lightningIcon;
        control.logo = null;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(
          (control.w -
            (control._paddingLeft + control._Prefix.w) -
            control._paddingRight) /
            2
        );
        expect(control._Title.mountX).toEqual(0.5);
      });

      it('should find the middle when logo is defined and fixed width is greater than content width', () => {
        control.justify = 'center';
        control.fixed = true;
        control.w = 500;
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(
          (control.w -
            (control._paddingLeft + control._Prefix.w) -
            control._paddingRight) /
            2
        );
        expect(control._Title.mountX).toEqual(0.5);
      });

      it('should have a different calculation when fixed is false', () => {
        control.justify = 'center';
        control.fixed = false;
        control.w = 500;
        control.logo = xfinityLogo;
        testRenderer.forceAllUpdates();

        expect(control._Title.x).toEqual(
          (control.w -
            (control._paddingLeft +
              control._Prefix.w +
              control.style.titlePadding) -
            control._paddingRight) /
            2
        );
        expect(control._Title.mountX).toEqual(0.5);
      });
    });

    it('should run through Button getContentX if Control width is greater than content width', () => {
      control.title = null;
      control.logo = xfinityLogo;
      control.w = 200;
      control.fixed = true;
      testRenderer.forceAllUpdates();

      expect(control._Content.x).toBe(control.w / 2);
      expect(control._Content.mountX).toBe(0.5);
    });
  });

  describe('announcer', () => {
    it('sets the announce string to the title', () => {
      const title = 'title';
      control.title = title;
      testRenderer.forceAllUpdates();
      expect(control.announce).toEqual([title, 'Control']);
    });

    it('should prefer the announce prop over the default announce', () => {
      const overrideString = 'override announcer string';
      control.announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(control.announce).toEqual(overrideString);
    });
  });
});
