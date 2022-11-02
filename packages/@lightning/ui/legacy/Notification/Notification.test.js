import TestUtils from '@lightning/ui-core/test';
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

  it('should center a title in the notification when there is no description', () => {
    const title = 'title';
    [notification] = createNotification({ title });
    expect(notification._Title.content).toEqual(title);
    expect(notification._Content.flex).toMatchObject({
      direction: 'row',
      alignItems: 'center'
    });
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

    expect(notification._ActionArea.alpha).toBe(1);
  });

  it('should display a notification without a title or description', () => {
    [notification, testRenderer] = createNotification({ icon: 'patch/to/src' });
    expect(notification._Title.content).toBeUndefined();
    expect(notification._Description.content).toBeUndefined();
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
  it('should call dismiss() and complete transitions', async () => {
    await notification.dismiss();

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

  describe('when a notification is displayed', () => {
    beforeEach(async () => {
      jest.spyOn(notification, 'signal');
      jest.spyOn(notification, 'fireAncestors');
      expect(notification.signal).not.toHaveBeenCalled();
      expect(notification.fireAncestors).not.toHaveBeenCalled();

      await notification.enter();
      expect(notification.signal).toHaveBeenCalledWith('notificationEntered');
      expect(notification.fireAncestors).toHaveBeenCalledWith(
        '$notificationEntered'
      );
      jest.clearAllMocks();
    });

    it('should call enter() and complete transitions', async () => {
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

    it('should dismiss an open notification', async () => {
      expect(notification.signal).not.toHaveBeenCalled();
      expect(notification.fireAncestors).not.toHaveBeenCalled();

      await notification.dismiss();
      expect(notification.signal).toHaveBeenCalledWith('notificationDismissed');
      expect(notification.fireAncestors).toHaveBeenCalledWith(
        '$notificationDismissed'
      );
    });

    it('should not emit multiple signals if enter is invoked after the notifcation is already open', async () => {
      expect(notification.signal).not.toHaveBeenCalled();
      expect(notification.fireAncestors).not.toHaveBeenCalled();

      await notification.enter();
      expect(notification.signal).not.toHaveBeenCalled();
      expect(notification.fireAncestors).not.toHaveBeenCalled();
    });
  });
});
