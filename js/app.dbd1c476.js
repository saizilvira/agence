(function(){"use strict";var t={2384:function(t,e,n){var r=n(9242),o=n(3396);function a(t,e,n,r,a,i){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(c)}var i=(0,o.aZ)({name:"App",components:{}}),c=n(89);const u=(0,c.Z)(i,[["render",a]]);var s=u,l=n(2483);const d=(0,l.p7)({history:(0,l.PO)(),routes:[{path:"/",name:"desempenho",component:()=>n.e(287).then(n.bind(n,6287))}],scrollBehavior(){return{top:0}}});var f=d,p=n(7139);const m={class:"table table-sm table-bordered"},h=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"Período"),(0,o._)("th",{scope:"col"},"Receita Líquida"),(0,o._)("th",{scope:"col"},"Custo Fixo"),(0,o._)("th",{scope:"col"},"Comissão"),(0,o._)("th",{scope:"col"},"Lucro")])],-1),v={class:"text-end"},y={class:"text-end"},b={class:"text-end"},g={class:"text-end"},_={class:"table-light"},w=(0,o._)("th",{scope:"row"},"SALDO",-1),C={class:"text-end"},k={class:"text-end"},L={class:"text-end"},x={class:"text-end"},O=(0,o._)("hr",{class:"mt-5"},null,-1);function D(t,e,n,r,a,i){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.data,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"table-responsive mt-4"},[(0,o._)("h5",null,(0,p.zw)(e[0].no_usuario),1),(0,o._)("table",m,[h,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,((e,n)=>((0,o.wg)(),(0,o.iD)("tr",{key:n},[(0,o._)("td",null,(0,p.zw)(e.periodo),1),(0,o._)("td",v,(0,p.zw)(t.formatCurrency(e.receita_liquida)),1),(0,o._)("td",y,(0,p.zw)(t.formatCurrency(e.custo_fixo)),1),(0,o._)("td",b,(0,p.zw)(t.formatCurrency(e.comissao)),1),(0,o._)("td",g,(0,p.zw)(t.formatCurrency(e.lucro)),1)])))),128))]),(0,o._)("tfoot",_,[w,(0,o._)("td",C,(0,p.zw)(t.totalReceitaLiquida(t.data[n])),1),(0,o._)("td",k,(0,p.zw)(t.formatCurrency(e[0].custo_fixo)),1),(0,o._)("td",L,(0,p.zw)(t.totalComissao(t.data[n])),1),(0,o._)("td",x,(0,p.zw)(t.totalLucro(t.data[n])),1)])]),O])))),128)}var P=(0,o.aZ)({props:["data"],methods:{totalReceitaLiquida(t){let e=0;return t.forEach((t=>{e+=parseFloat(t.receita_liquida)})),this.formatCurrency(e)},totalComissao(t){let e=0;return t.forEach((t=>{e+=parseFloat(t.comissao)})),this.formatCurrency(e)},totalLucro(t){let e=0;return t.forEach((t=>{e+=parseFloat(t.lucro)})),this.formatCurrency(e)},formatCurrency(t){const e=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});return e.format(t)}}});const j=(0,c.Z)(P,[["render",D]]);var E=j;const F={class:"container p-sm-5"};function A(t,e,n,r,a,i){const c=(0,o.up)("Bar");return(0,o.wg)(),(0,o.iD)("div",F,[(0,o.Wm)(c,{data:t.chartData,options:t.chartOptions},null,8,["data","options"])])}n(7658);var R=n(5866),S=n(9646);S.kL.register(S.uw,S.f$,S.ZL,S.Dx,S.u,S.De,S.uw,S.od,S.jn);var q=(0,o.aZ)({props:["data"],components:{Bar:R.$Q},data(t){let e=[],n=[],r=[],o=0;for(const[a,i]of t.data.entries()){let t=0;e.push(i[0].no_usuario);for(const e of i)t+=parseFloat(e.receita_liquida);o+=parseInt(i[0].custo_fixo),n.push(t),r.push(o)}return{chartData:{labels:e,datasets:[{type:"bar",backgroundColor:["IndianRed","Pink","LightSalmon","Gold","Lavender","GreenYellow"],label:"Receita Líquida",data:n}]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},methods:{formatCurrency(t){const e=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});return e.format(t)}}});const z=(0,c.Z)(q,[["render",A]]);var B=z;const N={class:"container p-sm-5"};function Z(t,e,n,r,a,i){const c=(0,o.up)("Pie");return(0,o.wg)(),(0,o.iD)("div",N,[(0,o.Wm)(c,{data:t.chartData,options:t.options},null,8,["data","options"])])}S.kL.register(S.qi,S.u,S.De);var T=(0,o.aZ)({props:["data"],components:{Pie:R.by},data(t){let e=[],n=[],r=0;for(const[o,a]of t.data.entries())for(const t of a)r+=parseFloat(t.receita_liquida);for(const[o,a]of t.data.entries()){let t=0;e.push(a[0].no_usuario);for(const e of a)t+=parseFloat(e.receita_liquida);n.push((t/r*100).toFixed(2))}return{chartData:{labels:e,datasets:[{backgroundColor:["IndianRed","Pink","LightSalmon","Gold","Lavender","GreenYellow"],data:n}]},options:{responsive:!0,maintainAspectRatio:!1}}}});const I=(0,c.Z)(T,[["render",Z]]);var G=I,M=n(6368);n(9955);(0,r.ri)(s).use(f).component("Relatorio",E).component("Grafico",B).component("Pizza",G).component("VueMultiselect",M.ZP).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".70c8bd66.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".9569f2ce.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="performance-comercial:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var f=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(e(i,c))return o();t(r,c,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={287:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkperformance_comercial"]=self["webpackChunkperformance_comercial"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2384)}));r=n.O(r)})();
//# sourceMappingURL=app.dbd1c476.js.map