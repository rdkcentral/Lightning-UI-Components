export default theme => ({
  w: 64,
  h: 32,
  radius: 16,
  stroke: {
    weight: 4,
    color: theme.palette.grey[5]
  },
  knob: {
    size: 16
  },
  checked: {
    background: {
      color: theme.palette.green.default
    },
    knob: {
      color: theme.palette.grey[5],
      x: 38
    }
  },
  unchecked: {
    background: {
      color: theme.palette.grey[80]
    },
    knob: {
      color: theme.palette.grey[20],
      x: 8
    }
  }
});
