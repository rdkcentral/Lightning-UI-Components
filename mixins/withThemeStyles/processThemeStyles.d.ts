/* eslint-disable @typescript-eslint/no-explicit-any */
export default function processThemeStyles<StyleType>(
  theme: any,
  variant: string,
  base: (theme: any) => StyleType,
  variants: (theme: any) => StyleType
): any;
