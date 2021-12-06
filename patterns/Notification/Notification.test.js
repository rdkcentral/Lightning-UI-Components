import TestUtils from '../../test/lightning-test-utils';
import Notification from '.';

const createNotification = TestUtils.makeCreateComponent(Notification);

describe('Notification', () => {
  let notification, testRenderer;

  beforeEach(() => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src'
    });
  });
  afterEach(() => {
    notification = null;
    testRenderer = null;
    jest.clearAllMocks();
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets an icon', () => {
    expect(notification._icon).toEqual('patch/to/src');
  });

  it('will not show the action area if it is undefined', () => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src'
    });
    expect(notification._ActionArea.alpha).toBe(0.001);
  });

  it('will show the action area if one is passed in', async () => {
    [notification, testRenderer] = createNotification({
      actionArea: {
        text: 'Action Area'
      }
    });
    expect(notification._actionArea).toEqual({
      text: 'Action Area'
    });
    expect(notification._ActionArea.alpha).toBe(0.001);

    await notification.enter();

    testRenderer.update();

    expect(notification._ActionArea.alpha).toBe(1);
  });

  it('should not show the action area if the one passed in does not have text', async () => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src',
      actionArea: {}
    });

    await notification.enter();

    expect(notification._ActionArea.alpha).toEqual(0.001);
  });

  it('should be able to mount entered', async () => {
    [notification, testRenderer] = createNotification(
      { entered: true },
      { spyOnMethods: ['enter'] }
    );

    await notification._enterSpyPromise;
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    expect(notification._Container.alpha).toEqual(
      notification.styles.enter.container.alpha
    );
    expect(notification._Container.scale).toEqual(
      notification.styles.enter.container.scale
    );
    expect(notification._Icon.alpha).toEqual(
      notification.styles.enter.icon.alpha
    );
    expect(notification._Icon.scale).toEqual(
      notification.styles.enter.icon.scale
    );
    expect(notification._Text.alpha).toEqual(
      notification.styles.enter.text.alpha
    );
  });

  it('should call enter() and complete transitions', async () => {
    await notification.enter();

    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    expect(notification._Container.alpha).toEqual(
      notification.styles.enter.container.alpha
    );
    expect(notification._Container.scale).toEqual(
      notification.styles.enter.container.scale
    );
    expect(notification._Icon.alpha).toEqual(
      notification.styles.enter.icon.alpha
    );
    expect(notification._Icon.scale).toEqual(
      notification.styles.enter.icon.scale
    );
    expect(notification._Text.alpha).toEqual(
      notification.styles.enter.text.alpha
    );
  });

  it('should call dismiss() and complete transitions', async () => {
    await notification.dismiss();

    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    expect(notification._Container.alpha).toEqual(
      notification.styles.dismiss.container.alpha
    );
    expect(notification._Container.scale).toEqual(
      notification.styles.dismiss.container.scale
    );
    expect(notification._Icon.alpha).toEqual(
      notification.styles.dismiss.icon.alpha
    );
    expect(notification._Text.alpha).toEqual(
      notification.styles.dismiss.text.alpha
    );
  });
});
