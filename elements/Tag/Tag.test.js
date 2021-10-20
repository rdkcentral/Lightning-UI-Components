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

  it('changes background color', async () => {
    const backgroundColor = '#f6a50a';
    expect(tag.backgroundColor).toBe(undefined);

    tag.backgroundColor = backgroundColor;
    await TestUtils.nextTick();

    expect(tag.backgroundColor).toBe(getValidColor(backgroundColor));
  });

  it('changes title text and color', async () => {
    expect(tag.title).toBe(undefined);
    expect(tag.titleColor).toBe(undefined);

    tag.title = 'Tag';
    tag.titleColor = '#ffffff';
    await TestUtils.nextTick();

    expect(tag._Text.text.text).toBe('Tag');
    expect(tag._Text.text.textColor).toBe(getValidColor('#ffffff'));
  });

  it('changes title text and updates total width to match', done => {
    expect(tag.w).toBe(60);

    tag.title = 'Really really really really really long title';

    tag._Text.on('txLoaded', async () => {
      await TestUtils.nextTick();
      testRenderer.update();
      expect(tag.w).not.toEqual(60);
      expect(tag._Text.renderWidth + 32).toBeGreaterThan(60);
      expect(tag.w).toEqual(tag._Text.renderWidth + 32);
      done();
    });
  });

  it('changes background color gradient', () => {
    const gradientColor = '#000000';
    [tag, testRenderer] = createComponent({ gradientColor });
    testRenderer.update();
    expect(tag._Background.colorRight).toEqual(getValidColor(gradientColor));
  });
});
