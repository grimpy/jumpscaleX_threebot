import{J as t,K as n,_ as a,a as s,b as e,c as o,i as r,s as i,d as c,S as p,Z as u,v as l,w as f,x as m,q as g,t as h,h as d,p as b,X as v,n as $,A as P,B as k,C as x,F as j}from"./index.90b7e5dc.js";import{_,a as L}from"./app.7b9d4ac4.js";import{c as w,a as N}from"./_api.d12e6fcd.js";import"./showdown.71009486.js";import{L as y}from"./ListPagination.4cb5375c.js";import"./Tags.ba5b8bd6.js";import{P as q}from"./PostList.10dfcd6c.js";function C(t){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function B(t){var n,a,s=new q({props:{posts:t[10],username:t[3]}}),e=new y({props:{articlesCount:t[2],articlesPerPage:t[1].posts_per_page,objectPath:"/blog/"+t[3]+"/posts",page:t[4]}});return{c:function(){P(s.$$.fragment),n=l(),P(e.$$.fragment)},l:function(t){k(s.$$.fragment,t),n=m(t),k(e.$$.fragment,t)},m:function(t,o){x(s,t,o),g(t,n,o),x(e,t,o),a=!0},p:function(t,n){var a={};1&n&&(a.posts=t[10]),8&n&&(a.username=t[3]),s.$set(a);var o={};4&n&&(o.articlesCount=t[2]),2&n&&(o.articlesPerPage=t[1].posts_per_page),8&n&&(o.objectPath="/blog/"+t[3]+"/posts"),16&n&&(o.page=t[4]),e.$set(o)},i:function(t){a||(h(s.$$.fragment,t),h(e.$$.fragment,t),a=!0)},o:function(t){d(s.$$.fragment,t),d(e.$$.fragment,t),a=!1},d:function(t){j(s,t),t&&b(n),j(e,t)}}}function J(t){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function S(t){var n,a,s,e,o={ctx:t,current:null,token:null,pending:J,then:B,catch:C,value:10,blocks:[,,,]};return u(s=t[0],o),{c:function(){n=l(),a=f(),o.block.c(),this.h()},l:function(t){n=m(t),a=f(),o.block.l(t),this.h()},h:function(){document.title="Blog"},m:function(t,s){g(t,n,s),g(t,a,s),o.block.m(t,o.anchor=s),o.mount=function(){return a.parentNode},o.anchor=a,e=!0},p:function(n,a){var e=_(a,1)[0];if(t=n,o.ctx=t,1&e&&s!==(s=t[0])&&u(s,o));else{var r=t.slice();r[10]=o.resolved,o.block.p(r,e)}},i:function(t){e||(h(o.block),e=!0)},o:function(t){for(var n=0;n<3;n+=1){var a=o.blocks[n];d(a)}e=!1},d:function(t){t&&b(n),t&&b(a),o.block.d(t),o.token=null,o=null}}}function A(t){return F.apply(this,arguments)}function F(){return(F=t(n.mark(function t(a){var s,e,o,r,i,c,p,u,l,f,m;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.host,s=a.path,e=a.params,o=a.query,console.log("params in posts index",JSON.stringify(e)),(r=parseInt(o.page))||this.redirect(302,"".concat(e.theuser,"/posts?page=1")),t.next=6,N(e.theuser);case 6:return i=t.sent,r>0&&r--,console.log(i.length),c=i.length,t.next=12,w(e.theuser);case 12:return p=t.sent,u=p.posts_per_page||5,l=r*u,f=r*u+u,m=i.slice(l,f),t.abrupt("return",{path:s,posts:m,totalPostsLength:c,metadata:p});case 18:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function I(t,n,a){var s,e=n.posts,o=void 0===e?[]:e,r=n.metadata,i=n.totalPostsLength,c=n.path,p=L(),u=(p.preloading,p.page);p.session;v(t,u,function(t){return a(7,s=t)}),console.log("in posts index",s.params);var l=n.username,f=void 0===l?s.params.theuser:l,m=n.pageNum,g=void 0===m?s.query.page:m;return t.$set=function(t){"posts"in t&&a(0,o=t.posts),"metadata"in t&&a(1,r=t.metadata),"totalPostsLength"in t&&a(2,i=t.totalPostsLength),"path"in t&&a(6,c=t.path),"username"in t&&a(3,f=t.username),"pageNum"in t&&a(4,g=t.pageNum)},[o,r,i,f,g,u,c]}export default(function(t){function n(t){var a;return s(this,n),a=e(this,o(n).call(this)),r(c(a),t,I,S,i,{posts:0,metadata:1,totalPostsLength:2,path:6,username:3,pageNum:4}),a}return a(n,p),n}());export{A as preload};
