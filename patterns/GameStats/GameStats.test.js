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
    label: 'Lower Value',
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
    let dataitem, testRenderer;

    beforeEach(() => {
      [dataitem, testRenderer] = createGameStats({
        entity: 'Eagles',
        single: true,
        stats: singleStats
      });
    });
    afterEach(() => {
      dataitem = null;
      testRenderer = null;
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
      [dataitem, testRenderer] = createGameStats({
        entity: 'Eagles',
        single: true,
        stats: singleStats,
        announce: 'Should override default announce'
      });
      expect(dataitem.announce).toBe('Should override default announce');
    });
  });

  describe('Multiple entities', () => {
    let dataitem, testRenderer;

    beforeEach(() => {
      [dataitem, testRenderer] = createGameStats({ stats });
    });
    afterEach(() => {
      dataitem = null;
      testRenderer = null;
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
        if (
          stats[idx].items[0].value > stats[idx].items[1].value &&
          !stats[idx].invertedScoring
        ) {
          expect(i._RightArrow.alpha).toBe(0);
          expect(i._LeftArrow.alpha).toBe(1);
        } else if (stats[idx].items[1].value === stats[idx].items[0].value) {
          expect(i._RightArrow.alpha).toBe(0);
          expect(i._LeftArrow.alpha).toBe(0);
        } else {
          expect(i._RightArrow.alpha).toBe(1);
          expect(i._LeftArrow.alpha).toBe(0);
        }
      });
    });
  });
});
