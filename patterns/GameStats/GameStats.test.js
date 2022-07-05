import TestUtils from '../../test/lightning-test-utils';
import GameStats from '.';

const createGameStats = TestUtils.makeCreateComponent(GameStats);

const stats = [
  {
    label: 'Total yards',
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 252
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: 243
      }
    ]
  },
  {
    label: 'Turnovers',
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 2
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: 1
      }
    ]
  },
  {
    label: 'First downs',
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 12
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: 15
      }
    ]
  },
  {
    label: 'Red zone %',
    percentage: true,
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 100
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: null
      }
    ]
  },
  {
    label: 'Equal Stat',
    percentage: true,
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 50
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: 50
      }
    ]
  },
  {
    label: 'Lower Value Right (invertedScoring)',
    invertedScoring: true,
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 2
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: 1
      }
    ]
  },
  {
    label: 'Lower Value Left (invertedScoring)',
    invertedScoring: true,
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 1
      },
      {
        name: 'Giants',
        color: '4278931873',
        value: 2
      }
    ]
  }
];

const singleStats = [
  {
    label: 'Total yards',
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 252
      }
    ]
  },
  {
    label: 'Turnovers',
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 2
      }
    ]
  },
  {
    label: 'First downs',
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 12
      }
    ]
  },
  {
    label: 'Red zone %',
    percentage: true,
    items: [
      {
        name: 'Eagles',
        color: '4278742891',
        value: 100
      }
    ]
  }
];

describe('GameStats', () => {
  let dataitem, testRenderer;

  beforeEach(() => {
    [dataitem, testRenderer] = createGameStats({ stats });
  });
  afterEach(() => {
    dataitem = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets private variables for reference', () => {
    expect(dataitem._stats).toBeDefined();
    expect(dataitem._stats).toBe(stats);
  });

  it('sets items in Column', () => {
    expect(dataitem._Column.items.length).toEqual(stats.length);
  });

  describe('Single entity', () => {
    let dataitem;

    beforeEach(() => {
      [dataitem] = createGameStats({
        entity: 'Eagles',
        single: true,
        stats: singleStats
      });
    });
    afterEach(() => {
      dataitem = null;
    });

    it('sets label text', () => {
      const items = dataitem._Column.items;
      items.forEach((i, idx) => {
        expect(i._Label.text.text).toBe(singleStats[idx].label);
        expect(i._Stat.text.text).toBe(
          i.getPreciseStat(singleStats[idx].items[0].value)
        );
      });
    });

    it('get announce', () => {
      expect(dataitem.announce).toBe(
        singleStats.map(i => `${i.label},${i.items[0].value}`).join(',')
      );
    });

    it('should override default announce', () => {
      [dataitem] = createGameStats({
        entity: 'Eagles',
        single: true,
        stats: singleStats,
        announce: 'Should override default announce'
      });
      expect(dataitem.announce).toBe('Should override default announce');
    });
  });

  describe('Multiple entities', () => {
    let dataitem;

    beforeEach(() => {
      [dataitem] = createGameStats({ stats });
    });
    afterEach(() => {
      dataitem = null;
    });

    it('sets label text', () => {
      const items = dataitem._Column.items;
      items.forEach((i, idx) => {
        expect(i._Label.text.text).toBe(stats[idx].label);
        expect(i._Left.text.text).toBe(
          i.getPreciseStat(stats[idx].items[0].value)
        );
        expect(i._Right.text.text).toBe(
          i.getPreciseStat(stats[idx].items[1].value)
        );
      });
    });

    it('displays arrow indicators', done => {
      const items = dataitem._Column.items;

      window.setTimeout(() => {
        // Left side greater
        expect(items[0]._LeftArrow.alpha).toBe(1);
        expect(items[0]._RightArrow.alpha).toBe(0);

        // Right side greater
        expect(items[2]._LeftArrow.alpha).toBe(0);
        expect(items[2]._RightArrow.alpha).toBe(1);

        // Both sides equal
        expect(items[4]._LeftArrow.alpha).toBe(0);
        expect(items[4]._RightArrow.alpha).toBe(0);

        // Lower value on the right w/invertedScoring
        expect(items[5]._LeftArrow.alpha).toBe(0);
        expect(items[5]._RightArrow.alpha).toBe(1);

        // Lower value on the left w/invertedScoring
        expect(items[6]._LeftArrow.alpha).toBe(1);
        expect(items[6]._RightArrow.alpha).toBe(0);
        done();
      }, 5);
    });
  });
});
