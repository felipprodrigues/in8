"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/Header/styles.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Header/styles.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderContainer: function() { return /* binding */ HeaderContainer; },\n/* harmony export */   HeaderContent: function() { return /* binding */ HeaderContent; },\n/* harmony export */   NewTransactionButton: function() { return /* binding */ NewTransactionButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: \",\n        \";\\n  padding: 2.5rem 0 7.5rem;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  max-width: 1120px;\\n  margin: 0 auto;\\n  padding: 0 1.5rem;\\n\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n\\n  & > div#logo__holder {\\n    border: 2px solid \",\n        \";\\n    border-radius: 6px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 2rem;\\n  }\\n\\n  & > div > span {\\n    color: \",\n        \";\\n    font-weight: bold;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 50px;\\n  border: 0;\\n  background-color: \",\n        \";\\n  color: \",\n        \";\\n  font-weight: bold;\\n  padding: 0 1.25rem;\\n  border-radius: 6px;\\n  cursor: pointer;\\n\\n  &:hover {\\n    background-color: \",\n        \";\\n    transition: background-color 0.5s;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject(), (props)=>props.theme[\"gray-900\"]);\nconst HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1(), (props)=>props.theme[\"green-300\"], (props)=>props.theme[\"green-300\"]);\nconst NewTransactionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject2(), (props)=>props.theme[\"green-500\"], (props)=>props.theme.white, (props)=>props.theme[\"green-700\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLGtCQUFrQkQseURBQU1BLENBQUNFLE1BQU0sb0JBQ3RCLENBQUNDLFFBQVVBLE1BQU1DLEtBQUssQ0FBQyxXQUFXLEVBRXREO0FBRUssTUFBTUMsZ0JBQWdCTCx5REFBTUEsQ0FBQ00sR0FBRyxxQkFXZixDQUFDSCxRQUFVQSxNQUFNQyxLQUFLLENBQUMsWUFBWSxFQVM5QyxDQUFDRCxRQUFVQSxNQUFNQyxLQUFLLENBQUMsWUFBWSxFQUc5QztBQUVLLE1BQU1HLHVCQUF1QlAseURBQU1BLENBQUNRLE1BQU0scUJBRzNCLENBQUNMLFFBQVVBLE1BQU1DLEtBQUssQ0FBQyxZQUFZLEVBQzlDLENBQUNELFFBQVVBLE1BQU1DLEtBQUssQ0FBQ0ssS0FBSyxFQU9mLENBQUNOLFFBQVVBLE1BQU1DLEtBQUssQ0FBQyxZQUFZLEVBR3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzPzFiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5oZWFkZXJgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZVtcImdyYXktOTAwXCJdfTtcbiAgcGFkZGluZzogMi41cmVtIDAgNy41cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiA+IGRpdiNsb2dvX19ob2xkZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZVtcImdyZWVuLTMwMFwiXX07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG5cbiAgJiA+IGRpdiA+IHNwYW4ge1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWVbXCJncmVlbi0zMDBcIl19O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmV3VHJhbnNhY3Rpb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lW1wiZ3JlZW4tNTAwXCJdfTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS53aGl0ZX07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZVtcImdyZWVuLTcwMFwiXX07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkhlYWRlckNvbnRhaW5lciIsImhlYWRlciIsInByb3BzIiwidGhlbWUiLCJIZWFkZXJDb250ZW50IiwiZGl2IiwiTmV3VHJhbnNhY3Rpb25CdXR0b24iLCJidXR0b24iLCJ3aGl0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/Header/styles.ts\n"));

/***/ })

});