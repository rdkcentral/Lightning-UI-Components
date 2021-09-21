import { ActionButtonSmall } from './ActionButtonSmall';
import ActionButtonIconSmallStyles from './ActionButtonIconSmall.styles';
import { withStyles } from '../../mixins';

export const ActionButtonIconSmall = withStyles(
  class ActionButtonIconSmall extends ActionButtonSmall {
    _construct() {
      super._construct();
      this._fixed = true;
    }
  },
  ActionButtonIconSmallStyles
);
