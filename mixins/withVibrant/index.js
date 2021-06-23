import withStyles from '../../mixins/withStyles';
import Vibrant from 'node-vibrant';
import { getValidColor } from '../../Styles/Styles';

export const styles = theme => ({});

export default Base =>
  class withVibrant extends withStyles(Base, styles) {
    _init() {}
    static get name() {
      return Base.name;
    }

    _setSrc(src) {
      this._loadVibrant(src);
      return super._setSrc ? super._setSrc(src) : src;
    }

    set src(src) {
      super.src = src;
      this._loadVibrant(src);
    }

    _loadVibrant(src) {
      // if the global theme has applied the withVibrant mixin
      // but the component's styles have overriden it to turn it off
      // do not request the palette
      if (this.styles.withVibrant !== false) {
        this._vibrantPromise = Vibrant.from(src)
          .getPalette()
          .then(palette => {
            this._vibrantPalette = palette;
            this.vibrantCallback();
          });
      }
    }

    vibrantCallback() {
      if (!super.vibrantCallback) {
        throw new Error('Parent must implement vibrantCallback method');
      }
      if (this._vibrantPalette) {
        super.vibrantCallback();
      }
    }

    get vibrantPalette() {
      return this._vibrantPromise.then(() => this._vibrantPalette);
    }

    printColors() {
      if (this._vibrantPalette) {
        Object.keys(this._vibrantPalette).forEach(key => {
          console.log(
            key,
            this._vibrantPalette[key].hex,
            this._vibrantPalette[key].population,
            getValidColor(this._vibrantPalette[key].hex)
          );
        });
      }
    }

    _getColor(color) {
      if (
        this._vibrantPalette &&
        this._vibrantPalette[color] &&
        this._vibrantPalette[color].hex &&
        this._vibrantPalette[color].population > 0
      ) {
        return getValidColor(this._vibrantPalette[color].hex);
      }
      return;
    }

    get vibrant() {
      return this._getColor('Vibrant');
    }

    get lightVibrant() {
      return this._getColor('LightVibrant');
    }

    get darkVibrant() {
      return this._getColor('DarkVibrant');
    }

    get muted() {
      return this._getColor('Muted');
    }

    get lightMuted() {
      return this._getColor('LightMuted');
    }

    get darkMuted() {
      return this._getColor('DarkMuted');
    }

    get vibrantMaterial() {
      return this.darkMuted || this.darkVibrant || null;
    }

    get vibrantFill() {
      return this.darkMuted || this.darkVibrant || null;
    }

    get vibrantShadow() {
      return this.lightMuted || this.lightVibrant || null;
    }

    get vibrantFocusRing() {
      return this.vibrant || this.muted || null;
    }
  };
