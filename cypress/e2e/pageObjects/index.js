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
import Gradient from './foundations/gradient.foundations';
import FocusManager from './navigation/focusmanager.navigation';
import FocusRing from './foundations/focusring.foundations';
import Icon from './elements/icon.element';
import Key from './keyboard/key.keyboard';
import Keyboard from './keyboard/keyboard.keyboard';
import Knob from './utilities/knob.utilities';
import Label from './metadata/label.metadata';
import ListItem from './controls/listitem.controls';
import Notification from './foundations/notification.foundations';
import ProgressBar from './utilities/progressbar.utilities';
import Provider from './utilities/provider.utilities';
import Radio from './utilities/radio.utilities';
import RadioSmall from './utilities/radiosmall.utilities';
import Row from './navigation/row.navigation';
import ScrollWrapper from './layout/scrollwrapper.layout';
import Shadow from './foundations/shadow.foundations';
import Slider from './utilities/slider.utilities';
import SliderLarge from './utilities/sliderlarge.utilities';
import Surface from './foundations/surface.foundations';
import Tab from './layout/tab.layout';
import TabBar from './layout/tabbar.layout';
import TextBox from './text/textbox.text';
import Tile from './tilesAndCards/tile.tilesandcards';
import TitleRow from './navigation/titlerow.navigation';
import Toggle from './utilities/toggle.utilities';
import ToggleSmall from './utilities/togglesmall.utilities';
import TooltipBasic from './utilities/tooltipbasic.utilities';
import Wave from './utilities/wave.utilities';
import WithAnnouncerBasic from './accessibility/withAnnouncerBasic.accessibility';
import WithEditItems from './utilities/withedititems.utilities'
import WithHandleKey from './utilities/withHandleKey.utilities';
import WithSelections from './utilities/withSelections.utilities';

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
    gradient: Gradient,
    focusmanager: FocusManager,
    focusring: FocusRing,
    icon: Icon,
    key: Key,
    keyboard: Keyboard,
    knob: Knob,
    label: Label,
    listitem: ListItem,
    notification: Notification,
    progressbar: ProgressBar,
    provider: Provider,
    radio: Radio,
    radiosmall: RadioSmall,
    row: Row,
    scrollwrapper: ScrollWrapper,
    shadow: Shadow,
    slider: Slider,
    sliderlarge: SliderLarge,
    surface: Surface,
    tab: Tab,
    tabbar: TabBar,
    textbox: TextBox,
    tile: Tile,
    titlerow: TitleRow,
    toggle: Toggle,
    togglesmall: ToggleSmall,
    tooltip: TooltipBasic,
    wave: Wave,
    withannouncer: WithAnnouncerBasic,
    withedititems: WithEditItems,
    withhandlekey: WithHandleKey,
    withselections: WithSelections
  };

  if (pageName in pageObjects) {
    return pageObjects[pageName];
  } else {
    throw new Error(
      `${pageName} page not found! \nPlease check the page object name or implement the missing case.`
    );
  }
}
