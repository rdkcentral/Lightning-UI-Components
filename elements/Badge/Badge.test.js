import TestUtils from '../../test/lightning-test-utils';
import Badge from '.';
import { getHexColor } from '../../utils';

const createBadge = TestUtils.makeCreateComponent(Badge);

const circleIcon = TestUtils.pathToDataURI('assets/images/circle.svg');
const xfinityLogo = TestUtils.pathToDataURI(
  'assets/images/Xfinity-Provider-Logo-Square.png'
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

  it('should update the title', async done => {
    const title = 'HD';
    [badge, testRenderer] = createBadge(
      { title },
      { spyOnMethods: ['_update', '_updateBackground'] }
    );
    setTimeout(() => {
      badge._badgeTextLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    expect(badge.title).toBe(title);
    expect(badge.w).toBe(18);
    const title2 = 'longer title';
    badge.title = title2;
    setTimeout(() => {
      badge._badgeTextLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    expect(badge.title).toBe(title2);
    expect(badge.w).toBe(28);
    expect(badge.h).toBe(32);
    done();
  });

  it('should update the background', () => {
    const color = getHexColor('ffffff', 0.25);
    [badge] = createBadge({ background: { color }, icon: undefined });
    expect(badge.background.color).toBe(color);
  });

  it('should update the text style', async done => {
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
    badge.style.paddingX = 0;
    setTimeout(() => {
      badge._badgeTextLoaded();
      badge._iconLoaded();
    }, 500);
    await badge.__updateBackgroundSpyPromise;
    badge._BadgeText.text = textProperties;
    expect(badge._BadgeText.x).toBe(0);
    expect(badge._BadgeText.y).toBe(badge.h / 2);
    // This should work once bug in TextBox is fixed to patch textStyle
    // expect(badge._BadgeText._Text.text.textAlign).toBe(
    //   textProperties.textAlign
    // );
    //expect(badge._BadgeText._Text.text.color).toBe(color);
    done();
  });

  it('should update the icon', () => {
    const icon = xfinityLogo;
    [badge, testRenderer] = createBadge({ icon });
    expect(badge.icon).toBe(icon);
    const icon2 = circleIcon;
    badge.icon = icon2;
    expect(badge.icon).toBe(icon2);
    expect(badge._Icon.color).toBe(badge._BadgeText.color);
  });

  it('should position the text and icon based on the iconAlign property', async done => {
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

    expect(badge._BadgeText.x).toEqual(badge.style.paddingX);
    expect(badge._Icon.x).toEqual(
      badge._BadgeText.x +
        badge._BadgeText.renderWidth +
        badge.style.contentSpacing
    );
    done();
  });

  it('should position the text and icon based on the iconAlign property', async done => {
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
    expect(badge._Icon.x).toEqual(8);
    done();
  });
});
