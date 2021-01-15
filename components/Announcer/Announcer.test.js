import Announcer from '.';
import FocusManager from '../FocusManager';
import TestRenderer from '../lightning-test-renderer';
import lng from 'wpe-lightning';

const speak = jest.fn();
const speakAppend = jest.fn();
const speakCancel = jest.fn();
speak.mockReturnValue({
  active: true,
  append: speakAppend,
  cancel: speakCancel
});
const BaseAnnouncer = Announcer(lng.Component, speak);
class MyApp extends BaseAnnouncer {
  _construct() {
    this.announcerFocusDebounce = 0;
  }

  _init() {
    this.announcerEnabled = true;
    this.debug = false;
  }

  _getFocused() {
    return this.childList.first;
  }
}

class Page extends lng.Component {
  _getFocused() {
    return this.childList.first;
  }

  get announceContext() {
    return 'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select';
  }
}

class Row extends lng.Component {
  _getFocused() {
    return this.childList.first;
  }
}

class Item extends lng.Component {}

const Items = {
  Items: {
    type: FocusManager,
    direction: 'row',
    items: [
      {
        type: Item,
        title: 'Ninja Turtles',
        announceContext: '1 of 3'
      },
      {
        type: Item,
        title: 'Transformers',
        announceContext: '2 of 3'
      },
      {
        type: Item,
        title: 'Batman',
        announceContext: '3 of 3'
      }
    ]
  }
};

const FeaturedItems = {
  Items: {
    type: FocusManager,
    items: [
      {
        type: Item,
        title: 'Plague',
        announceContext: '1 of 3'
      },
      {
        type: Item,
        title: 'Outbreak',
        announceContext: '2 of 3'
      },
      {
        type: Item,
        title: 'Corona',
        announceContext: '3 of 3'
      }
    ]
  }
};

const PopularItems = {
  Items: {
    type: FocusManager,
    items: [
      {
        type: Item,
        title: 'Thor',
        announceContext: '1 of 3'
      },
      {
        type: Item,
        title: 'Iron Man',
        announceContext: '2 of 3'
      },
      {
        type: Item,
        title: 'Wolverine',
        announceContext: '3 of 3'
      }
    ]
  }
};

const Component = {
  MyApp: {
    type: MyApp,
    announce: 'Welcome to Flex',
    Component: {
      type: FocusManager,
      direction: 'column',
      signals: {
        selectedChanged: 'selectedChangedMock'
      },
      items: [
        {
          type: Page,
          title: 'HomePage',
          Rows: {
            type: FocusManager,
            direction: 'column',
            items: [
              {
                type: Row,
                ref: 'Row1',
                title: 'Free to Me',
                children: Items
              },
              {
                type: Row,
                ref: 'Row2',
                title: 'Featured',
                children: FeaturedItems
              },
              {
                type: Row,
                ref: 'Row3',
                title: 'Popular Movies',
                children: PopularItems
              }
            ]
          }
        },
        {
          type: Page,
          title: 'Page2'
        },
        {
          type: Page,
          title: 'Page3'
        }
      ]
    }
  }
};

