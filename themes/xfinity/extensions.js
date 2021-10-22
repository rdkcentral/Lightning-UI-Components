import withFocusRing from '../../patterns/withFocusRing';

export default {
  global: base => withFocusRing(base)

  // Tile: Base =>
  //   class extends Base {
  //     _updateRadius() {
  //       super._updateRadius();
  //       console.log('override radius logic');
  //     }
  //   },

  // withFocusRing: Base =>
  //   class extends Base {
  //     _updateFocusRing() {
  //       super._updateFocusRing();
  //       console.log('apply new focus ring logic');
  //     }
  //   }
};
