import TestUtils from '../../test/lightning-test-utils';
import {
  BasicCard,
  HorizontalCard,
  HorizontalCardLarge,
  VerticalCard,
  VerticalCardLarge,
  VerticalCardDynamic
} from '.';

const pets = TestUtils.pathToDataURI(
  './assets/images/The_Secret_Life_of_Pets_16x9.jpg'
);

const circle = TestUtils.pathToDataURI('./assets/images/circle.svg');

const createBasicCardComponent = TestUtils.makeCreateComponent(BasicCard, {});

describe('BasicCard', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createBasicCardComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('updates title', () => {
    const title = 'Title';
    expect(card.title).toBe(undefined);
    card.title = title;
    expect(card.title).toBe(title);
  });

  it('updates description', () => {
    const description = 'Short Description';
    expect(card.description).toBe(undefined);
    card.description = description;
    expect(card.description).toBe(description);
  });

  it('updates logo', () => {
    expect(card.logo).toBe(undefined);
    card.logo = circle;
    expect(card.logo).toBe(circle);
  });
});

const createHorizontalCardComponent = TestUtils.makeCreateComponent(
  HorizontalCard,
  {}
);

describe('HorizontalCard', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createHorizontalCardComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('updates card artwork', () => {
    expect(card.src).toBe(undefined);
    expect(card.badge).toBe(undefined);
    expect(card.progress).toBe(undefined);
    card.src = pets;
    card.badge = 'HD';
    card.progress = 0.5;
    card._update();
    expect(card.src).toBe(pets);
    expect(card._Artwork.badge).toBe('HD');
    expect(card._Artwork.progress).toBe(0.5);
  });

  it('updates title', () => {
    const title = 'Title';
    expect(card.title).toBe(undefined);
    card.title = title;
    expect(card.title).toBe(title);
  });

  it('updates description', () => {
    const description = 'Short Description';
    expect(card.description).toBe(undefined);
    card.description = description;
    expect(card.description).toBe(description);
  });

  it('updates data', () => {
    const data = 'Data';
    expect(card.data).toBe(undefined);
    card.data = data;
    expect(card.data).toBe(data);
  });

  it('updates action to uppercase and hides data', async done => {
    const data = 'Data';
    const action = 'Action';

    card.data = data;
    card.action = action;
    card._update();
    testRenderer.update();

    setTimeout(() => {
      expect(card._Metadata._Data.content).toBe(undefined);
      expect(card._Metadata._Action.title).toBe(action.toUpperCase());
      done();
    }, 0);
  });

  it('updates logo', () => {
    expect(card.logo).toBe(undefined);
    card.logo = circle;
    expect(card.logo).toBe(circle);
  });
});

const createHorizontalCardLargeComponent = TestUtils.makeCreateComponent(
  HorizontalCardLarge,
  {}
);

describe('HorizontalCardLarge', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createHorizontalCardLargeComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('updates card artwork', () => {
    expect(card.src).toBe(undefined);
    expect(card.badge).toBe(undefined);
    expect(card.progress).toBe(undefined);
    card.src = pets;
    card.badge = 'HD';
    card.progress = 0.5;
    card._update();
    expect(card.src).toBe(pets);
    expect(card._Artwork.badge).toBe('HD');
    expect(card._Artwork.progress).toBe(0.5);
  });

  it('updates title', () => {
    const title = 'Title';
    expect(card.title).toBe(undefined);
    card.title = title;
    expect(card.title).toBe(title);
  });

  it('updates description', () => {
    const description = 'Short Description';
    expect(card.description).toBe(undefined);
    card.description = description;
    expect(card.description).toBe(description);
  });

  it('updates data', () => {
    const data = 'Data';
    expect(card.data).toBe(undefined);
    card.data = data;
    expect(card.data).toBe(data);
  });

  it('updates action to uppercase and hides data', async done => {
    const data = 'Data';
    const action = 'Action';

    card.data = data;
    card.action = action;
    card._update();
    testRenderer.update();

    setTimeout(() => {
      expect(card._Metadata._Data.content).toBe(undefined);
      expect(card._Metadata._Action.title).toBe(action.toUpperCase());
      done();
    }, 0);
  });

  it('updates logo', () => {
    expect(card.logo).toBe(undefined);
    card.logo = circle;
    expect(card.logo).toBe(circle);
  });
});

