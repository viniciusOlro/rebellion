(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69c0a4a0"],{5909:function(e,t,n){"use strict";n("63fd")},"63fd":function(e,t,n){},"73cf":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["u"])("data-v-2305d8fa"),e=e(),Object(r["s"])(),e},c={id:"register",class:"container"},u={key:0},i=a((function(){return Object(r["g"])("h1",null,"Alistar-se",-1)})),o=a((function(){return Object(r["g"])("p",null,"Você quer destruir o Império? Nunca foi tão fácil. Preencha seus dados e se aliste agora mesmo.",-1)})),l={class:"form-group"},s=a((function(){return Object(r["g"])("label",null,"Nome",-1)})),b={class:"form-group"},d=a((function(){return Object(r["g"])("label",null,"Planeta",-1)})),f={class:"form-group"},p=a((function(){return Object(r["g"])("label",null,"Por que você quer se juntar à aliança rebelde?",-1)})),j={class:"form-group"},O=a((function(){return Object(r["g"])("label",null,"Data de nascimento",-1)})),g=a((function(){return Object(r["g"])("input",{type:"submit",value:"Alistar!"},null,-1)})),m={key:1,class:"message"},v=a((function(){return Object(r["g"])("h1",null,"Alistamento realizado com sucesso!",-1)})),h=a((function(){return Object(r["g"])("p",null,"Bem-vindo às forças armadas da Aliança Rebelde =)",-1)})),y=Object(r["h"])("Concluir");function D(e,t,n,a,D,N){var k=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",c,[D.registered?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("div",u,[i,o,Object(r["g"])("form",{onSubmit:t[4]||(t[4]=function(e){return N.registerRebel(e)})},[Object(r["g"])("div",l,[s,Object(r["F"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return D.rebelName=e})},null,512),[[r["C"],D.rebelName]])]),Object(r["g"])("div",b,[d,Object(r["F"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return D.planetName=e})},null,512),[[r["C"],D.planetName]])]),Object(r["g"])("div",f,[p,Object(r["F"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return D.reasonText=e})},null,512),[[r["C"],D.reasonText]])]),Object(r["g"])("div",j,[O,Object(r["F"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[3]||(t[3]=function(e){return D.birthdayDate=e})},null,512),[[r["C"],D.birthdayDate]])]),g],32)])),D.registered?(Object(r["r"])(),Object(r["f"])("div",m,[v,h,Object(r["i"])(k,{to:"/"},{default:Object(r["E"])((function(){return[y]})),_:1})])):Object(r["e"])("",!0)])}n("ac1f"),n("1276"),n("a15b");var N={class:"form-group"},k=["type"];function x(e,t,n,a,c,u){return Object(r["r"])(),Object(r["f"])("div",N,[Object(r["g"])("label",null,Object(r["A"])(n.label),1),Object(r["g"])("input",{type:n.type},null,8,k)])}var w={name:"Input",props:{type:String,label:String}},A=(n("5909"),n("d959")),C=n.n(A);const I=C()(w,[["render",x],["__scopeId","data-v-9049197a"]]);var R=I,V={name:"Register",data:function(){return{rebelName:"",planetName:"",reasonText:"",birthdayDate:"",registered:!1}},components:{Input:R},methods:{formatDate:function(){var e=this.birthdayDate,t=e.split("-",3).reverse(),n=t.join("/");this.birthdayDate=n},registerRebel:function(e){var t=this;e.preventDefault(),this.formatDate();var r=n("bc3a"),a={name:this.rebelName,planet:this.planetName,birthDate:this.birthdayDate,description:this.reasonText};r.post("https://test-mais-a-educacao-v1.herokuapp.com/?token=viniciusDeOliveiraRodrigues",a).then((function(e){t.registered=!0})).catch((function(e){console.log(e)}))}}};n("edbd");const _=C()(V,[["render",D],["__scopeId","data-v-2305d8fa"]]);t["default"]=_},"73fb":function(e,t,n){},edbd:function(e,t,n){"use strict";n("73fb")}}]);
//# sourceMappingURL=chunk-69c0a4a0.221dd105.js.map