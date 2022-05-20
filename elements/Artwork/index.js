import lng from '@lightningjs/core';
import { getValidColor } from '../../Styles/Colors';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import Base from '../../Base';
import Gradient from '../Gradient';
import styles from './Artwork.styles';
import context from '../../context';
import { reduceFraction } from '../../utils';

class Artwork extends Base {
  static get __componentName() {
    return 'Artwork';
  }

  static get properties() {
    return [
      'blur',
      'fallbackSrc',
      'foregroundH',
      'foregroundSrc',
      'foregroundW',
      'gradient',
      'mode',
      'src',
      'fill',
      'shouldScale',
      'srcCallback',
      'srcCallbackAspectRatios'
    ];
  }

  static get tags() {
    return [
      'Blur',
      'CenterImage',
      'FillColor',
      'ForegroundImage',
      'Gradient',
      'Image',
      'Item'
    ];
  }

  static _template() {
    return {
      rtt: true,
      Image: {}
    };
  }

  get _shouldBlur() {
    const shouldBur = this._blur || this._hasCenterImage;
    this._Image.rtt = shouldBur; // rtt can cause a performance hit. Remove if not needed on Image
    return shouldBur; // Artwork should always use blur when circleImage is set to true
  }

  get _hasCenterImage() {
    return (
      -1 < ['circle', 'square'].indexOf(this._mode) ||
      ('contain' === this._mode && !this._aspectRatioEqual)
    );
  }

  set w(v) {
    super.w = v;
    this._componentSrc = this._generatePromise();
  }

  set h(v) {
    super.h = v;
    this._componentSrc = this._generatePromise();
  }

  get _actualAspectRatio() {
    if (!this.w || !this.h) return null;
    return reduceFraction(`${this.w}/${this.h}`).replace('/', 'x');
  }

  get _supportedAspectRatioHeights() {
    return this.srcCallbackAspectRatios.map(ratio => {
      const [rw, rh] = ratio.split('x').map(v => parseInt(v));
      const calcHeight = (this.w / rw) * rh;
      return calcHeight;
    });
  }

  get _closestSupportedAspectRatio() {
    const closest = this._supportedAspectRatioHeights.reduce((prev, curr) =>
      Math.abs(curr - this.h) < Math.abs(prev - this.h) ? curr : prev
    );
    return this.srcCallbackAspectRatios[
      this._supportedAspectRatioHeights.indexOf(closest)
    ];
  }

  get _processedImageSrc() {
    let src = this.src || this.fallbackSrc;
    if (
      src !== this.fallbackSrc &&
      this.srcCallback &&
      typeof this.srcCallback === 'function'
    ) {
      src = this.srcCallback({
        closestAspectRatio: this._closestSupportedAspectRatio,
        aspectRatio: this._actualAspectRatio,
        src: this.src,
        w: this.w,
        h: this.h
      });
    }
    return src;
  }

  get _gradientPatch() {
    return {
      alpha: !this._Gradient && this._smooth ? 0.001 : 1,
      gradientColor: getValidColor(this._componentStyles.gradientColor),
      h: this.h + 4,
      radius: this._componentStyles.radius,
      type: Gradient,
      w: this.w + 4,
      x: -2,
      y: -2,
      zIndex:
        this.core.findZContext().zIndex + this._componentStyles.zIndex.gradient
    };
  }

  _construct() {
    super._construct();
    this._srcCallbackAspectRatios = ['16x9', '3x4', '4x3', '2x1', '1x1'];
  }

  _setSrc(v) {
    this._componentSrc = this._generatePromise();
    return v;
  }

  _getFallbackSrc() {
    return (
      this._fallbackSrc ||
      (this._componentStyles && this._componentStyles.fallbackSrc)
    );
  }

