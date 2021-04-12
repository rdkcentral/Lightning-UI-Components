import TestUtils from '../../test/lightning-test-utils';
import TeamInfo from '.';
import PHI from '../../assets/images/PHI.png';

const createTeamInfo = TestUtils.makeCreateComponent(TeamInfo);

const items = [
  {
    title: 'Standings',
    subtitle: '2nd in NFC East'
  },
  {
    title: 'Next game',
    subtitle: '11/26 at 4:00p vs WAS'
  }
];

describe('TeamInfo', () => {
  let team, testRenderer;

  beforeEach(() => {
    [team, testRenderer] = createTeamInfo({
      team: 'Eagles',
      backgroundColor: 4278742891,
      overlayImage: PHI,
      items
    });
  });
  afterEach(() => {
    team = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets overlay image', () => {
    expect(team._DataItem._OverlayImage.src).toBe(PHI);
  });

  it('sets background color', () => {
    expect(team._DataItem.backgroundColor).toBe(4278742891);
  });

  it('get announce', () => {
    const itemsAnnounce = items.map(i => `${i.title} ${i.subtitle}`).join(',');
    expect(team.announce).toBe(`${team._team},${itemsAnnounce}`);
  });
});
