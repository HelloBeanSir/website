(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12ac7b5e"],{"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),a=i("17c2"),o=i("9112");for(var r in s){var c=n[r],l=c&&c.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("b301");t.exports=s("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"3f7b":function(t,e,i){},"73ff":function(t,e,i){"use strict";var n=i("3f7b"),s=i.n(n);s.a},"9adc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"aboutMe",staticClass:"about-me hide-footer"},[i("section",{staticClass:"section flex",attrs:{"data-bgcolor":"#9d2932","data-cname":"胭脂"}},[i("h2",{staticClass:"section__title"},[t._v("我是谁？")]),t._m(0),i("div",{staticClass:"github-pages"},[i("Button",{staticClass:"about",attrs:{text:"?"},on:{click:function(e){return t.goUrl("resume.html")}}})],1),i("span",{staticClass:"section__color"},[t._v("胭脂")])]),t._m(1),t._m(2),t._m(3),i("Button",{staticClass:"back",attrs:{text:"Home"},on:{click:t.back}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section__content"},[i("p",[t._v("Don’t just Learn to Code:")]),i("p",[t._v("Think Like a Software Engineer")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section flex",attrs:{"data-bgcolor":"#789262","data-cname":"竹青"}},[i("h2",{staticClass:"section__title"},[t._v("我来自哪里？")]),i("div",{staticClass:"section__content"},[i("p",[t._v("不要问我从哪里来")]),i("p",[t._v("我的故乡在远方")])]),i("span",{staticClass:"section__color"},[t._v("竹青")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section flex",attrs:{"data-bgcolor":"#494166","data-cname":"黛"}},[i("h2",{staticClass:"section__title"},[t._v("我要去哪里？")]),i("div",{staticClass:"section__content"},[i("p",[t._v("上有天堂")]),i("p",[t._v("下有哪里我就去哪里")])]),i("span",{staticClass:"section__color"},[t._v("黛")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section flex",attrs:{"data-bgcolor":"#d9b612","data-cname":"秋香色"}},[i("h2",{staticClass:"section__title"},[t._v("我在做什么？")]),i("div",{staticClass:"section__content"},[i("p",[t._v("Try to Change the World")])]),i("span",{staticClass:"section__color"},[t._v("秋香色")])])}],a=(i("a630"),i("c975"),i("ac1f"),i("3ca3"),i("5319"),i("159b"),i("d4ec")),o=i("bee2"),r=i("1209"),c=i("f4fb"),l=i.n(c),u=function(){function t(e,i,n){Object(a["a"])(this,t),this.DOM={el:e,wrap:n},this.DOM.title={word:this.DOM.el.querySelector(".section__title")},l()(this.DOM.title.word,{}),this.DOM.title.letters=Array.from(this.DOM.title.word.querySelectorAll("span")),this.DOM.title.letters.forEach((function(t){return t.dataset.initial=t.innerHTML})),this.lettersTotal=this.DOM.title.letters.length,this.DOM.color=this.DOM.el.querySelector(".section__color"),i.observe(this.DOM.el)}return Object(o["a"])(t,[{key:"enter",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"down";this.entertime=setTimeout((function(){t.DOM.title.word.style.opacity=1,t.DOM.color.style.opacity=1,r["a"].remove(t.DOM.title.letters),Object(r["a"])({targets:t.DOM.title.letters,duration:800,delay:function(t,e){return 20*e},easing:"easeOutElastic",translateY:["down"===e?"100%":"-100%","0%"],opacity:{value:[0,1],duration:300,easing:"linear"}}),t.DOM.wrap.style.backgroundColor=t.DOM.el.dataset.bgcolor}),150)}},{key:"exit",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"down";r["a"].remove(this.DOM.title.letters),this.entertime&&clearTimeout(this.entertime),Object(r["a"])({targets:this.DOM.title.letters,duration:250,delay:function(t,e){return 20*e},easing:"easeOutExpo",translateY:["0%","down"===e?"-100%":"100%"],opacity:{value:[1,0],duration:150,easing:"linear"},complete:function(){t.DOM.title.word.style.opacity=0,t.DOM.color.style.opacity=0}})}}]),t}(),f=i("ff50"),d=i("5956"),h={name:"aboutMe",components:{Button:d["a"]},mounted:function(){var t,e=this;console.log("你找到了一个前端工程师，也许还能找到点其他东西，也许不能。");var i=-1,n=[],s=Array.from(document.querySelectorAll(".section"));"IntersectionObserver"in window&&(t=new IntersectionObserver((function(t){t.forEach((function(t){if(t.intersectionRatio>.5){var e=s.indexOf(t.target);if(e===i)return;var a=e>i;i>=0&&n[i].exit(a?"down":"up"),n[e].enter(a?"down":"up"),i=e}}))}),{threshold:.5}),s.forEach((function(i){return n.push(new u(i,t,e.$refs.aboutMe))})))},methods:{back:function(){this.$router.replace("/index")},goUrl:function(t){Object(f["a"])(t)}}},_=h,p=(i("73ff"),i("2877")),v=Object(p["a"])(_,n,s,!1,null,null,null);e["default"]=v.exports},c975:function(t,e,i){"use strict";var n=i("23e7"),s=i("4d64").indexOf,a=i("b301"),o=[].indexOf,r=!!o&&1/[1].indexOf(1,-0)<0,c=a("indexOf");n({target:"Array",proto:!0,forced:r||c},{indexOf:function(t){return r?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},f4fb:function(t,e){t.exports=function(t,{tagName:e="span",split:i,setClassName:n=function(t){return"char"+t}}={}){t.normalize();let s=1;function a(t){const a=t.parentNode,o=t.nodeValue,r=i?i(o):o.split("");r.forEach((function(i){const o=document.createElement(e),r=n(s++,i);r&&(o.className=r),o.appendChild(document.createTextNode(i)),o.setAttribute("aria-hidden","true"),a.insertBefore(o,t)})),""!==o.trim()&&a.setAttribute("aria-label",o),a.removeChild(t)}(function t(e){if(3===e.nodeType)return a(e);const i=Array.prototype.slice.call(e.childNodes),n=i.length;if(1===n&&3===i[0].nodeType)return a(i[0]);i.forEach((function(e){t(e)}))})(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);