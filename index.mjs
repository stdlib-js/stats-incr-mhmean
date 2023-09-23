// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function e(e){var n;if(!t(e))throw new TypeError(s("1I18B,Hs",e));return n=r(e),function(t){var r;if(0===arguments.length)return null===(r=n())?r:1/r;return 1/n(1/t)}}export{e as default};
//# sourceMappingURL=index.mjs.map
