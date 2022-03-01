import lng from '@lightningjs/core';
import { getHexColor, getValidColor } from '../../Styles/Colors';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import Base from '../../Base';
import context from '../../context';
import Gradient from '../Gradient';
import styles from './Artwork.styles';

class Artwork extends Base {
  static get __componentName() {
    return 'Artwork';
  }

  static get properties() {
    return ['blur', 'mode', 'fallbackSrc', 'gradient', 'logo', 'src'];
  }

  static get tags() {
    return ['Blur', 'CenterImage', 'Gradient', 'Image', 'Item', 'Logo'];
  }

  static _template() {
    return {
      rtt: true,
      Image: {}
    };
  }

  get _shouldBlur() {
    return this._blur || this._hasCenterImage; // Artwork should always use blur when circleImage is set to true
  }

  get _hasCenterImage() {
    return (
      -1 < ['circle', 'square'].indexOf(this._mode) ||
      ('contain' === this._mode && !this._aspectRatioEqual)
    );
  }

  _getSrc() {
    return this._src || this._fallbackSrc;
  }

  _setSrc(v) {
    this._componentSrc = this._generatePromise(); // When a new src value is added promises need to be reset
    return v;
  }

  _setMode(v) {
    this._smooth = false; // Make sure smooth is set to false when changing to circleImage at runtime
    return v;
  }

  _generatePromise() {
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
    this._aspectRatioEqual =
      parseFloat(this.finalW / this.finalH).toFixed(2) ===
      parseFloat(
        this._Image.texture.source.w / this._Image.texture.source.h
      ).toFixed(2);
    this._componentSrc.resolve && this._componentSrc.resolve();
  }

  _rejectLoading(error) {
    this._componentSrc.reject && this._componentSrc.reject(error);
  }

  async _update() {
    this._updateRadius();
    this._updateGradient();
    if (
      (this.w !== this._Image && this._Image.w) ||
      (this.h !== this._Image && this._Image.h) ||
      this._src !==
        Boolean(this._Image && this._Image.texture && this._Image.texture.src)
    ) {
      this._updateImage();
    }
    this._updateLogoImage();
    if (!this._src) {
      this._showComponent(); // Ensure that component displays even in the case that src is not set
    }
    try {
      // These actions are dependent on the image loading so we wait for the process to complete
      await this._componentSrc.complete;
      this._updateCenterImage();
      this._updateBlur();
      // After everything is setup fade in the Artwork component for the first time
      this._showComponent();
      this._updateScale();
    } catch (err) {
      this._handleImageLoadError();
    }
  }

  _updateScale() {
    const scale = this._componentStyles.imageScale || 1;
    if (this._smooth) {
      this._Image.smooth = {
        scale: [
          scale,
          scale > 1
            ? {
                delay: this._componentStyles.imageScaleDelayDuration,
                duration: this._componentStyles.imageScaleDurationEntrance,
                timingFunction:
                  this._componentStyles.imageScaleTimingFunctionEntrance
              }
            : {
                delay: this._componentStyles.imageScaleDelayExit,
                duration: this._componentStyles.imageScaleDurationExit,
                timingFunction:
                  this._componentStyles.imageScaleTimingFunctionExit
              }
        ]
      };
    } else {
      this._Image.patch({ scale });
    }
  }

  _handleImageLoadError() {
    if (this._srcFailed) return;
    this._srcFailed = true;
    context.error(`Image ${this._src} failed to load`);
    if (this._fallbackSrc && this._fallbackSrc !== this._src) {
      this.src = this._fallbackSrc;
    }
  }

  _showComponent() {
    if (this._Image.alpha < 1) {
      this._smooth = false;
      this._Image.alpha = 1;
    }

    this._smooth = true; // Set smooth back to true if updating circleImage changed it to false
    this.smooth = {
      alpha: [
        1,
        {
          duration: this._componentStyles.componentAlphaDuration,
          delay: this._componentStyles.componentAlphaDelay,
          timingFunction: this._componentStyles.componentAlphaTimingFunction
        }
      ]
    };
  }

  _updateLogoImage() {
    if (!this._logo && this._Logo) {
      this.patch({
        Logo: undefined
      });
    }
    if (this._logo) {
      if (!this._Logo) {
        this.patch({
          Logo: {
            mount: 0.5,
            zIndex: 5,
            texture: {
              type: lng.textures.ImageTexture,
              src: this._logo,
              hasAlpha: true
            }
          }
        });
        this._Logo.once('txLoaded', () => {
          this._alignLogoImage();
        });
      } else {
        this._alignLogoImage();
      }
    }
  }

  _alignLogoImage() {
    const imageW = this._Logo.texture.getRenderWidth();
    const imageH = this._Logo.texture.getRenderHeight();

    if (imageW > imageH) {
      let newWMultiplier;
      if (this._componentStyles.logoPercentageX) {
        newWMultiplier =
          this._componentStyles.logoPercentageX < 1
            ? Math.abs(this._componentStyles.logoPercentageX)
            : 1;
      } else {
        newWMultiplier =
          parseFloat(this.w / this.h).toFixed(2) ===
          parseFloat(16 / 9).toFixed(2)
            ? 0.5
            : 0.75;
      }

      this._Logo.patch({
        x: this.w / 2,
        y: this.h / 2,
        w: this.w * newWMultiplier,
        h: this.w * newWMultiplier * (imageH / imageW)
      });
    } else {
      let newWMultiplier;
      if (this._componentStyles.logoPercentageY) {
        newWMultiplier =
          this._componentStyles.logoPercentageY < 1
            ? Math.abs(this._componentStyles.logoPercentageY)
            : 1;
      } else {
        newWMultiplier = 1;
      }

      this._Logo.patch({
        x: this.w / 2,
        y: this.h / 2,
        w: this.h * newWMultiplier * (imageW / imageH),
        h: this.h * newWMultiplier
      });
    }
  }

