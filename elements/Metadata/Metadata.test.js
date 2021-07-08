import TestUtils from '../../test/lightning-test-utils';
import Metadata from '.';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';

const createComponent = TestUtils.makeCreateComponent(Metadata);

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

  it('updates the Title', () => {
    const title = 'title text';
    expect(component.title).toBe(undefined);
    component.title = title;
    expect(component.title).toBe(title);
  });

  it('updates the Description', () => {
    const description = 'description text';
    expect(component.description).toBe(undefined);
    component.description = description;
    expect(component.description).toBe(description);
  });

  it('updates the Data', () => {
    const dataText = 'data text';
    expect(component.data).toBe(undefined);
    component.data = dataText;
    expect(component.data).toBe(dataText);
  });

  it('updates the Logo', () => {
    expect(component.logo).toBe(undefined);
    component.logo = lightningbolt;
    expect(component.logo).toBe(lightningbolt);
  });

  it('hides Data if there is an Action, and converts the Action text to uppercase', async done => {
    const actionText = 'action text';
    const dataText = 'data text';

    component.data = dataText;
    component.action = actionText;
    testRenderer.update();

    setTimeout(() => {
      expect(component._Data.content).toBe(undefined);
      expect(component._Action.title).toBe(actionText.toUpperCase());
      done();
    }, 0);
  });
});
