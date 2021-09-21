import { getHexColor } from '../../Styles';

export default theme => ({
  minWidth: 410,
  h: 72,
  background: {
    color: theme.palette.background.float
  },
  backgrounds: theme.palette.background,
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button1,
    color: theme.palette.text.light.primary
  },
  padding: theme.spacing(2),
  shadow: theme.materials.glow,
  icon: {
    color: theme.palette.text.light.primary,
    size: theme.sizes.icon.medium,
    spacing: theme.spacing(1)
  },
  loading: {
    color: getHexColor('ffffff', 24)
  },
  stroke: {
    weight: 2,
    color: theme.palette.grey[10]
  },
  focused: {
    background: { color: theme.palette.background.focus },
    icon: { color: theme.palette.text.dark.primary },
    text: { color: theme.palette.text.dark.primary }
  },
  getFocusScale: theme.getFocusScale
});
