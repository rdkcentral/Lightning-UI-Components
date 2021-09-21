import ActionButton from './ActionButton';
import { withStyles } from '../../mixins';
import ActionButtonLargeStyles from './ActionButtonLarge.styles';

export const ActionButtonLarge = withStyles(
  class ActionButtonLarge extends ActionButton {},
  ActionButtonLargeStyles
);
