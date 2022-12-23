__NUXT_JSONP__("/blog/2014-12-19-mudando-de-hd", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{page:{slug:"2014-12-19-mudando-de-hd",title:m,date:"2014-12-19",tags:["tech","work","arch","linux","install"],toc:[],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"mudando-de-hd"},children:[{type:b,tag:n,props:{href:"#mudando-de-hd",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ontem eu acabei de montar um computador novo.\nEsse computador é um upgrade do meu, e o meu passaria para a Kally.\nNo entanto, eu não gostaria de perder a minha instalação dor Arch,\nnem de ficar com o HD antigo, então decidi tentar copiar as partições."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Nota: Não sei a aplicabilidade destes comandos para outras distribuições."}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Nota: Você também poderia fazer o que fiz, usando o "},{type:b,tag:d,props:{},children:[{type:a,value:"dd"}]},{type:a,value:", mas eu preferi\nevitar."}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Inicialmente, prepare um pendrive (ou sua mídia favorita)\ncom o iso do Archlinux.\nTalvez esses passos possam ser feitos direto da instalação do HD velho,\nmas eu preferi não testar."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Faça o boot pelo pendrive.\nVerifique que os dois HDs foram identificados e\n"},{type:b,tag:k,props:{},children:[{type:a,value:"atente-se com a numeração sdx do HD"}]},{type:a,value:". No meu, o principal era sda, mas quando\neu instalei o outro HD, o novo ficou como sda e o antigo mudou para sdb.\nPrimeiro particione o HD novo. Eu separei as mesmas partições que o HD antigo,\nmas a numeração não foi a mesma, nem o tamanho.\nEu costumo usar 3 partições "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:".\nEntão, depois de particionar o HD novo com a quantidade de partições necessárias\npara essas partições, com espaço suficiente para os dados que haviam nas\npartições antigas, eu formatei cada partição com o tipo de dado necessário\n(usando o "},{type:b,tag:d,props:{},children:[{type:a,value:"mkfs.ext4"}]},{type:a,value:").\nAlém disso, eu também tinha um swap e queria uma partição compartilhada entre\nWindows e Linux, então também \"formatei\" o swap ("},{type:b,tag:d,props:{},children:[{type:a,value:"mkswap"}]},{type:a,value:") e essa partição\n("},{type:b,tag:d,props:{},children:[{type:a,value:"mkfs.ntfs"}]},{type:a,value:").\nDepois disso, eu montei o "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" de cada partição e copiei os dados de uma partição\npara outra, com o comando"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"cp -a \u002Fmnt\u002Fvelho\u002F. \u002Fmnt\u002Fnovo\u002F\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Depois montei o "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" e copiei o counteúdo de cada um."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"cp -a \u002Fmnt\u002Fvelho\u002Fhome\u002F. \u002Fmnt\u002Fnovo\u002Fhome\u002F\ncp -a \u002Fmnt\u002Fvelho\u002Fboot\u002F. \u002Fmnt\u002Fnovo\u002Fboot\u002F\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"Nota: (Imagino que seja possível montar tudo, e depois copiar tudo apenas com o\nprimeiro comando)"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nesse momento, o HD já tem os dados do sistema novo. Então, eu segui,\nseletivamente, os passos do "},{type:b,tag:n,props:{href:"https:\u002F\u002Fwiki.archlinux.org\u002Findex.php\u002Fbeginners%27_guide#Generate_an_fstab",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"guia do\niniciante"}]},{type:a,value:"\ndo Archlinux, a partir do \"Generate an fstab\". Lembre-se de ligar o swap e\nmontar a partição ntfs, se quiser que eles sejam preparados no boot.\nO comando é"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"# genfstab -U -p \u002Fmnt\u002Fnovo \u003E \u002Fmnt\u002Fnovo\u002Fetc\u002Ffstab\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Daí, entrei no sistema novo, com"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"# arch-chroot \u002Fmnt\u002Fnovo \u002Fbin\u002Fbash\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"e pulei para \"Create an initial ramdisk environment\".\nNão sei se era necessário fazer isso,\nmas me parecia uma boa coisa a se fazer."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"# mkinitcpio -p linux\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Enfim, atualizei o "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fboot\u002Fsyslinux\u002Fsyslinux.cfg"}]},{type:a,value:" para refletir a nova posição do\n"},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:", e rodei"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"# syslinux-install_update -i -a -m\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Depois, só sair, desmontar e rebootar"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"# exit\n# umount -R \u002Fmnt\u002Fnovo \u002Fmnt\u002Fvelho\n# reboot\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Já escrevi isso do computador novo."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2014-12-19-mudando-de-hd",extension:".md",createdAt:r,updatedAt:r,bodyPlainText:"\n# Mudando de HD\n\nOntem eu acabei de montar um computador novo.\nEsse computador é um upgrade do meu, e o meu passaria para a Kally.\nNo entanto, eu não gostaria de perder a minha instalação dor Arch,\nnem de ficar com o HD antigo, então decidi tentar copiar as partições.\n\n**Nota: Não sei a aplicabilidade destes comandos para outras distribuições.**\n\n**Nota: Você também poderia fazer o que fiz, usando o `dd`, mas eu preferi\nevitar.**\n\nInicialmente, prepare um pendrive (ou sua mídia favorita)\ncom o iso do Archlinux.\nTalvez esses passos possam ser feitos direto da instalação do HD velho,\nmas eu preferi não testar.\n\nFaça o boot pelo pendrive.\nVerifique que os dois HDs foram identificados e\n**atente-se com a numeração sdx do HD**. No meu, o principal era sda, mas quando\neu instalei o outro HD, o novo ficou como sda e o antigo mudou para sdb.\nPrimeiro particione o HD novo. Eu separei as mesmas partições que o HD antigo,\nmas a numeração não foi a mesma, nem o tamanho.\nEu costumo usar 3 partições `\u002F`, `\u002Fboot` e `\u002Fhome`.\nEntão, depois de particionar o HD novo com a quantidade de partições necessárias\npara essas partições, com espaço suficiente para os dados que haviam nas\npartições antigas, eu formatei cada partição com o tipo de dado necessário\n(usando o `mkfs.ext4`).\nAlém disso, eu também tinha um swap e queria uma partição compartilhada entre\nWindows e Linux, então também \"formatei\" o swap (`mkswap`) e essa partição\n(`mkfs.ntfs`).\nDepois disso, eu montei o `\u002F` de cada partição e copiei os dados de uma partição\npara outra, com o comando\n\n```\ncp -a \u002Fmnt\u002Fvelho\u002F. \u002Fmnt\u002Fnovo\u002F\n```\n\nDepois montei o `\u002Fhome` e `\u002Fboot` e copiei o counteúdo de cada um.\n\n```\ncp -a \u002Fmnt\u002Fvelho\u002Fhome\u002F. \u002Fmnt\u002Fnovo\u002Fhome\u002F\ncp -a \u002Fmnt\u002Fvelho\u002Fboot\u002F. \u002Fmnt\u002Fnovo\u002Fboot\u002F\n```\n\n_Nota: (Imagino que seja possível montar tudo, e depois copiar tudo apenas com o\nprimeiro comando)_.\n\nNesse momento, o HD já tem os dados do sistema novo. Então, eu segui,\nseletivamente, os passos do [guia do\niniciante](https:\u002F\u002Fwiki.archlinux.org\u002Findex.php\u002Fbeginners%27_guide#Generate_an_fstab)\ndo Archlinux, a partir do \"Generate an fstab\". Lembre-se de ligar o swap e\nmontar a partição ntfs, se quiser que eles sejam preparados no boot.\nO comando é\n\n```\n# genfstab -U -p \u002Fmnt\u002Fnovo \u003E \u002Fmnt\u002Fnovo\u002Fetc\u002Ffstab\n```\n\nDaí, entrei no sistema novo, com\n\n```\n# arch-chroot \u002Fmnt\u002Fnovo \u002Fbin\u002Fbash\n```\n\ne pulei para \"Create an initial ramdisk environment\".\nNão sei se era necessário fazer isso,\nmas me parecia uma boa coisa a se fazer.\n\n```\n# mkinitcpio -p linux\n```\n\nEnfim, atualizei o `\u002Fboot\u002Fsyslinux\u002Fsyslinux.cfg` para refletir a nova posição do\n`\u002F`, e rodei\n\n```\n# syslinux-install_update -i -a -m\n```\n\nDepois, só sair, desmontar e rebootar\n\n```\n# exit\n# umount -R \u002Fmnt\u002Fnovo \u002Fmnt\u002Fvelho\n# reboot\n```\n\nJá escrevi isso do computador novo.\n"},prev:{slug:"2015-01-06-sharelatex-e-o-basico-do-cabecalho",title:"ShareLaTeX e o básico do cabeçalho"},next:{slug:"2014-12-16-instalacao-da-impressora-no-dmat-ufpr",title:"Instalação da Impressora no DMAT-UFPR"}}],fetch:{},mutations:void 0}}("text","element","\n","code","p","div","nuxt-content-highlight","pre","language-text","line-numbers","strong","\u002F","Mudando de HD","a","\u002Fboot"," e ","\u002Fhome","2022-12-23T17:39:35.597Z")));