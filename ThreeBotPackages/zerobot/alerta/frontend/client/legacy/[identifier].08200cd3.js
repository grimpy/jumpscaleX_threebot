import{a as n,b as t,c as i,d as r,i as e,s as a,e as f,S as o,D as u,p as c,A as s,K as m,z as p,l,Z as d,J as $,u as v,v as A,w as b,n as g,B as h,t as y,k as w,C as x}from"./index.30f4270e.js";import{a as j,b as k,_ as N}from"./index.b298cbae.js";import{b as S,S as z,A as B,l as C}from"./data.1c888ced.js";function D(n){var t,i=new z({});return{c:function(){v(i.$$.fragment)},l:function(n){A(i.$$.fragment,n)},m:function(n,r){b(i,n,r),t=!0},p:g,i:function(n){t||(p(i.$$.fragment,n),t=!0)},o:function(n){s(i.$$.fragment,n),t=!1},d:function(n){h(i,n)}}}function J(n){var t,i,r,e,a=[Z,K],f=[];function o(n,t){return n[0].identifier?0:1}return t=o(n),i=f[t]=a[t](n),{c:function(){i.c(),r=u()},l:function(n){i.l(n),r=u()},m:function(n,i){f[t].m(n,i),c(n,r,i),e=!0},p:function(n,e){var u=t;(t=o(n))===u?f[t].p(n,e):($(),s(f[u],1,1,function(){f[u]=null}),m(),(i=f[t])||(i=f[t]=a[t](n)).c(),p(i,1),i.m(r.parentNode,r))},i:function(n){e||(p(i),e=!0)},o:function(n){s(i),e=!1},d:function(n){f[t].d(n),n&&l(r)}}}function K(n){var t,i,r;return{c:function(){t=y("Alert of "),i=y(n[1]),r=y(" cannot be found")},l:function(e){t=w(e,"Alert of "),i=w(e,n[1]),r=w(e," cannot be found")},m:function(n,e){c(n,t,e),c(n,i,e),c(n,r,e)},p:function(n,t){2&t&&x(i,n[1])},i:g,o:g,d:function(n){n&&l(t),n&&l(i),n&&l(r)}}}function Z(n){var t,i=new B({props:{myAlert:n[0],levels:C}});return{c:function(){v(i.$$.fragment)},l:function(n){A(i.$$.fragment,n)},m:function(n,r){b(i,n,r),t=!0},p:function(n,t){var r={};1&t&&(r.myAlert=n[0]),i.$set(r)},i:function(n){t||(p(i.$$.fragment,n),t=!0)},o:function(n){s(i.$$.fragment,n),t=!1},d:function(n){h(i,n)}}}function _(n){var t,i,r,e,a=[J,D],f=[];function o(n,t){return n[0]?0:1}return t=o(n),i=f[t]=a[t](n),{c:function(){i.c(),r=u()},l:function(n){i.l(n),r=u()},m:function(n,i){f[t].m(n,i),c(n,r,i),e=!0},p:function(n,e){var u=N(e,1)[0],c=t;(t=o(n))===c?f[t].p(n,u):($(),s(f[c],1,1,function(){f[c]=null}),m(),(i=f[t])||(i=f[t]=a[t](n)).c(),p(i,1),i.m(r.parentNode,r))},i:function(n){e||(p(i),e=!0)},o:function(n){s(i),e=!1},d:function(n){f[t].d(n),n&&l(r)}}}function q(n,t){return E.apply(this,arguments)}function E(){return(E=j(k.mark(function n(t,i){var r;return k.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.params.identifier,n.abrupt("return",{identifier:r});case 2:case"end":return n.stop()}},n)}))).apply(this,arguments)}function F(n,t,i){var r=t.identifier,e=t.myAlert;return d(j(k.mark(function n(){return k.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:S(r).then(function(n){i(0,e=n.data)});case 1:case"end":return n.stop()}},n)}))),n.$set=function(n){"identifier"in n&&i(1,r=n.identifier),"myAlert"in n&&i(0,e=n.myAlert)},[e,r]}export default(function(u){function c(n){var o;return t(this,c),o=i(this,r(c).call(this)),e(f(o),n,F,_,a,{identifier:1,myAlert:0}),o}return n(c,o),c}());export{q as preload};