!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={videoClass:"cl-video",quizClass:"cl-quiz",videoId:"vjs_video_3_html5_api",videoContainerId:"vjs_video_3",stepDataId:"cl-step",siteDataId:"cl-site",msuLinkHeaderClass:"masthead",videoPlayButtonClass:"vjs-big-play-button",stepProgressClass:"cl-step-progress",navDivClass:"cl-stepnav-div"}},function(t,e,n){"use strict";var o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.loadModules=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{for(var i=o(n),a=i.next();!a.done;a=i.next()){a.value.start()}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},t}();e.default=r},function(t,e,n){"use strict";var o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.autoBind=function(e){for(var n,r,i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];var u=Object.getPrototypeOf(e);0===i.length&&(i=Object.getOwnPropertyNames(u));try{for(var s=o(i),c=s.next();!c.done;c=s.next()){var l=c.value,d=Object.getOwnPropertyDescriptor(u,l);null!=d&&"function"==typeof d.value&&(t.protectedJavaScriptProperties.includes(l)||t.bindMethod(u,l,d))}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.bindMethod=function(t,e,n){var o=n.value;Object.defineProperty(t,e,{configurable:!0,get:function(){if(this===t||this.hasOwnProperty(e))return o;var n=o.bind(this);return Object.defineProperty(this,e,{value:n,configurable:!0,writable:!0}),n}})},t.protectedJavaScriptProperties=Object.getOwnPropertyNames(Object.getPrototypeOf({})),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=function(){function t(){}return t.isClassElementPresent=function(t){var e=document.getElementsByClassName(t);return!!(e&&e.length&&e[0])},Object.defineProperty(t,"isPageQuiz",{get:function(){return t.isClassElementPresent(o.default.quizClass)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageVideo",{get:function(){return t.isClassElementPresent(o.default.videoClass)},enumerable:!0,configurable:!0}),t.getNavigationBar=function(){return document.querySelector("nav ul")},t.getSiteData=function(){var t=document.getElementById(o.default.siteDataId);return t?JSON.parse(t.innerText):null},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(5),i=n(6),a=n(8),u=n(10);o.default.loadModules(new a.default,new i.default,new u.default,new r.default)},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(3),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){var t=a.default.getSiteData();if(t){var e=document.querySelector("."+i.default.msuLinkHeaderClass+" a");e&&e.setAttribute("href",t.root)}},e}(n(1).default);e.default=u},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),u=n(0),s=n(2),c=n(3),l=function(t){function e(){var e=t.call(this)||this;return s.default.autoBind(e),e.quizContainer=document.getElementsByClassName(u.default.quizClass)[0],e}return r(e,t),e.getNextQuestionButton=function(){return document.querySelector("."+u.default.quizClass+" button")},e.prototype.addNextQuizButtonHooks=function(){document.onkeydown=function(t){if(e.quizContinueKeys.includes(t.key)){var n=e.getNextQuestionButton();n&&n.innerText.toLowerCase().includes("next")&&n.click()}}},e.prototype.onNewQuizQuestion=function(){var t,e,n=this.quizContainer.getElementsByTagName("input"),o=!1;try{for(var r=i(n),a=r.next();!a.done;a=r.next()){var u=a.value;u.setAttribute("autocomplete","off"),o||u.hidden||"hidden"===u.type||"none"===u.style.display||(u.focus(),o=!0)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},e.prototype.start=function(){c.default.isPageQuiz&&(this.addNextQuizButtonHooks(),new a.default({onQuestion:this.onNewQuizQuestion}).listen())},e.quizContinueKeys=["Enter","ArrowRight"],e}(n(1).default);e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(2),i=function(){function t(t){this.params=t,this.quizContainer=document.getElementsByClassName(o.default.quizClass)[0],this.currentQuestion=0,r.default.autoBind(this)}return t.prototype.getQuestionDataFromMatch=function(t){return{current:parseInt(t[1]),total:parseInt(t[2])}},t.prototype.onContainerMutate=function(e,n){var o=this.quizContainer.querySelector("h2");if(o&&t.questionRegex.test(o.innerText)){n.disconnect();var r=o.innerText.match(t.questionRegex);if(r){var i=this.getQuestionDataFromMatch(r);this.currentQuestion=i.current,this.params.onStart&&this.params.onStart(i),this.params.onQuestion&&this.params.onQuestion(i),this.listenForQuizQuestionChange()}}},t.prototype.onQuizHeaderMutation=function(){var e=this.quizContainer.querySelector("h2");if(e&&t.questionRegex.test(e.innerText)){var n=e.innerText.match(t.questionRegex);if(n){var o=this.getQuestionDataFromMatch(n);o.current!==this.currentQuestion&&(this.currentQuestion=o.current,this.params.onQuestion&&this.params.onQuestion(o))}}},t.prototype.listenForQuizQuestionChange=function(){new MutationObserver(this.onQuizHeaderMutation).observe(this.quizContainer,{subtree:!0,characterData:!0,childList:!0})},t.prototype.listenForQuizStart=function(){new MutationObserver(this.onContainerMutate).observe(this.quizContainer,{subtree:!0,childList:!0,characterData:!0,attributes:!0})},t.prototype.listen=function(){this.listenForQuizStart()},t.questionRegex=/^question (\d+) of (\d+)$/i,t}();e.default=i},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=n(2),s=n(9),c=n(3),l=function(t){function e(){var n=t.call(this)||this;return n.sectionNameToIndex={},u.default.autoBind(n),n.data=e.getStepData(),n.metadata=n.processData(n.data),n}return r(e,t),e.getStepData=function(){var t=document.getElementById(a.default.stepDataId);if(!t)return null;var e=t.innerText;return JSON.parse(e)},e.prototype.processData=function(t){if(!t)return null;if(!t.step)return{isStepEnabled:!1};for(var e,n=0;n<t.sections.length;++n){var o=t.sections[n];this.sectionNameToIndex[o.name]=n,e||o.tag!==t.current||(e={section:o,index:n})}return e?{isStepEnabled:!0,current:e}:{isStepEnabled:!0}},e.prototype.getProgressString=function(t){return"("+t+"/"+this.totalSections+")"},Object.defineProperty(e.prototype,"totalSections",{get:function(){return this.data&&this.data.sections&&this.data.sections.length||0},enumerable:!0,configurable:!0}),e.prototype.onSectionHoverMutate=function(t){var e,n;try{for(var o=i(t),r=o.next();!r.done;r=o.next()){var a=r.value,u=void 0;if(a.target instanceof HTMLElement)u=a.target;else{if("characterData"!==a.type||!this.sectionHoverDiv)continue;u=this.sectionHoverDiv}var s=u.innerText.trim();if(this.sectionNameToIndex.hasOwnProperty(s)||(s.endsWith("(cont)")&&(s=s.replace(/\s+\(cont\)\s*/,"").trim()),this.sectionNameToIndex.hasOwnProperty(s))){u.innerText+=" "+this.getProgressString(this.sectionNameToIndex[s]+1);break}}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},e.prototype.addNavBarProgressIndicator=function(){var t=c.default.getNavigationBar();if(t&&this.metadata&&this.metadata.current){var e=document.createElement("li");e.innerText="Progress: "+this.getProgressString(this.metadata.current.index+1),t.appendChild(e)}},e.prototype.addHoverProgressIndicator=function(){var t=document.querySelector("."+a.default.stepProgressClass+" div");t&&(this.sectionHoverDiv=t,new MutationObserver(this.onSectionHoverMutate).observe(t,{characterData:!0,attributes:!0,subtree:!0}))},e.prototype.addProgressIndicators=function(){this.addNavBarProgressIndicator(),this.addHoverProgressIndicator()},e.prototype.addDuplicateNav=function(){var t=document.getElementsByClassName(a.default.navDivClass)[0];if(t){var e=document.getElementsByClassName("content")[0];if(e){var n=t.cloneNode(!0),o=t.querySelector("canvas"),r=n.querySelector("canvas");o&&r&&(s.default.cloneCanvas(o,r),r.title="Hovering on the duplicate nav is not currently supported"),e.insertAdjacentElement("afterend",n)}}},e.prototype.start=function(){this.addProgressIndicators(),this.addDuplicateNav()},e}(n(1).default);e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.cloneCanvas=function(t,e){var n=e.getContext("2d");n&&(e.width=t.width,e.height=t.height,n.drawImage(t,0,0))},t}();e.default=o},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function u(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,u)}s((o=o.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),c=n(11),l=n(2),d=n(3),f=function(t){function e(){var e=t.call(this)||this;return l.default.autoBind(e),e}return r(e,t),e.prototype.onMutation=function(t,e){var n,o;try{for(var r=u(t),i=r.next();!i.done;i=r.next()){var a=i.value;if(a.target instanceof Element&&a.target.id===s.default.videoId)return this.addVideoHooks(a.target),void e.disconnect()}}catch(t){n={error:t}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(n)throw n.error}}},e.prototype.toggleVideoState=function(){return i(this,void 0,void 0,function(){return a(this,function(t){return this._video?this._video.paused?[2,this._video.play()]:[2,this._video.pause()]:[2]})})},e.prototype.onTap=function(){this.toggleVideoState().catch(function(t){return console.error("Unable to toggle video state:",t)})},e.prototype.updatePlaybackRate=function(t){this._video&&this._playbackDisplay&&(this._video.playbackRate=t,this._playbackDisplay.innerText="Playback Speed: "+t)},e.prototype.addKeyHandlers=function(t,n){var o=this;t.addEventListener("keydown",function(t){return["ArrowLeft"].includes(t.key)?(n.currentTime=Math.max(n.currentTime-e._secondsToScrub,0),void t.preventDefault()):["ArrowRight"].includes(t.key)?(n.currentTime=Math.min(n.duration,n.currentTime+e._secondsToScrub),void t.preventDefault()):["_","-"].includes(t.key)?(o.updatePlaybackRate(Math.max(n.playbackRate-e._playbackRateChange,0)),void t.preventDefault()):["+","="].includes(t.key)?(o.updatePlaybackRate(n.playbackRate+e._playbackRateChange),void t.preventDefault()):["0"].includes(t.key)?(o.updatePlaybackRate(1),void t.preventDefault()):[" ","Space"].includes(t.key)?(o.onTap(),void t.preventDefault()):void 0})},e.prototype.addTapHandler=function(t){new c.default(t,this.onTap).listen()},e.prototype.setupPlaybackDisplay=function(t){var e=document.getElementsByClassName(s.default.videoClass)[0];e&&(this._playbackDisplay=document.createElement("div"),this.updatePlaybackRate(t.playbackRate),e.insertAdjacentElement("afterend",this._playbackDisplay))},e.prototype.centerPlayButton=function(t){var e=t.offsetHeight,n=t.offsetWidth,o=document.getElementsByClassName(s.default.videoPlayButtonClass)[0];if(o&&o instanceof HTMLElement){var r=o.offsetHeight,i=o.offsetWidth;if(e&&n&&r&&i){var a=(e-r)/2,u=(n-i)/2;o.style.top=a+"px",o.style.left=u+"px"}}},e.prototype.addVideoHooks=function(t){var e=document.getElementById(s.default.videoContainerId);e&&(this._videoContainer=e,this._video=t,this.setupPlaybackDisplay(t),this.addTapHandler(e),this.addKeyHandlers(e,t),this.centerPlayButton(e))},e.prototype.start=function(){if(d.default.isPageVideo){var t=document.getElementById(s.default.videoId);if(t)this.addVideoHooks(t);else{var e=document.getElementsByClassName(s.default.videoClass)[0];new MutationObserver(this.onMutation).observe(e,{childList:!0,subtree:!0})}}},e._secondsToScrub=5,e._playbackRateChange=.125,e}(n(1).default);e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=function(){function t(t,e){this.element=t,this.onTap=e,o.default.autoBind(this),this._isActive=!1,this._initialTouchTime=0}return t.getMovementDelta=function(t,e){return{x:t.pageX-e.pageX,y:t.pageY-e.pageY}},t.prototype.onTouchStart=function(t){t instanceof TouchEvent&&1===t.touches.length&&(this._initialTouch=t.touches[0],this._initialTouchTime=Date.now(),this._isActive=!0)},t.prototype.onTouchMove=function(e){if(e instanceof TouchEvent&&(this._lastTouch=e.touches[0],this._initialTouch)){var n=t.getMovementDelta(this._lastTouch,this._initialTouch);Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2))>=t._dragMaxSqrtDistance&&(this._isActive=!1)}},t.prototype.onTouchEnd=function(e){e instanceof TouchEvent&&this._isActive&&(Date.now()-this._initialTouchTime>=t._tapMaxTimeMs||this.onTap())},t.prototype.addHooks=function(){this.element.addEventListener("touchstart",this.onTouchStart),this.element.addEventListener("touchmove",this.onTouchMove),this.element.addEventListener("touchend",this.onTouchEnd)},t.prototype.listen=function(){this.addHooks()},t._tapMaxTimeMs=200,t._dragMaxSqrtDistance=20,t}();e.default=r}]);
//# sourceMappingURL=bundle.js.map