export const base = theme => ({
  gradientTop: theme.color.fillTransparent,
  radius: theme.radius.none
});

export const tone = theme => ({
  neutral: { gradientColor: theme.color.material },
  inverse: { gradientColor: theme.color.fillNeutral },
  brand: { gradientColor: theme.color.fillBrand }
});
