"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/features/login/atoms/login.ts":
/*!*******************************************!*\
  !*** ./src/features/login/atoms/login.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginAtom\": () => (/* binding */ loginAtom)\n/* harmony export */ });\n/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai/utils */ \"jotai/utils\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai_utils__WEBPACK_IMPORTED_MODULE_0__]);\njotai_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    name: \"\",\n    authenticated: false\n};\nconst loginAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__.atomWithStorage)(\"LOGIN_STATE\", initialState);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbG9naW4vYXRvbXMvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFPN0MsS0FBSyxDQUFDQyxZQUFZLEdBQWUsQ0FBQztJQUNoQ0MsSUFBSSxFQUFFLENBQUU7SUFDUkMsYUFBYSxFQUFFLEtBQUs7QUFDdEIsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsU0FBUyxHQUFHSiw0REFBZSxDQUN0QyxDQUFhLGNBQ2JDLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYmVjbm9zYy8uL3NyYy9mZWF0dXJlcy9sb2dpbi9hdG9tcy9sb2dpbi50cz82MDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b21XaXRoU3RvcmFnZSB9IGZyb20gXCJqb3RhaS91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTG9naW5TdGF0ZSB7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9naW5TdGF0ZSA9IHtcbiAgbmFtZTogXCJcIixcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5BdG9tID0gYXRvbVdpdGhTdG9yYWdlPExvZ2luU3RhdGU+KFxuICBcIkxPR0lOX1NUQVRFXCIsXG4gIGluaXRpYWxTdGF0ZVxuKTtcbiJdLCJuYW1lcyI6WyJhdG9tV2l0aFN0b3JhZ2UiLCJpbml0aWFsU3RhdGUiLCJuYW1lIiwiYXV0aGVudGljYXRlZCIsImxvZ2luQXRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/login/atoms/login.ts\n");

/***/ }),

