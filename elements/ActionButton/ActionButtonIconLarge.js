import { ActionButtonLarge } from './ActionButtonLarge';
import { withStyles } from '../../mixins';
import ActionButtonIconLargeStyles from './ActionButtonIconLarge.styles';

export const ActionButtonIconLarge = withStyles(
  class ActionButtonIconLarge extends ActionButtonLarge {
    _construct() {
      super._construct();
      this._fixed = true;
    }
  },
  ActionButtonIconLargeStyles
);
