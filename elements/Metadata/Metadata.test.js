import TestUtils from '../../test/lightning-test-utils';
import Metadata from '.';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';

const createComponent = TestUtils.makeCreateComponent(Metadata, {
  w: 400,
  h: 300
});

describe('Metadata', () => {
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

  it('updates the firstLine', () => {
    const firstLine = 'title text';
    expect(component.firstLine).toBe(undefined);
    component.firstLine = firstLine;
    expect(component.firstLine).toBe(firstLine);
  });

  it('updates the secondLine', () => {
    const secondLine = 'secondLine text';
    expect(component.secondLine).toBe(undefined);
    component.secondLine = secondLine;
    expect(component.secondLine).toBe(secondLine);
  });

  it('updates the thirdLine', () => {
    const thirdLine = 'thirdLine text';
    expect(component.thirdLine).toBe(undefined);
    component.thirdLine = thirdLine;
    expect(component.thirdLine).toBe(thirdLine);
  });

  it('updates the Logo and its position', () => {
    expect(component.logo).toBe(undefined);
    component.logo = lightningbolt;
    expect(component.logo).toBe(lightningbolt);

    const secondLine = 'secondLine text';
    component.secondLine = secondLine;
    testRenderer.update();
    setTimeout(() => {
      const logoX = component.w - component.logoWidth;
      expect(component._Logo.x).toBe(logoX);
      component.logoPosition = 'left';
      testRenderer.update();
      expect(component._Logo.x).toBe(0);
      const secondLineX =
        component.logoWidth + component._componentStyles.logoPadding;
      expect(component._SecondLine.x).toBe(secondLineX);
    }, 1);
  });
});
