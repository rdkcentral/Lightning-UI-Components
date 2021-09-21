import ActionButton from './ActionButton';
import ActionButtonSmallStyles from './ActionButtonSmall.styles';
import { withStyles } from '../../mixins';

export const ActionButtonSmall = withStyles(
  class ActionButtonSmall extends ActionButton {},
  ActionButtonSmallStyles
);
