import Artwork from './foundations/artwork.foundations';
import Badge from './metadata/badge.metadata';
import Button from './controls/button.controls';
import ButtonSmall from './controls/buttonsmall.controls';
import Card from './tilesAndCards/card.tilesandcards';
import CardAbout from './tilesAndCards/cardabout.tilesandcards';
import CardAboutLarge from './tilesAndCards/cardaboutlarge.tilesandcards';
import CardAboutStacked from './tilesAndCards/cardaboutstacked.tilesandcards';
import CardContent from './tilesAndCards/cardcontent.tilesandcards';
import CardContentHero from './tilesAndCards/cardcontenthero.tilesandcards';
import CardContentHorizontal from './tilesAndCards/cardcontenthorizontal.tilesandcards';
import CardContentHorizontalLarge from './tilesAndCards/cardcontenthorizontallarge.tilesandcards';
import CardContentVertical from './tilesAndCards/cardcontentvertical.tilesandcards';
import CardContentVerticalSmall from './tilesAndCards/cardcontentverticalsmall.tilesandcards';
import CardPersonality from './tilesAndCards/cardpersonality.tilesandcards';
import CardSection from './tilesAndCards/cardsection.tilesandcards';
import CardTitle from './tilesAndCards/cardtitle.tilesandcards';
import Checkbox from './utilities/checkbox.utilities';
import CheckboxSmall from './utilities/checkboxsmall.utilities';
import Column from './navigation/column.navigation';
import Control from './controls/control.controls';
import ControlSmall from './controls/controlsmall.controls';
import Distractor from './utilities/distractor.utilities';
import FocusManager from './navigation/focusmanager.navigation';
import FocusRing from './foundations/focusring.foundations';
import Icon from './elements/icon.element';
import Label from './metadata/label.metadata';
import ListItem from './controls/listitem.controls';
import ProgressBar from './utilities/progressbar.utilities';
import Radio from './utilities/radio.utilities';
import RadioSmall from './utilities/radiosmall.utilities';
import Row from './navigation/row.navigation';
import ScrollWrapper from './layout/scrollwrapper.layout';
import Slider from './utilities/slider.utilities';
import SliderLarge from './utilities/sliderlarge.utilities';
import Tab from './layout/tab.layout';
import TabBar from './layout/tabbar.layout';
import TextBox from './text/textbox.text';
import Tile from './tilesAndCards/tile.tilesandcards';
import Toggle from './utilities/toggle.utilities';
import ToggleSmall from './utilities/togglesmall.utilities';
import Wave from './utilities/wave.utilities';

export default function getPageObject(pageName) {
  const pageObjects = {
    artwork: Artwork,
    badge: Badge,
    button: Button,
    buttonsmall: ButtonSmall,
    card: Card,
    cardabout: CardAbout,
    cardaboutlarge: CardAboutLarge,
    cardaboutstacked: CardAboutStacked,
    cardcontent: CardContent,
    cardcontenthero: CardContentHero,
    cardcontenthorizontal: CardContentHorizontal,
    cardcontenthorizontallarge: CardContentHorizontalLarge,
    cardcontentvertical: CardContentVertical,
    cardcontentverticalsmall: CardContentVerticalSmall,
    cardpersonality: CardPersonality,
    cardsection: CardSection,
    cardtitle: CardTitle,
    checkbox: Checkbox,
    checkboxsmall: CheckboxSmall,
    column: Column,
    control: Control,
    controlsmall: ControlSmall,
    distractor: Distractor,
    focusmanager: FocusManager,
    focusring: FocusRing,
    label: Label,
    listitem: ListItem,
    progressbar: ProgressBar,
    radio: Radio,
    radiosmall: RadioSmall,
    row: Row,
    scrollwrapper: ScrollWrapper,
    slider: Slider,
    sliderlarge: SliderLarge,
    tab: Tab,
    tabbar: TabBar,
    textbox: TextBox,
    tile: Tile,
    toggle: Toggle,
    togglesmall: ToggleSmall,
    wave: Wave,
    icon: Icon
  };

  if (pageName in pageObjects) {
    return pageObjects[pageName];
  } else {
    throw new Error(
      `${pageName} page not found! \nPlease check the page object name or implement the missing case.`
    );
  }
}
