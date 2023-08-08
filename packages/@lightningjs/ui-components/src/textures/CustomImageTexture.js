import lng from '@lightningjs/core';

/**
 * Represents an image texture that supports loading blob images and SVG strings without using web workers.
 */

/**
 * Checks the file type based on the given string.
 * @param {string} str - The input string to check.
 * @returns {string} The file type.
 */
function checkFileType(str) {
  if (str.startsWith('<svg')) {
    return 'SVG';
  } else if (str.startsWith('blob:')) {
    return 'Blob';
  } else if (/\.(jpeg|jpg|gif|png|svg)$/i.test(str)) {
    return 'Image';
  } else {
    return 'Unknown';
  }
}

/**
 * Creates an SVG canvas.
 * @param {Function} cb - The callback function.
 * @param {object} stage - The stage object.
 * @param {string} url - The URL of the SVG.
 * @param {number} w - The width of the canvas.
 * @param {number} h - The height of the canvas.
 */
function createSvg(cb, stage, url, w, h) {
  const canvas = stage.platform.getDrawingCanvas();
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;

  const img = new Image();
  img.onload = () => {
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    cb(null, { source: canvas, w, h });
  };
  img.onerror = err => {
    cb(err);
  };

  // On the PS4 platform setting the `crossOrigin` attribute on images
  // can cause CORS failures.
  if (!lng.Utils.isPS4) {
    img.crossOrigin = 'Anonymous';
  }

  img.src = url;
}

/**
 * Loads an image from the given source.
 * @param {object} params - The parameters object.
 * @param {string} params.src - The source URL of the image.
 * @param {Function} cb - The callback function.
 * @returns {Function} A cancel callback function.
 */
function imageLoader({ src }, cb) {
  const image = new Image();

  // On the PS4 platform setting the `crossOrigin` attribute on
  // images can cause CORS failures.
  if (!(src.substr(0, 5) == 'data:') && !lng.Utils.isPS4) {
    image.crossOrigin = 'Anonymous';
  }
  image.onerror = function () {
    // Ignore error message when cancelled.
    if (image.src) {
      return cb('Image load error');
    }
  };
  image.onload = function () {
    cb(null, {
      source: image,
      renderInfo: { src: src, compressed: false },
      hasAlpha: true
    });
  };

  image.src = src;

  return function () {
    // Cancel Callback
    image.onerror = null;
    image.onload = null;
    image.removeAttribute('src');
  };
}

/**
 * Represents an image texture.
 */
export default class CustomImageTexture extends lng.Texture {
  /**
   * Creates a new ImageTexture instance.
   * @param {object} stage - The stage object.
   */
  constructor(stage) {
    super(stage);

    this._src = undefined;
    this._hasAlpha = false;
  }

  /**
   * Gets the source URL of the image.
   * @returns {string} The source URL.
   */
  get src() {
    return this._src;
  }

  /**
   * Sets the source URL of the image.
   * @param {string} v - The source URL.
   */
  set src(v) {
    if (this._src !== v) {
      this._src = v;
      this._changed();
    }
  }

  /**
   * Gets the flag indicating whether the image has an alpha channel.
   * @returns {boolean} The flag value.
   */
  get hasAlpha() {
    return this._hasAlpha;
  }

  /**
   * Sets the flag indicating whether the image has an alpha channel.
   * @param {boolean} v - The flag value.
   */
  set hasAlpha(v) {
    if (this._hasAlpha !== v) {
      this._hasAlpha = v;
      this._changed();
    }
  }

  /**
   * Gets the width of the image.
   * @returns {number} The width value.
   */
  get w() {
    return this._w;
  }

  /**
   * Sets the width of the image.
   * @param {number} l - The width value.
   */
  set w(l) {
    this._w = l;
    this._changed();
  }

  /**
   * Gets the height of the image.
   * @returns {number} The height value.
   */
  get h() {
    return this._h;
  }

  /**
   * Sets the height of the image.
   * @param {number} l - The height value.
   */
  set h(l) {
    this._h = l;
    this._changed();
  }

  /**
   * Checks if the image texture is valid.
   * @returns {boolean} True if valid, otherwise false.
   */
  _getIsValid() {
    return !!this._src;
  }

  /**
   * Gets the lookup ID of the image texture.
   * @returns {string} The lookup ID.
   */
  _getLookupId() {
    return this._src;
  }

  /**
   * Gets the source loader function for the image texture.
   * @returns {Function} The source loader function.
   */
  _getSourceLoader() {
    const w = this._w;
    const h = this._h;
    let src = this._src;
    const hasAlpha = this._hasAlpha;
    if (this.stage.getOption('srcBasePath')) {
      const fc = src.charCodeAt(0);
      if (
        src.indexOf('//') === -1 &&
        ((fc >= 65 && fc <= 90) || (fc >= 97 && fc <= 122) || fc == 46)
      ) {
        // Alphabetical or dot: prepend base path.
        src = this.stage.getOption('srcBasePath') + src;
      }
    }

    return cb => {
      const fileType = checkFileType(src);
      switch (fileType) {
        case 'SVG':
          return createSvg(
            cb,
            this.stage,
            `data:image/svg+xml,${encodeURIComponent(src)}`,
            w,
            h
          );

        case 'Blob':
          return imageLoader({ src }, cb);
        default:
          return this.stage.platform.loadSrcTexture(
            { src: src, hasAlpha: hasAlpha },
            cb
          );
      }
    };
  }

  /**
   * Gets the non-default properties of the image texture.
   * @returns {object} The non-default properties.
   */
  getNonDefaults() {
    const obj = super.getNonDefaults();
    if (this._src) {
      obj.src = this._src;
    }
    return obj;
  }
}