let testRenderer;
let announcer;
describe('AppAnnouncer', () => {
  beforeEach(done => {
    jest.clearAllMocks();
    testRenderer = TestRenderer.create(Component);
    announcer = testRenderer.getInstance();
    setTimeout(() => done(), 1);
  });

  describe('on App load', () => {
    it('should announce the full focus path', () => {
      expect(speak).toHaveBeenCalledWith([
        'Welcome to Flex',
        'HomePage',
        'Free to Me',
        'Ninja Turtles',
        '1 of 3',
        'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
      ]);
    });

    it('should delay announcing if loading', () => {
      Component.MyApp.loading = true;
      speak.mockClear();
      testRenderer = TestRenderer.create(Component);
      expect(speak).not.toHaveBeenCalled();
      Component.MyApp.loading = false;
    });
  });

  describe('on key press', () => {
    it('Right - should announce the new item', done => {
      testRenderer.keyPress('Right');
      setTimeout(() => {
        expect(speak).toHaveBeenCalledWith(['Transformers', '2 of 3']);
        done();
      }, 1);
    });

    it('Down - should announce new item and nav options', done => {
      testRenderer.keyPress('Down');
      setTimeout(() => {
        expect(speak).toHaveBeenCalledWith(['Featured', 'Plague', '1 of 3']);
        done();
      }, 1);
    });

    it('Down twice - should announce new item and nav options', done => {
      testRenderer.keyPress('Down');
      speak.mockClear();
      testRenderer.keyPress('Down');
      setTimeout(() => {
        expect(speak).toHaveBeenCalledWith([
          'Popular Movies',
          'Thor',
          '1 of 3'
        ]);
        done();
      }, 1);
    });
  });

  describe('announcerTimeout', () => {
    it('should announce the full navigation', done => {
      testRenderer.keyPress('Right');
      speak.mockClear();
      announcer.announcerTimeout = 1;
      announcer._build();
      testRenderer.keyPress('Right');

      setTimeout(() => {
        expect(speak).toHaveBeenCalledWith([
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Batman',
          '3 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ]);
        done();
      }, 4);
    });
  });

  describe('announcerEnabled', () => {
    it('should not call speak when false', () => {
      speak.mockClear();
      announcer.announcerEnabled = false;
      testRenderer.keyPress('Right');
      expect(speak).not.toHaveBeenCalled();
    });
  });

  describe('debug', () => {
    it('should call console.table', done => {
      announcer.debug = true;
      jest.spyOn(global.console, 'table');
      testRenderer.keyPress('Right');

      setTimeout(() => {
        expect(global.console.table).toHaveBeenCalledWith([
          ['Item', 'Title', 'Transformers'],
          ['Item', 'Context', '2 of 3']
        ]);
        done();
      }, 1);
    });
  });

  describe('$announce', () => {
    it('should call speak', () => {
      announcer.$announce('hello');
      expect(speak).toHaveBeenCalledWith('hello');
    });

    it('should call append', () => {
      announcer.$announce('hello');
      announcer.$announce('there', { append: true });
      expect(speak).toHaveBeenNthCalledWith(2, 'hello');
      expect(speakAppend).toHaveBeenNthCalledWith(1, 'there');
    });

    it('should force a pending focus change to be processed first', () => {
      speak.mockClear();
      announcer.$announcerRefresh(); // Forces focus change
      expect(speak).not.toHaveBeenCalled();
      announcer.$announce('there');
      expect(speak).toHaveBeenNthCalledWith(1, [
        'Welcome to Flex',
        'HomePage',
        'Free to Me',
        'Ninja Turtles',
        '1 of 3',
        'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
      ]);
      expect(speak).toHaveBeenNthCalledWith(2, 'there');
    });

    it('should force a pending focus change to be processed first (append=true)', () => {
      speak.mockClear();
      announcer.$announcerRefresh(); // Forces focus change
      expect(speak).not.toHaveBeenCalled();
      announcer.$announce('there', { append: true });
      expect(speak).toHaveBeenCalledWith([
        'Welcome to Flex',
        'HomePage',
        'Free to Me',
        'Ninja Turtles',
        '1 of 3',
        'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
      ]);
      expect(speakAppend).toHaveBeenCalledWith('there');
      expect(speak.mock.invocationCallOrder[0]).toBeLessThan(
        speakAppend.mock.invocationCallOrder[0]
      );
    });
  });

  describe('$announcerRefresh', () => {
    it('should perform a full announce', done => {
      speak.mockClear();
      announcer.$announcerRefresh();
      setTimeout(() => {
        expect(speak).toHaveBeenCalledWith([
          'Welcome to Flex',
          'HomePage',
          'Free to Me',
          'Ninja Turtles',
          '1 of 3',
          'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
        ]);
        done();
      }, 1);
    });

    it('with depth should perform a partial announce', done => {
      speak.mockClear();
      announcer.$announcerRefresh(4);
      setTimeout(() => {
        expect(speak).toHaveBeenCalledWith([
          'Free to Me',
          'Ninja Turtles',
          '1 of 3'
        ]);
        done();
      }, 1);
    });
  });

  describe('$announcerCancel', () => {
    it('should stop currently speaking', () => {
      announcer.$announce('Say something');
      announcer.$announcerCancel();
      expect(speakCancel).toHaveBeenCalled();
    });
  });

  describe('focusDiffHook', () => {
    it('should be array of focused content', () => {
      testRenderer.keyPress('Right');
      let toAnnounce = announcer.focusDiffHook.reduce((acc, elm) => {
        if (elm.title) {
          acc.push(elm.title);
        }
        return acc;
      }, []);

      expect(toAnnounce).toEqual(['Ninja Turtles', 'Free to Me', 'HomePage']);
    });
  });
});
