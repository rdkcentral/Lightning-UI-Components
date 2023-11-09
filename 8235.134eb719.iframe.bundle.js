"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8235],{

/***/ "../../../node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DocsRenderer: () => (/* reexport */ DocsRenderer)
});

// UNUSED EXPORTS: defaultComponents

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react-dom/client.js
var client = __webpack_require__("../../../node_modules/react-dom/client.js");
;// CONCATENATED MODULE: ../../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs



var nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return (0,react.useLayoutEffect)(()=>{once.current!==callback&&(once.current=callback,callback());},[callback]),children},renderElement=async(node,el)=>{let root=await getReactRoot(el);return new Promise(resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node));})},unmountElement=(el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el));},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root};



// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs




var defaultComponents={code:dist/* CodeOrSourceMdx */.bD,a:dist/* AnchorMdx */.Ct,...dist/* HeadersMdx */.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments);this.state={hasError:!1};}static getDerivedStateFromError(){return {hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err);}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist/* Docs */.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 8538).then(__webpack_require__.bind(__webpack_require__, "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>renderElement(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve());})},this.unmount=element=>{unmountElement(element);};}};



;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs



/***/ }),

/***/ "../../../node_modules/react-dom/client.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__("../../../node_modules/react-dom/index.js");
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ })

}]);
//# sourceMappingURL=8235.134eb719.iframe.bundle.js.map