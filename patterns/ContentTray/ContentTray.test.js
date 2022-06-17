import TestUtils from '../../test/lightning-test-utils';
import ContentTray from '.';
import Tile from '../../elements/Tile';
import { CardLaunchpad } from '../../patterns/Card';

const createComponent = TestUtils.makeCreateComponent(ContentTray);

describe('ContentTray', () => {
  let component, testRenderer;

  beforeEach(async done => {
    [component, testRenderer] = createComponent(
      {
        items: [
          {
            type: Tile,
            w: 100,
            h: 100,
            radius: 50,
            imgRadius: 50,
            src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=6847411883730560242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
            items: [
              '7245349740136736112',
              '7615274088441709112',
              '4787646614985090112',
              '6366577040434117112',
              '5879798181352259112'
            ].map(entityId => {
              return {
                type: CardLaunchpad,
                src: `https://myriad.merlin.comcast.com/select/image?entityId=${entityId}&width=640&ratio=16x9`,
                shouldAnimate: false,
                focused: true,
                title: 'Program Title',
                description: `Short description for ${entityId}`,
                data: [
                  '86%',
                  {
                    icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                    title: 'Rotten Tomatoes rating'
                  }
                ]
              };
            })
          },
          {
            type: Tile,
            w: 100,
            h: 100,
            radius: 50,
            imgRadius: 50,
            src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=6887896329265323242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
            items: [
              '7615274088441709112',
              '4787646614985090112',
              '6366577040434117112',
              '5879798181352259112'
            ].map(entityId => {
              return {
                type: CardLaunchpad,
                src: `https://myriad.merlin.comcast.com/select/image?entityId=${entityId}&width=640&ratio=16x9`,
                shouldAnimate: false,
                focused: true,
                title: 'Program Title',
                description: 'Short description',
                data: [
                  '86%',
                  {
                    icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                    title: 'Rotten Tomatoes rating'
                  }
                ]
              };
            })
          },
          {
            type: Tile,
            w: 100,
            h: 100,
            radius: 50,
            imgRadius: 50,
            src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=5834457307371791242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
            items: [
              '4787646614985090112',
              '7245349740136736112',
              '7615274088441709112',
              '6366577040434117112',
              '5879798181352259112'
            ].map(entityId => {
              return {
                type: CardLaunchpad,
                src: `https://myriad.merlin.comcast.com/select/image?entityId=${entityId}&width=640&ratio=16x9`,
                shouldAnimate: false,
                focused: true,
                title: 'Program Title',
                description: 'Short description',
                data: [
                  '86%',
                  {
                    icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                    title: 'Rotten Tomatoes rating'
                  }
                ]
              };
            })
          }
        ]
      },
      {
        spyOnMethods: ['_update']
      }
    );
    await component.__updateSpyPromise;
    done();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', async () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('returns empty array if given bad data', async done => {
    console.info = jest.fn();

    component.items = 0;
    await component.__updateSpyPromise;
    expect(console.info).toHaveBeenCalledWith(
      'ContentTray items must be an array but received number'
    );

    component.items = 'string';
    await component.__updateSpyPromise;
    expect(console.info).toHaveBeenCalledWith(
      'ContentTray items must be an array but received string'
    );

    component.items = {};
    await component.__updateSpyPromise;
    expect(console.info).toHaveBeenCalledWith(
      'ContentTray items must be an array but received object'
    );

    component.items = () => {};
    await component.__updateSpyPromise;
    expect(console.info).toHaveBeenCalledWith(
      'ContentTray items must be an array but received function'
    );

    done();
  });

  it('renders items in tabs and results', async done => {
    const tree = testRenderer.toJSON(2);
    const [Tabs, Results] = component._Container.items;

    const alphaTransitionPromise = new Promise(resolve => {
      Results._getTransition('alpha').once('finish', () => {
        resolve();
      });
    });
    await alphaTransitionPromise;

    expect(Tabs.items.length).toBe(3);
    expect(Results.items.length).toBe(5);
    expect(Results.items[0].src).toBeDefined();
    expect(tree).toMatchSnapshot();
    done();
  });

  it('updates results when tab is changed', async () => {
    const [Tabs] = component._Container.items;
    component._updateResults = jest.fn();

    expect(component._selectedResultsIndex).toBe(0);
    Tabs._selectedIndex = 1; // manually change selected index
    component._tabChanged();

    expect(component._selectedResultsIndex).toBe(1);
    expect(component._updateResults).toHaveBeenCalledTimes(1);
  });

  it('lowers the alpha of inactive tabs when the results row is focused', async () => {
    const [Tabs] = component._Container.items;

    // start on Tabs row
    expect(component._Container.selectedIndex).toBe(0);
    expect(Tabs.items.length).toBe(3);

    // SoftFocus aren't defined yet
    expect(component._Tabs.items[0].getByRef('SoftFocus')).toBeUndefined();
    expect(component._Tabs.items[1].getByRef('SoftFocus')).toBeUndefined();
    expect(component._Tabs.items[2].getByRef('SoftFocus')).toBeUndefined();
    expect(component._Tabs.items[0].alpha).toBe(1);
    expect(component._Tabs.items[1].alpha).toBe(1);
    expect(component._Tabs.items[2].alpha).toBe(1);

    // move Down to Results row
    testRenderer.keyPress('Down');
    expect(component._Container.selectedIndex).toBe(1);

    // SoftFocus definitions
    expect(component._Tabs.items[0].getByRef('SoftFocus')).toBeDefined();
    expect(component._Tabs.items[1].getByRef('SoftFocus')).toBeUndefined();
    expect(component._Tabs.items[2].getByRef('SoftFocus')).toBeUndefined();
    // correct alphas are set
    expect(component._Tabs.items[0].getByRef('SoftFocus').alpha).toBe(1);
    expect(component._Tabs.items[0].alpha).toBe(1);
    expect(component._Tabs.items[1].alpha).toBe(0.3);
    expect(component._Tabs.items[2].alpha).toBe(0.3);

    // move Up to Tabs, Right to 2nd Tab item, Down to Results
    testRenderer.keyPress('Up');
    expect(component._Container.selectedIndex).toBe(0);
    testRenderer.keyPress('Right');
    expect(Tabs.selectedIndex).toBe(1);
    testRenderer.keyPress('Down');
    expect(component._Container.selectedIndex).toBe(1);

    // SoftFocus definitions
    expect(component._Tabs.items[0].getByRef('SoftFocus')).toBeDefined();
    expect(component._Tabs.items[1].getByRef('SoftFocus')).toBeDefined();
    expect(component._Tabs.items[2].getByRef('SoftFocus')).toBeUndefined();
    // correct alphas are set
    expect(component._Tabs.items[0].getByRef('SoftFocus').alpha).toBe(0);
    expect(component._Tabs.items[1].getByRef('SoftFocus').alpha).toBe(1);
    expect(component._Tabs.items[0].alpha).toBe(0.3);
    expect(component._Tabs.items[1].alpha).toBe(1);
    expect(component._Tabs.items[2].alpha).toBe(0.3);
  });

  it('renders a synchronous function item', async () => {
    [component, testRenderer] = createComponent(
      {
        items: [
          {
            type: Tile,
            w: 100,
            h: 100,
            src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=6887896329265323242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
            items: () => {
              return [
                {
                  type: CardLaunchpad,
                  src: 'https://myriad.merlin.comcast.com/select/image?entityId=4787646614985090112&width=640&ratio=16x9',
                  shouldAnimate: false,
                  focused: true,
                  title: 'Program Title',
                  description: 'Short description',
                  data: []
                }
              ];
            }
          }
        ]
      },
      {
        spyOnMethods: ['_update']
      }
    );

    await component.__updateSpyPromise;
    await component._updateResults;
    const [Tabs, Results] = component._Container.items;

    const alphaTransitionPromise = new Promise(resolve => {
      Results._getTransition('alpha').once('finish', () => {
        resolve();
      });
    });
    await alphaTransitionPromise;

    expect(Tabs.items.length).toBe(1);
    expect(Results.items.length).toBe(1);
    expect(Results.items[0].src).toBe(
      'https://myriad.merlin.comcast.com/select/image?entityId=4787646614985090112&width=640&ratio=16x9'
    );
  });

  const promisedItem = {
    type: Tile,
    w: 100,
    h: 100,
    src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=6887896329265323242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
    items: () => {
      return new Promise(resolve => {
        const results = [
          {
            type: CardLaunchpad,
            src: 'https://myriad.merlin.comcast.com/select/image?entityId=4787646614985090112&width=640&ratio=16x9',
            shouldAnimate: false,
            focused: true,
            title: 'Program Title',
            description: 'Short description',
            data: []
          }
        ];
        resolve(results);
      });
    }
  };

  it('renders a promised item', async () => {
    [component, testRenderer] = createComponent(
      {
        items: [promisedItem, promisedItem]
      },
      {
        spyOnMethods: ['_update']
      }
    );

    await component.__updateSpyPromise;
    await component._updateResults;
    const [Tabs, Results] = component._Container.items;

    const alphaTransitionPromise = new Promise(resolve => {
      Results._getTransition('alpha').once('finish', () => {
        resolve();
      });
    });
    await alphaTransitionPromise;

    expect(Tabs.items.length).toBe(2);
    expect(Results.items.length).toBe(1);
    expect(Results.items[0].src).toBe(
      'https://myriad.merlin.comcast.com/select/image?entityId=4787646614985090112&width=640&ratio=16x9'
    );
  });
});
