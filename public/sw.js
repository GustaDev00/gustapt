if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/745-cf2fd12654ccd987.js",revision:"cf2fd12654ccd987"},{url:"/_next/static/chunks/framework-2c16ac744b6cdea6.js",revision:"2c16ac744b6cdea6"},{url:"/_next/static/chunks/main-4de58260dc732e35.js",revision:"4de58260dc732e35"},{url:"/_next/static/chunks/pages/_app-d73950382d607d15.js",revision:"d73950382d607d15"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/index-f731579b82875b22.js",revision:"f731579b82875b22"},{url:"/_next/static/chunks/pages/pt-c5676f01524c6670.js",revision:"c5676f01524c6670"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/ae011297c84db925.css",revision:"ae011297c84db925"},{url:"/_next/static/y1mujIi0mcllJriJave9c/_buildManifest.js",revision:"1b52c34003ee5127beff04c1f7b3bfb9"},{url:"/_next/static/y1mujIi0mcllJriJave9c/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"2eed76d75d7c083a5fc7fd7f3cbd84ee"},{url:"/fonts/HelveticaNeue/HelveticaNeueBold.otf",revision:"b3ac1bd5e427f84b07373609c6e63d4a"},{url:"/fonts/HelveticaNeue/HelveticaNeueLight.otf",revision:"bfbaeacd0e20bdc3d9bb57e417b5e693"},{url:"/fonts/HelveticaNeue/HelveticaNeueMedium.otf",revision:"3de700a4650f63d566ee3e19cf1d1511"},{url:"/imgs/altogiro.png",revision:"1f07413bfb614e7e298cd3ac85e22ea6"},{url:"/imgs/altogiro.webp",revision:"ea2645dc50a0b6f22798734d5d1b1623"},{url:"/imgs/bateriasgalileu.png",revision:"84d078222f09be072c75784e1c0a3512"},{url:"/imgs/bateriasgalileu.webp",revision:"28758042b12b999090fbaafd9fe4db58"},{url:"/imgs/bubowl.png",revision:"c00daa419045db95d3c179ddd82878e4"},{url:"/imgs/bubowl.webp",revision:"0ab588ece58e00bf7d29573337a70317"},{url:"/imgs/ene2ese.png",revision:"b57002ac987591aec2cf2ec9b1537082"},{url:"/imgs/ene2ese.webp",revision:"98a4f841a1b786297adee12afda01df2"},{url:"/imgs/eu.png",revision:"28c5640f2bd952fb1b7a0e6a08cb8ec0"},{url:"/imgs/eu.webp",revision:"1c558a9f3e177474aa8869920f39b12f"},{url:"/imgs/farmrio.png",revision:"31c2929e98e29f6cfb524b6ae04e227c"},{url:"/imgs/farmrio.webp",revision:"a5d5cee3f8b189bb9888f79efad3fedc"},{url:"/imgs/jeansclub.png",revision:"d3c36426755020e2cd21471397d0cb17"},{url:"/imgs/jeansclub.webp",revision:"c085c950a746bdd3e86b10072160036d"},{url:"/imgs/libercomunicacaovisual.png",revision:"ffb1c36d150bb404a109b7b3bd6b2ccb"},{url:"/imgs/libercomunicacaovisual.webp",revision:"fd5ae2f1aecd52325e81082e8298d53c"},{url:"/imgs/pantaspaladar.png",revision:"e605dce6f2a7ac5eb094292516ee4693"},{url:"/imgs/pantaspaladar.webp",revision:"ea65cf10746860e101e2123ce6a827a1"},{url:"/imgs/shopdoscabelos.png",revision:"9e256157cc720a71acac9770c2ab4b1c"},{url:"/imgs/shopdoscabelos.webp",revision:"45039a3de344fca4032c861a333840af"},{url:"/manifest.json",revision:"c286f6c841db93e656fd6cd500d903e1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"d750ee10e14f3fca18bd9a9a880d8660"},{url:"/sitemap.xml",revision:"f1eae444217aa8311b5984e40a582ae7"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
