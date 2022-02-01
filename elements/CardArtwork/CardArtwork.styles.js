import blackBackground from '../../Styles/assets/black_background_tile';

export default theme => ({
  blurBackgroundColor: theme.palette.getHexColor(
    theme.palette.grey[90],
    theme.palette.opacity[3]
  ),
  blur: 4,
  padding: 0.15,
  src: blackBackground
});
