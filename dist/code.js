/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/flexsearch/dist/flexsearch.min.js":
/*!********************************************************!*\
  !*** ./node_modules/flexsearch/dist/flexsearch.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 FlexSearch v0.6.30
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
(function(K,R,w){let L;(L=w.define)&&L.amd?L([],function(){return R}):(L=w.modules)?L[K.toLowerCase()]=R: true?module.exports=R:undefined})("FlexSearch",function ma(K){function w(a,c){const b=c?c.id:a&&a.id;this.id=b||0===b?b:na++;this.init(a,c);fa(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)});fa(this,"length",function(){return this.index.length})}function L(a,c,b,d){this.u!==this.g&&(this.o=this.o.concat(b),this.u++,
d&&this.o.length>=d&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(c,this.o),this.F&&this.F(this.o)));return this}function S(a){const c=B();for(const b in a)if(a.hasOwnProperty(b)){const d=a[b];F(d)?c[b]=d.slice(0):G(d)?c[b]=S(d):c[b]=d}return c}function W(a,c){const b=a.length,d=O(c),e=[];for(let f=0,h=0;f<b;f++){const g=a[f];if(d&&c(g)||!d&&!c[g])e[h++]=g}return e}function P(a,c,b,d,e,f,h,g,k,l){b=ha(b,h?0:e,g,f,c,k,l);let p;g&&(g=b.page,p=b.next,b=b.result);if(h)c=this.where(h,null,
e,b);else{c=b;b=this.l;e=c.length;f=Array(e);for(h=0;h<e;h++)f[h]=b[c[h]];c=f}b=c;d&&(O(d)||(M=d.split(":"),1<M.length?d=oa:(M=M[0],d=pa)),b.sort(d));b=T(g,p,b);this.cache&&this.j.set(a,b);return b}function fa(a,c,b){Object.defineProperty(a,c,{get:b})}function r(a){return new RegExp(a,"g")}function Q(a,c){for(let b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);return a}function V(a,c,b,d,e,f,h,g){if(c[b])return c[b];e=e?(g-(h||g/1.5))*f+(h||g/1.5)*e:f;c[b]=e;e>=h&&(a=a[g-(e+.5>>0)],a=a[b]||(a[b]=[]),
a[a.length]=d);return e}function ba(a,c){if(a){const b=Object.keys(a);for(let d=0,e=b.length;d<e;d++){const f=b[d],h=a[f];if(h)for(let g=0,k=h.length;g<k;g++)if(h[g]===c){1===k?delete a[f]:h.splice(g,1);break}else G(h[g])&&ba(h[g],c)}}}function ca(a){let c="",b="";var d="";for(let e=0;e<a.length;e++){const f=a[e];if(f!==b)if(e&&"h"===f){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===b||"e"===b||"i"===b||"o"===b||"u"===b||"y"===b)&&d||" "===b)c+=f}else c+=f;d=e===a.length-1?"":a[e+
1];b=f}return c}function qa(a,c){a=a.length-c.length;return 0>a?1:a?-1:0}function pa(a,c){a=a[M];c=c[M];return a<c?-1:a>c?1:0}function oa(a,c){const b=M.length;for(let d=0;d<b;d++)a=a[M[d]],c=c[M[d]];return a<c?-1:a>c?1:0}function T(a,c,b){return a?{page:a,next:c?""+c:null,result:b}:b}function ha(a,c,b,d,e,f,h){let g,k=[];if(!0===b){b="0";var l=""}else l=b&&b.split(":");const p=a.length;if(1<p){const y=B(),t=[];let v,x;var n=0,m;let I;var u=!0;let D,E=0,N,da,X,ea;l&&(2===l.length?(X=l,l=!1):l=ea=
parseInt(l[0],10));if(h){for(v=B();n<p;n++)if("not"===e[n])for(x=a[n],I=x.length,m=0;m<I;m++)v["@"+x[m]]=1;else da=n+1;if(C(da))return T(b,g,k);n=0}else N=J(e)&&e;let Y;for(;n<p;n++){const ra=n===(da||p)-1;if(!N||!n)if((m=N||e&&e[n])&&"and"!==m)if("or"===m)Y=!1;else continue;else Y=f=!0;x=a[n];if(I=x.length){if(u)if(D){var q=D.length;for(m=0;m<q;m++){u=D[m];var A="@"+u;h&&v[A]||(y[A]=1,f||(k[E++]=u))}D=null;u=!1}else{D=x;continue}A=!1;for(m=0;m<I;m++){q=x[m];var z="@"+q;const Z=f?y[z]||0:n;if(!(!Z&&
!d||h&&v[z]||!f&&y[z]))if(Z===n){if(ra){if(!ea||--ea<E)if(k[E++]=q,c&&E===c)return T(b,E+(l||0),k)}else y[z]=n+1;A=!0}else d&&(z=t[Z]||(t[Z]=[]),z[z.length]=q)}if(Y&&!A&&!d)break}else if(Y&&!d)return T(b,g,x)}if(D)if(n=D.length,h)for(m=l?parseInt(l,10):0;m<n;m++)a=D[m],v["@"+a]||(k[E++]=a);else k=D;if(d)for(E=k.length,X?(n=parseInt(X[0],10)+1,m=parseInt(X[1],10)+1):(n=t.length,m=0);n--;)if(q=t[n]){for(I=q.length;m<I;m++)if(d=q[m],!h||!v["@"+d])if(k[E++]=d,c&&E===c)return T(b,n+":"+m,k);m=0}}else!p||
e&&"not"===e[0]||(k=a[0],l&&(l=parseInt(l[0],10)));c&&(h=k.length,l&&l>h&&(l=0),l=l||0,g=l+c,g<h?k=k.slice(l,g):(g=0,l&&(k=k.slice(l))));return T(b,g,k)}function J(a){return"string"===typeof a}function F(a){return a.constructor===Array}function O(a){return"function"===typeof a}function G(a){return"object"===typeof a}function C(a){return"undefined"===typeof a}function ia(a){const c=Array(a);for(let b=0;b<a;b++)c[b]=B();return c}function B(){return Object.create(null)}function sa(){let a,c;self.onmessage=
function(b){if(b=b.data)if(b.search){const d=c.search(b.content,b.threshold?{limit:b.limit,threshold:b.threshold,where:b.where}:b.limit);self.postMessage({id:a,content:b.content,limit:b.limit,result:d})}else b.add?c.add(b.id,b.content):b.update?c.update(b.id,b.content):b.remove?c.remove(b.id):b.clear?c.clear():b.info?(b=c.info(),b.worker=a,console.log(b)):b.register&&(a=b.id,b.options.cache=!1,b.options.async=!1,b.options.worker=!1,c=(new Function(b.register.substring(b.register.indexOf("{")+1,b.register.lastIndexOf("}"))))(),
c=new c(b.options))}}function ta(a,c,b,d){a=K("flexsearch","id"+a,sa,function(f){(f=f.data)&&f.result&&d(f.id,f.content,f.result,f.limit,f.where,f.cursor,f.suggest)},c);const e=ma.toString();b.id=c;a.postMessage({register:e,options:b,id:c});return a}const H={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},ja={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,
b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},aa=[];let na=0;const ka={},la={};w.create=function(a,c){return new w(a,c)};w.registerMatcher=function(a){for(const c in a)a.hasOwnProperty(c)&&aa.push(r(c),a[c]);return this};w.registerEncoder=function(a,c){U[a]=c.bind(U);return this};w.registerLanguage=function(a,c){ka[a]=c.filter;la[a]=c.stemmer;return this};w.encode=
function(a,c){return U[a](c)};w.prototype.init=function(a,c){this.v=[];if(c){var b=c.preset;a=c}else a||(a=H),b=a.preset;c={};J(a)?(c=ja[a],a={}):b&&(c=ja[b]);if(b=a.worker)if("undefined"===typeof Worker)a.worker=!1,this.m=null;else{var d=parseInt(b,10)||4;this.C=-1;this.u=0;this.o=[];this.F=null;this.m=Array(d);for(var e=0;e<d;e++)this.m[e]=ta(this.id,e,a,L.bind(this))}this.f=a.tokenize||c.f||this.f||H.f;this.split=C(b=a.split)?this.split||H.split:J(b)?r(b):b;this.D=a.rtl||this.D||H.D;this.async=
"undefined"===typeof Promise||C(b=a.async)?this.async||H.async:b;this.g=C(b=a.worker)?this.g||H.g:b;this.threshold=C(b=a.threshold)?c.threshold||this.threshold||H.threshold:b;this.b=C(b=a.resolution)?b=c.b||this.b||H.b:b;b<=this.threshold&&(this.b=this.threshold+1);this.depth="strict"!==this.f||C(b=a.depth)?c.depth||this.depth||H.depth:b;this.w=(b=C(b=a.encode)?c.encode||H.encode:b)&&U[b]&&U[b].bind(U)||(O(b)?b:this.w||!1);(b=a.matcher)&&this.addMatcher(b);if(b=(c=a.lang)||a.filter){J(b)&&(b=ka[b]);
if(F(b)){d=this.w;e=B();for(var f=0;f<b.length;f++){var h=d?d(b[f]):b[f];e[h]=1}b=e}this.filter=b}if(b=c||a.stemmer){var g;c=J(b)?la[b]:b;d=this.w;e=[];for(g in c)c.hasOwnProperty(g)&&(f=d?d(g):g,e.push(r(f+"($|\\W)"),d?d(c[g]):c[g]));this.stemmer=g=e}this.a=e=(b=a.doc)?S(b):this.a||H.a;this.i=ia(this.b-(this.threshold||0));this.h=B();this.c=B();if(e){this.l=B();a.doc=null;g=e.index={};c=e.keys=[];d=e.field;f=e.tag;h=e.store;F(e.id)||(e.id=e.id.split(":"));if(h){var k=B();if(J(h))k[h]=1;else if(F(h))for(let l=
0;l<h.length;l++)k[h[l]]=1;else G(h)&&(k=h);e.store=k}if(f){this.G=B();h=B();if(d)if(J(d))h[d]=a;else if(F(d))for(k=0;k<d.length;k++)h[d[k]]=a;else G(d)&&(h=d);F(f)||(e.tag=f=[f]);for(d=0;d<f.length;d++)this.G[f[d]]=B();this.I=f;d=h}if(d){let l;F(d)||(G(d)?(l=d,e.field=d=Object.keys(d)):e.field=d=[d]);for(e=0;e<d.length;e++)f=d[e],F(f)||(l&&(a=l[f]),c[e]=f,d[e]=f.split(":")),g[f]=new w(a)}a.doc=b}this.B=!0;this.j=(this.cache=b=C(b=a.cache)?this.cache||H.cache:b)?new ua(b):!1;return this};w.prototype.encode=
function(a){a&&(aa.length&&(a=Q(a,aa)),this.v.length&&(a=Q(a,this.v)),this.w&&(a=this.w(a)),this.stemmer&&(a=Q(a,this.stemmer)));return a};w.prototype.addMatcher=function(a){const c=this.v;for(const b in a)a.hasOwnProperty(b)&&c.push(r(b),a[b]);return this};w.prototype.add=function(a,c,b,d,e){if(this.a&&G(a))return this.A("add",a,c);if(c&&J(c)&&(a||0===a)){var f="@"+a;if(this.c[f]&&!d)return this.update(a,c);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:a,
content:c}),this.c[f]=""+this.C,b&&b(),this;if(!e){if(this.async&&"function"!==typeof importScripts){let t=this;f=new Promise(function(v){setTimeout(function(){t.add(a,c,null,d,!0);t=null;v()})});if(b)f.then(b);else return f;return this}if(b)return this.add(a,c,null,d,!0),b(),this}c=this.encode(c);if(!c.length)return this;b=this.f;e=O(b)?b(c):c.split(this.split);this.filter&&(e=W(e,this.filter));const n=B();n._ctx=B();const m=e.length,u=this.threshold,q=this.depth,A=this.b,z=this.i,y=this.D;for(let t=
0;t<m;t++){var h=e[t];if(h){var g=h.length,k=(y?t+1:m-t)/m,l="";switch(b){case "reverse":case "both":for(var p=g;--p;)l=h[p]+l,V(z,n,l,a,y?1:(g-p)/g,k,u,A-1);l="";case "forward":for(p=0;p<g;p++)l+=h[p],V(z,n,l,a,y?(p+1)/g:1,k,u,A-1);break;case "full":for(p=0;p<g;p++){const v=(y?p+1:g-p)/g;for(let x=g;x>p;x--)l=h.substring(p,x),V(z,n,l,a,v,k,u,A-1)}break;default:if(g=V(z,n,h,a,1,k,u,A-1),q&&1<m&&g>=u)for(g=n._ctx[h]||(n._ctx[h]=B()),h=this.h[h]||(this.h[h]=ia(A-(u||0))),k=t-q,l=t+q+1,0>k&&(k=0),l>
m&&(l=m);k<l;k++)k!==t&&V(h,g,e[k],a,0,A-(k<t?t-k:k-t),u,A-1)}}}this.c[f]=1;this.B=!1}return this};w.prototype.A=function(a,c,b){if(F(c)){var d=c.length;if(d--){for(var e=0;e<d;e++)this.A(a,c[e]);return this.A(a,c[d],b)}}else{var f=this.a.index,h=this.a.keys,g=this.a.tag;e=this.a.store;var k;var l=this.a.id;d=c;for(var p=0;p<l.length;p++)d=d[l[p]];if("remove"===a&&(delete this.l[d],l=h.length,l--)){for(c=0;c<l;c++)f[h[c]].remove(d);return f[h[l]].remove(d,b)}if(g){for(k=0;k<g.length;k++){var n=g[k];
var m=c;l=n.split(":");for(p=0;p<l.length;p++)m=m[l[p]];m="@"+m}k=this.G[n];k=k[m]||(k[m]=[])}l=this.a.field;for(let u=0,q=l.length;u<q;u++){n=l[u];g=c;for(m=0;m<n.length;m++)g=g[n[m]];n=f[h[u]];m="add"===a?n.add:n.update;u===q-1?m.call(n,d,g,b):m.call(n,d,g)}if(e){b=Object.keys(e);a=B();for(f=0;f<b.length;f++)if(h=b[f],e[h]){h=h.split(":");let u,q;for(l=0;l<h.length;l++)g=h[l],u=(u||c)[g],q=(q||a)[g]=u}c=a}k&&(k[k.length]=c);this.l[d]=c}return this};w.prototype.update=function(a,c,b){if(this.a&&
G(a))return this.A("update",a,c);this.c["@"+a]&&J(c)&&(this.remove(a),this.add(a,c,b,!0));return this};w.prototype.remove=function(a,c,b){if(this.a&&G(a))return this.A("remove",a,c);var d="@"+a;if(this.c[d]){if(this.g)return this.m[this.c[d]].postMessage({remove:!0,id:a}),delete this.c[d],c&&c(),this;if(!b){if(this.async&&"function"!==typeof importScripts){let e=this;d=new Promise(function(f){setTimeout(function(){e.remove(a,null,!0);e=null;f()})});if(c)d.then(c);else return d;return this}if(c)return this.remove(a,
null,!0),c(),this}for(c=0;c<this.b-(this.threshold||0);c++)ba(this.i[c],a);this.depth&&ba(this.h,a);delete this.c[d];this.B=!1}return this};let M;w.prototype.search=function(a,c,b,d){if(G(c)){if(F(c))for(var e=0;e<c.length;e++)c[e].query=a;else c.query=a;a=c;c=1E3}else c&&O(c)?(b=c,c=1E3):c||0===c||(c=1E3);if(this.g){this.F=b;this.u=0;this.o=[];for(var f=0;f<this.g;f++)this.m[f].postMessage({search:!0,limit:c,content:a})}else{var h=[],g=a;if(G(a)&&!F(a)){b||(b=a.callback)&&(g.callback=null);var k=
a.sort;var l=a.page;c=a.limit;f=a.threshold;var p=a.suggest;a=a.query}if(this.a){f=this.a.index;const y=g.where;var n=g.bool||"or",m=g.field;let t=n;let v,x;if(m)F(m)||(m=[m]);else if(F(g)){var u=g;m=[];t=[];for(var q=0;q<g.length;q++)d=g[q],e=d.bool||n,m[q]=d.field,t[q]=e,"not"===e?v=!0:"and"===e&&(x=!0)}else m=this.a.keys;n=m.length;for(q=0;q<n;q++)u&&(g=u[q]),l&&!J(g)&&(g.page=null,g.limit=0),h[q]=f[m[q]].search(g,0);if(b)return b(P.call(this,a,t,h,k,c,p,y,l,x,v));if(this.async){const I=this;return new Promise(function(D){Promise.all(h).then(function(E){D(P.call(I,
a,t,E,k,c,p,y,l,x,v))})})}return P.call(this,a,t,h,k,c,p,y,l,x,v)}f||(f=this.threshold||0);if(!d){if(this.async&&"function"!==typeof importScripts){let y=this;f=new Promise(function(t){setTimeout(function(){t(y.search(g,c,null,!0));y=null})});if(b)f.then(b);else return f;return this}if(b)return b(this.search(g,c,null,!0)),this}if(!a||!J(a))return h;g=a;if(this.cache)if(this.B){if(b=this.j.get(a))return b}else this.j.clear(),this.B=!0;g=this.encode(g);if(!g.length)return h;b=this.f;b=O(b)?b(g):g.split(this.split);
this.filter&&(b=W(b,this.filter));u=b.length;d=!0;e=[];var A=B(),z=0;1<u&&(this.depth&&"strict"===this.f?n=!0:b.sort(qa));if(!n||(q=this.h)){const y=this.b;for(;z<u;z++){let t=b[z];if(t){if(n){if(!m)if(q[t])m=t,A[t]=1;else if(!p)return h;if(p&&z===u-1&&!e.length)n=!1,t=m||t,A[t]=0;else if(!m)continue}if(!A[t]){const v=[];let x=!1,I=0;const D=n?q[m]:this.i;if(D){let E;for(let N=0;N<y-f;N++)if(E=D[N]&&D[N][t])v[I++]=E,x=!0}if(x)m=t,e[e.length]=1<I?v.concat.apply([],v):v[0];else if(!p){d=!1;break}A[t]=
1}}}}else d=!1;d&&(h=ha(e,c,l,p));this.cache&&this.j.set(a,h);return h}};w.prototype.find=function(a,c){return this.where(a,c,1)[0]||null};w.prototype.where=function(a,c,b,d){const e=this.l,f=[];let h=0;let g;var k;let l;if(G(a)){b||(b=c);var p=Object.keys(a);var n=p.length;g=!1;if(1===n&&"id"===p[0])return[e[a.id]];if((k=this.I)&&!d)for(var m=0;m<k.length;m++){var u=k[m],q=a[u];if(!C(q)){l=this.G[u]["@"+q];if(0===--n)return l;p.splice(p.indexOf(u),1);delete a[u];break}}k=Array(n);for(m=0;m<n;m++)k[m]=
p[m].split(":")}else{if(O(a)){c=d||Object.keys(e);b=c.length;for(p=0;p<b;p++)n=e[c[p]],a(n)&&(f[h++]=n);return f}if(C(c))return[e[a]];if("id"===a)return[e[c]];p=[a];n=1;k=[a.split(":")];g=!0}d=l||d||Object.keys(e);m=d.length;for(u=0;u<m;u++){q=l?d[u]:e[d[u]];let A=!0;for(let z=0;z<n;z++){g||(c=a[p[z]]);const y=k[z],t=y.length;let v=q;if(1<t)for(let x=0;x<t;x++)v=v[y[x]];else v=v[y[0]];if(v!==c){A=!1;break}}if(A&&(f[h++]=q,b&&h===b))break}return f};w.prototype.info=function(){if(this.g)for(let a=0;a<
this.g;a++)this.m[a].postMessage({info:!0,id:this.id});else return{id:this.id,items:this.length,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:aa.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f}};w.prototype.clear=function(){return this.destroy().init()};w.prototype.destroy=function(){this.cache&&(this.j.clear(),this.j=null);this.i=this.h=this.c=null;if(this.a){const a=this.a.keys;for(let c=
0;c<a.length;c++)this.a.index[a[c]].destroy();this.a=this.l=null}return this};w.prototype.export=function(a){const c=!a||C(a.serialize)||a.serialize;if(this.a){const d=!a||C(a.doc)||a.doc;var b=!a||C(a.index)||a.index;a=[];let e=0;if(b)for(b=this.a.keys;e<b.length;e++){const f=this.a.index[b[e]];a[e]=[f.i,f.h,Object.keys(f.c)]}d&&(a[e]=this.l)}else a=[this.i,this.h,Object.keys(this.c)];c&&(a=JSON.stringify(a));return a};w.prototype.import=function(a,c){if(!c||C(c.serialize)||c.serialize)a=JSON.parse(a);
const b=B();if(this.a){var d=!c||C(c.doc)||c.doc,e=0;if(!c||C(c.index)||c.index){c=this.a.keys;const h=c.length;for(var f=a[0][2];e<f.length;e++)b[f[e]]=1;for(e=0;e<h;e++){f=this.a.index[c[e]];const g=a[e];g&&(f.i=g[0],f.h=g[1],f.c=b)}}d&&(this.l=G(d)?d:a[e])}else{d=a[2];for(e=0;e<d.length;e++)b[d[e]]=1;this.i=a[0];this.h=a[1];this.c=b}};const va=function(){const a=r("\\s+"),c=r("[^a-z0-9 ]"),b=[r("[-/]")," ",c,"",a," "];return function(d){return ca(Q(d.toLowerCase(),b))}}(),U={icase:function(a){return a.toLowerCase()},
simple:function(){const a=r("\\s+"),c=r("[^a-z0-9 ]"),b=r("[-/]"),d=r("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),e=r("[\u00e8\u00e9\u00ea\u00eb]"),f=r("[\u00ec\u00ed\u00ee\u00ef]"),h=r("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),g=r("[\u00f9\u00fa\u00fb\u00fc\u0171]"),k=r("[\u00fd\u0177\u00ff]"),l=r("\u00f1"),p=r("[\u00e7c]"),n=r("\u00df"),m=r(" & "),u=[d,"a",e,"e",f,"i",h,"o",g,"u",k,"y",l,"n",p,"k",n,"s",m," and ",b," ",c,"",a," "];return function(q){q=Q(q.toLowerCase(),u);return" "===q?"":q}}(),advanced:function(){const a=
r("ae"),c=r("ai"),b=r("ay"),d=r("ey"),e=r("oe"),f=r("ue"),h=r("ie"),g=r("sz"),k=r("zs"),l=r("ck"),p=r("cc"),n=r("sh"),m=r("th"),u=r("dt"),q=r("ph"),A=r("pf"),z=r("ou"),y=r("uo"),t=[a,"a",c,"ei",b,"ei",d,"ei",e,"o",f,"u",h,"i",g,"s",k,"s",n,"s",l,"k",p,"k",m,"t",u,"t",q,"f",A,"f",z,"o",y,"u"];return function(v,x){if(!v)return v;v=this.simple(v);2<v.length&&(v=Q(v,t));x||1<v.length&&(v=ca(v));return v}}(),extra:function(){const a=r("p"),c=r("z"),b=r("[cgq]"),d=r("n"),e=r("d"),f=r("[vw]"),h=r("[aeiouy]"),
g=[a,"b",c,"s",b,"k",d,"m",e,"t",f,"f",h,""];return function(k){if(!k)return k;k=this.advanced(k,!0);if(1<k.length){k=k.split(" ");for(let l=0;l<k.length;l++){const p=k[l];1<p.length&&(k[l]=p[0]+Q(p.substring(1),g))}k=k.join(" ");k=ca(k)}return k}}(),balance:va},ua=function(){function a(c){this.clear();this.H=!0!==c&&c}a.prototype.clear=function(){this.cache=B();this.count=B();this.index=B();this.s=[]};a.prototype.set=function(c,b){if(this.H&&C(this.cache[c])){let d=this.s.length;if(d===this.H){d--;
const e=this.s[d];delete this.cache[e];delete this.count[e];delete this.index[e]}this.index[c]=d;this.s[d]=c;this.count[c]=-1;this.cache[c]=b;this.get(c)}else this.cache[c]=b};a.prototype.get=function(c){const b=this.cache[c];if(this.H&&b){var d=++this.count[c];const f=this.index;let h=f[c];if(0<h){const g=this.s;for(var e=h;this.count[g[--h]]<=d&&-1!==h;);h++;if(h!==e){for(d=e;d>h;d--)e=g[d-1],g[d]=e,f[e]=d;g[h]=c;f[c]=h}}}return b};return a}();return w}(function(){const K={},R="undefined"!==typeof Blob&&
"undefined"!==typeof URL&&URL.createObjectURL;return function(w,L,S,W,P){S=R?URL.createObjectURL(new Blob(["("+S.toString()+")()"],{type:"text/javascript"})):w+".min.js";w+="-"+L;K[w]||(K[w]=[]);K[w][P]=new Worker(S);K[w][P].onmessage=W;return K[w][P]}}()),this);


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domain_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain/model */ "./src/domain/model.ts");
/* harmony import */ var _message_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/messages */ "./src/message/messages.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


