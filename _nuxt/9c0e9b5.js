(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{435:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return v}));var n=r(460),o=r(1),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},460:function(e,t,r){"use strict";r(13),r(10),r(12),r(4),r(14),r(11),r(15);var n=r(2),o=(r(26),r(199),r(200),r(461),r(202)),l=r(0),c=(r(131),r(463),r(198)),d=r(135),v=r(38),h=r(134),m=r(203),f=r(37),_=r(1),y=r(8);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var C=Object(y.a)(v.a,Object(h.b)(["absolute","fixed","top","bottom"]),m.a,f.a).extend({name:"v-progress-linear",directives:{intersect:d.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(_.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(_.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(_.g)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(_.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(_.g)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(_.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(_.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),O=C,k=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(O,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),S=r(69);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(y.a)(k,S.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return j(j({"v-card":!0},S.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=j({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=k.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},461:function(e,t,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("e23b7040",content,!0,{sourceMap:!1})},462:function(e,t,r){var n=r(17)(!1);n.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},463:function(e,t,r){var content=r(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("cf87dc84",content,!0,{sourceMap:!1})},464:function(e,t,r){var n=r(17)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},487:function(e,t,r){var content=r(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("5a77b5bc",content,!0,{sourceMap:!1})},491:function(e,t,r){"use strict";r.r(t);var n=r(460),o=r(435),l={data:function(){return{data:"\n@article{Migot2022,\n  doi = {10.21105/joss.03991},\n  url = {https://doi.org/10.21105/joss.03991},\n  year = {2022},\n  publisher = {The Open Journal},\n  volume = {7},\n  number = {70},\n  pages = {3991},\n  author = {Tangi Migot and Dominique Orban and Abel Soares Siqueira},\n  title = {DCISolver.jl: A Julia Solver for Nonlinear Optimization using Dynamic Control of Infeasibility},\n  journal = {Journal of Open Source Software}\n}\n\n@article{Santos2022,\n  doi = {10.5380/biofix.v7i2.83574},\n  url = {https://doi.org/10.5380/biofix.v7i2.83574},\n  year = {2022},\n  month = jul,\n  publisher = {Universidade Federal do Parana},\n  volume = {7},\n  number = {2},\n  pages = {104},\n  author = {Amanda Pereira Santos and Henrique Soares Koehler and Carlos Roberto Sanquetta and Sylvio Péllico Netto and Abel Soares Siqueira and Alexandre Behling},\n  title = {Calibração de Equações de Volume em Nível de Povoamento e Parcela para Acácia Negra},\n  journal = {{BIOFIX} Scientific Journal}\n}\n\n@article{Orban2020,\n  author = {Dominique Orban and Abel Soares Siqueira},\n  title = {A regularization method for constrained nonlinear least squares},\n  journal = {Computational Optimization and Applications},\n  doi = {10.1007/s10589-020-00201-2},\n  url = {https://doi.org/10.1007/s10589-020-00201-2},\n  year = {2020},\n  month = {jun},\n}\n\n@article{Lara2018,\n  doi = {10.5540/tema.2018.019.03.471},\n  url = {https://doi.org/10.5540/tema.2018.019.03.471},\n  year  = {2018},\n  month = {dec},\n  publisher = {Brazilian Society for Computational and Applied Mathematics ({SBMAC})},\n  volume = {19},\n  number = {3},\n  pages = {471--488},\n  author = {Hugo José Lara and Abel Soares Siqueira and Jinyun Yuan},\n  title = {A Reduced Semidefinite Programming Formulation for {HA} Assignment Problems in Sport Scheduling},\n  journal = {{TEMA} (São Carlos)}\n}\n\n@inproceedings{Urdaneta2018,\n  doi = {10.5540/03.2018.006.01.0311},\n  url = {https://doi.org/10.5540/03.2018.006.01.0311},\n  year  = {2018},\n  month = {feb},\n  publisher = {{SBMAC}},\n  author = {Hugo Lara Urdaneta and Jinyun Yuan and Abel Soares Siqueira},\n  title = {Alternative Integer linear and Quadratic Programming\n           Formulations for {HA}-Assignment Problems},\n  booktitle = {XXXVII CNMAC, S. J. dos Campos/SP, Brasil}\n}\n\n@techreport{abel2016a,\n  author = {Abel S. Siqueira and Francisco de Assis Magalhães Gomes},\n  title = {Dynamic Control of Infeasibility for Nonlinear Programming},\n  month = {Jun},\n  year = {2016},\n  type = {Technical Report},\n  number = {rp11-16},\n  institution = {Universidade Estadual de Campinas},\n  address = {Campinas/SP, Brazil},\n  url = {http://www.ime.unicamp.br/sites/default/files/rp11-16.pdf}\n}\n\n@article{abel2016b,\n  author = {Abel S. Siqueira and Raniere G. C. da Silva and Luiz-Rafael Santos},\n  doi = {10.5334/jors.81},\n  url = {https://doi.org/10.5334/jors.81},\n  year  = {2016},\n  month = {apr},\n  publisher = {Ubiquity Press,  Ltd.},\n  volume = {4},\n  number = {1},\n  pages = {e12},\n  title = {Perprof-py: A Python Package for Performance Profile of\n           Mathematical Optimization Software},\n  journal = {Journal of Open Research Software}\n}\n\n@inproceedings{daSilva2011,\n  doi = {10.1109/multi-temp.2011.6005091},\n  url = {https://doi.org/10.1109/multi-temp.2011.6005091},\n  year  = {2011},\n  month = {jul},\n  publisher = {{IEEE}},\n  author = {W. L. da Silva and R. R. V. Goncalves and A. S. Siqueira and J.\n            Zullo and F. A. M. Gomes Neto},\n  title = {Feature extraction for {NDVI} {AVHRR}/{NOAA} time series classification},\n  booktitle = {2011 6th International Workshop on the Analysis of Multi-temporal\n               Remote Sensing Images (Multi-Temp), Trento}\n}\n    "}}},c=(r(504),r(71)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data"}],staticStyle:{display:"none"},attrs:{id:"bibtex_input"},domProps:{value:e.data},on:{input:function(t){t.target.composing||(e.data=t.target.value)}}}),e._v(" "),t("div",{attrs:{id:"bibtex_display"}},[t("div",{staticClass:"bibtex_template"},[t(n.a,{attrs:{color:"transparent",elevation:"0"}},[t(o.b,{},[t("span",{staticClass:"author"}),e._v(",\n          "),t("span",{staticClass:"if year"},[e._v(" ("),t("span",{staticClass:"year"}),e._v(") ")]),e._v(".\n          "),t("span",{staticClass:"title accent--text"}),e._v(".\n          "),t("span",{staticClass:"if journal"},[t("span",{staticClass:"journal"}),e._v(",\n            "),t("span",{staticClass:"if volume"},[t("span",{staticClass:"if number"},[t("span",{staticClass:"volume"}),e._v("("),t("span",{staticClass:"number"}),e._v(").\n              ")]),e._v(" "),t("span",{staticClass:"if !number"},[t("span",{staticClass:"volume"}),e._v(". ")])]),e._v(" "),t("span",{staticClass:"if pages"},[t("span",{staticClass:"pages"}),e._v(".")])]),e._v(" "),t("span",{staticClass:"if institution"},[t("span",{staticClass:"type"}),e._v(".\n            "),t("span",{staticClass:"number"}),e._v(" "),t("span",{staticClass:"address"}),e._v(", "),t("span",{staticClass:"institution"}),e._v(".\n          ")]),e._v(" "),t("span",{staticClass:"if booktitle"},[e._v("\n            In "),t("span",{staticClass:"booktitle"}),e._v(".\n          ")]),e._v(" "),t("span",{staticClass:"if doi"},[t("a",{staticClass:"url"},[t("span",{staticClass:"doi"})]),e._v(".\n          ")]),e._v(" "),t("span",{staticClass:"if !doi"},[t("span",{staticClass:"if url"},[t("a",{staticClass:"url"},[e._v("[link]")]),e._v(". ")])])])],1)],1)])])}),[],!1,null,"ca9527c2",null);t.default=component.exports},504:function(e,t,r){"use strict";r(487)},505:function(e,t,r){var n=r(17)(!1);n.push([e.i,".author[data-v-ca9527c2],.title[data-v-ca9527c2],span[data-v-ca9527c2]{font-size:18px!important;font-weight:400!important;line-height:1.5rem!important;letter-spacing:normal!important}",""]),e.exports=n}}]);