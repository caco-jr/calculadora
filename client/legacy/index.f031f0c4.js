import{_ as t,a,b as n,c as s,i as c,s as e,d as o,S as r,j as i,k as l,l as u,q as f,o as d,p as v,r as h,u as p,v as m,w as g,x as y,y as _,n as E,z as x,A as S,B as C}from"./client.e1bd401b.js";import{S as I}from"./routesURI.298a19a2.js";function b(t){var a=t-1;return a*a*a+1}function R(t,a){var n=a.delay,s=void 0===n?0:n,c=a.duration,e=void 0===c?400:c,o=a.easing,r=void 0===o?b:o,i=a.x,l=void 0===i?0:i,u=a.y,f=void 0===u?0:u,d=a.opacity,v=void 0===d?0:d,h=getComputedStyle(t),p=+h.opacity,m="none"===h.transform?"":h.transform,g=p*(1-v);return{delay:s,duration:e,easing:r,css:function(t,a){return"\n\t\t\ttransform: ".concat(m," translate(").concat((1-t)*l,"px, ").concat((1-t)*f,"px);\n\t\t\topacity: ").concat(p-g*a)}}}function H(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=a(t);if(s){var o=a(this).constructor;c=Reflect.construct(e,arguments,o)}else c=e.apply(this,arguments);return n(this,c)}}function N(t){var a,n,s,c,e,o,r,b,H,N,j,A,O,T,D,P,V;return{c:function(){a=i(),n=l("section"),s=l("section"),c=l("section"),e=l("h1"),o=u("CalculadHora"),r=i(),b=l("span"),H=u("Você no controle do seu tempo"),N=i(),j=l("a"),A=u("Iniciar"),O=i(),T=l("img"),this.h()},l:function(t){f('[data-svelte="svelte-ti9r0e"]',document.head).forEach(d),a=v(t),n=h(t,"SECTION",{class:!0});var i=p(n);s=h(i,"SECTION",{class:!0});var l=p(s);c=h(l,"SECTION",{class:!0});var u=p(c);e=h(u,"H1",{class:!0});var g=p(e);o=m(g,"CalculadHora"),g.forEach(d),r=v(u),b=h(u,"SPAN",{class:!0});var y=p(b);H=m(y,"Você no controle do seu tempo"),y.forEach(d),N=v(u),j=h(u,"A",{class:!0,href:!0});var _=p(j);A=m(_,"Iniciar"),_.forEach(d),u.forEach(d),l.forEach(d),O=v(i),T=h(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(d),this.h()},h:function(){document.title="CalculadHora",g(e,"class","ct-landing__title svelte-1064he4"),g(b,"class","ct-landing__sub-title svelte-1064he4"),g(j,"class","ct-landing__button svelte-1064he4"),g(j,"href",I),g(c,"class","ct-landing__content-box svelte-1064he4"),g(s,"class","container"),T.src!=="images/person.svg"&&g(T,"src","images/person.svg"),g(T,"alt","person"),g(T,"class","ct-landing__image svelte-1064he4"),g(n,"class","ct-landing svelte-1064he4")},m:function(t,i){y(t,a,i),y(t,n,i),_(n,s),_(s,c),_(c,e),_(e,o),_(c,r),_(c,b),_(b,H),_(c,N),_(c,j),_(j,A),_(n,O),_(n,T),V=!0},p:E,i:function(t){V||(S((function(){P&&P.end(1),D||(D=C(n,R,{x:300,duration:500})),D.start()})),V=!0)},o:function(t){D&&D.invalidate(),P=x(n,R,{x:-300,duration:300}),V=!1},d:function(t){t&&d(a),t&&d(n),t&&P&&P.end()}}}var j=function(a){t(i,r);var n=H(i);function i(t){var a;return s(this,i),a=n.call(this),c(o(a),t,null,N,e,{}),a}return i}();export default j;