figma.showUI(__html__);
const model = new _domain_model__WEBPACK_IMPORTED_MODULE_0__["Model"]();
figma.ui.onmessage = function (msg) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (msg.type) {
            case _message_messages__WEBPACK_IMPORTED_MODULE_1__["MessageType"].SearchRequest:
                yield model.onSearchRequest(msg.text, msg.indexOnSearch);
                break;
            case _message_messages__WEBPACK_IMPORTED_MODULE_1__["MessageType"].NavigateToNode:
                yield model.onNavToNodeRequest(msg.id);
                break;
            case _message_messages__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ReindexStart:
                yield model.onReindex();
                break;
        }
    });
};


/***/ }),

/***/ "./src/domain/model.ts":
/*!*****************************!*\
  !*** ./src/domain/model.ts ***!
  \*****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/domain/util.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/domain/search.ts");
/* harmony import */ var _message_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/messages */ "./src/message/messages.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Model {
    constructor() {
        this.storage = new _search__WEBPACK_IMPORTED_MODULE_1__["IndexStorage"]();
    }
    onNavToNodeRequest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const node = figma.getNodeById(id);
            console.log(node);
            if (!node) {
                figma.ui.postMessage(Object(_message_messages__WEBPACK_IMPORTED_MODULE_2__["newNodeNotFound"])(id));
                return;
            }
            const page = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getNodePage"])(node);
            if (page !== figma.currentPage) {
                figma.currentPage = page;
            }
            figma.currentPage.selection = [node];
            figma.viewport.scrollAndZoomIntoView([node]);
        });
    }
    onSearchRequest(text, indexOnSearch) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentID = this.getCurrentDocumentID();
            if (indexOnSearch) {
                yield this.storage.reindex(documentID, figma.root);
            }
            const index = yield this.storage.getIndex(documentID);
            if (!index) {
                console.log("here");
                figma.ui.postMessage(Object(_message_messages__WEBPACK_IMPORTED_MODULE_2__["newNoIndexMessage"])());
                return;
            }
            const nodeIDs = index.search(text.toLowerCase(), 100);
            const nodes = nodeIDs.map(id => figma.getNodeById(id));
            const searchResults = nodes.map(node => new _message_messages__WEBPACK_IMPORTED_MODULE_2__["SearchResponse"](node.id, Object(_util__WEBPACK_IMPORTED_MODULE_0__["textFromNode"])(node)));
            figma.ui.postMessage(Object(_message_messages__WEBPACK_IMPORTED_MODULE_2__["newSearchResponseMessage"])(searchResults));
        });
    }
    onReindex() {
        return __awaiter(this, void 0, void 0, function* () {
            const documentID = this.getCurrentDocumentID();
            yield this.storage.reindex(documentID, figma.root);
            figma.ui.postMessage(Object(_message_messages__WEBPACK_IMPORTED_MODULE_2__["newSearchReindexFinishMessage"])());
        });
    }
    getCurrentDocumentID() {
        return figma.currentPage.parent.id;
    }
}


/***/ }),

/***/ "./src/domain/search.ts":
/*!******************************!*\
  !*** ./src/domain/search.ts ***!
  \******************************/
