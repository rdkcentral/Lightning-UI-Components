import TestUtils from '../../test/lightning-test-utils';
import {
  CardBasic,
  CardHorizontal,
  CardHorizontalLarge,
  CardVertical,
  CardVerticalLarge,
  CardVerticalDynamic
} from '.';

const pets = TestUtils.pathToDataURI(
  './assets/images/The_Secret_Life_of_Pets_16x9.jpg'
);

const circle = TestUtils.pathToDataURI('./assets/images/circle.svg');

const createCardBasicComponent = TestUtils.makeCreateComponent(CardBasic, {});

describe('CardBasic', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardBasicComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it.skip('shows focus ring with custom color on focus', () => {
    card.focusRingColor = '#E6004A';
    card._focus();
    expect(card.focusRing.color).toBe('#E6004A');
    expect(card.focusRing.smooth.alpha).toBe(1);
  });

  it('shows backgroundColorFocus on focus', () => {
    card.backgroundColorFocus = '#E6004A';
    card._focus();
    expect(card._Background.texture._lookupId).toBe(
      'rect408,229,0,,1,4293263434,16,16,16,16'
    );
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

const createCardHorizontalComponent = TestUtils.makeCreateComponent(
  CardHorizontal,
  {}
);

describe('CardHorizontal', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardHorizontalComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it.skip('shows focus ring with custom color on focus', () => {
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

  it('updates cta to uppercase and hides data', async () => {
    const data = 'Data';
    const cta = 'CTA';
    [card, testRenderer] = createCardHorizontalComponent(
      { data, cta },
      { spyOnMethods: ['_update'] }
    );
    await card.__updatePromiseSpy;
    card._update();
    testRenderer.update();

    expect(card._Metadata._Data.content).toBe(undefined);
    expect(card._Metadata._CTA.title).toBe(cta.toUpperCase());
  });

  it('updates logo', () => {
    expect(card.logo).toBe(undefined);
    card.logo = circle;
    expect(card.logo).toBe(circle);
  });
});

const createCardHorizontalLargeComponent = TestUtils.makeCreateComponent(
  CardHorizontalLarge,
  {}
);

describe('CardHorizontalLarge', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardHorizontalLargeComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it.skip('shows focus ring with custom color on focus', () => {
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

  it('updates cta to uppercase and hides data', async () => {
    const data = 'Data';
    const cta = 'CTA';
    [card, testRenderer] = createCardHorizontalComponent(
      { data, cta },
      { spyOnMethods: ['_update'] }
    );
    await card.__updatePromiseSpy;
    card._update();
    testRenderer.update();

    expect(card._Metadata._Data.content).toBe(undefined);
    expect(card._Metadata._CTA.title).toBe(cta.toUpperCase());
  });

  it('updates logo', () => {
    expect(card.logo).toBe(undefined);
    card.logo = circle;
    expect(card.logo).toBe(circle);
  });
});

const createCardVerticalComponent = TestUtils.makeCreateComponent(
  CardVertical,
  {}
);

describe('CardVertical', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardVerticalComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it.skip('shows focus ring with custom color on focus', () => {
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

const createCardVerticalLargeComponent = TestUtils.makeCreateComponent(
  CardVerticalLarge,
  {}
);

describe('CardVerticalLarge', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardVerticalLargeComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it.skip('shows focus ring with custom color on focus', () => {
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

const createCardVerticalDynamicComponent = TestUtils.makeCreateComponent(
  CardVerticalDynamic,
  {}
);

describe('CardVerticalDynamic', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardVerticalDynamicComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it.skip('shows focus ring with custom color on focus', () => {
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

  it('updates cta to uppercase and hides data', async () => {
    const data = 'Data';
    const cta = 'CTA';
    [card, testRenderer] = createCardHorizontalComponent(
      { data, cta },
      { spyOnMethods: ['_update'] }
    );
    await card.__updatePromiseSpy;
    card._update();
    testRenderer.update();

    expect(card._Metadata._Data.content).toBe(undefined);
    expect(card._Metadata._CTA.title).toBe(cta.toUpperCase());
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
