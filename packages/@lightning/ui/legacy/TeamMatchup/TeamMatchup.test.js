import TestUtils from '../.../../../test/lightning-test-utils';
import TeamMatchup from '.';

const PHI = TestUtils.pathToDataURI('./src/assets/images/PHI.png');
const NYG = TestUtils.pathToDataURI('./src/assets/images/NYG.png');

const createTeamMatchup = TestUtils.makeCreateComponent(TeamMatchup);

const title = '24 - 13';
const subtitle = '1st - 1:15';
const metadata = 'Eagles vs Giants';
const items = {
  left: {
    name: 'Eagles',
    color: 4278742891,
    src: PHI,
    score: 24
  },
  right: {
    name: 'Giants',
    color: '4278931873',
    src: NYG,
    score: 13
  }
};

describe('TeamMatchup', () => {
  let matchup, testRenderer;

  beforeEach(() => {
    [matchup, testRenderer] = createTeamMatchup({
      subtitle,
      title,
      removeBackground: false,
      metadata,
      items
    });
  });
  afterEach(() => {
    matchup = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('centers the text if the title is missing', () => {
    [matchup, testRenderer] = createTeamMatchup({
      title: '',
      subtitle,
      removeBackground: false,
      metadata,
      items
    });

    testRenderer.forceAllUpdates();

    const tree = testRenderer.toJSON(2);
    const { _Title, _Subtitle } = matchup;
    expect(tree).toMatchSnapshot();
    expect(_Title.visible).toBe(false);
    expect(_Title.y).toBeGreaterThan(0);
    expect(_Subtitle.visible).toBe(true);
    expect(_Subtitle.y).toBe(0);
  });

  it('centers the text if the subtitle is missing', () => {
    [matchup, testRenderer] = createTeamMatchup({
      subtitle: '',
      title,
      removeBackground: false,
      metadata,
      items
    });

    testRenderer.forceAllUpdates();

    const tree = testRenderer.toJSON(2);
    const { _Title, _Subtitle } = matchup;
    expect(tree).toMatchSnapshot();
    expect(_Title.visible).toBe(true);
    expect(_Title.y).toBe(0);
    expect(_Subtitle.visible).toBe(false);
    expect(_Subtitle.y).toBeGreaterThan(0);
  });

  it('sets title', () => {
    expect(matchup._title).toBe(title);
  });

  it('sets subtitle', () => {
    expect(matchup._subtitle).toBe(subtitle);
  });

  it('sets items', () => {
    expect(matchup._items).toBe(items);
  });

  it('patches group images', () => {
    expect(matchup._LeftIcon.icon).toBe(PHI);
    expect(matchup._RightIcon.icon).toBe(NYG);
  });

  it('floats background', done => {
    expect(matchup._DataItem._Background.alpha).toEqual(1);
    matchup.removeBackground = true;
    testRenderer.update();
    setTimeout(() => {
      expect(matchup._DataItem._Background.alpha).toEqual(0);
      done();
    }, 0);
  });

  describe('announcing the score', () => {
    it('should announce a tied score', () => {
      matchup.items = {
        left: {
          ...items.left,
          score: 7
        },
        right: {
          ...items.right,
          score: 7
        }
      };
      testRenderer.update();
      expect(matchup.announce).toEqual('Eagles vs Giants,1st - 1:15,7 to 7');
    });
    it('should announce a score where the left team leads', () => {
      expect(matchup.announce).toEqual(
        'Eagles vs Giants,1st - 1:15,24 to 13, Eagles'
      );
    });
    it('should announce a score where the right team leads', () => {
      matchup.items = {
        left: {
          ...items.left,
          score: 13
        },
        right: {
          ...items.right,
          score: 24
        }
      };
      testRenderer.update();
      expect(matchup.announce).toEqual(
        'Eagles vs Giants,1st - 1:15,24 to 13, Giants'
      );
    });
  });

  it('should override default announce', () => {
    [matchup, testRenderer] = createTeamMatchup({
      subtitle,
      title,
      removeBackground: false,
      metadata,
      announce: 'Should override default announce',
      items
    });
    expect(matchup.announce).toBe('Should override default announce');
  });

  it('should toggle the display of meta data when focused/unfocused', () => {
    testRenderer.update();
    expect(matchup._Metadata.alpha).toEqual(1);

    testRenderer.unfocus();
    testRenderer.update();

    expect(matchup._Metadata.alpha).toEqual(0);
  });
});
