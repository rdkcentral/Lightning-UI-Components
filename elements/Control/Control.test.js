import Control from './Control';
import Icon from '../Icon';
import TestUtils from '../../test/lightning-test-utils';

const lightningIcon = TestUtils.pathToDataURI(
  'assets/images/ic_lightning_white_32.png'
);
const xfinityLogo = TestUtils.pathToDataURI(
  'assets/images/Xfinity-Provider-Logo-Square.png'
);

const createControl = TestUtils.makeCreateComponent(Control);

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
      it('justify should be left and prefix should display logo', () => {
        checkPrefixTag();

        component.logo = xfinityLogo;
        testRenderer.forceAllUpdates();
        expect(component.justify).toEqual('left');
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
      it('justify should be center and prefix should display icon', () => {
        checkPrefixTag();

        component.icon = lightningIcon;
        testRenderer.forceAllUpdates();
        expect(component.justify).toEqual('center');
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

  it('If no prefix (logo or icon) is provided, justify should be center', () => {
    expect(component._Prefix).toBeUndefined();
    expect(component.justify).toEqual('center');
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
});
