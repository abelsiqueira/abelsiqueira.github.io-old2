(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5,10],{431:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("16ab423c",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r(431)},433:function(t,e,r){var n=r(17)(!1);n.push([t.i,".tint[data-v-1dcdf040]{background-color:rgba(30,30,30,.8)!important;border-radius:10px}",""]),t.exports=n},435:function(t,e,r){"use strict";r.r(e);var n=r(520),l=r(531),o=r(519),c=r(426),d=(r(10),r(58),{props:{img:{type:String,required:!0},description:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""}},setup:function(t){var e=r(436)("./"+t.img);return{topBarStyle:{background:"url(".concat(e,")"),"background-position":"center center","background-size":"cover"}}}}),f=(r(432),r(70)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"pa-5",style:t.topBarStyle,attrs:{id:"top-banner-image",fluid:""}},[e(o.a,[e(c.a,{staticClass:"d-none d-md-flex"}),t._v(" "),e(n.a,{attrs:{cols:"12",lg:"6",xs:"12","align-self":"center"}},[e("div",{staticClass:"tint pa-5"},[t.title?e("h1",[t._v("\n          "+t._s(t.title)+"\n        ")]):t._e(),t._v(" "),t.description?e("p",{staticClass:"font-weight-bold text-justify mb-0"},[t._v("\n          "+t._s(t.description)+"\n        ")]):t._e()])]),t._v(" "),e(c.a,{staticClass:"d-none d-md-flex"})],1)],1)}),[],!1,null,"1dcdf040",null);e.default=component.exports},437:function(t,e,r){"use strict";r.r(e);var n=r(520),l=r(531),o=r(519),c=(r(10),r(58),{props:{cardData:{type:Array,required:!0}}}),d=r(70),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"pa-0",attrs:{fluid:""}},[e(o.a,{attrs:{"no-gutters":""}},t._l(t.cardData,(function(t,r){return e(n.a,{key:r,attrs:{cols:"12",xl:"3",lg:"4",md:"6",sm:"6"}},[e("PageCard",{attrs:{img:t.img,title:t.title,description:t.description,url:t.url,"nuxt-link-instead-of-a":t.nuxtLinkInsteadOfA,"hide-text":t.hideText}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageCard:r(465).default})},458:function(t,e,r){"use strict";r.r(e);r(10),r(58);var n={components:{CardDisplay:r(437).default},props:{img:{type:String,required:!0},title:{type:String,default:""},description:{type:String,default:""},cardData:{type:Array,required:!0}}},l=r(70),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("TopBanner",{attrs:{img:t.img,title:t.title,description:t.description}}),t._v(" "),e("CardDisplay",{attrs:{"card-data":t.cardData}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopBanner:r(435).default,CardDisplay:r(437).default})},523:function(t,e,r){"use strict";r.r(e);var n={name:"ProjectsPage",components:{WrapperBannerCard:r(458).default},setup:function(){return{cardData:[{img:"jill.jpg",title:"Jill",description:"Julia installer",url:"/projects/jill"},{img:"jso.jpg",title:"JuliaSmoothOptimizers",description:"Optimization in Julia",url:"/projects/jso"},{img:"cidamo.jpg",title:"CiDAMO",description:"Data Science, Machine Learning, and Optimization group",url:"/projects/cidamo"},{img:"book.jpg",title:"ThinkJulia",description:"Translation to Portuguese",url:"/projects/thinkjulia"}]}}},l=r(70),component=Object(l.a)(n,(function(){return(0,this._self._c)("WrapperBannerCard",{attrs:{img:"code.jpg",description:"I have worked on a variety of projects. Here is a short list. For a complete software list, check my GitHub.",title:"Projects","card-data":this.cardData}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WrapperBannerCard:r(458).default})}}]);