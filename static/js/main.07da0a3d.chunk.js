(this["webpackJsonptsv-explorer"]=this["webpackJsonptsv-explorer"]||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return b})),n.d(t,"default",(function(){return v}));var a,r=n(16),s=n(17),i=n(8),c=n(1),o=n(14),l=n(0),u=n(66),d={},p={},f=function(e,t,n){return Object(i.a)(Object(i.a)({},e),Object.keys(t).reduce((function(e,a){return e["".concat(n,".").concat(a)]=t[a],e}),{}))};(a=u,a.keys().filter((function(e){return"./index.js"!==e})).map((function(e){return{context:e.replace("./","").replace("/index.js","").replace("/","."),store:o.a.getComponent(e,a).default}}))).forEach((function(e){var t=e.context,n=e.store;n.state&&(d=f(d,n.state,t)),n.actions&&(p=f(p,n.actions,t))}));var h=function(e,t,n){return delete e[t],Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},t,n))},j=function(e,t){var n=t.action,a=t.payload,r=n.split(".");r.pop();var s=r.join(".");return p[n]({state:e,commit:function(t,n){return h(e,"".concat(s,".").concat(t),n)}},a)},b=Object(c.createContext)(d);function v(e){var t=e.children,n=Object(c.useReducer)(j,d),a=Object(r.a)(n,2),s=a[0],i=a[1];return Object(l.jsx)(b.Provider,{value:{state:s,dispatch:i,commit:function(e,t){return h(s,e,t)}},children:t})}},function(e,t,n){"use strict";function a(e){return"".concat(e,"_").concat((new Date).getTime())}n.d(t,"a",(function(){return a}))},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=n(3),s=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getComponents",value:function(e){var t=this;return e.keys().map((function(n){return t.getComponent(n,e)}))}},{key:"getComponent",value:function(e,t){return t(e)}}]),e}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(3),s=n(5),i=n(4),c=n(1),o=(n(47),n(0)),l=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.color?"c-btn--".concat(this.props.color):"",t=this.props.active?"c-btn--active":"";return Object(o.jsxs)("button",{ref:this.props.ref,className:"c-btn ".concat(e," ").concat(t),onClick:this.props.onClick,children:[Object(o.jsx)("span",{className:"c-btn__background"}),Object(o.jsx)("span",{className:"c-btn__content",children:this.props.children})]})}}]),n}(c.Component)},,,,function(e,t,n){"use strict";t.a=["com certeza nao","contra","de forma alguma","de jeito nenhum","de maneira nenhuma","deplor\xe1vel","desaprovo","desconfort\xe1vel","desconheco","desconhe\xe7o","deselegante","desfavor\xe1vel","desleal","desprezo","desprez\xedvel","especificamente nao","esquisito","horr\xedvel","improvav\xe9l","indesej\xe1vel","infeliz","infelizmente nao","infelizmente","jamais","lastim\xe1vel","lento","me recuso","n/a","nego","nem pensar","nenhuma","nunca","n\xe3o aceito","n\xe3o aprovo","n\xe3o assumo","n\xe3o concordo","n\xe3o conheco","n\xe3o conhe\xe7o","n\xe3o desejo","n\xe3o gosto","n\xe3o quero","n\xe3o vale a pena","n\xe3o","odeio","pouco prov\xe1vel","pouco relevante","recuso","rejeito","repulgnante","terr\xedvel"]},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=n(3),s=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"normalize",value:function(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,/g,"").replace(/\./g,"")}},{key:"normalizeAndRemoveNumbers",value:function(e){return this.normalize(e).replace(/^\d+/g,"").replace(/^\s+/g,"")}},{key:"finder",value:function(e,t,n,a){var r=this;if(!n||!n.length)return!1;var s=a?"normalizeAndRemoveNumbers":"normalize";return n.find((function(n){return r[s](t).trim()[e](r[s](n))}))}},{key:"ucfirst",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}]),e}()},,,,function(e,t,n){"use strict";t.a=["Confirmo","Conheco","a favor","aceito","conhe\xe7o","acho que sim","as vezes","assumo","claro","com certeza","concordo com os termos","concordo","confirmo","conheco","conhe\xe7o","elegante","estou de acordo","eu concordo","eu estou de acordo","eu gosto","eu sei","eu vou","favor\xe1vel","li e concordo","li e estou de acordo","muitas vezes","presumo que sim","provavelmente","prov\xe1vel","raramente","r\xe1pido","sem d\xfavidas","sem d\xfavidas","sempre","sim","sim"]},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(17),r=n(8),s=n(2),i=n(3),c=n(28),o=function(){function e(t){Object(s.a)(this,e),this.rows=[],this.titles=[];var n=t.split(/\r?\n|\r/);this.titles=n.shift().split(/\t/),this.rows=n.map((function(e){return e.split(/\t/)}));var a=new c.a;this.classifications=this.titles.map((function(e){return a.predict(e).key}))}return Object(i.a)(e,[{key:"persist",value:function(){var e=JSON.parse(localStorage.getItem("database")),t=(new Date).getTime();return e=Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t,{titles:this.titles,rows:this.rows,classifications:this.classifications})),localStorage.setItem("database",JSON.stringify(e)),t}}],[{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=JSON.parse(localStorage.getItem("database"));n=Object(r.a)(Object(r.a)({},n),{},Object(a.a)({},e,{titles:t.titles,rows:t.rows,classifications:t.classifications})),localStorage.setItem("database",JSON.stringify(n))}}]),e}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2),r=n(3),s=n(14),i=n(22),c=function(){function e(){Object(a.a)(this,e);var t=n(35);this.options=s.a.getComponents(t).map((function(e){return e.default}))}return Object(r.a)(e,[{key:"getOption",value:function(e){return this.options.find((function(t){return t.key===e}))}},{key:"predict",value:function(e){for(var t=this.options.sort((function(e,t){return e.weight-t.weight})),n=function(n){for(var a=t[n],r=["startsWith","endsWith","includes"].filter((function(e){return a[e]})),s=0;s<r.length;s++)if(i.a.finder(r[s],e,a[r[s]],!0))return{v:a}},a=0;a<t.length;a++){var r=n(a);if("object"===typeof r)return r.v}return t[t.length-1]}}]),e}()},,,,,,,function(e,t,n){var a={"./cityState.js":57,"./feedback.js":58,"./groupsInAnswer.js":59,"./negativeOrList.js":60,"./nps.js":61,"./openQuestion.js":62,"./terms.js":63,"./timestamp.js":64,"./yesOrNot.js":65};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=35},,,,,,,,,function(e,t,n){},,function(e,t,n){var a={"./home/index.js":86};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=46},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);t.default={title:"City/State",key:"cityState",startsWith:["onde voc\xea","qual a sua cidade","qual a sua naturalidade"],includes:["cidade/estado"],weight:1,answers:{printStyle:"summarizeCityState"}}},function(e,t,n){"use strict";n.r(t);t.default={title:"Feedback",key:"feedback",includes:["deixe feedback","deixe um coment\xe1rio","comente","coment\xe1rios","sugest\xf5es"],weight:999,answers:{printStyle:"scoreSentmentsAndCategorize"}}},function(e,t,n){"use strict";n.r(t);t.default={title:"Groups in answer",key:"groupsInAnswer",startsWith:["onde voc\xea","escolha","Qual o seu n\xedvel de","H\xe1 quanto tempo","em qual","quantos anos","o quanto voc\xea","quais tipos"],includes:["quanto tempo","quantos anos","o quanto ","quanto ao","quanto \xe0"],endsWith:[":","a seguir.","a seguir:","seguintes:","seguintes."],weight:9,answers:{printStyle:"summarize"}}},function(e,t,n){"use strict";n.r(t);var a={title:"Negative or list",key:"negativeOrList",includes:["quais ","sua opini\xe3o","opine","voc\xea sugere","voc\xea acha","justifique","voc\xea considera","voc\xea concorda","voc\xea est\xe1 de acordo"],answers:{alias:{unclassified:"Others"},classification:{negative:{startsWith:n(19).a}},printStyle:"categorize"},weight:20};t.default=a},function(e,t,n){"use strict";n.r(t);t.default={title:"NPS like",key:"npsLike",includes:["escala de 1 a 10"],answers:{classification:{positive:{endsWith:["0","9"]},negative:{endsWith:["1","2","3","4","5","6"]},neutral:{endsWith:["8","7"]}},printStyle:"categorizeAndMerge"},weight:1}},function(e,t,n){"use strict";n.r(t);t.default={title:"Open Question",key:"openQuestion",weight:1e3,answers:{alias:{unclassified:"Show answers"},classification:{},printStyle:"categorize"}}},function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(26),s={title:"Terms And Conditions",key:"terms",includes:["aceitar participar","aceito participar","concordar e continuar","concordo com os termos","concordo em continuar","li e concordo","li e estou de acordo","termos de uso","termos e condi\xe7\xf5es","de acordo com nossos termos","de acordo com os termos"],answers:{classification:{negative:{startsWith:a.a},positive:{startsWith:r.a}},printStyle:"categorizeAndMerge"},weight:1};t.default=s},function(e,t,n){"use strict";n.r(t);t.default={title:"Timestamp",key:"timestamp",includes:["carimbo de data/hora","registro de data/hora"],startsWith:["timestamp"],weight:1,answers:{printStyle:"summarizeDates"}}},function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(26),s={title:"Yes or Not",key:"yesOrNot",includes:["voc\xea j\xe1","voc\xea tem","voc\xea sabe","voc\xea conhece","voc\xea lida","voc\xea utiliza","voc\xea aprendeu","voc\xea lembra","Se sim","Se n\xe3o"],startsWith:["\xc9 "],endsWith:["discorra","justifique","justifique sua resposta","\xe9 uma pr\xe1tica adotada no seu fluxo de trabalho?","explique"],answers:{classification:{negative:{startsWith:a.a},positive:{startsWith:r.a}},printStyle:"categorizeAndMerge"},weight:10};t.default=s},function(e,t,n){var a={"./database/index.js":67,"./index.js":9};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=66},function(e,t,n){"use strict";n.r(t);var a=JSON.parse(localStorage.getItem("database")),r=null,s=null,i=[];a&&(r=a[s=(i=Object.keys(a))[i.length-1]]),t.default=r={state:{key:s,keys:i,table:r||{titles:["Upload an .tsv file formated as Google Spreadsheet does, them you will see the magic."],rows:[["Claro"],["Com certeza"]],classifications:["yesOrNot"]}},actions:{create:function(e,t){return(0,e.commit)("table",t)},setKey:function(e,t){return(0,e.commit)("key",t)},setKeys:function(e,t){return(0,e.commit)("keys",t)},remove:function(e,t){var n=e.commit,a=JSON.parse(localStorage.getItem("database"));delete a[t],localStorage.setItem("database",JSON.stringify(a));Object.keys(a);return n("keys",Object.keys(a))}}}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./painel/index.js":87};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=71},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R})),n.d(t,"config",(function(){return T}));var a,r,s=n(2),i=n(3),c=n(5),o=n(4),l=n(1),u=n(8),d=n(16),p=n(94);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t){var n=e.title,s=e.titleId,i=h(e,["title","titleId"]);return l.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-settings",ref:t,"aria-labelledby":s},i),n?l.createElement("title",{id:s},n):null,a||(a=l.createElement("circle",{cx:12,cy:12,r:3})),r||(r=l.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})))}var b=l.forwardRef(j);n.p;var v=n(15),m=(n(48),n(0));function O(e){var t=e.items,n=e.onChange,a=Object(l.useState)(null),r=Object(d.a)(a,2),s=r[0],i=r[1],c=Object(l.useState)(null),o=Object(d.a)(c,2),f=o[0],h=o[1],j=Object(l.useState)(null),O=Object(d.a)(j,2),y=O[0],x=O[1],g=function(e){var t=Object(l.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],s=Object(l.useRef)(null),i=function(e){s.current&&!s.current.contains(e.target)&&r(!1)};return Object(l.useEffect)((function(){return document.addEventListener("click",i,!0),function(){document.removeEventListener("click",i,!0)}})),{ref:s,isComponentVisible:a,setIsComponentVisible:r}}(!1),w=g.ref,k=g.isComponentVisible,_=g.setIsComponentVisible,N=Object(p.a)(s,f,{modifiers:[{name:"arrow",options:{element:y}}],placement:"top"}),C=N.styles,S=N.attributes,A=function(){_(!1)},E=function(e){return k?A():void _(!0)};return Object(m.jsx)("div",{className:"c-dropdown",ref:w,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{type:"button",ref:i,onClick:function(e){return E()},children:Object(m.jsx)(v.a,{children:Object(m.jsx)(b,{})})}),k&&Object(m.jsxs)("div",Object(u.a)(Object(u.a)({className:"c-dropdown__content",ref:h,style:C.popper},S.popper),{},{children:[Object(m.jsx)("ul",{className:"c-dropdown__list",children:t.map((function(e){return Object(m.jsx)("li",{className:"c-dropdown__list-item",onClick:function(){return function(e){return A(),n(e)}(e)},children:Object(m.jsxs)("div",{className:"c-dropdown__list-item-container",children:[Object(m.jsx)("div",{className:"c-dropdown__list-item-content",children:Object(m.jsx)("span",{children:e.title})}),Object(m.jsx)("div",{"v-if":"item.description",className:"c-dropdown__list-item-description",children:Object(m.jsx)("small",{children:e.description})})]})},e.key)}))}),Object(m.jsx)("div",{ref:x,style:C.arrow})]}))]})})}var y=n(10),x=(n(49),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={visible:a.props["start-closed"]?null:a.props.areas[0].key},a}return Object(i.a)(n,[{key:"showTab",value:function(e){this.state.visible!==e||this.props["no-re-click"]?this.setState({visible:e}):this.setState({visible:null})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"c-suitable",children:[Object(m.jsx)("div",{className:"c-suitable__header",children:this.props.areas.map((function(t){return Object(m.jsx)(v.a,{color:t.color,onClick:function(){return e.showTab(t.key)},active:t.key===e.state.visible,children:t.key},t.key)}))}),Object(m.jsx)("div",{className:"c-suitable__body",children:this.props.areas.map((function(t){return e.state.visible===t.key?Object(m.jsx)("div",{children:t.content},Object(y.a)("suitable-".concat(t.key))):null}))})]})}}]),n}(l.Component)),g=(n(50),n(31)),w=n.n(g),k=n(23),_=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"normalize",value:function(e){var t=this,n=e.replace(/\s/g,"").replace(/,/g,"/").replace(/\(/g,"/").replace(/\)/g,"").replace(/-/g,"/").replace(/\./g,"");return Object.keys(this.states).forEach((function(e){n=(n=(n=n.replace("".concat(t.states[e]),"/".concat(t.states[e]))).replace("/".concat(e),"/".concat(t.states[e]))).replace("//","/")})),n}}]),e}();_.states={Acre:"AC",Alagoas:"AL","Amap\xe1":"AP",Amazonas:"AM",Bahia:"BA","Cear\xe1":"CE",DistritoFederal:"DF","Esp\xedritoSanto":"ES","Goi\xe1s":"GO","Maranh\xe3o":"MA",MatoGrosso:"MT",MatoGrossodoSul:"MS",MinasGerais:"MG","Par\xe1":"PA","Para\xedba":"PB","Paran\xe1":"PR",Pernambuco:"PE","Piau\xed":"PI",RiodeJaneiro:"RJ",RioGrandedoNorte:"RN",RioGrandedoSul:"RS","Rond\xf4nia":"RO",Roraima:"RR",SantaCatarina:"SC","S\xe3oPaulo":"SP",Sergipe:"SE",Tocantins:"TO"};var N=n(14),C=n(22),S=function(){function e(){Object(s.a)(this,e);var t=n(35);this.options=N.a.getComponents(t).map((function(e){return e.default}))}return Object(i.a)(e,[{key:"groupByCategories",value:function(e,t){var n=this.options.find((function(t){return t.key===e})),a=[],r=n.answers,s=r.classification,i=r.alias,c=Object.keys(s).reduce((function(e,t){return a.push(t),e[t]=[],e}),{});a.push("unclassified");var o=Object(k.a)(t);t.forEach((function(e){for(var t=0;t<a.length;t++){var n=s[a[t]];if(n)for(var r=Object.keys(n),i=0;i<r.length;i++)if(C.a.finder(r[i],e.answer,n[r[i]],!1)){c[a[t]].push(e),o=o.filter((function(t){return t.line!==e.line}));break}}})),c.unclassified=o;var l={};return a.forEach((function(e){var t=i&&i[e]||C.a.ucfirst(e);l[t]=c[e]})),l}}],[{key:"groupAnswers",value:function(e){return e.reduce((function(e,t){return e["".concat(t.answer)]=e["".concat(t.answer)]?e["".concat(t.answer)]+1:1,e}),[])}},{key:"groupByScore",value:function(e){return e.reduce((function(e,t){var n,a,r=(null===t||void 0===t||null===(n=t.sentment)||void 0===n?void 0:n.score)>1?"Positive":(null===t||void 0===t||null===(a=t.sentment)||void 0===a?void 0:a.score)<-1?"Negative":"Neutral";return e[r]=[].concat(Object(k.a)(e[r]),[t]),e}),{Negative:[],Neutral:[],Positive:[]})}},{key:"groupCityAnswers",value:function(e){return e.sort((function(e,t){return e.answer.localeCompare(t.answer)})).reduce((function(e,t){var n=_.normalize(t.answer);return e[n]=e[n]?e[n]+1:1,e}),[])}}]),e}(),A=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"summarizeDates",value:function(){var e=this.valids.map((function(e){return e.answer.split(" ")[0]})).reduce((function(e,t){return e[t]=e[t]?e[t]+1:1,e}),[]);return this.summaryAnswer(e,Object(m.jsxs)("span",{children:["was the day that you got the ",Object(m.jsx)("b",{children:"most responses"})]}),Object(m.jsxs)("span",{children:["was the day that received the ",Object(m.jsx)("b",{children:"fewest responses"})]}))}},{key:"summarizeCityState",value:function(){var e=S.groupCityAnswers(this.valids);return this.summaryAnswer(e,Object(m.jsxs)("span",{children:["was the place that you got the ",Object(m.jsx)("b",{children:"most responses"})]}),Object(m.jsxs)("span",{children:["was the place that received the ",Object(m.jsx)("b",{children:"fewest responses"})]}))}},{key:"summarize",value:function(){var e=S.groupAnswers(this.valids);return this.summaryAnswer(e)}},{key:"categorizeAndMerge",value:function(e){return this.categoryAnswer(e,(function(e){var t=S.groupAnswers(e);return Object(m.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:e}),": ",t[e]," respondents"]},Object(y.a)("categorie-".concat(e)))}))})}))}},{key:"categorize",value:function(e){return this.categoryAnswer(e,(function(e){return Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsx)("li",{children:e.answer},Object(y.a)("nol-".concat(e.line)))}))})}))}},{key:"scoreSentmentsAndCategorize",value:function(e){var t=S.groupByScore(this.valids);return this.categoryAnswer(e,(function(e){return Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsxs)("li",{children:[e.answer,Object(m.jsx)("ul",{children:Object(m.jsxs)("li",{children:["Sentment Score: ",e.sentment.score]})})]},Object(y.a)("fdbk-".concat(e.line)))}))})}),t)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"c-answer-pane",children:[Object(m.jsxs)("div",{className:"c-answer-pane__counters",children:[Object(m.jsxs)("div",{className:"c-answer-pane__counters-item",children:["Valids: ",this.valids.length]}),Object(m.jsxs)("div",{className:"c-answer-pane__counters-item",children:["Invalids: ",this.invalids.length]})]}),Object(m.jsx)("div",{className:"c-answer-pane__body",children:this.presentByType()})]})}}]),n}(function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).valids=[],a.invalids=[],a.classifier=new S,a.props.answers.forEach((function(e){var t=Object(u.a)(Object(u.a)({},e),{},{answer:e.answer.trim(),sentment:w()(e.answer)}),n=t.answer;n&&(n.length>1||!isNaN(parseFloat(n))&&isFinite(n))?a.valids.push(t):a.invalids.push(t)})),a}return Object(i.a)(n,[{key:"categoryAnswer",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null===n?this.classifier.groupByCategories(e.key,this.valids):n,r=[];return Object.keys(a).forEach((function(e){var n=t(a[e]);r.push({key:"".concat(e,": ").concat(a[e].length),color:e.toLowerCase(),content:n})})),Object(m.jsx)(x,{areas:r,"start-closed":!0})}},{key:"summaryAnswer",value:function(e,t,n){var a=Object.keys(e).reduce((function(t,n){return e[n]>t.total?{key:n,total:e[n]}:t}),{total:0}),r=Object.keys(e).reduce((function(t,n){return e[n]<t.total||0===t.total?{key:n,total:e[n]}:t}),{total:0});t=t||Object(m.jsxs)("span",{children:["was the option that you got the ",Object(m.jsx)("b",{children:"most responses"})]}),n=n||Object(m.jsxs)("span",{children:["was the option that you received the ",Object(m.jsx)("b",{children:"fewest responses"})]});var s=[{key:"Summary",content:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsxs)("b",{children:['"',a.key,'"']})," ",t," . ",a.total," in total"]}),Object(m.jsxs)("li",{children:[Object(m.jsxs)("b",{children:['"',r.key,'"']})," ",n,". ",r.total," in total"]})]})},{key:"Compiled data",content:Object(m.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(m.jsxs)("li",{children:[t,": ",e[t]]},Object(y.a)("ctst-".concat(t)))}))})}];return Object(m.jsx)("div",{children:Object(m.jsx)(x,{areas:s})})}},{key:"presentByType",value:function(){var e=this.props["question-classification"];return e.answers&&e.answers.printStyle&&this["".concat(e.answers.printStyle)]&&this["".concat(e.answers.printStyle)](e)}}]),n}(l.Component)),E=n(27),q=n(9),z=(n(68),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e,a){var r;Object(s.a)(this,n);var i=(r=t.call(this,e,a)).context.state["database.table"],c=i.rows,o=i.classifications;return r.rows=c||[],r.classifications=o||[],r.state={classification:r.props.classifier.getOption(r.classifications[r.props.position])},r}return Object(i.a)(n,[{key:"onChange",value:function(e){this.setState({classification:e}),this.classifications[this.props.position]=e.key,E.a.update(this.context.state["database.key"],{titles:this.context.state["database.table"].titles,rows:this.rows,classifications:this.classifications})}},{key:"render",value:function(){var e,t=this,n=this.rows.map((function(e,n){return{line:n,answer:e[t.props.position]}}));return Object(m.jsxs)("div",{className:"c-question",children:[Object(m.jsxs)("div",{className:"c-question__header",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"c-question__title",children:this.props.title}),Object(m.jsx)("p",{className:"c-question__subtitle",children:null===(e=this.state.classification)||void 0===e?void 0:e.title})]}),Object(m.jsx)("div",{className:"c-question__settings",children:Object(m.jsx)(O,{items:this.props.classifier.options,onChange:function(e){return t.onChange(e)}})})]}),Object(m.jsx)("div",{className:"c-question__body",children:Object(m.jsx)(A,{"question-classification":this.state.classification,answers:n})})]})}}]),n}(l.Component));z.contextType=q.Context;n(69);var I=n(28),P=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"menuItems",value:function(){var e=this.context.state["database.table"];return e&&e.titles||[]}},{key:"render",value:function(){var e=new I.a;return Object(m.jsx)("div",{className:"c-question-mapper",children:Object(m.jsx)("div",{className:"c-question-mapper__questions",children:this.menuItems().map((function(t,n){return Object(m.jsx)(z,{title:t,position:n,classifier:e},Object(y.a)("question-".concat(n)))}))})})}}]),n}(l.Component);P.contextType=q.Context;n(70);var M=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"header",value:function(){var e=this.context.state["database.table"];return e&&e.titles||[]}},{key:"body",value:function(){var e=this.context.state["database.table"];return e&&e.rows||[]}},{key:"render",value:function(){return this.body(),Object(m.jsxs)("table",{className:"c-raw-data",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"c-raw-data__tr",children:[Object(m.jsx)("th",{children:"#"}),this.header().map((function(e,t){return Object(m.jsx)("th",{className:"c-raw-data__th",children:e},t)}))]})}),Object(m.jsx)("tbody",{children:this.body().map((function(e,t){return Object(m.jsxs)("tr",{className:"c-raw-data__tr",children:[Object(m.jsx)("td",{className:"c-raw-data__td",children:t}),e.map((function(e,t){return Object(m.jsx)("td",{className:"c-raw-data__td",children:e},Object(y.a)("column-".concat(e)))}))]},Object(y.a)("line-".concat(t)))}))})]})}}]),n}(l.Component);M.contextType=q.Context;var R=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=[{key:"Presentation",content:Object(m.jsx)(P,{})},{key:"Raw data",content:Object(m.jsx)(M,{})}];return Object(m.jsx)(x,{className:"c-home",areas:e,"no-re-click":!0})}}]),n}(l.Component),T={name:"Home",layout:"painel",route:"/"}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var a,r,s,i=n(2),c=n(3),o=n(5),l=n(4),u=n(1),d=n.n(u),p=n(23);n(72);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t){var n=e.title,i=e.titleId,c=h(e,["title","titleId"]);return u.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-upload",ref:t,"aria-labelledby":i},c),n?u.createElement("title",{id:i},n):null,a||(a=u.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"})),r||(r=u.createElement("polyline",{points:"17 8 12 3 7 8"})),s||(s=u.createElement("line",{x1:12,y1:3,x2:12,y2:15})))}var b=u.forwardRef(j),v=(n.p,n(0)),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"c-file-upload",children:[Object(v.jsx)("input",{className:"c-file-upload__input",type:"file",name:this.props.name,required:this.props.required,onChange:function(t){return e.props.onChange(t)}}),Object(v.jsxs)("div",{className:"c-file-upload__false-btn",children:[Object(v.jsx)(b,{}),"Upload a TSV file"]})]})}}]),n}(u.Component),O=n(9),y=n(27),x=(n(73),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).openFile=function(e){var t=e.target,n=new FileReader;t.files&&t.files.length&&(n.readAsText(t.files[0]),n.onload=function(){var e=new y.a(n.result),t=e.persist(),r=a.context.dispatch;r({action:"database.create",payload:e});var s=JSON.parse(localStorage.getItem("database"))||{};r({action:"database.setKeys",payload:Object(p.a)(Object.keys(s))}),r({action:"database.setKey",payload:t}),a.form.current.reset()})},a.state={database:{}},a.form=Object(u.createRef)(),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("header",{className:"c-header ".concat(this.props.className||""),children:Object(v.jsx)("form",{ref:this.form,children:Object(v.jsx)(m,{onChange:function(t){return e.openFile(t)}})})})}}]),n}(u.Component));x.contextType=O.Context;n(74);var g,w,k=n(15),_=n(24);n(75);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){var n=e.title,a=e.titleId,r=C(e,["title","titleId"]);return u.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",ref:t,"aria-labelledby":a},r),n?u.createElement("title",{id:a},n):null,g||(g=u.createElement("line",{x1:18,y1:6,x2:6,y2:18})),w||(w=u.createElement("line",{x1:6,y1:6,x2:18,y2:18})))}var A=u.forwardRef(S),E=(n.p,document.getElementById("portal")),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).element=document.createElement("div"),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){E.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){E.removeChild(this.element)}},{key:"render",value:function(){var e=this;return Object(_.createPortal)(Object(v.jsxs)("div",{className:"c-modal ".concat(this.props.medium&&"c-modal--medium"," ").concat(this.props.small&&"c-modal--small"," ").concat(this.props.top&&"c-modal--top"),children:[Object(v.jsx)("div",{className:"c-modal__overlay",onClick:function(){return e.props.onClose()}}),Object(v.jsxs)("div",{className:"c-modal__window",children:[Object(v.jsxs)("div",{className:"c-modal__window-header",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h1",{className:"c-modal__window-title",children:this.props.title||""})}),Object(v.jsx)(k.a,{circle:!0,className:"c-modal__window-close",onClick:function(){return e.props.onClose()},children:Object(v.jsx)(A,{})})]}),Object(v.jsx)("div",{className:"c-modal__window-body",children:this.props.children})]})]}),this.element)}}]),n}(d.a.Component),z=(n(76),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"c-field",children:[Object(v.jsx)("label",{"v-if":"label",className:"c-field__label",children:this.props.label}),Object(v.jsx)("fieldset",{className:"c-field__fieldset",children:Object(v.jsx)("input",{ref:"input",className:"c-field__input",disabled:this.props.disabled,required:this.props.required,placeholder:this.props.placeholder,autocapitalize:this.props.autocapitalize,autocomplete:this.props.autocomplete,autocorrect:this.props.autocorrect,value:this.props.modelValue,readonly:this.props.readonly,type:this.props.type||"text"})}),Object(v.jsx)("p",{"v-if":"sublabel",children:Object(v.jsx)("small",{children:this.props.sublabel})})]})}}]),n}(u.Component)),I=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).remove=function(e,t){e.stopPropagation();var n=a.context,r=n.dispatch,s=n.state["database.keys"].filter((function(e){return parseInt(e)!==parseInt(t.value)}));if(r({action:"database.remove",payload:t.value}),a.context.state["database.key"]===t.value)if(s.length){var i=s[s.length-1];a.change(i)}else r({action:"database.create",payload:{}}),r({action:"database.setKey",payload:""})},a.toggleModal=function(){a.setState({showModal:!a.state.showModal})},a.isActive=function(e){return parseInt(e.value)===parseInt(a.context.state["database.key"])},a.state={showModal:!1},a}return Object(c.a)(n,[{key:"change",value:function(e){var t=JSON.parse(localStorage.getItem("database"));if(e&&t){var n=t[e],a=this.context.dispatch;a({action:"database.create",payload:n}),a({action:"database.setKey",payload:e})}}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("nav",{className:"c-vertical-nav ".concat(this.props.className||""),children:[this.state.showModal?Object(v.jsxs)(q,{title:"Login",onClose:function(){return e.toggleModal()},small:!0,children:[Object(v.jsx)(z,{label:"Insira o seu token do GitHub"}),Object(v.jsx)(z,{label:"Qual o reposit\xf3rio?"}),Object(v.jsx)("p",{children:Object(v.jsx)("small",{children:"O token ficar\xe1 gravado localmente, para que voc\xea n\xe3o precise voltar no GitHub quando quiser usar a plataforma novamente. Sendo assim, lembre-se de sair, caso esteja em um computador que n\xe3o confia."})}),Object(v.jsx)("div",{style:{margin:"8px 0"},children:Object(v.jsx)(k.a,{children:"ENTRAR E SALVAR"})}),Object(v.jsx)("p",{children:Object(v.jsxs)("small",{children:["Para criar um token no GitHub, basta acessar",Object(v.jsx)("a",{href:"https://github.com/settings/tokens",children:"https://github.com/settings/tokens"}),'. D\xea todas as permiss\xf5es do tipo "repo", e a op\xe7\xe3o "read:user".']})})]}):null,Object(v.jsx)("div",{className:"c-vertical-nav__header",children:"TSV Data"}),Object(v.jsxs)("div",{className:"c-vertical-nav__body",children:[Object(v.jsx)("p",{children:"You .tsv files:"}),this.props.items.length?Object(v.jsx)("ul",{className:"c-vertical-nav__list",children:this.props.items.reverse().map((function(t){return Object(v.jsxs)("li",{className:"c-vertical-nav__list-item ".concat(e.isActive(t)&&"c-vertical-nav__list-item--active"),onClick:function(){return e.change(t.value)},children:[Object(v.jsx)("span",{children:t.name}),Object(v.jsx)("span",{className:"c-vertical-nav__list-item__close",onClick:function(n){return e.remove(n,t)},children:Object(v.jsx)(A,{})})]},t.key)}))}):"You need to import some file"]}),Object(v.jsx)("div",{className:"c-vertical-nav__footer"})]})}}]),n}(u.Component);I.contextType=O.Context;var P=n(10),M=(n(77),n(95)),R=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"menuItems",value:function(){return this.context.state["database.keys"]||[]}},{key:"render",value:function(){var e=this.menuItems().map((function(e,t){return{name:Object(M.a)(new Date(parseInt(e)),"d-MM-Y HH:mm:ss"),value:e,key:Object(P.a)("ln-menu-".concat(t))}}));return Object(v.jsxs)("div",{className:"l-painel",children:[Object(v.jsx)("div",{className:"l-painel__leftnav",children:Object(v.jsx)(I,{items:e})}),Object(v.jsxs)("div",{className:"l-painel__right",children:[Object(v.jsx)(x,{className:"l-painel__header test"}),Object(v.jsx)("div",{className:"l-painel__content",children:this.props.children})]})]})}}]),n}(u.Component);R.contextType=O.Context},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(24),i=n.n(s),c=(n(44),n(32)),o=n(6),l=n(14),u=n(0);function d(){var e=n(46),t=n(71);return l.a.getComponents(e).map((function(e){var n=e.default,r=e.config,s=r.layout?l.a.getComponent("./".concat(r.layout,"/index.js"),t).default:a.Fragment;return Object(u.jsx)(o.a,{exact:void 0===r.exactRoute||r.exactRoute,path:r.route,children:Object(u.jsx)(s,{children:Object(u.jsx)(n,{})})},r.name)}))}var p=function(){return Object(u.jsx)(c.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(o.c,{children:d()})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},h=n(9);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h.default,{children:Object(u.jsx)(p,{})})}),document.getElementById("root")),f()}],[[88,1,2]]]);
//# sourceMappingURL=main.07da0a3d.chunk.js.map