const createVerticalCardComponent = TestUtils.makeCreateComponent(
  VerticalCard,
  {}
);

describe('VerticalCard', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createVerticalCardComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('updates card artwork', () => {
    expect(card.src).toBe(undefined);
    expect(card.badge).toBe(undefined);
    expect(card.progress).toBe(undefined);
    card.src = pets;
    card.badge = 'HD';
    card.progress = 0.5;
    card._update();
    expect(card.src).toBe(pets);
    expect(card._Artwork.badge).toBe('HD');
    expect(card._Artwork.progress).toBe(0.5);
  });

  it('updates title', () => {
    const title = 'Title';
    expect(card.title).toBe(undefined);
    card.title = title;
    expect(card.title).toBe(title);
  });

  it('updates description', () => {
    const description = 'Short Description';
    expect(card.description).toBe(undefined);
    card.description = description;
    expect(card.description).toBe(description);
  });
});

const createVerticalCardLargeComponent = TestUtils.makeCreateComponent(
  VerticalCardLarge,
  {}
);

describe('VerticalCardLarge', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createVerticalCardLargeComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('updates card artwork', () => {
    expect(card.src).toBe(undefined);
    expect(card.badge).toBe(undefined);
    expect(card.progress).toBe(undefined);
    card.src = pets;
    card.badge = 'HD';
    card.progress = 0.5;
    card._update();
    expect(card.src).toBe(pets);
    expect(card._Artwork.badge).toBe('HD');
    expect(card._Artwork.progress).toBe(0.5);
  });

  it('updates title', () => {
    const title = 'Title';
    expect(card.title).toBe(undefined);
    card.title = title;
    expect(card.title).toBe(title);
  });

  it('updates description', () => {
    const description = 'Short Description';
    expect(card.description).toBe(undefined);
    card.description = description;
    expect(card.description).toBe(description);
  });
});

const createVerticalCardDynamicComponent = TestUtils.makeCreateComponent(
  VerticalCardDynamic,
  {}
);

describe('VerticalCardDynamic', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createVerticalCardDynamicComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('updates card artwork', () => {
    expect(card.src).toBe(undefined);
    card.src = pets;
    card._update();
    expect(card.src).toBe(pets);
  });

  it('updates title', () => {
    const title = 'Title';
    expect(card.title).toBe(undefined);
    card.title = title;
    expect(card.title).toBe(title);
  });

  it('updates description', () => {
    const description = 'Short Description';
    expect(card.description).toBe(undefined);
    card.description = description;
    expect(card.description).toBe(description);
  });

  it('updates data', () => {
    const data = 'Data';
    expect(card.data).toBe(undefined);
    card.data = data;
    expect(card.data).toBe(data);
  });

  it('updates action to uppercase and hides data', async done => {
    const data = 'Data';
    const action = 'Action';

    card.data = data;
    card.action = action;
    card._update();
    testRenderer.update();

    setTimeout(() => {
      expect(card._Metadata._Data.content).toBe(undefined);
      expect(card._Metadata._Action.title).toBe(action.toUpperCase());
      done();
    }, 0);
  });

  it('updates logo', () => {
    expect(card.logo).toBe(undefined);
    card.logo = circle;
    expect(card.logo).toBe(circle);
  });

  it('updates gradient', () => {
    expect(card.gradientColor).toBe(undefined);
    card.gradientColor = '#E6004A';
    expect(card.gradientColor).toBe('#E6004A');
  });
});
