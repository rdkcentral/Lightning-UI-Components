import { focusRingExtensionGenerator } from '../../extensions/FocusRing';
import { dropShadowExtensionGenerator } from '../../extensions/DropShadow';

export default [
  {
    targetComponent: ['Surface', 'Knob'],
    extension: focusRingExtensionGenerator({ zOffset: -2 })
  },

  {
    targetComponent: ['Surface'],
    extension: dropShadowExtensionGenerator({
      componentsToMask: ['Button'],
      zOffset: -1
    })
  }
];
