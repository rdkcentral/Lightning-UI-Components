import TestUtils from '../../test/lightning-test-utils';
import TeamMatchup from '.';
import PHI from '../../static/images/PHI.png';
import NYG from '../../assets/images/NYG.png';

const createTeamMatchup = TestUtils.makeCreateComponent(TeamMatchup);

const title = '24 - 13';
const subtitle = '1st - 1:15';
const metadata = 'Eagles vs Giants';
const items = {
  left: {
    name: 'Eagles',
    color: 4278742891,
    src: PHI
  },
  right: {
    name: 'Giants',
    color: '4278931873',
    src: NYG
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

  it('floats background', () => {
    expect(matchup._DataItem._Background.alpha).toEqual(1);
    matchup.removeBackground = true;
    expect(matchup._DataItem._Background.alpha).toEqual(0);
  });

  it('get announce text', () => {
    expect(matchup.announce).toBe('Eagles vs Giants,24 - 13,1st - 1:15');
  });
});
