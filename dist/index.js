!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.autoComputeFirstScreenTime=t():e.autoComputeFirstScreenTime=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports={watchingNavStartChange:!1,navigationTagChangeMap:{realChangeList:[],usedChangeList:[]},onloadFinished:!1,supportPerformance:window.performance&&window.performance.getEntries&&"function"==typeof window.performance.getEntries&&window.performance.getEntries()instanceof Array}},function(e,t,r){var n=window,i=(n.document,r(3)),o=r(0),a=0;function s(){var e=i.mergeGlobal(i.initGlobal(),{intervalDotTimer:null,hasStoppedObserve:!1,dotList:[],imgMap:{},dotDelay:250,abortTimeWhenDelay:500});function t(t){var r=e.dotList[0],n=function(){return!e.hasReported&&!e.abortReport};if(e.abortByDelayTimeout)e.onReport({success:!1,delayFirstScreen:e.delayAll,abortTimeSetting:e.abortTimeWhenDelay,url:window.location.href.substring(0,200),dotList:e.dotList,globalIndex:e.globalIndex,type:"dot"});else{var a=function(){var n,a,s=null,c=[],m=[];for(n=0,a=e.dotList.length;n<a;n++)if(e.dotList[n].isTargetDot){s=e.dotList[n].firstScreenImages;break}if(s)for(n=0,a=s.length;n<a;n++)c.push(s[n].replace(/^http(s)?:/,"").replace(/^\/\//,""));var u=0;for(n=0,a=e.dotList.length;n<a;n++)e.dotList[n].delay&&e.dotList[n].dotTimeStamp<=t.dotTimeStamp&&(u+=e.dotList[n].delay);for(var l in e.requestDetails){var f=l.split(">time")[0].replace(/^http(s)?:/,"").replace(/^\/\//,"");m.push(f)}return{type:"dot",success:!0,maxErrorTime:t.maxErrorTime,dotList:e.dotList,isStaticPage:!e.isFirstRequestSent&&(!!/auto/.test(e.reportDesc)||"unknown"),requests:i.transRequestDetails2Arr(e),firstScreenTime:t.firstScreenTimeStamp-e.forcedNavStartTimeStamp,firstScreenTimeStamp:t.firstScreenTimeStamp,firstScreenImages:r.firstScreenImages,firstScreenImagesLength:r.firstScreenImages.length,firstScreenImagesDetail:t.firstScreenImagesDetail,navigationStartTimeStamp:e.forcedNavStartTimeStamp,navigationStartTime:e.forcedNavStartTimeStamp-e._originalNavStart,isOriginalNavStart:e.forcedNavStartTimeStamp===e._originalNavStart,delayFirstScreen:u,delayAll:e.delayAll,version:i.version,reportDesc:e.reportDesc,url:window.location.href.substring(0,200),ignoredImages:e.ignoredImages,device:e.device,globalIndex:e.globalIndex,domChangeList:e.domChangeList,navigationTagChangeMap:o.navigationTagChangeMap,reportTimeFrom:t.reportTimeFrom}}();if(e.delayReport)var s=setTimeout(function(){n()&&(a.reportTime=i.getTime()-e.forcedNavStartTimeStamp,e.onReport(a),e.hasReported=!0),clearTimeout(s)},e.delayReport);else n()&&(a.reportTime=i.getTime()-e.forcedNavStartTimeStamp,e.onReport(a),e.hasReported=!0)}}function r(t){var r=t&&t.recordFirstScreen;if(e.delayAll>=e.abortTimeWhenDelay)e.abortByDelayTimeout=!0;else{var o=i.getTime(),a=function(t){var r=n.innerHeight,o=n.innerWidth;e.device.screenWidth||(e.device.screenWidth=o);e.device.screenHeight||(e.device.screenHeight=r);var a=t&&t.searchInFirstScreen,s=i.queryAllNode(e.ignoreTag),c=s.nextNode(),m=[],u=function(e){var t=i.parseUrl(e).protocol;t&&0===t.indexOf("http")&&-1===m.indexOf(e)&&m.push(e)};for(;c;){var l=i.getImgSrcFromDom(c,e.img);if(l){if(a)if(i.recordCurrentPos(c,e),i.isInFirstScreen(c))u(l);else{var f=i.currentPos;e.ignoredImages.push({src:l,screenHeight:r,screenWidth:o,scrollTop:f.scrollTop,top:f.top,bottom:f.bottom,vertical:f.scrollTop+f.top<=r,left:f.left,right:f.right,horizontal:f.right>=0&&f.left<=o})}else u(l);c=s.nextNode()}else c=s.nextNode()}return i.formateUrlList(m,"add")}({searchInFirstScreen:r}),s=i.getTime();e.delayAll+=s-o;var c={type:"dot",isImgInFirstScreen:r||!1,isFromInternal:!(!t||!t.isFromInternal),firstScreenImages:a,firstScreenImagesLength:a.length,dotIndex:e.dotList.length,dotTimeStamp:o,dotTimeDuration:o-e.forcedNavStartTimeStamp,delay:s-o,finished:!1,isTargetDot:t&&t.isTargetDot||!1,firstScreenTimeStamp:-1,reportTimeFrom:"",firstScreenImagesDetail:[],maxErrorTime:"unkown"};if(e.dotList.push(c),a.length){var m=0,u=function(e){++m===a.length&&(c.finished=!0)},l=function(t){var r=i.getTime();return{onloadTimeStamp:r,onloadTime:r-e.forcedNavStartTimeStamp,maxErrorTime:t.maxErrorTime,type:t.type}};i.forEach(a,function(t){if(e.imgMap[t])u();else{var r=new Image;if(r.src=t,r.complete){if(!e.imgMap[t]){var n=e.dotList[c.dotIndex-1]?c.dotTimeStamp-e.dotList[c.dotIndex-1].dotTimeStamp:0;e.imgMap[t]=l({maxErrorTime:n,type:"complete"})}u()}else r.onload=r.onerror=function(){e.imgMap[t]||(e.imgMap[t]=l({maxErrorTime:0,type:"onload"})),u()}}})}else c.finished=!0}}function s(){if(!e.hasStoppedObserve){e.hasStoppedObserve=!0,e.stopCatchingRequest=!0,i.stopWatchDomUpdate(e),i.stopCatchingRequest(e),clearInterval(e.intervalDotTimer),r({recordFirstScreen:!0});var n=function(){e.dotList.sort(function(e,t){return e.dotTimeStamp<t.dotTimeStamp?1:-1});var t,r=e.dotList.slice(1),n=e.dotList[0].firstScreenImages,i=function(e,t){for(var r=0,n=t.length;r<n;r++)if(-1===e.indexOf(t[r]))return!1;return!0};if(n.length>0){for(var o=0,a=r.length;o<a;o++)i(r[o].firstScreenImages,n)&&(t=r[o]);t||(t=e.dotList[0])}else(t=e.dotList[0]).firstScreenTimeStamp=performance.timing.domComplete,t.firstScreenTime=performance.timing.domComplete-e.forcedNavStartTimeStamp;return t}(e.dotList);e.onStableStatusFound(n),n.isTargetDot=!0,e.onAllXhrResolved&&e.onAllXhrResolved(n.dotTimeStamp);var a=null,s=function(){n.finished&&(!function(r){var n=e.dotList[0],a=function(){for(var t=[],r=n.firstScreenImages,i=0,o=r.length;i<o;i++){var a=r[i],s=e.imgMap[a];s&&t.push({src:a,type:s.type,maxErrorTime:s.maxErrorTime,onloadTimeStamp:s.onloadTimeStamp,onloadTime:s.onloadTime,from:"dot"})}return t.sort(function(e,t){return t.onloadTime-e.onloadTime}),t};0===r.firstScreenImages.length?/^hand/.test(e.reportDesc)?(r.firstScreenTimeStamp=e.handExcuteTime,r.reportTimeFrom="dot-hand-from-force",r.firstScreenImagesDetail=a(),t(r)):i.getDomReadyTime(e,function(e,n){r.firstScreenTimeStamp=e,r.reportTimeFrom=n,r.firstScreenImagesDetail=a(),t(r)}):function(){var s=function(t){var r=[];return i.forEach(t,function(t){r.push(e.imgMap[t])}),r.sort(function(e,t){return e.onloadTimeStamp<t.onloadTimeStamp?1:-1}),r[0]},c=function(e){var i=s(n.firstScreenImages);r.firstScreenTimeStamp=i.onloadTimeStamp,r.maxErrorTime=i.maxErrorTime,r.reportTimeFrom=e,r.firstScreenImagesDetail=a(),t(r)};if(o.supportPerformance){!function(){var e=s(n.firstScreenImages);if(e&&"onload"===e.type)return!0;return!1}()?i.cycleGettingPerformaceTime(e,n.firstScreenImages,function(n){r.firstScreenImagesDetail=n.firstScreenImagesDetail,n.firstScreenTimeStamp<=e.forcedNavStartTimeStamp?c("dot-img-from-prepage-load"):(r.firstScreenTimeStamp=n.firstScreenTimeStamp,r.maxErrorTime=0,r.reportTimeFrom="dot-img-from-performance",t(r))}):c("dot-img-from-onload")}else c("dot-img-from-onload")}()}(n),clearInterval(a))};a=setInterval(s,1e3),s()}}return e.globalIndex="dot-"+a++,i.watchDomUpdate(e),{mergeUserConfig:function(t){i.mergeUserConfig(e,t)},testStaticPage:function(){i.testStaticPage(function(){s()},e)},observeDomChange:function(){var t,n=function(n){var o=i.getTime();t&&o-t<e.dotDelay||(t=o,r(n))};e.intervalDotTimer=setInterval(function(){n({isFromInternal:!0})},e.dotDelay),n()},overrideRequest:function(){i.overrideRequest(e,function(){s()})},recordDomInfo:r,onStopObserving:s,global:e}}e.exports={auto:function(e){var t=function(){var t=s();return t.global.reportDesc="auto-dot",t.mergeUserConfig(e),t.testStaticPage(),t.observeDomChange(),t.overrideRequest(),t},r=t(),n=r.global;return i.onNavigationStartChange(r.global,function(r){n.abortReport=!0,n.onNavigationStartChange(r),e.forcedNavStartTimeStamp=r.timeStamp,n=t().global}),r.global},hand:function(e){var t=s();t.global.reportDesc="hand-dot",t.global.handExcuteTime=(new Date).getTime(),t.mergeUserConfig(e),t.onStopObserving()}}},function(e,t,r){var n=window,i=(n.document,r(3)),o=r(0),a=0;function s(){var e=i.mergeGlobal(i.initGlobal(),{hasStableFound:!1});function t(){if(!e.hasStableFound){i.stopWatchDomUpdate(e),i.stopCatchingRequest(e),e.hasStableFound=!0,e.stopCatchingRequest=!0;var t=s();e.onStableStatusFound(t)}}function r(t){var r=function(){return!e.hasReported&&!e.abortReport};if(t.ignoredImages=e.ignoredImages,t.device=e.device,t.success=!0,e.delayReport)var n=setTimeout(function(){r()&&(e.hasReported=!0,e.onReport(t)),clearTimeout(n)},e.delayReport);else r()&&e.onReport(t)}function s(){var t=i.getTime(),a=function(){var t=n.innerHeight,r=n.innerWidth;e.device.screenHeight=t,e.device.screenWidth=r;var o=i.queryAllNode(e.ignoreTag),a=o.nextNode(),s=[],c=function(e){var t=i.parseUrl(e).protocol;t&&0===t.indexOf("http")&&-1===s.indexOf(e)&&s.push(e)};for(;a;){var m=i.getImgSrcFromDom(a,e.img);if(m){if(i.recordCurrentPos(a,e),i.isInFirstScreen(a))c(m);else{var u=i.currentPos;e.ignoredImages.push({src:m,screenHeight:t,screenWidth:r,scrollTop:u.scrollTop,top:u.top,bottom:u.bottom,vertical:u.scrollTop+u.top<=t,left:u.left,right:u.right,horizontal:u.right>=0&&u.left<=r})}a=o.nextNode()}else a=o.nextNode()}return i.formateUrlList(s,"add")}(),s=i.getTime(),c={type:"perf",isStaticPage:!e.isFirstRequestSent&&(!!/auto/.test(e.reportDesc)||"unknown"),firstScreenImages:[],firstScreenImagesLength:0,firstScreenImagesDetail:[],requests:i.transRequestDetails2Arr(e),delayAll:s-t,delayFirstScreen:s-t,firstScreenTime:-1,firstScreenTimeStamp:-1,maxErrorTime:0,navigationStartTimeStamp:e.forcedNavStartTimeStamp,navigationStartTime:e.forcedNavStartTimeStamp-e._originalNavStart,isOriginalNavStart:e.forcedNavStartTimeStamp===e._originalNavStart,version:i.version,recordTime:i.getTime()-e.forcedNavStartTimeStamp,reportDesc:e.reportDesc,url:window.location.href.substring(0,200),globalIndex:e.globalIndex,domChangeList:e.domChangeList,navigationTagChangeMap:o.navigationTagChangeMap,reportTimeFrom:e.reportTimeFrom};return c.firstScreenImages=a,c.firstScreenImagesLength=a.length,a.length?i.cycleGettingPerformaceTime(e,a,function(t){c.firstScreenTime=t.firstScreenTime,c.firstScreenTimeStamp=t.firstScreenTimeStamp,c.firstScreenImagesDetail=t.firstScreenImagesDetail,c.reportTimeFrom="perf-img-from-performance",c.reportTime=i.getTime()-e.forcedNavStartTimeStamp,r(c)}):/^hand/.test(e.reportDesc)?(c.firstScreenTimeStamp=e.handExcuteTime,c.firstScreenTime=e.handExcuteTime-e._originalNavStart,c.reportTimeFrom="perf-hand-from-force",c.reportTime=i.getTime()-e.forcedNavStartTimeStamp,r(c)):i.getDomReadyTime(e,function(t,n){c.firstScreenTimeStamp=t,c.firstScreenTime=t-e._originalNavStart,c.reportTimeFrom=n,c.reportTime=i.getTime()-e.forcedNavStartTimeStamp,r(c)}),c}return e.globalIndex="perf-"+a++,i.watchDomUpdate(e),{mergeUserConfig:function(t){i.mergeUserConfig(e,t)},testStaticPage:function(){i.testStaticPage(function(){t()},e)},overrideRequest:function(){i.overrideRequest(e,function(){t()})},recordFirstScreenInfo:s,global:e}}e.exports={auto:function(e){var t=function(){var t=s();return t.global.reportDesc="auto-perf",t.mergeUserConfig(e),t.testStaticPage(),t.overrideRequest(),t}(),n=t.global;return i.onNavigationStartChange(t.global,function(t){n.abortReport=!0,n.onNavigationStartChange(t),e.forcedNavStartTimeStamp=t.timeStamp,n=r(1).auto(e)}),t.global},hand:function(e){var t=s();t.global.reportDesc="hand-perf",t.global.handExcuteTime=(new Date).getTime(),t.mergeUserConfig(e),t.recordFirstScreenInfo("perf-hand")}}},function(e,t,r){var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,i=r(0),o=Array.prototype.slice;e.exports={version:"5.5.5",getDomReadyTime:function(e,t){if(e._isUsingOriginalNavStart){var r=0,n=function(){0!=performance.timing.domContentLoadedEventStart&&t(performance.timing.domContentLoadedEventStart,"domContentLoadedEventStart"),(++r>=50||0!=performance.timing.domContentLoadedEventStart)&&clearInterval(i)},i=setInterval(n,500);n()}else e.domUpdateTimeStamp?t(e.domUpdateTimeStamp,"domUpdateTimeStamp"):t(e.forcedNavStartTimeStamp,"forcedNavStartTimeStamp")},_getImgSrcFromBgImg:function(e){var t,r=e.match(/url\(.*?\)/g);if(r&&r.length){var n=r[r.length-1].replace(/^url\([\'\"]?/,"").replace(/[\'\"]?\)$/,"");(/^http/.test(n)||/^\/\//.test(n))&&(t=n)}return t},getImgSrcFromDom:function(e,t){var r;if("IMG"==e.nodeName.toUpperCase())r=e.getAttribute("src");else{var n=window.getComputedStyle(e),i=n.getPropertyValue("background-image")||n.getPropertyValue("background"),o=this._getImgSrcFromBgImg(i,t);o&&this._isImg(o,t)&&(r=o)}return r},_isImg:function(e,t){for(var r=0,n=t.length;r<n;r++)if(t[r].test(e))return!0;return!1},currentPos:{scrollTop:0,top:0,bottom:0,left:0,right:0},recordCurrentPos:function(e,t){var r,n=e.getBoundingClientRect(),i=document.querySelector(t.scrollWrapper);if(i){var o=i.getBoundingClientRect();r=o.top<0?-o.top:0}else r=document.documentElement.scrollTop||document.body.scrollTop;var a=n.top,s=n.bottom,c=n.left,m=n.right;this.currentPos.scrollTop=r,this.currentPos.top=a,this.currentPos.bottom=s,this.currentPos.left=c,this.currentPos.right=m},isInFirstScreen:function(e){if(!this.currentPos.top&&!this.currentPos.bottom)return!1;var t=window.innerHeight,r=window.innerWidth,n=this.currentPos.scrollTop,i=this.currentPos.top,o=this.currentPos.left,a=this.currentPos.right;return n+i<t&&a>0&&o<r},queryAllNode:function(e){var t=this;return document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT,function(r){if(!t._shouldIgnoreNode(r,e))return NodeFilter.FILTER_ACCEPT})},_shouldIgnoreNode:function(e,t){for(var r=document.querySelectorAll(t),n=0,i=r.length;n<i;n++)if(this._isChild(e,r[n]))return!0;return!1},_isChild:function(e,t){for(var r=!1;e;){if(e===t){r=!0;break}e=e.parentNode}return r},parseUrl:function(e){var t=document.createElement("a");return t.href=e,t},transRequestDetails2Arr:function(e){var t=[],r={};for(var n in e.requestDetails){var i=n.split(">time")[0].replace(/^http(s)?:/,"").replace(/^\/\//,"");for(var o in r={src:i},e.requestDetails[n])r[o]=e.requestDetails[n][o];t.push(r)}return t},_formateUrlByRemove:function(e){return e.replace(/^http(s)?\:/,"").replace(/^\/\//,"")},_formateUrlByAdd:function(e){return/^http/.test(e)?e:window.location.protocol+"//"+this._formateUrlByRemove(e)},formateUrlList:function(e,t){for(var r,n=[],i=0,o=e.length;i<o;i++)r="add"==t?this._formateUrlByAdd(e[i]):this._formateUrlByRemove(e[i]),-1===n.indexOf(r)&&n.push(r);return n},initGlobal:function(){return{stopCatchingRequest:!1,isFirstRequestSent:!1,catchRequestTimeSections:[],ignoredImages:[],device:{},requestDetails:{},delayAll:0,ignoreTag:"[perf-ignore]",scrollWrapper:"[perf-scroll]",urlChangeStore:[],hasReported:!1,reportDesc:"",domUpdateTimeStamp:0,handExcuteTime:0,forcedNavStartTimeStamp:window.performance.timing.navigationStart,_originalNavStart:window.performance.timing.navigationStart,_isUsingOriginalNavStart:!0,abortReport:!1,onReport:function(){},onStableStatusFound:function(){},onNavigationStartChange:function(){},request:{limitedIn:[],exclude:[/(sockjs)|(socketjs)|(socket\.io)/]},renderTimeAfterGettingData:500,watingTimeWhenDefineStaticPage:2e3,img:[/(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff)/i],watchPerfStartChange:!0,delayReport:0,domChangeList:[],navigationStartChangeTag:["data-perf-start","perf-start"],navigationStartChangeDebounceTime:200,domUpdateMutationObserver:null,scriptLoadingMutationObserver:null,jsonpFilter:/callback=jsonp/,reportTimeFrom:""}},getTime:function(){return(new Date).getTime()},mergeGlobal:function(e,t){var r;for(r in t)e[r]=t[r];return e},forEach:function(e,t){if("object"==typeof e&&e.length)for(var r=0,n=e.length;r<n;r++)t(e[r],r)},overrideRequest:function(e,t){var r=this,i={},a=function(t){e.requestDetails[t]||(e.requestDetails[t]={status:"",sendTime:"",completeTime:"",type:"",duration:""})},s=function(t,n){e.isFirstRequestSent||(e.isFirstRequestSent=!0);var o=t+">time:"+r.getTime();return a(o),e.requestDetails[o].status="sent",e.requestDetails[o].type=n,e.requestDetails[o].sendTime=r.getTime()-e.forcedNavStartTimeStamp,i[o]="start",{requestKey:o}},c=function(n){var o=r.getTime();a(n),e.requestDetails[n].status="complete",e.requestDetails[n].completeTime=o-e.forcedNavStartTimeStamp,e.requestDetails[n].duration=e.requestDetails[n].completeTime-e.requestDetails[n].sendTime,e.catchRequestTimeSections.push([o,o+e.renderTimeAfterGettingData]);var s=setTimeout(function(){i[n]="stopped",function(){for(var t in e.requestDetails)if(e.requestDetails[t]&&"complete"!==e.requestDetails[t].status)return!1;return!0}()&&function(){for(var e in i)if("stopped"!==i[e])return!1;return!0}()&&t(),clearTimeout(s)},e.renderTimeAfterGettingData)};!function(e,t){if(window.fetch&&"function"==typeof Promise){var r=window.fetch;window.fetch=function(){var n=this,i=arguments;return new Promise(function(o,a){var s,c;"string"==typeof i[0]?s=i[0]:"object"==typeof i[0]&&(s=i[0].url),s&&(c=e(s,"fetch").requestKey),r.apply(n,i).then(function(e){c&&t(c),o(e)}).catch(function(e){c&&t(c),a(e)})})}}}(s,c),function(t,n){var i=XMLHttpRequest.prototype,a=i.send;i.send=function(){if(function(t){var n=!0;e.stopCatchingRequest&&(n=!1);for(var i=r.getTime(),o=0;o<e.catchRequestTimeSections.length;o++){var a=e.catchRequestTimeSections[o];if(i>=a[0]&&i<=a[1])break}e.catchRequestTimeSections.length&&o===e.catchRequestTimeSections.length&&(n=!1);for(var s=0,c=e.request.limitedIn.length;s<c;s++)e.request.limitedIn[s].test(t)||(n=!1);for(s=0,c=e.request.exclude.length;s<c;s++)e.request.exclude[s].test(t)&&(n=!1);return n}(this._http.url)){var i=t(this._http.url,"xhr").requestKey,s=this.onreadystatechange;this.onreadystatechange=function(){4===this.readyState&&n(i),s&&s.apply&&s.apply(this,arguments)}}return a.apply(this,o.call(arguments))}}(s,c),function(t,i){var a={},s={},c=function(e){s[e]||(s[e]=!0,i(e))},m=function(r){var n=function(e){return/script/i.test(e.tagName)&&/^http/.test(e.src)?e.src:""}(r);if(n&&e.jsonpFilter.test(n)&&!a[n]){a[n]=!0;var i=t(n,"jsonp").requestKey,o=setTimeout(function(){c(i),clearTimeout(o)},3e3);r.readyState?r.addEventListener("readystatechange",function(){"loaded"!=script.readyState&&"complete"!=script.readyState||(c(i),clearTimeout(o))}):(r.addEventListener("load",function(){c(i),clearTimeout(o)}),r.addEventListener("error",function(){c(i),clearTimeout(o)}))}},u=function(e){for(var t=document.getElementsByTagName("script"),r=o.call(t,0),n=0,i=r.length;n<i;n++)e(r[n])};n?(e.scriptLoadingMutationObserver=new n(function(e,t){r.forEach(e,function(e){e.addedNodes&&r.forEach(e.addedNodes,function(e){m(e)})})}),e.scriptLoadingMutationObserver.observe(document.body,{attributes:!1,childList:!0,subtree:!0}),u(function(e){m(e)})):(e.scriptLoadingMutationObserverMockTimer=setInterval(function(){u(function(e){m(e)})},200),u(function(e){m(e)}))}(s,c)},stopCatchingRequest:function(e){e.scriptLoadingMutationObserverMockTimer&&clearInterval(e.scriptLoadingMutationObserverMockTimer),e.scriptLoadingMutationObserver&&e.scriptLoadingMutationObserver.disconnect()},mergeUserConfig:function(e,t){if(t){for(var r in t)-1!==["watingTimeWhenDefineStaticPage","onReport","onStableStatusFound","renderTimeAfterGettingData","onAllXhrResolved","onNavigationStartChange","watchPerfStartChange","forcedNavStartTimeStamp","delayReport","navigationStartChangeTag","jsonpFilter"].indexOf(r)&&(e[r]=t[r]);var n=t.request||t.xhr;n&&(n.limitedIn&&(e.request.limitedIn=e.request.limitedIn.concat(n.limitedIn)),n.exclude&&(e.request.exclude=e.request.exclude.concat(n.exclude))),t.img&&("object"==typeof t.img&&"function"==typeof t.img.test?e.img.push(t.img):console.error('[auto-compute-first-screen-time] param "img" should be type RegExp'))}e._isUsingOriginalNavStart=e.forcedNavStartTimeStamp==e._originalNavStart},testStaticPage:function(e,t){var r=function(){i.onloadFinished=!0;var r=setTimeout(function(){clearTimeout(r),t.isFirstRequestSent||e()},t.watingTimeWhenDefineStaticPage)};i.onloadFinished?r():window.addEventListener("load",r)},watchDomUpdate:function(e){n&&(e.domUpdateMutationObserver=new n(function(){e.domUpdateTimeStamp=(new Date).getTime(),e.domChangeList.unshift({timeStamp:e.domUpdateTimeStamp,duration:e.domUpdateTimeStamp-e.forcedNavStartTimeStamp})}),e.domUpdateMutationObserver.observe(document.body,{childList:!0,subtree:!0}))},stopWatchDomUpdate:function(e){e.domUpdateMutationObserver&&e.domUpdateMutationObserver.disconnect()},onNavigationStartChange:function(e,t){var r=this;if(e.watchPerfStartChange&&!i.watchingNavStartChange){i.watchingNavStartChange=!0;var o,a=i.navigationTagChangeMap.realChangeList,s=i.navigationTagChangeMap.usedChangeList,c=function(){var r=function(e){for(var t,r=0,n=e.length;r<n;r++)if(t=document.body.getAttribute(e[r]))return t;return""}(e.navigationStartChangeTag);if(function(e,t){return!(!t||t==e)||!(t||!e)}(o,r)){var n=(new Date).getTime(),i={preTagValue:o,curTagValue:r,value:r,timeStamp:n,time:n-e._originalNavStart};if(a.push(i),o=r,1===a.length)s.push(i);else{var c=s.length;n-s[c-1].timeStamp>=e.navigationStartChangeDebounceTime&&(s.push(i),t(i))}}};if(n)new n(function(t,n){r.forEach(t,function(t,r){-1!==e.navigationStartChangeTag.indexOf(t.attributeName)&&c()})}).observe(document.body,{attributes:!0,childList:!1,subtree:!1});else setInterval(c,250)}},_getUnuniqueDetailFromSource:function(e,t,r){for(var n=[],i=0,o=e.length;i<o;i++){var a=e[i];if(this._isImg(a.name,r)){var s=this._formateUrlByRemove(a.name);if(-1!==t.indexOf(s)){var c=parseInt(a.responseEnd),m=parseInt(a.fetchStart);n.push({src:s,responseEnd:c<0?0:c,fetchStart:m<0?0:m,from:"performance"})}}}return n},_getSrcMapFromUnuniqueDetail:function(e){var t={};return this.forEach(e,function(e,r){var n="imgUrl-"+e.src;t[n]||(t[n]=[]),t[n].push(r)}),t},_getUniquedFirstScreenDetail:function(e,t){var r=[];for(var n in t)if(/^imgUrl\-/.test(n)){var i=t[n];if(1==i.length)r.push(e[i[0]]);else if(i.length>1){var o=e[i[0]];this.forEach(i,function(t){e[t].responseEnd<o.responseEnd&&(o=e[t])}),r.push(o)}}return r},cycleGettingPerformaceTime:function(e,t,r){var n=50,i=this,o=i.formateUrlList(t,"remove"),a=function(){var t=performance.getEntries(),a=i._getUnuniqueDetailFromSource(t,o,e.img),c=[],m=i._getSrcMapFromUnuniqueDetail(a);(c=i._getUniquedFirstScreenDetail(a,m)).sort(function(e,t){return t.responseEnd-e.responseEnd}),c.length===o.length&&(clearInterval(s),r({firstScreenTime:parseInt(c[0].responseEnd),firstScreenTimeStamp:parseInt(c[0].responseEnd)+e._originalNavStart,firstScreenImagesDetail:c})),--n<=0&&clearInterval(s)},s=setInterval(a,1e3);a()}}},function(e,t,r){var n=!!document.querySelector,i=window.performance&&window.performance.timing,o=window.performance&&window.performance.getEntries&&"function"==typeof window.performance.getEntries&&window.performance.getEntries()instanceof Array,a=function(){};n&&o?(e.exports=r(2).auto,e.exports.report=r(2).hand):n&&i?(e.exports=r(1).auto,e.exports.report=r(1).hand):(e.exports=a,e.exports.report=a)}])});