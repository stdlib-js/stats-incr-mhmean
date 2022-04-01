// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=t.isPrimitive,s=r,n=e;var m=function(t){var r;if(!i(t))throw new TypeError(n("invalid argument. Must provide a positive integer. Value: `%s`.",t));return r=s(t),function(t){var e;if(0===arguments.length)return null===(e=r())?e:1/e;return 1/r(1/t)}};export{m as default};
//# sourceMappingURL=index.mjs.map
