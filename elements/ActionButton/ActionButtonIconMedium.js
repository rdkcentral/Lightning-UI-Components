import { ActionButtonMedium } from '.';
import ActionButtonIconMediumStyles from './ActionButtonIconMedium.styles';
import { withStyles } from '../../mixins';

export const ActionButtonIconMedium = withStyles(
  class ActionButtonIconMedium extends ActionButtonMedium {
    _construct() {
      super._construct();
      this._fixed = true;
    }
  },
  ActionButtonIconMediumStyles
);