  _updateBlur() {
    if ((!this._shouldBlur || this._srcFailed) && this._Blur) {
      // Remove Blur element as it is not longer required
      if (this._smooth) {
        this._Blur._getTransition('alpha').once('finish', () => {
          // Clean up gradient after animation is complete
          this.patch({ Blur: undefined });
        });
        this._Blur.smooth = {
          alpha: [
            0,
            {
              duration: this._componentStyles.blurAlphaDuration,
              delay: this._componentStyles.blurAlphaDelay,
              timingFunction: this._componentStyles.blurAlphaTimingFunction
            }
          ]
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
          zIndex: 2,
          content: {
            Image: {
              h: this.h,
              texture: this._Image.getTexture(),
              w: this.w
            },
            ...(this._componentStyles.blurBackgroundColor &&
            this._componentStyles.blurBackgroundColorAlpha
              ? {
                  Background: {
                    color: getHexColor(
                      getValidColor(this._componentStyles.blurBackgroundColor),
                      this._componentStyles.blurBackgroundColorAlpha
                    ),
                    h: this.h,
                    rect: true,
                    w: this.w
                  }
                }
              : {})
          },
          h: this.h,
          rtt: true,
          type: lng.components.FastBlurComponent,
          w: this.w
        }
      });

      if (this._Blur.alpha < 1) {
        this._Blur.smooth = {
          alpha: [
            1,
            {
              duration: this._componentStyles.blurAlphaDuration,
              delay: this._componentStyles.blurAlphaDelay,
              timingFunction: this._componentStyles.blurAlphaTimingFunction
            }
          ]
        };
      }
    }
  }

  _updateCenterImage() {
    if (this._CenterImage) {
      this.patch({
        CenterImage: undefined
      });
    }
    if (!this._srcFailed) {
      if (-1 < ['circle', 'square'].indexOf(this._mode))
        this._updateForegroundCircleImage();
      if (-1 < ['contain'].indexOf(this._mode)) this._updateForegroundImage();
    }
  }

  _updateForegroundImage() {
    let imageW;
    let imageH;
    // if ('square' === this._mode) {
    //   imageW = Math.min(this.w, this.h) - this._componentStyles.padding * 2;
    //   imageH = imageW;
    // } else {
    // Check image dimensions, if same ratio as the artwork container do nothing
    if (this._aspectRatioEqual) {
      return;
    }

    this._smooth = false;
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
        mount: 0.5,
        w: imageW,
        h: imageH,
        x: this.w / 2,
        y: this.h / 2,
        zIndex: 3,
        texture: {
          src: this._src,
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

  _updateForegroundCircleImage() {
    const imageSize =
      Math.min(this.w, this.h) - this._componentStyles.padding * 2;
    this.patch({
      CenterImage: {
        h: imageSize,
        shader: {
          radius:
            'circle' === this._mode
              ? imageSize / 2
              : this._componentStyles.centerImageRadius,
          type: lng.shaders.RoundedRectangle
        },
        w: imageSize,
        zIndex: 4,
        Image: {
          h: imageSize,
          mount: 0.5,
          rtt: true, // Required for shader to work
          w: imageSize,
          x: this.w / 2,
          y: this.h / 2,
          texture: {
            src: this._src,
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
    if (!this._gradient && this._Gradient) {
      // Remove CircleImage element as it is not longer required
      if (this._smooth) {
        this._Gradient._getTransition('alpha').once('finish', () => {
          // Clean up gradient after animation is complete
          this.patch({ Gradient: undefined });
        });
        this._Gradient.smooth = {
          alpha: [
            0,
            {
              duration: this._componentStyles.gradientAlphaDuration,
              delay: this._componentStyles.gradientAlphaDelay,
              timingFunction: this._componentStyles.gradientAlphaTimingFunction
            }
          ]
        };
      } else {
        this.patch({ Gradient: undefined });
      }
      return;
    }
    if (this._gradient) {
      // Create/update the CircleImage element
      this.patch({
        Gradient: {
          alpha: !this._Gradient && this._smooth ? 0 : 1,
          gradientColor: getValidColor(this._componentStyles.gradientColor),
          h: this.h + 4,
          radius: 4,
          type: Gradient,
          w: this.w + 4,
          x: -2,
          y: -2,
          zIndex: 4
        }
      });
      if (this._smooth) {
        this._Gradient.smooth = {
          alpha: [
            1,
            {
              duration: this._componentStyles.gradientAlphaDuration,
              delay: this._componentStyles.gradientAlphaDelay,
              timingFunction: this._componentStyles.gradientAlphaTimingFunction
            }
          ]
        };
      }
    }
  }

  _updateImage() {
    if (!this._src) {
      if (this._Image) {
        this._Image.texture = undefined;
      }
      return;
    }
    this._aspectRatioEqual = false; // Set this back to false since we will not know the aspect ratio until after the image has loaded
    this._Image.patch({
      alpha: (this.alpha < 1 && this._blur) || this._hasCenterImage ? 0.001 : 1, // Prevent image from flashing on first load if mode requires a center image or blur is true
      h: this.h,
      rtt: true,
      texture: {
        type: lng.textures.ImageTexture,
        src: this._src,
        resizeMode: { type: 'cover', w: this.w, h: this.h }
      },
      w: this.w,
      zIndex: 1
    });
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
