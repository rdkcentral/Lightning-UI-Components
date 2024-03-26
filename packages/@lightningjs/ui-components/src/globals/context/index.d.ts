/* eslint-disable @typescript-eslint/no-explicit-any */
type ThemeObject = any;

type CallbackFunction = (...args: unknown[]) => void;

export class Context {
  get theme(): ThemeObject;
  set theme(value: ThemeObject);
  get keyMetricsCallback(): any;
  set keyMetricsCallback(value: any);
  get debug(): boolean;
  set debug(value: boolean);

  on(name: string, callback: CallbackFunction): void;
  off(name: string, callback?: CallbackFunction): void;
  emit(name: string, payload: string | object | number | boolean): void;

  log(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;

  setTheme(value: ThemeObject | ThemeObject[]): ThemeObject;
  updateTheme(value: ThemeObject | ThemeObject[]): ThemeObject;
  getSubTheme(subThemeName: string): ThemeObject;
  setSubThemes(subThemesObj: Record<string, unknown>): void;
  setSubTheme(subThemeName: string, value: unknown): ThemeObject;
  updateSubTheme(subThemeName: string, value: unknown): ThemeObject;
  removeSubTheme(subThemeName: string): void;
  setLogCallback(value: CallbackFunction): void;
  setKeyMetricsCallback(value: CallbackFunction): void;
  config(config: Record<string, unknown>): Context;
}

declare const contextInstance: Context;
export default contextInstance;
