__NUXT_JSONP__("/projects/jill", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{page:{slug:"jill",description:"Julia language command line installer",title:j,img:"jill.jpg",toc:[{id:k,depth:2,text:l}],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Fgithub.com\u002Fabelsiqueira\u002Fjill",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:j}]},{type:a,value:" is a command line installer for Julia.\nIt works with Linux and OSX via "},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:", and you can quickly start using it with"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{className:[g,i]},children:[{type:a,value:"curl"}]},{type:a,value:o},{type:b,tag:f,props:{className:[g,"parameter","variable"]},children:[{type:a,value:"-fsSL"}]},{type:a,value:" https:\u002F\u002Fraw.githubusercontent.com\u002Fabelsiqueira\u002Fjill\u002Fmain\u002Fjill.sh "},{type:b,tag:f,props:{className:[g,"operator"]},children:[{type:a,value:"\u003E"}]},{type:a,value:p},{type:b,tag:f,props:{className:[g,i]},children:[{type:a,value:"sudo"}]},{type:a,value:o},{type:b,tag:f,props:{className:[g,i]},children:[{type:a,value:n}]},{type:a,value:p}]}]}]},{type:a,value:c},{type:b,tag:"h2",props:{id:k},children:[{type:b,tag:m,props:{href:"#more-in-depth",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:f,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"The objectives of Jill are"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"One line installation of any Julia version;"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Easy to maintain\u002Fupdate when a new Julia version is released;"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Be lightweight with low dependencies."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Whenever a version of Julia is installed, links are made to "},{type:b,tag:d,props:{},children:[{type:a,value:"julia-x"}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:"julia-x.y"}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:"julia-x.y.z"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"The main ways to use Jill are:"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo bash jill.sh"}]},{type:a,value:": Installs the latest stable version;"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo bash jill.sh --lts"}]},{type:a,value:": Installs the latest Long-Term-Support version;"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo bash jill.sh --rc"}]},{type:a,value:": Installs the latest release candidate;"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo bash jill.sh --version x.y.z"}]},{type:a,value:": Installs the specific version "},{type:b,tag:d,props:{},children:[{type:a,value:"x.y.z"}]},{type:a,value:";"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo bash jill.sh -u x.y"}]},{type:a,value:": Installs the latest stable version and copies the environment from "},{type:b,tag:d,props:{},children:[{type:a,value:"x.y"}]},{type:a,value:r}]},{type:a,value:c}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Fjill",extension:".md",createdAt:s,updatedAt:s,bodyPlainText:"\n[Jill](https:\u002F\u002Fgithub.com\u002Fabelsiqueira\u002Fjill) is a command line installer for Julia.\nIt works with Linux and OSX via `bash`, and you can quickly start using it with\n\n```bash\ncurl -fsSL https:\u002F\u002Fraw.githubusercontent.com\u002Fabelsiqueira\u002Fjill\u002Fmain\u002Fjill.sh \u003E jill.sh\nsudo bash jill.sh\n```\n\n## More in-depth\n\nThe objectives of Jill are\n\n- One line installation of any Julia version;\n- Easy to maintain\u002Fupdate when a new Julia version is released;\n- Be lightweight with low dependencies.\n\nWhenever a version of Julia is installed, links are made to `julia-x`, `julia-x.y` and `julia-x.y.z`.\n\nThe main ways to use Jill are:\n\n- `sudo bash jill.sh`: Installs the latest stable version;\n- `sudo bash jill.sh --lts`: Installs the latest Long-Term-Support version;\n- `sudo bash jill.sh --rc`: Installs the latest release candidate;\n- `sudo bash jill.sh --version x.y.z`: Installs the specific version `x.y.z`;\n- `sudo bash jill.sh -u x.y`: Installs the latest stable version and copies the environment from `x.y`.\n"}}],fetch:{},mutations:void 0}}("text","element","\n","code","li","span","token","p","function","Jill","more-in-depth","More in-depth","a","bash"," "," jill.sh\n","ul",".","2022-12-23T23:04:30.335Z")));