var e=Object.defineProperty,t=(t,s,o)=>(((t,s,o)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o})(t,"symbol"!=typeof s?s+"":s,o),o);import{s,V as o,a as r,b as a,W as i,C as n,m as l,g as c,c as d,d as u,B as h}from"./vendor.656f5cd3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m=localStorage.getItem("locale")?""+localStorage.getItem("locale"):(navigator.language||navigator.userLanguage).startsWith("de")?"de":"en",p="",g={light:{version:8,layers:[],sources:{}},dark:{version:8,layers:[],sources:{}}},f="pk.eyJ1IjoidnNwLXR1LWJlcmxpbiIsImEiOiJjamNpemh1bmEzNmF0MndudHI5aGFmeXpoIn0.u9f04rjFo7ZbWiSceTTXyA";var b,v,L,y;(v=b||(b={}))[v.INFO=0]="INFO",v[v.WARNING=1]="WARNING",v[v.ERROR=2]="ERROR",(y=L||(L={}))[y.NUMBER=0]="NUMBER",y[y.STRING=1]="STRING",y[y.BOOLEAN=2]="BOOLEAN",y[y.DATE=3]="DATE",y[y.LOOKUP=4]="LOOKUP";const S="'Titillium Web', 'Roboto', 'Open Sans', Avenir, Arial, Helvetica, sans-serif";var w,k,E,F,_,C;(k=w||(w={})).LightMode="light",k.DarkMode="dark",(F=E||(E={})).Susceptible="susceptible",F.InfectedButNotContagious="infectedButNotContagious",F.Contagious="contagious",(C=_||(_={}))[C.line=0]="line",C[C.box=1]="box";const O={},R=window.location,M=R.hostname,I=`${R.protocol}//${M}`;function P(e,t){const o=t||"fs"+(1+Object.keys($.state.localFileHandles).length),r={name:e.name,slug:o,description:"Local folder",handle:e,baseURL:""};return U.unshift(r),$.commit("addLocalFileSystem",{key:r.slug,handle:e}),s("fs",$.state.localFileHandles),r.slug}const U=[{name:M+" live folders",slug:"live",description:'Files served using "simwrapper here"',baseURL:I+":8050/_f_",hidden:!0},{name:"Public Data Folder",slug:"public",description:"Data from /public/data folder",baseURL:R.origin+"/dashboard/data",hidden:!0},{name:"Browse data",slug:"view",description:"View this site's datasets",baseURL:R.origin+"/data",hidden:!0},{name:"Localhost",slug:"local",description:'Files on this computer, shared using "simwrapper serve" tool',baseURL:"http://localhost:8000",thumbnail:"/simwrapper/images/thumb-localfiles.jpg"},{name:"Public Scenarios",slug:"public-svn",description:"Simulation results from VSP at TU-Berlin",baseURL:"https://svn.vsp.tu-berlin.de/repos/public-svn/matsim/scenarios/countries",thumbnail:"/simwrapper/images/thumb-chart.jpg",skipList:["episim/battery"]},{name:"Sample Runs",slug:"sample-runs",description:"Pre-built dashboards for exploration",thumbnail:"images/thumb-localfiles.jpg",baseURL:"https://svn.vsp.tu-berlin.de/repos/public-svn/shared/billy/simwrapper/sample-data",hidden:!0},{name:"KoMoDnext",slug:"komodnext",description:"Automated driving in the digital test field, Düsseldorf",description_de:"Automatisiertes Fahren im digitalen Testfeld Düsseldorf",baseURL:"https://svn.vsp.tu-berlin.de/repos/public-svn/matsim/scenarios/countries/de/duesseldorf/projects/komodnext/website",thumbnail:"/simwrapper/images/thumb-localfiles.jpg",hidden:!0},{name:"SFCTA Prospector",slug:"champ",description:"Shared CHAMP model runs",baseURL:"http://prospector/champ_runs",hidden:!0}];for(let se=8e3;se<8049;se++)U.push({name:"Localhost "+se,slug:`${se}`,description:"Localhost "+se,description_de:"Localhost "+se,baseURL:"http://localhost:"+se,hidden:!0});for(let se=8050;se<8099;se++)U.push({name:M+se,slug:`${se}`,description:M+se,description_de:M+se,baseURL:I+`:${se}/_f_`,hidden:!0});o.use(r);var $=new r.Store({state:{app:"SimWrapper",debug:!1,authAttempts:0,breadcrumbs:[],credentials:{fake:"fake"},dashboardWidth:"",isFullScreen:!1,isFullWidth:!1,isShowingLeftBar:!1,isDarkMode:!1,mapStyles:{light:"mapbox://styles/mapbox/light-v10",dark:"mapbox://styles/vsp-tu-berlin/ckek59op0011219pbwfar1rex"},needLoginForUrl:"",statusErrors:[],statusWarnings:[],statusMessage:"Loading",svnProjects:U,visualizationTypes:new Map,colorScheme:w.LightMode,locale:"en",localFileHandles:[],runFolders:{},runFolderCount:0,resizeEvents:0,viewState:{initial:!0,pitch:0,bearing:0,maxZoom:24,longitude:0,latitude:0,zoom:8}},mutations:{updateRunFolders(e,t){e.runFolderCount=t.number,e.runFolders=t.folders},requestLogin(e,t){e.needLoginForUrl=t},registerPlugin(e,t){e.visualizationTypes.set(t.kebabName,t)},setBreadCrumbs(e,t){e.breadcrumbs=t},setCredentials(e,t){const s=btoa(`${t.username}:${t.pw}`);e.credentials[t.url]=s,e.authAttempts++},setFullScreen(e,t){e.isFullScreen=t},setMapStyles(e,t){e.mapStyles=t},setMapCamera(e,t){t.jump?e.viewState.initial&&(e.viewState=t):e.viewState=t},error(e,t){e.statusErrors.length&&e.statusErrors[e.statusErrors.length-1].msg===t||(e.statusErrors.push({msg:t,desc:""}),e.isShowingLeftBar=!0)},setStatus(e,t){var s;(null==(s=t.desc)?void 0:s.length)||(t.desc="");const o={msg:t.msg,desc:t.desc};t.type===b.INFO?e.statusMessage=t.msg:t.type===b.WARNING?e.statusWarnings.length&&e.statusWarnings[e.statusWarnings.length-1].msg===t.msg||e.statusWarnings.push(o):e.statusErrors.length&&e.statusErrors[e.statusErrors.length-1].msg===t.msg||(e.statusErrors.push(o),e.isShowingLeftBar=!0)},clearError(e,t){e.statusErrors.length>=t&&e.statusErrors.splice(t,1)},clearAllErrors(e){e.statusErrors=[],e.statusWarnings=[]},resize(e){e.resizeEvents+=1},rotateColors(e){e.colorScheme=e.colorScheme===w.DarkMode?w.LightMode:w.DarkMode,console.log("NEW COLORS:",e.colorScheme),e.isDarkMode=e.colorScheme===w.DarkMode,localStorage.setItem("colorscheme",e.colorScheme),document.body.style.backgroundColor=e.colorScheme===w.LightMode?"#edebe4":"#2d3133"},setLocale(e,t){e.locale=t.toLocaleLowerCase(),localStorage.setItem("locale",e.locale)},addLocalFileSystem(e,t){e.localFileHandles.unshift(t)},setLocalFileSystem(e,t){e.localFileHandles=t},setShowLeftBar(e,t){e.isShowingLeftBar=t},toggleShowLeftBar(e){e.isShowingLeftBar=!e.isShowingLeftBar},setDashboardWidth(e,t){e.dashboardWidth=t},setFullWidth(e,t){e.isFullWidth=t},toggleFullWidth(e){e.isFullWidth=!e.isFullWidth}},actions:{},modules:{},getters:{mapStyle:e=>e.isDarkMode?e.mapStyles.dark:e.mapStyles.light}});const W={},D=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/dashboard/${e}`)in W)return;W[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};o.use(a);const N="/dashboard/",j=new a({mode:"history",base:"/",routes:[{path:N+"gist/:id",component:()=>D((()=>import("./GistView.6ee086a0.js")),["assets/GistView.6ee086a0.js","assets/GistView.9442f3a2.css","assets/vendor.656f5cd3.js","assets/DashBoard.22d9adb0.js","assets/DashBoard.c645f912.css"]),props:e=>({id:e.params.id})},{path:N+"*",component:()=>D((()=>import("./ScreenSplitter.8875d2ae.js")),["assets/ScreenSplitter.8875d2ae.js","assets/ScreenSplitter.14120d74.css","assets/vendor.656f5cd3.js","assets/DashBoard.22d9adb0.js","assets/DashBoard.c645f912.css"])},{path:"*",redirect:N}],scrollBehavior:(e,t,s)=>s||{x:0,y:0}});var x=Object.defineProperty,B=Object.getOwnPropertyDescriptor,A=(e,t,s,o)=>{for(var r,a=o>1?void 0:o?B(t,s):t,i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(t,s,a):r(a))||a);return o&&a&&x(t,s,a),a};let T=class extends o{constructor(){super(...arguments),t(this,"globalState",$.state),t(this,"username",""),t(this,"password",""),t(this,"expandOnHover",!0),t(this,"fullheight",!0),t(this,"fullwidth",!1),t(this,"mobile","reduce"),t(this,"reduce",!1),t(this,"overlay",!0),t(this,"right",!1),t(this,"theme","is-light"),t(this,"projects",this.globalState.svnProjects),t(this,"subfolders",[{name:"hello"}]),t(this,"open",!1)}showLoginPanel(){this.open=""!==this.globalState.needLoginForUrl}panelMayBeClosing(){this.open||$.commit("requestLogin","")}get whichLogin(){try{return this.globalState.svnProjects.filter((e=>e.url===this.globalState.needLoginForUrl))[0].name}catch(e){}return"this site"}clickedLogin(){$.commit("setCredentials",{url:this.globalState.needLoginForUrl,username:this.username,pw:this.password}),this.globalState.needLoginForUrl=""}};A([i("globalState.needLoginForUrl")],T.prototype,"showLoginPanel",1),A([i("open")],T.prototype,"panelMayBeClosing",1),T=A([n({components:{},props:{}})],T);function H(e,t,s,o,r,a,i,n){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=n?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}const V={};var z=H(T,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sidebar-page"},[s("section",{staticClass:"sidebar-layout"},[s("b-sidebar",{attrs:{type:"is-light",fullheight:e.fullheight,fullwidth:e.fullwidth,overlay:e.overlay,right:e.right,open:e.open},on:{"update:open":function(t){e.open=t}}},[s("div",{staticClass:"all-stuff"},[s("div",{staticClass:"block"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"vsp-logo",attrs:{src:"/dashboard/assets/vsp-logo-left.88042ade.png",alt:"TU Berlin VSP Department"}})])]),s("b-menu-list",{attrs:{label:"Login Required"}}),s("p",{staticClass:"my-label"},[e._v(e._s(e.whichLogin)+": access to this site requires a login.")]),s("b-menu-list",{attrs:{label:"Username"}}),s("b-input",{attrs:{placeholder:"VSP username",maxlength:"30"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("b-menu-list",{attrs:{label:"Password"}}),s("b-input",{attrs:{type:"password","password-reveal":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("b-button",{staticClass:"my-space is-primary",attrs:{disabled:!e.username||!e.password},on:{click:e.clickedLogin}},[e._v("Login")])],1)])],1)])}),[],!1,K,"900a1920",null,null);function K(e){for(let t in V)this[t]=V[t]}var G=function(){return z.exports}(),q=Object.defineProperty,X=Object.getOwnPropertyDescriptor;l.accessToken=f;let J=class extends o{constructor(){super(...arguments),t(this,"state",$.state)}async mounted(){const e=localStorage.getItem("colorscheme")?localStorage.getItem("colorscheme"):(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)")).matches?w.DarkMode:w.LightMode;e===w.DarkMode&&this.$store.commit("rotateColors"),document.body.style.backgroundColor=e===w.LightMode?"#edebe4":"#2d3133",this.toggleFullScreen(!0),this.setOnlineOrOfflineMode(),await this.setupLocalFiles(),document.addEventListener("keydown",this.toggleUIPanels)}beforeDestroy(){document.removeEventListener("keyup",this.toggleUIPanels)}toggleUIPanels(e){e.altKey&&e.shiftKey&&81===e.keyCode&&(console.log("QUICKVIEW"),this.$store.commit("toggleShowLeftBar"),this.$store.commit("resize")),e.altKey&&e.shiftKey&&87===e.keyCode&&(console.log("WIIIDE"),this.$store.commit("toggleFullWidth"),this.$store.commit("resize"))}async setupLocalFiles(){if($.state.localFileHandles.length)return;const e=await c("fs");if(e&&e.length)for(const t of e)P(t.handle,t.key)}setOnlineOrOfflineMode(){fetch("https://raw.githubusercontent.com/simwrapper/simwrapper/master/package.json").then((e=>{console.log("online!!")})).catch((e=>{console.log("offline!"),this.$store.commit("setMapStyles",g)}))}get topNavLinks(){return[{name:"scout",url:""}].concat(this.state.svnProjects)}removeAllErrors(){this.$store.commit("clearAllErrors")}toggleLocale(){const e="en"===this.state.locale?"de":"en";this.$store.commit("setLocale",e),this.$root.$i18n.locale=e}toggleTheme(){this.$store.commit("rotateColors")}get isDarkMode(){return this.state.colorScheme==w.DarkMode}toggleFullScreen(e){e?(document.body.classList.add("full-screen-page"),document.documentElement.style.overflowY="auto"):(document.body.classList.remove("full-screen-page"),document.documentElement.style.overflowY=null)}};J=((e,t,s,o)=>{for(var r,a=o>1?void 0:o?X(t,s):t,i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(t,s,a):r(a))||a);return o&&a&&q(t,s,a),a})([n({i18n:{messages:{en:{light:"light",dark:"dark",share:"share"},de:{light:"hell",dark:"dark",share:"teilen"}}},components:{LoginPanel:G}})],J);const Y={};var Z=H(J,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{"full-page-app":!0,"dark-mode":e.isDarkMode},attrs:{id:"main-app"}},[s("div",{staticClass:"center-area"},[s("login-panel",{staticClass:"login-panel"}),s("router-view",{staticClass:"main-content"}),e._m(0)],1)])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticStyle:{"text-justify":"center",margin:"auto auto","font-size":"2rem"}},[s("i",[e._v("• S i m W r a p p e r •")])])}],!1,Q,null,null,null);function Q(e){for(let t in Y)this[t]=Y[t]}var ee=function(){return Z.exports}();$.commit("setLocale",m),o.use(d),o.use(u),o.use(h,{defaultIconPack:"mdi",defaultInputHasCounter:!1}),o.config.productionTip=!1;const te=new d({locale:m,fallbackLocale:"en"});new o({i18n:te,router:j,store:$,render:e=>e(ee)}).$mount("#app");export{w as C,L as D,_ as L,f as M,O as R,b as S,S as U,p as a,P as b,U as f,$ as g,H as n};
//# sourceMappingURL=index.9fb25b2c.js.map
