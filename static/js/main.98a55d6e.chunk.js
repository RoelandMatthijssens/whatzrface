(this.webpackJsonpwhatszrface=this.webpackJsonpwhatszrface||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/dummyPerson.9a77ac29.jpg"},130:function(e,t,a){e.exports=a(153)},135:function(e,t,a){},136:function(e,t,a){},142:function(e,t,a){var n={"./people/barack-obama.jpg":143,"./people/dummyPerson.jpg":102,"./people/elon-musk.jpg":144,"./people/marie-curie.jpg":145,"./people/robert-pattinson.jpg":146,"./people/wolfgang-amadeus-mozart.jpg":147};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=142},143:function(e,t,a){e.exports=a.p+"static/media/barack-obama.3d65446b.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/elon-musk.3c3f6866.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/marie-curie.a4112ba3.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/robert-pattinson.b036345d.jpg"},147:function(e,t,a){e.exports=a.p+"static/media/wolfgang-amadeus-mozart.dc1b1c11.jpg"},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),u=a.n(i),l=(a(135),a(73)),c=a(14),o=(a(136),a(31)),s=a(7),m=a(90),d=a(163),p=a(160),v=a(124),b=a(168),f=a(167),h=function(){return r.a.createElement(b.a,{bg:"light",expand:"lg"},r.a.createElement(b.a.Brand,{as:o.b,to:"/"},"Whatzr Face?"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{as:o.b,to:"play"},"Play"),r.a.createElement(f.a.Link,{as:o.b,to:"missed"},"Who did i miss"),r.a.createElement(f.a.Link,{as:o.b,to:"about"},"About"))))},g=a(114),E=a(158);var w=function(e){return e[Math.floor(Math.random()*e.length)]};var L=function(e,t){if(0===e.length)return t.length;if(0===t.length)return e.length;var a,n,r=[];for(a=0;a<=t.length;a++)r[a]=[a];for(n=0;n<=e.length;n++)r[0][n]=n;for(a=1;a<=t.length;a++)for(n=1;n<=e.length;n++)t.charAt(a-1)===e.charAt(n-1)?r[a][n]=r[a-1][n-1]:r[a][n]=Math.min(r[a-1][n-1]+1,Math.min(r[a][n-1]+1,r[a-1][n]+1));return r[t.length][e.length]},O=a(126),y=a(17),j=a.n(y),q=a(47),A=a(115),k=a(116),S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://query.wikidata.org/sparql";Object(A.a)(this,e),this.baseUrl=t}return Object(k.a)(e,[{key:"sparql",value:function(){var e=Object(q.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.baseUrl+"?query="+encodeURIComponent(t),e.abrupt("return",fetch(a,{headers:{Accept:"application/sparql-results+json"}}).then((function(e){return e.json()})).then(this.parseSparqlResult));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoviesForActor",value:function(){var e=Object(q.a)(j.a.mark((function e(t){var a,n,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:5,n='\n            SELECT distinct ?movie ?movieLabel\n            WHERE {\n                ?actor rdfs:label "'.concat(t,'"@en.\n                ?actor wdt:P106 ?occupation.\n                ?occupation wdt:P279+ wd:Q33999.\n                ?movie wdt:P161 ?actor.\n                ?movie wdt:P2142 ?boxOffice.\n                SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n            }\n            ORDER BY DESC(?boxOffice)\n            limit ').concat(a,"\n        "),e.abrupt("return",this.sparql(n));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getActorsForMovie",value:function(){var e=Object(q.a)(j.a.mark((function e(t){var a,n,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:10,n='\n            SELECT distinct ?movie ?movieLabel ?actor ?actorLabel ?genderLabel ?image\n            WHERE {\n                ?movie wdt:P31/wdt:P279* wd:Q11424.\n                ?movie rdfs:label "'.concat(t.movieLabel,'"@en.\n                ?movie wdt:P161 ?actor.\n                ?actor wdt:P21 ?gender.\n                ?actor wdt:P18 ?image.\n                OPTIONAL { ?actor wdt:P2218 ?netWorth }.\n                SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n            }\n            order by DESC(?netWorth)\n            limit ').concat(a,"\n        "),e.abrupt("return",this.sparql(n));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getActorsForMovies",value:function(){var e=Object(q.a)(j.a.mark((function e(t){var a=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(q.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getActorsForMovie(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDetailsForActor",value:function(){var e=Object(q.a)(j.a.mark((function e(t){var a,n,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,n='\n            SELECT distinct ?actor ?actorLabel ?image ?genderLabel\n            WHERE {\n                ?actor rdfs:label "'.concat(t,'"@en.\n                ?actor wdt:P106 ?occupation.\n                ?actor wdt:P21 ?gender\n                OPTIONAL{?actor wdt:P18 ?image}.\n                ?occupation wdt:P279* wd:Q33999.\n                SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n            }\n            limit ').concat(a,"\n        "),e.abrupt("return",this.sparql(n).then((function(e){return e[0]})));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRelatedActors",value:function(){var e=Object(q.a)(j.a.mark((function e(t){var a=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getMoviesForActor(t.actorLabel).then((function(e){return a.getActorsForMovies(e)})).then((function(e){var a,n={},r=Object(l.a)(e);try{for(r.s();!(a=r.n()).done;){var i,u=a.value,c=Object(l.a)(u);try{for(c.s();!(i=c.n()).done;){var o=i.value,s=o.actorLabel,m={movieLabel:o.movieLabel,movie:o.movie};s in n?n[s].movies.push(m):n[s]={guessed:t.actorLabel===s||null,encountered:t.actorLabel===s,relatedActorsPath:[].concat(Object(O.a)(t.relatedActorsPath||[]),[[[t,m,o]]]),actorLabel:s,actor:o.actor,image:o.image,genderLabel:o.genderLabel,movies:[m]}}}catch(d){c.e(d)}finally{c.f()}}}catch(d){r.e(d)}finally{r.f()}return n})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseSparqlResult",value:function(e){var t=e.results,a=function(e){var t=e.type,a=e.value;switch(t){case"literal":case"uri":default:return a}};return t.bindings.map((function(e){return function(e){for(var t={},n=0,r=Object.entries(e);n<r.length;n++){var i=Object(c.a)(r[n],2),u=i[0],l=i[1],o=a(l);t[u]=o}return t}(e)}))}}]),e}();var C=function(e,t){return e.length<=t?e:e.slice(0,t)+"..."};function x(){var e=Object(g.a)(["\n    width: 500px;\n    height: 900px;\n"]);return x=function(){return e},e}a(117).a.div(x());var P=a(67),N=a(170),R=a(166),G=a(159),I=a(33),M=a(102),T=a.n(M),D=function(e){var t=e.actor,a=e.handleClick;return t?r.a.createElement(G.a,{variant:"success",type:"button",onClick:a},"Start with ","female"===t.genderLabel?"her":"him","!"):""},F=function(e){var t=e.chooseInitialActor,a=new S,i=Object(n.useState)(null),u=Object(c.a)(i,2),l=u[0],o=u[1],s=Object(n.useState)(null),m=Object(c.a)(s,2),d=m[0],b=m[1],f=function(){t(d)},h=I.a().shape({name:I.b().required("*Name is required")});return r.a.createElement(p.a,null,r.a.createElement(v.a,null,d?r.a.createElement(E.a,{src:d.image,fluid:!0}):r.a.createElement(E.a,{src:T.a,fluid:!0})),r.a.createElement(v.a,null,r.a.createElement(P.a,{validationSchema:h,initialValues:{name:"Daniel Radcliffe"},onSubmit:function(e,t){var n=e.name,r=t.setSubmitting,i=t.resetForm;r(!0),o(""),a.getDetailsForActor(n).then((function(e){e?b(e):o("actor not found"),r(!1),i()}))}},(function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),n=e.handleBlur,i=e.handleSubmit,u=e.isSubmitting;return r.a.createElement(R.a,{onSubmit:i},r.a.createElement(R.a.Group,{controlId:"formName"},r.a.createElement(R.a.Control,{type:"text",name:"name",placeholder:"Who do you want to start with?",onChange:a,onBlur:n,value:t.guess})),l?r.a.createElement(N.a,{variant:"warning"},l):"",r.a.createElement(G.a,{variant:"primary",type:"submit",disabled:u},"Submit"),r.a.createElement(D,{actor:d,handleClick:f}))}))))},U=a(161),W=a(169),V=a(162);function B(e){var t=e.movie;return t.movieLabel.length>20?r.a.createElement(W.a,{delay:{show:150,hide:200},overlay:function(e){return r.a.createElement(U.a,Object.assign({id:"button-tooltip"},e),t.movieLabel)},placement:"top"},r.a.createElement("span",null,C(t.movieLabel,20))):C(t.movieLabel,20)}var H=function(e){var t=e.currentActor,a=e.makeGuess,i=e.next,u=(e.guessCount,e.guessResult),l=Object(n.useState)(0),o=Object(c.a)(l,2),s=o[0],m=o[1],d=I.a().shape({guess:I.b().required("*Name is required")}),b="Whatz".concat("female"===t.genderLabel?"r":"iz"," Face?");return r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(E.a,{src:t.image,fluid:!0}),r.a.createElement(V.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"original actor"),r.a.createElement("th",null,"played in"),r.a.createElement("th",null,"with"))),r.a.createElement("tbody",null,t.relatedActorsPath.map((function(e,a){var n=Object(c.a)(e,1),i=Object(c.a)(n[0],3),u=i[0],l=i[1],o=i[2];return r.a.createElement("tr",{key:"".concat(u.actorLabel,"|").concat(l.movieLabel,"|").concat(o.actorLabel)},r.a.createElement("td",null,a+1),r.a.createElement("td",null,u.actorLabel),r.a.createElement("td",null,r.a.createElement(B,{movie:l})),r.a.createElement("td",null,a===t.relatedActorsPath.length-1?r.a.createElement("b",null,b):o.actorLabel))}))))),r.a.createElement(v.a,null,r.a.createElement(P.a,{validationSchema:d,initialValues:{guess:""},onSubmit:a},(function(e){var a=e.values,n=(e.errors,e.touched,e.handleChange),l=e.handleBlur,c=e.handleSubmit,o=e.isSubmitting,d=e.resetForm,p=e.setFieldValue;return r.a.createElement(R.a,{onSubmit:c},r.a.createElement(R.a.Group,{controlId:"formName"},r.a.createElement(R.a.Control,{type:"text",name:"guess",placeholder:b,onChange:n,onBlur:l,value:a.guess})),"EXACT"===u?r.a.createElement(N.a,{variant:"success"}," Gottem! Nice!"):"CLOSE_ENOUGH"===u?r.a.createElement(N.a,{variant:"secondary"}," eh, close enough! it was ",t.actorLabel):"PARTIAL"===u?r.a.createElement(N.a,{variant:"warning"}," We are looking for the full name!"):"CLOSE"===u?r.a.createElement(N.a,{variant:"warning"}," close, but not quite!"):"WRONG"===u?r.a.createElement(N.a,{variant:"danger"}," Not even close!"):"",r.a.createElement(G.a,{variant:"primary",type:"submit",disabled:o},"Submit"),r.a.createElement(G.a,{variant:"secondary",type:"button",disabled:o,onClick:function(){!function(e){var a=t.actorLabel.slice(0,s+1);m((function(e){return e+1})),e("guess",a)}(p)}},"Hint!"),function(e){var t=function(){m(0),e(),i()};return["EXACT","CLOSE_ENOUGH"].includes(u)?r.a.createElement(G.a,{onClick:t,variant:"success",type:"button"},"Next"):r.a.createElement(G.a,{onClick:t,variant:"danger",type:"button"},"Skip")}(d))}))))},_=function(e){var t=e.children;return r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(h,null))),r.a.createElement(p.a,null,r.a.createElement(d.a,null,t)))},z=function(e){var t=e.currentActor,a=e.chooseInitialActor,n=e.makeGuess,i=e.next,u=e.guessCount,l=e.guessResult;return r.a.createElement(_,null,t?r.a.createElement(H,{currentActor:t,makeGuess:n,next:i,guessCount:u,guessResult:l}):r.a.createElement(F,{chooseInitialActor:a}))},Q=function(){return r.a.createElement(_,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis, mi sit amet dapibus rhoncus, nibh sapien vehicula magna, ac scelerisque metus nibh sed mi. In porta orci neque, id condimentum urna fermentum vitae. Vivamus vehicula orci ligula. Etiam suscipit, mauris ut vulputate dignissim, massa arcu venenatis ex, eu euismod velit nibh sit amet sapien. Aenean semper ipsum sed convallis sollicitudin. Donec et bibendum ligula. Vivamus at molestie ligula. Donec viverra magna eu aliquam porttitor. Morbi sed dolor a mauris imperdiet fermentum eget eu nisl. Sed non nisl non felis dapibus accumsan quis vitae neque. Duis fringilla nisi mauris, in ullamcorper ante blandit tristique. Donec ac nulla nisl. Curabitur vel eros justo."),r.a.createElement("p",null,"Nunc finibus, risus et feugiat sollicitudin, ligula purus imperdiet ipsum, vel viverra metus ante vitae tellus. Cras lobortis mauris et mauris rhoncus blandit. Pellentesque eleifend enim a facilisis molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis convallis leo. Donec pharetra eleifend ipsum. Donec pharetra gravida tortor, quis commodo est molestie in. Sed id nisi vel nisi aliquet placerat. Sed eget lobortis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris at justo lobortis turpis viverra ultricies."),r.a.createElement("p",null,"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus leo justo, vestibulum non arcu at, laoreet mattis leo. Aenean condimentum risus quis ex tincidunt, vitae tristique lorem ornare. Pellentesque nec ex quis dolor sagittis ultrices. Maecenas eu leo lectus. In malesuada purus magna, vitae interdum lacus interdum quis. Praesent dictum in enim eu vehicula. Aliquam hendrerit diam vel mi aliquam, quis pulvinar purus consequat. Quisque tincidunt eu leo quis facilisis. Maecenas cursus auctor augue. Nullam lacinia lectus eget ante sollicitudin sodales. Sed nisi libero, tristique quis placerat eget, pharetra sit amet sapien. Cras vel tellus sem."),r.a.createElement("p",null,"Nulla vitae odio tempus, vehicula eros vitae, tincidunt risus. Aenean sed sapien sed lacus ultrices egestas non non quam. Praesent non eros mi. Vivamus iaculis varius ex in sollicitudin. Suspendisse vulputate ante leo, non viverra ipsum vestibulum quis. Aenean mauris felis, consequat vel nisl et, faucibus eleifend mauris. Fusce quis libero ac mi volutpat efficitur vitae ut dui. Aliquam et hendrerit massa, eget placerat dui. Nullam ultrices, nulla at pharetra blandit, velit ipsum efficitur orci, a aliquam felis magna et orci. Duis id tristique ex, sed ultrices tellus. Donec sit amet ex sit amet orci rhoncus finibus sit amet sit amet nisl. Nulla facilisi. Sed varius ex ut nisi blandit, sit amet volutpat tellus finibus."),r.a.createElement("p",null,"Curabitur convallis augue ligula, a interdum arcu consectetur a. Integer sodales ligula eget tellus consequat, sit amet tincidunt orci fringilla. Donec maximus nisi nulla, in ultrices tellus pretium vel. Suspendisse vel justo rutrum, placerat quam at, placerat augue. Etiam cursus tellus at dolor euismod, sit amet convallis est hendrerit. Etiam iaculis tincidunt bibendum. Pellentesque pharetra nibh ut sollicitudin fermentum. Vestibulum libero quam, pharetra sed elit vel, posuere laoreet enim. Phasellus tempor porttitor venenatis. Aliquam tincidunt dui vitae lobortis tempus. Nunc non cursus nulla, a tristique sapien. Nunc dictum ultrices metus, eu blandit neque commodo sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."))},X=a(164);var J=function(){return r.a.createElement(_,null,r.a.createElement(X.a,null,r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("p",null,r.a.createElement(o.b,{to:"/play"},r.a.createElement(G.a,{variant:"primary"},"Start Playing Now!")))))},Y=a(171),$=a(165);function K(e){var t=e.actor;return r.a.createElement(Y.a,{style:{width:"18rem"}},r.a.createElement(Y.a.Img,{variant:"top",src:t.image}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,t.actorLabel)))}var Z=function(e){var t=e.actors,a=Object.values(t).filter((function(e){return!e.guessed&&e.encountered}));return r.a.createElement(_,null,r.a.createElement("h1",null,"you missed ",a.length," actors"),r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement($.a,null,a.map((function(e){return r.a.createElement(K,{key:e.actorLabel,actor:e})}))))))};var ee=function(){var e=new S,t=Object(n.useState)(null),a=Object(c.a)(t,2),i=a[0],u=a[1],d=Object(n.useState)(0),p=Object(c.a)(d,2),v=p[0],b=p[1],f=Object(n.useState)(""),h=Object(c.a)(f,2),g=h[0],E=h[1],O=Object(n.useState)([]),y=Object(c.a)(O,2),j=y[0],q=y[1],A=function(e){return Object.values(e).filter((function(e){return!e.encountered}))},k=function(e){var t=w(A(e));console.log("next to guess: ".concat(t.actorLabel)),u(t)},C=function(t){e.getRelatedActors(t).then((function(e){q((function(t){return x(t,e)}))}))},x=function(e,t){for(var a=0,n=Object.entries(t);a<n.length;a++){var r=Object(c.a)(n[a],2),i=r[0],u=r[1];if(i in e){var o,s=e[i],m=Object(l.a)(u.movies);try{for(m.s();!(o=m.n()).done;){var d=o.value;s.movies.map((function(e){return e.movieLabel})).includes(d.movieLabel)||s.movies.push(d)}}catch(p){m.e(p)}finally{m.f()}}else e[i]=u}return e},P=function(e){var t=L(i.actorLabel.toLowerCase(),e.toLowerCase());return 0===t?"EXACT":t<=Math.ceil(.1*i.actorLabel.length)?"CLOSE_ENOUGH":new RegExp("\\b".concat(e.toLowerCase(),"\\b"),"i").test(i.actorLabel.toLowerCase())?"PARTIAL":t<=Math.ceil(.15*i.actorLabel.length)?"CLOSE":"WRONG"};return r.a.createElement(o.a,null,r.a.createElement(m.a,null,r.a.createElement(s.a,{exact:!0,strict:!0,path:"/"},r.a.createElement(J,null)),r.a.createElement(s.a,{exact:!0,strict:!0,path:"/play"},r.a.createElement(z,{currentActor:i,chooseInitialActor:function(t){e.getRelatedActors(t).then((function(e){q(e),k(e)}))},makeGuess:function(e,t){var a=e.guess,n=t.setSubmitting;n(!0),b((function(e){return e+1})),E(P(a)),n(!1)},next:function(){var e=["EXACT","CLOSE_ENOUGH"].includes(g);q((function(t){return t[i.actorLabel].encountered=!0,t[i.actorLabel].guessed=e,t})),e&&A(j).length<1e3&&C(i),b(0),E(null),k(j)},guessCount:v,guessResult:g})),r.a.createElement(s.a,{exact:!0,strict:!0,path:"/missed"},r.a.createElement(Z,{actors:j})),r.a.createElement(s.a,{exact:!0,strict:!0,path:"/about"},r.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(152);u.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.98a55d6e.chunk.js.map