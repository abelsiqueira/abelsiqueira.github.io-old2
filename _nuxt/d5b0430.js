(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8],{432:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("16ab423c",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";n(432)},434:function(t,e,n){var o=n(17)(!1);o.push([t.i,".tint[data-v-1dcdf040]{background-color:rgba(30,30,30,.8)!important;border-radius:10px}",""]),t.exports=o},436:function(t,e,n){"use strict";n.r(e);var o=n(521),r=n(532),c=n(520),l=n(427),d=(n(10),n(60),{props:{img:{type:String,required:!0},description:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""}},setup:function(t){var e=n(437)("./"+t.img);return{topBarStyle:{background:"url(".concat(e,")"),"background-position":"center center","background-size":"cover"}}}}),f=(n(433),n(71)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"pa-5",style:t.topBarStyle,attrs:{id:"top-banner-image",fluid:""}},[e(c.a,[e(l.a,{staticClass:"d-none d-md-flex"}),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6",xs:"12","align-self":"center"}},[e("div",{staticClass:"tint pa-5"},[t.title?e("h1",[t._v("\n          "+t._s(t.title)+"\n        ")]):t._e(),t._v(" "),t.description?e("p",{staticClass:"font-weight-bold text-justify mb-0"},[t._v("\n          "+t._s(t.description)+"\n        ")]):t._e()])]),t._v(" "),e(l.a,{staticClass:"d-none d-md-flex"})],1)],1)}),[],!1,null,"1dcdf040",null);e.default=component.exports},437:function(t,e,n){var map={"./book.jpg":439,"./calculo-numerico.jpg":440,"./cidamo.jpg":441,"./code.jpg":442,"./fractal.png":443,"./jill.jpg":444,"./jso.jpg":445,"./resume.jpg":446,"./written-math.jpg":447,"./youtube-calculo-numerico.jpg":448,"./youtube-curso-otim-nao-linear.jpg":449,"./youtube-intro-a-ml.jpg":450,"./youtube-jso.jpg":451,"./youtube-main.jpg":452,"./youtube-ml-em-julia.jpg":453,"./youtube-modelagem.jpg":454,"./youtube-otimizacao-em-julia.jpg":455,"./youtube-tutoriais-de-julia.jpg":456,"./youtube.jpg":457};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=437},439:function(t,e,n){t.exports=n.p+"img/book.eb845ee.jpg"},440:function(t,e,n){t.exports=n.p+"img/calculo-numerico.200ae89.jpg"},441:function(t,e,n){t.exports=n.p+"img/cidamo.b925d39.jpg"},442:function(t,e,n){t.exports=n.p+"img/code.5f772ab.jpg"},443:function(t,e,n){t.exports=n.p+"img/fractal.b76efb8.png"},444:function(t,e,n){t.exports=n.p+"img/jill.113829a.jpg"},445:function(t,e,n){t.exports=n.p+"img/jso.1a2f598.jpg"},446:function(t,e,n){t.exports=n.p+"img/resume.543ec01.jpg"},447:function(t,e,n){t.exports=n.p+"img/written-math.e9ddabf.jpg"},448:function(t,e,n){t.exports=n.p+"img/youtube-calculo-numerico.c5f3245.jpg"},449:function(t,e,n){t.exports=n.p+"img/youtube-curso-otim-nao-linear.5251f77.jpg"},450:function(t,e,n){t.exports=n.p+"img/youtube-intro-a-ml.3f3de73.jpg"},451:function(t,e,n){t.exports=n.p+"img/youtube-jso.2b931d8.jpg"},452:function(t,e,n){t.exports=n.p+"img/youtube-main.8bfd33f.jpg"},453:function(t,e,n){t.exports=n.p+"img/youtube-ml-em-julia.19d0a0e.jpg"},454:function(t,e,n){t.exports=n.p+"img/youtube-modelagem.99fc8ae.jpg"},455:function(t,e,n){t.exports=n.p+"img/youtube-otimizacao-em-julia.baf9c22.jpg"},456:function(t,e,n){t.exports=n.p+"img/youtube-tutoriais-de-julia.c93dc6a.jpg"},457:function(t,e,n){t.exports=n.p+"img/youtube.7a2fec8.jpg"},489:function(t,e,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("4d138efa",content,!0,{sourceMap:!1})},508:function(t,e,n){"use strict";n(489)},509:function(t,e,n){var o=n(17)(!1);o.push([t.i,"img{max-width:100%}",""]),t.exports=o},527:function(t,e,n){"use strict";n.r(e);var o=n(532),r=n(163),c=(n(10),n(60),n(21)),l=n(24),d=(n(91),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,d,f,m,j,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,r=t.error,l=o.slug||"index",e.next=4,n("blog",l).fetch().catch((function(t){r({statusCode:404,message:"Page not found"})}));case 4:return d=e.sent,e.next=7,n("blog").only(["title","slug"]).sortBy("slug","desc").surround(o.slug).fetch();case 7:return f=e.sent,m=Object(c.a)(f,2),j=m[0],x=m[1],e.abrupt("return",{page:d,prev:j,next:x});case 12:case"end":return e.stop()}}),e)})))()},head:function(){return{script:[{src:"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.js",crossorigin:"anonymous"},{src:"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/contrib/auto-render.min.js",onload:"renderMathInElement(document.body, {\n            delimiters: [\n              {left: '$$', right: '$$', display: true},\n              {left: '$', right: '$', display: false},\n            ]\n          });",crossorigin:"anonymous",defer:!0}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css",crossorigin:"anonymous"}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"})}}}),f=(n(508),n(71)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("TopBanner",{attrs:{img:"written-math.jpg",title:t.page.title,description:t.page.description}}),t._v(" "),e(o.a,[t.page.img?e(r.a,{attrs:{src:t.page.img}}):t._e(),t._v(" "),e("span",[t._v(t._s(t.formatDate(t.page.date)))]),t._v(" "),e("nuxt-content",{attrs:{document:t.page}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopBanner:n(436).default})}}]);