/***/ "./src/features/login/components/LoginForm.tsx":
/*!*****************************************************!*\
  !*** ./src/features/login/components/LoginForm.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginForm\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _atoms_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/login */ \"./src/features/login/atoms/login.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, _atoms_login__WEBPACK_IMPORTED_MODULE_5__]);\n([jotai__WEBPACK_IMPORTED_MODULE_2__, _atoms_login__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n/* eslint-disable @typescript-eslint/no-unsafe-call */ \n\n\n\n\nfunction LoginForm({ credentials  }) {\n    const [loginState, setLoginState] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_atoms_login__WEBPACK_IMPORTED_MODULE_5__.loginAtom);\n    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>setShow(!show)\n    ;\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const target = event.target;\n        if (target.login.value === \"123\" && target.password.value === \"123\") {\n            // authenticate user\n            setLoginState({\n                ...loginState,\n                authenticated: true\n            });\n            void router.replace(\"/user-selection\");\n        } else {\n            alert(\"Wrong password!\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        flexDirection: \"column\",\n        minW: [\n            300,\n            350,\n            350\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {\n                    mb: \"35px\",\n                    role: \"group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        w: \"100%\",\n                        name: \"login\",\n                        h: \"65px\",\n                        color: \"white\",\n                        placeholder: \"LOGIN\",\n                        _groupHover: {\n                            background: \"white\",\n                            color: \"#2d2e2d\"\n                        },\n                        _placeholder: {\n                            fontWeight: \"850\",\n                            pl: [\n                                100,\n                                100,\n                                115\n                            ],\n                            pt: \"9px\",\n                            letterSpacing: \"1px\",\n                            color: \"white\",\n                            fontSize: \"19px\",\n                            fontStyle: \"italic\",\n                            _groupHover: {\n                                color: \"#9D9D9D\"\n                            }\n                        },\n                        border: \"4px\",\n                        borderRadius: \"2xl\",\n                        focusBorderColor: \"white\"\n                    }, void 0, false, {\n                        fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {\n                    size: \"md\",\n                    mb: [\n                        51,\n                        51,\n                        61\n                    ],\n                    role: \"group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            w: \"100%\",\n                            h: \"65px\",\n                            name: \"password\",\n                            border: \"4px\",\n                            type: show ? \"text\" : \"password\",\n                            color: \"white\",\n                            placeholder: \"HASŁO\",\n                            _groupHover: {\n                                background: \"white\",\n                                color: \"#2d2e2d\"\n                            },\n                            _placeholder: {\n                                fontWeight: \"850\",\n                                pl: [\n                                    100,\n                                    100,\n                                    115\n                                ],\n                                pt: \"9px\",\n                                letterSpacing: \"1px\",\n                                color: \"white\",\n                                fontSize: \"19px\",\n                                fontStyle: \"italic\",\n                                _groupHover: {\n                                    color: \"#9D9D9D\"\n                                }\n                            },\n                            borderRadius: \"2xl\",\n                            focusBorderColor: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputRightElement, {\n                            width: \"90px\",\n                            height: \"66px\",\n                            mr: \"5px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                size: \"sm\",\n                                onClick: handleClick,\n                                variant: \"outline\",\n                                color: \"white\",\n                                border: \"none\",\n                                colorScheme: \"none\",\n                                outlineColor: \"none\",\n                                _groupHover: {\n                                    color: \"#9D9D9D\"\n                                },\n                                children: show ? \"Ukryj\" : \"Pokaż\"\n                            }, void 0, false, {\n                                fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    w: \"50px\",\n                    h: \"50px\",\n                    color: \"#5AC072\",\n                    background: \"#2d2e2d\",\n                    borderRadius: \"full\",\n                    fontWeight: \"700\",\n                    ml: [\n                        125,\n                        150,\n                        150\n                    ],\n                    type: \"submit\",\n                    letterSpacing: \"13px\",\n                    fontSize: \"22px\",\n                    border: \"4px\",\n                    borderColor: \"#5AC072\",\n                    _hover: {\n                        background: \"#5AC072\",\n                        color: \"white\",\n                        borderColor: \"white\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        ml: \"11px\",\n                        children: \"➔\"\n                    }, void 0, false, {\n                        fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/features/login/components/LoginForm.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this));\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbG9naW4vY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQXNELHFEQVE3QjtBQUNNO0FBQ1E7QUFDUDtBQUVVO1NBRWpDVSxTQUFTLENBQUMsQ0FBQyxDQUNsQkMsV0FBVyxFQUdiLENBQUMsRUFBRSxDQUFDO0lBQ0YsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsSUFBSVAsOENBQU8sQ0FBQ0csbURBQVM7SUFDckQsS0FBSyxNQUFFSyxJQUFJLE1BQUVDLE9BQU8sTUFBSVAsK0NBQVEsQ0FBQyxLQUFLO0lBQ3RDLEtBQUssQ0FBQ1EsTUFBTSxHQUFHVCxzREFBUztJQUN4QixLQUFLLENBQUNVLFdBQVcsT0FBU0YsT0FBTyxFQUFFRCxJQUFJOztJQUV2QyxLQUFLLENBQUNJLFlBQVksSUFBSUMsS0FBMkIsR0FBSyxDQUFDO1FBQ3JEQSxLQUFLLENBQUNDLGNBQWM7UUFDcEIsS0FBSyxDQUFDQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBTTtRQUkzQixFQUFFLEVBQUVBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLEtBQUssQ0FBSyxRQUFJRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0QsS0FBSyxLQUFLLENBQUssTUFBRSxDQUFDO1lBQ3BFLEVBQW9CO1lBQ3BCVixhQUFhLENBQUMsQ0FBQzttQkFBSUQsVUFBVTtnQkFBRWEsYUFBYSxFQUFFLElBQUk7WUFBQyxDQUFDO1lBRXBELElBQUksQ0FBQ1QsTUFBTSxDQUFDVSxPQUFPLENBQUMsQ0FBaUI7UUFDdkMsQ0FBQyxNQUFNLENBQUM7WUFDTkMsS0FBSyxDQUFDLENBQWlCO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSHpCLGtEQUFJO1FBQUMwQixhQUFhLEVBQUMsQ0FBUTtRQUFDQyxJQUFJLEVBQUUsQ0FBQztBQUFBLGVBQUc7QUFBRSxlQUFHO0FBQUUsZUFBRztRQUFBLENBQUM7OEZBQy9D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LENBQUMsRUFBQyxDQUFNO29CQUNSRSxDQUFDLEVBQUMsQ0FBTTtvQkFDUkMsS0FBSyxFQUFDLENBQVM7b0JBQ2ZHLFVBQVUsRUFBQyxDQUFTO29CQUNwQlMsWUFBWSxFQUFDLENBQU07b0JBQ25CUCxVQUFVLEVBQUMsQ0FBSztvQkFDaEJrQixFQUFFLEVBQUUsQ0FBQztBQUFBLDJCQUFHO0FBQUUsMkJBQUc7QUFBRSwyQkFBRztvQkFBQSxDQUFDO29CQUNuQlIsSUFBSSxFQUFDLENBQVE7b0JBQ2JQLGFBQWEsRUFBQyxDQUFNO29CQUNwQkMsUUFBUSxFQUFDLENBQU07b0JBQ2ZFLE1BQU0sRUFBQyxDQUFLO29CQUNaYSxXQUFXLEVBQUMsQ0FBUztvQkFDckJDLE1BQU0sRUFBRSxDQUFDO3dCQUNQdEIsVUFBVSxFQUFFLENBQVM7d0JBQ3JCSCxLQUFLLEVBQUUsQ0FBTzt3QkFDZHdCLFdBQVcsRUFBRSxDQUFPO29CQUN0QixDQUFDOzBHQUVBNUQsb0RBQU07d0JBQUMyRCxFQUFFLEVBQUMsQ0FBTTtrQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYmVjbm9zYy8uL3NyYy9mZWF0dXJlcy9sb2dpbi9jb21wb25lbnRzL0xvZ2luRm9ybS50c3g/NzhhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwgKi9cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2VudGVyLFxuICBGbGV4LFxuICBJbnB1dCxcbiAgSW5wdXRHcm91cCxcbiAgSW5wdXRSaWdodEVsZW1lbnQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGxvZ2luQXRvbSB9IGZyb20gXCIuLi9hdG9tcy9sb2dpblwiO1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0oe1xuICBjcmVkZW50aWFscyxcbn06IHtcbiAgY3JlZGVudGlhbHM6IHsgbG9naW46IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9O1xufSkge1xuICBjb25zdCBbbG9naW5TdGF0ZSwgc2V0TG9naW5TdGF0ZV0gPSB1c2VBdG9tKGxvZ2luQXRvbSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gc2V0U2hvdyghc2hvdyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIHR5cGVvZiBldmVudC50YXJnZXQgJiB7XG4gICAgICBsb2dpbjogeyB2YWx1ZTogc3RyaW5nIH07XG4gICAgICBwYXNzd29yZDogeyB2YWx1ZTogc3RyaW5nIH07XG4gICAgfTtcbiAgICBpZiAodGFyZ2V0LmxvZ2luLnZhbHVlID09PSBcIjEyM1wiICYmIHRhcmdldC5wYXNzd29yZC52YWx1ZSA9PT0gXCIxMjNcIikge1xuICAgICAgLy8gYXV0aGVudGljYXRlIHVzZXJcbiAgICAgIHNldExvZ2luU3RhdGUoeyAuLi5sb2dpblN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlIH0pO1xuXG4gICAgICB2b2lkIHJvdXRlci5yZXBsYWNlKFwiL3VzZXItc2VsZWN0aW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIldyb25nIHBhc3N3b3JkIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWluVz17WzMwMCwgMzUwLCAzNTBdfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8SW5wdXRHcm91cCBtYj1cIjM1cHhcIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgIG5hbWU9XCJsb2dpblwiXG4gICAgICAgICAgICBoPVwiNjVweFwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTE9HSU5cIlxuICAgICAgICAgICAgX2dyb3VwSG92ZXI9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjMmQyZTJkXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgX3BsYWNlaG9sZGVyPXt7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiODUwXCIsXG4gICAgICAgICAgICAgIHBsOiBbMTAwLCAxMDAsIDExNV0sXG4gICAgICAgICAgICAgIHB0OiBcIjlweFwiLFxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOXB4XCIsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgX2dyb3VwSG92ZXI6IHsgY29sb3I6IFwiIzlEOUQ5RFwiIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYm9yZGVyPVwiNHB4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjJ4bFwiXG4gICAgICAgICAgICBmb2N1c0JvcmRlckNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cblxuICAgICAgICA8SW5wdXRHcm91cCBzaXplPVwibWRcIiBtYj17WzUxLCA1MSwgNjFdfSByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgIGg9XCI2NXB4XCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBib3JkZXI9XCI0cHhcIlxuICAgICAgICAgICAgdHlwZT17c2hvdyA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhBU8WBT1wiXG4gICAgICAgICAgICBfZ3JvdXBIb3Zlcj17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMyZDJlMmRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBfcGxhY2Vob2xkZXI9e3tcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI4NTBcIixcbiAgICAgICAgICAgICAgcGw6IFsxMDAsIDEwMCwgMTE1XSxcbiAgICAgICAgICAgICAgcHQ6IFwiOXB4XCIsXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMXB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE5cHhcIixcbiAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICBfZ3JvdXBIb3ZlcjogeyBjb2xvcjogXCIjOUQ5RDlEXCIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyeGxcIlxuICAgICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFJpZ2h0RWxlbWVudCB3aWR0aD1cIjkwcHhcIiBoZWlnaHQ9XCI2NnB4XCIgbXI9XCI1cHhcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBvdXRsaW5lQ29sb3I9XCJub25lXCJcbiAgICAgICAgICAgICAgX2dyb3VwSG92ZXI9e3sgY29sb3I6IFwiIzlEOUQ5RFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93ID8gXCJVa3J5alwiIDogXCJQb2thxbxcIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvSW5wdXRSaWdodEVsZW1lbnQ+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdz1cIjUwcHhcIlxuICAgICAgICAgIGg9XCI1MHB4XCJcbiAgICAgICAgICBjb2xvcj1cIiM1QUMwNzJcIlxuICAgICAgICAgIGJhY2tncm91bmQ9XCIjMmQyZTJkXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICBtbD17WzEyNSwgMTUwLCAxNTBdfVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIxM3B4XCJcbiAgICAgICAgICBmb250U2l6ZT1cIjIycHhcIlxuICAgICAgICAgIGJvcmRlcj1cIjRweFwiXG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCIjNUFDMDcyXCJcbiAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzVBQzA3MlwiLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDZW50ZXIgbWw9XCIxMXB4XCI+4p6UPC9DZW50ZXI+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IHsgTG9naW5Gb3JtIH07XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2VudGVyIiwiRmxleCIsIklucHV0IiwiSW5wdXRHcm91cCIsIklucHV0UmlnaHRFbGVtZW50IiwidXNlQXRvbSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibG9naW5BdG9tIiwiTG9naW5Gb3JtIiwiY3JlZGVudGlhbHMiLCJsb2dpblN0YXRlIiwic2V0TG9naW5TdGF0ZSIsInNob3ciLCJzZXRTaG93Iiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibG9naW4iLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYXV0aGVudGljYXRlZCIsInJlcGxhY2UiLCJhbGVydCIsImZsZXhEaXJlY3Rpb24iLCJtaW5XIiwiZm9ybSIsIm9uU3VibWl0IiwibWIiLCJyb2xlIiwidyIsIm5hbWUiLCJoIiwiY29sb3IiLCJwbGFjZWhvbGRlciIsIl9ncm91cEhvdmVyIiwiYmFja2dyb3VuZCIsIl9wbGFjZWhvbGRlciIsImZvbnRXZWlnaHQiLCJwbCIsInB0IiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZm9jdXNCb3JkZXJDb2xvciIsInNpemUiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJtciIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJvdXRsaW5lQ29sb3IiLCJtbCIsImJvcmRlckNvbG9yIiwiX2hvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/login/components/LoginForm.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _features_login_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/login/components/LoginForm */ \"./src/features/login/components/LoginForm.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_login_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__]);\n_features_login_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//import { getCredentials } from \"@/features/login/components/utilities/getCredentials\";\n//import { getDatabase } from \"@/utilities/notion\";\n\n// export const usersDatabaseId = process.env.NOTION_USERS_DATABASE_ID as string;\n// export const credentialsDatabaseId = process.env\n//   .CREDENTIALS_DATABASE_ID as string;\n// export const mondayScheduleDatabaseId = process.env\n//   .NOTION_MONDAY_SCHEDULE_DATABASE_ID as string;\n// export const getStaticProps = async () => {\n//   const credentials = await getDatabase(credentialsDatabaseId);\n//   return {\n//     props: {\n//       credentials,\n//     },\n//     // Next.js will attempt to re-generate the page:\n//     // - When a request comes in\n//     // - At most once every second\n//     revalidate: 1, // In seconds\n//   };\n// };\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nconst Home = ({ credentials  })=>{\n    // const { login, password } = getCredentials(credentials);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        h: \"100vh\",\n        direction: \"column\",\n        align: \"center\",\n        justify: \"flex-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                mb: \"80px\",\n                w: \"100%\",\n                alignSelf: \"start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                    flexDirection: \"column\",\n                    ml: [\n                        45,\n                        100,\n                        420\n                    ],\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fontWeight: \"semibold\",\n                            fontSize: [\n                                50,\n                                50,\n                                70\n                            ],\n                            height: [\n                                16,\n                                50,\n                                85\n                            ],\n                            color: \"white\",\n                            letterSpacing: \"3px\",\n                            children: \"OBECNOŚĆ\"\n                        }, void 0, false, {\n                            fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                            h: \"9px\",\n                            mt: \"4px\",\n                            borderRadius: \"full\",\n                            bgGradient: \"linear(to-r, #FFEE88, #DD1155)\"\n                        }, void 0, false, {\n                            fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                px: 4,\n                py: 4,\n                mb: [\n                    100,\n                    150,\n                    250\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_login_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__.LoginForm, {}, void 0, false, {\n                    fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mariuszoslaw/projects/technikiwww/obecnosc/src/pages/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFHN0MsRUFBd0Y7QUFDeEYsRUFBbUQ7QUFFZTtBQUVsRSxFQUFpRjtBQUNqRixFQUFtRDtBQUNuRCxFQUF3QztBQUN4QyxFQUFzRDtBQUN0RCxFQUFtRDtBQUVuRCxFQUE4QztBQUM5QyxFQUFrRTtBQUVsRSxFQUFhO0FBQ2IsRUFBZTtBQUNmLEVBQXFCO0FBQ3JCLEVBQVM7QUFDVCxFQUF1RDtBQUN2RCxFQUFtQztBQUNuQyxFQUFxQztBQUNyQyxFQUFtQztBQUNuQyxFQUFPO0FBQ1AsRUFBSztBQUVMLEVBQThEO0FBQzlELEtBQUssQ0FBQ0csSUFBSSxJQUFvQyxDQUFDLENBQUNDLFdBQVcsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNqRSxFQUEyRDtJQUMzRCxNQUFNLDZFQUNISixrREFBSTtRQUFDSyxDQUFDLEVBQUMsQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBUTtRQUFDQyxLQUFLLEVBQUMsQ0FBUTtRQUFDQyxPQUFPLEVBQUMsQ0FBVTs7d0ZBQ2pFUixrREFBSTtnQkFBQ1MsRUFBRSxFQUFDLENBQU07Z0JBQUNDLENBQUMsRUFBQyxDQUFNO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTztzR0FDdkNYLGtEQUFJO29CQUFDWSxhQUFhLEVBQUMsQ0FBUTtvQkFBQ0MsRUFBRSxFQUFFLENBQUM7QUFBQSwwQkFBRTtBQUFFLDJCQUFHO0FBQUUsMkJBQUc7b0JBQUEsQ0FBQzs7b0dBQzVDWixrREFBSTs0QkFDSGEsVUFBVSxFQUFDLENBQVU7NEJBQ3JCQyxRQUFRLEVBQUUsQ0FBQztBQUFBLGtDQUFFO0FBQUUsa0NBQUU7QUFBRSxrQ0FBRTs0QkFBQSxDQUFDOzRCQUN0QkMsTUFBTSxFQUFFLENBQUM7QUFBQSxrQ0FBRTtBQUFFLGtDQUFFO0FBQUUsa0NBQUU7NEJBQUEsQ0FBQzs0QkFDcEJDLEtBQUssRUFBQyxDQUFPOzRCQUNiQyxhQUFhLEVBQUMsQ0FBSztzQ0FDcEIsQ0FFRDs7Ozs7O29HQUNDbEIsa0RBQUk7NEJBQ0hLLENBQUMsRUFBQyxDQUFLOzRCQUNQYyxFQUFFLEVBQUMsQ0FBSzs0QkFDUkMsWUFBWSxFQUFDLENBQU07NEJBQ25CQyxVQUFVLEVBQUMsQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtoRHJCLGtEQUFJO2dCQUFDc0IsRUFBRSxFQUFFLENBQUM7Z0JBQUVDLEVBQUUsRUFBRSxDQUFDO2dCQUFFZCxFQUFFLEVBQUUsQ0FBQztBQUFBLHVCQUFHO0FBQUUsdUJBQUc7QUFBRSx1QkFBRztnQkFBQSxDQUFDO3NHQUNwQ1AsMkVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEIsQ0FBQztBQUVELGlFQUFlQyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYmVjbm9zYy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuXG4vL2ltcG9ydCB7IGdldENyZWRlbnRpYWxzIH0gZnJvbSBcIkAvZmVhdHVyZXMvbG9naW4vY29tcG9uZW50cy91dGlsaXRpZXMvZ2V0Q3JlZGVudGlhbHNcIjtcbi8vaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tIFwiQC91dGlsaXRpZXMvbm90aW9uXCI7XG5cbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuLi9mZWF0dXJlcy9sb2dpbi9jb21wb25lbnRzL0xvZ2luRm9ybVwiO1xuXG4vLyBleHBvcnQgY29uc3QgdXNlcnNEYXRhYmFzZUlkID0gcHJvY2Vzcy5lbnYuTk9USU9OX1VTRVJTX0RBVEFCQVNFX0lEIGFzIHN0cmluZztcbi8vIGV4cG9ydCBjb25zdCBjcmVkZW50aWFsc0RhdGFiYXNlSWQgPSBwcm9jZXNzLmVudlxuLy8gICAuQ1JFREVOVElBTFNfREFUQUJBU0VfSUQgYXMgc3RyaW5nO1xuLy8gZXhwb3J0IGNvbnN0IG1vbmRheVNjaGVkdWxlRGF0YWJhc2VJZCA9IHByb2Nlc3MuZW52XG4vLyAgIC5OT1RJT05fTU9OREFZX1NDSEVEVUxFX0RBVEFCQVNFX0lEIGFzIHN0cmluZztcblxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCBjcmVkZW50aWFscyA9IGF3YWl0IGdldERhdGFiYXNlKGNyZWRlbnRpYWxzRGF0YWJhc2VJZCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgY3JlZGVudGlhbHMsXG4vLyAgICAgfSxcbi8vICAgICAvLyBOZXh0LmpzIHdpbGwgYXR0ZW1wdCB0byByZS1nZW5lcmF0ZSB0aGUgcGFnZTpcbi8vICAgICAvLyAtIFdoZW4gYSByZXF1ZXN0IGNvbWVzIGluXG4vLyAgICAgLy8gLSBBdCBtb3N0IG9uY2UgZXZlcnkgc2Vjb25kXG4vLyAgICAgcmV2YWxpZGF0ZTogMSwgLy8gSW4gc2Vjb25kc1xuLy8gICB9O1xuLy8gfTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmNvbnN0IEhvbWU6IE5leHRQYWdlPHsgY3JlZGVudGlhbHM6IGFueSB9PiA9ICh7IGNyZWRlbnRpYWxzIH0pID0+IHtcbiAgLy8gY29uc3QgeyBsb2dpbiwgcGFzc3dvcmQgfSA9IGdldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBoPVwiMTAwdmhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgPEZsZXggbWI9XCI4MHB4XCIgdz1cIjEwMCVcIiBhbGlnblNlbGY9XCJzdGFydFwiPlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWw9e1s0NSwgMTAwLCA0MjBdfT5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbNTAsIDUwLCA3MF19XG4gICAgICAgICAgICBoZWlnaHQ9e1sxNiwgNTAsIDg1XX1cbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIjNweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgT0JFQ05PxZrEhlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgaD1cIjlweFwiXG4gICAgICAgICAgICBtdD1cIjRweFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgIGJnR3JhZGllbnQ9XCJsaW5lYXIodG8tciwgI0ZGRUU4OCwgI0REMTE1NSlcIlxuICAgICAgICAgID48L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPEZsZXggcHg9ezR9IHB5PXs0fSBtYj17WzEwMCwgMTUwLCAyNTBdfT5cbiAgICAgICAgPExvZ2luRm9ybVxuICAgICAgICAvLyAgY3JlZGVudGlhbHM9e3sgcGFzc3dvcmQsIGxvZ2luIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJGbGV4IiwiVGV4dCIsIkxvZ2luRm9ybSIsIkhvbWUiLCJjcmVkZW50aWFscyIsImgiLCJkaXJlY3Rpb24iLCJhbGlnbiIsImp1c3RpZnkiLCJtYiIsInciLCJhbGlnblNlbGYiLCJmbGV4RGlyZWN0aW9uIiwibWwiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJoZWlnaHQiLCJjb2xvciIsImxldHRlclNwYWNpbmciLCJtdCIsImJvcmRlclJhZGl1cyIsImJnR3JhZGllbnQiLCJweCIsInB5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ "jotai/utils":
/*!******************************!*\
  !*** external "jotai/utils" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();