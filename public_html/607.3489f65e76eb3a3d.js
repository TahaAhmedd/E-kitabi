"use strict";(self.webpackChunkE_kitabi=self.webpackChunkE_kitabi||[]).push([[607],{9607:(S,h,i)=>{i.r(h),i.d(h,{ArticlesModule:()=>l});var a=i(433),t=i(1571),C=i(1706),g=i(6511),r=i(6895),O=i(7185),m=i(9691);function _(c,e){1&c&&(t.TgZ(0,"h5",13),t._uU(1,"Not Find The Article with this Name"),t.qZA())}function M(c,e){if(1&c&&(t.TgZ(0,"div",14)(1,"div",15)(2,"div",16),t._UZ(3,"img",17),t.qZA()(),t.TgZ(4,"div",18)(5,"div",19)(6,"h1")(7,"a",20),t._uU(8),t.qZA()(),t.TgZ(9,"div",21)(10,"span"),t._uU(11,"POSTS Date: "),t.TgZ(12,"span"),t._uU(13),t.ALo(14,"date"),t.qZA()()(),t.TgZ(15,"p",22),t._uU(16),t.qZA(),t.TgZ(17,"h5")(18,"a",23),t._uU(19,"Read More "),t._UZ(20,"i",24),t.qZA()()()()()),2&c){const n=e.$implicit;t.xp6(1),t.MGl("routerLink","/articles/list/",n._id,""),t.xp6(2),t.s9C("src",n.cover[0],t.LSH),t.xp6(4),t.MGl("routerLink","/articles/list/",n._id,""),t.xp6(1),t.Oqu(n.title),t.xp6(5),t.Oqu(t.lcZ(14,8,n.updatedAt)),t.xp6(2),t.s9C("title",n.text),t.xp6(1),t.hij("",n.description,"..."),t.xp6(2),t.MGl("routerLink","/articles/list/",n._id,"")}}function P(c,e){if(1&c&&(t.TgZ(0,"div",28)(1,"p",29)(2,"a",30),t._uU(3),t.qZA()()()),2&c){const n=e.$implicit;t.xp6(2),t.s9C("href",n.link,t.LSH),t.xp6(1),t.Oqu(n.text)}}function x(c,e){if(1&c&&(t.TgZ(0,"div",25),t._UZ(1,"img",17),t.TgZ(2,"div",19)(3,"h4")(4,"a",23)(5,"p",26),t._uU(6),t.qZA()()(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"date"),t.qZA()(),t._UZ(10,"hr"),t.YNc(11,P,4,2,"div",27),t.qZA()),2&c){const n=e.$implicit;t.xp6(1),t.Q6J("src",n.cover[0],t.LSH),t.xp6(3),t.MGl("routerLink","/articles/list/",n._id,""),t.xp6(2),t.hij(" ",n.title," "),t.xp6(2),t.Oqu(t.lcZ(9,5,n.updatedAt)),t.xp6(3),t.Q6J("ngForOf",n.links)}}class s{constructor(e,n,o,d){this.serv=e,this.route=n,this.location=o,this.toast=d,this.pagNum=1,this.catogeryName=[],this.formSearch=new a.cw({title:new a.NI("")})}ngOnInit(){window.scrollTo(0,0);const e=String(this.route.snapshot.paramMap.get("title"));this.serv.getWithCatName(e).subscribe(n=>{this.catogeryName=n.data,this.AllArtOfcatogeryName=n.data}),this.serv.getArticles(this.pagNum).subscribe(n=>{this.articles=n.data.paginatedData.slice(-4)})}search(){""==this.formSearch.get("title").value?this.catogeryName=this.AllArtOfcatogeryName:this.serv.searchArticle(this.formSearch.get("title").value).subscribe({next:e=>{this.catogeryName=e.data},error:e=>{404==e.status&&this.toast.error("This Name Cannot be Searched","Error")}})}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(C.J),t.Y36(g.gz),t.Y36(r.Ye),t.Y36(O._W))};static#n=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-ar-details"]],decls:23,vars:4,consts:[[1,"images-nav"],[1,"header"],[1,"container"],[1,"left-sec"],["class","text-center",4,"ngIf"],["class","post d-flex",4,"ngFor","ngForOf"],[1,"right-sec"],[1,"search-btn",3,"formGroup","ngSubmit"],["type","text","placeholder","Search By Article Name...","formControlName","title"],["type","submit"],[1,"fa","fa-search"],[1,"recent-post"],["class","post",4,"ngFor","ngForOf"],[1,"text-center"],[1,"post","d-flex"],[1,"col-lg-4",3,"routerLink"],[1,"box_image"],["alt","",3,"src"],[1,"col-lg-8"],[1,"content-post"],[1,"edTitle",3,"routerLink"],[1,"post-defin"],[1,"testText",3,"title"],[3,"routerLink"],[1,"fa","fa-arrow-right"],[1,"post"],[2,"white-space","nowrap","width","15ch","text-overflow","ellipsis","overflow","hidden"],["class","archive",4,"ngFor","ngForOf"],[1,"archive"],[2,"border-bottom","1px solid #EEE","padding-bottom","10px"],[3,"href"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"News"),t.qZA()()(),t._UZ(4,"app-banner"),t.TgZ(5,"main")(6,"div",2)(7,"section",3),t.YNc(8,_,2,0,"h5",4),t.YNc(9,M,21,10,"div",5),t.qZA(),t.TgZ(10,"section",6)(11,"h3"),t._uU(12,"SEARCH"),t.qZA(),t._UZ(13,"hr"),t.TgZ(14,"form",7),t.NdJ("ngSubmit",function(){return o.search()}),t._UZ(15,"input",8),t.TgZ(16,"button",9),t._UZ(17,"i",10),t.qZA()(),t.TgZ(18,"h3"),t._uU(19,"RECENT POST"),t.qZA(),t._UZ(20,"hr"),t.TgZ(21,"div",11),t.YNc(22,x,12,7,"div",12),t.qZA()()()()),2&n&&(t.xp6(8),t.Q6J("ngIf",!o.catogeryName.length),t.xp6(1),t.Q6J("ngForOf",o.catogeryName),t.xp6(5),t.Q6J("formGroup",o.formSearch),t.xp6(8),t.Q6J("ngForOf",o.articles))},dependencies:[r.sg,r.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,g.rH,m.S,r.uU],styles:[".edTitle[_ngcontent-%COMP%]{text-transform:capitalize;border-left:3px solid #EEE;padding-left:5px}a[_ngcontent-%COMP%]{text-decoration:none!important}.images-nav[_ngcontent-%COMP%]{background-image:url(NewsNav.c3a80c0a3d6e8d1a.jpg);background-size:cover;background-attachment:fixed;height:60vh;display:block;color:#fff;margin-bottom:70px}.images-nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{top:90px;background-color:#0009;height:60vh;width:100%!important}.images-nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;position:relative;top:40%;text-align:center}.images-nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-letter{color:#ce7852}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr 1fr;gap:50px;margin-top:10px}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]{width:90%}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000c;margin-bottom:5px;font-size:1rem}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:#000;border-radius:10px;border:1px solid #000;margin-bottom:20px}.search-btn[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:1px solid #b93f0b;border-radius:10px;width:100%;padding:5px 0;margin-bottom:20px}.search-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding-right:10px}.search-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}.search-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;padding:5px 0 5px 10px}.search-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;padding:5px 0 5px 10px}.recent-post[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{margin-bottom:30px}.recent-post[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:auto}.post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]{margin-left:11px}.post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:8px;font-size:15px}.post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;transition:all .3s}.post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#b93f0b;transition:all .3s}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]   .archive[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:5px}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]   .archive[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px;line-height:25px}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]   .archive[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000c;transition:all .3s}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-sec[_ngcontent-%COMP%]   .archive[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#b93f0b;transition:all .3s}.left-sec[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{gap:20px}.left-sec[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.left-sec[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .box_image[_ngcontent-%COMP%]{width:215px;height:300px}.left-sec[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .box_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;border:2px solid #b93f0b}.content-post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:25px;transition:all .3s}.content-post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#b93f0b;transition:all .3s}.content-post[_ngcontent-%COMP%]   .post-defin[_ngcontent-%COMP%]{font-weight:700;font-size:13px;margin:10px 0;color:#000c}.content-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000000b3;line-height:25px;margin-bottom:10px;white-space:wrap;overflow:hidden;text-overflow:ellipsis}.content-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:17px;transition:all .3s}.content-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#b93f0b;transition:all .3s}@media (max-width:1199px){.search-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-right:35px}}@media (max-width:992px){.images-nav[_ngcontent-%COMP%]{height:40vh;background-size:contain;margin-bottom:30px}.images-nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:40vh}.images-nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.right-sec[_ngcontent-%COMP%]{width:100%}.recent-post[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{justify-content:flex-start}.post[_ngcontent-%COMP%]{flex-direction:column}.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}}@media (max-width:580px){main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{text-align:center;flex-direction:column}.left-sec[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .box_image[_ngcontent-%COMP%]{width:250px;margin:0 auto}.recent-post[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]{margin:20px auto;display:flex;align-items:center}.recent-post[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px}}@media (max-width:365px){.images-nav[_ngcontent-%COMP%]{height:30vh;background-size:contain;margin-bottom:30px}.images-nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:30vh}.images-nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:17px}.right-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:13px}.post[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:15px}.post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}.post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px}.post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   .post-defin[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .content-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:12px}.archive[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:15px}.archive[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}}"]})}var f=i(4466),u=i(1481),v=i(2707);function b(c,e){if(1&c&&(t.TgZ(0,"div",24)(1,"a",25),t._UZ(2,"img",26),t.qZA(),t.TgZ(3,"h4",27)(4,"a",28),t._uU(5),t.qZA()()()),2&c){const n=e.$implicit;t.xp6(2),t.s9C("src",null==n?null:n.cover[0],t.LSH),t.xp6(2),t.MGl("routerLink","/articles/list/",null==n?null:n._id,""),t.xp6(1),t.hij("",null==n?null:n.title.slice(0,21),"...")}}function w(c,e){if(1&c&&(t.TgZ(0,"h4")(1,"span",29),t._uU(2),t.qZA()()),2&c){const n=e.$implicit;t.xp6(1),t.MGl("routerLink","/articles/details/",n.title,""),t.xp6(1),t.Oqu(n.title)}}class p{constructor(e,n,o,d){this.route=e,this.metaTagService=n,this.serv=o,this.artCSer=d,this.datePipe=new r.uU("en-US")}ngOnInit(){window.scrollTo(0,0);const e=String(this.route.snapshot.paramMap.get("id"));this.serv.getArtWithId(e).subscribe(n=>{this.datas=n.data,this.serv.getWithCatName(this.datas?.categoryName).subscribe(o=>{this.getCatogry=o.data.slice(-3),this.date=this.datas.createdAt,this.keywords=[...this.datas.keywords],this.value=this.datePipe.transform(this.date,"dd/MM/yyyy"),this.metaTagService.updateTag({name:"date",content:`${this.value}`}),this.metaTagService.updateTag({name:"keywords",content:`${this.keywords}`})})}),this.artCSer.gitAllCatArt().subscribe(n=>{this.allCategory=n.data})}test(){setTimeout(()=>{window.location.reload()},1e3)}static#t=this.\u0275fac=function(n){return new(n||p)(t.Y36(g.gz),t.Y36(u.h_),t.Y36(C.J),t.Y36(v.h))};static#n=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-articles-list"]],decls:37,vars:9,consts:[[1,"images-nav"],[1,"header"],[2,"color","#ea895fbf"],[1,"pagds"],[1,"pag-content"],[1,"sidebar"],[1,"side-con-one"],[1,"content"],[1,"recent"],[1,"sid-ecent-post"],["class","content-set",4,"ngFor","ngForOf"],[1,"side-con-Two"],[4,"ngFor","ngForOf"],[1,"main"],["alt","Artical",1,"imgArticle",3,"src"],[1,"contentArtical"],[2,"border-left","1px solid #b4352a","padding-left","10px"],[1,"pragraph"],["target","_blank",3,"href"],[1,"endArtical"],["alt","the Artical",3,"src"],["alt","the Artical ",3,"src"],[1,"end-artical"],[1,"p-0","m-0"],[1,"content-set"],[1,"boxImage"],["alt","cover",3,"src"],[1,"boxTitle"],[3,"routerLink"],[1,"archives",3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1")(3,"span",2),t._uU(4,"R"),t.qZA(),t._uU(5,"ead Article"),t.qZA()()(),t._UZ(6,"app-banner"),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"h2",8),t._uU(13,"RECENT POST"),t.qZA(),t.TgZ(14,"div",9),t.YNc(15,b,6,3,"div",10),t.qZA()()(),t.TgZ(16,"div",11)(17,"h2",8),t._uU(18,"ARCHIVE"),t.qZA(),t.YNc(19,w,3,2,"h4",12),t.qZA()(),t.TgZ(20,"div",13)(21,"div",7)(22,"div"),t._UZ(23,"img",14),t.qZA(),t.TgZ(24,"div",15)(25,"h3",16),t._uU(26),t.qZA(),t.TgZ(27,"p",17),t._uU(28),t.qZA(),t.TgZ(29,"a",18),t._uU(30,"Read more About Artical"),t.qZA(),t.TgZ(31,"div",19),t._UZ(32,"img",20)(33,"img",21),t.qZA(),t.TgZ(34,"div",22)(35,"p",23),t._uU(36),t.qZA()()()()()()()),2&n&&(t.xp6(15),t.Q6J("ngForOf",o.getCatogry),t.xp6(4),t.Q6J("ngForOf",o.allCategory),t.xp6(4),t.s9C("src",null==o.datas?null:o.datas.cover[0],t.LSH),t.xp6(3),t.Oqu(null==o.datas?null:o.datas.title),t.xp6(2),t.Oqu(null==o.datas?null:o.datas.text),t.xp6(1),t.s9C("href",null==o.datas?null:o.datas.links[0].link,t.LSH),t.xp6(3),t.s9C("src",null==o.datas?null:o.datas.cover[1],t.LSH),t.xp6(1),t.s9C("src",null==o.datas?null:o.datas.cover[2],t.LSH),t.xp6(3),t.hij("Tags: ",o.datas.keywords,""))},dependencies:[r.sg,g.rH,m.S],styles:[".boxImage[_ngcontent-%COMP%]{height:100px;margin-bottom:10px}.boxImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;border:1px solid rgb(204,204,204)}.boxTitle[_ngcontent-%COMP%]{margin-left:10px;text-transform:capitalize;cursor:pointer}.boxTitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:all .3s}.images-nav[_ngcontent-%COMP%]{background-image:url(NewsNav.c3a80c0a3d6e8d1a.jpg);background-size:cover;background-attachment:fixed;height:60vh;display:block;color:#fff}.images-nav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{top:90px;background-color:#0009;height:60vh;width:100%!important}.images-nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;position:relative;top:40%;text-align:center}.pagds[_ngcontent-%COMP%]{display:flex;flex-direction:row;box-shadow:0 0 15px #0000004d;padding:80px 0;margin-left:auto;margin-right:auto}.pag-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-left:70px;padding-right:0}.sidebar[_ngcontent-%COMP%]{width:25%;max-width:100%;padding:0 15px}.side-con-one[_ngcontent-%COMP%]{border-bottom:#333 solid 2px;text-decoration:none}.recent[_ngcontent-%COMP%]{border-bottom:#333 solid 2px}.side-con-one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sid-ecent-post[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sid-ecent-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;margin:7px}.content-set[_ngcontent-%COMP%]{display:flex;padding-top:10px;margin:3px}.content-set[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;line-height:20px;color:#333;font-size:14px;font-weight:500}.content-set[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ce7852}.ARCHIVE[_ngcontent-%COMP%]{display:flex;flex-direction:column}.side-con-Three[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;margin:auto10px}.side-con-Three[_ngcontent-%COMP%]   .recent[_ngcontent-%COMP%]{margin-right:20px;border-bottom:2px solid #333;width:100%}.tag-hash[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-flow:wrap}.side-con-Three[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#333;height:50px;line-height:37px;background-color:#ebebeb;margin:7px 5px 5px;padding:5px}.side-con-Three[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ce7852}.main[_ngcontent-%COMP%]{width:100%;padding:0 20px}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:80%}.content[_ngcontent-%COMP%]   .imageArtica[_ngcontent-%COMP%]{width:300px;padding:20px 0}.imgArticle[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]   .inputSearch[_ngcontent-%COMP%]{height:40px;width:100%;outline:none;border:1px solid #e1e1e1;padding:0 44px 0 20px;margin:20px 0}h2[_ngcontent-%COMP%]{font-weight:900;font-size:x-large;color:#000;border-bottom:2px solid black}.contentArtical[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:900;font-size:x-large;color:#000;margin-top:20px;margin-bottom:20px}.dis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;width:20ch!important;overflow:hidden!important;text-overflow:ellipsis!important}.pragraph[_ngcontent-%COMP%]{color:#333;font-weight:600;color:#666;line-height:1.9;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif;text-align:left}.pragraph[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#ce7852}.centerartical[_ngcontent-%COMP%]{padding:30px;font-weight:1000px;font-size:x-large;color:#333}.endArtical[_ngcontent-%COMP%]{display:flex;max-width:100%;justify-content:space-between;margin:40px 0}.endArtical[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:49%}.end-artical[_ngcontent-%COMP%]{border-top:1px solid black;border-bottom:.6px solid #666;padding:4px 0;margin-bottom:7px;display:flex;justify-content:center;align-items:center}.archives[_ngcontent-%COMP%]{font-size:15px;background-color:#999;padding:5px 10px;color:#fff;cursor:pointer;transition:all .3s}.archives[_ngcontent-%COMP%]:hover{background-color:#ce7852;transition:all .3s}@media (min-width: 300px) and (max-width: 768px){body[_ngcontent-%COMP%]{margin:0;padding:5px;width:calc(100% + -0px)}.pagds[_ngcontent-%COMP%]{padding-bottom:5px;margin:0}.main[_ngcontent-%COMP%]{margin:auto;padding:auto;text-align:center;display:flex;flex-direction:row-reverse}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%}.pag-content[_ngcontent-%COMP%]{flex-direction:column-reverse;padding:0;margin:0 auto}.side-con-one[_ngcontent-%COMP%]{width:280px}.side-con-Two[_ngcontent-%COMP%]{display:inline-block;width:270px;margin:10px}.side-con-Three[_ngcontent-%COMP%]{width:300px;display:flex;flex-direction:row;margin-bottom:10px;border-bottom:#333 solid 2px}.centerartical[_ngcontent-%COMP%]{padding:20px 0 0}.content[_ngcontent-%COMP%]   .inputSearch[_ngcontent-%COMP%]{border:1px solid #e1e1e1;padding:0 40px 0 20px}.content[_ngcontent-%COMP%]   .imageArtica[_ngcontent-%COMP%]{width:100px;display:none;padding:20px 0}.sid-ecent-post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;margin:7px}.imgArticle[_ngcontent-%COMP%]{width:300px;height:300px;padding-top:10px;display:flex;align-content:center;flex-direction:row}.sidebar[_ngcontent-%COMP%]{width:25%}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column}}"]})}var A=i(2944),Z=i(2372),T=i(8647),y=i(4545),U=i(5536);let N=[{path:"list/:id",component:p},{path:"details/:title",component:s},{path:"home",component:Z.O},{path:"categories",component:A.u},{path:"categories_Art",component:U.f},{path:"aboutus",component:T.n},{path:"contactus",component:y.v}];class l{static#t=this.\u0275fac=function(n){return new(n||l)};static#n=this.\u0275mod=t.oAB({type:l});static#e=this.\u0275inj=t.cJS({imports:[f.m,r.ez,g.Bz.forChild(N)]})}}}]);