  _generatePromise() {
    // When a new src, w, or h value is added promises need to be reset
    let resolvePromise, rejectPromise;
    const complete = new Promise(function (resolve, reject) {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    return {
      complete,
      resolve: resolvePromise,
      reject: rejectPromise
    };
  }

  _setup() {
    this.alpha = 0.001; // Hide on first load to stop flash of un-styled content on first creation
    this._componentSrc = this._generatePromise(); // Initialize loading promises
    this._aspectRatioEqual = false;
    // Wait for _Image to be added to the tree to set listeners
    this._Image.on('txLoaded', this._resolveLoading.bind(this));
    this._Image.on('txError', this._rejectLoading.bind(this));
  }

  _resolveLoading() {
    this._aspectRatioEqual = this._Image.texture.source
      ? parseFloat(this.finalW / this.finalH).toFixed(2) ===
        parseFloat(
          this._Image.texture.source.w / this._Image.texture.source.h
        ).toFixed(2)
      : false;
    this._componentSrc.resolve && this._componentSrc.resolve();
  }

  _rejectLoading(error) {
    this._componentSrc.reject && this._componentSrc.reject(error);
  }

  async _update() {
    this._updateRadius();
    this._updateGradient();
    this._updateImage();
    this._updateFillColor();
    this._updateForegroundImage();
    if (!this.src) {
      this._showComponent(); // Ensure that component displays even in the case that src is not set
      return;
    }
    try {
      // These actions are dependent on the image loading so we wait for the process to complete
      await this._componentSrc.complete;
      this._updateCenterImage();
      this._updateBlur();
      // After everything is setup fade in the Artwork component for the first time
      this._showComponent();
      this._updateScale();
    } catch (e) {
      this._handleImageLoadError();
    }
    if (this._smooth === undefined) this._smooth = true;
  }
  _updateScale() {
    if (this.shouldScale) {
      let imageScale;
      switch (typeof this._componentStyles.imageScale) {
        case 'function':
          imageScale = this._componentStyles.imageScale(this.w);
          break;
        case 'number':
          imageScale = this._componentStyles.imageScale;
          break;
        default:
          imageScale = 1;
      }
      this._Image.smooth = {
        pivotX: this._componentStyles.imageScalePivotX,
        pivotY: this._componentStyles.imageScalePivotY,
        scale: [
          imageScale,
          this._Image.scale < imageScale
            ? this._componentStyles.animationImageScaleEntrance
            : this._componentStyles.animationImageScaleExit
        ]
      };
    } else {
      const scale = 1;
      this._Image.smooth = {
        scale: [scale, this._componentStyles.animationImageScaleExit]
      };
    }
  }
  _handleImageLoadError() {
    if (this.src === this.fallbackSrc) return;
    context.error(`Image ${this._src} failed to load`);
    if (this.fallbackSrc && this.fallbackSrc !== this.src) {
      this.src = this.fallbackSrc;
    }
  }

  _showComponent() {
    this.smooth = {
      alpha: [1, this._componentStyles.animationComponentEntrance]
    };
  }

  async _updateForegroundImage() {
    if (!this._foregroundSrc) {
      if (this._ForegroundImage) {
        this.patch({
          ForegroundImage: undefined
        });
      }
      return;
    }

    const foregroundImagePatch = {
      mount: 0.5,
      x: this.w / 2,
      y: this.h / 2,
      zIndex:
        this.core.findZContext().zIndex +
        this._componentStyles.zIndex.foreground,
      texture: {
        type: lng.textures.ImageTexture,
        src: this._foregroundSrc,
        hasAlpha: true
      }
    };

    if (this.foregroundW && this.foregroundH) {
      // The image size is already known so we can just patch it
      foregroundImagePatch.h = this.foregroundH;
      foregroundImagePatch.w = this.foregroundW;

      this.patch({
        ForegroundImage: foregroundImagePatch
      });
    } else if (this.foregroundW || this.foregroundH) {
      // Load the image to get the aspect ratio before showing
      this.patch({
        ForegroundImage: { ...foregroundImagePatch, alpha: 0.001 }
      });

      this._ForegroundImage.once('txLoaded', () => {
        const imageW = this._ForegroundImage.texture.getRenderWidth();
        const imageH = this._ForegroundImage.texture.getRenderHeight();
        this._ForegroundImage.patch({
          alpha: 1,
          w: this.foregroundH
            ? this.foregroundH * (imageW / imageH)
            : this.foregroundW,
          h: this.foregroundW
            ? this.foregroundW * (imageH / imageW)
            : this.foregroundH
        });
      });
    }

    this.patch({
      ForegroundImage: foregroundImagePatch
    });
  }

  _updateBlur() {
    if (
      (!this._shouldBlur ||
        (this._Image &&
          this._Image.texture &&
          this._Image.texture.src === this.fallbackSrc)) &&
      this._Blur
    ) {
      // Remove Blur element as it is not longer required
      if (this._smooth) {
        this._Blur._getTransition('alpha').once('finish', () => {
          // Clean up gradient after animation is complete
          this.patch({ Blur: undefined });
        });
        this._Blur.smooth = {
          alpha: [0, this._componentStyles.animationBlurExit]
        };
      } else {
        this.patch({
          Blur: undefined
        });
      }
      return;
    }
    // Create/update the Blur element
    if (!this._srcFailed && this._shouldBlur) {
      this.patch({
        Blur: {
          alpha: !this._Blur && this._smooth ? 0.001 : 1, // If the Blur element already exists there is no need to fade it in again
          amount: this._componentStyles.blur,
          zIndex:
            this.core.findZContext().zIndex + this._componentStyles.zIndex.blur,
          content: {
            Image: {
              h: this.h,
              texture: this._Image.getTexture(),
              w: this.w
            }
          },
          h: this.h,
          rtt: true,
          type: lng.components.FastBlurComponent,
          w: this.w
        }
      });

      if (this._Blur.alpha < 1) {
        this._Blur.smooth = {
          alpha: [1, this._componentStyles.animationBlurEntrance]
        };
      }
    }
  }

  _updateCenterImage() {
    if (this.mode === 'contain') {
      this._updateModeContain();
    } else if (this.mode === 'circle' || this.mode === 'square') {
      this._updateModeSquareCircle();
    } else if (this._CenterImage) {
      // Remove the center image element if no longer required
      this.patch({
        CenterImage: undefined
      });
    }
  }

  _updateModeContain() {
    if (
      (this._CenterImage && this._CenterImage.mode !== this.mode) ||
      this.src === this.fallbackSrc ||
      this._aspectRatioEqual
    ) {
      // Make sure previous mode is propertly cleaned up
      this.patch({
        CenterImage: undefined
      });

      if (this.src === this.fallbackSrc || this._aspectRatioEqual) {
        this._Image.alpha = 1;
        return; // If is fallback image or the aspect ratio already fits the space there is no need to proceed
      }
    }

    let imageW;
    let imageH;

    const ratioW = Math.abs(
      this._Image.texture.source.w / this._Image.texture.source.h
    );

    const ratioH = Math.abs(
      this._Image.texture.source.h / this._Image.texture.source.w
    );

    if (this._Image.texture.source.w < this._Image.texture.source.h) {
      // portrait
      if (this.h * ratioW < this.w) {
        // make sure it is set to show 100% height
        imageW = this.h * ratioW;
        imageH = this.h;
      } else {
        // make 100% width

        imageW = this.w;
        imageH = this.w * ratioH;
      }
    } else if (this._Image.texture.source.w > this._Image.texture.source.h) {
      // landscape
      if (this.w * ratioH < this.h) {
        // make sure it is set to show 100% w
        imageW = this.w;
        imageH = this.w * ratioH;
      } else {
        // make 100% width
        imageW = this.h * ratioW;
        imageH = this.h;
      }
    } else {
      // render a square
      imageW = Math.min(this.w, this.h);
      imageH = imageW;
    }

    this.patch({
      CenterImage: {
        mode: this.mode,
        mount: 0.5,
        w: imageW,
        h: imageH,
        x: this.w / 2,
        y: this.h / 2,
        zIndex:
          this.core.findZContext().zIndex +
          this._componentStyles.zIndex.centerImage,
        texture: {
          src: this._processedImageSrc,
          resizeMode: {
            h: imageH,
            type: 'cover',
            w: imageW
          },
          type: lng.textures.ImageTexture
        }
      }
    });
  }

  _updateModeSquareCircle() {
    if (
      (this._CenterImage && this._CenterImage.mode !== this.mode) ||
      this.src === this.fallbackSrc
    ) {
      // Make sure previous mode is propertly cleaned up
      this.patch({
        CenterImage: undefined
      });
      if (this.src === this.fallbackSrc) return;
    }
    const imageSize =
      Math.min(this.w, this.h) - this._componentStyles.padding * 2;
    this.patch({
      CenterImage: {
        mode: this.mode,
        h: imageSize,
        shader: {
          radius:
            'circle' === this._mode
              ? imageSize / 2
              : this._componentStyles.centerImageRadius,
          type: lng.shaders.RoundedRectangle
        },
        w: imageSize,
        zIndex:
          this.core.findZContext().zIndex +
          this._componentStyles.zIndex.centerImage,
        Image: {
          h: imageSize,
          mount: 0.5,
          rtt: true, // Required for shader to work
          w: imageSize,
          x: this.w / 2,
          y: this.h / 2,
          texture: {
            src: this._Image.texture.src,
            resizeMode: {
              h: imageSize,
              type: 'cover',
              w: imageSize
            },
            type: lng.textures.ImageTexture
          }
        }
      }
    });
  }

  _updateGradient() {
    if (!this.gradient) {
      if (this._Gradient) {
        // Cleanup previous gradient
        if (this._smooth) {
          this._Gradient._getTransition('alpha').once('finish', () => {
            // Remove gradient if no longer required
            const transition =
              this._Gradient && this._Gradient._getTransition('alpha');
            if (!this.gradient && transition && transition.p === 1)
              this.patch({ Gradient: undefined });
          });
          this._Gradient.smooth = {
            alpha: [0, this._componentStyles.animationGradientExit]
          };
        } else {
          this.patch({ Gradient: undefined });
        }
      }
      return;
    }

    this._createGradient();
  }

  _createGradient() {
    this.patch({
      Gradient: this._gradientPatch // Allows for an easier way to extend and replace the gradient
    });
    if (this._smooth) {
      this._Gradient.smooth = {
        alpha: [1, this._componentStyles.animationGradientEntrance]
      };
    }
  }

  _updateImage() {
    this._aspectRatioEqual = false; // Set this back to false since we will not know the aspect ratio until after the image has loaded

    if (!this._processedImageSrc) {
      if (this._Image) {
        this._Image.texture = undefined;
      }
      return;
    }

    this._Image.patch({
      alpha:
        this.src !== this.fallbackSrc && (this._blur || this._hasCenterImage)
          ? 0.001
          : 1, // Prevent image from flashing on first load if mode requires a center image or blur is true
      h: this.h,
      texture: {
        type: lng.textures.ImageTexture,
        src: this._processedImageSrc,
        resizeMode: { type: 'cover', w: this.w, h: this.h }
      },
      w: this.w,
      zIndex:
        this.core.findZContext().zIndex + this._componentStyles.zIndex.image
    });
  }

  _updateFillColor() {
    if (!this.fill) {
      this.patch({
        FillColor: undefined
      });
    } else {
      this.patch({
        FillColor: {
          rect: true,
          w: this.w,
          h: this.h,
          color: this._componentStyles.fillColor,
          zIndex: 5,
          alpha: 0.7
        }
      });
    }
  }

  _updateRadius() {
    // Add shader to all items in component if greater than 0, remove shader otherwise.
    this.patch(
      this._componentStyles.radius
        ? {
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: this._componentStyles.radius
            }
          }
        : { shader: undefined }
    );
  }
}

export default withExtensions(withStyles(Artwork, styles));
