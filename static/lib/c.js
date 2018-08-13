typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{};if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={handlers:{},_uid:1,uid:function(e){return e._uid||(e._uid=n.Adapter._uid++)},bind:function(e,t,r){var i=n.Adapter.uid(e);n.Adapter.handlers[i]=n.Adapter.handlers[i]||{},n.Adapter.handlers[i][t]=n.Adapter.handlers[i][t]||[],n.Adapter.handlers[i][t].push(r),e["on"+t]=function(e,t){return function(r){n.Adapter.trigger(e,t,r)}}(e,t)},trigger:function(e,t,r){r=r||{};var i=n.Adapter.uid(e),s,o;n.Adapter.handlers[i]=n.Adapter.handlers[i]||{},n.Adapter.handlers[i][t]=n.Adapter.handlers[i][t]||[];for(s=0,o=n.Adapter.handlers[i][t].length;s<o;++s)n.Adapter.handlers[i][t][s].apply(this,[r])},extractEventData:function(e,n){var r=n&&n[e]||t;return r},onDomLoad:function(t){var n=e.setTimeout(function(){t()},2e3);e.onload=function(){clearTimeout(n),t()}}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e=="undefined"?t=o.savedHashes[o.savedHashes.length-1]:e<0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t="",r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",i=n.createElement("iframe"),i.setAttribute("id",r),i.setAttribute("src","#"),i.style.display="none",n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document);return n!==t?(t=n,r!==n&&(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,"hashchange")):r!==u&&(u=r,f&&r===""?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||"";return n!==t&&(t=n,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var n=t&&t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&&o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window);

var C = {};
C.config = {
    base: ''
};
C.history = History;
C.router = (function() {
    /**
     * Base path.
     */
    var base = C.config.base || '';

    /**
     * Previous context, for capturing
     * router exit events.
     */
    var prevContext;

    var pathtoRegexp = (function() {
        var isArray = Array.isArray || function(arr) {
            return Object.prototype.toString.call(arr) == '[object Array]';
        };

        /**
         * The main path matching regexp utility.
         *
         * @type {RegExp}
         */
        var PATH_REGEXP = new RegExp([
            '(\\\\.)',
            '([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?',
            '([.+*?=^!:${}()[\\]|\\/])'
        ].join('|'), 'g');

        /**
         * Escape the capturing group by escaping special characters and meaning.
         *
         * @param  {String} group
         * @return {String}
         */
        function escapeGroup(group) {
            return group.replace(/([=!:$\/()])/g, '\\$1');
        }

        /**
         * Attach the keys as a property of the regexp.
         *
         * @param  {RegExp} re
         * @param  {Array}  keys
         * @return {RegExp}
         */
        function attachKeys(re, keys) {
            re.keys = keys;
            return re;
        }

        /**
         * Get the flags for a regexp from the options.
         *
         * @param  {Object} options
         * @return {String}
         */
        function flags(options) {
            return options.sensitive ? '' : 'i';
        }

        /**
         * Pull out keys from a regexp.
         *
         * @param  {RegExp} path
         * @param  {Array}  keys
         * @return {RegExp}
         */
        function regexpToRegexp(path, keys) {
            // Use a negative lookahead to match only capturing groups.
            var groups = path.source.match(/\((?!\?)/g);

            if (groups) {
                for (var i = 0; i < groups.length; i++) {
                    keys.push({
                        name: i,
                        delimiter: null,
                        optional: false,
                        repeat: false
                    });
                }
            }

            return attachKeys(path, keys);
        }

        /**
         * Transform an array into a regexp.
         *
         * @param  {Array}  path
         * @param  {Array}  keys
         * @param  {Object} options
         * @return {RegExp}
         */
        function arrayToRegexp(path, keys, options) {
            var parts = [];

            for (var i = 0; i < path.length; i++) {
                parts.push(pathToRegexp(path[i], keys, options).source);
            }

            var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
            return attachKeys(regexp, keys);
        }

        /**
         * Replace the specific tags with regexp strings.
         *
         * @param  {String} path
         * @param  {Array}  keys
         * @return {String}
         */
        function replacePath(path, keys) {
            var index = 0;

            function replace(_, escaped, prefix, key, capture, group, suffix, escape) {
                if (escaped) {
                    return escaped;
                }

                if (escape) {
                    return '\\' + escape;
                }

                var repeat = suffix === '+' || suffix === '*';
                var optional = suffix === '?' || suffix === '*';

                keys.push({
                    name: key || index++,
                    delimiter: prefix || '/',
                    optional: optional,
                    repeat: repeat
                });

                prefix = prefix ? ('\\' + prefix) : '';
                capture = escapeGroup(capture || group || '[^' + (prefix || '\\/') + ']+?');

                if (repeat) {
                    capture = capture + '(?:' + prefix + capture + ')*';
                }

                if (optional) {
                    return '(?:' + prefix + '(' + capture + '))?';
                }

                // Basic parameter support.
                return prefix + '(' + capture + ')';
            }

            return path.replace(PATH_REGEXP, replace);
        }

        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         *
         * @param  {(String|RegExp|Array)} path
         * @param  {Array}                 [keys]
         * @param  {Object}                [options]
         * @return {RegExp}
         */
        function pathToRegexp(path, keys, options) {
            keys = keys || [];

            if (!isArray(keys)) {
                options = keys;
                keys = [];
            } else if (!options) {
                options = {};
            }

            if (path instanceof RegExp) {
                return regexpToRegexp(path, keys, options);
            }

            if (isArray(path)) {
                return arrayToRegexp(path, keys, options);
            }

            var strict = options.strict;
            var end = options.end !== false;
            var route = replacePath(path, keys);
            var endsWithSlash = path.charAt(path.length - 1) === '/';

            // In non-strict mode we allow a slash at the end of match. If the path to
            // match already ends with a slash, we remove it for consistency. The slash
            // is valid at the end of a path match, not in the middle. This is important
            // in non-ending mode, where "/test/" shouldn't match "/test//route".
            if (!strict) {
                route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
            }

            if (end) {
                route += '$';
            } else {
                // In non-ending mode, we need the capturing groups to match as much as
                // possible by using a positive lookahead to the end or next path segment.
                route += strict && endsWithSlash ? '' : '(?=\\/|$)';
            }

            return attachKeys(new RegExp('^' + route, flags(options)), keys);
        }

        return pathToRegexp;
    })();

    var qs = (function() {
        /**
         * Object#toString() ref for stringify().
         */
        var toString = Object.prototype.toString;

        /**
         * Cache non-integer test regexp.
         */
        var isint = /^[0-9]+$/;

        function promote(parent, key) {
            if (parent[key].length == 0) return parent[key] = {};
            var t = {};
            for (var i in parent[key]) t[i] = parent[key][i];
            parent[key] = t;
            return t;
        }

        function parse(parts, parent, key, val) {
            var part = parts.shift();
            // end
            if (!part) {
                if (Array.isArray(parent[key])) {
                    parent[key].push(val);
                } else if ('object' == typeof parent[key]) {
                    parent[key] = val;
                } else if ('undefined' == typeof parent[key]) {
                    parent[key] = val;
                } else {
                    parent[key] = [parent[key], val];
                }
                // array
            } else {
                var obj = parent[key] = parent[key] || [];
                if (']' == part) {
                    if (Array.isArray(obj)) {
                        if ('' != val) obj.push(val);
                    } else if ('object' == typeof obj) {
                        obj[Object.keys(obj).length] = val;
                    } else {
                        obj = parent[key] = [parent[key], val];
                    }
                    // prop
                } else if (~part.indexOf(']')) {
                    part = part.substr(0, part.length - 1);
                    if (!isint.test(part) && Array.isArray(obj)) obj = promote(parent, key);
                    parse(parts, obj, part, val);
                    // key
                } else {
                    if (!isint.test(part) && Array.isArray(obj)) obj = promote(parent, key);
                    parse(parts, obj, part, val);
                }
            }
        }

        /**
         * Merge parent key/val pair.
         */

        function merge(parent, key, val) {
            if (~key.indexOf(']')) {
                var parts = key.split('['),
                    len = parts.length,
                    last = len - 1;
                parse(parts, parent, 'base', val);
                // optimize
            } else {
                if (!isint.test(key) && Array.isArray(parent.base)) {
                    var t = {};
                    for (var k in parent.base) t[k] = parent.base[k];
                    parent.base = t;
                }
                set(parent.base, key, val);
            }

            return parent;
        }

        /**
         * Parse the given obj.
         */

        function parseObject(obj) {
            var ret = {
                base: {}
            };
            Object.keys(obj).forEach(function(name) {
                merge(ret, name, obj[name]);
            });
            return ret.base;
        }

        /**
         * Parse the given str.
         */

        function parseString(str) {
            return String(str)
                .split('&')
                .reduce(function(ret, pair) {
                    try {
                        pair = decodeURIComponent(pair.replace(/\+/g, ' '));
                    } catch (e) {
                        // ignore
                    }

                    var eql = pair.indexOf('='),
                        brace = lastBraceInKey(pair),
                        key = pair.substr(0, brace || eql),
                        val = pair.substr(brace || eql, pair.length),
                        val = val.substr(val.indexOf('=') + 1, val.length);

                    // ?foo
                    if ('' == key) key = pair, val = '';

                    return merge(ret, key, val);
                }, {
                    base: {}
                }).base;
        }


        /**
         * Turn the given `obj` into a query string
         *
         * @param {Object} obj
         * @return {String}
         * @api public
         */

        function stringify(obj, prefix) {
            if (Array.isArray(obj)) {
                return stringifyArray(obj, prefix);
            } else if ('[object Object]' == toString.call(obj)) {
                return stringifyObject(obj, prefix);
            } else if ('string' == typeof obj) {
                return stringifyString(obj, prefix);
            } else {
                return prefix + '=' + obj;
            }
        };

        /**
         * Stringify the given `str`.
         *
         * @param {String} str
         * @param {String} prefix
         * @return {String}
         * @api private
         */

        function stringifyString(str, prefix) {
            if (!prefix) throw new TypeError('stringify expects an object');
            return prefix + '=' + encodeURIComponent(str);
        }

        /**
         * Stringify the given `arr`.
         *
         * @param {Array} arr
         * @param {String} prefix
         * @return {String}
         * @api private
         */

        function stringifyArray(arr, prefix) {
            var ret = [];
            if (!prefix) throw new TypeError('stringify expects an object');
            for (var i = 0; i < arr.length; i++) {
                ret.push(stringify(arr[i], prefix + '[' + i + ']'));
            }
            return ret.join('&');
        }

        /**
         * Stringify the given `obj`.
         *
         * @param {Object} obj
         * @param {String} prefix
         * @return {String}
         * @api private
         */

        function stringifyObject(obj, prefix) {
            var ret = [],
                keys = Object.keys(obj),
                key;

            for (var i = 0, len = keys.length; i < len; ++i) {
                key = keys[i];
                ret.push(stringify(obj[key], prefix ? prefix + '[' + encodeURIComponent(key) + ']' : encodeURIComponent(key)));
            }

            return ret.join('&');
        }

        /**
         * Set `obj`'s `key` to `val` respecting
         * the weird and wonderful syntax of a qs,
         * where "foo=bar&foo=baz" becomes an array.
         *
         * @param {Object} obj
         * @param {String} key
         * @param {String} val
         * @api private
         */

        function set(obj, key, val) {
            var v = obj[key];
            if (undefined === v) {
                obj[key] = val;
            } else if (Array.isArray(v)) {
                v.push(val);
            } else {
                obj[key] = [v, val];
            }
        }

        /**
         * Locate last brace in `str` within the key.
         *
         * @param {String} str
         * @return {Number}
         * @api private
         */

        function lastBraceInKey(str) {
            var len = str.length,
                brace, c;
            for (var i = 0; i < len; ++i) {
                c = str[i];
                if (']' == c) brace = false;
                if ('[' == c) brace = true;
                if ('=' == c && !brace) return i;
            }
        }

        return {
            /**
             * Parse the given query `str` or `obj`, returning an object.
             *
             * @param {String} str | {Object} obj
             * @return {Object}
             * @api public
             */
            parse: function(str) {
                if (null == str || '' == str) return {};
                return 'object' == typeof str ? parseObject(str) : parseString(str);
            },
            stringify: stringify
        };
    })();

    /**
     * Register `path` with callback `fn()`,
     * or route `path`, or redirection,
     *
     *   FJ.router('*', fn);
     *   FJ.router('/user/:id', load, user);
     *
     * @param {String} path
     * @param {Function} fn...
     * @api public
     */
    function Router(path, fn) {
        var route = new Route(path);
        for (var i = 1; i < arguments.length; ++i) {
            Router.callbacks.push(route.middleware(arguments[i]));
        }
    }

    /**
     * Callback functions.
     */
    Router.callbacks = [];
    Router.exits = [];
    Router.errors = [];

    /**
     * Show timestamp
     * @type {String}
     */
    Router.timestamp = 0;

    /**
     * Register an exit route on `path` with
     * callback `fn()`, which will be called
     * on the previous context when a new
     * Router is visited.
     */
    Router.exit = function(path, fn) {
        var route = new Route(path);
        for (var i = 1; i < arguments.length; ++i) {
            Router.exits.push(route.middleware(arguments[i]));
        }
    };

    /**
     * Register route to redirect from one path to other
     * or just redirect to another route
     *
     * @param {String} from - if param 'to' is undefined redirects to 'from'
     * @param {String} [to]
     * @api public
     */
    Router.redirect = function(from, to) {
        // Define route from a path to another
        if ('string' === typeof from && 'string' === typeof to) {
            Router(from, function(e) {
                setTimeout(function() {
                    C.history.replaceState(null, null, to);
                }, 0);
            });
        }
        // Wait for the push state and replace it with another
        if ('string' === typeof from && 'undefined' === typeof to) {
            setTimeout(function() {
                C.history.replaceState(null, null, from);
            }, 0);
        }
    };

    /**
     * Register global error function
     * callback `fn()`, which will be called
     * on the previous context when Router is error
     */
    Router.error = function(fn) {
        for (var i = 0; i < arguments.length; ++i) {
            Router.errors.push(arguments[i]);
        }
    };

    /**
     * Show `path` with optional `state` object.
     *
     * @param {String} path
     * @param {Object} state
     * @param {Boolean} dispatch
     * @return {Context}
     * @api public
     */
    Router.show = function(path) {
        var timestamp = +new Date;
        var referer = prevContext ? prevContext.canonicalPath : '';
        var ctx = new Context(path, referer, timestamp);
        Router.timestamp = timestamp;
        Router.dispatch(ctx);
        return ctx;
    };

    /**
     * Dispatch the given `ctx`.
     *
     * @param {Object} ctx
     * @api private
     */
    Router.dispatch = function(ctx) {
        var prev = prevContext,
            i = 0,
            j = 0;
        prevContext = ctx;

        function nextExit() {
            var fn = Router.exits[j++];
            if (!fn) return nextEnter();
            fn(prev, nextExit);
        }

        function nextEnter() {
            var fn = Router.callbacks[i++];
            if (ctx.timestamp !== Router.timestamp) {
                return;
            }
            if (!fn) return unhandled(ctx);
            fn(ctx, nextEnter);
        }

        if (prev) {
            nextExit();
        } else {
            nextEnter();
        }
    };

    /**
     * Unhandled `ctx`. When all of callbaks were not
     * match the path. If you wish to handle this error
     * on the app global.
     *
     * @param {Context} ctx
     * @api private
     */
    function unhandled(ctx) {
        var i = 0;

        function next() {
            var fn = Router.errors[i++];
            if (fn) return fn(prevContext, next);
        }
        next();
    }

    /**
     * Remove URL encoding from the given `str`.
     * Accommodates whitespace in both x-www-form-urlencoded
     * and regular percent-encoded form.
     *
     * @param {str} URL component to decode
     */
    function decodeURLEncodedURIComponent(val) {
        if (typeof val !== 'string') {
            return val;
        }
        return decodeURIComponent(val.replace(/\+/g, ' '));
    }

    /**
     * Initialize `Route` with the given HTTP `path`,
     * and an array of `callbacks` and `options`.
     *
     * Options:
     *
     *   - `sensitive`    enable case-sensitive routes
     *   - `strict`       enable strict matching for trailing slashes
     *
     * @param {String} path
     * @param {Object} options.
     * @api private
     */
    function Route(path, options) {
        options = options || {};
        this.path = (path === '*') ? '(.*)' : path;
        this.method = 'GET';
        this.regexp = pathtoRegexp(this.path,
            this.keys = [],
            options.sensitive,
            options.strict);
    }

    /**
     * Return route middleware with
     * the given callback `fn()`.
     *
     * @param {Function} fn
     * @return {Function}
     * @api public
     */
    Route.prototype.middleware = function(fn) {
        var self = this;
        return function(ctx, next) {
            if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
            next();
        };
    };

    /**
     * Check if this route matches `path`, if so
     * populate `params`.
     *
     * @param {String} path
     * @param {Object} params
     * @return {Boolean}
     * @api private
     */
    Route.prototype.match = function(path, params) {
        var keys = this.keys,
            qsIndex = path.indexOf('?'),
            pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
            m = this.regexp.exec(decodeURIComponent(pathname));

        if (!m) return false;
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = keys[i - 1];
            var val = decodeURLEncodedURIComponent(m[i]);
            if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
                params[key.name] = val;
            }
        }

        return true;
    };

    /**
     * Initialize a new "request" `Context`
     * with the given `path` and optional initial `state`.
     *
     * @param {String} path
     * @param {String} referer
     * @param {Number} timestamp
     * @api public
     */
    function Context(path, referer, timestamp) {
        var path = base + path;
        var parts = path.split('#');
        var part = parts[0];
        var i = part.indexOf('?');
        var self = this;

        this.canonicalPath = path;
        this.path = parts[0].replace(base, '') || '/';
        this.hash = parts[1] || '';


        this.pathname = decodeURLEncodedURIComponent(~i ? part.slice(0, i) : part);
        this.querystring = ~i ? decodeURLEncodedURIComponent(part.slice(i + 1)) : '';
        this.params = {};

        this.referer = referer;
        this.timestamp = timestamp;
    }

    Context.prototype.query = function(querystring) {
        return qs.parse(querystring || this.querystring);
    };
    return Router;
})();
C.page = {
    go: function(link, title) {
        C.history.pushState(null, title || null, link);
    },
    redirect: function(link) {
        C.router.redirect(link);
    },
    show: function(link) {
        C.router.show(link);
    }
};
C.bind = function() {
    var _path = '';
    // Bind event to URL change.
    C.history.Adapter.bind(window, 'statechange', function() {
        var State = C.history.getState();
        _path = State.hash;
        C.page.show(_path);
    });

    // Attach event on "A".
    $(document).on('click', 'a', function(ent) {
        var $target = $(this);

        if (1 !== ent.which) return;
        if (ent.metaKey || ent.ctrlKey || ent.shiftKey) return;
        if (ent.isDefaultPrevented()) return;

        if ($target.attr('target')) return;

        var link = $target.attr('href');
        if (!/^\/.*$/i.test(link)) return;

        ent.preventDefault();

        _path = link;
        link = link.split('#')[0];

        C.page.go(link);
    });
};
C.init = function(option) {
    var URL = window.location.href;
    var path = URL.replace(/^http(s?):\/\/[^\/]*/, '');
    if (/^\/#!\//.test(path)) {
        path = path.slice(3);
    }
    C.bind();
    C.page.show(path);
};
export default C;