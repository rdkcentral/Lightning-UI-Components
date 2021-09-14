import {
  ActionButtonIconMedium,
  iconMediumStyles,
  ActionButtonIconSmall,
  iconSmallStyles
} from '../ActionButton';
import { withStyles } from '../../mixins';

export const ControlMedium = withStyles(
  class ControlMedium extends ActionButtonIconMedium {},
  { radius: iconMediumStyles().w / 2 }
);

export const ControlSmall = withStyles(
  class ControlSmall extends ActionButtonIconSmall {},
  { radius: iconSmallStyles().w / 2 }
);

export default ControlMedium;
