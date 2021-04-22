(this["webpackJsonptsv-explorer"]=this["webpackJsonptsv-explorer"]||[]).push([[0],[,,,,,,,,function(e,t,n){"use strict";function a(e){return"".concat(e,"_").concat((new Date).getTime())}n.d(t,"a",(function(){return a}))},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(19),c=n(2),r=n(3),s=function(){function e(){Object(c.a)(this,e)}return Object(r.a)(e,null,[{key:"normalize",value:function(e){var t=this,n=e.replace(/\s/g,"").replace(/,/g,"/").replace(/\(/g,"/").replace(/\)/g,"").replace(/-/g,"/").replace(/\./g,"");return Object.keys(this.states).forEach((function(e){n=(n=(n=n.replace("".concat(t.states[e]),"/".concat(t.states[e]))).replace("/".concat(e),"/".concat(t.states[e]))).replace("//","/")})),n}}]),e}();s.states={Acre:"AC",Alagoas:"AL","Amap\xe1":"AP",Amazonas:"AM",Bahia:"BA","Cear\xe1":"CE",DistritoFederal:"DF","Esp\xedritoSanto":"ES","Goi\xe1s":"GO","Maranh\xe3o":"MA",MatoGrosso:"MT",MatoGrossodoSul:"MS",MinasGerais:"MG","Par\xe1":"PA","Para\xedba":"PB","Paran\xe1":"PR",Pernambuco:"PE","Piau\xed":"PI",RiodeJaneiro:"RJ",RioGrandedoNorte:"RN",RioGrandedoSul:"RS","Rond\xf4nia":"RO",Roraima:"RR",SantaCatarina:"SC","S\xe3oPaulo":"SP",Sergipe:"SE",Tocantins:"TO"};var i=function(){function e(){Object(c.a)(this,e)}return Object(r.a)(e,null,[{key:"getTypes",value:function(){return this.types}},{key:"getType",value:function(e){return this.types.find((function(t){return t.key===e}))}},{key:"normalizeStr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/,/g,"").replace(/\./g,"");return t?n.replace(/[0-9]/g,"").trim():n}},{key:"predictType",value:function(e){for(var t=0;t<this.types.length;t++){var n=this.types[t],a=null;if((a=this.checkStartsWith(e,n.startsWith,!0))||(a=this.checkEndsWith(e,n.endsWith,!0)),a||(a=this.checkSomewhere(e,n.somewhere,!0)),a)return n}return this.types.find((function(e){return"openQuestion"===e.key}))}},{key:"checkStartsWith",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!t||!t.length)&&t.find((function(t){return n.normalizeStr(e,a).startsWith(n.normalizeStr(t,a))}))}},{key:"checkEndsWith",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!t||!t.length)&&t.find((function(t){return n.normalizeStr(e,a).endsWith(n.normalizeStr(t,a))}))}},{key:"checkSomewhere",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!t||!t.length)&&t.find((function(t){return n.normalizeStr(e,a).includes(n.normalizeStr(t,a))}))}},{key:"groupAnswers",value:function(e){return e.reduce((function(e,t){return e["".concat(t.answer)]=e["".concat(t.answer)]?e["".concat(t.answer)]+1:1,e}),[])}},{key:"groupByScore",value:function(e){return e.reduce((function(e,t){var n,c,r=(null===t||void 0===t||null===(n=t.sentment)||void 0===n?void 0:n.score)>1?"positive":(null===t||void 0===t||null===(c=t.sentment)||void 0===c?void 0:c.score)<-1?"negative":"neutral";return e[r]=[].concat(Object(a.a)(e[r]),[t]),e}),{negative:[],neutral:[],positive:[]})}},{key:"groupCityAnswers",value:function(e){return e.sort((function(e,t){return e.answer.localeCompare(t.answer)})).reduce((function(e,t){var n=s.normalize(t.answer);return e[n]=e[n]?e[n]+1:1,e}),[])}},{key:"classifieAnswersByPositiveOrNegative",value:function(e,t){var n=this,c=this.types.find((function(t){return t.key===e})),r=Object.keys(c.answers.options).reduce((function(e,t){return e[t]=[],e}),{}),s=Object(a.a)(t);return t.forEach((function(e){for(var t="".concat(e.answer).toLowerCase().trim(),a=Object.keys(r),i=0;i<a.length;i++)(n.checkStartsWith(t,c.answers.options[a[i]].startsWith)||n.checkEndsWith(t,c.answers.options[a[i]].endsWith)||n.checkSomewhere(t,c.answers.options[a[i]].somewhere))&&(r[a[i]].push(e),s=s.filter((function(t){return t.line!==e.line})))})),r.unclassified=s,r}},{key:"npsClassifie",value:function(e,t){var n=this.classifieAnswersByPositiveOrNegative(e,t);return n.nps=n.positive.length-n.negative.length/(n.positive.length+n.negative.length+n.neutral.length||1),n}}]),e}();i.concordance=["Sim","Com certeza","Aceito","Concordo","Confirmo","Eu sei","Acho que sim","As vezes","Sempre","muitas vezes","Raramente","Conhe\xe7o","Conheco","Com certeza","Claro","Sem d\xfavidas"],i.nonConcordance=["N\xe3o","Nunca","Nao","Nenhuma","Nao conhe\xe7o","N\xe3o conheco","Desconhe\xe7o","Desconheco","Com certeza nao","Especificamente nao","Infelizmente nao","De forma alguma","De maneira nenhuma","Jamais","N/A","----","pouco relevante"],i.agreement=["estou de acordo","li e concordo","li e estou de acordo","concordo com os termos"].concat(Object(a.a)(i.concordance)),i.disagreement=["n\xe3o concordo","n\xe3o aceito"].concat(Object(a.a)(i.nonConcordance)),i.types=[{title:"Timestamp",key:"timestamp",somewhere:["carimbo de data/hora"],startsWith:["timestamp"]},{title:"Terms And Conditions",key:"terms",somewhere:["li e concordo","li e estou de acordo","concordo com os termos","concordo em continuar","concordar e continuar","aceito participar"],answers:{options:{negative:{startsWith:i.disagreement},positive:{startsWith:i.agreement}}}},{title:"City/State",key:"cityState",startsWith:["onde voc\xea","qual a sua cidade","qual a sua naturalidade"],somewhere:["cidade/estado"]},{title:"NPS like",key:"npsLike",somewhere:["escala de 1 a 10"],answers:{options:{positive:{endsWith:["0","9"]},negative:{endsWith:["1","2","3","4","5","6"]},neutral:{endsWith:["8","7"]}}}},{title:"Groups in answer",key:"groupsInAnswer",startsWith:["onde voc\xea","escolha","Qual o seu n\xedvel de","H\xe1 quanto tempo","em qual","quantos anos","o quanto voc\xea","quais tipos"],somewhere:["quanto tempo","quantos anos","o quanto voc\xea"],endsWith:[":","a seguir.","a seguir:","seguintes:","seguintes."]},{title:"Yes or Not",key:"yesOrNot",somewhere:["voc\xea j\xe1","voc\xea tem","voc\xea sabe","voc\xea conhece","voc\xea lida","voc\xea utiliza","voc\xea aprendeu","voc\xea lembra","Se sim","Se n\xe3o"],startsWith:["\xc9 "],endsWith:["discorra","justifique","justifique sua resposta","\xe9 uma pr\xe1tica adotada no seu fluxo de trabalho?"],answers:{options:{negative:{startsWith:i.nonConcordance},positive:{startsWith:i.concordance}}}},{title:"Negative or list",key:"negativeOrList",somewhere:["Quais ","sua opini\xe3o","opine","voc\xea sugere","voc\xea acha","justifique","voc\xea considera"],answers:{options:{negative:{startsWith:i.nonConcordance}}}},{title:"Feedback",key:"feedback",somewhere:["deixe feedback","deixe um coment\xe1rio","comente","coment\xe1rios"]},{title:"Open Question",key:"openQuestion"}]},function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return b})),n.d(t,"default",(function(){return f}));var a,c=n(16),r=n(17),s=n(7),i=n(1),o=n(0),l=n(53),u=function(e,t){return t(e)},d={},j={};(a=l,a.keys().filter((function(e){return"./index.js"!==e})).map((function(e){return{context:e.replace("./","").replace("/index.js","").replace("/","."),store:u(e,a).default}}))).forEach((function(e){var t=e.context,n=e.store;n.state&&(d=Object(s.a)(Object(s.a)({},d),Object.keys(n.state).reduce((function(e,a){return e["".concat(t,".").concat(a)]=n.state[a],e}),{}))),n.actions&&(j=Object(s.a)(Object(s.a)({},j),Object.keys(n.actions).reduce((function(e,a){return e["".concat(t,".").concat(a)]=n.actions[a],e}),{})))}));var h=function(e,t,n){return delete e.key,Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},t,n))},p=function(e,t){var n=t.action,a=t.payload,c=n.split(".");c.pop();var r=c.join(".");return j[n]({state:e,commit:function(t,n){return h(e,"".concat(r,".").concat(t),n)}},a)},b=Object(i.createContext)(d);function f(e){var t=e.children,n=Object(i.useReducer)(p,d),a=Object(c.a)(n,2),r=a[0],s=a[1];return Object(o.jsx)(b.Provider,{value:{state:r,dispatch:s,commit:function(e,t){return h(r,e,t)}},children:t})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),c=n(3),r=n(5),s=n(4),i=n(1),o=(n(43),n(0)),l=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.color?"c-btn--".concat(this.props.color):"",t=this.props.active?"c-btn--active":"";return Object(o.jsxs)("button",{ref:this.props.ref,className:"c-btn ".concat(e," ").concat(t),onClick:this.props.onClick,children:[Object(o.jsx)("span",{className:"c-btn__background"}),Object(o.jsx)("span",{className:"c-btn__content",children:this.props.children})]})}}]),n}(i.Component)},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),c=n(3),r=n(5),s=n(4),i=n(1),o=(n(59),n(0)),l=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"c-field",children:[Object(o.jsx)("label",{"v-if":"label",className:"c-field__label",children:this.props.label}),Object(o.jsx)("fieldset",{className:"c-field__fieldset",children:Object(o.jsx)("input",{ref:"input",className:"c-field__input",disabled:this.props.disabled,required:this.props.required,placeholder:this.props.placeholder,autocapitalize:this.props.autocapitalize,autocomplete:this.props.autocomplete,autocorrect:this.props.autocorrect,value:this.props.modelValue,readonly:this.props.readonly,type:this.props.type||"text"})}),Object(o.jsx)("p",{"v-if":"sublabel",children:Object(o.jsx)("small",{children:this.props.sublabel})})]})}}]),n}(i.Component)},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(17),c=n(7),r=n(2),s=n(3),i=n(10),o=function(){function e(t){Object(r.a)(this,e),this.rows=[],this.titles=[];var n=t.split(/\r?\n|\r/);this.titles=n.shift().split(/\t/),this.rows=n.map((function(e){return e.split(/\t/)})),this.classifications=this.titles.map((function(e){return i.a.predictType(e).key}))}return Object(s.a)(e,[{key:"persist",value:function(){var e=JSON.parse(localStorage.getItem("database")),t=(new Date).getTime();return e=Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},t,{titles:this.titles,rows:this.rows,classifications:this.classifications})),localStorage.setItem("database",JSON.stringify(e)),t}}],[{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=JSON.parse(localStorage.getItem("database"));n=Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},e,{titles:t.titles,rows:t.rows,classifications:t.classifications})),localStorage.setItem("database",JSON.stringify(n))}}]),e}()},,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){var a={"./home/index.js":76,"./login/index.js":58};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=42},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){var a={"./database/index.js":54,"./index.js":11};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=53},function(e,t,n){"use strict";n.r(t);var a=JSON.parse(localStorage.getItem("database")),c=null,r=null,s=[];a&&(c=a[r=(s=Object.keys(a))[s.length-1]]),t.default=c={state:{key:r,keys:s,table:c||{titles:["Upload an .tsv file formated as Google Spreadsheet does, them you will see the magic."],rows:[["Claro"],["Com certeza"]],classifications:["yesOrNot"]}},actions:{create:function(e,t){return(0,e.commit)("table",t)},setKey:function(e,t){return(0,e.commit)("key",t)},setKeys:function(e,t){return(0,e.commit)("keys",t)}}}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"config",(function(){return d}));var a=n(2),c=n(3),r=n(5),s=n(4),i=n(1),o=n(22),l=n(0),u=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(o.a,{})})}}]),n}(i.Component),d={name:"Login",layout:"clean",route:"/login"}},function(e,t,n){},function(e,t,n){var a={"./clean/index.js":61,"./painel/index.js":77};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=60},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n(62);var a=n(0);function c(e){var t=e.children;return Object(a.jsx)("div",{className:"l-clean",children:t})}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q})),n.d(t,"config",(function(){return P}));var a,c,r=n(2),s=n(3),i=n(5),o=n(4),l=n(1),u=n(10),d=n(7),j=n(8),h=n(15),p=(n(44),n(0)),b=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={visible:a.props["start-closed"]?null:a.props.areas[0].key},a}return Object(s.a)(n,[{key:"showTab",value:function(e){this.state.visible!==e||this.props["no-re-click"]?this.setState({visible:e}):this.setState({visible:null})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"c-suitable",children:[Object(p.jsx)("div",{className:"c-suitable__header",children:this.props.areas.map((function(t){return Object(p.jsx)(h.a,{color:t.color,onClick:function(){return e.showTab(t.key)},active:t.key===e.state.visible,children:t.key},t.key)}))}),Object(p.jsx)("div",{className:"c-suitable__body",children:this.props.areas.map((function(t){return e.state.visible===t.key?Object(p.jsx)("div",{children:t.content},Object(j.a)("suitable-".concat(t.key))):null}))})]})}}]),n}(l.Component),f=(n(45),n(29)),v=n.n(f),O=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"valids",value:function(){return this.props.answers.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{sentment:v()(e.answer)})})).filter((function(e){var t=e.answer.trim();return t&&(t.length>1||!isNaN(parseFloat(t))&&isFinite(t))}))}},{key:"invalids",value:function(){return this.props.answers.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{sentment:v()(e.answer)})})).filter((function(e){var t=e.answer.trim();return!(t&&(t.length>1||!isNaN(parseFloat(t))&&isFinite(t)))}))}},{key:"validsLength",value:function(){return this.valids().length}},{key:"invalidsLength",value:function(){return this.invalids().length}},{key:"timestampQuestion",value:function(){var e=this.valids().map((function(e){return e.answer.split(" ")[0]})).reduce((function(e,t){return e[t]=e[t]?e[t]+1:1,e}),[]),t=Object.keys(e).reduce((function(t,n){return e[n]>t.total?{key:n,total:e[n]}:t}),{total:0}),n=Object.keys(e).reduce((function(t,n){return e[n]<t.total||1===e[n]?{key:n,total:e[n]}:t}),{total:0}),a=[{key:"Summary",content:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[t.key," was the day that you got the ",Object(p.jsx)("b",{children:"most responses"}),"."," ",t.total," in total."]}),Object(p.jsxs)("li",{children:[n.key," was the day that received the ",Object(p.jsx)("b",{children:"fewest responses"}),"."," ",n.total," in total"]})]})},{key:"Compiled data",content:Object(p.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(p.jsxs)("li",{children:[t,": ",e[t]]},Object(j.a)("ts-cd-".concat(t)))}))})}];return Object(p.jsx)("div",{children:Object(p.jsx)(b,{areas:a})})}},{key:"npsLikeQuestion",value:function(e){var t=u.a.npsClassifie(e.key,this.valids()),n=Object.keys(t).filter((function(e){return"number"!==typeof t[e]})),a=[];return n.forEach((function(e){var n=u.a.groupAnswers(t[e]),c=Object(p.jsx)("ul",{children:n.map((function(e,t){return Object(p.jsxs)("li",{children:["Nota ",t,": ",e]},Object(j.a)("nps-n-".concat(t)))}))});a.push({key:"".concat(e,": ").concat(t[e].length),color:e,content:c})})),Object(p.jsx)(b,{areas:a,"start-closed":!0})}},{key:"openQuestionQuestion",value:function(){var e=[{key:"Show answers",content:Object(p.jsx)("ul",{children:this.valids().map((function(e,t){return Object(p.jsx)("li",{children:e.answer},Object(j.a)("oq-".concat(t)))}))})}];return Object(p.jsx)(b,{areas:e,"start-closed":!0})}},{key:"feedbackQuestion",value:function(){var e=u.a.groupByScore(this.valids()),t=Object.keys(e),n=[];return t.forEach((function(t){var a=Object(p.jsx)("ul",{children:e[t].map((function(e){return Object(p.jsxs)("li",{children:[e.answer,Object(p.jsx)("ul",{children:Object(p.jsxs)("li",{children:["Sentment Score: ",e.sentment.score]})})]},Object(j.a)("feedback-".concat(e)))}))});n.push({key:"".concat(t,": ").concat(e[t].length),color:t,content:a})})),Object(p.jsx)(b,{areas:n,"start-closed":!0})}},{key:"cityStateQuestion",value:function(){var e=u.a.groupCityAnswers(this.valids()),t=Object.keys(e).reduce((function(t,n){return e[n]>t.total?{key:n,total:e[n]}:t}),{total:0}),n=Object.keys(e).reduce((function(t,n){return e[n]<t.total||1===e[n]?{key:n,total:e[n]}:t}),{total:0}),a=[{key:"Summary",content:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsxs)("b",{children:['"',t.key,'"']})," was the option that you got the"," ",Object(p.jsx)("b",{children:"most responses"}),". ",t.total," in total"]}),Object(p.jsxs)("li",{children:[Object(p.jsxs)("b",{children:['"',n.key,'"']})," was the option that you received the"," ",Object(p.jsx)("b",{children:"fewest responses"}),". ",n.total," in total"]})]})},{key:"Compiled data",content:Object(p.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(p.jsxs)("li",{children:[t,": ",e[t]]},Object(j.a)("ctst-".concat(t)))}))})}];return Object(p.jsx)("div",{children:Object(p.jsx)(b,{areas:a})})}},{key:"groupsInAnswerQuestion",value:function(){var e=u.a.groupAnswers(this.valids()),t=Object.keys(e).reduce((function(t,n){return e[n]>t.total?{key:n,total:e[n]}:t}),{total:0}),n=Object.keys(e).reduce((function(t,n){return e[n]<t.total||0===t.total?{key:n,total:e[n]}:t}),{total:0}),a=[{key:"Summary",content:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsxs)("b",{children:['"',t.key,'"']})," was the option that you got the"," ",Object(p.jsx)("b",{children:"most responses"}),". ",t.total," in total"]}),Object(p.jsxs)("li",{children:[Object(p.jsxs)("b",{children:['"',n.key,'"']})," was the option that you received the"," ",Object(p.jsx)("b",{children:"fewest responses"}),". ",n.total," in total"]})]})},{key:"Compiled data",content:Object(p.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(p.jsxs)("li",{children:[t,": ",e[t]]},Object(j.a)("gp-a-".concat(t)))}))})}];return Object(p.jsx)("div",{children:Object(p.jsx)(b,{areas:a})})}},{key:"yesOrNotQuestion",value:function(e){var t=u.a.classifieAnswersByPositiveOrNegative(e.key,this.valids()),n=Object.keys(t),a=[];return n.forEach((function(e){var n=u.a.groupAnswers(t[e]),c=Object(p.jsx)("ul",{children:Object.keys(n).map((function(e){return Object(p.jsxs)("li",{children:[e,": ",n[e]," respondents"]},Object(j.a)("yon-".concat(e)))}))});a.push({key:"".concat(e,": ").concat(t[e].length),color:e,content:c})})),Object(p.jsx)(b,{areas:a,"start-closed":!0})}},{key:"negativeOrListQuestion",value:function(e){var t=u.a.classifieAnswersByPositiveOrNegative(e.key,this.valids()),n=Object.keys(t),a=[];return n.forEach((function(e){var n=Object(p.jsx)("ul",{children:t[e].map((function(e){return Object(p.jsx)("li",{children:e.answer},Object(j.a)("feedback-".concat(e)))}))});a.push({key:"".concat(e,": ").concat(t[e].length),color:e,content:n})})),Object(p.jsx)(b,{areas:a,"start-closed":!0})}},{key:"termsQuestion",value:function(e){var t=u.a.classifieAnswersByPositiveOrNegative(e.key,this.valids()),n=Object.keys(t),a=[];return n.forEach((function(e){var n=u.a.groupAnswers(t[e]),c=Object(p.jsx)("ul",{children:Object.keys(n).map((function(e){return Object(p.jsxs)("li",{children:[e,": ",n[e]]},Object(j.a)("terms-".concat(e)))}))});a.push({key:"".concat(e,": ").concat(t[e].length),color:e,content:c})})),Object(p.jsx)(b,{areas:a,"start-closed":!0})}},{key:"presentByType",value:function(){var e=this.props["question-classification"];return this["".concat(e.key,"Question")]&&this["".concat(e.key,"Question")](e)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"c-answer-pane",children:[Object(p.jsxs)("div",{className:"c-answer-pane__counters",children:[Object(p.jsxs)("div",{className:"c-answer-pane__counters-item",children:["Valids: ",this.validsLength()]}),Object(p.jsxs)("div",{className:"c-answer-pane__counters-item",children:["Invalids: ",this.invalidsLength()]})]}),Object(p.jsx)("div",{className:"c-answer-pane__body",children:this.presentByType()})]})}}]),n}(l.Component),m=(n(52),n(11)),y=n(16),x=n(84);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function w(e,t){var n=e.title,r=e.titleId,s=g(e,["title","titleId"]);return l.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-settings",ref:t,"aria-labelledby":r},s),n?l.createElement("title",{id:r},n):null,a||(a=l.createElement("circle",{cx:12,cy:12,r:3})),c||(c=l.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})))}var N=l.forwardRef(w);n.p;n(55);function _(e){var t=e.items,n=e.onSelect,a=Object(l.useState)(null),c=Object(y.a)(a,2),r=c[0],s=c[1],i=Object(l.useState)(null),o=Object(y.a)(i,2),u=o[0],j=o[1],b=Object(l.useState)(null),f=Object(y.a)(b,2),v=f[0],O=f[1],m=function(e){var t=Object(l.useState)(e),n=Object(y.a)(t,2),a=n[0],c=n[1],r=Object(l.useRef)(null),s=function(e){r.current&&!r.current.contains(e.target)&&c(!1)};return Object(l.useEffect)((function(){return document.addEventListener("click",s,!0),function(){document.removeEventListener("click",s,!0)}})),{ref:r,isComponentVisible:a,setIsComponentVisible:c}}(!1),k=m.ref,g=m.isComponentVisible,w=m.setIsComponentVisible,_=Object(x.a)(r,u,{modifiers:[{name:"arrow",options:{element:v}}],placement:"top"}),C=_.styles,S=_.attributes,E=function(){w(!1)},A=function(e){return g?E():void w(!0)};return Object(p.jsx)("div",{className:"c-dropdown",ref:k,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{type:"button",ref:s,onClick:function(e){return A()},children:Object(p.jsx)(h.a,{children:Object(p.jsx)(N,{})})}),g&&Object(p.jsxs)("div",Object(d.a)(Object(d.a)({className:"c-dropdown__content",ref:j,style:C.popper},S.popper),{},{children:[Object(p.jsx)("ul",{className:"c-dropdown__list",children:t.map((function(e){return Object(p.jsx)("li",{className:"c-dropdown__list-item",onClick:function(){return function(e){return E(),n(e)}(e)},children:Object(p.jsxs)("div",{className:"c-dropdown__list-item-container",children:[Object(p.jsx)("div",{className:"c-dropdown__list-item-content",children:Object(p.jsx)("span",{children:e.title})}),Object(p.jsx)("div",{"v-if":"item.description",className:"c-dropdown__list-item-description",children:Object(p.jsx)("small",{children:e.description})})]})},e.key)}))}),Object(p.jsx)("div",{ref:O,style:C.arrow})]}))]})})}var C=n(25),S=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e,a){var c;return Object(r.a)(this,n),(c=t.call(this,e,a)).rows=c.context.state["database.table"].rows||[],c.classifications=c.context.state["database.table"].classifications||[],c.state={classification:u.a.getType(c.classifications[c.props.position])},c}return Object(s.a)(n,[{key:"onSelect",value:function(e){this.setState({classification:e}),this.classifications[this.props.position]=e.key,C.a.update(this.context.state["database.key"],{titles:this.context.state["database.table"].titles,rows:this.context.state["database.table"].rows,classifications:this.classifications})}},{key:"render",value:function(){var e,t=this,n=this.rows.map((function(e,n){return{line:n,answer:e[t.props.position]}}));return Object(p.jsxs)("div",{className:"c-question",children:[Object(p.jsxs)("div",{className:"c-question__header",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"c-question__title",children:this.props.title}),Object(p.jsx)("p",{className:"c-question__subtitle",children:null===(e=this.state.classification)||void 0===e?void 0:e.title})]}),Object(p.jsx)("div",{className:"c-question__settings",children:Object(p.jsx)(_,{items:u.a.getTypes(),onSelect:function(e){return t.onSelect(e)}})})]}),Object(p.jsx)("div",{className:"c-question__body",children:Object(p.jsx)(O,{"question-classification":this.state.classification,answers:n})})]})}}]),n}(l.Component);S.contextType=m.Context;n(56);var E=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"menuItems",value:function(){var e=this.context.state["database.table"];return e&&e.titles||[]}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"c-question-mapper",children:Object(p.jsx)("div",{className:"c-question-mapper__questions",children:this.menuItems().map((function(e,t){return Object(p.jsx)(S,{title:e,position:t},Object(j.a)("question-".concat(t)))}))})})}}]),n}(l.Component);E.contextType=m.Context;n(57);var A=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"header",value:function(){var e=this.context.state["database.table"];return e&&e.titles||[]}},{key:"body",value:function(){var e=this.context.state["database.table"];return console.log(e.rows),e&&e.rows||[]}},{key:"render",value:function(){return this.body(),Object(p.jsxs)("table",{className:"c-raw-data",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:"c-raw-data__tr",children:[Object(p.jsx)("th",{children:"#"}),this.header().map((function(e,t){return Object(p.jsx)("th",{className:"c-raw-data__th",children:e},t)}))]})}),Object(p.jsx)("tbody",{children:this.body().map((function(e,t){return Object(p.jsxs)("tr",{className:"c-raw-data__tr",children:[Object(p.jsx)("td",{className:"c-raw-data__td",children:t}),e.map((function(e,t){return Object(p.jsx)("td",{className:"c-raw-data__td",children:e},Object(j.a)("column-".concat(e)))}))]},Object(j.a)("line-".concat(t)))}))})]})}}]),n}(l.Component);A.contextType=m.Context;var q=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=[{key:"Presentation",content:Object(p.jsx)(E,{})},{key:"Raw data",content:Object(p.jsx)(A,{})}];return Object(p.jsx)(b,{className:"c-home",areas:e,"no-re-click":!0})}}]),n}(l.Component),P={name:"Home",layout:"painel",route:"/"}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a,c,r,s=n(2),i=n(3),o=n(5),l=n(4),u=n(1),d=n.n(u),j=n(19);n(63);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function b(e,t){var n=e.title,s=e.titleId,i=p(e,["title","titleId"]);return u.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-upload",ref:t,"aria-labelledby":s},i),n?u.createElement("title",{id:s},n):null,a||(a=u.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"})),c||(c=u.createElement("polyline",{points:"17 8 12 3 7 8"})),r||(r=u.createElement("line",{x1:12,y1:3,x2:12,y2:15})))}var f=u.forwardRef(b),v=(n.p,n(0)),O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"c-file-upload",children:[Object(v.jsx)("input",{className:"c-file-upload__input",type:"file",name:this.props.name,required:this.props.required,onChange:function(t){return e.props.onChange(t)}}),Object(v.jsxs)("div",{className:"c-file-upload__false-btn",children:[Object(v.jsx)(f,{}),"Upload a TSV file"]})]})}}]),n}(u.Component),m=n(11),y=n(25),x=(n(64),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).openFile=function(e){var t=e.target,n=new FileReader;n.readAsText(t.files[0]),n.onload=function(){var e=new y.a(n.result),t=e.persist(),c=a.context.dispatch;c({action:"database.create",payload:e}),c({action:"database.setKey",payload:t});var r=JSON.parse(localStorage.getItem("database"))||{};c({action:"database.setKeys",payload:Object(j.a)(Object.keys(r))})}},a.state={database:{}},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("header",{className:"c-header ".concat(this.props.className||""),children:Object(v.jsx)(O,{onChange:function(t){return e.openFile(t)}})})}}]),n}(u.Component));x.contextType=m.Context;n(65);var k,g,w=n(15),N=n(23);n(66);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function S(e,t){var n=e.title,a=e.titleId,c=C(e,["title","titleId"]);return u.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",ref:t,"aria-labelledby":a},c),n?u.createElement("title",{id:a},n):null,k||(k=u.createElement("line",{x1:18,y1:6,x2:6,y2:18})),g||(g=u.createElement("line",{x1:6,y1:6,x2:18,y2:18})))}var E=u.forwardRef(S),A=(n.p,document.getElementById("portal")),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).element=document.createElement("div"),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){A.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){A.removeChild(this.element)}},{key:"render",value:function(){var e=this;return Object(N.createPortal)(Object(v.jsxs)("div",{className:"c-modal ".concat(this.props.medium&&"c-modal--medium"," ").concat(this.props.small&&"c-modal--small"," ").concat(this.props.top&&"c-modal--top"),children:[Object(v.jsx)("div",{className:"c-modal__overlay",onClick:function(){return e.props.onClose()}}),Object(v.jsxs)("div",{className:"c-modal__window",children:[Object(v.jsxs)("div",{className:"c-modal__window-header",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h1",{className:"c-modal__window-title",children:this.props.title||""})}),Object(v.jsx)(w.a,{circle:!0,className:"c-modal__window-close",onClick:function(){return e.props.onClose()},children:Object(v.jsx)(E,{})})]}),Object(v.jsx)("div",{className:"c-modal__window-body",children:this.props.children})]})]}),this.element)}}]),n}(d.a.Component),P=n(22),I=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).toggleModal=function(){console.log("OPA"),a.setState({showModal:!a.state.showModal})},a.state={showModal:!1},a}return Object(i.a)(n,[{key:"change",value:function(e){var t=JSON.parse(localStorage.getItem("database"));if(e&&t){var n=t[e],a=this.context.dispatch;a({action:"database.create",payload:n}),a({action:"database.setKey",payload:e})}}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("nav",{className:"c-vertical-nav ".concat(this.props.className||""),children:[this.state.showModal?Object(v.jsxs)(q,{title:"Login",onClose:function(){return e.toggleModal()},small:!0,children:[Object(v.jsx)(P.a,{label:"Insira o seu token do GitHub"}),Object(v.jsx)(P.a,{label:"Qual o reposit\xf3rio?"}),Object(v.jsx)("p",{children:Object(v.jsx)("small",{children:"O token ficar\xe1 gravado localmente, para que voc\xea n\xe3o precise voltar no GitHub quando quiser usar a plataforma novamente. Sendo assim, lembre-se de sair, caso esteja em um computador que n\xe3o confia."})}),Object(v.jsx)("div",{style:{margin:"8px 0"},children:Object(v.jsx)(w.a,{children:"ENTRAR E SALVAR"})}),Object(v.jsx)("p",{children:Object(v.jsxs)("small",{children:["Para criar um token no GitHub, basta acessar",Object(v.jsx)("a",{href:"https://github.com/settings/tokens",children:"https://github.com/settings/tokens"}),'. D\xea todas as permiss\xf5es do tipo "repo", e a op\xe7\xe3o "read:user".']})})]}):null,Object(v.jsx)("div",{className:"c-vertical-nav__header",children:"TSV Data"}),Object(v.jsxs)("div",{className:"c-vertical-nav__body",children:[Object(v.jsx)("p",{children:"You .tsv files:"}),this.props.items.length?Object(v.jsx)("ul",{className:"c-vertical-nav__list",children:this.props.items.map((function(t){return Object(v.jsx)("li",{className:"c-vertical-nav__list-item",onClick:function(){return e.change(t.value)},children:t.name},t.key)}))}):"You need to import some file"]}),Object(v.jsx)("div",{className:"c-vertical-nav__footer"})]})}}]),n}(u.Component);I.contextType=m.Context;var T=n(8),W=(n(67),n(85)),L=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"menuItems",value:function(){return this.context.state["database.keys"]||[]}},{key:"render",value:function(){var e=this.menuItems().map((function(e,t){return{name:Object(W.a)(new Date(parseInt(e)),"d-MM-Y HH:mm:ss"),value:e,key:Object(T.a)("ln-menu-".concat(t))}}));return Object(v.jsxs)("div",{className:"l-painel",children:[Object(v.jsx)("div",{className:"l-painel__leftnav",children:Object(v.jsx)(I,{items:e})}),Object(v.jsxs)("div",{className:"l-painel__right",children:[Object(v.jsx)(x,{className:"l-painel__header test"}),Object(v.jsx)("div",{className:"l-painel__content",children:this.props.children})]})]})}}]),n}(u.Component);L.contextType=m.Context},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),i=(n(40),n(28)),o=n(6),l=n(0),u=function(e,t){return t(e)};function d(){var e,t=n(42),c=n(60);return(e=t,e.keys().map((function(t){return u(t,e)}))).map((function(e){var t=e.default,n=e.config,r=n.layout?u("./".concat(n.layout,"/index.js"),c).default:a.Fragment;return Object(l.jsx)(o.a,{exact:void 0===n.exactRoute||n.exactRoute,path:n.route,children:Object(l.jsx)(r,{children:Object(l.jsx)(t,{})})},n.name)}))}var j=function(){return Object(l.jsx)(i.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o.c,{children:d()})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},p=n(11);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p.default,{children:Object(l.jsx)(j,{})})}),document.getElementById("root")),h()}],[[78,1,2]]]);
//# sourceMappingURL=main.dd3b56d9.chunk.js.map