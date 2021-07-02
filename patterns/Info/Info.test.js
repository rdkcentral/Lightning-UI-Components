import TestUtils from '../../test/lightning-test-utils';
import Info from '.';

const createInfo = TestUtils.makeCreateComponent(Info);

const title = 'Series Title';
const subtitle = 'Season 5 - Info 2';
const description =
  'This is a description of episode 2 from Season 5 of Series Title';

describe('Info', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createInfo({
      title,
      subtitle,
      description
    });
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('set title', () => {
    expect(component._Title.text.text).toBe('Series Title');
  });

  it('set subtitle', () => {
    expect(component._Subtitle.text.text).toBe('Season 5 - Info 2');
  });

  it('set description', () => {
    expect(component._Description.text.text).toBe(
      'This is a description of episode 2 from Season 5 of Series Title'
    );
  });

  it('update title', () => {
    component.title = 'Update the title';
    expect(component._Title.text.text).toBe('Update the title');
  });

  it('update subtitle', () => {
    component.subtitle = 'Update the subtitle';
    expect(component._Subtitle.text.text).toBe('Update the subtitle');
  });

  it('update description', () => {
    component.description = 'Update the description';
    expect(component._Description.text.text).toBe('Update the description');
  });

  it('get announce text', () => {
    expect(component.announce).toBe(
      'Series Title,Season 5 - Info 2,This is a description of episode 2 from Season 5 of Series Title'
    );
  });

  it('update height', () => {
    component._focus();
    component._update();
    expect(component.h).toBe(
      component._DataItem.h *
        component.styles.getFocusScale(
          component._DataItem.w,
          component._DataItem.h
        ) +
        component._DataItem.y
    );
    component._unfocus();
    component._update();
    expect(component.h).toBe(component._DataItem.h + component._DataItem.y);
  });
});