/*! exports provided: IndexStorage, IndexValue, SearchIndexImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexStorage", function() { return IndexStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexValue", function() { return IndexValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIndexImpl", function() { return SearchIndexImpl; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/domain/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const FlexSearch = __webpack_require__(/*! flexsearch */ "./node_modules/flexsearch/dist/flexsearch.min.js");
class IndexStorage {
    constructor() {
        this.index = null;
    }
    getIndex(documentID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.index) {
                return this.index;
            }
            const indexValue = yield figma.clientStorage.getAsync(documentID);
            if (!indexValue) {
                return null;
            }
            const castedIndexValue = indexValue;
            const newIndex = this.makeIndex();
            // i can not use import method directly coz it crashes figma
            newIndex['import'](castedIndexValue.indexDump);
            this.index = new SearchIndexImpl(newIndex, castedIndexValue.updateTime);
            return this.index;
        });
    }
    reindex(documentID, root) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.buildIndex(root);
            const indexDump = index.export();
            const updated = Date.now();
            yield figma.clientStorage.setAsync(documentID, new IndexValue(indexDump, updated));
            this.index = new SearchIndexImpl(index, updated);
        });
    }
    buildIndex(root) {
        const index = this.makeIndex();
        const indexableTypes = new Set();
        indexableTypes.add("TEXT");
        indexableTypes.add("COMPONENT");
        indexableTypes.add("GROUP");
        indexableTypes.add("FRAME");
        const textNodes = root.findAll(node => indexableTypes.has(node.type));
        textNodes.forEach(node => {
            index.add(node.id, Object(_util__WEBPACK_IMPORTED_MODULE_0__["textFromNode"])(node).toLowerCase());
        });
        return index;
    }
    makeIndex() {
        return new FlexSearch({
            encode: false,
            split: /\s+/,
            tokenize: "forward"
        });
    }
}
class IndexValue {
    constructor(dump, updated) {
        this.indexDump = dump;
        this.updateTime = updated;
    }
}
class SearchIndexImpl {
    constructor(flexSearchIndex, updated) {
        this.flexSearchIndex = flexSearchIndex;
        this.updated = updated;
    }
    add(id, text) {
        this.flexSearchIndex.update(id, text);
    }
    search(text, limit) {
        return this.flexSearchIndex.search(text, limit);
    }
    remove(id) {
        this.flexSearchIndex.remove(id);
    }
}


/***/ }),

/***/ "./src/domain/util.ts":
/*!****************************!*\
  !*** ./src/domain/util.ts ***!
  \****************************/
/*! exports provided: getNodePage, textFromNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePage", function() { return getNodePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textFromNode", function() { return textFromNode; });
function getNodePage(node) {
    let parent = node;
    while (parent) {
        if (parent.type === 'PAGE') {
            return parent;
        }
        parent = parent.parent;
    }
    return null;
}
function textFromNode(node) {
    switch (node.type) {
        case "TEXT":
            return node.characters;
        case "COMPONENT":
            return node.description;
        case "GROUP":
            return node.name;
        case "FRAME":
            return node.name;
    }
}


/***/ }),

/***/ "./src/message/messages.ts":
/*!*********************************!*\
  !*** ./src/message/messages.ts ***!
  \*********************************/
