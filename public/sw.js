if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,t)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SZxQ2eDRqcoGlqOebHRfi/_buildManifest.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/SZxQ2eDRqcoGlqOebHRfi/_ssgManifest.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/0b7b90cd.71129a5e4ef3148753a4.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/12.e289bcef22cfd8546d4a.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/bb9a4470b984507ac537ac1324ab5e51b615490f.a79bd759dd81f3d16e2c.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/commons.8fa7a692f363b66324bd.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/framework.e48280befedc86156291.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/main-8967737d91c1f18b3e3d.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/pages/%5Bslug%5D-38d999392495f9bfbaa6.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/pages/_app-8b0fd566cebff6644a43.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/pages/_error-c29f24ad5cc808d789d5.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/pages/index-8fcac356e6eddf06f214.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-2a806480118bcb3ebe67.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/polyfills-8a95e710217664a42390.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/_next/static/chunks/webpack-5deda8ba0d373fc2c6c0.js",revision:"SZxQ2eDRqcoGlqOebHRfi"},{url:"/img/logo.svg",revision:"7e6b8ce96aa383992e3f0e902cedf527"},{url:"/manifest.json",revision:"7d37f77e26bb239929f1feefd3f62170"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
