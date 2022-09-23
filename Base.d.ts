import lng from '@lightningjs/core';
import { SpeechType } from './mixins/withAnnouncer';
import { WithHandleKeyConstructor } from './mixins/withHandleKey';
import { WithLayoutConstructor } from './mixins/withLayout';
import { WithTagsConstructor } from './mixins/withTags';
import { WithUpdatesConstructor } from './mixins/withUpdates';
import { WithThemeStylesConstructor } from './mixins/withThemeStyles';

declare const Base_base: WithLayoutConstructor<
  WithThemeStylesConstructor<
    WithUpdatesConstructor<
      WithTagsConstructor<WithHandleKeyConstructor<typeof lng.Component>>
    >,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Record<string, any>
  >
>;

export default class Base<
  TemplateSpec extends lng.Component.TemplateSpecLoose = lng.Component.TemplateSpecLoose,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base_base<TemplateSpec, TypeConfig> {
  static get __componentName(): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static get __themeStyles(): Record<string, any>;
  static get properties(): Array<string>;
  static get tags(): Array<string | { name: string; path: string }>;

  protected _whenEnabled: Promise<void>; //TODO move this to withUpdates mixin def
  protected _update(): void;
  protected _resetLoadedPromise(): void;
  protected _announce?: SpeechType;
  protected _announceContext?: SpeechType;

  set announce(announce: SpeechType);
  get announce(): SpeechType;
  set announceContext(announce: SpeechType);
  get announceContext(): SpeechType;
  set shouldSmooth(shouldSmooth: boolean);
  get shouldSmooth(): boolean;

  skipPlinko?: boolean;
  extraItemSpacing?: number;

  isFullyOnScreen(): boolean;
}