/*! exports provided: MessageType, newSearchResponseMessage, newNodeNotFound, newNoIndexMessage, newSearchReindexFinishMessage, PluginMessage, SearchResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSearchResponseMessage", function() { return newSearchResponseMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newNodeNotFound", function() { return newNodeNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newNoIndexMessage", function() { return newNoIndexMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSearchReindexFinishMessage", function() { return newSearchReindexFinishMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginMessage", function() { return PluginMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResponse", function() { return SearchResponse; });
var MessageType;
(function (MessageType) {
    MessageType["SearchRequest"] = "search_request";
    MessageType["SearchResponse"] = "search_response";
    MessageType["ReindexStart"] = "reindexStart";
    MessageType["ReindexFinish"] = "reindexFinish";
    MessageType["NavigateToNode"] = "navigate_to_node";
    MessageType["UpdateModelSettings"] = "update_model_settings";
    MessageType["NoSearchIndex"] = "noSearchIndex";
    MessageType["NodeNotFound"] = "nodeNotFound";
})(MessageType || (MessageType = {}));
function newSearchResponseMessage(responses) {
    return new PluginMessage(MessageType.SearchResponse, responses);
}
function newNodeNotFound(id) {
    return new PluginMessage(MessageType.NodeNotFound, id);
}
function newNoIndexMessage() {
    return new PluginMessage(MessageType.NoSearchIndex, null);
}
function newSearchReindexFinishMessage() {
    return new PluginMessage(MessageType.ReindexFinish, null);
}
class PluginMessage {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
}
class SearchResponse {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsZXhzZWFyY2gvZGlzdC9mbGV4c2VhcmNoLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VhcmNoLnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVzc2FnZS9tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2EsaUJBQWlCLE1BQU0sb0NBQW9DLFNBQVMscUNBQXFDLEtBQXlCLGtCQUFrQixTQUFNLENBQUMsOEJBQThCLGdCQUFnQix1QkFBdUIsd0JBQXdCLGVBQWUsMkJBQTJCLDhFQUE4RSxFQUFFLDRCQUE0Qix5QkFBeUIsRUFBRSxvQkFBb0I7QUFDMWMsaUhBQWlILFlBQVksY0FBYyxZQUFZLHlDQUF5QyxhQUFhLDJDQUEyQyxTQUFTLGdCQUFnQiw2QkFBNkIsZ0JBQWdCLElBQUksS0FBSyxhQUFhLCtCQUErQixTQUFTLGdDQUFnQyx3QkFBd0IsTUFBTSxrQ0FBa0M7QUFDNWQsS0FBSyxLQUFLLElBQUksU0FBUyxXQUFXLFdBQVcsUUFBUSxJQUFJLGlCQUFpQixJQUFJLElBQUksb0VBQW9FLFdBQVcsNEJBQTRCLFNBQVMsbUJBQW1CLDJCQUEyQixNQUFNLEVBQUUsY0FBYyx5QkFBeUIsZ0JBQWdCLFlBQVksV0FBVyw4QkFBOEIsU0FBUyw0QkFBNEIsb0JBQW9CLG9DQUFvQyxPQUFPO0FBQzVjLGVBQWUsU0FBUyxpQkFBaUIsTUFBTSx1QkFBdUIsdUJBQXVCLElBQUksS0FBSyxvQkFBb0IsNEJBQTRCLElBQUksaUJBQWlCLGdDQUFnQyxNQUFNLDJCQUEyQixlQUFlLGNBQWMsU0FBUyxZQUFZLFdBQVcsS0FBSyxhQUFhLHdCQUF3QixrSUFBa0ksVUFBVTtBQUMvZCxHQUFHLElBQUksU0FBUyxpQkFBaUIsb0JBQW9CLG9CQUFvQixpQkFBaUIsT0FBTyxPQUFPLHNCQUFzQixpQkFBaUIsaUJBQWlCLFlBQVksSUFBSSx3QkFBd0Isc0JBQXNCLGtCQUFrQixVQUFVLGlDQUFpQyxHQUFHLDJCQUEyQixXQUFXLFdBQVcsTUFBTSxTQUFTLHVCQUF1QixpQkFBaUIsUUFBUSxpQkFBaUIsUUFBUSxVQUFVLE1BQU0sU0FBUyxvQkFBb0I7QUFDcGQsbUJBQW1CLE1BQU0sVUFBVSxJQUFJLDhDQUE4QyxJQUFJLGtCQUFrQixZQUFZLHlCQUF5QixJQUFJLGVBQWUsTUFBTSxLQUFLLElBQUksS0FBSyx1QkFBdUIsd0RBQXdELGNBQWMsWUFBWSxPQUFPLGVBQWUsV0FBVyxlQUFlLFFBQVEsSUFBSSxLQUFLLE9BQU8sWUFBWSxnQ0FBZ0MsT0FBTyxLQUFLLEtBQUssSUFBSSxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssT0FBTyxZQUFZLG9CQUFvQjtBQUMvZSxpQ0FBaUMsT0FBTywyREFBMkQsY0FBYyxLQUFLLDBDQUEwQyxtQkFBbUIsOEJBQThCLDhDQUE4QyxJQUFJLGdDQUFnQyxTQUFTLHFGQUFxRixJQUFJLFlBQVksZUFBZSxJQUFJLHVFQUF1RSxLQUFLO0FBQ2hmLG1EQUFtRCxzRkFBc0YsZ0JBQWdCLGNBQWMsMEJBQTBCLGNBQWMsNkJBQTZCLGNBQWMsNEJBQTRCLGNBQWMsMEJBQTBCLGNBQWMsNkJBQTZCLGVBQWUsaUJBQWlCLFlBQVksSUFBSSxhQUFhLFNBQVMsYUFBYSwyQkFBMkIsY0FBYyxRQUFRO0FBQzdlLFlBQVkseUJBQXlCLHdDQUF3QyxrREFBa0QsVUFBVSxrQkFBa0IsOENBQThDLEVBQUUsbVNBQW1TLDhCQUE4QjtBQUM1Z0IscUJBQXFCLHFCQUFxQix1Q0FBdUMsb0ZBQW9GLElBQUksc0JBQXNCLE9BQU8sZUFBZSwwQkFBMEIsRUFBRSxTQUFTLFNBQVMsZ0dBQWdHLEtBQUssUUFBUSwwQ0FBMEMsUUFBUSxrREFBa0QsUUFBUTtBQUM1ZCxJQUFJLFFBQVEsa0RBQWtELFVBQVUsb0RBQW9ELE9BQU8sbURBQW1ELE9BQU8sU0FBUyxXQUFXLE9BQU8sdUJBQXVCLG1CQUFtQiw4QkFBOEIseURBQXlELGFBQWEsZ0NBQWdDLGVBQWUsYUFBYSxpQ0FBaUMsZUFBZSxnQkFBZ0IsYUFBYTtBQUMvZSxjQUFjLGdCQUFnQiwrQkFBK0IsVUFBVSxNQUFNLGVBQWUsSUFBSSx5QkFBeUIsS0FBSyxrQkFBa0IsZUFBZSxxRUFBcUUsS0FBSyx3QkFBd0IsVUFBVSxTQUFTLFVBQVUsWUFBWSxnQkFBZ0IsWUFBWSxJQUFJLDJDQUEyQyxvQ0FBb0Msd0RBQXdELDBCQUEwQjtBQUMzZSxpRUFBaUUsbUNBQW1DLDJFQUEyRSw4Q0FBOEMsNkNBQTZDLDBFQUEwRSx1RkFBdUYsa0NBQWtDLDJCQUEyQjtBQUN4ZSxTQUFTLFNBQVMsTUFBTSxZQUFZLFdBQVcsS0FBSyxxQkFBcUIsT0FBTyxJQUFJLGNBQWMsbUJBQW1CLE1BQU0sZUFBZSxTQUFTLEtBQUssbUZBQW1GLGlCQUFpQixvQ0FBb0Msc0NBQXNDLFdBQVcsV0FBVyxNQUFNLFdBQVcsV0FBVyxhQUFhLFlBQVksVUFBVSxRQUFRLFVBQVUsZ0NBQWdDLE1BQU0sVUFBVSxlQUFlO0FBQzVlLEVBQUUsV0FBVyxjQUFjLGlCQUFpQixVQUFVLE1BQU0sV0FBVyxNQUFNLG9CQUFvQixxQkFBcUIsV0FBVyxjQUFjLGlCQUFpQixvQkFBb0IsUUFBUSxXQUFXLHFCQUFxQixTQUFTLElBQUksTUFBTSxNQUFNLDBEQUEwRCxRQUFRLFdBQVcsc0VBQXNFLFFBQVEsVUFBVSxzRUFBc0UsYUFBYTtBQUM3ZSxZQUFZLHFIQUFxSCxVQUFVLG1DQUFtQyxlQUFlLHdEQUF3RCxhQUFhLG9DQUFvQyx5Q0FBeUMsd0JBQXdCLFlBQVkseUNBQXlDLGdGQUFnRjtBQUM1ZSxVQUFVLGtDQUFrQyxPQUFPLGtEQUFrRCxXQUFXLDBCQUEwQixzQkFBc0IscUJBQXFCLE9BQU8sSUFBSSxFQUFFLEVBQUUsZUFBZSxjQUFjLFlBQVksNkNBQTZDLGlCQUFpQix5QkFBeUIsU0FBUyxnQ0FBZ0Msa0NBQWtDLFlBQVksV0FBVywwRUFBMEU7QUFDaGYsRUFBRSxJQUFJLEtBQUssV0FBVyxNQUFNLG9DQUFvQyxVQUFVLHVDQUF1QyxJQUFJLHlDQUF5QyxLQUFLLHVCQUF1QixJQUFJLDJDQUEyQyxNQUFNLG9CQUFvQixJQUFJLEtBQUssc0JBQXNCLFlBQVksSUFBSSw0Q0FBNEMsTUFBTTtBQUNwVyxTQUFTLElBQUksbURBQW1ELFlBQVksVUFBVSxhQUFhLDhCQUE4QixTQUFTLGVBQWUsUUFBUSxZQUFZLElBQUksbUJBQW1CLHlCQUF5QixLQUFLLDhDQUE4QyxlQUFlLE1BQU0sZ0JBQWdCLElBQUksWUFBWSxXQUFXLGNBQWMsb0RBQW9ELFFBQVEsSUFBSSxzQkFBc0IsMkJBQTJCLE1BQU0sUUFBUSxXQUFXLEtBQUs7QUFDN2UsUUFBUSxlQUFlLFFBQVEsV0FBVyxjQUFjLFFBQVEsWUFBWSxrQkFBa0IsZUFBZSx1QkFBdUIsSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLFdBQVcsY0FBYyxVQUFVLDJCQUEyQixzQ0FBc0MsTUFBTSxpQkFBaUIsTUFBTSxRQUFRLFdBQVcsb0JBQW9CLGVBQWUsUUFBUSxRQUFRLFdBQVcscUNBQXFDLElBQUksbUJBQW1CLFlBQVksYUFBYSxtQ0FBbUM7QUFDMWUsaUNBQWlDLHlEQUF5RCxhQUFhLG1DQUFtQyw0Q0FBNEMsWUFBWSxjQUFjLGdEQUFnRCxlQUFlLCtCQUErQixPQUFPLGtEQUFrRCxXQUFXLDBCQUEwQixzQkFBc0Isb0JBQW9CLE9BQU8sSUFBSSxFQUFFLEVBQUUsZUFBZSxjQUFjLFlBQVk7QUFDOWUsa0JBQWtCLFFBQVEsNkJBQTZCLG9CQUFvQix5QkFBeUIsaUJBQWlCLFVBQVUsYUFBYSxNQUFNLHFDQUFxQyxTQUFTLG9CQUFvQixXQUFXLGlCQUFpQixlQUFlLElBQUksTUFBTSwyQ0FBMkMsV0FBVyxTQUFTLFNBQVMsVUFBVSxZQUFZLFNBQVMsMkJBQTJCLDRCQUE0QixFQUFFLEtBQUssYUFBYSxnQkFBZ0IscUNBQXFDO0FBQ2hmLE9BQU8sYUFBYSxVQUFVLGNBQWMsZ0JBQWdCLFVBQVUsV0FBVyxlQUFlLGdCQUFnQiw2QkFBNkIsUUFBUSxRQUFRLG1CQUFtQixjQUFjLFFBQVEsS0FBSyxLQUFLLFlBQVksV0FBVyw0RUFBNEUsbUJBQW1CLFdBQVcsUUFBUSxJQUFJLDJFQUEyRSxnREFBZ0QsZUFBZSxhQUFhLCtCQUErQixnQ0FBZ0M7QUFDbmpCLHNCQUFzQixFQUFFLEVBQUUsd0NBQXdDLHlCQUF5QixPQUFPLGtEQUFrRCxXQUFXLDBCQUEwQixzQkFBc0IseUJBQXlCLE9BQU8sRUFBRSxFQUFFLGVBQWUsY0FBYyxZQUFZLDZDQUE2QyxzQkFBc0IsSUFBSSx5QkFBeUIsNEJBQTRCLDhCQUE4QixpQkFBaUIsc0JBQXNCLFNBQVM7QUFDdGUsa0NBQWtDLFdBQVcsS0FBSyxLQUFLLGNBQWMscURBQXFELG1CQUFtQixlQUFlLEtBQUssSUFBSSxLQUFLLFdBQVcsTUFBTSxNQUFNLHlCQUF5QixvQkFBb0IsNENBQTRDLG9CQUFvQixVQUFVLFdBQVcsYUFBYSxzQkFBc0IsTUFBTSxNQUFNLFlBQVksTUFBTSxxQ0FBcUMsbURBQW1ELFlBQVksS0FBSyxNQUFNO0FBQ25mLEtBQUssVUFBVSxtQkFBbUIsNEJBQTRCLFdBQVcsK0JBQStCLG1DQUFtQyxvQ0FBb0Msb0JBQW9CLFFBQVEsTUFBTSxNQUFNLE1BQU0sU0FBUyxTQUFTLHFCQUFxQixlQUFlLEtBQUssc0NBQXNDLDhCQUE4QixXQUFXLEtBQUssa0JBQWtCLFVBQVUsbUJBQW1CLG9CQUFvQix5QkFBeUIsWUFBWSxPQUFPLFdBQVcsUUFBUSxJQUFJO0FBQ2xmLGdCQUFnQixLQUFLLFNBQVMsb0JBQW9CLFdBQVcsUUFBUSxJQUFJLCtCQUErQixTQUFTLHFCQUFxQix5QkFBeUIsTUFBTSxJQUFJLGlCQUFpQixLQUFLLHVCQUF1QixXQUFXLFFBQVEsSUFBSSxLQUFLLGlCQUFpQixTQUFTLFlBQVksSUFBSSxLQUFLLGVBQWUsd0JBQXdCLFFBQVEsbUJBQW1CLElBQUksY0FBYyxlQUFlLFVBQVUsS0FBSyxPQUFPLGdDQUFnQyxVQUFVLDRCQUE0QixzQkFBc0I7QUFDdGYsT0FBTywyQkFBMkIsbUJBQW1CLEVBQUUsWUFBWSxtUEFBbVAsNkJBQTZCLDhCQUE4QiwrQkFBK0IseUNBQXlDLDBCQUEwQixXQUFXLG9CQUFvQjtBQUNsZixFQUFFLFdBQVcsaUNBQWlDLG1CQUFtQixhQUFhLCtCQUErQix3Q0FBd0MsV0FBVyw0QkFBNEIsOEJBQThCLEtBQUssUUFBUSx1QkFBdUIsV0FBVyxLQUFLLDJCQUEyQixnQ0FBZ0MsaUJBQWlCLDJDQUEyQyx5QkFBeUIsVUFBVSxpQ0FBaUM7QUFDemMsWUFBWSxXQUFXLDhCQUE4Qiw0QkFBNEIsY0FBYyxpQkFBaUIsa0JBQWtCLFdBQVcsY0FBYyxRQUFRLElBQUksS0FBSyxxQkFBcUIsYUFBYSw4QkFBOEIsd0JBQXdCLEtBQUssT0FBTyxRQUFRLFdBQVcsY0FBYyxZQUFZLFlBQVksV0FBVyxvQkFBb0IsaUVBQWlFLG1CQUFtQixpQ0FBaUMsTUFBTSxrQkFBa0IsdUJBQXVCO0FBQzVnQixrQkFBa0IsaWFBQWlhLG1CQUFtQix1QkFBdUIsb0JBQW9CLHVCQUF1QjtBQUN4Z0IscVNBQXFTLHFCQUFxQixlQUFlLGlCQUFpQix1QkFBdUIseUJBQXlCLFVBQVUsb0JBQW9CO0FBQ3hhLDZDQUE2QyxtQkFBbUIsZUFBZSxzQkFBc0IsZUFBZSxlQUFlLFlBQVksV0FBVyxLQUFLLGFBQWEsNENBQTRDLGNBQWMsUUFBUSxVQUFVLGNBQWMsZUFBZSxjQUFjLGFBQWEsaUJBQWlCLDZCQUE2QixlQUFlLGVBQWUsZUFBZSxXQUFXLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLGVBQWU7QUFDcGYsa0JBQWtCLHFCQUFxQixxQkFBcUIscUJBQXFCLGdCQUFnQixZQUFZLGlCQUFpQixnQkFBZ0IsWUFBWSxzQkFBc0IsNEJBQTRCLHNCQUFzQixjQUFjLHNCQUFzQixtQkFBbUIsV0FBVyxRQUFRLGVBQWUsWUFBWSw4QkFBOEIsRUFBRSxJQUFJLFVBQVUsUUFBUSxJQUFJLDJCQUEyQixPQUFPLFNBQVMsVUFBVSxTQUFTLEdBQUcsU0FBUyxZQUFZLFVBQVU7QUFDamUsOENBQThDLDJCQUEyQiwyREFBMkQsdUJBQXVCLGVBQWUsU0FBUyxnQkFBZ0Isc0JBQXNCLG9CQUFvQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7QUN6QzdQO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3VDO0FBQ1U7QUFDakQ7QUFDQSxrQkFBa0IsbURBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFXO0FBQzVCO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQVc7QUFDNUI7QUFDQTtBQUNBLGlCQUFpQiw2REFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ21EO0FBQ1g7QUFDMEc7QUFDM0k7QUFDUDtBQUNBLDJCQUEyQixvREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5RUFBZTtBQUNwRDtBQUNBO0FBQ0EseUJBQXlCLHlEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMkVBQWlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdFQUFjLFVBQVUsMERBQVk7QUFDNUYsaUNBQWlDLGtGQUF3QjtBQUN6RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1RkFBNkI7QUFDOUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3NDO0FBQ3RDLG1CQUFtQixtQkFBTyxDQUFDLG9FQUFZO0FBQ2hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQVk7QUFDM0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDNUI7QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLypcbiBGbGV4U2VhcmNoIHYwLjYuMzBcbiBDb3B5cmlnaHQgMjAxOSBOZXh0YXBwcyBHbWJIXG4gQXV0aG9yOiBUaG9tYXMgV2lsa2VybGluZ1xuIFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIExpY2VuY2VcbiBodHRwczovL2dpdGh1Yi5jb20vbmV4dGFwcHMtZGUvZmxleHNlYXJjaFxuKi9cbid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24oSyxSLHcpe2xldCBMOyhMPXcuZGVmaW5lKSYmTC5hbWQ/TChbXSxmdW5jdGlvbigpe3JldHVybiBSfSk6KEw9dy5tb2R1bGVzKT9MW0sudG9Mb3dlckNhc2UoKV09UjpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9Ujp3W0tdPVJ9KShcIkZsZXhTZWFyY2hcIixmdW5jdGlvbiBtYShLKXtmdW5jdGlvbiB3KGEsYyl7Y29uc3QgYj1jP2MuaWQ6YSYmYS5pZDt0aGlzLmlkPWJ8fDA9PT1iP2I6bmErKzt0aGlzLmluaXQoYSxjKTtmYSh0aGlzLFwiaW5kZXhcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLmE/T2JqZWN0LmtleXModGhpcy5hLmluZGV4W3RoaXMuYS5rZXlzWzBdXS5jKTpPYmplY3Qua2V5cyh0aGlzLmMpfSk7ZmEodGhpcyxcImxlbmd0aFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5kZXgubGVuZ3RofSl9ZnVuY3Rpb24gTChhLGMsYixkKXt0aGlzLnUhPT10aGlzLmcmJih0aGlzLm89dGhpcy5vLmNvbmNhdChiKSx0aGlzLnUrKyxcbmQmJnRoaXMuby5sZW5ndGg+PWQmJih0aGlzLnU9dGhpcy5nKSx0aGlzLnU9PT10aGlzLmcmJih0aGlzLmNhY2hlJiZ0aGlzLmouc2V0KGMsdGhpcy5vKSx0aGlzLkYmJnRoaXMuRih0aGlzLm8pKSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gUyhhKXtjb25zdCBjPUIoKTtmb3IoY29uc3QgYiBpbiBhKWlmKGEuaGFzT3duUHJvcGVydHkoYikpe2NvbnN0IGQ9YVtiXTtGKGQpP2NbYl09ZC5zbGljZSgwKTpHKGQpP2NbYl09UyhkKTpjW2JdPWR9cmV0dXJuIGN9ZnVuY3Rpb24gVyhhLGMpe2NvbnN0IGI9YS5sZW5ndGgsZD1PKGMpLGU9W107Zm9yKGxldCBmPTAsaD0wO2Y8YjtmKyspe2NvbnN0IGc9YVtmXTtpZihkJiZjKGcpfHwhZCYmIWNbZ10pZVtoKytdPWd9cmV0dXJuIGV9ZnVuY3Rpb24gUChhLGMsYixkLGUsZixoLGcsayxsKXtiPWhhKGIsaD8wOmUsZyxmLGMsayxsKTtsZXQgcDtnJiYoZz1iLnBhZ2UscD1iLm5leHQsYj1iLnJlc3VsdCk7aWYoaCljPXRoaXMud2hlcmUoaCxudWxsLFxuZSxiKTtlbHNle2M9YjtiPXRoaXMubDtlPWMubGVuZ3RoO2Y9QXJyYXkoZSk7Zm9yKGg9MDtoPGU7aCsrKWZbaF09YltjW2hdXTtjPWZ9Yj1jO2QmJihPKGQpfHwoTT1kLnNwbGl0KFwiOlwiKSwxPE0ubGVuZ3RoP2Q9b2E6KE09TVswXSxkPXBhKSksYi5zb3J0KGQpKTtiPVQoZyxwLGIpO3RoaXMuY2FjaGUmJnRoaXMuai5zZXQoYSxiKTtyZXR1cm4gYn1mdW5jdGlvbiBmYShhLGMsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYyx7Z2V0OmJ9KX1mdW5jdGlvbiByKGEpe3JldHVybiBuZXcgUmVnRXhwKGEsXCJnXCIpfWZ1bmN0aW9uIFEoYSxjKXtmb3IobGV0IGI9MDtiPGMubGVuZ3RoO2IrPTIpYT1hLnJlcGxhY2UoY1tiXSxjW2IrMV0pO3JldHVybiBhfWZ1bmN0aW9uIFYoYSxjLGIsZCxlLGYsaCxnKXtpZihjW2JdKXJldHVybiBjW2JdO2U9ZT8oZy0oaHx8Zy8xLjUpKSpmKyhofHxnLzEuNSkqZTpmO2NbYl09ZTtlPj1oJiYoYT1hW2ctKGUrLjU+PjApXSxhPWFbYl18fChhW2JdPVtdKSxcbmFbYS5sZW5ndGhdPWQpO3JldHVybiBlfWZ1bmN0aW9uIGJhKGEsYyl7aWYoYSl7Y29uc3QgYj1PYmplY3Qua2V5cyhhKTtmb3IobGV0IGQ9MCxlPWIubGVuZ3RoO2Q8ZTtkKyspe2NvbnN0IGY9YltkXSxoPWFbZl07aWYoaClmb3IobGV0IGc9MCxrPWgubGVuZ3RoO2c8aztnKyspaWYoaFtnXT09PWMpezE9PT1rP2RlbGV0ZSBhW2ZdOmguc3BsaWNlKGcsMSk7YnJlYWt9ZWxzZSBHKGhbZ10pJiZiYShoW2ddLGMpfX19ZnVuY3Rpb24gY2EoYSl7bGV0IGM9XCJcIixiPVwiXCI7dmFyIGQ9XCJcIjtmb3IobGV0IGU9MDtlPGEubGVuZ3RoO2UrKyl7Y29uc3QgZj1hW2VdO2lmKGYhPT1iKWlmKGUmJlwiaFwiPT09Zil7aWYoZD1cImFcIj09PWR8fFwiZVwiPT09ZHx8XCJpXCI9PT1kfHxcIm9cIj09PWR8fFwidVwiPT09ZHx8XCJ5XCI9PT1kLChcImFcIj09PWJ8fFwiZVwiPT09Ynx8XCJpXCI9PT1ifHxcIm9cIj09PWJ8fFwidVwiPT09Ynx8XCJ5XCI9PT1iKSYmZHx8XCIgXCI9PT1iKWMrPWZ9ZWxzZSBjKz1mO2Q9ZT09PWEubGVuZ3RoLTE/XCJcIjphW2UrXG4xXTtiPWZ9cmV0dXJuIGN9ZnVuY3Rpb24gcWEoYSxjKXthPWEubGVuZ3RoLWMubGVuZ3RoO3JldHVybiAwPmE/MTphPy0xOjB9ZnVuY3Rpb24gcGEoYSxjKXthPWFbTV07Yz1jW01dO3JldHVybiBhPGM/LTE6YT5jPzE6MH1mdW5jdGlvbiBvYShhLGMpe2NvbnN0IGI9TS5sZW5ndGg7Zm9yKGxldCBkPTA7ZDxiO2QrKylhPWFbTVtkXV0sYz1jW01bZF1dO3JldHVybiBhPGM/LTE6YT5jPzE6MH1mdW5jdGlvbiBUKGEsYyxiKXtyZXR1cm4gYT97cGFnZTphLG5leHQ6Yz9cIlwiK2M6bnVsbCxyZXN1bHQ6Yn06Yn1mdW5jdGlvbiBoYShhLGMsYixkLGUsZixoKXtsZXQgZyxrPVtdO2lmKCEwPT09Yil7Yj1cIjBcIjt2YXIgbD1cIlwifWVsc2UgbD1iJiZiLnNwbGl0KFwiOlwiKTtjb25zdCBwPWEubGVuZ3RoO2lmKDE8cCl7Y29uc3QgeT1CKCksdD1bXTtsZXQgdix4O3ZhciBuPTAsbTtsZXQgSTt2YXIgdT0hMDtsZXQgRCxFPTAsTixkYSxYLGVhO2wmJigyPT09bC5sZW5ndGg/KFg9bCxsPSExKTpsPWVhPVxucGFyc2VJbnQobFswXSwxMCkpO2lmKGgpe2Zvcih2PUIoKTtuPHA7bisrKWlmKFwibm90XCI9PT1lW25dKWZvcih4PWFbbl0sST14Lmxlbmd0aCxtPTA7bTxJO20rKyl2W1wiQFwiK3hbbV1dPTE7ZWxzZSBkYT1uKzE7aWYoQyhkYSkpcmV0dXJuIFQoYixnLGspO249MH1lbHNlIE49SihlKSYmZTtsZXQgWTtmb3IoO248cDtuKyspe2NvbnN0IHJhPW49PT0oZGF8fHApLTE7aWYoIU58fCFuKWlmKChtPU58fGUmJmVbbl0pJiZcImFuZFwiIT09bSlpZihcIm9yXCI9PT1tKVk9ITE7ZWxzZSBjb250aW51ZTtlbHNlIFk9Zj0hMDt4PWFbbl07aWYoST14Lmxlbmd0aCl7aWYodSlpZihEKXt2YXIgcT1ELmxlbmd0aDtmb3IobT0wO208cTttKyspe3U9RFttXTt2YXIgQT1cIkBcIit1O2gmJnZbQV18fCh5W0FdPTEsZnx8KGtbRSsrXT11KSl9RD1udWxsO3U9ITF9ZWxzZXtEPXg7Y29udGludWV9QT0hMTtmb3IobT0wO208STttKyspe3E9eFttXTt2YXIgej1cIkBcIitxO2NvbnN0IFo9Zj95W3pdfHwwOm47aWYoISghWiYmXG4hZHx8aCYmdlt6XXx8IWYmJnlbel0pKWlmKFo9PT1uKXtpZihyYSl7aWYoIWVhfHwtLWVhPEUpaWYoa1tFKytdPXEsYyYmRT09PWMpcmV0dXJuIFQoYixFKyhsfHwwKSxrKX1lbHNlIHlbel09bisxO0E9ITB9ZWxzZSBkJiYoej10W1pdfHwodFtaXT1bXSkselt6Lmxlbmd0aF09cSl9aWYoWSYmIUEmJiFkKWJyZWFrfWVsc2UgaWYoWSYmIWQpcmV0dXJuIFQoYixnLHgpfWlmKEQpaWYobj1ELmxlbmd0aCxoKWZvcihtPWw/cGFyc2VJbnQobCwxMCk6MDttPG47bSsrKWE9RFttXSx2W1wiQFwiK2FdfHwoa1tFKytdPWEpO2Vsc2Ugaz1EO2lmKGQpZm9yKEU9ay5sZW5ndGgsWD8obj1wYXJzZUludChYWzBdLDEwKSsxLG09cGFyc2VJbnQoWFsxXSwxMCkrMSk6KG49dC5sZW5ndGgsbT0wKTtuLS07KWlmKHE9dFtuXSl7Zm9yKEk9cS5sZW5ndGg7bTxJO20rKylpZihkPXFbbV0sIWh8fCF2W1wiQFwiK2RdKWlmKGtbRSsrXT1kLGMmJkU9PT1jKXJldHVybiBUKGIsbitcIjpcIittLGspO209MH19ZWxzZSFwfHxcbmUmJlwibm90XCI9PT1lWzBdfHwoaz1hWzBdLGwmJihsPXBhcnNlSW50KGxbMF0sMTApKSk7YyYmKGg9ay5sZW5ndGgsbCYmbD5oJiYobD0wKSxsPWx8fDAsZz1sK2MsZzxoP2s9ay5zbGljZShsLGcpOihnPTAsbCYmKGs9ay5zbGljZShsKSkpKTtyZXR1cm4gVChiLGcsayl9ZnVuY3Rpb24gSihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF9ZnVuY3Rpb24gRihhKXtyZXR1cm4gYS5jb25zdHJ1Y3Rvcj09PUFycmF5fWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGF9ZnVuY3Rpb24gRyhhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGF9ZnVuY3Rpb24gQyhhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGF9ZnVuY3Rpb24gaWEoYSl7Y29uc3QgYz1BcnJheShhKTtmb3IobGV0IGI9MDtiPGE7YisrKWNbYl09QigpO3JldHVybiBjfWZ1bmN0aW9uIEIoKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKX1mdW5jdGlvbiBzYSgpe2xldCBhLGM7c2VsZi5vbm1lc3NhZ2U9XG5mdW5jdGlvbihiKXtpZihiPWIuZGF0YSlpZihiLnNlYXJjaCl7Y29uc3QgZD1jLnNlYXJjaChiLmNvbnRlbnQsYi50aHJlc2hvbGQ/e2xpbWl0OmIubGltaXQsdGhyZXNob2xkOmIudGhyZXNob2xkLHdoZXJlOmIud2hlcmV9OmIubGltaXQpO3NlbGYucG9zdE1lc3NhZ2Uoe2lkOmEsY29udGVudDpiLmNvbnRlbnQsbGltaXQ6Yi5saW1pdCxyZXN1bHQ6ZH0pfWVsc2UgYi5hZGQ/Yy5hZGQoYi5pZCxiLmNvbnRlbnQpOmIudXBkYXRlP2MudXBkYXRlKGIuaWQsYi5jb250ZW50KTpiLnJlbW92ZT9jLnJlbW92ZShiLmlkKTpiLmNsZWFyP2MuY2xlYXIoKTpiLmluZm8/KGI9Yy5pbmZvKCksYi53b3JrZXI9YSxjb25zb2xlLmxvZyhiKSk6Yi5yZWdpc3RlciYmKGE9Yi5pZCxiLm9wdGlvbnMuY2FjaGU9ITEsYi5vcHRpb25zLmFzeW5jPSExLGIub3B0aW9ucy53b3JrZXI9ITEsYz0obmV3IEZ1bmN0aW9uKGIucmVnaXN0ZXIuc3Vic3RyaW5nKGIucmVnaXN0ZXIuaW5kZXhPZihcIntcIikrMSxiLnJlZ2lzdGVyLmxhc3RJbmRleE9mKFwifVwiKSkpKSgpLFxuYz1uZXcgYyhiLm9wdGlvbnMpKX19ZnVuY3Rpb24gdGEoYSxjLGIsZCl7YT1LKFwiZmxleHNlYXJjaFwiLFwiaWRcIithLHNhLGZ1bmN0aW9uKGYpeyhmPWYuZGF0YSkmJmYucmVzdWx0JiZkKGYuaWQsZi5jb250ZW50LGYucmVzdWx0LGYubGltaXQsZi53aGVyZSxmLmN1cnNvcixmLnN1Z2dlc3QpfSxjKTtjb25zdCBlPW1hLnRvU3RyaW5nKCk7Yi5pZD1jO2EucG9zdE1lc3NhZ2Uoe3JlZ2lzdGVyOmUsb3B0aW9uczpiLGlkOmN9KTtyZXR1cm4gYX1jb25zdCBIPXtlbmNvZGU6XCJpY2FzZVwiLGY6XCJmb3J3YXJkXCIsc3BsaXQ6L1xcVysvLGNhY2hlOiExLGFzeW5jOiExLGc6ITEsRDohMSxhOiExLGI6OSx0aHJlc2hvbGQ6MCxkZXB0aDowfSxqYT17bWVtb3J5OntlbmNvZGU6XCJleHRyYVwiLGY6XCJzdHJpY3RcIix0aHJlc2hvbGQ6MCxiOjF9LHNwZWVkOntlbmNvZGU6XCJpY2FzZVwiLGY6XCJzdHJpY3RcIix0aHJlc2hvbGQ6MSxiOjMsZGVwdGg6Mn0sbWF0Y2g6e2VuY29kZTpcImV4dHJhXCIsZjpcImZ1bGxcIix0aHJlc2hvbGQ6MSxcbmI6M30sc2NvcmU6e2VuY29kZTpcImV4dHJhXCIsZjpcInN0cmljdFwiLHRocmVzaG9sZDoxLGI6OSxkZXB0aDo0fSxiYWxhbmNlOntlbmNvZGU6XCJiYWxhbmNlXCIsZjpcInN0cmljdFwiLHRocmVzaG9sZDowLGI6MyxkZXB0aDozfSxmYXN0OntlbmNvZGU6XCJpY2FzZVwiLGY6XCJzdHJpY3RcIix0aHJlc2hvbGQ6OCxiOjksZGVwdGg6MX19LGFhPVtdO2xldCBuYT0wO2NvbnN0IGthPXt9LGxhPXt9O3cuY3JlYXRlPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIG5ldyB3KGEsYyl9O3cucmVnaXN0ZXJNYXRjaGVyPWZ1bmN0aW9uKGEpe2Zvcihjb25zdCBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmYWEucHVzaChyKGMpLGFbY10pO3JldHVybiB0aGlzfTt3LnJlZ2lzdGVyRW5jb2Rlcj1mdW5jdGlvbihhLGMpe1VbYV09Yy5iaW5kKFUpO3JldHVybiB0aGlzfTt3LnJlZ2lzdGVyTGFuZ3VhZ2U9ZnVuY3Rpb24oYSxjKXtrYVthXT1jLmZpbHRlcjtsYVthXT1jLnN0ZW1tZXI7cmV0dXJuIHRoaXN9O3cuZW5jb2RlPVxuZnVuY3Rpb24oYSxjKXtyZXR1cm4gVVthXShjKX07dy5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihhLGMpe3RoaXMudj1bXTtpZihjKXt2YXIgYj1jLnByZXNldDthPWN9ZWxzZSBhfHwoYT1IKSxiPWEucHJlc2V0O2M9e307SihhKT8oYz1qYVthXSxhPXt9KTpiJiYoYz1qYVtiXSk7aWYoYj1hLndvcmtlcilpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIFdvcmtlcilhLndvcmtlcj0hMSx0aGlzLm09bnVsbDtlbHNle3ZhciBkPXBhcnNlSW50KGIsMTApfHw0O3RoaXMuQz0tMTt0aGlzLnU9MDt0aGlzLm89W107dGhpcy5GPW51bGw7dGhpcy5tPUFycmF5KGQpO2Zvcih2YXIgZT0wO2U8ZDtlKyspdGhpcy5tW2VdPXRhKHRoaXMuaWQsZSxhLEwuYmluZCh0aGlzKSl9dGhpcy5mPWEudG9rZW5pemV8fGMuZnx8dGhpcy5mfHxILmY7dGhpcy5zcGxpdD1DKGI9YS5zcGxpdCk/dGhpcy5zcGxpdHx8SC5zcGxpdDpKKGIpP3IoYik6Yjt0aGlzLkQ9YS5ydGx8fHRoaXMuRHx8SC5EO3RoaXMuYXN5bmM9XG5cInVuZGVmaW5lZFwiPT09dHlwZW9mIFByb21pc2V8fEMoYj1hLmFzeW5jKT90aGlzLmFzeW5jfHxILmFzeW5jOmI7dGhpcy5nPUMoYj1hLndvcmtlcik/dGhpcy5nfHxILmc6Yjt0aGlzLnRocmVzaG9sZD1DKGI9YS50aHJlc2hvbGQpP2MudGhyZXNob2xkfHx0aGlzLnRocmVzaG9sZHx8SC50aHJlc2hvbGQ6Yjt0aGlzLmI9QyhiPWEucmVzb2x1dGlvbik/Yj1jLmJ8fHRoaXMuYnx8SC5iOmI7Yjw9dGhpcy50aHJlc2hvbGQmJih0aGlzLmI9dGhpcy50aHJlc2hvbGQrMSk7dGhpcy5kZXB0aD1cInN0cmljdFwiIT09dGhpcy5mfHxDKGI9YS5kZXB0aCk/Yy5kZXB0aHx8dGhpcy5kZXB0aHx8SC5kZXB0aDpiO3RoaXMudz0oYj1DKGI9YS5lbmNvZGUpP2MuZW5jb2RlfHxILmVuY29kZTpiKSYmVVtiXSYmVVtiXS5iaW5kKFUpfHwoTyhiKT9iOnRoaXMud3x8ITEpOyhiPWEubWF0Y2hlcikmJnRoaXMuYWRkTWF0Y2hlcihiKTtpZihiPShjPWEubGFuZyl8fGEuZmlsdGVyKXtKKGIpJiYoYj1rYVtiXSk7XG5pZihGKGIpKXtkPXRoaXMudztlPUIoKTtmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKyl7dmFyIGg9ZD9kKGJbZl0pOmJbZl07ZVtoXT0xfWI9ZX10aGlzLmZpbHRlcj1ifWlmKGI9Y3x8YS5zdGVtbWVyKXt2YXIgZztjPUooYik/bGFbYl06YjtkPXRoaXMudztlPVtdO2ZvcihnIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShnKSYmKGY9ZD9kKGcpOmcsZS5wdXNoKHIoZitcIigkfFxcXFxXKVwiKSxkP2QoY1tnXSk6Y1tnXSkpO3RoaXMuc3RlbW1lcj1nPWV9dGhpcy5hPWU9KGI9YS5kb2MpP1MoYik6dGhpcy5hfHxILmE7dGhpcy5pPWlhKHRoaXMuYi0odGhpcy50aHJlc2hvbGR8fDApKTt0aGlzLmg9QigpO3RoaXMuYz1CKCk7aWYoZSl7dGhpcy5sPUIoKTthLmRvYz1udWxsO2c9ZS5pbmRleD17fTtjPWUua2V5cz1bXTtkPWUuZmllbGQ7Zj1lLnRhZztoPWUuc3RvcmU7RihlLmlkKXx8KGUuaWQ9ZS5pZC5zcGxpdChcIjpcIikpO2lmKGgpe3ZhciBrPUIoKTtpZihKKGgpKWtbaF09MTtlbHNlIGlmKEYoaCkpZm9yKGxldCBsPVxuMDtsPGgubGVuZ3RoO2wrKylrW2hbbF1dPTE7ZWxzZSBHKGgpJiYoaz1oKTtlLnN0b3JlPWt9aWYoZil7dGhpcy5HPUIoKTtoPUIoKTtpZihkKWlmKEooZCkpaFtkXT1hO2Vsc2UgaWYoRihkKSlmb3Ioaz0wO2s8ZC5sZW5ndGg7aysrKWhbZFtrXV09YTtlbHNlIEcoZCkmJihoPWQpO0YoZil8fChlLnRhZz1mPVtmXSk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKyl0aGlzLkdbZltkXV09QigpO3RoaXMuST1mO2Q9aH1pZihkKXtsZXQgbDtGKGQpfHwoRyhkKT8obD1kLGUuZmllbGQ9ZD1PYmplY3Qua2V5cyhkKSk6ZS5maWVsZD1kPVtkXSk7Zm9yKGU9MDtlPGQubGVuZ3RoO2UrKylmPWRbZV0sRihmKXx8KGwmJihhPWxbZl0pLGNbZV09ZixkW2VdPWYuc3BsaXQoXCI6XCIpKSxnW2ZdPW5ldyB3KGEpfWEuZG9jPWJ9dGhpcy5CPSEwO3RoaXMuaj0odGhpcy5jYWNoZT1iPUMoYj1hLmNhY2hlKT90aGlzLmNhY2hlfHxILmNhY2hlOmIpP25ldyB1YShiKTohMTtyZXR1cm4gdGhpc307dy5wcm90b3R5cGUuZW5jb2RlPVxuZnVuY3Rpb24oYSl7YSYmKGFhLmxlbmd0aCYmKGE9UShhLGFhKSksdGhpcy52Lmxlbmd0aCYmKGE9UShhLHRoaXMudikpLHRoaXMudyYmKGE9dGhpcy53KGEpKSx0aGlzLnN0ZW1tZXImJihhPVEoYSx0aGlzLnN0ZW1tZXIpKSk7cmV0dXJuIGF9O3cucHJvdG90eXBlLmFkZE1hdGNoZXI9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLnY7Zm9yKGNvbnN0IGIgaW4gYSlhLmhhc093blByb3BlcnR5KGIpJiZjLnB1c2gocihiKSxhW2JdKTtyZXR1cm4gdGhpc307dy5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYyxiLGQsZSl7aWYodGhpcy5hJiZHKGEpKXJldHVybiB0aGlzLkEoXCJhZGRcIixhLGMpO2lmKGMmJkooYykmJihhfHwwPT09YSkpe3ZhciBmPVwiQFwiK2E7aWYodGhpcy5jW2ZdJiYhZClyZXR1cm4gdGhpcy51cGRhdGUoYSxjKTtpZih0aGlzLmcpcmV0dXJuKyt0aGlzLkM+PXRoaXMubS5sZW5ndGgmJih0aGlzLkM9MCksdGhpcy5tW3RoaXMuQ10ucG9zdE1lc3NhZ2Uoe2FkZDohMCxpZDphLFxuY29udGVudDpjfSksdGhpcy5jW2ZdPVwiXCIrdGhpcy5DLGImJmIoKSx0aGlzO2lmKCFlKXtpZih0aGlzLmFzeW5jJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgaW1wb3J0U2NyaXB0cyl7bGV0IHQ9dGhpcztmPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHYpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmFkZChhLGMsbnVsbCxkLCEwKTt0PW51bGw7digpfSl9KTtpZihiKWYudGhlbihiKTtlbHNlIHJldHVybiBmO3JldHVybiB0aGlzfWlmKGIpcmV0dXJuIHRoaXMuYWRkKGEsYyxudWxsLGQsITApLGIoKSx0aGlzfWM9dGhpcy5lbmNvZGUoYyk7aWYoIWMubGVuZ3RoKXJldHVybiB0aGlzO2I9dGhpcy5mO2U9TyhiKT9iKGMpOmMuc3BsaXQodGhpcy5zcGxpdCk7dGhpcy5maWx0ZXImJihlPVcoZSx0aGlzLmZpbHRlcikpO2NvbnN0IG49QigpO24uX2N0eD1CKCk7Y29uc3QgbT1lLmxlbmd0aCx1PXRoaXMudGhyZXNob2xkLHE9dGhpcy5kZXB0aCxBPXRoaXMuYix6PXRoaXMuaSx5PXRoaXMuRDtmb3IobGV0IHQ9XG4wO3Q8bTt0Kyspe3ZhciBoPWVbdF07aWYoaCl7dmFyIGc9aC5sZW5ndGgsaz0oeT90KzE6bS10KS9tLGw9XCJcIjtzd2l0Y2goYil7Y2FzZSBcInJldmVyc2VcIjpjYXNlIFwiYm90aFwiOmZvcih2YXIgcD1nOy0tcDspbD1oW3BdK2wsVih6LG4sbCxhLHk/MTooZy1wKS9nLGssdSxBLTEpO2w9XCJcIjtjYXNlIFwiZm9yd2FyZFwiOmZvcihwPTA7cDxnO3ArKylsKz1oW3BdLFYoeixuLGwsYSx5PyhwKzEpL2c6MSxrLHUsQS0xKTticmVhaztjYXNlIFwiZnVsbFwiOmZvcihwPTA7cDxnO3ArKyl7Y29uc3Qgdj0oeT9wKzE6Zy1wKS9nO2ZvcihsZXQgeD1nO3g+cDt4LS0pbD1oLnN1YnN0cmluZyhwLHgpLFYoeixuLGwsYSx2LGssdSxBLTEpfWJyZWFrO2RlZmF1bHQ6aWYoZz1WKHosbixoLGEsMSxrLHUsQS0xKSxxJiYxPG0mJmc+PXUpZm9yKGc9bi5fY3R4W2hdfHwobi5fY3R4W2hdPUIoKSksaD10aGlzLmhbaF18fCh0aGlzLmhbaF09aWEoQS0odXx8MCkpKSxrPXQtcSxsPXQrcSsxLDA+ayYmKGs9MCksbD5cbm0mJihsPW0pO2s8bDtrKyspayE9PXQmJlYoaCxnLGVba10sYSwwLEEtKGs8dD90LWs6ay10KSx1LEEtMSl9fX10aGlzLmNbZl09MTt0aGlzLkI9ITF9cmV0dXJuIHRoaXN9O3cucHJvdG90eXBlLkE9ZnVuY3Rpb24oYSxjLGIpe2lmKEYoYykpe3ZhciBkPWMubGVuZ3RoO2lmKGQtLSl7Zm9yKHZhciBlPTA7ZTxkO2UrKyl0aGlzLkEoYSxjW2VdKTtyZXR1cm4gdGhpcy5BKGEsY1tkXSxiKX19ZWxzZXt2YXIgZj10aGlzLmEuaW5kZXgsaD10aGlzLmEua2V5cyxnPXRoaXMuYS50YWc7ZT10aGlzLmEuc3RvcmU7dmFyIGs7dmFyIGw9dGhpcy5hLmlkO2Q9Yztmb3IodmFyIHA9MDtwPGwubGVuZ3RoO3ArKylkPWRbbFtwXV07aWYoXCJyZW1vdmVcIj09PWEmJihkZWxldGUgdGhpcy5sW2RdLGw9aC5sZW5ndGgsbC0tKSl7Zm9yKGM9MDtjPGw7YysrKWZbaFtjXV0ucmVtb3ZlKGQpO3JldHVybiBmW2hbbF1dLnJlbW92ZShkLGIpfWlmKGcpe2ZvcihrPTA7azxnLmxlbmd0aDtrKyspe3ZhciBuPWdba107XG52YXIgbT1jO2w9bi5zcGxpdChcIjpcIik7Zm9yKHA9MDtwPGwubGVuZ3RoO3ArKyltPW1bbFtwXV07bT1cIkBcIittfWs9dGhpcy5HW25dO2s9a1ttXXx8KGtbbV09W10pfWw9dGhpcy5hLmZpZWxkO2ZvcihsZXQgdT0wLHE9bC5sZW5ndGg7dTxxO3UrKyl7bj1sW3VdO2c9Yztmb3IobT0wO208bi5sZW5ndGg7bSsrKWc9Z1tuW21dXTtuPWZbaFt1XV07bT1cImFkZFwiPT09YT9uLmFkZDpuLnVwZGF0ZTt1PT09cS0xP20uY2FsbChuLGQsZyxiKTptLmNhbGwobixkLGcpfWlmKGUpe2I9T2JqZWN0LmtleXMoZSk7YT1CKCk7Zm9yKGY9MDtmPGIubGVuZ3RoO2YrKylpZihoPWJbZl0sZVtoXSl7aD1oLnNwbGl0KFwiOlwiKTtsZXQgdSxxO2ZvcihsPTA7bDxoLmxlbmd0aDtsKyspZz1oW2xdLHU9KHV8fGMpW2ddLHE9KHF8fGEpW2ddPXV9Yz1hfWsmJihrW2subGVuZ3RoXT1jKTt0aGlzLmxbZF09Y31yZXR1cm4gdGhpc307dy5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGEsYyxiKXtpZih0aGlzLmEmJlxuRyhhKSlyZXR1cm4gdGhpcy5BKFwidXBkYXRlXCIsYSxjKTt0aGlzLmNbXCJAXCIrYV0mJkooYykmJih0aGlzLnJlbW92ZShhKSx0aGlzLmFkZChhLGMsYiwhMCkpO3JldHVybiB0aGlzfTt3LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSxjLGIpe2lmKHRoaXMuYSYmRyhhKSlyZXR1cm4gdGhpcy5BKFwicmVtb3ZlXCIsYSxjKTt2YXIgZD1cIkBcIithO2lmKHRoaXMuY1tkXSl7aWYodGhpcy5nKXJldHVybiB0aGlzLm1bdGhpcy5jW2RdXS5wb3N0TWVzc2FnZSh7cmVtb3ZlOiEwLGlkOmF9KSxkZWxldGUgdGhpcy5jW2RdLGMmJmMoKSx0aGlzO2lmKCFiKXtpZih0aGlzLmFzeW5jJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgaW1wb3J0U2NyaXB0cyl7bGV0IGU9dGhpcztkPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGYpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnJlbW92ZShhLG51bGwsITApO2U9bnVsbDtmKCl9KX0pO2lmKGMpZC50aGVuKGMpO2Vsc2UgcmV0dXJuIGQ7cmV0dXJuIHRoaXN9aWYoYylyZXR1cm4gdGhpcy5yZW1vdmUoYSxcbm51bGwsITApLGMoKSx0aGlzfWZvcihjPTA7Yzx0aGlzLmItKHRoaXMudGhyZXNob2xkfHwwKTtjKyspYmEodGhpcy5pW2NdLGEpO3RoaXMuZGVwdGgmJmJhKHRoaXMuaCxhKTtkZWxldGUgdGhpcy5jW2RdO3RoaXMuQj0hMX1yZXR1cm4gdGhpc307bGV0IE07dy5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKGEsYyxiLGQpe2lmKEcoYykpe2lmKEYoYykpZm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspY1tlXS5xdWVyeT1hO2Vsc2UgYy5xdWVyeT1hO2E9YztjPTFFM31lbHNlIGMmJk8oYyk/KGI9YyxjPTFFMyk6Y3x8MD09PWN8fChjPTFFMyk7aWYodGhpcy5nKXt0aGlzLkY9Yjt0aGlzLnU9MDt0aGlzLm89W107Zm9yKHZhciBmPTA7Zjx0aGlzLmc7ZisrKXRoaXMubVtmXS5wb3N0TWVzc2FnZSh7c2VhcmNoOiEwLGxpbWl0OmMsY29udGVudDphfSl9ZWxzZXt2YXIgaD1bXSxnPWE7aWYoRyhhKSYmIUYoYSkpe2J8fChiPWEuY2FsbGJhY2spJiYoZy5jYWxsYmFjaz1udWxsKTt2YXIgaz1cbmEuc29ydDt2YXIgbD1hLnBhZ2U7Yz1hLmxpbWl0O2Y9YS50aHJlc2hvbGQ7dmFyIHA9YS5zdWdnZXN0O2E9YS5xdWVyeX1pZih0aGlzLmEpe2Y9dGhpcy5hLmluZGV4O2NvbnN0IHk9Zy53aGVyZTt2YXIgbj1nLmJvb2x8fFwib3JcIixtPWcuZmllbGQ7bGV0IHQ9bjtsZXQgdix4O2lmKG0pRihtKXx8KG09W21dKTtlbHNlIGlmKEYoZykpe3ZhciB1PWc7bT1bXTt0PVtdO2Zvcih2YXIgcT0wO3E8Zy5sZW5ndGg7cSsrKWQ9Z1txXSxlPWQuYm9vbHx8bixtW3FdPWQuZmllbGQsdFtxXT1lLFwibm90XCI9PT1lP3Y9ITA6XCJhbmRcIj09PWUmJih4PSEwKX1lbHNlIG09dGhpcy5hLmtleXM7bj1tLmxlbmd0aDtmb3IocT0wO3E8bjtxKyspdSYmKGc9dVtxXSksbCYmIUooZykmJihnLnBhZ2U9bnVsbCxnLmxpbWl0PTApLGhbcV09ZlttW3FdXS5zZWFyY2goZywwKTtpZihiKXJldHVybiBiKFAuY2FsbCh0aGlzLGEsdCxoLGssYyxwLHksbCx4LHYpKTtpZih0aGlzLmFzeW5jKXtjb25zdCBJPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKEQpe1Byb21pc2UuYWxsKGgpLnRoZW4oZnVuY3Rpb24oRSl7RChQLmNhbGwoSSxcbmEsdCxFLGssYyxwLHksbCx4LHYpKX0pfSl9cmV0dXJuIFAuY2FsbCh0aGlzLGEsdCxoLGssYyxwLHksbCx4LHYpfWZ8fChmPXRoaXMudGhyZXNob2xkfHwwKTtpZighZCl7aWYodGhpcy5hc3luYyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGltcG9ydFNjcmlwdHMpe2xldCB5PXRoaXM7Zj1uZXcgUHJvbWlzZShmdW5jdGlvbih0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dCh5LnNlYXJjaChnLGMsbnVsbCwhMCkpO3k9bnVsbH0pfSk7aWYoYilmLnRoZW4oYik7ZWxzZSByZXR1cm4gZjtyZXR1cm4gdGhpc31pZihiKXJldHVybiBiKHRoaXMuc2VhcmNoKGcsYyxudWxsLCEwKSksdGhpc31pZighYXx8IUooYSkpcmV0dXJuIGg7Zz1hO2lmKHRoaXMuY2FjaGUpaWYodGhpcy5CKXtpZihiPXRoaXMuai5nZXQoYSkpcmV0dXJuIGJ9ZWxzZSB0aGlzLmouY2xlYXIoKSx0aGlzLkI9ITA7Zz10aGlzLmVuY29kZShnKTtpZighZy5sZW5ndGgpcmV0dXJuIGg7Yj10aGlzLmY7Yj1PKGIpP2IoZyk6Zy5zcGxpdCh0aGlzLnNwbGl0KTtcbnRoaXMuZmlsdGVyJiYoYj1XKGIsdGhpcy5maWx0ZXIpKTt1PWIubGVuZ3RoO2Q9ITA7ZT1bXTt2YXIgQT1CKCksej0wOzE8dSYmKHRoaXMuZGVwdGgmJlwic3RyaWN0XCI9PT10aGlzLmY/bj0hMDpiLnNvcnQocWEpKTtpZighbnx8KHE9dGhpcy5oKSl7Y29uc3QgeT10aGlzLmI7Zm9yKDt6PHU7eisrKXtsZXQgdD1iW3pdO2lmKHQpe2lmKG4pe2lmKCFtKWlmKHFbdF0pbT10LEFbdF09MTtlbHNlIGlmKCFwKXJldHVybiBoO2lmKHAmJno9PT11LTEmJiFlLmxlbmd0aCluPSExLHQ9bXx8dCxBW3RdPTA7ZWxzZSBpZighbSljb250aW51ZX1pZighQVt0XSl7Y29uc3Qgdj1bXTtsZXQgeD0hMSxJPTA7Y29uc3QgRD1uP3FbbV06dGhpcy5pO2lmKEQpe2xldCBFO2ZvcihsZXQgTj0wO048eS1mO04rKylpZihFPURbTl0mJkRbTl1bdF0pdltJKytdPUUseD0hMH1pZih4KW09dCxlW2UubGVuZ3RoXT0xPEk/di5jb25jYXQuYXBwbHkoW10sdik6dlswXTtlbHNlIGlmKCFwKXtkPSExO2JyZWFrfUFbdF09XG4xfX19fWVsc2UgZD0hMTtkJiYoaD1oYShlLGMsbCxwKSk7dGhpcy5jYWNoZSYmdGhpcy5qLnNldChhLGgpO3JldHVybiBofX07dy5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLndoZXJlKGEsYywxKVswXXx8bnVsbH07dy5wcm90b3R5cGUud2hlcmU9ZnVuY3Rpb24oYSxjLGIsZCl7Y29uc3QgZT10aGlzLmwsZj1bXTtsZXQgaD0wO2xldCBnO3ZhciBrO2xldCBsO2lmKEcoYSkpe2J8fChiPWMpO3ZhciBwPU9iamVjdC5rZXlzKGEpO3ZhciBuPXAubGVuZ3RoO2c9ITE7aWYoMT09PW4mJlwiaWRcIj09PXBbMF0pcmV0dXJuW2VbYS5pZF1dO2lmKChrPXRoaXMuSSkmJiFkKWZvcih2YXIgbT0wO208ay5sZW5ndGg7bSsrKXt2YXIgdT1rW21dLHE9YVt1XTtpZighQyhxKSl7bD10aGlzLkdbdV1bXCJAXCIrcV07aWYoMD09PS0tbilyZXR1cm4gbDtwLnNwbGljZShwLmluZGV4T2YodSksMSk7ZGVsZXRlIGFbdV07YnJlYWt9fWs9QXJyYXkobik7Zm9yKG09MDttPG47bSsrKWtbbV09XG5wW21dLnNwbGl0KFwiOlwiKX1lbHNle2lmKE8oYSkpe2M9ZHx8T2JqZWN0LmtleXMoZSk7Yj1jLmxlbmd0aDtmb3IocD0wO3A8YjtwKyspbj1lW2NbcF1dLGEobikmJihmW2grK109bik7cmV0dXJuIGZ9aWYoQyhjKSlyZXR1cm5bZVthXV07aWYoXCJpZFwiPT09YSlyZXR1cm5bZVtjXV07cD1bYV07bj0xO2s9W2Euc3BsaXQoXCI6XCIpXTtnPSEwfWQ9bHx8ZHx8T2JqZWN0LmtleXMoZSk7bT1kLmxlbmd0aDtmb3IodT0wO3U8bTt1Kyspe3E9bD9kW3VdOmVbZFt1XV07bGV0IEE9ITA7Zm9yKGxldCB6PTA7ejxuO3orKyl7Z3x8KGM9YVtwW3pdXSk7Y29uc3QgeT1rW3pdLHQ9eS5sZW5ndGg7bGV0IHY9cTtpZigxPHQpZm9yKGxldCB4PTA7eDx0O3grKyl2PXZbeVt4XV07ZWxzZSB2PXZbeVswXV07aWYodiE9PWMpe0E9ITE7YnJlYWt9fWlmKEEmJihmW2grK109cSxiJiZoPT09YikpYnJlYWt9cmV0dXJuIGZ9O3cucHJvdG90eXBlLmluZm89ZnVuY3Rpb24oKXtpZih0aGlzLmcpZm9yKGxldCBhPTA7YTxcbnRoaXMuZzthKyspdGhpcy5tW2FdLnBvc3RNZXNzYWdlKHtpbmZvOiEwLGlkOnRoaXMuaWR9KTtlbHNlIHJldHVybntpZDp0aGlzLmlkLGl0ZW1zOnRoaXMubGVuZ3RoLGNhY2hlOnRoaXMuY2FjaGUmJnRoaXMuY2FjaGUucz90aGlzLmNhY2hlLnMubGVuZ3RoOiExLG1hdGNoZXI6YWEubGVuZ3RoKyh0aGlzLnY/dGhpcy52Lmxlbmd0aDowKSx3b3JrZXI6dGhpcy5nLHRocmVzaG9sZDp0aGlzLnRocmVzaG9sZCxkZXB0aDp0aGlzLmRlcHRoLHJlc29sdXRpb246dGhpcy5iLGNvbnRleHR1YWw6dGhpcy5kZXB0aCYmXCJzdHJpY3RcIj09PXRoaXMuZn19O3cucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGVzdHJveSgpLmluaXQoKX07dy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuY2FjaGUmJih0aGlzLmouY2xlYXIoKSx0aGlzLmo9bnVsbCk7dGhpcy5pPXRoaXMuaD10aGlzLmM9bnVsbDtpZih0aGlzLmEpe2NvbnN0IGE9dGhpcy5hLmtleXM7Zm9yKGxldCBjPVxuMDtjPGEubGVuZ3RoO2MrKyl0aGlzLmEuaW5kZXhbYVtjXV0uZGVzdHJveSgpO3RoaXMuYT10aGlzLmw9bnVsbH1yZXR1cm4gdGhpc307dy5wcm90b3R5cGUuZXhwb3J0PWZ1bmN0aW9uKGEpe2NvbnN0IGM9IWF8fEMoYS5zZXJpYWxpemUpfHxhLnNlcmlhbGl6ZTtpZih0aGlzLmEpe2NvbnN0IGQ9IWF8fEMoYS5kb2MpfHxhLmRvYzt2YXIgYj0hYXx8QyhhLmluZGV4KXx8YS5pbmRleDthPVtdO2xldCBlPTA7aWYoYilmb3IoYj10aGlzLmEua2V5cztlPGIubGVuZ3RoO2UrKyl7Y29uc3QgZj10aGlzLmEuaW5kZXhbYltlXV07YVtlXT1bZi5pLGYuaCxPYmplY3Qua2V5cyhmLmMpXX1kJiYoYVtlXT10aGlzLmwpfWVsc2UgYT1bdGhpcy5pLHRoaXMuaCxPYmplY3Qua2V5cyh0aGlzLmMpXTtjJiYoYT1KU09OLnN0cmluZ2lmeShhKSk7cmV0dXJuIGF9O3cucHJvdG90eXBlLmltcG9ydD1mdW5jdGlvbihhLGMpe2lmKCFjfHxDKGMuc2VyaWFsaXplKXx8Yy5zZXJpYWxpemUpYT1KU09OLnBhcnNlKGEpO1xuY29uc3QgYj1CKCk7aWYodGhpcy5hKXt2YXIgZD0hY3x8QyhjLmRvYyl8fGMuZG9jLGU9MDtpZighY3x8QyhjLmluZGV4KXx8Yy5pbmRleCl7Yz10aGlzLmEua2V5cztjb25zdCBoPWMubGVuZ3RoO2Zvcih2YXIgZj1hWzBdWzJdO2U8Zi5sZW5ndGg7ZSsrKWJbZltlXV09MTtmb3IoZT0wO2U8aDtlKyspe2Y9dGhpcy5hLmluZGV4W2NbZV1dO2NvbnN0IGc9YVtlXTtnJiYoZi5pPWdbMF0sZi5oPWdbMV0sZi5jPWIpfX1kJiYodGhpcy5sPUcoZCk/ZDphW2VdKX1lbHNle2Q9YVsyXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKWJbZFtlXV09MTt0aGlzLmk9YVswXTt0aGlzLmg9YVsxXTt0aGlzLmM9Yn19O2NvbnN0IHZhPWZ1bmN0aW9uKCl7Y29uc3QgYT1yKFwiXFxcXHMrXCIpLGM9cihcIlteYS16MC05IF1cIiksYj1bcihcIlstL11cIiksXCIgXCIsYyxcIlwiLGEsXCIgXCJdO3JldHVybiBmdW5jdGlvbihkKXtyZXR1cm4gY2EoUShkLnRvTG93ZXJDYXNlKCksYikpfX0oKSxVPXtpY2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS50b0xvd2VyQ2FzZSgpfSxcbnNpbXBsZTpmdW5jdGlvbigpe2NvbnN0IGE9cihcIlxcXFxzK1wiKSxjPXIoXCJbXmEtejAtOSBdXCIpLGI9cihcIlstL11cIiksZD1yKFwiW1xcdTAwZTBcXHUwMGUxXFx1MDBlMlxcdTAwZTNcXHUwMGU0XFx1MDBlNV1cIiksZT1yKFwiW1xcdTAwZThcXHUwMGU5XFx1MDBlYVxcdTAwZWJdXCIpLGY9cihcIltcXHUwMGVjXFx1MDBlZFxcdTAwZWVcXHUwMGVmXVwiKSxoPXIoXCJbXFx1MDBmMlxcdTAwZjNcXHUwMGY0XFx1MDBmNVxcdTAwZjZcXHUwMTUxXVwiKSxnPXIoXCJbXFx1MDBmOVxcdTAwZmFcXHUwMGZiXFx1MDBmY1xcdTAxNzFdXCIpLGs9cihcIltcXHUwMGZkXFx1MDE3N1xcdTAwZmZdXCIpLGw9cihcIlxcdTAwZjFcIikscD1yKFwiW1xcdTAwZTdjXVwiKSxuPXIoXCJcXHUwMGRmXCIpLG09cihcIiAmIFwiKSx1PVtkLFwiYVwiLGUsXCJlXCIsZixcImlcIixoLFwib1wiLGcsXCJ1XCIsayxcInlcIixsLFwiblwiLHAsXCJrXCIsbixcInNcIixtLFwiIGFuZCBcIixiLFwiIFwiLGMsXCJcIixhLFwiIFwiXTtyZXR1cm4gZnVuY3Rpb24ocSl7cT1RKHEudG9Mb3dlckNhc2UoKSx1KTtyZXR1cm5cIiBcIj09PXE/XCJcIjpxfX0oKSxhZHZhbmNlZDpmdW5jdGlvbigpe2NvbnN0IGE9XG5yKFwiYWVcIiksYz1yKFwiYWlcIiksYj1yKFwiYXlcIiksZD1yKFwiZXlcIiksZT1yKFwib2VcIiksZj1yKFwidWVcIiksaD1yKFwiaWVcIiksZz1yKFwic3pcIiksaz1yKFwienNcIiksbD1yKFwiY2tcIikscD1yKFwiY2NcIiksbj1yKFwic2hcIiksbT1yKFwidGhcIiksdT1yKFwiZHRcIikscT1yKFwicGhcIiksQT1yKFwicGZcIiksej1yKFwib3VcIikseT1yKFwidW9cIiksdD1bYSxcImFcIixjLFwiZWlcIixiLFwiZWlcIixkLFwiZWlcIixlLFwib1wiLGYsXCJ1XCIsaCxcImlcIixnLFwic1wiLGssXCJzXCIsbixcInNcIixsLFwia1wiLHAsXCJrXCIsbSxcInRcIix1LFwidFwiLHEsXCJmXCIsQSxcImZcIix6LFwib1wiLHksXCJ1XCJdO3JldHVybiBmdW5jdGlvbih2LHgpe2lmKCF2KXJldHVybiB2O3Y9dGhpcy5zaW1wbGUodik7Mjx2Lmxlbmd0aCYmKHY9USh2LHQpKTt4fHwxPHYubGVuZ3RoJiYodj1jYSh2KSk7cmV0dXJuIHZ9fSgpLGV4dHJhOmZ1bmN0aW9uKCl7Y29uc3QgYT1yKFwicFwiKSxjPXIoXCJ6XCIpLGI9cihcIltjZ3FdXCIpLGQ9cihcIm5cIiksZT1yKFwiZFwiKSxmPXIoXCJbdnddXCIpLGg9cihcIlthZWlvdXldXCIpLFxuZz1bYSxcImJcIixjLFwic1wiLGIsXCJrXCIsZCxcIm1cIixlLFwidFwiLGYsXCJmXCIsaCxcIlwiXTtyZXR1cm4gZnVuY3Rpb24oayl7aWYoIWspcmV0dXJuIGs7az10aGlzLmFkdmFuY2VkKGssITApO2lmKDE8ay5sZW5ndGgpe2s9ay5zcGxpdChcIiBcIik7Zm9yKGxldCBsPTA7bDxrLmxlbmd0aDtsKyspe2NvbnN0IHA9a1tsXTsxPHAubGVuZ3RoJiYoa1tsXT1wWzBdK1EocC5zdWJzdHJpbmcoMSksZykpfWs9ay5qb2luKFwiIFwiKTtrPWNhKGspfXJldHVybiBrfX0oKSxiYWxhbmNlOnZhfSx1YT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYyl7dGhpcy5jbGVhcigpO3RoaXMuSD0hMCE9PWMmJmN9YS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPUIoKTt0aGlzLmNvdW50PUIoKTt0aGlzLmluZGV4PUIoKTt0aGlzLnM9W119O2EucHJvdG90eXBlLnNldD1mdW5jdGlvbihjLGIpe2lmKHRoaXMuSCYmQyh0aGlzLmNhY2hlW2NdKSl7bGV0IGQ9dGhpcy5zLmxlbmd0aDtpZihkPT09dGhpcy5IKXtkLS07XG5jb25zdCBlPXRoaXMuc1tkXTtkZWxldGUgdGhpcy5jYWNoZVtlXTtkZWxldGUgdGhpcy5jb3VudFtlXTtkZWxldGUgdGhpcy5pbmRleFtlXX10aGlzLmluZGV4W2NdPWQ7dGhpcy5zW2RdPWM7dGhpcy5jb3VudFtjXT0tMTt0aGlzLmNhY2hlW2NdPWI7dGhpcy5nZXQoYyl9ZWxzZSB0aGlzLmNhY2hlW2NdPWJ9O2EucHJvdG90eXBlLmdldD1mdW5jdGlvbihjKXtjb25zdCBiPXRoaXMuY2FjaGVbY107aWYodGhpcy5IJiZiKXt2YXIgZD0rK3RoaXMuY291bnRbY107Y29uc3QgZj10aGlzLmluZGV4O2xldCBoPWZbY107aWYoMDxoKXtjb25zdCBnPXRoaXMucztmb3IodmFyIGU9aDt0aGlzLmNvdW50W2dbLS1oXV08PWQmJi0xIT09aDspO2grKztpZihoIT09ZSl7Zm9yKGQ9ZTtkPmg7ZC0tKWU9Z1tkLTFdLGdbZF09ZSxmW2VdPWQ7Z1toXT1jO2ZbY109aH19fXJldHVybiBifTtyZXR1cm4gYX0oKTtyZXR1cm4gd30oZnVuY3Rpb24oKXtjb25zdCBLPXt9LFI9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBCbG9iJiZcblwidW5kZWZpbmVkXCIhPT10eXBlb2YgVVJMJiZVUkwuY3JlYXRlT2JqZWN0VVJMO3JldHVybiBmdW5jdGlvbih3LEwsUyxXLFApe1M9Uj9VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcIihcIitTLnRvU3RyaW5nKCkrXCIpKClcIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKTp3K1wiLm1pbi5qc1wiO3crPVwiLVwiK0w7S1t3XXx8KEtbd109W10pO0tbd11bUF09bmV3IFdvcmtlcihTKTtLW3ddW1BdLm9ubWVzc2FnZT1XO3JldHVybiBLW3ddW1BdfX0oKSksdGhpcyk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9kb21haW4vbW9kZWwnO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlcyc7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XHJcbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlNlYXJjaFJlcXVlc3Q6XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBtb2RlbC5vblNlYXJjaFJlcXVlc3QobXNnLnRleHQsIG1zZy5pbmRleE9uU2VhcmNoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLk5hdmlnYXRlVG9Ob2RlOlxyXG4gICAgICAgICAgICAgICAgeWllbGQgbW9kZWwub25OYXZUb05vZGVSZXF1ZXN0KG1zZy5pZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5SZWluZGV4U3RhcnQ6XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBtb2RlbC5vblJlaW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGdldE5vZGVQYWdlLCB0ZXh0RnJvbU5vZGUgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgeyBJbmRleFN0b3JhZ2UgfSBmcm9tICcuL3NlYXJjaCc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3BvbnNlLCBuZXdTZWFyY2hSZXNwb25zZU1lc3NhZ2UsIG5ld1NlYXJjaFJlaW5kZXhGaW5pc2hNZXNzYWdlLCBuZXdOb0luZGV4TWVzc2FnZSwgbmV3Tm9kZU5vdEZvdW5kIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlcyc7XHJcbmV4cG9ydCBjbGFzcyBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgSW5kZXhTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgICBvbk5hdlRvTm9kZVJlcXVlc3QoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG5ld05vZGVOb3RGb3VuZChpZCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBnZXROb2RlUGFnZShub2RlKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2UgIT09IGZpZ21hLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW25vZGVdO1xyXG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW25vZGVdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uU2VhcmNoUmVxdWVzdCh0ZXh0LCBpbmRleE9uU2VhcmNoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRJRCA9IHRoaXMuZ2V0Q3VycmVudERvY3VtZW50SUQoKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4T25TZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3RvcmFnZS5yZWluZGV4KGRvY3VtZW50SUQsIGZpZ21hLnJvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geWllbGQgdGhpcy5zdG9yYWdlLmdldEluZGV4KGRvY3VtZW50SUQpO1xyXG4gICAgICAgICAgICBpZiAoIWluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShuZXdOb0luZGV4TWVzc2FnZSgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBub2RlSURzID0gaW5kZXguc2VhcmNoKHRleHQudG9Mb3dlckNhc2UoKSwgMTAwKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlSURzLm1hcChpZCA9PiBmaWdtYS5nZXROb2RlQnlJZChpZCkpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gbm9kZXMubWFwKG5vZGUgPT4gbmV3IFNlYXJjaFJlc3BvbnNlKG5vZGUuaWQsIHRleHRGcm9tTm9kZShub2RlKSkpO1xyXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShuZXdTZWFyY2hSZXNwb25zZU1lc3NhZ2Uoc2VhcmNoUmVzdWx0cykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25SZWluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50SUQgPSB0aGlzLmdldEN1cnJlbnREb2N1bWVudElEKCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuc3RvcmFnZS5yZWluZGV4KGRvY3VtZW50SUQsIGZpZ21hLnJvb3QpO1xyXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShuZXdTZWFyY2hSZWluZGV4RmluaXNoTWVzc2FnZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnREb2N1bWVudElEKCkge1xyXG4gICAgICAgIHJldHVybiBmaWdtYS5jdXJyZW50UGFnZS5wYXJlbnQuaWQ7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyB0ZXh0RnJvbU5vZGUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmNvbnN0IEZsZXhTZWFyY2ggPSByZXF1aXJlKCdmbGV4c2VhcmNoJyk7XHJcbmV4cG9ydCBjbGFzcyBJbmRleFN0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXRJbmRleChkb2N1bWVudElEKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4VmFsdWUgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKGRvY3VtZW50SUQpO1xyXG4gICAgICAgICAgICBpZiAoIWluZGV4VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNhc3RlZEluZGV4VmFsdWUgPSBpbmRleFZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMubWFrZUluZGV4KCk7XHJcbiAgICAgICAgICAgIC8vIGkgY2FuIG5vdCB1c2UgaW1wb3J0IG1ldGhvZCBkaXJlY3RseSBjb3ogaXQgY3Jhc2hlcyBmaWdtYVxyXG4gICAgICAgICAgICBuZXdJbmRleFsnaW1wb3J0J10oY2FzdGVkSW5kZXhWYWx1ZS5pbmRleER1bXApO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gbmV3IFNlYXJjaEluZGV4SW1wbChuZXdJbmRleCwgY2FzdGVkSW5kZXhWYWx1ZS51cGRhdGVUaW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWluZGV4KGRvY3VtZW50SUQsIHJvb3QpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYnVpbGRJbmRleChyb290KTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhEdW1wID0gaW5kZXguZXhwb3J0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKGRvY3VtZW50SUQsIG5ldyBJbmRleFZhbHVlKGluZGV4RHVtcCwgdXBkYXRlZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gbmV3IFNlYXJjaEluZGV4SW1wbChpbmRleCwgdXBkYXRlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBidWlsZEluZGV4KHJvb3QpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubWFrZUluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhhYmxlVHlwZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgaW5kZXhhYmxlVHlwZXMuYWRkKFwiVEVYVFwiKTtcclxuICAgICAgICBpbmRleGFibGVUeXBlcy5hZGQoXCJDT01QT05FTlRcIik7XHJcbiAgICAgICAgaW5kZXhhYmxlVHlwZXMuYWRkKFwiR1JPVVBcIik7XHJcbiAgICAgICAgaW5kZXhhYmxlVHlwZXMuYWRkKFwiRlJBTUVcIik7XHJcbiAgICAgICAgY29uc3QgdGV4dE5vZGVzID0gcm9vdC5maW5kQWxsKG5vZGUgPT4gaW5kZXhhYmxlVHlwZXMuaGFzKG5vZGUudHlwZSkpO1xyXG4gICAgICAgIHRleHROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpbmRleC5hZGQobm9kZS5pZCwgdGV4dEZyb21Ob2RlKG5vZGUpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuICAgIG1ha2VJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsZXhTZWFyY2goe1xyXG4gICAgICAgICAgICBlbmNvZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGxpdDogL1xccysvLFxyXG4gICAgICAgICAgICB0b2tlbml6ZTogXCJmb3J3YXJkXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgSW5kZXhWYWx1ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkdW1wLCB1cGRhdGVkKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleER1bXAgPSBkdW1wO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZSA9IHVwZGF0ZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEluZGV4SW1wbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihmbGV4U2VhcmNoSW5kZXgsIHVwZGF0ZWQpIHtcclxuICAgICAgICB0aGlzLmZsZXhTZWFyY2hJbmRleCA9IGZsZXhTZWFyY2hJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWQgPSB1cGRhdGVkO1xyXG4gICAgfVxyXG4gICAgYWRkKGlkLCB0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5mbGV4U2VhcmNoSW5kZXgudXBkYXRlKGlkLCB0ZXh0KTtcclxuICAgIH1cclxuICAgIHNlYXJjaCh0ZXh0LCBsaW1pdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZsZXhTZWFyY2hJbmRleC5zZWFyY2godGV4dCwgbGltaXQpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgICAgdGhpcy5mbGV4U2VhcmNoSW5kZXgucmVtb3ZlKGlkKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVBhZ2Uobm9kZSkge1xyXG4gICAgbGV0IHBhcmVudCA9IG5vZGU7XHJcbiAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnUEFHRScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0RnJvbU5vZGUobm9kZSkge1xyXG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiVEVYVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jaGFyYWN0ZXJzO1xyXG4gICAgICAgIGNhc2UgXCJDT01QT05FTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgY2FzZSBcIkdST1VQXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm5hbWU7XHJcbiAgICAgICAgY2FzZSBcIkZSQU1FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBNZXNzYWdlVHlwZTtcclxuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgTWVzc2FnZVR5cGVbXCJTZWFyY2hSZXF1ZXN0XCJdID0gXCJzZWFyY2hfcmVxdWVzdFwiO1xyXG4gICAgTWVzc2FnZVR5cGVbXCJTZWFyY2hSZXNwb25zZVwiXSA9IFwic2VhcmNoX3Jlc3BvbnNlXCI7XHJcbiAgICBNZXNzYWdlVHlwZVtcIlJlaW5kZXhTdGFydFwiXSA9IFwicmVpbmRleFN0YXJ0XCI7XHJcbiAgICBNZXNzYWdlVHlwZVtcIlJlaW5kZXhGaW5pc2hcIl0gPSBcInJlaW5kZXhGaW5pc2hcIjtcclxuICAgIE1lc3NhZ2VUeXBlW1wiTmF2aWdhdGVUb05vZGVcIl0gPSBcIm5hdmlnYXRlX3RvX25vZGVcIjtcclxuICAgIE1lc3NhZ2VUeXBlW1wiVXBkYXRlTW9kZWxTZXR0aW5nc1wiXSA9IFwidXBkYXRlX21vZGVsX3NldHRpbmdzXCI7XHJcbiAgICBNZXNzYWdlVHlwZVtcIk5vU2VhcmNoSW5kZXhcIl0gPSBcIm5vU2VhcmNoSW5kZXhcIjtcclxuICAgIE1lc3NhZ2VUeXBlW1wiTm9kZU5vdEZvdW5kXCJdID0gXCJub2RlTm90Rm91bmRcIjtcclxufSkoTWVzc2FnZVR5cGUgfHwgKE1lc3NhZ2VUeXBlID0ge30pKTtcclxuZXhwb3J0IGZ1bmN0aW9uIG5ld1NlYXJjaFJlc3BvbnNlTWVzc2FnZShyZXNwb25zZXMpIHtcclxuICAgIHJldHVybiBuZXcgUGx1Z2luTWVzc2FnZShNZXNzYWdlVHlwZS5TZWFyY2hSZXNwb25zZSwgcmVzcG9uc2VzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbmV3Tm9kZU5vdEZvdW5kKGlkKSB7XHJcbiAgICByZXR1cm4gbmV3IFBsdWdpbk1lc3NhZ2UoTWVzc2FnZVR5cGUuTm9kZU5vdEZvdW5kLCBpZCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld05vSW5kZXhNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQbHVnaW5NZXNzYWdlKE1lc3NhZ2VUeXBlLk5vU2VhcmNoSW5kZXgsIG51bGwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdTZWFyY2hSZWluZGV4RmluaXNoTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiBuZXcgUGx1Z2luTWVzc2FnZShNZXNzYWdlVHlwZS5SZWluZGV4RmluaXNoLCBudWxsKTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGx1Z2luTWVzc2FnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGV4dCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=