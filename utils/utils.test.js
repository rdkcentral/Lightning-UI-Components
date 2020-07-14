import { rgba2argb } from '.';

describe('rgba2argb', () => {
  it('converts rgba() format to a number', () => {
    expect(rgba2argb('rgba(0,0,0,0)')).toBe(0x00000000);
    expect(rgba2argb('rgba(255,255,255,1')).toBe(0xffffffff);
  });
});
