export const base = theme => ({
  gradientTop: theme.color.transparent,
  radius: theme.radius.none
});

export const palette = theme => ({
  neutral: { gradientColor: theme.color.material },
  inverse: { gradientColor: theme.color.coreNeutral },
  brand: { gradientColor: theme.color.coreBrand }
});
