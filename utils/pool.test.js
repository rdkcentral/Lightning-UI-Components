import Pool from './pool';

let counter = 0;
const stage = {
  c: jest.fn().mockImplementation(() => {
    return counter++;
  })
};

describe('Pool', () => {
  beforeEach(() => {
    counter = 0;
  });

  describe('#create', () => {
    it('should create a pool of two components and return first', () => {
      const pool = Pool.create({
        name: 'tile_focusring',
        component: {
          alpha: 1,
          type: 'Component'
        },
        stage: stage
      });
      expect(pool).toEqual(0);
    });

    it('can set the size of the pool', () => {
      const firstItem = Pool.create({
        name: 'pool4',
        size: 4,
        component: {
          alpha: 1,
          type: 'Component'
        },
        stage: stage
      });
      expect(firstItem).toEqual(0);
      expect(Pool.get('pool4')).toEqual(1);
      expect(Pool.get('pool4')).toEqual(2);
      expect(Pool.get('pool4')).toEqual(3);
      expect(Pool.get('pool4')).toEqual(0);
    });

    it("doesn't create the same pool", () => {
      const firstItem = Pool.create({
        name: 'pool4',
        size: 4,
        component: {
          alpha: 1,
          type: 'Component'
        },
        stage: stage
      });
      expect(firstItem).toEqual(1);
    });
  });

  describe('#get', () => {
    it('returns items from the pool', () => {
      const firstItem = Pool.create({
        name: 'pool3',
        size: 3,
        stage: stage
      });
      expect(firstItem).toEqual(0);
      expect(Pool.get('pool3')).toEqual(1);
      expect(Pool.get('pool3')).toEqual(2);
      expect(Pool.get('pool3')).toEqual(0);
      expect(Pool.get('pool3')).toEqual(1);
      expect(Pool.get('pool3')).toEqual(2);
    });

    it('returns false for invalid pool', () => {
      expect(Pool.get('invalid')).toBe(false);
    });
  });
});
