import{S as e,i as t,s as n,e as r,t as o,a,b as s,f as i,g as c,d as u,c as f,h as l,j as p,k as d,m as h,A as m,n as y,B as g,u as v,q as w,v as b,w as E,x,y as j,z as S,C,D as R}from"./client.d9de6612.js";import{C as N}from"./hello.f73a96ac.js";var A=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},T=Object.prototype.toString;function $(e){return"[object Array]"===T.call(e)}function O(e){return void 0===e}function B(e){return null!==e&&"object"==typeof e}function P(e){return"[object Function]"===T.call(e)}function U(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),$(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var L={isArray:$,isArrayBuffer:function(e){return"[object ArrayBuffer]"===T.call(e)},isBuffer:function(e){return null!==e&&!O(e)&&null!==e.constructor&&!O(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:B,isUndefined:O,isDate:function(e){return"[object Date]"===T.call(e)},isFile:function(e){return"[object File]"===T.call(e)},isBlob:function(e){return"[object Blob]"===T.call(e)},isFunction:P,isStream:function(e){return B(e)&&P(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:U,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)U(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)U(arguments[r],n);return t},extend:function(e,t,n){return U(t,(function(t,r){e[r]=n&&"function"==typeof t?A(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};function q(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var D=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(L.isURLSearchParams(t))r=t.toString();else{var o=[];L.forEach(t,(function(e,t){null!=e&&(L.isArray(e)?t+="[]":e=[e],L.forEach(e,(function(e){L.isDate(e)?e=e.toISOString():L.isObject(e)&&(e=JSON.stringify(e)),o.push(q(t)+"="+q(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function k(){this.handlers=[]}k.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},k.prototype.forEach=function(e){L.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var F=k,I=function(e,t,n){return L.forEach(n,(function(n){e=n(e,t)})),e},_=function(e){return!(!e||!e.__CANCEL__)},z=function(e,t){L.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},H=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},M=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],V=L.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=L.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},X=L.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),L.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),L.isString(r)&&s.push("path="+r),L.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},J=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;L.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password||"";o.Authorization="Basic "+btoa(s+":"+i)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(a.open(e.method.toUpperCase(),D(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r,o,s,i,c,u="getAllResponseHeaders"in a?(r=a.getAllResponseHeaders(),c={},r?(L.forEach(r.split("\n"),(function(e){if(i=e.indexOf(":"),o=L.trim(e.substr(0,i)).toLowerCase(),s=L.trim(e.substr(i+1)),o){if(c[o]&&M.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:u,config:e,request:a};!function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(H("Request failed with status code "+n.status,n.config,null,n.request,n))}(t,n,f),a=null}},a.onabort=function(){a&&(n(H("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(H("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(H(t,e,"ECONNABORTED",a)),a=null},L.isStandardBrowserEnv()){var l=X,p=(e.withCredentials||V(f))&&e.xsrfCookieName?l.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}if("setRequestHeader"in a&&L.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),L.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),void 0===r&&(r=null),a.send(r)}))},K={"Content-Type":"application/x-www-form-urlencoded"};function G(e,t){!L.isUndefined(e)&&L.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Q,W={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Q=J),Q),transformRequest:[function(e,t){return z(t,"Accept"),z(t,"Content-Type"),L.isFormData(e)||L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)?e:L.isArrayBufferView(e)?e.buffer:L.isURLSearchParams(e)?(G(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):L.isObject(e)?(G(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};W.headers={common:{Accept:"application/json, text/plain, */*"}},L.forEach(["delete","get","head"],(function(e){W.headers[e]={}})),L.forEach(["post","put","patch"],(function(e){W.headers[e]=L.merge(K)}));var Y=W;function Z(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ee=function(e){return Z(e),e.headers=e.headers||{},e.data=I(e.data,e.headers,e.transformRequest),e.headers=L.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),L.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Y.adapter)(e).then((function(t){return Z(e),t.data=I(t.data,t.headers,e.transformResponse),t}),(function(t){return _(t)||(Z(e),t&&t.response&&(t.response.data=I(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},te=function(e,t){t=t||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];L.forEach(r,(function(e){void 0!==t[e]&&(n[e]=t[e])})),L.forEach(o,(function(r){L.isObject(t[r])?n[r]=L.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:L.isObject(e[r])?n[r]=L.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])})),L.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=r.concat(o).concat(a),i=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return L.forEach(i,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n};function ne(e){this.defaults=e,this.interceptors={request:new F,response:new F}}ne.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=te(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ee,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},ne.prototype.getUri=function(e){return e=te(this.defaults,e),D(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},L.forEach(["delete","get","head","options"],(function(e){ne.prototype[e]=function(t,n){return this.request(L.merge(n||{},{method:e,url:t}))}})),L.forEach(["post","put","patch"],(function(e){ne.prototype[e]=function(t,n,r){return this.request(L.merge(r||{},{method:e,url:t,data:n}))}}));var re=ne;function oe(e){this.message=e}oe.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},oe.prototype.__CANCEL__=!0;var ae=oe;function se(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new ae(e),t(n.reason))}))}se.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},se.source=function(){var e;return{token:new se((function(t){e=t})),cancel:e}};var ie=se;function ce(e){var t=new re(e),n=A(re.prototype.request,t);return L.extend(n,re.prototype,t),L.extend(n,t),n}var ue=ce(Y);ue.Axios=re,ue.create=function(e){return ce(te(ue.defaults,e))},ue.Cancel=ae,ue.CancelToken=ie,ue.isCancel=_,ue.all=function(e){return Promise.all(e)},ue.spread=function(e){return function(t){return e.apply(null,t)}};var fe=ue,le=ue;fe.default=le;var pe=fe;function de(e){let t,n,g,v,w,b,E,x,j,S,C,R,N,A;return{c(){t=r("form"),n=r("label"),g=o("Name"),v=o("\n  :\n  "),w=r("input"),b=a(),E=r("label"),x=o("Score"),j=o("\n  :\n  "),S=r("input"),C=a(),R=r("button"),N=o("Submit"),this.h()},l(e){t=s(e,"FORM",{});var r=i(t);n=s(r,"LABEL",{});var o=i(n);g=c(o,"Name"),o.forEach(u),v=c(r,"\n  :\n  "),w=s(r,"INPUT",{name:!0,type:!0}),b=f(r),E=s(r,"LABEL",{});var a=i(E);x=c(a,"Score"),a.forEach(u),j=c(r,"\n  :\n  "),S=s(r,"INPUT",{name:!0,type:!0}),C=f(r),R=s(r,"BUTTON",{type:!0,value:!0});var l=i(R);N=c(l,"Submit"),l.forEach(u),r.forEach(u),this.h()},h(){l(w,"name","name"),l(w,"type","text"),l(S,"name","score"),l(S,"type","number"),l(R,"type","submit"),R.value="submit"},m(r,o){p(r,t,o),d(t,n),d(n,g),d(t,v),d(t,w),d(t,b),d(t,E),d(E,x),d(t,j),d(t,S),d(t,C),d(t,R),d(R,N),A=h(t,"submit",m(e[0]))},p:y,i:y,o:y,d(e){e&&u(t),A()}}}function he(e){const t=g();let n=new N;return[function(e){console.log(e);const r={name:e.target[0].value,score:e.target[1].value};n.add_company(r).then(()=>{t("new_company",r)})}]}class me extends e{constructor(e){super(),t(this,e,he,de,n,{})}}function ye(e){let t;return{c(){t=r("div"),this.h()},l(e){t=s(e,"DIV",{id:!0}),i(t).forEach(u),this.h()},h(){l(t,"id","myDiv")},m(e,n){p(e,t,n)},p:y,i:y,o:y,d(e){e&&u(t)}}}function ge(e,t,n){let{data:r=[]}=t;return e.$set=e=>{"data"in e&&n(0,r=e.data)},e.$$.update=()=>{1&e.$$.dirty&&(console.log("data changed: ",r),r.length&&(console.log("plotting data: ",r),Plotly.newPlot("myDiv",r,{},{showSendToCloud:!0})))},[r]}class ve extends e{constructor(e){super(),t(this,e,ge,ye,n,{data:0})}}const{document:we}=R;function be(e){let t,n,h,m,y,g,C,R,N,A,T,$;const O=new ve({props:{data:e[0]}}),B=new me({});return B.$on("new_company",e[1]),{c(){t=r("meta"),n=r("script"),m=r("script"),g=a(),C=r("div"),R=r("h1"),N=o("Plotly Example"),A=a(),v(O.$$.fragment),T=a(),v(B.$$.fragment),this.h()},l(e){const r=w('[data-svelte="svelte-uz2x46"]',we.head);t=s(r,"META",{name:!0,content:!0}),n=s(r,"SCRIPT",{src:!0}),i(n).forEach(u),m=s(r,"SCRIPT",{src:!0}),i(m).forEach(u),r.forEach(u),g=f(e),C=s(e,"DIV",{});var o=i(C);R=s(o,"H1",{});var a=i(R);N=c(a,"Plotly Example"),a.forEach(u),o.forEach(u),A=f(e),b(O.$$.fragment,e),T=f(e),b(B.$$.fragment,e),this.h()},h(){we.title="Plotly",l(t,"name","description"),l(t,"content",""),n.src!==(h="https://cdn.plot.ly/plotly-latest.min.js")&&l(n,"src","https://cdn.plot.ly/plotly-latest.min.js"),m.src!==(y="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js")&&l(m,"src","https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js")},m(e,r){d(we.head,t),d(we.head,n),d(we.head,m),p(e,g,r),p(e,C,r),d(C,R),d(R,N),p(e,A,r),E(O,e,r),p(e,T,r),E(B,e,r),$=!0},p(e,[t]){const n={};1&t&&(n.data=e[0]),O.$set(n)},i(e){$||(x(O.$$.fragment,e),x(B.$$.fragment,e),$=!0)},o(e){j(O.$$.fragment,e),j(B.$$.fragment,e),$=!1},d(e){u(t),u(n),u(m),e&&u(g),e&&u(C),e&&u(A),S(O,e),e&&u(T),S(B,e)}}}function Ee(e,t,n){let{data:r}=t;return C(()=>{let e=document.createElement("script");e.src="https://cdn.plot.ly/plotly-latest.min.js",document.head.append(e),pe.get("/jumpscale/svelte/model/jumpscale.svelte.company.1").then(e=>{const t=e.data;n(0,r=[{x:t.map(e=>e.name),y:t.map(e=>e.score),type:"bar"}]),console.log("data ready to be plotted: ",r)})}),e.$set=e=>{"data"in e&&n(0,r=e.data)},e.$$.update=()=>{e.$$.dirty},[r,function(e){const t=e.detail;console.log("new company data was added",t),n(0,r=[{x:[...r[0].x,t.name],y:[...r[0].y,t.score],type:"bar"}])}]}export default class extends e{constructor(e){super(),t(this,e,Ee,be,n,{data:0})}}
