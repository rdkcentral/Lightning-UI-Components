import TestUtils from '../lightning-test-utils';
import Badge from '.';
import { getHexColor } from '../Styles';

const createBadge = TestUtils.makeCreateComponent(Badge);

describe('Badge', () => {
  let badge, testRenderer;
  const lightningPath = 'assets/images/ic_lightning_white_32.png';
  const circlePath = 'assets/images/circle.svg';

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

  it('renders icon and text side by side', () => {
    const [_, testRenderer] = createBadge({
      title: 'HD',
      icon: lightningPath
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders icon only', () => {
    const [_, testRenderer] = createBadge({
      icon: lightningPath
    });
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

  it('should update the icon', () => {
    const icon = circlePath;
    [badge, testRenderer] = createBadge({ icon });
    expect(badge.icon).toBe(icon);

    const icon2 = lightningPath;
    badge.icon = icon2;
    expect(badge.icon).toBe(icon2);
  });

  it('should render the text and icon', () => {
    const title = 'HD';
    const icon = circlePath;

    [badge, testRenderer] = createBadge({ title, icon });

    expect(badge._BadgeText.text.text).toBe(title);
    expect(badge._Icon.icon).toBe(icon);
  });

  it('should position the text and icon based on the iconAlign property', () => {
    const title = 'HD';
    const icon = circlePath;

    [badge, testRenderer] = createBadge({
      title,
      icon,
      iconAlign: 'right',
      iconWidth: 50,
      iconHeight: 50
    });

    testRenderer.update();
    badge._BadgeText.loadTexture();
    badge._Icon.loadTexture();

    expect(badge._Icon.x).toEqual(
      badge._BadgeText.x + badge._BadgeText.renderWidth
    );
  });
});
