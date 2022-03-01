import TestUtils from '../../test/lightning-test-utils';
import Artwork from '.';
import { mockContext } from '../../test/MockContextUtils';
const trollsImage = TestUtils.pathToDataURI(
  'assets/images/Trolls_World_Tour_16x9.jpg'
);
const fallbackImage = TestUtils.pathToDataURI(
  'assets/images/black_background_tile.png'
);
const logo = TestUtils.pathToDataURI('assets/images/Xfinity-logo.png');

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
        src: trollsImage
      },
      {
        spyOnMethods: [
          '_update',
          '_updateRadius',
          '_updateGradient',
          '_updateImage',
          '_updateLogoImage',
          '_alignLogoImage',
          '_updateCenterImage',
          '_updateBlur',
          '_showComponent',
          '_updateForegroundCircleImage',
          '_updateForegroundImage'
        ]
      }
    );
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
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
      'mode',
      'fallbackSrc',
      'gradient',
      'logo',
      'src'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(component.constructor.tags).toMatchObject([
      'Blur',
      'CenterImage',
      'Gradient',
      'Image',
      'Item',
      'Logo'
    ]);
  });

  it('should return the proper value for _shouldBlur getter', async done => {
    expect(component._shouldBlur).toBe(false);
    component.blur = true;
    await component.__updateSpyPromise;
    expect(component._shouldBlur).toBe(true);
    component.blur = false;
    component.mode = 'circle';
    await component.__updateSpyPromise;
    expect(component._shouldBlur).toBe(true);
    component.mode = 'square';
    await component.__updateSpyPromise;
    expect(component._shouldBlur).toBe(true);
    // Need to add case where code checks if image dimensions are equal
    done();
  });

  it('should return the proper values for _hasCenterImage', async done => {
    expect(component._hasCenterImage).toBe(false);
    component.mode = 'circle';
    await component.__updateSpyPromise;
    expect(component._hasCenterImage).toBe(true);
    component.mode = 'square';
    await component.__updateSpyPromise;
    expect(component._hasCenterImage).toBe(true);
    component.mode = 'contain';
    await component.__updateSpyPromise;
    expect(component._hasCenterImage).toBe(true);
    // TODO: Need to check aspect ratio
    done();
  });

  it('will return _src if defined then default to _fallbackSrc', async done => {
    [component, testRenderer] = createComponent({
      h: 100,
      w: 100,
      fallbackSrc: fallbackImage
    });
    setTimeout(() => {
      component._resolveLoading(); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    expect(component.src).toBe(fallbackImage);
    component.src = trollsImage;
    await component.__updateSpyPromise;
    expect(component.src).toBe(trollsImage);
    done();
  });

  it('will call generatePromise when src is set', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100
      },
      {
        spyOnMethods: ['_generatePromise']
      }
    );
    expect(component._generatePromise).toHaveBeenCalledTimes(1);
    component.src = trollsImage;
    expect(component._generatePromise).toHaveBeenCalledTimes(2);
    done();
  });

  it('will set smooth to false when value for setMode is changed', async done => {
    expect(component._smooth).toBe(true);
    component.mode = 'circle';
    expect(component._smooth).toBe(false);
    done();
  });

  // Lifecycle hook methods

  it('will set alpha to 0.001 on init', async done => {
    component._init();
    expect(component.alpha).toBe(0.001);
    done();
  });

  // Methods

  it('will call resolveLoading on _Image txLoaded event', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: trollsImage
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
        src: trollsImage
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

  it.skip('will call the appropriate methods on update', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: trollsImage
      },
      {
        spyOnMethods: [
          '_update',
          '_updateRadius',
          '_updateGradient',
          '_updateImage',
          '_updateLogoImage',
          '_updateCenterImage',
          '_updateBlur',
          '_showComponent'
        ]
      }
    );
    component._Image.emit('txLoaded');
    await component.__updateSpyPromise;
    expect(component._updateRadius).toHaveBeenCalledTimes(1);
    expect(component._updateGradient).toHaveBeenCalledTimes(1);
    expect(component._updateLogoImage).toHaveBeenCalledTimes(1);
    expect(component._updateCenterImage).toHaveBeenCalledTimes(1);
    expect(component._updateBlur).toHaveBeenCalledTimes(1);
    expect(component._showComponent).toHaveBeenCalledTimes(1);
    done();
  });

  it('will show the component after all other update methods have completed', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: trollsImage
      },
      {
        spyOnMethods: ['_showComponent']
      }
    );
    expect(component.alpha).toBe(0.001);
    await component.__showComponentSpyPromise;
    expect(component._transitions.alpha.targetValue).toBe(1); //TODO: How to use fastforward utility
    done();
  });

  it('will update the logo image if defined and remove from tree if no longer required', async done => {
    expect(component._Logo).toBeUndefined();
    component.logo = logo;
    await component.__updateSpyPromise;
    expect(component._Logo).not.toBeUndefined();
    component.logo = undefined;
    await component.__updateSpyPromise;
    expect(component._Logo).toBeUndefined();
    done();
  });

  it('will align the logo image at 50% of width if 16:9 is the ratio of the Artwork component. Otherwise it will show logo at 75%', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: trollsImage,
        logo
      },
      {
        spyOnMethods: ['_updateLogoImage', '_alignLogoImage']
      }
    );

    await component.__updateLogoImageSpyPromise;
    component._Logo.texture.getRenderWidth = () => 100;
    await component.__alignLogoImageSpyPromise;
    expect(component._Logo.w).toBe(100 * 0.75);
    component.patch({
      w: 640,
      h: 360
    });
    await component.__alignLogoImageSpyPromise;
    expect(component._Logo.w).toBe(640 * 0.5);
    done();
  });

  it('will call _alignLogoImage once the logo is loaded', async done => {
    component.logo = logo;
    await component.__updateLogoImageSpyPromise;
    component._Logo.emit('txLoaded');
    expect(component._alignLogoImage).toHaveBeenCalled();
    done();
  });

  it('will use the style value logoPercentageX if specified', async done => {
    component.style.logoPercentageX = 0.25;
    component.logo = logo;
    await component.__updateLogoImageSpyPromise;
    component._Logo.texture.getRenderWidth = () => 100;
    component._Logo.emit('txLoaded');
    await component.__showComponentSpyPromise;
    setTimeout(() => {
      //TODO: Look into withThemeStyles and debounce _componentStyles does not pick up the style change right away
      expect(component._Logo.w).toBe(100 * 0.25);
      done();
    }, 500);
  });
  it('will use the style value logoPercentageY if specified', async done => {
    component.style.logoPercentageY = 0.25;
    component.logo = logo;
    await component.__updateLogoImageSpyPromise;
    component._Logo.texture.getRenderHeight = () => 100;
    component._Logo.emit('txLoaded');
    await component.__showComponentSpyPromise;
    setTimeout(() => {
      //TODO: Look into withThemeStyles and debounce _componentStyles does not pick up the style change right away
      expect(component._Logo.h).toBe(100 * 0.25);
      done();
    }, 500);
  });

  it('should update the blur if set to true, then remove the Blur element if no longer required', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: trollsImage
      },
      {
        spyOnMethods: ['_updateBlur']
      }
    );
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    expect(component._Blur).toBeUndefined();
    component.blur = true;
    await component.__updateBlurSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    expect(component._Blur.constructor.name).toBe('FastBlurComponent');
    component.blur = false;
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
    component.mode = 'circle';
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    done();
  });
  it('should blur if mode is "square"', async done => {
    component.mode = 'square';
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    done();
  });
  it('should blur if mode "contain" and the ratio is not equal to the Artwork ratio', async done => {
    component.mode = 'contain';
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    component.patch({
      w: 640,
      h: 360
    });
    component.src = fallbackImage;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    await component._componentSrc.complete;
    component._aspectRatioEqual = true; // Force this value to for test
    //component._smooth = false;
    await component.__showComponentSpyPromise;
    TestUtils.fastForward([component._Blur]);
    testRenderer.update(); // Force redraw
    expect(component._Blur).toBeUndefined();
    // Should remove with patch if _smooth is false
    component.src = trollsImage;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    await component.__showComponentSpyPromise;
    expect(component._Blur).not.toBeUndefined();
    component.src = fallbackImage;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
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
        src: trollsImage
      },
      {
        spyOnMethods: ['_updateCenterImage']
      }
    );
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    await component.__updateCenterImageSpyPromise;
    expect(component._updateCenterImage).toHaveBeenCalled();
    done();
  });
  it('_updateCenterImage should always remove the previous CenterImage element if exists and no longer required', async done => {
    component.mode = 'circle';
    await component.__showComponentSpyPromise;
    expect(component._CenterImage).not.toBeUndefined();
    component.mode = undefined;
    await component.__showComponentSpyPromise;
    expect(component._CenterImage).toBeUndefined();
    done();
  });

  it('_updateCenterImage should never call _updateForegroundCircleImage or _updateForegroundImage if the srcFailed is true', async done => {
    component._updateForegroundCircleImage.mockClear();
    component.mode = 'circle';
    component._srcFailed = true;
    await component.__showComponentSpyPromise;
    expect(component._updateForegroundCircleImage).toHaveBeenCalledTimes(0);
    component.mode = 'contain';
    await component.__showComponentSpyPromise;
    expect(component._updateForegroundCircleImage).toHaveBeenCalledTimes(0);
    done();
  });

  it('should update the foregroundImage if mode is contain', async done => {
    component._updateForegroundImage.mockClear();
    component.mode = 'contain';
    await component.__showComponentSpyPromise;
    expect(component._updateForegroundImage).toHaveBeenCalledTimes(1);
    expect(component._CenterImage).not.toBeUndefined();
    done();
  });

  it('should accommodate portrait size images appropriately when in contain mode', async done => {
    component.src = fallbackImage;
    component.mode = 'contain';
    component.w = 400;
    component.h = 200;
    component._updateForegroundImage.mockRestore();
    const _updateForegroundImage =
      component._updateForegroundImage.bind(component); // Clone function so it is not modified when mocked
    component._updateForegroundImage = jest
      .fn()
      .mockImplementation(function () {
        component._Image.texture.source.h = 200;
        component._Image.texture.source.w = 100;
        _updateForegroundImage();
      });
    component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    await component.__updateImageSpyPromise;
    expect(component._CenterImage.w).toBe(200 * (100 / 200));
    expect(component._CenterImage.h).toBe(component.h);
    component.w = 100;
    component.h = 200;
    await component.__updateImageSpyPromise;
    expect(component._CenterImage.w).toBe(100);
    expect(component._CenterImage.h).toBe(100 * (200 / 100));
    done();
  });

  it('should accommodate landscape size images appropriately when in contain mode', async done => {
    component.src = fallbackImage;
    component.mode = 'contain';
    component.w = 400;
    component.h = 200;
    component._updateForegroundImage.mockRestore();
    const _updateForegroundImage =
      component._updateForegroundImage.bind(component); // Clone function so it is not modified when mocked
    component._updateForegroundImage = jest
      .fn()
      .mockImplementation(function () {
        component._Image.texture.source.h = 50;
        component._Image.texture.source.w = 300;
        _updateForegroundImage();
      });
    // If scaling image to 100% width does not extend past the bounds
    component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    await component.__updateImageSpyPromise;
    expect(component._CenterImage.w).toBe(400);
    expect(component._CenterImage.h).toBe(400 * (50 / 300));
    // If scaling image to 100% width does extend past the bounds
    component.w = 300;
    component.h = 40;
    await component.__updateImageSpyPromise;
    expect(component._CenterImage.w).toBe(40 * (300 / 50));
    expect(component._CenterImage.h).toBe(40);
    done();
  });

  it('should not update the foregroundImage if mode is circle', async done => {
    component._updateForegroundImage.mockClear();
    component.mode = 'circle';
    await component.__showComponentSpyPromise;
    expect(component._updateForegroundImage).toHaveBeenCalledTimes(0);
    done();
  });

  it('should return a square image texture that has a total size that is equal to the total component height minus the style.padding * 2', async done => {
    component.mode = 'square';
    await component.__showComponentSpyPromise;
    expect(component._CenterImage.w).toBe(component._CenterImage.h);
    expect(component._CenterImage.w).toBe(
      component.w - component.style.padding * 2
    );
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
    done();
  });

  it('should update the Image element with the value of src, and remove the texture if no longer required', async done => {
    expect(component._Image.texture).not.toBeNull();
    component.src = undefined;
    await component.__updateImageSpyPromise;
    expect(component._Image.texture).toBeNull();
    expect(component._Image).not.toBeUndefined();
    done();
  });

  it('should set this._aspectRatioEqual back to false if new src is set', async done => {
    expect(component._aspectRatioEqual).toBe(false);
    component._aspectRatioEqual = true;
    expect(component._aspectRatioEqual).toBe(true);
    component.src = fallbackImage;
    await component.__updateImageSpyPromise;
    expect(component._aspectRatioEqual).toBe(false);
    done();
  });

  it('should set the alpha to 0.001 if component will have a centerImage', async done => {
    component.patch({
      src: fallbackImage,
      mode: 'circle'
    });
    await component.__updateImageSpyPromise;
    expect(component._Image.alpha).toBe(0.001);
    done();
  });

  it('should update the radius by patching RoundedRectangle shader if defined in style and greater than 0', async done => {
    expect(component.shader).toBeNull();
    component.style.radius = 10;
    await component.__showComponentSpyPromise;
    expect(component.shader.constructor.name).toBe('RoundedRectangleShader');
    done();
  });

  it('should use fallback image if src image fails to load', async done => {
    [component, testRenderer] = createComponent(
      {
        h: 100,
        w: 100,
        src: trollsImage,
        fallbackSrc: fallbackImage
      },
      {
        spyOnMethods: ['_showComponent', '_handleImageLoadError']
      }
    );
    setTimeout(() => {
      component._Image.emit('txError'); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    await component.__handleImageLoadErrorSpyPromise;
    setTimeout(() => {
      component._Image.emit('txLoaded'); // txLoaded events don't work in jest, need to add a way to mock globally
    }, 500);
    await component.__showComponentSpyPromise;
    expect(component._Image.texture.src).toBe(fallbackImage);
    done();
  });
});
