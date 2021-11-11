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

  it('will show the action area if one is passed in', done => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src',
      actionArea: {
        text: 'Action Area'
      }
    });
    expect(notification._actionArea).toEqual({
      text: 'Action Area'
    });

    notification.enter();

    testRenderer.update();

    setTimeout(() => {
      expect(notification._ActionArea.alpha).toBe(1);
      done();
    }, 1000); // bumping the timer resolves a race condition with the alpha update
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

  it('should be able to mount entered', done => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src',
      entered: true
    });
    setTimeout(() => {
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
      done();
    }, 1500);
  });

  it('should call enter() and complete transitions', done => {
    notification.enter();
    setTimeout(() => {
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
      done();
    }, 1500);
  });

  it('should call dismiss() and complete transitions', done => {
    notification.dismiss();
    setTimeout(() => {
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
      done();
    }, 2000);
  });
});
