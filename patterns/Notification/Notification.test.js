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
    expect(notification._icon).toEqual({
      size: 64,
      spacing: 16,
      src: 'patch/to/src'
    });
  });

  it('will not show the action area if it is undefined', () => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src'
    });
    expect(notification._ActionArea.alpha).toBe(0);
  });

  it('will show the action area if one is passed in', done => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src',
      actionArea: {
        text: 'Action Area',
        icon: 'patch/to/src'
      }
    });
    expect(notification._actionArea).toEqual({
      text: 'Action Area',
      icon: 'patch/to/src'
    });
    setTimeout(() => {
      expect(notification._ActionArea.alpha).toBe(1);
      done();
    }, 100);
  });

  it('should be able to mount entered', () => {
    [notification, testRenderer] = createNotification({
      title: 'Title',
      description: 'This is a description',
      icon: 'patch/to/src',
      entered: true
    });
    expect(notification._Container.alpha).toEqual(
      notification.styles.enter.container.alpha
    );
    expect(notification._Container.scale).toEqual(
      notification.styles.enter.container.scale
    );
    expect(notification._Container.w).toEqual(
      notification.styles.enter.container.w
    );
    expect(notification._Container.x).toEqual(
      notification.styles.enter.container.x
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
    expect(notification._Text.x).toEqual(notification.styles.enter.text.x);
  });

  it('should call enter() and complete transistions', done => {
    notification.enter();
    setTimeout(() => {
      expect(notification._Container.alpha).toEqual(
        notification.styles.enter.container.alpha
      );
      expect(notification._Container.scale).toEqual(
        notification.styles.enter.container.scale
      );
      expect(notification._Container.w).toEqual(
        notification.styles.enter.container.w
      );
      expect(notification._Container.x).toEqual(
        notification.styles.enter.container.x
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
      expect(notification._Text.x).toEqual(notification.styles.enter.text.x);
      done();
    }, 1500);
  });

  it('should call dismiss() and complete transistions', done => {
    notification.dismiss();
    setTimeout(() => {
      expect(notification._Container.alpha).toEqual(
        notification.styles.dismiss.container.alpha
      );
      expect(notification._Container.scale).toEqual(
        notification.styles.dismiss.container.scale
      );
      expect(notification._Container.w).toEqual(
        notification.styles.dismiss.container.w
      );
      expect(notification._Container.x).toEqual(
        notification.styles.dismiss.container.x
      );
      expect(notification._Icon.alpha).toEqual(
        notification.styles.dismiss.icon.alpha
      );
      expect(notification._Icon.scale).toEqual(
        notification.styles.dismiss.icon.scale
      );
      expect(notification._Text.alpha).toEqual(
        notification.styles.dismiss.text.alpha
      );
      expect(notification._Text.x).toEqual(notification.styles.dismiss.text.x);
      done();
    }, 1500);
  });
});
