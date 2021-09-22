import createTheme, { DEFAULT_THEME } from './createTheme';

describe('createTheme', () => {
  it('should create a theme object with a theme function and passed in default theme', () => {
    const theme = dTheme => ({
      ...dTheme,
      mockProp: 'a'
    });
    const defaultTheme = { mockDefaultProp: 'b' };

    expect(createTheme(theme, defaultTheme)).toMatchObject({
      mockProp: 'a',
      mockDefaultProp: 'b'
    });
  });
  it('should create a theme object with a fallback default theme', () => {
    const theme = dTheme => ({
      ...dTheme,
      mockProp: 'a'
    });

    expect(createTheme(theme)).toMatchObject({
      ...DEFAULT_THEME,
      mockProp: 'a'
    });
  });
  it('should merge a theme object with a default theme', () => {
    const theme = { mockProp: 'a' };
    const defaultTheme = { mockDefaultProp: 'b' };

    expect(createTheme(theme, defaultTheme)).toMatchObject({
      ...theme,
      ...defaultTheme
    });
  });
});
