import TestUtils from '../../test/lightning-test-utils';
import { getValidColor } from '../../Styles';
import Tag from '.';

const createComponent = TestUtils.makeCreateComponent(Tag);

describe('Tag', () => {
  let tag, testRenderer;

  beforeEach(() => {
    [tag, testRenderer] = createComponent();
  });
  afterEach(() => {
    tag = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('changes background color', () => {
    expect(tag.backgroundColor).toBe(undefined);
    tag.backgroundColor = '#f6a50a';
    setTimeout(() => {
      expect(tag.backgroundColor).toBe('#f6a50a');
    }, 0);
  });

  it('changes title text and color', () => {
    expect(tag.title).toBe(undefined);
    expect(tag.titleColor).toBe(undefined);
    tag.title = 'Tag';
    tag.titleColor = '#ffffff';
    setTimeout(() => {
      expect(tag._Text.text).toBe('Tag');
      expect(tag._Text.color).toBe('#ffffff');
    });
  });

  it('changes title text and updates total width to match', () => {
    expect(tag.w).toBe(60);
    tag.title = 'Tag';
    setTimeout(() => {
      expect(tag.w).toBe(68);
    });
  });

  it('changes background color gradient', () => {
    const gradientColor = '#000000';
    [tag, testRenderer] = createComponent({ gradientColor });
    testRenderer.update();
    expect(tag._Background.colorRight).toEqual(getValidColor(gradientColor));
  });
});
