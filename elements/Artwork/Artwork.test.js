import TestUtils from '../../test/lightning-test-utils';
import Artwork from '.';
import { mockContext } from '../../test/MockContextUtils';
const sampleImg = 'sampleImg';
const fallbackSrc = 'fallbackSrc';

const createComponent = TestUtils.makeCreateComponent(Artwork);

describe('Artwork', () => {
  // eslint-disable-next-line no-unused-vars
  let component, testRenderer, mockedContext;
  beforeAll(() => {
    mockedContext = mockContext();
  });

  beforeEach(async done => {
    [component, testRenderer] = createComponent(
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
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    done();
  });

  afterEach(() => {
    component = null; // eslint-disable-line no-unused-vars
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  // Getters / Setters
  it('should have Artwork as componentName', () => {
    expect(component.constructor.__componentName).toBe('Artwork');
  });

  it('has the correct static properties getter', () => {
    expect(component.constructor.properties).toMatchObject([
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
    expect(component.constructor.tags).toMatchObject([
      'Blur',
      'CenterImage',
      'FillColor',
      'ForegroundImage',
      'Gradient',
      'Image',
      'Item'
    ]);
  });

  it('should return the proper value for _shouldBlur getter', async done => {
    expect(component._shouldBlur).toBe(false);
    component.blur = true;
    await component.__updateSpyPromise;
    expect(component._shouldBlur).toBe(true);
    component.blur = false;
    component.format = 'circle';
    await component.__updateSpyPromise;
    expect(component._shouldBlur).toBe(true);
    component.format = 'square';
    await component.__updateSpyPromise;
    expect(component._shouldBlur).toBe(true);
    // Need to add case where code checks if image dimensions are equal
    done();
  });

  it('should return the proper values for _hasCenterImage', async done => {
    expect(component._hasCenterImage).toBe(false);
    component.format = 'circle';
    await component.__updateSpyPromise;
    expect(component._hasCenterImage).toBe(true);
    component.format = 'square';
    await component.__updateSpyPromise;
    expect(component._hasCenterImage).toBe(true);
    component.format = 'contain';
    await component.__updateSpyPromise;
    expect(component._hasCenterImage).toBe(true);
    // TODO: Need to check aspect ratio
    done();
  });

  it('will return the the actualAspectRatio', async done => {
    component.patch({
      w: 200,
      h: 100
    });
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    expect(component._actualAspectRatio).toBe('2x1');
    component.patch({
      w: 100,
      h: 100
    });
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    expect(component._actualAspectRatio).toBe('1x1');
    component.patch({
      w: 1920,
      h: 1080
    });
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    expect(component._actualAspectRatio).toBe('16x9');
    done();
  });

  it('returns default common aspect ratios for use with srcCallback', () => {
    expect(component._srcCallbackAspectRatios).toEqual([
      '16x9',
      '3x4',
      '4x3',
      '2x1',
      '1x1'
    ]);
  });

  it('will return _supportedAspectRatioHeights', () => {
    component.patch({
      w: 200,
      h: 100
    });
    expect(component._supportedAspectRatioHeights).toEqual([
      112.5, 266.6666666666667, 150, 100, 200
    ]);
    component.patch({
      w: 1920,
      h: 1080
    });
    expect(component._supportedAspectRatioHeights).toEqual([
      1080, 2560, 1440, 960, 1920
    ]);
  });

  it('should return the closest supported aspect ratio', () => {
    component.patch({
      w: 100,
      h: 99
    });
    expect(component._closestSupportedAspectRatio).toBe('1x1');
    component.patch({
      w: 1920,
      h: 1060
    });
    expect(component._closestSupportedAspectRatio).toBe('16x9');
    component._srcCallbackAspectRatios = ['1x1'];
    expect(component._closestSupportedAspectRatio).toBe('1x1');
  });

  it('returns proper value for _processedImageSrc', async done => {
    component.patch({
      w: 200,
      h: 100,
      src: 'testSrc'
    });
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    expect(component._processedImageSrc).toBe('testSrc');
    component.srcCallback = ({ closestAspectRatio, src, w, h }) => {
      return [closestAspectRatio, src, w, h].join('-');
    };
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    expect(component._processedImageSrc).toBe('2x1-testSrc-200-100');
    component.srcCallbackAspectRatios = ['16x9'];
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateSpyPromise;
    expect(component._processedImageSrc).toBe('16x9-testSrc-200-100');
    done();
  });

  it('will return src if defined then default to fallbackSrc', async done => {
    [component, testRenderer] = createComponent({
      h: 100,
      w: 100,
      fallbackSrc
    });
    setTimeout(() => {
      component._resolveLoading(); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    expect(component._Image.texture.src).toBe(fallbackSrc);
    component.src = sampleImg;
    await component.__updateSpyPromise;
    expect(component.src).toBe(sampleImg);
    done();
  });

  it('will call generatePromise on _setup and when src, w, and h is set', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100
      },
      {
        spyOnMethods: ['_generatePromise']
      }
    );
    expect(component._generatePromise).toHaveBeenCalledTimes(3);
    component._generatePromise.mockClear();
    component.src = sampleImg;
    expect(component._generatePromise).toHaveBeenCalledTimes(1);
    component._generatePromise.mockClear();
    component.w = 200;
    expect(component._generatePromise).toHaveBeenCalledTimes(1);
    component._generatePromise.mockClear();
    component.h = 200;
    expect(component._generatePromise).toHaveBeenCalledTimes(1);
    done();
  });

  // Lifecycle hook methods

  it('will set alpha to 0.001 on init', async done => {
    component._init();
    expect(component.alpha).toBe(0.001);
    done();
  });

  // Methods

  it('will set smooth to true if was previously undefined after first _update cycle', async done => {
    component._smooth = undefined;
    component._update();
    await component.__updateSpyPromise;
    expect(component._smooth).toBe(true);
    done();
  });

  it('will update fillColor if defined in componentStyles and remove the element if not required', async done => {
    component.fill = true;
    component.style = {
      fillColor: 0xfff663399
    };
    await component.__updateSpyPromise;
    expect(component._FillColor).not.toBeUndefined();
    expect(component._FillColor.color).toBe(0xfff663399);
    component.style = {
      fillColor: undefined
    };
    component.fill = false;
    await component.__updateSpyPromise;
    expect(component._FillColor).toBeUndefined();
    done();
  });

  it('will call resolveLoading on _Image txLoaded event', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_resolveLoading']
      }
    );
    component._Image.emit('txLoaded');
    await component.__resolveLoadingSpyPromise;
    expect(component._resolveLoading).toHaveBeenCalledTimes(1);
    done();
  });

  it('will call rejectLoading on _Image txError event', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_rejectLoading']
      }
    );
    component._Image.emit('txError');
    await component.__rejectLoadingSpyPromise;
    expect(component._rejectLoading).toHaveBeenCalledTimes(1);
    done();
  });

  it('will show the component after all other update methods have completed', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_showComponent']
      }
    );
    expect(component.alpha).toBe(0.001);
    component._Image.emit('txLoaded');
    await component.__showComponentSpyPromise;
    expect(component._transitions.alpha.targetValue).toBe(1); //TODO: How to use fastforward utility
    done();
  });

  it('will update the foreground image if defined and remove from tree if no longer required', async done => {
    expect(component._ForegroundImage).toBeUndefined();
    component.foregroundSrc = sampleImg;
    await component.__updateSpyPromise;
    expect(component._ForegroundImage).not.toBeUndefined();
    component.foregroundSrc = undefined;
    await component.__updateSpyPromise;
    expect(component._ForegroundImage).toBeUndefined();
    done();
  });

  it('will update the foregroundImage w/h if foregroundW & foregroundH is set on the component', async done => {
    component.patch({
      foregroundH: 100,
      foregroundSrc: sampleImg,
      foregroundW: 200
    });
    await component.__updateSpyPromise;
    expect(component._ForegroundImage.w).toBe(200);
    expect(component._ForegroundImage.h).toBe(100);
    done();
  });

  it('will update the forgroundImage with the correct aspect ratio if only foregroundW or foregroundH is set', async done => {
    component.patch({
      foregroundSrc: sampleImg,
      foregroundW: 200
    });
    await component.__updateSpyPromise;
    // Mock how the image would come back
    component._ForegroundImage.texture.getRenderWidth = () => 400;
    component._ForegroundImage.texture.getRenderHeight = () => 200;
    component._ForegroundImage.emit('txLoaded');
    expect(component._ForegroundImage.w).toBe(200);
    expect(component._ForegroundImage.h).toBe(100);
    component.patch({
      foregroundW: undefined,
      foregroundH: 100
    });
    component._ForegroundImage.emit('txLoaded');
    expect(component._ForegroundImage.w).toBe(200);
    expect(component._ForegroundImage.h).toBe(100);
    done();
  });

  it('should update the blur if set to true, then remove the Blur element if no longer required', async done => {
    [component, testRenderer] = createComponent(
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
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    expect(component._Blur).toBeUndefined();
    component.blur = true;
    await component.__updateBlurSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    expect(component._Blur.constructor.name).toBe('FastBlurComponent');
    component.blur = false;
    await component.__updateBlurSpyPromise;
    // Wait for transition to complete when fading out then remove the element
    await new Promise(resolve => {
      component._Blur._getTransition('alpha').once('finish', () => {
        resolve();
      });
    });
    expect(component._Blur).toBeUndefined();
    component.blur = true;
    await component.__updateBlurSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    component._smooth = false;
    component.blur = false;
    await component.__updateBlurSpyPromise;
    expect(component._Blur).toBeUndefined();
    done();
  });

  it('should blur if mode is "circle"', async done => {
    component.format = 'circle';
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    done();
  });

  it('should blur if mode is "square"', async done => {
    component.format = 'square';
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    done();
  });

  it('should blur if mode "contain" and the ratio is not equal to the Artwork ratio', async done => {
    component.format = 'contain';
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    component.patch({
      w: 640,
      h: 360,
      src: sampleImg
    });
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component._componentSrc.complete;
    component._aspectRatioEqual = true; // Force this value to for test
    await component.__showComponentSpyPromise;
    TestUtils.fastForward([component._Blur]);
    testRenderer.update(); // Force redraw
    expect(component._Blur).toBeUndefined();
    // Should remove with patch if _smooth is false
    component.src = fallbackSrc;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    component.src = sampleImg;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component._componentSrc.complete;
    component._aspectRatioEqual = true; // Force this value to for test
    component._smooth = false;
    await component.__showComponentSpyPromise;
    expect(component._Blur).toBeUndefined();
    done();
  });

  it('should call _updateCenterImage after the image has been loaded', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: sampleImg
      },
      {
        spyOnMethods: ['_updateCenterImage']
      }
    );
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__updateCenterImageSpyPromise;
    expect(component._updateCenterImage).toHaveBeenCalled();
    done();
  });

  it('_updateCenterImage should always remove the previous CenterImage element if exists and no longer required', async done => {
    component.format = 'circle';
    await component.__showComponentSpyPromise;
    expect(component._CenterImage).not.toBeUndefined();
    component.format = undefined;
    await component.__showComponentSpyPromise;
    expect(component._CenterImage).toBeUndefined();
    done();
  });

  it('_updateCenterImage should never call _updateFormatSquareCircle or _updateFormatContain if the src is equal to the fallbackSrc is true', async done => {
    component._updateFormatSquareCircle.mockClear();
    component._updateFormatContain.mockClear();
    component.format = 'circle';
    component.src = undefined;
    component.fallbackSrc = fallbackSrc;
    await component.__showComponentSpyPromise;
    expect(component._updateFormatSquareCircle).toHaveBeenCalledTimes(0);
    component.format = 'contain';
    await component.__showComponentSpyPromise;
    expect(component._updateFormatContain).toHaveBeenCalledTimes(0);
    done();
  });

  it('should update the foregroundImage if mode is contain', async done => {
    component._updateForegroundImage.mockClear();
    component.format = 'contain';
    await component.__showComponentSpyPromise;
    expect(component._updateForegroundImage).toHaveBeenCalledTimes(1);
    expect(component._CenterImage).not.toBeUndefined();
    done();
  });

  it('should accommodate portrait size images appropriately when in contain mode', async done => {
    component.src = sampleImg;
    component.format = 'contain';
    component.w = 400;
    component.h = 200;
    component._updateForegroundImage.mockRestore();
    const _updateForegroundImage =
      component._updateForegroundImage.bind(component); // Clone function so it is not modified when mocked
    component._updateForegroundImage = jest
      .fn()
      .mockImplementation(function () {
        component._Image.texture.source.w = 100;
        component._Image.texture.source.h = 200;
        _updateForegroundImage();
      });
    component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    await component.__updateImageSpyPromise;
    expect(component._CenterImage.w).toBe(200 * (100 / 200));
    expect(component._CenterImage.h).toBe(component.h);
    component.w = 100;
    component.h = 200;
    component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    await component.__updateImageSpyPromise;
    expect(component._CenterImage.w).toBe(100);
    expect(component._CenterImage.h).toBe(100 * (200 / 100));
    done();
  });

  it('should accommodate landscape size images appropriately when in contain mode', async done => {
    component.src = sampleImg;
    component.format = 'contain';
    component.w = 400;
    component.h = 200;
    component._updateForegroundImage.mockRestore();
    const _updateForegroundImage =
      component._updateForegroundImage.bind(component); // Clone function so it is not modified when mocked
    component._updateForegroundImage = jest
      .fn()
      .mockImplementation(function () {
        component._Image.texture.source.h = 100;
        component._Image.texture.source.w = 200;
        _updateForegroundImage();
      });
    component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    await component.__updateCenterImageSpyPromise;
    expect(component._CenterImage.w).toBe(400);
    expect(component._CenterImage.h).toBe(200);
    component.w = 100;
    component.h = 200;
    component._Image.emit('txLoaded');
    await component.__updateCenterImageSpyPromise;
    expect(component._CenterImage.w).toBe(100);
    expect(component._CenterImage.h).toBe(50);
    done();
  });

  it('should remove the centerImage and return if in contain mode and the image fails', async done => {
    component.src = sampleImg;
    component.format = 'contain';
    component.w = 400;
    component.h = 200;
    component.fallbackSrc = 'fallbackSrcImage';
    component._Image.emit('txLoaded');
    await component.__updateSpyPromise;
    expect(component._src).toBe(sampleImg);
    expect(component._CenterImage).not.toBeUndefined();
    component.src = 'brokenImage';
    setTimeout(() => {
      component._Image.emit('txError'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 0);
    await component.__updateSpyPromise;
    expect(component.src).toBe('fallbackSrcImage');
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 0);
    await component.__updateCenterImageSpyPromise;
    expect(component._CenterImage).toBeUndefined();
    done();
  });

  it('should remove the centerImage and return if in square mode and the image fails', async done => {
    component.src = sampleImg;
    component.format = 'square';
    component.w = 400;
    component.h = 200;
    component.fallbackSrc = 'fallbackSrcImage';
    component._Image.emit('txLoaded');
    await component.__updateSpyPromise;
    expect(component._src).toBe(sampleImg);
    expect(component._CenterImage).not.toBeUndefined();
    component.src = 'brokenImage';
    setTimeout(() => {
      component._Image.emit('txError'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 0);
    await component.__updateSpyPromise;
    expect(component.src).toBe('fallbackSrcImage');
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 0);
    await component.__updateCenterImageSpyPromise;
    expect(component._CenterImage).toBeUndefined();
    done();
  });

  it('should remove the centerImage and return if in circle mode and the image fails', async done => {
    component.src = sampleImg;
    component.format = 'circle';
    component.w = 400;
    component.h = 200;
    component.fallbackSrc = 'fallbackSrcImage';
    component._Image.emit('txLoaded');
    await component.__updateSpyPromise;
    expect(component._src).toBe(sampleImg);
    expect(component._CenterImage).not.toBeUndefined();
    component.src = 'brokenImage';
    setTimeout(() => {
      component._Image.emit('txError'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 0);
    await component.__updateSpyPromise;
    expect(component.src).toBe('fallbackSrcImage');
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 0);
    await component.__updateCenterImageSpyPromise;
    expect(component._CenterImage).toBeUndefined();
    done();
  });

  it('should return a square image texture that has a total size that is equal to the total component height minus the style.padding * 2', async done => {
    component.format = 'square';
    await component.__showComponentSpyPromise;
    expect(component._CenterImage.w).toBe(component._CenterImage.h);
    expect(component._CenterImage.w).toBe(
      component.w - component.style.padding * 2
    );
    done();
  });

  it('should update scale', async done => {
    component.scale = true;
    component._updateScale();
    expect(component._Image).not.toBeUndefined();
    expect(component._Image.scale).not.toBeUndefined();
    done();
  });

  it('should add a gradient overlay if gradient is set to true and should remove the Gradient element if no longer required', async done => {
    component.gradient = true;
    await component.__showComponentSpyPromise;
    expect(component._Gradient).not.toBeUndefined();
    component.gradient = false;
    await component.__showComponentSpyPromise;
    TestUtils.fastForward([component._Gradient]);
    testRenderer.update(); // Force redraw
    expect(component._Gradient).toBeUndefined();
    component.gradient = true;
    await component.__showComponentSpyPromise;
    expect(component._Gradient).not.toBeUndefined();
    component._smooth = false;
    component.gradient = false;
    await component.__showComponentSpyPromise;
    expect(component._Gradient).toBeUndefined();
    component.gradient = true;
    await component.__showComponentSpyPromise;
    TestUtils.fastForward([component._Gradient]);
    expect(component._Gradient).not.toBeUndefined();
    done();
  });

  it('should update the Image element with the value of src, and remove the texture if no longer required', async done => {
    expect(component._Image.texture).not.toBeNull();
    component.src = undefined;
    await component.__updateImageSpyPromise;
    expect(component._Image.texture.src).toBe(
      './images/default_background.png'
    );
    expect(component._Image).not.toBeUndefined();
    done();
  });

  it('should set this._aspectRatioEqual back to false if new src is set', async done => {
    expect(component._aspectRatioEqual).toBe(false);
    component._aspectRatioEqual = true;
    expect(component._aspectRatioEqual).toBe(true);
    component.src = fallbackSrc;
    await component.__updateImageSpyPromise;
    expect(component._aspectRatioEqual).toBe(false);
    done();
  });

  it('should update the radius by patching RoundedRectangle shader if defined in style and greater than 0', async done => {
    expect(component.shader).toBeNull();
    component.style = {
      radius: 10
    };
    await component.__showComponentSpyPromise;
    expect(component.shader.constructor.name).toBe('RoundedRectangleShader');
    done();
  });

  it('should use fallback image if src image fails to load', async done => {
    [component, testRenderer] = createComponent(
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
    setTimeout(() => {
      component._Image.emit('txError'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__handleImageLoadErrorSpyPromise;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // TODO: Simulate image loading with emiting txLoaded on the image
    }, 500);
    await component.__showComponentSpyPromise;
    expect(component._Image.texture.src).toBe(fallbackSrc);
    done();
  });
});
