function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(){return $("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:w(t,r,e[r])}function S(t,e,n){e in t?t[e]=n:w(t,e,n)}function x(t){return Array.from(t.childNodes)}function P(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?g(e):m(e)}function R(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function A(t){return R(t," ")}function L(t,e){e=""+e,t.data!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function j(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let k,O;function N(){if(void 0===k){k=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){k=!0}}return k}function q(t,e){const n=getComputedStyle(t),r=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const o=m("iframe");o.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${r};`),o.setAttribute("aria-hidden","true"),o.tabIndex=-1;const s=N();let a;return s?(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=v(window,"message",t=>{t.source===o.contentWindow&&e()})):(o.src="about:blank",o.onload=()=>{a=v(o.contentWindow,"resize",e)}),f(t,o),()=>{(s||a&&o.contentWindow)&&a(),d(o)}}function U(t,e,n){t.classList[n?"add":"remove"](e)}function D(t,e=document.body){return Array.from(e.querySelectorAll(t))}function I(t){O=t}function H(){if(!O)throw new Error("Function called outside component initialization");return O}function M(t){H().$$.before_update.push(t)}function T(t){H().$$.on_mount.push(t)}function z(t){H().$$.on_destroy.push(t)}function B(){const t=H();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const J=[],W=[],K=[],V=[],Y=Promise.resolve();let F=!1;function G(){F||(F=!0,Y.then(nt))}function X(){return G(),Y}function Q(t){K.push(t)}function Z(t){V.push(t)}let tt=!1;const et=new Set;function nt(){if(!tt){tt=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];I(e),rt(e.$$)}for(J.length=0;W.length;)W.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];et.has(e)||(et.add(e),e())}K.length=0}while(J.length);for(;V.length;)V.pop()();F=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}const ot=new Set;let st;function at(){st={r:0,c:[],p:st}}function ct(){st.r||o(st.c),st=st.p}function it(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(ot.has(t))return;ot.add(t),st.c.push(()=>{ot.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function ut(t,e){lt(t,1,1,()=>{e.delete(t.key)})}function ft(t,e,n,r,o,s,a,c,i,l,u,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function _(t){it(t,1),t.m(c,u),a.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,d--):$.has(o)?!a.has(r)||b.has(r)?_(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),_(e)):(b.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)_(g[d-1]);return g}function pt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function dt(t){return"object"==typeof t&&null!==t?t:{}}function ht(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function mt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function $t(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),Q(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(Q)}function yt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(e,n,s,a,c,i,l=[-1]){const u=O;I(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&function(t,e){-1===t.$$.dirty[0]&&(J.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=x(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&it(e.$$.fragment),$t(e,n.target,n.anchor),nt()}I(u)}class vt{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const _t=[];function wt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!_t.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),_t.push(n,e)}if(t){for(let t=0;t<_t.length;t+=2)_t[t][0](_t[t+1]);_t.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const Et={},St=()=>({});function xt(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=m("main"),o&&o.c(),this.h()},l(t){e=P(t,"MAIN",{class:!0});var n=x(e);o&&o.l(n),n.forEach(d),this.h()},h(){w(e,"class","svelte-167wu11")},m(t,r){p(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&l(o,r,t,t[0],e,null,null)},i(t){n||(it(o,t),n=!0)},o(t){lt(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function Pt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Rt extends vt{constructor(t){super(),bt(this,t,Pt,xt,a,{})}}function At(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=$(r)},l(t){e=P(t,"PRE",{});var o=x(e);n=R(o,r),o.forEach(d)},m(t,r){p(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&d(e)}}}function Lt(e){let n,r,o,s,a,c,i,l,u,h=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&At(e);return{c(){r=y(),o=m("h1"),s=$(e[0]),a=y(),c=m("p"),i=$(h),l=y(),g&&g.c(),u=b(),this.h()},l(t){D('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=A(t),o=P(t,"H1",{class:!0});var n=x(o);s=R(n,e[0]),n.forEach(d),a=A(t),c=P(t,"P",{class:!0});var f=x(c);i=R(f,h),f.forEach(d),l=A(t),g&&g.l(t),u=b(),this.h()},h(){w(o,"class","svelte-8od9u6"),w(c,"class","svelte-8od9u6")},m(t,e){p(t,r,e),p(t,o,e),f(o,s),p(t,a,e),p(t,c,e),f(c,i),p(t,l,e),g&&g.m(t,e),p(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&L(s,t[0]),2&e&&h!==(h=t[1].message+"")&&L(i,h),t[2]&&t[1].stack?g?g.p(t,e):(g=At(t),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(a),t&&d(c),t&&d(l),g&&g.d(t),t&&d(u)}}}function Ct(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class jt extends vt{constructor(t){super(),bt(this,t,Ct,Lt,a,{status:0,error:1})}}function kt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&mt(c.$$.fragment),n=b()},l(t){c&&gt(c.$$.fragment,t),n=b()},m(t,e){c&&$t(c,t,e),p(t,n,e),r=!0},p(t,e){const r=16&e?pt(o,[dt(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){at();const t=c;lt(t.$$.fragment,1,0,()=>{yt(t,1)}),ct()}s?(mt((c=new s(a())).$$.fragment),it(c.$$.fragment,1),$t(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&it(c.$$.fragment,t),r=!0)},o(t){c&&lt(c.$$.fragment,t),r=!1},d(t){t&&d(n),c&&yt(c,t)}}}function Ot(t){let e;const n=new jt({props:{error:t[0],status:t[1]}});return{c(){mt(n.$$.fragment)},l(t){gt(n.$$.fragment,t)},m(t,r){$t(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(it(n.$$.fragment,t),e=!0)},o(t){lt(n.$$.fragment,t),e=!1},d(t){yt(n,t)}}}function Nt(t){let e,n,r,o;const s=[Ot,kt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=b()},l(t){n.l(t),r=b()},m(t,n){a[e].m(t,n),p(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(at(),lt(a[i],1,1,()=>{a[i]=null}),ct(),n=a[e],n||(n=a[e]=s[e](t),n.c()),it(n,1),n.m(r.parentNode,r))},i(t){o||(it(n),o=!0)},o(t){lt(n),o=!1},d(t){a[e].d(t),t&&d(r)}}}function qt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Nt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new Rt({props:o});return{c(){mt(s.$$.fragment)},l(t){gt(s.$$.fragment,t)},m(t,e){$t(s,t,e),n=!0},p(t,[e]){const n=12&e?pt(r,[4&e&&{segment:t[2][0]},8&e&&dt(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(it(s.$$.fragment,t),n=!0)},o(t){lt(s.$$.fragment,t),n=!1},d(t){yt(s,t)}}}function Ut(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,H().$$.after_update.push(u),f=Et,p=r,H().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class Dt extends vt{constructor(t){super(),bt(this,t,Ut,qt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const It=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],Ht=[{js:()=>import("./index.d93d9784.js"),css:[]},{js:()=>import("./about.601e02e6.js"),css:[]},{js:()=>import("./index.b486fa69.js"),css:[]},{js:()=>import("./[slug].206bbaef.js"),css:[]},{js:()=>import("./index.5a3cd67c.js"),css:[]},{js:()=>import("./index.d883dca9.js"),css:[]},{js:()=>import("./index.e590474c.js"),css:[]}],Mt=(Tt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:Tt(t[1])})}]},{pattern:/^\/home\/?$/,parts:[{i:4}]},{pattern:/^\/home\/components\/stepInit\/?$/,parts:[null,null,{i:5}]},{pattern:/^\/home\/components\/trash\/?$/,parts:[null,null,{i:6}]}]);var Tt;const zt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Bt,Jt,Wt,Kt=!1,Vt=[],Yt="{}";const Ft={page:function(t){const e=wt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:wt(null),session:wt(zt&&zt.session)};let Gt,Xt;Ft.session.subscribe(async t=>{if(Gt=t,!Kt)return;Xt=!0;const e=se(new URL(location.href)),n=Jt={},{redirect:r,props:o,branch:s}=await le(e);n===Jt&&await ie(r,s,o,e.page)});let Qt,Zt=null;let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},re={};function oe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function se(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(zt.baseUrl))return null;let e=t.pathname.slice(zt.baseUrl.length);if(""===e&&(e="/"),!It.some(t=>t.test(e)))for(let n=0;n<Mt.length;n+=1){const r=Mt[n],o=r.pattern.exec(e);if(o){const n=oe(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function ae(){return{x:pageXOffset,y:pageYOffset}}async function ce(t,e,n,r){if(e)te=e;else{const t=ae();re[te]=t,e=te=++ee,re[te]=n?t:{x:0,y:0}}te=e,Bt&&Ft.preloading.set(!0);const o=Zt&&Zt.href===t.href?Zt.promise:le(t);Zt=null;const s=Jt={},{redirect:a,props:c,branch:i}=await o;if(s===Jt&&(await ie(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=re[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}re[te]=t,t&&scrollTo(t.x,t.y)}}async function ie(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=se(new URL(t,document.baseURI));return n?(ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),ce(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ft.page.set(r),Ft.preloading.set(!1),Bt)Bt.$set(n);else{n.stores={page:{subscribe:Ft.page.subscribe},preloading:{subscribe:Ft.preloading.subscribe},session:Ft.session},n.level0={props:await Wt},n.notify=Ft.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)fe(t.nextSibling);fe(t),fe(e)}Bt=new Dt({target:Qt,props:n,hydrate:!0})}Vt=e,Yt=JSON.stringify(r.query),Kt=!0,Xt=!1}async function le(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Wt||(Wt=zt.preloaded[0]||St.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Gt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Yt)return!0;const o=Vt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Xt&&!u&&Vt[c]&&Vt[c].part===e.i)return Vt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ue);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Ht[e.i]);let m;return m=Kt||!zt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Gt):{}:zt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function ue(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function fe(t){t.parentNode.removeChild(t)}function pe(t){const e=se(new URL(t,document.baseURI));if(e)return Zt&&t===Zt.href||function(t,e){Zt={href:t,promise:e}}(t,le(e)),Zt.promise}let de;function he(t){clearTimeout(de),de=setTimeout(()=>{me(t)},20)}function me(t){const e=$e(t.target);e&&"prefetch"===e.rel&&pe(e.href)}function ge(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=$e(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=se(o);if(s){ce(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),ne.pushState({id:te},"",o.href)}}function $e(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ye(t){if(re[te]=ae(),t.state){const e=se(new URL(location.href));e?ce(e,t.state.id):location.href=location.href}else ee=ee+1,function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}var be;be={target:document.querySelector("#sapper")},"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ne.scrollRestoration="auto"}),addEventListener("load",()=>{ne.scrollRestoration="manual"}),function(t){Qt=t}(be.target),addEventListener("click",ge),addEventListener("popstate",ye),addEventListener("touchstart",me),addEventListener("mousemove",he),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=new URL(location.href);if(zt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=zt;Wt||(Wt=s&&s[0]),ie(null,[],{error:c,status:a,session:o,level0:{props:Wt},level1:{props:{status:a,error:c},component:jt},segments:s},{host:e,path:n,query:oe(r),params:{}})}();const r=se(n);return r?ce(r,ee,!0,t):void 0});export{Q as A,q as B,v as C,at as D,ft as E,ct as F,T as G,c as H,ut as I,X as J,W as K,b as L,B as M,z as N,M as O,o as P,g as Q,_ as R,vt as S,U as T,e as U,E as V,C as W,pt as X,ht as Y,u as Z,Z as _,P as a,x as b,mt as c,gt as d,m as e,d as f,p as g,lt as h,bt as i,yt as j,$ as k,y as l,$t as m,t as n,R as o,A as p,w as q,f as r,a as s,it as t,D as u,L as v,h as w,S as x,l as y,j as z};
