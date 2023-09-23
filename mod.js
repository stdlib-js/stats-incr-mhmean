// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=i?r+t(a):t(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),r.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===u.call(r.specifier)?u.call(t):p.call(t)}function E(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function k(r,e,i){var t=e-r.length;return t<0?r:r=i?r+E(t):E(t)+r}var x=String.fromCharCode,S=isNaN,_=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,i,t,a,o,l,p,u,f;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",p=1,u=0;u<r.length;u++)if(s(t=r[u]))l+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,i,t,n;for(i=[],n=0,t=V.exec(r);t;)(e=r.slice(n,V.lastIndex-t[0].length)).length&&i.push(e),i.push(A(t)),n=V.lastIndex,t=V.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function $(r){return"string"==typeof r}function j(r){var e,i,t;if(!$(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return F.apply(null,i)}var N=Object.prototype,O=N.toString,C=N.__defineGetter__,R=N.__defineSetter__,P=N.__lookupGetter__,Z=N.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=N,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,i.get),o&&R&&R.call(r,e,i.set),r};function G(r,e,i){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"";var H=M()?function(r){var e,i,t,n,a;if(null==r)return X.call(r);i=r[B],a=B,e=null!=(n=r)&&z.call(n,a);try{r[B]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[B]=i:delete r[B],t}:function(r){return X.call(r)},q=Number,D=q.prototype.toString;var J=M();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Q(r){return L(r)||K(r)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=q.NEGATIVE_INFINITY,ir=Math.floor;function tr(r){return r<rr&&r>er&&ir(e=r)===e;var e}function nr(r){return L(r)&&tr(r)}function ar(r){return K(r)&&tr(r.valueOf())}function or(r){return nr(r)||ar(r)}function cr(r){return nr(r)&&r>0}function sr(r){return ar(r)&&r.valueOf()>0}function lr(r){return cr(r)||sr(r)}function pr(r){return r!=r}G(or,"isPrimitive",nr),G(or,"isObject",ar),G(lr,"isPrimitive",cr),G(lr,"isObject",sr);var ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var gr="function"==typeof Float64Array?Float64Array:void 0;var dr=function(){var r,e,i;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),i=e,r=(ur&&i instanceof Float64Array||"[object Float64Array]"===H(i))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};function hr(r){return"number"==typeof r}function wr(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function vr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+wr(n):wr(n)+r,t&&(r="-"+r)),r}var br=String.prototype.toLowerCase,yr=String.prototype.toUpperCase;function mr(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!hr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=vr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=vr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===yr.call(r.specifier)?yr.call(i):br.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Er(r){return"string"==typeof r}var kr=Math.abs,xr=String.prototype.toLowerCase,Sr=String.prototype.toUpperCase,_r=String.prototype.replace,Ir=/e\+(\d)$/,Fr=/e-(\d)$/,Vr=/^(\d+)$/,Ar=/^(\d+)e/,Tr=/\.0$/,$r=/\.0*e/,jr=/(\..*[^0])0*e/;function Nr(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!hr(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":kr(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=_r.call(i,jr,"$1e"),i=_r.call(i,$r,"e"),i=_r.call(i,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=_r.call(i,Ir,"e+0$1"),i=_r.call(i,Fr,"e-0$1"),r.alternate&&(i=_r.call(i,Vr,"$1."),i=_r.call(i,Ar,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===Sr.call(r.specifier)?Sr.call(i):xr.call(i)}function Or(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function Cr(r,e,i){var t=e-r.length;return t<0?r:r=i?r+Or(t):Or(t)+r}var Rr=String.fromCharCode,Pr=isNaN,Zr=Array.isArray;function Wr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,i,t,n,a,o,c,s,l;if(!Zr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Er(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=Wr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Pr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Pr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=mr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Pr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Pr(a)?String(t.arg):Rr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Nr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=vr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Cr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ur(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Mr(r){var e,i,t,n;for(i=[],n=0,t=Lr.exec(r);t;)(e=r.slice(n,Lr.lastIndex-t[0].length)).length&&i.push(e),i.push(Ur(t)),n=Lr.lastIndex,t=Lr.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function Xr(r){return"string"==typeof r}function zr(r){var e,i,t;if(!Xr(r))throw new TypeError(zr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Mr(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return Gr.apply(null,i)}function Yr(r){var e,i,t,n,a;if(!cr(r))throw new TypeError(zr("invalid argument. Must provide a positive integer. Value: `%s`.",r));return i=new dr(r),t=0,a=-1,n=0,function(o){var c;if(0===arguments.length)return 0===n?null:t;if(a=(a+1)%r,pr(o))n=r,t=NaN;else if(n<r)t+=(e=o-t)/(n+=1);else if(pr(i[a])){for(n=1,t=o,c=0;c<r;c++)if(c!==a){if(pr(i[c])){n=r,t=NaN;break}n+=1,e=i[c]-t,t+=e/n}}else!1===pr(t)&&(e=o-i[a],t+=e/r);return i[a]=o,t}}function Br(r){var e;if(!cr(r))throw new TypeError(function(){var r,e=arguments,i="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)i+="&arg[]="+encodeURIComponent(e[r]);return i}("1I18B,Hs",r));return e=Yr(r),function(r){var i;if(0===arguments.length)return null===(i=e())?i:1/i;return 1/e(1/r)}}export{Br as default};
//# sourceMappingURL=mod.js.map
