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

/***/ "(app-client)/./src/app/components/Chart/index.tsx":
/*!********************************************!*\
  !*** ./src/app/components/Chart/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChartComponent: function() { return /* binding */ ChartComponent; },\n/* harmony export */   data: function() { return /* binding */ data; },\n/* harmony export */   options: function() { return /* binding */ options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-client)/./node_modules/chart.js/dist/chart.mjs\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-client)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"(app-client)/./src/app/components/Chart/styles.ts\");\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nconst options = {\n    responsive: true,\n    plugins: {\n        legend: {\n            position: \"top\"\n        }\n    }\n};\nconst labels = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            label: \"Dataset 1\",\n            data: labels.map((item)=>item),\n            borderColor: \"rgb(255, 99, 132)\",\n            backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n        },\n        {\n            label: \"Dataset 2\",\n            data: labels.map((item)=>item),\n            borderColor: \"rgb(53, 162, 235)\",\n            backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n        }\n    ]\n};\nfunction ChartComponent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ChartContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"/Users/felipprodrigues/Documents/dev/in8-test/src/app/components/Chart/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/felipprodrigues/Documents/dev/in8-test/src/app/components/Chart/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c = ChartComponent;\nvar _c;\n$RefreshReg$(_c, \"ChartComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBVVI7QUFDcUI7QUFJRztBQUUxQ0UsMkNBQU9BLENBQUNVLFFBQVEsQ0FDZFQsbURBQWFBLEVBQ2JDLGlEQUFXQSxFQUNYQyxrREFBWUEsRUFDWkMsaURBQVdBLEVBQ1hDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBR0QsTUFBTUksVUFBVTtJQUNyQkMsWUFBWTtJQUNaQyxTQUFTO1FBQ1BDLFFBQVE7WUFDTkMsVUFBVTtRQUNaO0lBQ0Y7QUFDRixFQUFFO0FBRUYsTUFBTUMsU0FBUztJQUFDO0lBQVc7SUFBWTtJQUFTO0lBQVM7SUFBTztJQUFRO0NBQU87QUFFeEUsTUFBTUMsT0FBTztJQUNsQkQ7SUFDQUUsVUFBVTtRQUNSO1lBQ0VDLE9BQU87WUFDUEYsTUFBTUQsT0FBT0ksR0FBRyxDQUFDLENBQUNDLE9BQVNBO1lBQzNCQyxhQUFhO1lBQ2JDLGlCQUFpQjtRQUNuQjtRQUNBO1lBQ0VKLE9BQU87WUFDUEYsTUFBTUQsT0FBT0ksR0FBRyxDQUFDLENBQUNDLE9BQVNBO1lBQzNCQyxhQUFhO1lBQ2JDLGlCQUFpQjtRQUNuQjtLQUNEO0FBQ0gsRUFBRTtBQUVLLFNBQVNDO0lBQ2QscUJBQ0UsOERBQUNmLG1EQUFjQTtrQkFDYiw0RUFBQ0QsaURBQUlBO1lBQUNHLFNBQVNBO1lBQVNNLE1BQU1BOzs7Ozs7Ozs7OztBQUdwQztLQU5nQk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeD8zMDc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbmltcG9ydCB7IHVzZVN1bW1hcnkgfSBmcm9tIFwiLi4vLi4vaG9vb2tzL3VzZVN1bW1hcnlcIjtcblxuaW1wb3J0IHsgQ2hhcnRDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIFBvaW50RWxlbWVudCxcbiAgTGluZUVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbik7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBwbHVnaW5zOiB7XG4gICAgbGVnZW5kOiB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIiBhcyBjb25zdCxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgbGFiZWxzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCJdO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkRhdGFzZXQgMVwiLFxuICAgICAgZGF0YTogbGFiZWxzLm1hcCgoaXRlbSkgPT4gaXRlbSksXG4gICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMjU1LCA5OSwgMTMyKVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjUpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJEYXRhc2V0IDJcIixcbiAgICAgIGRhdGE6IGxhYmVscy5tYXAoKGl0ZW0pID0+IGl0ZW0pLFxuICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDUzLCAxNjIsIDIzNSlcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhcnRDb21wb25lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPENoYXJ0Q29udGFpbmVyPlxuICAgICAgPExpbmUgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17ZGF0YX0gLz5cbiAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJMaW5lIiwiQ2hhcnRDb250YWluZXIiLCJyZWdpc3RlciIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwibGFiZWxzIiwiZGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJtYXAiLCJpdGVtIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDaGFydENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/Chart/index.tsx\n"));

/***/ })

});