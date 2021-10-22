import { GREY, OPACITY, getHexColor } from '../../Styles';
export default theme => ({
  blurBackgroundColor: getHexColor(GREY[90], OPACITY[4]), //TODO: Get this from theme
  blur: 4,
  spacing: theme.spacing(2)
});
