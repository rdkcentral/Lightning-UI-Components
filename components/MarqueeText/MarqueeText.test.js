import TestUtils from '../lightning-test-utils';
import MarqueeText from '.';

const createMarqueeText = TestUtils.makeCreateComponent(MarqueeText, {
  w: 350,
  h: 50,
  title: {
    text: 'This is a scrolling Marquee component for long text',
    lineHeight: 50,
    maxLines: 1
  },
  delay: 0
});

describe('MarqueeText', () => {
  let marquee, testRenderer;

  beforeEach(() => {
    [marquee, testRenderer] = createMarqueeText();
  });

  afterEach(() => {
    marquee = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  describe('scrolling', () => {
    it('does not scroll when width is big enough', () => {
      [marquee, testRenderer] = createMarqueeText({
        autoStart: true,
        text: {
          textAlign: 'center'
        }
      });

      marquee.startScrolling();
      expect(marquee._scrolling).toBe(false);
    });

    it('with autoStart property', done => {
      [marquee, testRenderer] = createMarqueeText({
        autoStart: true
      });
      // Canvas mock doesnt render text, just uses length
      // https://github.com/hustcc/jest-canvas-mock/issues/67
      Object.defineProperty(marquee, '_textRenderedW', {
        get: jest.fn(() => 500)
      });

      setTimeout(() => {
        expect(marquee._scrollAnimation.isPlaying()).toBe(true);
        done();
      }, 50);
    });

    it('#startScrolling', done => {
      Object.defineProperty(marquee, '_textRenderedW', {
        get: jest.fn(() => 500)
      });
      expect(marquee._scrollAnimation).toBe(undefined);
      marquee.startScrolling();
      setTimeout(() => {
        expect(marquee._scrollAnimation.isPlaying()).toBe(true);
        done();
      }, 50);
    });

    it('#startScrolling waits till rendered', done => {
      let renderWMock = jest.fn();
      renderWMock.mockReturnValueOnce(0).mockReturnValueOnce(500);
      Object.defineProperty(marquee, '_textRenderedW', {
        get: renderWMock
      });
      marquee.startScrolling();
      setTimeout(() => {
        expect(marquee._scrollAnimation.isPlaying()).toBe(true);
        done();
      }, 50);
    });

    it('#startScrolling centers text with enough width', () => {
      [marquee, testRenderer] = createMarqueeText({
        title: {
          textAlign: 'center'
        }
      });
      marquee.startScrolling();
      expect(marquee._Content.text.textAlign).toBe('center');
      expect(marquee._scrolling).toBe(false);
    });

    it('#stopScrolling', done => {
      Object.defineProperty(marquee, '_textRenderedW', {
        get: jest.fn(() => 500)
      });
      marquee.startScrolling();
      expect(marquee._scrolling).toBe(true);
      setTimeout(() => {
        marquee.stopScrolling();
      }, 50);

      setTimeout(() => {
        expect(marquee._scrolling).toBe(false);
        done();
      }, 55);
    });
  });

  describe('#title', () => {
    it('updates the title', () => {
      marquee.title = {
        text: 'Hello There'
      };
      testRenderer.update();
      expect(marquee.title).toEqual('Hello There');
    });
  });

  describe('#color', () => {
    it('updates the text color', () => {
      marquee.color = 0xff1c27bc;
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('#contentTexture', () => {
    it('updates the texture', () => {
      marquee.contentTexture = marquee.getTexture();
      testRenderer.update();
      expect(marquee.contentTexture.constructor.name).toEqual('TextureSource');
    });
  });
});
