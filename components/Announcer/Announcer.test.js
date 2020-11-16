import Announcer from '.';
import FocusManager from '../FocusManager';
import TestRenderer from '../lightning-test-renderer';
import lng from 'wpe-lightning';

const speak = jest.fn();
speak.mockReturnValue({
  cancel: jest.fn()
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
    speak.mockClear();
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
  });

  describe('$announcerRefresh', () => {
    it('should perform a full announce', () => {
      announcer.$announcerRefresh();
      expect(speak).toHaveBeenCalledWith([
        'Welcome to Flex',
        'HomePage',
        'Free to Me',
        'Ninja Turtles',
        '1 of 3',
        'press LEFT or RIGHT to review items​, press UP or DOWN to review categories​, press CENTER to select'
      ]);
    });
  });
});
