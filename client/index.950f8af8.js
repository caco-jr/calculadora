import{S as a,i as s,s as e,f as t,g as c,e as l,k as r,l as o,o as n,h as i,j as h,p as u,r as f,u as d,n as m,c as v,q as p,a as E,m as _,t as b,b as g,d as x,y as z,z as $}from"./client.f0702e7d.js";import{H}from"./routesURI.5c08361e.js";function A(a){let s,e,v,p,E,_,b;return{c(){s=t("header"),e=t("a"),v=t("span"),p=c("CalculadHora"),E=l(),_=t("span"),b=c("Você no controle do seu tempo"),this.h()},l(a){s=r(a,"HEADER",{class:!0});var t=o(s);e=r(t,"A",{class:!0,href:!0});var c=o(e);v=r(c,"SPAN",{class:!0});var l=o(v);p=n(l,"CalculadHora"),l.forEach(i),E=h(c),_=r(c,"SPAN",{class:!0});var u=o(_);b=n(u,"Você no controle do seu tempo"),u.forEach(i),c.forEach(i),t.forEach(i),this.h()},h(){u(v,"class","c-header__title svelte-zbdi2y"),u(_,"class","c-header__sub-title svelte-zbdi2y"),u(e,"class","c-header__box svelte-zbdi2y"),u(e,"href",H),u(s,"class","container c-header svelte-zbdi2y")},m(a,t){f(a,s,t),d(s,e),d(e,v),d(v,p),d(e,E),d(e,_),d(_,b)},p:m,i:m,o:m,d(a){a&&i(s)}}}class C extends a{constructor(a){super(),s(this,a,null,A,e,{})}}function S(a){let s,e,z,$,A,S,N,P,R,I,T,j,k,L,O;const Q=new C({});return{c(){s=l(),e=t("section"),v(Q.$$.fragment),z=l(),$=t("section"),A=t("h1"),S=c("Qual sua carga horária diária?"),N=l(),P=t("input"),R=l(),I=t("a"),T=c("Próximo"),j=l(),k=t("label"),L=c("Realiza pausas além do almoço?"),this.h()},l(a){p('[data-svelte="svelte-fk21zc"]',document.head).forEach(i),s=h(a),e=r(a,"SECTION",{class:!0});var t=o(e);E(Q.$$.fragment,t),z=h(t),$=r(t,"SECTION",{class:!0});var c=o($);A=r(c,"H1",{class:!0});var l=o(A);S=n(l,"Qual sua carga horária diária?"),l.forEach(i),N=h(c),P=r(c,"INPUT",{class:!0,value:!0}),R=h(c),I=r(c,"A",{href:!0,class:!0});var u=o(I);T=n(u,"Próximo"),u.forEach(i),j=h(c),k=r(c,"LABEL",{class:!0});var f=o(k);L=n(f,"Realiza pausas além do almoço?"),f.forEach(i),c.forEach(i),t.forEach(i),this.h()},h(){document.title="Carga Horária | CalculadHora",u(A,"class","ct-init__title svelte-ena985"),u(P,"class","ct-init__input svelte-ena985"),P.value=y,u(I,"href",H),u(I,"class","ct-init__button svelte-ena985"),u(k,"class","ct-init__checkbox-box svelte-ena985"),u($,"class","container"),u(e,"class","ct-init svelte-ena985")},m(t,c){f(t,s,c),f(t,e,c),_(Q,e,null),d(e,z),d(e,$),d($,A),d(A,S),d($,N),d($,P),a[1](P),d($,R),d($,I),d(I,T),d($,j),d($,k),d(k,L),O=!0},p:m,i(a){O||(b(Q.$$.fragment,a),O=!0)},o(a){g(Q.$$.fragment,a),O=!1},d(t){t&&i(s),t&&i(e),x(Q),a[1](null)}}}let y="8:48";function N(a,s,e){let t;return z(()=>{setTimeout(()=>{t.focus(),t.setSelectionRange(y.length,y.length)},500)}),[t,function(a){$[a?"unshift":"push"](()=>{e(0,t=a)})}]}export default class extends a{constructor(a){super(),s(this,a,N,S,e,{})}}
