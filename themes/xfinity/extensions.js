import focusRingExtension from '../../extensions/FocusRing.extension';

export default [
  {
    targetComponent: [
      'Knob',
      'Surface',
      // TODO: All extensions from a parent class to apply to extended classes and remove the below
      // (ie Tiles and Cards should automatically get the focus ring because they extends Surface)
      'Tile',
      'NewCard',
      'CardTitle',
      'CardSection',
      'AboutCard',
      'AboutStackedCard'
    ],
    extension: focusRingExtension
  }
];
