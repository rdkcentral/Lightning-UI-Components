import ActionButton from './ActionButton';
import ActionButtonXsmallStyles from './ActionButtonXsmall.styles';
import { withStyles } from '../../mixins';

export const ActionButtonXsmall = withStyles(
  class ActionButtonXsmall extends ActionButton {},
  ActionButtonXsmallStyles
);
