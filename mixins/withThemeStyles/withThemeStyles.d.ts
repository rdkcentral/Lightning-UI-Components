export function withStyles<BaseType, StyleType>(
  Base: BaseType,
  styles: (theme: Record<string, any>) => StyleType
): new (...args: any[]) => InstanceType<BaseType> & {
  _componentStyles: StyleType;
};
