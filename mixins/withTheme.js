import createTheme from '../components/Styles/createTheme';

export default function withTheme(Base, theme) {
  let defaultTheme = Base.theme;
  const _theme = defaultTheme
    ? createTheme(theme, defaultTheme)
    : createTheme(theme);

  return class extends Base {
    static get name() { return Base.name }
    static get theme() { return _theme };

    constructor(stage) {
      super(stage);
      this.theme = _theme;
    }
  }
}