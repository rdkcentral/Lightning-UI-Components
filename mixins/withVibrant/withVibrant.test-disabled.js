import TestUtils from '../../test/lightning-test-utils';
import withVibrant from '.';
import Vibrant from 'node-vibrant';
import Tile from '../../elements/Tile';
import Button from '../../elements/Button';
import { withStyles } from '..';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';

const tileParams = { w: 320, h: 180, src: trolls };

// Trolls VibrantJS Color Palette
const Vibrant2 = { hex: '#dc216a', population: 238 };
const Vibrant10 = 4292616554;
const LightVibrant = { hex: '#9475e7', population: 82 };
const LightVibrant10 = 4287919591;
const DarkVibrant = { hex: '#0a14b2', population: 195 };
const DarkVibrant10 = 4278850738;
const Muted = { hex: '#6e569c', population: 30 };
const Muted10 = 4285421212;
const LightMuted = { hex: '#d0aca7', population: 234 };
const LightMuted10 = 4291865767;
const DarkMuted = { hex: '#69313b', population: 175 };
const DarkMuted10 = 4285083963;

let colorPalette = {
  Vibrant: Vibrant2,
  LightVibrant,
  DarkVibrant,
  Muted,
  LightMuted,
  DarkMuted
};

let getPaletteMock = jest.fn();
jest.mock('node-vibrant');
Vibrant.from.mockReturnValue({ getPalette: getPaletteMock });

global.console.log = jest.fn(); // = { log: jest.fn() }

const createVibrantComponent = (base, props) =>
  TestUtils.makeCreateComponent(withVibrant(base))(props);

describe('withVibrant', () => {
  let vibrantComponent, testRenderer;

  beforeEach(async () => {
    getPaletteMock.mockResolvedValue(colorPalette);
    [vibrantComponent, testRenderer] = createVibrantComponent(Tile, tileParams);
    await vibrantComponent._vibrantPromise;
  });
  afterEach(() => {
    vibrantComponent = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should get a color palette from VibrantJS and generate individual 10-digit color values', () => {
    expect(vibrantComponent.vibrantPalette).toBeDefined();
    expect(vibrantComponent.vibrant).toBe(Vibrant10);
    expect(vibrantComponent.lightVibrant).toBe(LightVibrant10);
    expect(vibrantComponent.darkVibrant).toBe(DarkVibrant10);
    expect(vibrantComponent.muted).toBe(Muted10);
    expect(vibrantComponent.lightMuted).toBe(LightMuted10);
    expect(vibrantComponent.darkMuted).toBe(DarkMuted10);
    expect(vibrantComponent.vibrantFill).toBe(DarkMuted10);
    expect(vibrantComponent.vibrantShadow).toBe(LightMuted10);
    expect(vibrantComponent.vibrantFocusRing).toBe(Vibrant10);
    expect(vibrantComponent.vibrantMaterial).toBe(DarkMuted10);
  });

  it('should not request a Vibrant palette if the style overridess Vibrant', () => {
    createVibrantComponent(
      withStyles(Tile, { withVibrant: false }),
      tileParams
    );
    expect(Vibrant).toHaveBeenCalledTimes(0);
  });

  it('should not call the parent vibrantCallback method if the palette is undefined', () => {
    let [tile] = createVibrantComponent(Tile, tileParams);
    tile.vibrantCallback();
    expect(tile._vibrantPalette).toBeUndefined();
  });

  it('should throw an error if a base component without a vibrantCallback method is used', () => {
    let [mockSrc] = createVibrantComponent(Button, { src: trolls });
    expect(async () => await mockSrc._vibrantPromise).rejects.toThrow(
      new Error('Parent must implement vibrantCallback method')
    );
  });

  describe('vibrantMaterial', () => {
    it('should fall back to darkVibrant if darkMuted is not available', async () => {
      getPaletteMock.mockResolvedValue({
        DarkVibrant,
        DarkMuted: { ...DarkMuted, population: 0 }
      });
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.darkMuted).toBeUndefined();
      expect(tile.vibrantMaterial).toBe(DarkVibrant10);
    });

    it('should return null if darkVibrant and darkMuted are not available', async () => {
      getPaletteMock.mockResolvedValue({});
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.darkMuted).toBeUndefined();
      expect(tile.darkVibrant).toBeUndefined();
      expect(tile.vibrantMaterial).toBe(null);
    });
  });

  describe('vibrantFill', () => {
    it('should fall back to darkVibrant if darkMuted is not available', async () => {
      getPaletteMock.mockResolvedValue({
        DarkVibrant,
        DarkMuted: { ...DarkMuted, population: 0 }
      });
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.darkMuted).toBeUndefined();
      expect(tile.vibrantFill).toBe(DarkVibrant10);
    });

    it('should return null if darkVibrant and darkMuted are not available', async () => {
      getPaletteMock.mockResolvedValue({});
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.darkMuted).toBeUndefined();
      expect(tile.darkVibrant).toBeUndefined();
      expect(tile.vibrantFill).toBe(null);
    });
  });

  describe('vibrantShadow', () => {
    it('should fall back to lightVibrant if lightMuted is not available', async () => {
      getPaletteMock.mockResolvedValue({
        LightVibrant,
        LightMuted: { ...LightMuted, population: 0 }
      });
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.lightMuted).toBeUndefined();
      expect(tile.vibrantShadow).toBe(LightVibrant10);
    });

    it('should return null if lightVibrant and lightMuted are not available', async () => {
      getPaletteMock.mockResolvedValue({});
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.lightMuted).toBeUndefined();
      expect(tile.lightVibrant).toBeUndefined();
      expect(tile.vibrantShadow).toBe(null);
    });
  });

  describe('vibrantFocusRing', () => {
    it('should fall back to muted if vibrant is not available', async () => {
      getPaletteMock.mockResolvedValue({
        Muted,
        Vibrant: { ...Vibrant2, population: 0 }
      });
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.vibrant).toBeUndefined();
      expect(tile.vibrantFocusRing).toBe(Muted10);
    });

    it('should return null if vibrant and muted are not available', async () => {
      getPaletteMock.mockResolvedValue({});
      let [tile] = createVibrantComponent(Tile, tileParams);
      await tile._vibrantPromise;
      expect(tile.vibrant).toBeUndefined();
      expect(tile.muted).toBeUndefined();
      expect(tile.vibrantFocusRing).toBe(null);
    });
  });

  describe('printColors', () => {
    it('should print each color in the palette', () => {
      vibrantComponent.printColors();
      expect(console.log).toHaveBeenCalledTimes(6);
    });

    it('should not print anything if the palette is undefined', () => {
      getPaletteMock.mockResolvedValue({});
      let [tile] = createVibrantComponent(Tile, tileParams);
      tile.printColors();
      expect(console.log).toHaveBeenCalledTimes(0);
    });
  });
});
