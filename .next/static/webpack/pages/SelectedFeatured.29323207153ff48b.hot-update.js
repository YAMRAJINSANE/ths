"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/SelectedFeatured",{

/***/ "./src/pages/SelectedFeatured.jsx":
/*!****************************************!*\
  !*** ./src/pages/SelectedFeatured.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sanity_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sanity/sanity */ \"./src/Sanity/sanity.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SelectedFeatured() {\n    _s();\n    const { FeaturedPost  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.GlobalData);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(\"rOUTER\", router);\n    const id = router.asPath.split(\"/\")[1];\n    console.log(\"This is \", id);\n    const [News, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(FeaturedPost);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        _Sanity_sanity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(\"\\n    *[_type == 'featuredNews']{\\n     _id,\\n       body,\\n       categories,\\n       \\\"imageUrl\\\": image.asset->url,\\n       importantLinks,\\n       publishedAt,\\n       source,\\n       title\\n     \\n     }\\n    \").then((data)=>{\n            console.log(data);\n            setNews(data);\n        });\n    }, []);\n    const filteredData = News.filter((item)=>item._id == id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: filteredData.map((g)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between px-10 mt-[100px] md:flex-row flex-col \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[300px] flex relative flex-col items-center px-2 h-[500px] bg-green-600\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center px-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-auto md:w-[500px] w-[350px] flex flex-col gap-2 px-2 py-4 bg-white shadow-md rounded-md \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: g.imageUrl\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 1\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"Laato px-3 md:px-0 w-full\",\n                                    children: g.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" text-[10px] lg:text-[14px] w-full font-semibold text-gray-400 \",\n                                    children: [\n                                        \"Updated on \",\n                                        moment__WEBPACK_IMPORTED_MODULE_5___default()(g.publishedAt).format(\"dddd, MMMM Do YYYY\")\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: g.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 1\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[300px] h-[500px] bg-green-600\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rakes\\\\Desktop\\\\gg\\\\baby\\\\src\\\\pages\\\\SelectedFeatured.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(SelectedFeatured, \"dEXODN0KE4SdWdAdB6je2e2l2PA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SelectedFeatured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectedFeatured);\nvar _c;\n$RefreshReg$(_c, \"SelectedFeatured\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvU2VsZWN0ZWRGZWF0dXJlZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxQztBQUN3QjtBQUMxQjtBQUNLO0FBRWI7QUFFM0IsU0FBU1EsbUJBQW1COztJQUMxQixNQUFNLEVBQUNDLGFBQVksRUFBQyxHQUFHUCxpREFBVUEsQ0FBQ0csNENBQVVBO0lBQzVDLE1BQU1LLFNBQVNKLHNEQUFTQTtJQUMxQkssUUFBUUMsR0FBRyxDQUFDLFVBQVNGO0lBRW5CLE1BQU1HLEtBQUtILE9BQU9JLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBRXRDSixRQUFRQyxHQUFHLENBQUMsWUFBV0M7SUFDdkIsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFDckNRLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDVkwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSiw0REFBWSxDQUFFLDBOQVlYbUIsSUFBSSxDQUFDLENBQUNDLE9BQU87WUFDZlQsUUFBUUMsR0FBRyxDQUFDUTtZQUNaSCxRQUFRRztRQUNUO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZUwsS0FBS00sTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxHQUFHLElBQUlYO0lBR3RELHFCQUNFO2tCQUNEUSxhQUFhSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSTtZQUNyQixxQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FHZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0M7b0NBQUlDLEtBQUtKLEVBQUVLLFFBQVE7Ozs7Ozs4Q0FDWiw4REFBQ0M7b0NBQUdKLFdBQVU7OENBQTZCRixFQUFFTyxLQUFLOzs7Ozs7OENBQ2xELDhEQUFDQztvQ0FBRU4sV0FBVTs7d0NBQTBFO3dDQUFZckIsNkNBQU1BLENBQUNtQixFQUFFUyxXQUFXLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs4Q0FFaEksOERBQUNGOzhDQUNFUixFQUFFVyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNWCw4REFBQ1Y7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztRQU9uQjs7QUFHRjtHQS9EU3BCOztRQUVRRixrREFBU0E7OztLQUZqQkU7QUFpRVQsK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvU2VsZWN0ZWRGZWF0dXJlZC5qc3g/ZTcwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gJy4uL1Nhbml0eS9zYW5pdHknXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0ICx1c2VTdGF0ZSAsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR2xvYmFsRGF0YSB9IGZyb20gJy4vX2FwcCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5mdW5jdGlvbiBTZWxlY3RlZEZlYXR1cmVkKCkge1xyXG4gIGNvbnN0IHtGZWF0dXJlZFBvc3R9ID0gdXNlQ29udGV4dChHbG9iYWxEYXRhKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5jb25zb2xlLmxvZyhcInJPVVRFUlwiLHJvdXRlcilcclxuICBcclxuICBjb25zdCBpZCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJUaGlzIGlzIFwiLGlkKVxyXG4gIGNvbnN0IFtOZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKVxyXG5jb25zb2xlLmxvZyhGZWF0dXJlZFBvc3QpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNsaWVudC5mZXRjaChgXHJcbiAgICAqW190eXBlID09ICdmZWF0dXJlZE5ld3MnXXtcclxuICAgICBfaWQsXHJcbiAgICAgICBib2R5LFxyXG4gICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgIFwiaW1hZ2VVcmxcIjogaW1hZ2UuYXNzZXQtPnVybCxcclxuICAgICAgIGltcG9ydGFudExpbmtzLFxyXG4gICAgICAgcHVibGlzaGVkQXQsXHJcbiAgICAgICBzb3VyY2UsXHJcbiAgICAgICB0aXRsZVxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgIGApLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICBzZXROZXdzKGRhdGEpXHJcbiAgICB9KVxyXG4gICB9LCBbXSlcclxuXHJcbiAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IE5ld3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgPT0gaWQpO1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICB7ZmlsdGVyZWREYXRhLm1hcCgoZyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiAgcHgtMTAgbXQtWzEwMHB4XSBtZDpmbGV4LXJvdyBmbGV4LWNvbCAnPlxyXG48ZGl2IGNsYXNzTmFtZT0ndy1bMzAwcHhdIGZsZXggcmVsYXRpdmUgIGZsZXgtY29sICBpdGVtcy1jZW50ZXIgICBweC0yIGgtWzUwMHB4XSBiZy1ncmVlbi02MDAnPlxyXG5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4ICBmbGV4LWNvbCAgIGl0ZW1zLWNlbnRlciAgIHB4LTInPlxyXG48ZGl2IGNsYXNzTmFtZT0naC1hdXRvIG1kOnctWzUwMHB4XSB3LVszNTBweF0gZmxleCBmbGV4LWNvbCBnYXAtMiBweC0yIHB5LTQgIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLW1kICc+XHJcbjxpbWcgc3JjPXtnLmltYWdlVXJsfS8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nTGFhdG8gcHgtMyBtZDpweC0wIHctZnVsbCc+e2cudGl0bGV9PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1bMTBweF0gbGc6dGV4dC1bMTRweF0gIHctZnVsbCAgICAgZm9udC1zZW1pYm9sZCAgdGV4dC1ncmF5LTQwMCAgIFwiPlVwZGF0ZWQgb24ge21vbWVudChnLnB1Ymxpc2hlZEF0KS5mb3JtYXQoJ2RkZGQsIE1NTU0gRG8gWVlZWScpfTwvcD5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7Zy5ib2R5fVxyXG4gICAgICAgIDwvcD5cclxuPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszMDBweF0gaC1bNTAwcHhdIGJnLWdyZWVuLTYwMCc+XHJcblxyXG48L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgIClcclxuICB9KX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRGZWF0dXJlZCJdLCJuYW1lcyI6WyJjbGllbnQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdsb2JhbERhdGEiLCJ1c2VSb3V0ZXIiLCJtb21lbnQiLCJTZWxlY3RlZEZlYXR1cmVkIiwiRmVhdHVyZWRQb3N0Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlkIiwiYXNQYXRoIiwic3BsaXQiLCJOZXdzIiwic2V0TmV3cyIsImZldGNoIiwidGhlbiIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiX2lkIiwibWFwIiwiZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVXJsIiwiaDEiLCJ0aXRsZSIsInAiLCJwdWJsaXNoZWRBdCIsImZvcm1hdCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/SelectedFeatured.jsx\n"));

/***/ })

});