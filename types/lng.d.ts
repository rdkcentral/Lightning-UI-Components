/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/ban-types
type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * @lightningjs/core Typings
 */
declare module '@lightningjs/core' {
  let lightningUI: Record<string, unknown>;
  /**
   * Essentially the same as `typeof Component` but can be used as a Generic parameter constraint
   */
  type __TypeOfComponent = Constructor<Component> &
    Pick<typeof Component, keyof typeof Component>;
  /**
   * Represents an arbitrary Lightning patch structure as may be returned by a Component._template() static function
   */
  type __TemplateSpec = Record<string, unknown>;
  /**
   * Represents a potentially specific template spec of a Component.
   *
   * Example:
   * {
   *   type: Button,
   *   title: 'Button Title'
   * }
   */
  type __ComponentSpec<
    ComponentType extends __TypeOfComponent = typeof Component
  > = {} & Partial<InstanceType<ComponentType> & Record<string, unknown>>;

  namespace Tools {
    function getShadowRect(
      w: number,
      h: number,
      radius?: number,
      blur?: number,
      margin?: number
    ): any;
  }

  namespace shaders {
    class RoundedRectangle {}
  }

  interface __TextType {
    text?: string;
  }
  class Element {
    src: string;
    set text(text: string | __TextType);
    get text(): __TextType;

    /**
     * Patching is a way to change the properties of existing elements in a template.
     * @param object
     * @param createMode
     */
    patch(object: Record<string, unknown>, createMode?: boolean): void;

    get parent(): Element | null;

    set smooth(payload: Record<string, unknown>);

    get children(): any[];

    get childList(): any;
  }
  class Component extends Element {
    static _template(): Record<string, unknown>;

    _construct(): void;

    get children(): any[];

    get parent(): Component;

    /**
     * Retrieve an Element or Component by its ref path
     * @param refpath
     */
    tag(refpath: string): any;

    _focus(newTarget, prevTarget): void;
    _unfocus(newTarget): void;

    /**
     * Trigger new focus
     */
    _refocus(): void;

    /**
     * Fire event through all ancestors
     *
     * @param eventName
     * @param payload
     */
    fireAncestors(eventName: string, payload: unknown): void;

    /**
     * Lifecycle Events
     * https://rdkcentral.github.io/Lightning/docs/components/overview#component-events
     */
    _construct(): void;
    _build(): void;
    _setup(): void;
    _init(): void;
    _attach(): void;
    _detach(): void;
    _firstEnable(): void;
    _enable(): void;
    _disable(): void;
    _firstActive(): void;
    _active(): void;
    _inactive():void;

    set x(x: number);
    get x(): number;

    set y(y: number);
    get y(): number;

    set w(w: number);
    get w(): number;

    set h(h: number);
    get h(): number;

    set alpha(a: number);
    get alpha(): number;

    set smooth(payload: Record<string, unknown>);
  }

  class Stage {
    get w(): number;
    get h(): number;
    getRenderPrecision(): number;
  }
}
