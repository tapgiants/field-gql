!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"),require("react-apollo"));else if("function"==typeof define&&define.amd)define(["React","react-apollo"],n);else{var r="object"==typeof exports?n(require("react"),require("react-apollo")):n(t.React,t[void 0]);for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(this,function(t,n){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=62)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(7),o=r(21);t.exports=r(4)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(28)("wks"),o=r(14),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n,r){var e=r(0),o=r(6),i=r(1),u=r(13),c=r(22),f=function(t,n,r){var a,s,l,p,v=t&f.F,y=t&f.G,d=t&f.S,h=t&f.P,x=t&f.B,b=y?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,m=y?o:o[n]||(o[n]={}),g=m.prototype||(m.prototype={});for(a in y&&(r=n),r)l=((s=!v&&b&&void 0!==b[a])?b:r)[a],p=x&&s?c(l,e):h&&"function"==typeof l?c(Function.call,l):l,b&&u(b,a,l,t&f.U),m[a]!=l&&i(m,a,p),h&&g[a]!=l&&(g[a]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,r){t.exports=!r(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(12),o=r(36),i=r(37),u=Object.defineProperty;n.f=r(4)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(40),o=r(30);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(24);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(8);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){var e=r(0),o=r(1),i=r(9),u=r(14)("src"),c=Function.toString,f=(""+c).split("toString");r(6).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(16),o=r(24);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(28)("keys"),o=r(14);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){t.exports={}},function(n,r){n.exports=t},function(t,n,r){var e=r(8),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(38);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(15),o=r(26),i=r(41);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(27),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(6),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(29)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){"use strict";var e=r(5);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){"use strict";var e=r(46),o=r(47),i=r(18),u=r(15);t.exports=r(48)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e=r(7).f,o=r(9),i=r(2)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,r){t.exports=n},function(t,n,r){var e=r(3);e(e.S+e.F,"Object",{assign:r(39)})},function(t,n,r){t.exports=!r(4)&&!r(5)(function(){return 7!=Object.defineProperty(r(20)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(8);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){"use strict";var e=r(10),o=r(42),i=r(43),u=r(11),c=r(16),f=Object.assign;t.exports=!f||r(5)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=f({},t)[r]||Object.keys(f({},n)).join("")!=e})?function(t,n){for(var r=u(t),f=arguments.length,a=1,s=o.f,l=i.f;f>a;)for(var p,v=c(arguments[a++]),y=s?e(v).concat(s(v)):e(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(r[p]=v[p]);return r}:f},function(t,n,r){var e=r(9),o=r(15),i=r(25)(!1),u=r(17)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(27),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){"use strict";var e=r(3),o=r(25)(!1),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(31)(i)),"Array",{indexOf:function(t){return u?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},function(t,n,r){for(var e=r(32),o=r(10),i=r(13),u=r(0),c=r(1),f=r(18),a=r(2),s=a("iterator"),l=a("toStringTag"),p=f.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=o(v),d=0;d<y.length;d++){var h,x=y[d],b=v[x],m=u[x],g=m&&m.prototype;if(g&&(g[s]||c(g,s,p),g[l]||c(g,l,x),f[x]=p,b))for(h in e)g[h]||i(g,h,e[h],!0)}},function(t,n,r){var e=r(2)("unscopables"),o=Array.prototype;null==o[e]&&r(1)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(29),o=r(3),i=r(13),u=r(1),c=r(18),f=r(49),a=r(33),s=r(53),l=r(2)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,y,d,h,x){f(r,n,y);var b,m,g,O=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=n+" Iterator",j="values"==d,_=!1,P=t.prototype,w=P[l]||P["@@iterator"]||d&&P[d],L=w||O(d),T=d?j?O("entries"):L:void 0,M="Array"==n&&P.entries||w;if(M&&(g=s(M.call(new t)))!==Object.prototype&&g.next&&(a(g,S,!0),e||"function"==typeof g[l]||u(g,l,v)),j&&w&&"values"!==w.name&&(_=!0,L=function(){return w.call(this)}),e&&!x||!p&&!_&&P[l]||u(P,l,L),c[n]=L,c[S]=v,d)if(b={values:j?L:O("values"),keys:h?L:O("keys"),entries:T},x)for(m in b)m in P||i(P,m,b[m]);else o(o.P+o.F*(p||_),n,b);return b}},function(t,n,r){"use strict";var e=r(50),o=r(21),i=r(33),u={};r(1)(u,r(2)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(12),o=r(51),i=r(30),u=r(17)("IE_PROTO"),c=function(){},f=function(){var t,n=r(20)("iframe"),e=i.length;for(n.style.display="none",r(52).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[i[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(7),o=r(12),i=r(10);t.exports=r(4)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(0).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(9),o=r(11),i=r(17)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(11),o=r(10);r(55)("keys",function(){return function(t){return o(e(t))}})},function(t,n,r){var e=r(3),o=r(6),i=r(5);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*i(function(){r(1)}),"Object",u)}},function(t,n,r){var e=r(7).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||r(4)&&e(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,n,r){"use strict";var e=r(3),o=r(58)(1);e(e.P+e.F*!r(31)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,n,r){var e=r(22),o=r(16),i=r(11),u=r(26),c=r(59);t.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l,v=n||c;return function(n,c,y){for(var d,h,x=i(n),b=o(x),m=e(c,y,3),g=u(b.length),O=0,S=r?v(n,g):f?v(n,0):void 0;g>O;O++)if((p||O in b)&&(h=m(d=b[O],O,x),t))if(r)S[O]=h;else if(h)switch(t){case 3:return!0;case 5:return d;case 6:return O;case 2:S.push(d)}else if(s)return!1;return l?-1:a||s?s:S}}},function(t,n,r){var e=r(60);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(8),o=r(61),i=r(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){var e=r(23);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";r.r(n);r(35),r(44),r(45),r(32),r(54),r(56),r(57);var e=r(19),o=r.n(e),i=r(34);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function c(t,n){if(null==t)return{};var r,e,o=function(t,n){if(null==t)return{};var r,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)r=i[e],n.indexOf(r)>=0||(o[r]=t[r]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)r=i[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var f=function(t){var n=t.valuesQuery,r=t.FieldCtxComponent,e=c(t,["valuesQuery","FieldCtxComponent"]);return o.a.createElement(i.Query,{query:n},function(t){var n=t.loading,i=t.data;if(n)return"Loading...";var c,f,a,s=e.valuePath||e.name;return o.a.createElement(r,u({},e,{options:(c=i[s].list,f=e.valueKey,a=e.valueLabel,c.map(function(t){var n="function"==typeof a?a(t):t[a];return{value:t[f],label:n}}))}))})};n.default=f}])});