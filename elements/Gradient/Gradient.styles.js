export const base = theme => ({
  gradientTop: theme.colors.transparent,
  radius: theme.radius.none
});

export const palette = theme => ({
  neutral: { gradientColor: theme.colors.material },
  inverse: { gradientColor: theme.colors.coreNeutral },
  brand: { gradientColor: theme.colors.coreBrand }
});
