import Column from '../components/Column';
import Icon from '../components/Icon';
import NavigationManager from '../components/NavigationManager';

declare namespace LightningUIAugmentations {
  export interface FireAncestorsMap
    extends Column.FireAncestorsMap,
      Icon.FireAncestorsMap,
      NavigationManager.FireAncestorsMap {}
}

export default LightningUIAugmentations;
