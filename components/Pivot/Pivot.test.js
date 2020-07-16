import Pivot from '.';
import TestRenderer from '../lightning-test-renderer';

// styles
import { getHexColor, COLORS_NEUTRAL, COLORS_TEXT } from '../Styles';

const Component = {
  Component: {
    type: Pivot,
    title: 'Pivot'
  }
};

describe('Pivot', () => {
  let testRenderer, pivot;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    pivot = testRenderer.getInstance();
    return pivot._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should load before recieving data', () => {
    testRenderer = TestRenderer.create({ Component: { type: Pivot } });
    pivot = testRenderer.getInstance();
    expect(pivot._loading.isPlaying()).toBe(true);
  });

  it('should append Pivot Button to end of announce context', () => {
    expect(pivot.announce).toEqual('Pivot, Pivot Button');
  });

  it('should grow width dynmically if text renders longer than default Pivot size', done => {
    testRenderer = TestRenderer.create({
      Component: {
        type: Pivot
      }
    });
    pivot = testRenderer.getInstance();
    expect(pivot.w).toBe(185);
    pivot.title =
      'This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title This is a Pivot with a really long title';
    pivot._Title.on('txLoaded', () => {
      setTimeout(() => {
        expect(pivot.w).toBeGreaterThan(185);
        done();
      }, 10);
    });
  });

  it('should update Pivot properties when focused', done => {
    pivot._focus();
    testRenderer.update();
    let focusColors = {
      text: getHexColor(COLORS_TEXT.dark),
      background: getHexColor(COLORS_NEUTRAL.light2)
    };
    pivot._whenEnabled.then(() => {
      expect(pivot._Background.transition('color').targetValue).toBe(
        focusColors.background
      );
      expect(pivot._Title.transition('color').targetValue).toBe(
        focusColors.text
      );
      expect(pivot._DropShadow.transition('alpha').targetValue).toBe(1);
      done();
    });
  });

  it('should update properties when unfocused', done => {
    pivot._unfocus();
    testRenderer.update();
    let focusColors = {
      text: getHexColor(COLORS_TEXT.light),
      background: 0
    };
    pivot._whenEnabled.then(() => {
      expect(pivot._Background.transition('color').targetValue).toBe(
        focusColors.background
      );
      expect(pivot._Title.transition('color').targetValue).toBe(
        focusColors.text
      );
      expect(pivot._DropShadow.transition('alpha').targetValue).toBe(0);
      done();
    });
  });
});
