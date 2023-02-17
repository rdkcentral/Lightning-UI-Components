import { makeCreateComponent, pathToDataURI } from '@lightning/ui-test-utils';
import Badge from './index.js';
import { getHexColor } from '../../utils/index.js';

const createBadge = makeCreateComponent(Badge);

const circleIcon = pathToDataURI('src/assets/images/circle.svg');
const xfinityLogo = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-Square.png'
);

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

  it('sets the announce string to the badge text', () => {
    const title = 'HD';
    badge.title = title;
    testRenderer.forceAllUpdates();
    expect(badge.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    badge.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(badge.announce).toBe(overrideString);
  });

  it('renders icon and text side by side', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createBadge({
      title: 'HD',
      icon: circleIcon
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders icon only', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createBadge({
      icon: circleIcon
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update the title', async () => {
    const title = 'HD';
    [badge, testRenderer] = createBadge(
      { title },
      { spyOnMethods: ['_update', '_updateBackground'] }
    );
    setTimeout(() => {
      badge._badgeTextLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    testRenderer.forceAllUpdates();
    expect(badge.title).toBe(title);
    expect(badge.w).toBe(
      badge._Text.renderWidth +
        badge.style.paddingX * 2 +
        (badge._Icon.finalW || 0)
    );

    const title2 = 'longer title';
    badge.title = title2;
    testRenderer.forceAllUpdates();
    setTimeout(() => {
      badge._badgeTextLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    expect(badge.title).toBe(title2);
    expect(badge.w).toBe(
      badge._Text.renderWidth +
        badge.style.paddingX * 2 +
        (badge._Icon.finalW || 0)
    );
    expect(badge.h).toBe(
      Math.max(badge._Text.renderHeight, badge._Icon.h) +
        badge.style.paddingY * 2
    );
  });

  it('should update the background', () => {
    const color = getHexColor('ffffff', 0.25);
    [badge] = createBadge({ background: { color }, icon: undefined });
    expect(badge.background.color).toBe(color);
  });

  it('should update the text style', async () => {
    const color = getHexColor('ffffff', 0.25);
    const title = 'HD';
    const icon = xfinityLogo;
    const textProperties = { color, textAlign: 'left' };

    [badge, testRenderer] = createBadge(
      {
        title,
        icon,
        h: 30,
        iconAlign: 'right',
        iconWidth: 50,
        iconHeight: 50
      },
      { spyOnMethods: ['_updateBackground'] }
    );
    badge.style = { paddingX: 0 };
    testRenderer.forceAllUpdates();
    setTimeout(() => {
      badge._badgeTextLoaded();
      badge._iconLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    badge._Text.text = textProperties;
    expect(badge._Text.x).toBe(0);
    expect(badge._Text.y).toBe(badge.h / 2 + 2);
    // This should work once bug in TextBox is fixed to patch textStyle
    expect(badge._Text.text.textAlign).toBe(textProperties.textAlign);
    expect(badge._Text.text.color).toBe(color);
  });

  it('should update the icon', () => {
    const icon = xfinityLogo;
    [badge, testRenderer] = createBadge({ icon });
    expect(badge.icon).toBe(icon);
    const icon2 = circleIcon;
    badge.icon = icon2;
    expect(badge.icon).toBe(icon2);
    expect(badge._Icon.color).toBe(badge._Text.color);
  });

  it('should position the text and icon based on the iconAlign property (right)', async () => {
    const title = 'HD';
    const icon = xfinityLogo;
    [badge, testRenderer] = createBadge(
      {
        title,
        icon,
        iconAlign: 'right',
        iconWidth: 50,
        iconHeight: 50
      },
      {
        spyOnMethods: ['_updateBackground', '_updateIcon']
      }
    );
    setTimeout(() => {
      badge._badgeTextLoaded();
      badge._iconLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;

    expect(badge._Text.x).toEqual(badge.style.paddingX);
    expect(badge._Icon.x).toEqual(
      badge._Text.x + badge._Text.renderWidth + badge.style.contentSpacing
    );
  });

  it('should position the text and icon based on the iconAlign property (left)', async () => {
    const title = 'HD';
    const icon = xfinityLogo;
    [badge, testRenderer] = createBadge(
      {
        title,
        icon,
        iconAlign: 'left',
        iconWidth: 50,
        iconHeight: 50
      },
      {
        spyOnMethods: ['_updateBackground', '_updateIcon']
      }
    );
    setTimeout(() => {
      badge._badgeTextLoaded();
      badge._iconLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    expect(badge._Text.x).toEqual(
      badge._Icon.x + badge._Icon.finalW + badge.style.contentSpacing
    );
    expect(badge._Icon.x).toEqual(badge.style.paddingX);
  });
});
