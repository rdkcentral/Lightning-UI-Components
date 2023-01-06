import lng from '@lightningjs/core';
import { SpeechType } from '../../mixins/withAnnouncer';

export default class Base extends lng.Component {
  skipPlinko: boolean;
  centerInParent: boolean;
  _announce: SpeechType;
  _whenEnabled: Promise<void>;
  _getFocusScale(): number;
  _getUnfocusScale(): number;
  _update(): void;
  _focus(): void;
  _unfocus(): void;
  _smooth?: boolean;

  set announce(announce: SpeechType);
  get announce(): SpeechType;
}
