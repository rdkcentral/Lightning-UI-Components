import Button from '../components/Button';
import Column from '../components/Column';
import Icon from '../components/Icon';
import NavigationManager from '../components/NavigationManager';

declare namespace LightningUIAugmentations {
  export interface FireAncestorsMap {
    Button: Button.FireAncestorsMap;
    Column: Column.FireAncestorsMap;
    Icon: Icon.FireAncestorsMap;
    NavigationManager: NavigationManager.FireAncestorsMap;
  }
}

export default LightningUIAugmentations;
