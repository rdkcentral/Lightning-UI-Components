(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6711],{

/***/ "../../../node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ DocsRenderer)
});

// UNUSED EXPORTS: defaultComponents

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ../../../node_modules/react-dom/client.js
var client = __webpack_require__("../../../node_modules/react-dom/client.js");
;// CONCATENATED MODULE: ../../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs



var nodes=new Map;function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var WithCallback=({callback,children})=>{let once=react.useRef();return react.useLayoutEffect(()=>{once.current!==callback&&(once.current=callback,callback());},[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return {promise:new Promise((res,rej)=>{resolve=res,reject=rej;}),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(getIsReactActEnvironment()){root.render(node);return}let{promise,resolve}=Promise.withResolvers();return root.render(react.createElement(WithCallback,{callback:resolve},node)),promise},unmountElement=(el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el));},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=client/* createRoot */.H(el,rootOptions),nodes.set(el,root)),root};



;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs




var defaultComponents={code:dist/* CodeOrSourceMdx */.XA,a:dist/* AnchorMdx */.zE,...dist/* HeadersMdx */.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments);this.state={hasError:!1};}static getDerivedStateFromError(){return {hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err);}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist/* Docs */.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 9159).then(__webpack_require__.bind(__webpack_require__, "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>renderElement(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve());})},this.unmount=element=>{unmountElement(element);};}};




/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/ThemingTutorial.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs + 1 modules
var chunk_NUUEMKO5 = __webpack_require__("../../../node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs
var chunk_H6MOWX77 = __webpack_require__("../../../node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-docs/dist/index.mjs




;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/docs/ThemingTutorial.mdx



/*prettier-ignore*/
/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
\*/



function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "Docs / Theming/ Tutorial"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "building-an-application-with-theming",
      children: "Building an Application with Theming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before proceeding, read through the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/docs-theming-overview--docs",
        children: "Theming Overview"
      }), " documentation to understand the basics of a global theme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can see the final result of this example tutorial via this ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/playground/#gHHjFcXttzK1",
        rel: "nofollow",
        children: "Lightning Playground link"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-appjs",
      children: "Setting up App.js"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Similarly to creating a Lightning application without LUI or Theming, you will need to create an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App"
      }), " class. You can learn more about application setup ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/docs/#/getting-started/CreateApp/index",
        rel: "nofollow",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this example, we will create a single page application using the default Base theme. For more information about setting a custom theme, please refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/docs-theming-overview--docs",
        children: "Theming Overview"
      }), ". Additionally, the following example can easily be adapted to complex applications using the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/router/index",
        rel: "nofollow",
        children: "Lightning SDK Router"
      }), ". If you choose this setup, we recommend setting your theme via the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/router/configuration?id=boot",
        rel: "nofollow",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "boot"
        })
      }), " key, like this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "boot: async () => {\n  await context.setTheme(YourThemeObjectHere);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In our App.js file, we will define our single page, which will reference a new component type, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExamplePage"
      }), ". We will create this ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExamplePage"
      }), " in the next step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import Lightning from '@lightningjs/core';\nimport ExamplePage from './ExamplePage';\n\nexport default class App extends Lightning.Application {\n  static _template() {\n    return {\n      Page: { type: ExamplePage }\n    };\n  }\n\n  _getFocused() {\n    return this.tag('Page');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-a-page",
      children: "Creating a Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-the-base-component",
      children: "Understanding the Base Component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All components in LUI extend a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base"
      }), " component, which you can read about ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/docs-base-component--docs",
        children: "here"
      }), ". This Base component is wrapped in helpful mixins like ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/utilities-withthemestyles--docs",
        children: "withThemeStyles"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/utilities-withhandlekey--docs",
        children: "withHandleKey"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/utilities-withupdates--docs",
        children: "withUpdates"
      }), ", and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/utilities-withtags--docs",
        children: "withTags"
      }), ". It is essential to utilize this Base component in your applications in order to get the full benefits of theming."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We will start building our custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExamplePage"
      }), " by extending this ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base"
      }), " component, like so:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { Base } from '@lightningjs/ui-components';\n\nexport default class ExamplePage extends Base {\n  static get __componentName() {\n    return 'ExamplePage';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "simplifying-the-static-_template",
      children: "Simplifying the static _template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While it is common to set up most of a component in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static _template"
      }), ", you will not be able to get the full benefits of a custom theme by using the template alone. This is because our components have a unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update"
      }), " lifecycle (via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/utilities-withupdates--with-updates",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "withUpdates"
        })
      }), ") that ensures any time a style property is updated (whether from a global theme update or a change to an instance of a component), they re-render."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you reference theme properties inside of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_template"
      }), ", which only runs ", (0,jsx_runtime.jsx)(_components.em, {
        children: "once"
      }), ", regardless of theme updates, your custom component will never render with the new custom theme values. For example, if you have a custom theme set for your application, things will run in the following order:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application startup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Component creation utilizing the Base theme"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A new theme is set via the global ", (0,jsx_runtime.jsx)(_components.code, {
          children: "context"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The component receives an event to update its style"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to ensure the component always applies the most up-to-date style values, we will keep them out of the template:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExamplePage.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { Base, Button, TextBox } from '@lightningjs/ui-components';\n\nexport default class ExamplePage extends Base {\n  static get __componentName() {\n    return 'ExamplePage';\n  }\n\n  static _template() {\n    return {\n      Content: {\n        w: w => w,\n        h: h => h,\n        flex: {\n          direction: 'column',\n          justifyContent: 'center'\n        },\n        Title: { type: TextBox },\n        Description: { type: TextBox },\n        Button: { type: Button }\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "leveraging-withtags",
      children: "Leveraging withTags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In order to make our lives easier as we write code, we will also add this static ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tags"
      }), " method to create local variable shorthands. For example, instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this.tag('Title')"
      }), ", we can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this._Title"
      }), ". For more information, check the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withTags"
      }), " documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "static get tags() {\n  return [\n    { name: 'Title', path: 'Content.Title' },\n    { name: 'Description', path: 'Content.Description' },\n    { name: 'Button', path: 'Content.Button' }\n  ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "utilizing-the-theme",
      children: "Utilizing the Theme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now, we will tap into the global theme and update each element (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Title"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Description"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), ") via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We start by ", (0,jsx_runtime.jsx)(_components.em, {
        children: "supering"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " in order to ensure we retain any logic from the Base component we are extending, or any other component that we may have extended along the way. Next, we start tapping into the global theme via the imported ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), ". Here, we are setting our ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExamplePage"
      }), " component to fill the screen's height and width, as well as moving over to the right on the x-axis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExamplePage.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { Base, Button, TextBox, context } from '@lightningjs/ui-components';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inside the class declaration, after the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_template"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tags"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_update() {\n  super._update();\n  this.w = context.theme.layout.screenW;\n  this.h = context.theme.layout.screenH;\n  this.x = context.theme.layout.marginX;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next, we can start updating each individual element. Here is an example to update the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Title"
      }), " element. Make sure you call this new method to the end of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_updateTitle() {\n  this._Title.patch({\n    content: 'Welcome to our Page!',\n    w: this.w - context.theme.layout.marginX * 2,\n    fixed: true,\n    flexItem: { marginBottom: context.theme.spacer.lg },\n    style: { textStyle: 'display2' }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here, we are referencing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "layout.marginX"
      }), " token to determine how wide the TextBox can be. This ensures that there is a safe amount of padding on both the left and right side of the screen. Additionally, we are using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spacer.lg"
      }), " token as the space between the Title and Description, and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display2"
      }), " typography token to set the text size and other font properties."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you have set a custom theme, these values will reflect that of the new object and dynamically update the component. You can even test this on the fly using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.setTheme"
      }), " method outlined in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/docs-theming-overview--docs",
        children: "Theming Overview"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next, we will then repeat this approach with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Description"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), ", ensuring all of our new methods are called from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_updateDescription() {\n  this._Description.patch({\n    content: 'Here, we show some example text and a button, all laid out utilizing tokens from our theme file!',\n    w: this.w - context.theme.layout.marginX * 2,\n    fixed: true,\n    flexItem: { marginBottom: context.theme.spacer.xxxl },\n    style: { textStyle: 'body1' }\n  });\n}\n\n_updateButton() {\n  this._Button.patch({\n    title: 'OK'\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The final ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " method should look something like this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_update() {\n  super._update();\n\n  this.w = context.theme.layout.screenW;\n  this.h = context.theme.layout.screenH;\n  this.x = context.theme.layout.marginX;\n\n  this._updateTitle();\n  this._updateDescription();\n  this._updateButton();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, you can pass the focus of the component onto the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_getFocused() {\n  return this._Button;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here is the code up to this point on the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/playground/#zGGwPs5JFWap",
        rel: "nofollow",
        children: "Lightning Playground"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extracting-to-local-styles",
      children: "Extracting to Local Styles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At this point, your single page application should be running and utilizing theming tokens! This next step shows how we can abstract references like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.theme.layout.screenW"
      }), " out into a separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "style"
      }), " file just for this component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here, we are mapping the theme tokens to new variables that can be leveraged directly in the component class."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExamplePage.styles.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export const base = theme => ({\n  height: theme.layout.screenH,\n  width: theme.layout.screenW,\n  marginX: theme.layout.marginX,\n  titleMarginBottom: theme.spacer.lg,\n  descriptionMarginBottom: theme.spacer.xxxl\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In our ExamplePage.js, we need to import this new file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import * as styles from './ExamplePage.styles';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then we will add it to the static ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__themeStyle"
      }), " getter:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "static get __themeStyle() {\n  return styles;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At this point, we can remove the import and all references for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " and instead replace it with references to the local ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this.style"
      }), " object. Here are all of the references to update:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "context.theme.layout.screenH"
        }), " --> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.style.height"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "context.theme.layout.screenW"
        }), " --> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.style.width"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "context.theme.layout.marginX"
        }), " --> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.style.marginX"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "context.theme.spacer.lg"
        }), " --> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.style.titleMarginBottom"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "context.theme.spacer.xxxl"
        }), " --> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this.style.descriptionMarginBottom"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removing-width-and-height-setters",
      children: "Removing width and height setters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withThemeStyles"
      }), " mixin automatically interprets all instaces of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "height"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), " found in the style object and sets the component dimensions to those values. Therefore, we can simplify our ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " method to the following, completely removing the setters for ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".h"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".w"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_update() {\n  super._update();\n  this.x = this.style.marginX;\n  this._updateTitle();\n  this._updateDescription();\n  this._updateButton();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "final-result",
      children: "Final Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Congratulations, you have just created a page using LUI and Theming! You can find the final results of this tutorial via this ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lightningjs.io/playground/#gHHjFcXttzK1",
        rel: "nofollow",
        children: "Lightning Playground link"
      }), "!"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "../../../node_modules/@storybook/core/dist/components sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../../node_modules/@storybook/core/dist/components sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../../node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../../node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../../node_modules/react-dom/client.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var m = __webpack_require__("../../../node_modules/react-dom/index.js");
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ })

}]);
//# sourceMappingURL=docs-ThemingTutorial-mdx.99152368.iframe.bundle.js.map