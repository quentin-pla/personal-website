(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{35:function(e,a,t){e.exports=t(52)},42:function(e,a,t){},43:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(11),r=t.n(l),i=(t(40),t(41),t(42),t(43),t(54)),s=t(55),m=t(7),o=t.n(m);var d=function(){return c.a.createElement(i.a,{id:"accueil",className:"h-100 text-white"},c.a.createElement(s.a,{className:"col-12 col-md"},c.a.createElement("div",{id:"bio-container"},c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeInUp",animateOut:"animate__animated animate__fadeOutDown"},c.a.createElement("h1",null,"Quentin PLA"),c.a.createElement("h2",null,"\xc9tudiant en informatique"),c.a.createElement("h3",null,"MASTER 1")))),c.a.createElement(s.a,{className:"col-12 col-md"},c.a.createElement("img",{className:"img-fluid",id:"face",src:"/moi.jpg",alt:"visage"})),c.a.createElement("img",{className:"tentacle1",src:"/tentacle1.svg",alt:"tentacle"}),c.a.createElement("img",{className:"tentacle2 d-none d-md-block",src:"/tentacle2.svg",alt:"tentacle"}),c.a.createElement("img",{className:"obscrax d-none d-md-block",src:"/obscrax.svg",alt:"obscrax"}))},u=t(60),E=t(56),h=t(57),p=t(58),f=t(2),g=t.n(f),v=t(12);function N(){return c.a.createElement("div",{className:"step-icon"},c.a.createElement(E.a,{size:20,color:"white"}),c.a.createElement(h.a,{size:20,color:"#50ba69"}))}function b(){return c.a.createElement("div",{className:"step-icon"},c.a.createElement(E.a,{size:20,color:"white"}),c.a.createElement(p.a,{size:20,color:"#e39036"}))}var w=function(){var e={first:192,second:-62,third:116,fourth:-140,fifth:40},a=void 0;function t(){var e=g()(window).width();if(e>768){var a=100*e/1440+"%",t=-200+Math.round(100*e/1440*2)+"px";g()("#responsive-step").css("transform","scale("+a+") translateX("+t+")")}else{var n=60+(60*e/375-60)/2+"%",c=-Math.round(20*e/375)+"px";g()("#responsive-step").css("transform","scale("+n+") translateY("+c+")")}}return g()(document).ready((function(){t(),g()(".step-container").hover((function(){var t=g()(this).attr("class");a=t.split(" ")[2];var n=v.isMobile?42:23,c=t.includes("up")?e[a]+n:e[a]-n,l=1.2;v.isMobile&&(l=1.5),g()(this).css("transform","scale("+l+")"),g()(this).css("top","calc(40% + "+c+"px")}),(function(){var t=e[a];g()(this).css("transform","rotateX(30deg) rotateY(-36deg)"),g()(this).css("top","calc(40% + "+t+"px")})),g()(window).resize((function(){t()}))})),c.a.createElement(i.a,{id:"parcours",className:"h-100"},c.a.createElement(s.a,{className:"col-12 col-md"},c.a.createElement("div",{id:"parcours-container"},c.a.createElement("h1",null,"Parcours"),c.a.createElement("h3",null,"Passionn\xe9 dans les domaines du design, web et applications mobiles, je souhaiterais devenir d\xe9veloppeur full stack."))),c.a.createElement(s.a,{className:"col-12 col-md",id:"responsive-step"},c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,offset:1e3},c.a.createElement("div",{className:"step-container up first"},c.a.createElement("h1",null,"BAC STI2D"),c.a.createElement("h2",null,"2017"),c.a.createElement(N,null))),c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,offset:1e3},c.a.createElement("div",{className:"step-container up third"},c.a.createElement("h1",null,"LICENCE 3 INFOR-",c.a.createElement("br",null),"MATIQUE"),c.a.createElement("h2",null,"2019/2020"),c.a.createElement(N,null))),c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,offset:1e3},c.a.createElement("div",{className:"step-container up fifth"},c.a.createElement("h1",null,"DEV FULL STACK"),c.a.createElement("h2",null,"FUTUR"))),c.a.createElement("img",{id:"road",src:"/road.svg",width:100,alt:"route"}),c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,offset:1e3},c.a.createElement("div",{className:"step-container down second"},c.a.createElement("h1",null,"DUT INFOR-",c.a.createElement("br",null),"MATIQUE"),c.a.createElement("h2",null,"2017/2019"),c.a.createElement(N,null))),c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn",animateOnce:!0,offset:1e3},c.a.createElement("div",{className:"step-container down fourth"},c.a.createElement("h1",null,"MASTER 1 INFOR-",c.a.createElement("br",null),"MATIQUE"),c.a.createElement("h2",null,"2020/2021"),c.a.createElement(b,null)))))},y=t(27),k=t(28),C=t(17),x=t(34),_=t(33),I=t(23);function S(e){return c.a.createElement(o.a,{delay:e.delay,animateIn:"animate__animated animate__fadeInUp"},c.a.createElement("div",{onClick:function(){return v.isMobile?e.handleCategory(e.code):null},onMouseEnter:function(){return v.isMobile?null:e.handleCategory(e.code)},className:"d-flex category-btn my-auto"},c.a.createElement("div",{className:"gradient-div d-none d-md-block"}),c.a.createElement("div",{className:"my-auto w-100 position-relative"},e.name)))}function A(e){var a,t=null!==(a={web:[["Langages","HTML \xb7 CSS \xb7 PHP \xb7 JAVASCRIPT"],["Frameworks","Bootstrap \xb7 Laravel \xb7 React \xb7 Express"],["IDE","PHPStorm \xb7 ECLIPSE"]],prog:[["Langages","C++ \xb7 JAVA \xb7 PYTHON"],["Frameworks","JAVAFX \xb7 Swing"],["IDE","IntelliJ IDEA \xb7 CLion \xb7 PyCharm \xb7 QTCreator"]],bdd:[["Langages","SQL \xb7 PL/SQL"],["SGBD","MySQL \xb7 MariaDB"],["Applications web","phpMyAdmin \xb7 MongoDB Atlas"]],team:[["Versionnage","Git \xb7 GitHub \xb7 SourceTree"],["Gestion de projet","Trello \xb7 SCRUM"]]}[e.category])&&void 0!==a?a:null;return c.a.createElement("div",{id:"category-content",className:"d-flex flex-wrap"},c.a.createElement("h1",{className:"d-block d-md-none"},{web:"Web",prog:"Programme",bdd:"Base de donn\xe9es",team:"Travail d'\xe9quipe"}[e.category]),null!==t?t.map((function(e,a){return c.a.createElement(s.a,{key:a,className:"col-12 col-md my-2 my-md-0"},c.a.createElement("h3",null,e[0]),c.a.createElement("h4",null,e[1]))})):null)}var P=function(e){Object(x.a)(t,e);var a=Object(_.a)(t);function t(e){var n;return Object(y.a)(this,t),(n=a.call(this,e)).state={activeCategory:"",modalShow:!1},n.handleCategory=n.handleCategory.bind(Object(C.a)(n)),n}return Object(k.a)(t,[{key:"handleCategory",value:function(e){this.setState({activeCategory:e,modalShow:!0})}},{key:"render",value:function(){var e=this;return v.isMobile||g()(document).ready((function(){!function(){var e=g()("#category-content");g()(".category-btn").hover((function(){g()(this).children(".gradient-div").css("opacity","0"),e.css({top:"40px","max-height":"200px",padding:".5rem 0"})}),(function(){g()(this).children(".gradient-div").css("opacity","1"),e.css({top:"20px","max-height":"0",padding:"0"})}))}()})),c.a.createElement(i.a,{id:"competences",className:"justify-content-center text-center"},c.a.createElement("div",{className:"m-auto"},c.a.createElement("h1",null,"Comp\xe9tences"),c.a.createElement("div",{className:"p-5"},c.a.createElement(i.a,{id:"buttons-container",className:"justify-content-center"},c.a.createElement(S,{handleCategory:this.handleCategory,code:"web",name:"Web",delay:0}),c.a.createElement(S,{handleCategory:this.handleCategory,code:"prog",name:"Programme",delay:100}),c.a.createElement(S,{handleCategory:this.handleCategory,code:"bdd",name:"Base de donn\xe9es",delay:200}),c.a.createElement(S,{handleCategory:this.handleCategory,code:"team",name:"Travail d'\xe9quipe",delay:300})),v.isMobile?c.a.createElement(I.a,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},size:"md",centered:!0},c.a.createElement(I.a.Body,null,c.a.createElement(i.a,null,c.a.createElement(A,{category:this.state.activeCategory})))):c.a.createElement(i.a,{className:"justify-content-center position-absolute"},c.a.createElement(A,{category:this.state.activeCategory})))),c.a.createElement("img",{className:"tentacle3",src:"/tentacle3.svg",alt:"tentacle"}))}}]),t}(n.Component),T=t(20),j=t.n(T);function M(){return c.a.createElement("div",{className:"text-center d-md-none"},c.a.createElement(j.a,{className:"mySwipe",swipeOptions:{widthOfSiblingSlidePreview:30}},c.a.createElement(O,null)))}function O(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.laprovence.com/",className:"stretched-link"}," "),c.a.createElement("div",{id:"laprovence-top",className:"top"},c.a.createElement("img",{className:"img-fluid mb-1",width:230,src:"/logo-laprovence.jpg",alt:"laProvence"})),c.a.createElement("div",{id:"laprovence",className:"body pt-1"},c.a.createElement("h4",{className:"date mb-2"},"2019"),c.a.createElement("h4",{className:"stage m-0"},"\u2022 CDD 1 mois (Juillet)"),c.a.createElement("h4",{className:"stage mb-3"},"\u2022 Stage 2 mois (Avril)"),c.a.createElement("h4",{className:"desc"},"Aide \xe0 la r\xe9alisation d\u2019une application web Laravel pour le portage de journaux"))),c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.buvettedulac.fr/",className:"stretched-link"}," "),c.a.createElement("div",{id:"buvettedulac-top",className:"top"},c.a.createElement("img",{className:"img-fluid",width:80,src:"/logo-buvette.PNG",alt:"Buvettedulac"})),c.a.createElement("div",{id:"buvettedulac",className:"body pt-2"},c.a.createElement("h4",{className:"date mb-2"},"2020"),c.a.createElement("h4",{className:"desc"},"R\xe9alisation d\u2019une application web REACT permettant de g\xe9rer les menus du jour d'une buvette"))),c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cc7.company/",className:"stretched-link"}," "),c.a.createElement("div",{id:"cc7-top",className:"top"},c.a.createElement("img",{className:"img-fluid",width:110,src:"/cc7-logo.svg",alt:"CC7"})),c.a.createElement("div",{id:"cc7",className:"body pt-2"},c.a.createElement("h4",{className:"date mb-2"},"2020"),c.a.createElement("h4",{className:"desc"},"R\xe9alisation d\u2019une application web REACT de vente de cr\xe9ations uniques"))),c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/quentin-pla-447413190/",className:"stretched-link"}," "),c.a.createElement("div",{id:"linkedin-top",className:"top"},c.a.createElement("img",{className:"img-fluid",width:110,src:"/link.png",alt:"linkedin"})),c.a.createElement("div",{id:"linkedin",className:"body pt-2"},c.a.createElement("h4",{className:"date mb-2"},"2017/2020"),c.a.createElement("h4",{className:"desc"},"Profil LinkedIn pr\xe9sentant mon exp\xe9rience depuis 2017"))))}var L=function(){return c.a.createElement(i.a,{id:"experience",className:"justify-content-center text-center"},c.a.createElement(s.a,{className:"m-auto px-0"},c.a.createElement("h1",{className:"mb-5"},"Exp\xe9riences"),c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn"},c.a.createElement("div",{className:"justify-content-center d-none d-md-flex"},c.a.createElement(O,null)),c.a.createElement("div",{className:"d-block d-md-none"},c.a.createElement(M,null)))),c.a.createElement("img",{className:"tentacle2",src:"/tentacle2.svg",alt:"tentacle"}))};function R(){return c.a.createElement("div",{className:"text-center d-md-none"},c.a.createElement(j.a,{className:"mySwipe",swipeOptions:{widthOfSiblingSlidePreview:30}},c.a.createElement(B,null)))}function B(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://nodejs-gambling.herokuapp.com/",className:"stretched-link"}," "),c.a.createElement("div",{className:"p-3 text-center"},c.a.createElement("img",{className:"img-fluid mb-1",width:300,src:"/casino-logo.svg",alt:"Casino"}),c.a.createElement("h4",{className:"date mb-2"},"2020"),c.a.createElement("h4",null,"Casino - Roulette"))),c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gestion-bibi-hotels.herokuapp.com/",className:"stretched-link"}," "),c.a.createElement("div",{className:"p-3 text-center"},c.a.createElement("img",{className:"img-fluid mb-1",width:180,src:"/logo-bibi.PNG",alt:"Bibi"}),c.a.createElement("h4",{className:"date mb-2"},"2020"),c.a.createElement("h4",null,"Gestion cha\xeene h\xf4tels"))),c.a.createElement("div",{className:"card"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/quentin-pla/work#projets-et-r%C3%A9alisations",className:"stretched-link"}," "),c.a.createElement("div",{className:"p-3 text-center"},c.a.createElement("img",{className:"img-fluid mb-1",width:180,src:"/github.png",alt:"Github"}),c.a.createElement("h4",{className:"date mb-2"},"2017/2020"),c.a.createElement("h4",null,"Profil GitHub"))))}var D=function(){return c.a.createElement(i.a,{id:"realisations",className:"justify-content-center text-center"},c.a.createElement(s.a,{className:"m-auto px-0"},c.a.createElement("h1",{className:"mb-5"},"R\xe9alisations"),c.a.createElement(o.a,{animateIn:"animate__animated animate__fadeIn"},c.a.createElement("div",{className:"justify-content-center d-none d-md-flex"},c.a.createElement(B,null)),c.a.createElement("div",{className:"d-block d-md-none"},c.a.createElement(R,null)))),c.a.createElement("img",{className:"tentacle1",src:"/tentacle1.svg",alt:"tentacle"}))},q=t(59);var F=function(){return c.a.createElement(i.a,{id:"contact",className:"justify-content-center text-center"},c.a.createElement("div",{className:"m-auto"},c.a.createElement("div",{className:"d-flex flex-column align-items-center p-3 text-left"},c.a.createElement("img",{className:"mb-5",width:150,src:"/obscrax.svg",alt:"email"}),c.a.createElement("a",{href:"mailto:quentin-pla@hotmail.fr",className:"contact-item"},c.a.createElement(q.a,{size:33})," quentin-pla",c.a.createElement(q.a,{size:36,id:"fake-at"}),"hotmail.fr"),c.a.createElement("a",{href:"https://github.com/quentin-pla",target:"_blank",rel:"noopener noreferrer",className:"contact-item"},c.a.createElement("img",{width:40,className:"p-1",src:"/github-white.png",alt:"github"})," quentin-pla"),c.a.createElement("a",{href:"https://www.linkedin.com/in/quentin-pla-447413190/",target:"_blank",rel:"noopener noreferrer",className:"contact-item"},c.a.createElement("img",{width:40,className:"p-1",src:"/link-white.png",alt:"linkedin"})," Quentin PLA"))))},U=t(61);function z(){var e=!1;function a(a){g()("html,body").animate({scrollTop:g()("#"+a).offset().top},"slow",(function(){setTimeout((function(){e=!1}),100)}))}g()(document).ready((function(){var a={accueil:g()("#accueil-anchor"),parcours:g()("#parcours-anchor"),competences:g()("#competences-anchor"),experience:g()("#experience-anchor"),realisations:g()("#realisations-anchor"),contact:g()("#contact-anchor")};g()("#summary").click((function(){g()(this).addClass("opened")})),g()(document).on("click","#close-btn",(function(){g()("#summary").removeClass("opened")})),g()("#summary>div>p").click((function(a){e=!0,n(g()(a.target))}));var t=g()(window).height();function n(e){var a=g()("#summary>div>p.active");"active"!==e.attr("class")&&(e.addClass("active"),a.removeClass("active"))}g()(window).scroll((function(){!function(){if(!e){var c=100*g()(window).scrollTop()/t;c<50?n(a.accueil):c>=90&&c<150?n(a.parcours):c>=190&&c<250?n(a.competences):c>=290&&c<350?n(a.experience):c>=390&&c<450?n(a.realisations):c>=490&&c<550&&n(a.contact)}}()}))}));var t=c.a.createElement("div",null,c.a.createElement("p",{id:"accueil-anchor",onClick:function(){return a("accueil")},className:"active"},"Accueil"),c.a.createElement("p",{id:"parcours-anchor",onClick:function(){return a("parcours")},className:""},"Parcours"),c.a.createElement("p",{id:"competences-anchor",onClick:function(){return a("competences")},className:""},"Comp\xe9tences"),c.a.createElement("p",{id:"experience-anchor",onClick:function(){return a("experience")},className:""},"Exp\xe9riences"),c.a.createElement("p",{id:"realisations-anchor",onClick:function(){return a("realisations")},className:""},"R\xe9alisations"),c.a.createElement("p",{id:"contact-anchor",onClick:function(){return a("contact")},className:""},"Contact"),c.a.createElement("div",{className:"text-right d-block d-md-none",style:{marginRight:"10px"}},c.a.createElement(U.a,{id:"close-btn",size:30})));return c.a.createElement("div",{id:"summary",className:""},t,c.a.createElement("img",{className:"d-block d-md-none",width:30,id:"obscrax-btn",src:"/obscrax.svg",alt:"bouton"}))}var G=function(){return c.a.createElement(u.a,{fluid:!0,className:"h-100 noselect"},c.a.createElement(z,null),c.a.createElement(d,null),c.a.createElement(w,null),c.a.createElement(P,null),c.a.createElement(L,null),c.a.createElement(D,null),c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e153cfba.chunk.js.map