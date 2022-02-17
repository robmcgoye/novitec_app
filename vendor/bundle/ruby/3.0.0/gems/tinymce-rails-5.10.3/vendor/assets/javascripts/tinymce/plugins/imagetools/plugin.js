/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.10.3 (2022-02-09)
 */
!function(){"use strict";function c(e){var t=e;return{get:function(){return t},set:function(e){t=e}}}function h(e){return null!=e}function r(){}function i(e){return function(){return e}}function e(e){return e}function t(){return d}function s(e){return n=typeof(t=e),"array"==(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n);var t,n}var n,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=function(e){return typeof e===n},u=i(!(n="function")),l=i(!0),d={fold:function(e,t){return e()},isSome:u,isNone:l,getOr:e,getOrThunk:m,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:e,orThunk:m,map:t,each:r,bind:t,exists:u,forall:l,filter:function(){return d},toArray:function(){return[]},toString:i("none()")};function m(e){return e()}var g=function(n){function e(){return o}function t(e){return e(n)}var r=i(n),o={fold:function(e,t){return t(n)},isSome:l,isNone:u,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return g(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?o:d},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},p={some:g,none:t,from:function(e){return null==e?d:g(e)}},v={},y={exports:v};function w(e,t){return U(document.createElement("canvas"),e,t)}function b(e){var t=w(e.width,e.height);return R(t).drawImage(e,0,0),t}function _(u){return new I(function(e,t){function n(){o.removeEventListener("load",i),o.removeEventListener("error",a)}var r=URL.createObjectURL(u),o=new Image,i=function(){n(),e(o)},a=function(){n(),t("Unable to load data of type "+u.type+": "+r)};o.addEventListener("load",i),o.addEventListener("error",a),o.src=r,o.complete&&setTimeout(i,0)})}function E(e,r,o){return r=r||"image/png",a(HTMLCanvasElement.prototype.toBlob)?new I(function(t,n){e.toBlob(function(e){e?t(e):n()},r,o)}):j(e.toDataURL(r,o))}function T(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}function x(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r];if(t(i,r))return p.some(i);if(n(i,r))break}return p.none()}(e,t,u)}!function(){var e=this,t=function(){var e,t,n,r={exports:{}};function o(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e,t=1===n._state?r.onFulfilled:r.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void c(r.promise,e)}u(r.promise,e)}else(1===n._state?u:c)(r.promise,n._value)})):n._deferreds.push(r)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void s(t);if("function"==typeof n)return void l((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,s(t)}catch(e){c(t,e)}var r,o}function c(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}e=r,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=setTimeout,i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return a(this,new f(e,t,n)),n},i.all=function(e){var u=Array.prototype.slice.call(e);return new i(function(o,i){if(0===u.length)return o([]);for(var a=u.length,e=0;e<u.length;e++)!function t(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return r.call(e,function(e){t(n,e)},i),0}u[n]=e,0==--a&&o(u)}catch(e){i(e)}}(e,u[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},e.exports?e.exports=i:t.Promise||(t.Promise=i);var d=r.exports;return{boltExport:("undefined"!=typeof window?window:Function("return this;")()).Promise||d}};"object"==typeof v&&void 0!==y?y.exports=t():(e="undefined"!=typeof globalThis?globalThis:e||self).EphoxContactWrapper=t()}();var I=y.exports.boltExport,R=function(e){return e.getContext("2d")},U=function(e,t,n){return e.width=t,e.height=n,e},A=function(r){return new I(function(e,t){var n=new XMLHttpRequest;n.open("GET",r,!0),n.responseType="blob",n.onload=function(){200===this.status&&e(this.response)},n.onerror=function(){var e;t(0===this.status?((e=new Error("No access to download image")).code=18,e.name="SecurityError",e):new Error("Error "+this.status+" downloading image"))},n.send()})},j=function(h){return new I(function(e,t){!function(){var e=h.split(","),t=/data:([^;]+)/.exec(e[0]);if(!t)return p.none();for(var n=t[1],r=e[1],o=atob(r),i=o.length,a=Math.ceil(i/1024),u=new Array(a),c=0;c<a;++c){for(var s=1024*c,f=Math.min(1024+s,i),l=new Array(f-s),d=s,m=0;d<f;++m,++d)l[m]=o[d].charCodeAt(0);u[c]=new Uint8Array(l)}return p.some(new Blob(u,{type:n}))}().fold(function(){t("uri is not base64: "+h)},e)})},S=function(e){URL.revokeObjectURL(e.src)},M=_,P=Array.prototype.indexOf,O=Object.keys;function L(e,t,n){function r(t,n){return e.then(function(e){return e.toDataURL(t||"image/png",n)})}return{getType:i(t.type),toBlob:function(){return I.resolve(t)},toDataURL:i(n),toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(t,n){return e.then(function(e){return E(e,t,n)})},toAdjustedDataURL:r,toAdjustedBase64:function(e,t){return r(e,t).then(function(e){return e.split(",")[1]})},toCanvas:function(){return e.then(b)}}}function k(t,e){return E(t,e).then(function(e){return L(I.resolve(t),e,t.toDataURL())})}function C(e,t){void 0===t&&(t=2);var n=Math.pow(10,t),r=Math.round(e*n);return Math.ceil(r/n)}function F(t,n,r){return void 0===r&&(r=!1),new I(function(e){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&e({status:a.status,blob:a.response})},a.open("GET",t,!0),a.withCredentials=r,function(e){for(var t,n=O(e),r=0,o=n.length;r<o;r++){var i=n[r];t=e[i],a.setRequestHeader(i,t)}}(n),a.responseType="blob",a.send()})}function B(e){var t,n=(t=e,"ImageProxy HTTP error: "+x(J,function(e){return t===e.code}).fold(i("Unknown ImageProxy error"),function(e){return e.message}));return I.reject(n)}function N(t){return x(K,function(e){return e.type===t}).fold(i("Unknown service error"),function(e){return e.message})}function D(e){return"ImageProxy Service error: "+function(e){try{return p.some(JSON.parse(e))}catch(e){return p.none()}}(e).bind(function(e){return n=function(e,t){return h(e)?e[t]:void 0},r=e,T(["error","type"],function(e,t){r=n(r,e)}),t=r,p.from(t).map(N);var n,r,t}).getOr("Invalid JSON in service error message")}function H(e){return e<200||300<=e}function z(e,t){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":t};return F((r=t,o=-1===(n=e).indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)?n:n+o+"apiKey="+encodeURIComponent(r)),i).then(function(e){return H(e.status)?(t=e.status,"application/json"!==(null==(n=e.blob)?void 0:n.type)||400!==t&&403!==t&&404!==t&&500!==t?B(t):(r=n,new I(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(e){t(e)},n.readAsText(r)}).then(function(e){var t=D(e);return I.reject(t)}))):I.resolve(e.blob);var r,t,n})}function q(e,t,n){return void 0===n&&(n=!1),t?z(e,t):F(e,{},n).then(function(e){return H(e.status)?B(e.status):I.resolve(e.blob)})}function W(t){return n=t,new I(function(e){var t=new FileReader;t.onloadend=function(){e(t.result)},t.readAsDataURL(n)}).then(function(e){return L(_(t).then(function(e){S(e);var t=w(e.naturalWidth||e.width,e.naturalHeight||e.height);return R(t).drawImage(e,0,0),t}),t,e)});var n}!function(a){if(!s(a))throw new Error("cases must be an array");if(0===a.length)throw new Error("there must be at least one case");var u=[],n={};T(a,function(e,r){var t=O(e);if(1!==t.length)throw new Error("one and only one name per case");var i=t[0],o=e[i];if(void 0!==n[i])throw new Error("duplicate key detected:"+i);if("cata"===i)throw new Error("cannot have a case named cata (sorry)");if(!s(o))throw new Error("case arguments must be an array");u.push(i),n[i]=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=n.length;if(t!==o.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+o.length+" ("+o+"), got "+t);return{fold:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length!==a.length)throw new Error("Wrong number of arguments to fold. Expected "+a.length+", got "+e.length);return e[r].apply(null,n)},match:function(e){var o=O(e);if(u.length!==o.length)throw new Error("Wrong number of arguments to match. Expected: "+u.join(",")+"\nActual: "+o.join(","));if(!function(e){for(var t,n=0,r=e.length;n<r;++n)if(!0!==(t=e[n],function(e,t){return-1<P.call(e,t)}(o,t)))return;return 1}(u))throw new Error("Not all branches were specified when using match. Specified: "+o.join(", ")+"\nRequired: "+u.join(", "));return e[i].apply(null,n)},log:function(e){console.log(e,{constructors:u,constructor:i,params:n})}}}})}([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]);function $(e){if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}}var V=function(e,t,n){var r=(n<0?360+n:n)*Math.PI/180,o=e.width,i=e.height,a=Math.sin(r),u=Math.cos(r),c=C(Math.abs(o*u)+Math.abs(i*a)),s=C(Math.abs(o*a)+Math.abs(i*u)),f=w(c,s),l=R(f);return l.translate(c/2,s/2),l.rotate(r),l.drawImage(e,-o/2,-i/2),k(f,t)},G=function(e,t,n){var r=w(e.width,e.height),o=R(r);return"v"===n?(o.scale(1,-1),o.drawImage(e,0,-r.height)):(o.scale(-1,1),o.drawImage(e,-r.width,0)),k(r,t)},J=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],K=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],X={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return $(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return $(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return $(n)},fromDom:$,fromPoint:function(e,t,n){return p.from(e.dom.elementFromPoint(t,n)).map($)}};function Q(e){return e.getParam("imagetools_proxy")}function Y(e){function t(e){return/^[0-9\.]+px$/.test(e)}var n=e.style.width,r=e.style.height;return n||r?t(n)&&t(r)?{w:parseInt(n,10),h:parseInt(r,10)}:null:(n=e.width,r=e.height,n&&r?{w:parseInt(n,10),h:parseInt(r,10)}:null)}function Z(e){return{w:e.naturalWidth,h:e.naturalHeight}}function ee(e){return t=X.fromDom(e),n="img",r=function(r){return function(e){var t=r.dom;if(1!==t.nodeType)return!1;var n=t;if(void 0!==n.matches)return n.matches(e);if(void 0!==n.msMatchesSelector)return n.msMatchesSelector(e);if(void 0!==n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(void 0!==n.mozMatchesSelector)return n.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")}(n)},x(t.dom.childNodes,function(e){return r(X.fromDom(e))}).map(X.fromDom);var t,n,r}function te(e,t){return e.dom.is(t,"figure")}function ne(e,t){return e.dom.is(t,"img:not([data-mce-object],[data-mce-placeholder])")}function re(t,e){function n(e){return ne(t,e)&&(be(t,e)||_e(t,e)||h(Q(t)))}return te(t,e)?ee(e).bind(function(e){return n(e.dom)?p.some(e.dom):p.none()}):n(e)?p.some(e):p.none()}function oe(e,t){e.notificationManager.open({text:t,type:"error"})}function ie(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return null!==n&&te(e,n)?ee(n):ne(e,t)?p.some(X.fromDom(t)):p.none()}function ae(e,t,n){var r=t.match(/(?:\/|^)(([^\/\?]+)\.(?:[a-z0-9.]+))(?:\?|$)/i);return h(r)?e.dom.encode(r[n]):null}function ue(e,t){if(_e(e,t))return q(t.src,null,(n=t,-1!==f.inArray(e.getParam("imagetools_credentials_hosts",[],"string[]"),new ye(n.src).host)));var n,r;if(be(e,t))return(0===(r=t.src).indexOf("data:")?j:A)(r);var o=Q(e);return q(o+(-1===o.indexOf("?")?"?":"&")+"url="+encodeURIComponent(t.src),e.getParam("api_key",e.getParam("imagetools_api_key","","string"),"string"),!1)}function ce(e,t){var n,r,o=e.editorUpload.blobCache.getByUri(t.src);return o?ve.resolve(o.blob()):(n=e,r=t,p.from(n.getParam("imagetools_fetch_image",null,"function")).fold(function(){return ue(n,r)},function(e){return e(r)}))}function se(e){pe.clearTimeout(e.get())}function fe(u,c,s,f,l,d,m){return s.toBlob().then(function(e){var t,n,o,r=u.editorUpload.blobCache,i=d.src,a=c.type===e.type;return u.getParam("images_reuse_filename",!1,"boolean")&&(n=h(o=r.getByUri(i))?(i=o.uri(),t=o.name(),o.filename()):(t=ae(u,i,2),ae(u,i,1))),o=r.create({id:"imagetools"+we++,blob:e,base64:s.toBase64(),uri:i,name:t,filename:a?n:void 0}),r.add(o),u.undoManager.transact(function(){var r=function(){var e,t,n;u.$(d).off("load",r),u.nodeChanged(),f?u.editorUpload.uploadImagesAuto():(se(l),e=u,t=l,n=pe.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},e.getParam("images_upload_timeout",3e4,"number")),t.set(n))};u.$(d).on("load",r),m&&u.$(d).attr({width:m.w,height:m.h}),u.$(d).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})}function le(r,o,e,i){return function(){return ie(r).fold(function(){oe(r,"Could not find selected image")},function(n){return r._scanForImages().then(function(){return ce(r,n.dom)}).then(function(t){return W(t).then(e).then(function(e){return fe(r,t,e,!1,o,n.dom,i)})}).catch(function(e){oe(r,e)})})}}function de(t,n,r){return function(){var e=ie(t).map(function(e){var t=Y(e.dom);return t?{w:t.h,h:t.w}:null}).getOrNull();return le(t,n,function(e){return n=r,(t=e).toCanvas().then(function(e){return V(e,t.getType(),n)});var t,n},e)()}}function me(e,t,r){return function(){return le(e,t,function(e){return n=r,(t=e).toCanvas().then(function(e){return G(e,t.getType(),n)});var t,n})()}}function he(s,f){return function(){var n=ie(s),i=n.map(function(e){return Z(e.dom)});n.each(function(t){re(s,t.dom).each(function(e){ce(s,t.dom).then(function(e){var t={blob:e,url:URL.createObjectURL(e)};s.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:t}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(e){var o=e.getData().imagetools.blob;n.each(function(r){i.each(function(e){var t,n,a,u,c;t=s,n=f,a=r.dom,u=e,M(c=o).then(function(e){var t,n,r,o,i=Z(e);return u.w===i.w&&u.h===i.h||Y(a)&&(t=a,(n=i)&&(r=t.style.width,o=t.style.height,(r||o)&&(t.style.width=n.w+"px",t.style.height=n.h+"px",t.removeAttribute("data-mce-style")),r=t.width,o=t.height,(r||o)&&(t.setAttribute("width",String(n.w)),t.setAttribute("height",String(n.h))))),URL.revokeObjectURL(e.src),c}).then(W).then(function(e){return fe(t,c,e,!0,n,a)})})}),e.close()},onCancel:r,onAction:function(e,t){switch(t.name){case"save-state":t.value?e.enable("save"):e.disable("save");break;case"disable":e.disable("save"),e.disable("cancel");break;case"enable":e.enable("cancel")}}})})})})}}function ge(t){function n(e){return function(){return t.execCommand(e)}}function e(){return ie(t).exists(function(e){return re(t,e.dom).isSome()})}function r(t){function i(e){return t.setDisabled(!e)}return i(e()),o=o.concat([i]),function(){o=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e[n];o!==i&&t.push(o)}return t}(o)}}var o=[];t.on("NodeChange",function(){var t=e();T(o,function(e){return e(t)})}),t.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:n("mceImageRotateLeft"),onSetup:r}),t.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:n("mceImageRotateRight"),onSetup:r}),t.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:n("mceImageFlipVertical"),onSetup:r}),t.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:n("mceImageFlipHorizontal"),onSetup:r}),t.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:n("mceEditImage"),onSetup:r}),t.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:n("mceImage")}),t.ui.registry.addContextMenu("imagetools",{update:function(e){return re(t,e).map(function(e){return{text:"Edit image",icon:"edit-image",onAction:n("mceEditImage")}}).toArray()}})}"undefined"!=typeof window||Function("return this;")();var pe=tinymce.util.Tools.resolve("tinymce.util.Delay"),ve=tinymce.util.Tools.resolve("tinymce.util.Promise"),ye=tinymce.util.Tools.resolve("tinymce.util.URI"),we=0,be=function(e,t){var n=t.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new ye(n).host===e.documentBaseURI.host},_e=function(e,t){return-1!==f.inArray(e.getParam("imagetools_cors_hosts",[],"string[]"),new ye(t.src).host)};o.add("imagetools",function(e){var t,r,o,i,n=c(0),a=c(null),u=e;f.each({mceImageRotateLeft:de(u,n,-90),mceImageRotateRight:de(u,n,90),mceImageFlipVertical:me(u,n,"v"),mceImageFlipHorizontal:me(u,n,"h"),mceEditImage:he(u,n)},function(e,t){u.addCommand(t,e)}),ge(e),(t=e).ui.registry.addContextToolbar("imagetools",{items:t.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions"),predicate:function(e){return re(t,e).isSome()},position:"node",scope:"node"}),o=n,i=a,(r=e).on("NodeChange",function(e){var t=i.get(),n=re(r,e.element);t&&!n.exists(function(e){return t.src===e.src})&&(se(o),r.editorUpload.uploadImagesAuto(),i.set(null)),n.each(i.set)})})}();