import TestUtils from '../../test/lightning-test-utils';
import Badge from '.';
import { getHexColor } from '../../Styles';

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
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createBadge({
      title: 'HD',
      icon: lightningPath
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders icon only', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createBadge({
      icon: lightningPath
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update the title', async () => {
    const title = 'HD';
    [badge, testRenderer] = createBadge(
      { title },
      { spyOnMethods: ['_update'] }
    );
    await badge.__updateSpyPromise;
    expect(badge.title).toBe(title);
    testRenderer.forceAllUpdates();
    expect(badge.w).toBe(16 + title.length);

    const title2 = 'longer title';
    badge.title = title2;
    await badge.__updateSpyPromise;
    expect(badge.title).toBe(title2);
    expect(badge.w).toBe(16 + title.length);
    expect(badge.h).toBe(
      badge._BadgeText.renderHeight + 2 * badge._componentStyles.paddingY
    );
    badge.title = undefined;
    expect(badge.w).toBe(
      badge._BadgeText.renderWidth + 2 * badge._componentStyles.paddingX
    );
  });

  it('should update the background', () => {
    const color = getHexColor('ffffff', 25);
    [badge] = createBadge({ background: { color }, icon: undefined });
    expect(badge.background.color).toBe(color);
  });

  it('should update the text style', () => {
    const color = getHexColor('ffffff', 25);
    const title = 'HD';
    const icon = circlePath;
    const textProperties = { color, textAlign: 'left' };

    [badge, testRenderer] = createBadge({
      title,
      icon,
      h: 30,
      iconAlign: 'right',
      iconWidth: 50,
      iconHeight: 50
    });
    badge._componentStyles.paddingX = 0;
    testRenderer.forceAllUpdates();
    badge._BadgeText.text = textProperties;
    expect(badge._BadgeText.x).toBe(0);
    expect(badge._BadgeText.y).toBe(badge.h / 2);
    expect(badge._BadgeText.text.textAlign).toBe(textProperties.textAlign);
    expect(badge._BadgeText.text.color).toBe(color);
  });

  it('should update the icon', () => {
    const icon = circlePath;
    [badge, testRenderer] = createBadge({ icon });
    expect(badge.icon).toBe(icon);
    const icon2 = lightningPath;
    badge.icon = icon2;
    expect(badge.icon).toBe(icon2);
    expect(badge._Icon.color).toBe(badge._BadgeText.color);
  });

  it('should render the text and icon', () => {
    const title = 'HD';
    const icon = circlePath;

    [badge, testRenderer] = createBadge({ title, icon, iconWidth: 50 });

    expect(badge._BadgeText.text.text).toBe(title);
    expect(badge._Icon.icon).toBe(icon);
    testRenderer.forceAllUpdates();
    expect(badge.w).toBe(
      badge._Icon.w +
        badge._BadgeText.renderWidth +
        badge._componentStyles.paddingX * 2 +
        badge._componentStyles.contentSpacing
    );
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
    testRenderer.forceAllUpdates();
    expect(badge._Icon.x).toEqual(
      badge._BadgeText.x +
        badge._BadgeText.renderWidth +
        badge._componentStyles.contentSpacing
    );
  });

  it('should position the text and icon based on the iconAlign property', () => {
    const title = 'HD';
    const icon = circlePath;

    [badge, testRenderer] = createBadge({
      title,
      icon,
      iconAlign: 'left',
      iconWidth: 50,
      iconHeight: 50
    });
    testRenderer.forceAllUpdates();
    expect(badge._Icon.x).toEqual(8);
  });
});
