(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contacts-page"],{"0b2e":function(t,e,a){"use strict";var s=a("220a"),n=a.n(s);n.a},"220a":function(t,e,a){},5119:function(t,e,a){"use strict";var s=a("51dc"),n=a.n(s);n.a},"51dc":function(t,e,a){},"62ad":function(t,e,a){"use strict";a("4b85");var s=a("2b0e"),n=a("d9f7"),l=a("80d2");const o=["sm","md","lg","xl"],i=(()=>{return o.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),c=(()=>{return o.reduce((t,e)=>{return t["offset"+Object(l["s"])(e)]={type:[String,Number],default:null},t},{})})(),r=(()=>{return o.reduce((t,e)=>{return t["order"+Object(l["s"])(e)]={type:[String,Number],default:null},t},{})})(),f={col:Object.keys(i),offset:Object.keys(c),order:Object.keys(r)};function d(t,e,a){let s=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");s+=`-${a}`}return"col"!==t||""!==a&&!0!==a?(s+=`-${a}`,s.toLowerCase()):s.toLowerCase()}}const v=new Map;e["a"]=s["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...r,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:s,parent:l}){let o="";for(const n in e)o+=String(e[n]);let i=v.get(o);if(!i){let t;for(t in i=[],f)f[t].forEach(a=>{const s=e[a],n=d(t,a,s);n&&i.push(n)});const a=i.some(t=>t.startsWith("col-"));i.push({col:!a||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),v.set(o,i)}return t(e.tag,Object(n["a"])(a,{class:i}),s)}})},7272:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"contacts"},[a("v-row",{staticClass:"pa-2 fill-height"},[a("v-flex",{staticClass:"px-4",attrs:{md12:""}},[a("v-card",{staticClass:"fill-height"},[a("v-container",{staticClass:"pt-0 fill-height"},[a("v-row",{staticClass:"fill-height"},[a("v-flex",{staticClass:"right-border",attrs:{md4:""}},[a("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[a("v-row",{staticClass:"mx-4 pt-5"},[a("v-flex",{attrs:{md4:""}},[a("v-select",{attrs:{value:"Name",dense:"",items:t.sortingSelection}})],1),a("v-flex",{attrs:{md3:""}}),a("v-flex",{attrs:{md5:""}},[a("v-text-field",{attrs:{"prepend-icon":"fas fa-search",label:"Search"}})],1)],1)],1),a("div",{staticClass:"pa-0",staticStyle:{position:"relative",width:"100%",height:"100%",overflow:"auto","min-height":"100px"}},[a("div",{staticClass:"pa-3",staticStyle:{position:"absolute",height:"100%",width:"100%"}},[a("v-list",{attrs:{"two-line":""}},[a("v-list-item-group",[t._l(100,(function(e){return[a("contact-list-item",{key:e,attrs:{contact:t.item},on:{click:function(e){t.openContact=t.item}}}),a("v-divider")]}))],2)],1)],1)]),a("v-divider",{attrs:{vertical:""}})],1),a("v-flex",{attrs:{md8:""}},[t.openContact?a("full-contact",{attrs:{contact:t.openContact}}):t._e()],1)],1)],1)],1)],1)],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"fullcontact"},[a("v-col",{staticClass:"pt-0"},[a("div",{staticStyle:{position:"absolute",right:"10px",top:"10px"}},[a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-star")])],1),a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-pencil-alt")])],1),a("v-btn",{attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-ellipsis-v")])],1)],1),a("v-row",{staticClass:"primary pa-5",attrs:{align:"center"}},[a("v-avatar",{attrs:{size:"100",color:"secondary"}},[a("v-icon",{attrs:{size:"50",dark:""}},[t._v("fas fa-user")])],1),a("v-flex",{staticClass:"ml-4"},[a("h1",{staticClass:"display-1 white--text ml-2"},[t._v(" "+t._s(t.contact.name))]),a("div",{staticClass:"pt-2"},[a("v-chip",{staticClass:"mx-2"},[t._v("\n            Coworker\n          ")])],1)])],1),a("v-col",[a("h2",[t._v("\n        Contact details\n      ")]),t._l(t.contact.contacts,(function(e,s){return a("v-row",{key:s,staticClass:"mt-2"},[a("v-flex",{staticClass:"text-center",attrs:{md1:""}},["email"==e.type?a("v-icon",{attrs:{small:""}},[t._v("fas fa-envelope")]):t._e(),"phone"==e.type?a("v-icon",{attrs:{small:""}},[t._v("fas fa-phone")]):t._e(),"location"==e.type?a("v-icon",{attrs:{small:""}},[t._v("fas fa-map-marked")]):t._e()],1),a("v-flex",{staticClass:"ml-3"},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.value)+" ")]),t._v(" - "+t._s(e.label))])],1)}))],2),a("v-col",{staticClass:"pt-2"},[a("h2",[t._v("\n        Recent contact\n      ")]),t._l(t.contact.recent,(function(e,s){return a("v-row",{key:s,staticClass:"mt-2",attrs:{align:"center"}},[a("v-flex",{staticClass:"text-center",attrs:{md1:""}},[a("v-badge",{attrs:{overlap:"",right:"",bottom:"",color:"secondary"}},[a("span",{attrs:{slot:"badge"},slot:"badge"},["outgoing"==e.direction?a("v-icon",{attrs:{dark:"",small:""}},[t._v("fas fa-angle-right")]):t._e(),"incoming"==e.direction?a("v-icon",{attrs:{dark:"",small:""}},[t._v("fas fa-angle-left")]):t._e()],1),a("v-avatar",{staticClass:"primary",attrs:{size:"30"}},["email"==e.type?a("v-icon",{attrs:{small:"",dark:""}},[t._v("fas fa-envelope")]):t._e(),"phone"==e.type?a("v-icon",{attrs:{small:"",dark:""}},[t._v("fas fa-phone")]):t._e()],1)],1)],1),a("v-flex",{staticClass:"ml-3"},[t._v(t._s(e.body))])],1)}))],2)],1)],1)},o=[],i={name:"fullcontact",components:{},props:["contact"],data(){return{}},computed:{},mounted(){},methods:{}},c=i,r=(a("78e8"),a("2877")),f=a("6544"),d=a.n(f),v=a("8212"),u=a("4ca6"),m=a("8336"),p=a("cc20"),b=a("62ad"),g=a("0e8f"),h=a("132d"),_=a("0fd9"),y=Object(r["a"])(c,l,o,!1,null,"0085b80f",null),C=y.exports;d()(y,{VAvatar:v["a"],VBadge:u["a"],VBtn:m["a"],VChip:p["a"],VCol:b["a"],VFlex:g["a"],VIcon:h["a"],VRow:_["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"contactlistitem"},[a("v-list-item",{on:{click:function(e){return t.$emit("click")}},scopedSlots:t._u([{key:"default",fn:function(e){e.active,e.toggle;return[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.contact.name))]),a("v-list-item-subtitle",[t._v("\n          "+t._s(t.contact.email)+"\n        ")])],1),a("v-list-item-action",[t.contact.star?a("v-icon",{attrs:{color:"yellow"}},[t._v("\n          fas fa-star\n        ")]):a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n          far fa-star\n        ")])],1)]}}])})],1)},k=[],w={name:"contactlistitem",components:{},props:["contact"],data(){return{}},computed:{},mounted(){},methods:{}},V=w,S=(a("5119"),a("da13")),L=a("1800"),j=a("5d23"),I=Object(r["a"])(V,x,k,!1,null,"391a1262",null),O=I.exports;d()(I,{VIcon:h["a"],VListItem:S["a"],VListItemAction:L["a"],VListItemContent:j["b"],VListItemSubtitle:j["c"],VListItemTitle:j["d"]});var $={name:"contacts",components:{fullContact:C,contactListItem:O},props:[],data(){return{openContact:null,sortingSelection:["Name","Recent"],item:{name:"John Lennon",star:!1,contacts:[{label:"Work email",type:"email",value:"john@len.non"},{label:"Work phone",type:"phone",value:"+3249000000000"},{label:"Work",type:"location",value:"Legeweg 135, 8020 Oostkamp"}],recent:[{type:"phone",direction:"outgoing",body:"05:13",timestamp:"25/09/2019"},{type:"email",direction:"outgoing",body:"All my troubles seemed so far away",timestamp:"26/09/2019"},{type:"email",direction:"incoming",body:"Imagine",timestamp:"24/09/2019"}]}}},computed:{},mounted(){},methods:{}},N=$,B=(a("0b2e"),a("b0af")),E=a("a523"),R=a("ce7e"),W=a("8860"),z=a("1baa"),A=a("b974"),F=a("8654"),J=a("71d9"),T=Object(r["a"])(N,s,n,!1,null,"329a7cf3",null);e["default"]=T.exports;d()(T,{VCard:B["a"],VContainer:E["a"],VDivider:R["a"],VFlex:g["a"],VList:W["a"],VListItemGroup:z["a"],VRow:_["a"],VSelect:A["a"],VTextField:F["a"],VToolbar:J["a"]})},"78e8":function(t,e,a){"use strict";var s=a("dbb6"),n=a.n(s);n.a},dbb6:function(t,e,a){}}]);
//# sourceMappingURL=contacts-page.b8a4aed5.js.map