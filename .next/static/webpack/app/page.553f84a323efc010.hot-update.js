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

/***/ "(app-pages-browser)/./components/ProjectCard.tsx":
/*!************************************!*\
  !*** ./components/ProjectCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_3d_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/3d-card */ \"(app-pages-browser)/./components/3d-card.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./utils/cn.tsx\");\n\n\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { imgUrl, title, description, gitUrl, previewUrl, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n            className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_5__.cn)(\"inter-var \", className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardBody, {\n                className: \"bg-[#04071d] grey relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.3] w-full h-full rounded-xl p-3 border  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                        translateZ: \"100\",\n                        className: \"w-full mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            src: imgUrl,\n                            height: \"1000\",\n                            width: \"1000\",\n                            className: \"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl\",\n                            alt: \"thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                        translateZ: \"50\",\n                        className: \"text-sm font-normal dark:text-white text-white py-4\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mt-10 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                translateZ: 20,\n                                as: next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                href: gitUrl,\n                                target: \"__blank\",\n                                className: \"px-4 py-2 rounded-xl text-xs font-normal text-white\",\n                                children: \"GitHub Link →\"\n                            }, void 0, false, {\n                                fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    translateZ: 20,\n                                    as: \"button\",\n                                    className: \"px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold\",\n                                    href: previewUrl,\n                                    children: \"Preview\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/patelhetrasikkumar/GithubRepo/Portfolio_Website/components/ProjectCard.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUVHO0FBQzRDO0FBQzFDO0FBQ0M7QUFXaEMsTUFBTU8sY0FBMEM7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBQ0MsU0FBUyxFQUFFO0lBQzNHLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUNiLDRFQUFDWCw4REFBYUE7WUFBQ1csV0FBV1AsNkNBQUVBLENBQUMsY0FBYU87c0JBQ3hDLDRFQUFDVix5REFBUUE7Z0JBQUNVLFdBQVU7O2tDQUNsQiw4REFBQ1QseURBQVFBO3dCQUFDVyxZQUFXO3dCQUFNRixXQUFVO2tDQUNuQyw0RUFBQ1Isa0RBQUtBOzRCQUNKVyxLQUFLUjs0QkFDTFMsUUFBTzs0QkFDUEMsT0FBTTs0QkFDTkwsV0FBVTs0QkFDVk0sS0FBSTs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNmLHlEQUFRQTt3QkFDUFcsWUFBVzt3QkFDWEYsV0FBVTtrQ0FFVEg7Ozs7OztrQ0FHSCw4REFBQ0k7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDVCx5REFBUUE7Z0NBQ1BXLFlBQVk7Z0NBQ1pLLElBQUluQixpREFBSUE7Z0NBQ1JvQixNQUFNVjtnQ0FDTlcsUUFBTztnQ0FDUFQsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDVTswQ0FDRCw0RUFBQ25CLHlEQUFRQTtvQ0FDUFcsWUFBWTtvQ0FDWkssSUFBRztvQ0FDSFAsV0FBVTtvQ0FDVlEsTUFBTVQ7OENBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNiO0tBOUNNTDtBQWdETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeD9hN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvZGVCcmFja2V0SWNvbiwgRXllSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENhcmRDb250YWluZXIsIENhcmRCb2R5LCBDYXJkSXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHMvM2QtY2FyZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL3V0aWxzL2NuXCI7XG5cbmludGVyZmFjZSBQcm9qZWN0Q2FyZFByb3BzIHtcbiAgaW1nVXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGdpdFVybDogc3RyaW5nO1xuICBwcmV2aWV3VXJsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgUHJvamVjdENhcmQ6IFJlYWN0LkZDPFByb2plY3RDYXJkUHJvcHM+ID0gKHsgaW1nVXJsLCB0aXRsZSwgZGVzY3JpcHRpb24sIGdpdFVybCwgcHJldmlld1VybCxjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICA8Q2FyZENvbnRhaW5lciBjbGFzc05hbWU9e2NuKFwiaW50ZXItdmFyIFwiLGNsYXNzTmFtZSl9ID5cbiAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cImJnLVsjMDQwNzFkXSBncmV5IHJlbGF0aXZlIGdyb3VwL2NhcmQgIGRhcms6aG92ZXI6c2hhZG93LTJ4bCBkYXJrOmhvdmVyOnNoYWRvdy1lbWVyYWxkLTUwMC9bMC4xXSBkYXJrOmJnLWJsYWNrIGRhcms6Ym9yZGVyLXdoaXRlL1swLjJdIGJvcmRlci13aGl0ZS9bMC4zXSB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQteGwgcC0zIGJvcmRlciAgXCI+XG4gICAgICAgICAgPENhcmRJdGVtIHRyYW5zbGF0ZVo9XCIxMDBcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17aW1nVXJsfVxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02MCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgZ3JvdXAtaG92ZXIvY2FyZDpzaGFkb3cteGxcIlxuICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmRJdGVtPlxuICAgICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgICAgdHJhbnNsYXRlWj1cIjUwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ub3JtYWwgZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgcHktNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvQ2FyZEl0ZW0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTEwIFwiPlxuICAgICAgICAgICAgPENhcmRJdGVtXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZVo9ezIwfVxuICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgaHJlZj17Z2l0VXJsfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQteGwgdGV4dC14cyBmb250LW5vcm1hbCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2l0SHViIExpbmsg4oaSXG4gICAgICAgICAgICA8L0NhcmRJdGVtPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICA8Q2FyZEl0ZW1cbiAgICAgICAgICAgICAgdHJhbnNsYXRlWj17MjB9XG4gICAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQteGwgYmctd2hpdGUgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtYmxhY2sgdGV4dC1ibGFjayB0ZXh0LXhzIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgIGhyZWY9e3ByZXZpZXdVcmx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgIDwvQ2FyZEl0ZW0+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmRDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQ2FyZENvbnRhaW5lciIsIkNhcmRCb2R5IiwiQ2FyZEl0ZW0iLCJJbWFnZSIsImNuIiwiUHJvamVjdENhcmQiLCJpbWdVcmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2l0VXJsIiwicHJldmlld1VybCIsImNsYXNzTmFtZSIsImRpdiIsInRyYW5zbGF0ZVoiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImFzIiwiaHJlZiIsInRhcmdldCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectCard.tsx\n"));

/***/ })

});