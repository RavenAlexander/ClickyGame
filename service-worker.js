"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/ClickyGame/index.html","88ac15bec6f7d82db8fbd7e3d97519aa"],["/ClickyGame/static/css/main.8e8e6a71.css","b61162477a3acad03e76063da6d73cd1"],["/ClickyGame/static/js/main.2f303de5.js","9504c06f2597d888fdd7d7ba6804395a"],["/ClickyGame/static/media/bewd.0173054c.jpg","0173054cf33d925fb4f739a7f75c0413"],["/ClickyGame/static/media/changeofheart.36015931.jpg","3601593197fb8b7ed2e88ef1bc1552aa"],["/ClickyGame/static/media/darkmagician.9a181b35.jpg","9a181b35f9dad211aa488f51a4682505"],["/ClickyGame/static/media/dmgirl.3a84a559.jpg","3a84a559e3bda7c9f0943aac0fa4b8fa"],["/ClickyGame/static/media/exodiahead.04c5ef26.jpg","04c5ef263c96432c1e13cdb1cf7b2073"],["/ClickyGame/static/media/exodialarm.df0ae277.jpg","df0ae277ff8be58d812a24ebe8944104"],["/ClickyGame/static/media/exodialleg.1a06f037.jpg","1a06f0372e4f9f024984facfd80cbee6"],["/ClickyGame/static/media/exodiararm.ca7d244d.jpg","ca7d244ddfa2032134d2aff578f45676"],["/ClickyGame/static/media/exodiarleg.c13e3638.jpg","c13e3638215174b8dd91dbb024d0d9d3"],["/ClickyGame/static/media/harpielady.03d2cca7.jpg","03d2cca70bc0a039cd6b4c5127d00b87"],["/ClickyGame/static/media/kuriboh.b8d5747b.jpg","b8d5747b82d0a08b4137a236c24d99da"],["/ClickyGame/static/media/obelisk.6123ca6c.jpg","6123ca6cd464a066b264e9dcee224660"],["/ClickyGame/static/media/ra.a85cd08c.jpg","a85cd08c1daa347922f23b0237118f4a"],["/ClickyGame/static/media/rebd.71bf2272.jpg","71bf2272cd54004869f676b888bea8ab"],["/ClickyGame/static/media/slifer.8f56a927.jpg","8f56a9277a063e82d47550ec62100c91"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/ClickyGame/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});