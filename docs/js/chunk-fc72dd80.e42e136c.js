(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc72dd80"],{"403c":function(t,s,e){},"6d67":function(t,s,e){"use strict";var n=e("403c"),a=e.n(n);a.a},7986:function(t,s,e){},ce34:function(t,s,e){"use strict";var n=e("7986"),a=e.n(n);a.a},e843:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("ul",{staticClass:"grid grid--up"},t._l(t.contents,(function(s,n){return e("li",{key:n},[e("div",{staticClass:"box"},[e("div",{staticClass:"box__cover"},[e("svg-text",{attrs:{text:s.coverText,"symbol-id":"presentation"+n}})],1),e("div",{staticClass:"box__intro"},[e("h3",[t._v(t._s(s.title))]),e("p",[t._v(t._s(s.date))]),e("a",{staticClass:"box__btn",on:{click:function(e){return t.jump(s.path)}}},[t._v("Enter")])])])])})),0)])},a=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{staticClass:"svg-text",attrs:{viewBox:"0 0 600 300"}},[e("symbol",{attrs:{id:t.symbolId}},[e("text",{attrs:{"text-anchor":"middle",x:"50%",y:"50%",dy:".35em"}},[t._v(t._s(t.text))])]),e("use",{staticClass:"text",attrs:{"xlink:href":"#"+t.symbolId}}),e("use",{staticClass:"text",attrs:{"xlink:href":"#"+t.symbolId}}),e("use",{staticClass:"text",attrs:{"xlink:href":"#"+t.symbolId}}),e("use",{staticClass:"text",attrs:{"xlink:href":"#"+t.symbolId}}),e("use",{staticClass:"text",attrs:{"xlink:href":"#"+t.symbolId}})])},r=[],c={name:"SvgText",props:{text:{type:String,default:"TEXT"},symbolId:{defualt:"svgTextItem"}}},l=c,o=(e("ce34"),e("2877")),u=Object(o["a"])(l,i,r,!1,null,null,null),d=u.exports,x={name:"presentation",components:{SvgText:d},data:function(){return{contents:[{coverText:"2019",title:"2019年度总结",date:"2019-12-31",style:{background:""},path:"/summary/2019"},{coverText:"2018",title:"2018年度总结",date:"2018-12-31",style:{background:""},path:"/summary/2018"}]}},created:function(){},mounted:function(){},methods:{jump:function(t){t&&this.$router.push(t)}}},m=x,f=(e("6d67"),Object(o["a"])(m,n,a,!1,null,null,null));s["default"]=f.exports}}]);