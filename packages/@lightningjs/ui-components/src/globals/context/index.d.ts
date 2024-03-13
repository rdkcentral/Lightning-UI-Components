type ThemeObject = object;

export class Context {
  get theme(): ThemeObject;
  set theme(value: ThemeObject);
  get keyMetricsCallback(): object;
  set keyMetricsCallback(value: object);
  get debug(): boolean;
  set debug(value: boolean);

  on(name: string, callback: Function): void;
  off(name: string, callback?: Function): void;
  emit(name: string, payload: string | object | number | boolean): void;
  
  log(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;

  setTheme(value: object | any[]): ThemeObject;
  updateTheme(value: object | any[]): ThemeObject;
  getSubTheme(subThemeName: string): ThemeObject;
  setSubThemes(subThemesObj: Record<string, any>): void;
  setSubTheme(subThemeName: string, value: any): ThemeObject;
  updateSubTheme(subThemeName: string, value: any): ThemeObject;
  removeSubTheme(subThemeName: string): void;
  setLogCallback(value: Function): void;
  setKeyMetricsCallback(value: Function): void;
  config(config: Record<string, any>): Context;
}

declare const contextInstance: Context;
export default contextInstance;
