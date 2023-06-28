import lng from '@lightningjs/core';

export type JSONTreeProperties = any; // TODO
export type JSONTree = Record<string, JSONTreeProperties>;

export type testRenderer = {
  toJSON: (children?: number) => JSONTree;
  update: () => void;
  forceAllUpdates: () => void;
  focus: () => void;
  unfocus: () => void;
  getContext: () => any; // TODO: Context does not have a TS def

  // TODO: I don't think this is correct, lng.Element.ElementChildList is readonly so can't access from lng
  getInstance: () => lng.Element;

  getFocused: () => lng.Component<
    lng.Component.TemplateSpecLoose,
    lng.Component.TypeConfig
  >;
  getApp: () => lng.Application;
  keyPress: (key: string | Record<'key', string>) => void;
  keyRelease: (key: string | Record<'key', string>) => void;
  destroy: () => void;
  focusPath: () => string[];
};

export type createOptions = {
  applicationW: number;
  applicationH: number;
  [key: string]: any;
};

declare function create(
  Component: lng.Component,
  options?: createOptions
): testRenderer;

export type toJSON = (
  element: lng.Element,
  options?: { children: number }
) => JSONTree;

declare namespace _default {
  export { create };
  export { toJSON };
}

export default _default;
