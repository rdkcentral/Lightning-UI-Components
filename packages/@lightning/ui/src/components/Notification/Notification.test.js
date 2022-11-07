import TestUtils from '@lightning/ui-core/test';
import defaultIcon from '../../assets/images/notification_64.png';
import { jest } from '@jest/globals';
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
    jest.clearAllMocks();
  });

  it('renders an inactive Notification', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders an active Notification', async () => {
    [notification, testRenderer] = createNotification(
      {
        title: 'Title',
        description: 'Description',
        actionArea: 'action area',
        entered: true
      },
      { spyOnMethods: ['enter'] }
    );

    await notification._enterSpyPromise;
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets an icon', () => {
    expect(notification._Icon.icon).toEqual('patch/to/src');
  });

  it('should set a logo', () => {
    const logoPath = 'path/to/logo';
    notification.logo = logoPath;
    testRenderer.forceAllUpdates();

    expect(notification._Icon.icon).toBe(logoPath);
    expect(notification._Icon.style.color).toBeUndefined();
  });

  it('should use the default icon when not icon or logo is set', () => {
    notification.icon = undefined;
    testRenderer.forceAllUpdates();

    expect(notification._Icon.icon).toBe(defaultIcon);
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
      actionArea: 'Action Area'
    });
    expect(notification._ActionArea.alpha).toBe(0.001);

    await notification.enter();

    expect(notification._ActionArea.alpha).toBe(1);
    expect(notification._ActionAreaText.content).toBe('Action Area');
  });

  it('should display a notification without a title or description', () => {
    [notification, testRenderer] = createNotification({ icon: 'patch/to/src' });
    expect(notification._Title.content).toBeUndefined();
    expect(notification._Description.content).toBeUndefined();
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
      notification.style.enterAlpha
    );
    expect(notification._Container.scale).toEqual(
      notification.style.enterScale
    );
    expect(notification._Icon.alpha).toEqual(notification.style.enterAlpha);
    expect(notification._Icon.scale).toEqual(notification.style.enterScale);
    expect(notification._Text.alpha).toEqual(notification.style.enterAlpha);
  });

  it('should center content text if description or title is removed after the Notification is activated', async () => {
    [notification, testRenderer] = createNotification(
      {
        entered: true,
        title: 'Title',
        description: 'description',
        actionArea: 'Action Area'
      },
      { spyOnMethods: ['enter', '_update', '_updateLayout'] }
    );

    await notification.__updateSpyPromise;
    await notification._enterSpyPromise;
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    notification.description = '';
    await notification.__updateSpyPromise;

    // assert changes from _updateLayout happened
    await notification._updateLayoutSpyPromise;
    expect(notification._Content.flex.alignItems).toBe('center');

    notification.title = '';
    notification.description = 'description';
    await notification.__updateSpyPromise;

    // assert changes from _updateLayout happened
    await notification._updateLayoutSpyPromise;
    expect(notification._Content.flex.alignItems).toBe('center');
  });

  it('should update the layout if changes are made while the Notification is activated', async () => {
    [notification, testRenderer] = createNotification(
      {
        entered: true,
        title: 'Title',
        description: 'description',
        actionArea: 'Action Area'
      },
      { spyOnMethods: ['enter', '_updateLayout'] }
    );

    await notification._enterSpyPromise;
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    notification.title = 'New title';

    // assert changes from _updateLayout happened
    await notification._updateLayoutSpyPromise;

    expect(notification._Container.h).toBe(
      notification._contentHeight +
        notification._actionAreaHeight +
        notification.style.actionAreaMarginTop +
        notification._totalMarginY
    );
  });

  it('should update the layout if changes are made while the Notification is activated without an action area', async () => {
    [notification, testRenderer] = createNotification(
      {
        entered: true,
        title: 'Title',
        description: 'description'
      },
      { spyOnMethods: ['enter', '_updateLayout'] }
    );

    await notification._enterSpyPromise;
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    notification.title = 'New title';

    // assert changes from _updateLayout happened
    await notification._updateLayoutSpyPromise;

    expect(notification._Container.h).toBe(
      notification._contentHeight + notification._totalMarginY
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
      notification.style.enterAlpha
    );
    expect(notification._Container.scale).toEqual(
      notification.style.enterScale
    );
    expect(notification._Icon.alpha).toEqual(notification.style.enterAlpha);
    expect(notification._Icon.scale).toEqual(notification.style.enterScale);
    expect(notification._Text.alpha).toEqual(notification.style.enterAlpha);
  });

  it('should call dismiss() and complete transitions', async () => {
    [notification, testRenderer] = createNotification(
      { entered: true, actionArea: 'Action Area' },
      { spyOnMethods: ['enter'] }
    );
    jest.spyOn(notification, 'signal');
    jest.spyOn(notification, 'fireAncestors');
    const { enterAlpha, enterScale, dismissAlpha, dismissScale } =
      notification.style;

    await notification._enterSpyPromise;
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    expect(notification._Container.alpha).toEqual(enterAlpha);
    expect(notification._Container.scale).toEqual(enterScale);
    expect(notification.signal).not.toHaveBeenCalledWith(
      'notificationDismissed'
    );
    expect(notification.fireAncestors).not.toHaveBeenCalledWith(
      '$notificationDismissed'
    );

    await notification.dismiss();
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);
    testRenderer.update();

    expect(notification._Container.alpha).toEqual(dismissAlpha);
    expect(notification._Container.scale).toEqual(dismissScale);
    expect(notification._Icon.alpha).toEqual(dismissAlpha);
    expect(notification._Text.alpha).toEqual(dismissAlpha);
    expect(notification.signal).toHaveBeenCalledWith('notificationDismissed');
    expect(notification.fireAncestors).toHaveBeenCalledWith(
      '$notificationDismissed'
    );
  });

  it('should not run dismiss animations if the Nofication is not activated', async () => {
    jest.spyOn(notification, 'signal');
    jest.spyOn(notification, 'fireAncestors');

    expect(notification.signal).not.toHaveBeenCalled();
    expect(notification.fireAncestors).not.toHaveBeenCalled();

    await notification.dismiss();
    TestUtils.fastForward([
      notification._Container,
      notification._Icon,
      notification._Text
    ]);

    expect(notification.signal).not.toHaveBeenCalled();
    expect(notification.fireAncestors).not.toHaveBeenCalled();
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
        notification.style.enterAlpha
      );
      expect(notification._Container.scale).toEqual(
        notification.style.enterScale
      );
      expect(notification._Icon.alpha).toEqual(notification.style.enterAlpha);
      expect(notification._Icon.scale).toEqual(notification.style.enterScale);
      expect(notification._Text.alpha).toEqual(notification.style.enterAlpha);
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
