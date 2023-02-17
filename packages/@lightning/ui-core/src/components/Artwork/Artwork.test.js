import {
  makeCreateComponent,
  fastForward,
  pathToDataURI
} from '@lightning/ui-test-utils';
import { jest } from '@jest/globals';
import Artwork from './index.js';
const sampleImg = 'sampleImg';
const fallbackSrc = 'fallbackSrc';

const createComponent = makeCreateComponent(Artwork);

describe('Artwork', () => {
  // eslint-disable-next-line no-unused-vars
  let artwork, testRenderer;

  beforeEach(async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: [
          '_update',
          '_updateRadius',
          '_updateGradient',
          '_updateImage',
          '_updateFillColor',
          '_updateCenterImage',
          '_updateBlur',
          '_showComponent',
          '_updateForegroundImage',
          '_updateFormatSquareCircle',
          '_updateFormatContain'
        ]
      }
    );
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
  });

  afterEach(() => {
    artwork = null; // eslint-disable-line no-unused-vars
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  // Getters / Setters
  it('should have Artwork as componentName', () => {
    expect(artwork.constructor.__componentName).toBe('Artwork');
  });

  it('has the correct static properties getter', () => {
    expect(artwork.constructor.properties).toMatchObject([
      'blur',
      'fallbackSrc',
      'foregroundH',
      'foregroundSrc',
      'foregroundW',
      'gradient',
      'format',
      'src',
      'fill',
      'shouldScale',
      'srcCallback',
      'srcCallbackAspectRatios'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(artwork.constructor.tags).toMatchObject([
      'Blur',
      'CenterImage',
      'FillColor',
      'ForegroundImage',
      'Gradient',
      'Image',
      'Item'
    ]);
  });

  it('should return the proper value for _shouldBlur getter', async () => {
    expect(artwork._shouldBlur).toBe(false);
    artwork.blur = true;
    await artwork.__updateSpyPromise;
    expect(artwork._shouldBlur).toBe(true);
    artwork.blur = false;
    artwork.format = 'circle';
    await artwork.__updateSpyPromise;
    expect(artwork._shouldBlur).toBe(true);
    artwork.format = 'square';
    await artwork.__updateSpyPromise;
    expect(artwork._shouldBlur).toBe(true);
    // Need to add case where code checks if image dimensions are equal
  });

  it('should return the proper values for _hasCenterImage', async () => {
    expect(artwork._hasCenterImage).toBe(false);
    artwork.format = 'circle';
    await artwork.__updateSpyPromise;
    expect(artwork._hasCenterImage).toBe(true);
    artwork.format = 'square';
    await artwork.__updateSpyPromise;
    expect(artwork._hasCenterImage).toBe(true);
    artwork.format = 'contain';
    await artwork.__updateSpyPromise;
    expect(artwork._hasCenterImage).toBe(true);
    // TODO: Need to check aspect ratio
  });

  it('will return the the actualAspectRatio', async () => {
    artwork.patch({
      w: 200,
      h: 100
    });
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
    expect(artwork._actualAspectRatio).toBe('2x1');
    artwork.patch({
      w: 100,
      h: 100
    });
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
    expect(artwork._actualAspectRatio).toBe('1x1');
    artwork.patch({
      w: 1920,
      h: 1080
    });
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
    expect(artwork._actualAspectRatio).toBe('16x9');
  });

  it('returns default common aspect ratios for use with srcCallback', () => {
    expect(artwork._srcCallbackAspectRatios).toEqual([
      '16x9',
      '3x4',
      '4x3',
      '2x1',
      '1x1'
    ]);
  });

  it('will return _supportedAspectRatioHeights', () => {
    artwork.patch({
      w: 200,
      h: 100
    });
    expect(artwork._supportedAspectRatioHeights).toEqual([
      112.5, 266.6666666666667, 150, 100, 200
    ]);
    artwork.patch({
      w: 1920,
      h: 1080
    });
    expect(artwork._supportedAspectRatioHeights).toEqual([
      1080, 2560, 1440, 960, 1920
    ]);
  });

  it('should return the closest supported aspect ratio', () => {
    artwork.patch({
      w: 100,
      h: 99
    });
    expect(artwork._closestSupportedAspectRatio).toBe('1x1');
    artwork.patch({
      w: 1920,
      h: 1060
    });
    expect(artwork._closestSupportedAspectRatio).toBe('16x9');
    artwork._srcCallbackAspectRatios = ['1x1'];
    expect(artwork._closestSupportedAspectRatio).toBe('1x1');
  });

  it('returns proper value for _processedImageSrc', async () => {
    artwork.patch({
      w: 200,
      h: 100,
      src: 'testSrc'
    });
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
    let src;
    src = await artwork._processedImageSrc;
    expect(src).toBe('testSrc');
    artwork.srcCallback = ({ closestAspectRatio, src, w, h }) => {
      return [closestAspectRatio, src, w, h].join('-');
    };
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
    src = await artwork._processedImageSrc;
    expect(src).toBe('2x1-testSrc-200-100');
    artwork.srcCallbackAspectRatios = ['16x9'];
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateSpyPromise;
    src = await artwork._processedImageSrc;
    expect(src).toBe('16x9-testSrc-200-100');
  });

  it('will return src if defined then default to fallbackSrc', async () => {
    [artwork, testRenderer] = createComponent({
      h: 100,
      w: 100,
      fallbackSrc
    });
    await artwork._processedImageSrc;
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    expect(artwork._Image.texture.src).toBe(fallbackSrc);
    artwork.src = sampleImg;
    await artwork.__updateSpyPromise;
    expect(artwork.src).toBe(sampleImg);
  });

  it('will call generatePromise on _setup and when src, w, and h is set', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100
      },
      {
        spyOnMethods: ['_generatePromise']
      }
    );
    await artwork._processedImageSrc;
    expect(artwork._generatePromise).toHaveBeenCalledTimes(3);
    artwork._generatePromise.mockClear();
    artwork.src = sampleImg;
    expect(artwork._generatePromise).toHaveBeenCalledTimes(1);
    artwork._generatePromise.mockClear();
    artwork.w = 200;
    expect(artwork._generatePromise).toHaveBeenCalledTimes(1);
    artwork._generatePromise.mockClear();
    artwork.h = 200;
    expect(artwork._generatePromise).toHaveBeenCalledTimes(1);
  });

  // Lifecycle hook methods

  it('will set alpha to 0.001 on init', async () => {
    artwork._init();
    expect(artwork.alpha).toBe(0.001);
  });

  // Methods

  it('will set smooth to true if was previously undefined after first _update cycle', async () => {
    artwork.shouldSmooth = undefined;
    artwork.requestUpdate(true);
    await artwork.__updateSpyPromise;
    expect(artwork.shouldSmooth).toBe(true);
  });

  it('will update fillColor if defined in componentStyles and remove the element if not required', async () => {
    artwork.fill = true;
    artwork.style = {
      fillColor: 0xfff663399
    };
    await artwork.__updateSpyPromise;
    expect(artwork._FillColor).not.toBeUndefined();
    expect(artwork._FillColor.color).toBe(0xfff663399);
    artwork.style = {
      fillColor: undefined
    };
    artwork.fill = false;
    await artwork.__updateSpyPromise;
    expect(artwork._FillColor).toBeUndefined();
  });

  it('will call resolveLoading on _Image txLoaded event', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_resolveLoading']
      }
    );
    await artwork._processedImageSrc;
    artwork._Image.emit('txLoaded');
    await artwork.__resolveLoadingSpyPromise;
    expect(artwork._resolveLoading).toHaveBeenCalledTimes(1);
  });

  it('will call rejectLoading on _Image txError event', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_rejectLoading']
      }
    );
    artwork._Image.emit('txError');
    await artwork.__rejectLoadingSpyPromise;
    expect(artwork._rejectLoading).toHaveBeenCalledTimes(1);
  });

  it('will show the component after all other update methods have completed', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_showComponent']
      }
    );
    await artwork._processedImageSrc;
    expect(artwork.alpha).toBe(0.001);
    artwork._Image.emit('txLoaded');
    await artwork.__showComponentSpyPromise;
    expect(artwork._transitions.alpha.targetValue).toBe(1); //TODO: How to use fastforward utility
  });

  it('will update the foreground image if defined and remove from tree if no longer required', async () => {
    await artwork._processedImageSrc;
    expect(artwork._ForegroundImage).toBeUndefined();
    artwork.foregroundSrc = sampleImg;
    await artwork.__updateSpyPromise;
    expect(artwork._ForegroundImage).not.toBeUndefined();
    artwork.foregroundSrc = undefined;
    await artwork.__updateSpyPromise;
    expect(artwork._ForegroundImage).toBeUndefined();
  });

  it('will update the foregroundImage w/h if foregroundW & foregroundH is set on the component', async () => {
    await artwork._processedImageSrc;
    artwork.patch({
      foregroundH: 100,
      foregroundSrc: sampleImg,
      foregroundW: 200
    });
    await artwork.__updateSpyPromise;
    expect(artwork._ForegroundImage.w).toBe(200);
    expect(artwork._ForegroundImage.h).toBe(100);
  });

  it('will update the foregroundImage with the correct aspect ratio if only foregroundW or foregroundH is set', async () => {
    artwork.patch({
      foregroundSrc: sampleImg,
      foregroundW: 200
    });
    await artwork.__updateSpyPromise;
    // Mock how the image would come back
    artwork._ForegroundImage.texture.getRenderWidth = () => 400;
    artwork._ForegroundImage.texture.getRenderHeight = () => 200;
    artwork._ForegroundImage.emit('txLoaded');
    expect(artwork._ForegroundImage.w).toBe(200);
    expect(artwork._ForegroundImage.h).toBe(100);
    artwork.patch({
      foregroundW: undefined,
      foregroundH: 100
    });
    artwork._ForegroundImage.emit('txLoaded');
    expect(artwork._ForegroundImage.w).toBe(200);
    expect(artwork._ForegroundImage.h).toBe(100);
  });

  it('should update the blur if set to true, then remove the Blur element if no longer required', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_updateBlur']
      }
    );
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    expect(artwork._Blur).toBeUndefined();
    artwork.blur = true;
    await artwork.__updateBlurSpyPromise;
    expect(artwork._Blur).not.toBeUndefined();
    expect(artwork._Blur.constructor.name).toBe('FastBlurComponent');
    artwork.blur = false;
    await artwork.__updateBlurSpyPromise;
    // Wait for transition to complete when fading out then remove the element
    await new Promise(resolve => {
      artwork._Blur._getTransition('alpha').once('finish', () => {
        resolve();
      });
    });
    expect(artwork._Blur).toBeUndefined();
    artwork.blur = true;
    await artwork.__updateBlurSpyPromise;
    expect(artwork._Blur).not.toBeUndefined();
    artwork.shouldSmooth = false;
    artwork.blur = false;
    await artwork.__updateBlurSpyPromise;
    expect(artwork._Blur).toBeUndefined();
  });

  it('should blur if mode is "circle"', async () => {
    await artwork._processedImageSrc;
    artwork.format = 'circle';
    await artwork.__showComponentSpyPromise;
    expect(artwork._Blur).not.toBeUndefined();
  });

  it('should blur if mode is "square"', async () => {
    await artwork._processedImageSrc;
    artwork.format = 'square';
    await artwork.__showComponentSpyPromise;
    expect(artwork._Blur).not.toBeUndefined();
  });

  it('should blur if mode "contain" and the ratio is not equal to the Artwork ratio', async () => {
    await artwork._processedImageSrc;
    artwork.format = 'contain';
    await artwork.__showComponentSpyPromise;
    expect(artwork._Blur).not.toBeUndefined();
    artwork.patch({
      w: 640,
      h: 360,
      src: sampleImg
    });
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork._componentSrc.complete;
    artwork._aspectRatioEqual = true; // Force this value to for test
    await artwork.__showComponentSpyPromise;
    fastForward([artwork._Blur]);
    testRenderer.update(); // Force redraw
    expect(artwork._Blur).toBeUndefined();
    // Should remove with patch if shouldSmooth is false
    artwork.src = fallbackSrc;
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__showComponentSpyPromise;
    expect(artwork._Blur).not.toBeUndefined();
    artwork.src = sampleImg;
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork._componentSrc.complete;
    artwork._aspectRatioEqual = true; // Force this value to for test
    artwork.shouldSmooth = false;
    await artwork.__showComponentSpyPromise;
    expect(artwork._Blur).toBeUndefined();
  });

  it('should call _updateCenterImage after the image has been loaded', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_updateCenterImage']
      }
    );
    await artwork._processedImageSrc;
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 500);
    await artwork.__updateCenterImageSpyPromise;
    expect(artwork._updateCenterImage).toHaveBeenCalled();
  });

  it('_updateCenterImage should always remove the previous CenterImage element if exists and no longer required', async () => {
    await artwork._processedImageSrc;
    artwork.format = 'circle';
    await artwork.__showComponentSpyPromise;
    expect(artwork._CenterImage).not.toBeUndefined();
    artwork.format = undefined;
    await artwork.__showComponentSpyPromise;
    expect(artwork._CenterImage).toBeUndefined();
  });

  it('_updateCenterImage should never call _updateFormatSquareCircle or _updateFormatContain if the src is equal to the fallbackSrc is true', async () => {
    await artwork._processedImageSrc;
    artwork._updateFormatSquareCircle.mockClear();
    artwork._updateFormatContain.mockClear();
    artwork.format = 'circle';
    artwork.src = undefined;
    artwork.fallbackSrc = fallbackSrc;
    await artwork.__showComponentSpyPromise;
    expect(artwork._updateFormatSquareCircle).toHaveBeenCalledTimes(0);
    artwork.format = 'contain';
    await artwork.__showComponentSpyPromise;
    expect(artwork._updateFormatContain).toHaveBeenCalledTimes(0);
  });

  it('should update the foregroundImage if mode is contain', async () => {
    artwork._updateForegroundImage.mockClear();
    artwork.format = 'contain';
    await artwork.__showComponentSpyPromise;
    expect(artwork._updateForegroundImage).toHaveBeenCalledTimes(1);
    expect(artwork._CenterImage).not.toBeUndefined();
  });

  it('should accommodate portrait size images appropriately when in contain mode', async () => {
    artwork.src = sampleImg;
    artwork.format = 'contain';
    artwork.w = 400;
    artwork.h = 200;
    artwork._updateForegroundImage.mockRestore();
    const _updateForegroundImage = artwork._updateForegroundImage.bind(artwork); // Clone function so it is not modified when mocked
    artwork._updateForegroundImage = jest.fn().mockImplementation(function () {
      artwork._Image.texture.source.w = 100;
      artwork._Image.texture.source.h = 200;
      _updateForegroundImage();
    });
    artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    await artwork.__updateFormatContainSpyPromise;
    expect(1).toBe(1);
    expect(artwork._CenterImage.w).toBe(200 * (100 / 200));
    expect(artwork._CenterImage.h).toBe(artwork.h);
    artwork.w = 100;
    artwork.h = 200;
    artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    await artwork.__updateImageSpyPromise;
    expect(artwork._CenterImage.w).toBe(100);
    expect(artwork._CenterImage.h).toBe(100 * (200 / 100));
  });

  it('should accommodate landscape size images appropriately when in contain mode', async () => {
    artwork.src = sampleImg;
    artwork.format = 'contain';
    artwork.w = 400;
    artwork.h = 200;
    artwork._updateForegroundImage.mockRestore();
    const _updateForegroundImage = artwork._updateForegroundImage.bind(artwork); // Clone function so it is not modified when mocked
    artwork._updateForegroundImage = jest.fn().mockImplementation(function () {
      artwork._Image.texture.source.h = 100;
      artwork._Image.texture.source.w = 200;
      _updateForegroundImage();
    });
    artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    await artwork.__updateCenterImageSpyPromise;
    expect(artwork._CenterImage.w).toBe(400);
    expect(artwork._CenterImage.h).toBe(200);
    artwork.w = 100;
    artwork.h = 200;
    artwork._Image.emit('txLoaded');
    await artwork.__updateCenterImageSpyPromise;
    expect(artwork._CenterImage.w).toBe(100);
    expect(artwork._CenterImage.h).toBe(50);
  });

  it('should remove the centerImage and return if in contain mode and the image fails', async () => {
    artwork.src = sampleImg;
    artwork.format = 'contain';
    artwork.w = 400;
    artwork.h = 200;
    artwork.fallbackSrc = 'fallbackSrcImage';
    artwork._Image.emit('txLoaded');
    await artwork.__updateSpyPromise;
    expect(artwork._src).toBe(sampleImg);
    expect(artwork._CenterImage).not.toBeUndefined();
    artwork.src = 'brokenImage';
    setTimeout(() => {
      artwork._Image.emit('txError'); // Simulate image not loading with emitting txError on the image
    }, 0);
    await artwork.__updateSpyPromise;
    expect(artwork.src).toBe('fallbackSrcImage');
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 0);
    await artwork.__updateCenterImageSpyPromise;
    expect(artwork._CenterImage).toBeUndefined();
  });

  it('should remove the centerImage and return if in square mode and the image fails', async () => {
    artwork.src = sampleImg;
    artwork.format = 'square';
    artwork.w = 400;
    artwork.h = 200;
    artwork.fallbackSrc = 'fallbackSrcImage';
    artwork._Image.emit('txLoaded');
    await artwork.__updateSpyPromise;
    expect(artwork._src).toBe(sampleImg);
    expect(artwork._CenterImage).not.toBeUndefined();
    artwork.src = 'brokenImage';
    setTimeout(() => {
      artwork._Image.emit('txError'); // Simulate image not loading with emitting txError on the image
    }, 0);
    await artwork.__updateSpyPromise;
    expect(artwork.src).toBe('fallbackSrcImage');
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 0);
    await artwork.__updateCenterImageSpyPromise;
    expect(artwork._CenterImage).toBeUndefined();
  });

  it('should remove the centerImage and return if in circle mode and the image fails', async () => {
    artwork.src = sampleImg;
    artwork.format = 'circle';
    artwork.w = 400;
    artwork.h = 200;
    artwork.fallbackSrc = 'fallbackSrcImage';
    artwork._Image.emit('txLoaded');
    await artwork.__updateSpyPromise;
    expect(artwork._src).toBe(sampleImg);
    expect(artwork._CenterImage).not.toBeUndefined();
    artwork.src = 'brokenImage';
    setTimeout(() => {
      artwork._Image.emit('txError'); // Simulate image not loading with emitting txError on the image
    }, 0);
    await artwork.__updateSpyPromise;
    expect(artwork.src).toBe('fallbackSrcImage');
    setTimeout(() => {
      artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    }, 0);
    await artwork.__updateCenterImageSpyPromise;
    expect(artwork._CenterImage).toBeUndefined();
  });

  it('should return a square image texture that has a total size that is equal to the total component height minus the style.padding * 2', async () => {
    artwork.format = 'square';
    await artwork.__showComponentSpyPromise;
    expect(artwork._CenterImage.w).toBe(artwork._CenterImage.h);
    expect(artwork._CenterImage.w).toBe(artwork.w - artwork.style.padding * 2);
  });

  it('should update scale', async () => {
    artwork.scale = true;
    artwork._updateScale();
    expect(artwork._Image).not.toBeUndefined();
    expect(artwork._Image.scale).not.toBeUndefined();
  });

  it('should add a gradient overlay if gradient is set to true and should remove the Gradient element if no longer required', async () => {
    artwork.gradient = true;
    await artwork.__showComponentSpyPromise;
    expect(artwork._Gradient).not.toBeUndefined();
    artwork.gradient = false;
    await artwork.__showComponentSpyPromise;
    fastForward([artwork._Gradient]);
    testRenderer.update(); // Force redraw
    expect(artwork._Gradient).toBeUndefined();
    artwork.gradient = true;
    await artwork.__showComponentSpyPromise;
    expect(artwork._Gradient).not.toBeUndefined();
    artwork.shouldSmooth = false;
    artwork.gradient = false;
    await artwork.__showComponentSpyPromise;
    expect(artwork._Gradient).toBeUndefined();
    artwork.gradient = true;
    await artwork.__showComponentSpyPromise;
    fastForward([artwork._Gradient]);
    expect(artwork._Gradient).not.toBeUndefined();
  });

  // TODO: Need to figure out why this test fails. Something with Jest and image loading. Right now, received is undefined.
  it.skip('should update the Image element with the value of src, and remove the texture if no longer required', async () => {
    expect(artwork._Image.texture).not.toBeNull();
    artwork.src = undefined;
    await artwork.__updateImageSpyPromise;
    expect(artwork._Image.texture.src).toBe(
      pathToDataURI('./src/assets/images/default_background.png')
    );
    expect(artwork._Image).not.toBeUndefined();
  });

  it('should set this._aspectRatioEqual back to false if new src is set', async () => {
    expect(artwork._aspectRatioEqual).toBe(false);
    artwork._aspectRatioEqual = true;
    expect(artwork._aspectRatioEqual).toBe(true);
    artwork.src = fallbackSrc;
    await artwork.__updateImageSpyPromise;
    expect(artwork._aspectRatioEqual).toBe(false);
  });

  it('should update the radius by patching RoundedRectangle shader if defined in style and greater than 0', async () => {
    expect(artwork.shader).toBeNull();
    artwork.style = {
      radius: 10
    };
    await artwork.__showComponentSpyPromise;
    expect(artwork.shader.constructor.name).toBe('RoundedRectangleShader');
  });

  it('should use fallback image if src image fails to load', async () => {
    [artwork, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg,
        fallbackSrc
      },
      {
        spyOnMethods: ['_showComponent', '_handleImageLoadError']
      }
    );

    artwork._Image.emit('txError'); // Simulate image not loading with emitting txError on the image
    await artwork.__handleImageLoadErrorSpyPromise;
    artwork._Image.emit('txLoaded'); // Simulate image loading with emitting txLoaded on the image
    await artwork.__showComponentSpyPromise;
    expect(artwork._Image.texture.src).toBe(fallbackSrc);
  });
});
