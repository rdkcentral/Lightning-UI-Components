import TestUtils from '../lightning-test-utils';
import Badge from '.';
import { getHexColor } from '../Styles';

const createBadge = TestUtils.makeCreateComponent(Badge);

describe('Badge', () => {
  let badge, testRenderer;

  beforeEach(() => {
    [badge, testRenderer] = createBadge();
  });
  afterEach(() => {
    badge = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update the title', () => {
    const title = 'HD';
    [badge, testRenderer] = createBadge({ title });
    expect(badge.title).toBe(title);
    testRenderer.update();
    badge._BadgeText.loadTexture();
    expect(badge.w).toBe(16 + title.length);

    const title2 = 'longer title';
    badge.title = title2;
    badge.background.h = undefined;
    expect(badge.title).toBe(title2);
    testRenderer.update();
    badge._BadgeText.loadTexture();
    expect(badge.w).toBe(16 + title2.length);
    expect(badge.h).toBe(50);
  });

  it('should update the background', () => {
    const color = getHexColor('ffffff', 25);
    [badge] = createBadge({ background: { color } });
    expect(badge.background.color).toBe(color);
  });

  it('should update the text style', () => {
    const color = getHexColor('ffffff', 25);
    const textPosition = { x: 0, y: 0 };
    const textProperties = { color, textAlign: 'left' };
    [badge] = createBadge({ textPosition, textProperties });
    expect(badge.textPosition).toBe(textPosition);
    expect(badge.textProperties).toBe(textProperties);
    expect(badge.textProperties.color).toBe(color);
  });

  it('should update padding', () => {
    expect(badge.padding).toBe(8);
    badge.padding = 50;
    expect(badge.padding).toBe(50);
  });
});
