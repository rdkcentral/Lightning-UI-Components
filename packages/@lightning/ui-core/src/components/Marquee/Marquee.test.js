import { makeCreateComponent } from '@lightning/ui-test-utils';
import Marquee from './index.js';
import { jest } from '@jest/globals';

const createMarquee = makeCreateComponent(Marquee, {
  w: 350,
  h: 50,
  title: {
    text: 'This is a scrolling Marquee component for long text',
    lineHeight: 50,
    maxLines: 1
  },
  delay: 0
});

describe('Marquee', () => {
  let marquee, testRenderer;

  beforeEach(() => {
    [marquee, testRenderer] = createMarquee();
  });

  afterEach(() => {
    marquee = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the label text', () => {
    const text = 'Scrolling Text';
    marquee.title = { text };
    testRenderer.forceAllUpdates();
    expect(marquee.announce).toBe(text);
  });

  describe('scrolling', () => {
    it('does not scroll when width is big enough', () => {
      [marquee, testRenderer] = createMarquee({
        autoStart: true,
        text: {
          textAlign: 'center'
        }
      });
      marquee.startScrolling();
      expect(marquee._scrolling).toBe(false);
      [marquee, testRenderer] = createMarquee({
        autoStart: true,
        centerAlign: true
      });
      marquee.startScrolling();
      expect(marquee.centerAlign).toBe(true);
      expect(marquee._shouldCenter()).toBe(true);
      expect(marquee._scrolling).toBe(false);
    });

    it('with autoStart property', done => {
      [marquee, testRenderer] = createMarquee({
        autoStart: true
      });
      // Canvas mock doesnt render text, just uses length
      // https://github.com/hustcc/jest-canvas-mock/issues/67
      Object.defineProperty(marquee, '_textRenderedW', {
        get: jest.fn(() => 500)
      });
      marquee.startScrolling();
      setTimeout(() => {
        expect(marquee._scrollAnimation.isPlaying()).toBe(true);
        done();
      }, 50);
    });

    it('handles txLoaded', () => {
      const [marquee] = createMarquee({ w: 300, h: 300, title: '' });
      marquee.startScrolling();
      marquee._Content.emit('txLoaded', 'loaded');
      expect(marquee._scrolling).toBe(false);
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

    it('#startScrolling waits until rendered', done => {
      const renderWMock = jest.fn();
      renderWMock.mockReturnValueOnce(0).mockReturnValue(500);
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
      [marquee, testRenderer] = createMarquee({
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
      expect(marquee.title.text).toEqual('Hello There');
    });
  });

  describe('#color', () => {
    it('updates the text color', () => {
      const color = 0xff1c27bc;
      marquee.color = color;
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      expect(marquee.color).toBe(color);
    });
  });

  describe('#contentTexture', () => {
    it('updates the texture', () => {
      marquee.contentTexture = marquee.getTexture();
      testRenderer.update();
      expect(marquee.contentTexture.constructor.name).toEqual('TextureSource');
    });
  });

  describe('should position contentBox', () => {
    it('updates the texture', done => {
      [marquee, testRenderer] = createMarquee({
        w: 300,
        h: 300,
        centerAlign: true
      });
      marquee._componentStyle.shouldSmooth = true;
      marquee._centerTexture();
      setTimeout(() => {
        expect(marquee._ContentBox.x).toBe(124.5);
        done();
      }, 50);
    });
  });

  describe('should center', () => {
    it('updates the texture', () => {
      [marquee, testRenderer] = createMarquee({
        w: 300,
        h: 300,
        centerAlign: false
      });
      marquee._Content.text = 'marque is scrolling';
      marquee._Content.text.textAlign = 'center';
      expect(marquee._shouldCenter()).toBe(true);
    });
  });

  describe('should clip', () => {
    it('updates the texture', () => {
      [marquee, testRenderer] = createMarquee({
        w: 0,
        h: 300,
        shouldClip: true
      });
      expect(marquee._ContentClipper.w).toBe(0);
    });
  });

  describe('should update delay and repeat', () => {
    it('updates the texture', () => {
      [marquee, testRenderer] = createMarquee({
        w: 300,
        h: 300,
        shouldClip: true,
        delay: NaN,
        repeat: 5
      });
      marquee._updateAnimation();
      expect(marquee.animation().element.repeat).toBe(marquee.repeat);
      expect(marquee._scrollAnimation._settings.delay).toBe(1.5);
    });
  });

  describe('#shouldSmooth', () => {
    it('should transition the content box x position when centering', done => {
      [marquee, testRenderer] = createMarquee({
        autoStart: true,
        shouldSmooth: true,
        centerAlign: true,
        w: 350,
        h: 50,
        title: {
          text: 'Short text',
          lineHeight: 50,
          maxLines: 1
        }
      });
      Object.defineProperty(marquee, '_textRenderedW', {
        get: jest.fn(() => 100)
      });
      expect(marquee.shouldSmooth).toBe(true);
      setTimeout(() => {
        expect(marquee._scrolling).toBe(false);
        done();
      }, 50);
    });
  });
});
