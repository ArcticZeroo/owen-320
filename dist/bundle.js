!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";var r=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.loadModules=function(){for(var t,e,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];try{for(var i=r(n),a=i.next();!a.done;a=i.next()){a.value.start()}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={quizClass:"cl-quiz",videoCourseLibClass:"cl-video",videoElementSelector:"video.vjs-tech",videoElementClass:"vjs-tech",videoContainerClass:"video-js",stepDataId:"cl-step",siteDataId:"cl-site",msuLinkHeaderClass:"masthead",videoPlayButtonClass:"vjs-big-play-button",stepProgressClass:"cl-step-progress",navDivClass:"cl-stepnav-div",navArrowsSelector:'img[alt="Mark Complete"]',navListSelector:'img[alt="Return to Step"]',owenBodyClass:"body"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(){}return t.isClassElementPresent=function(t){var e=document.getElementsByClassName(t);return!!(e&&e.length&&e[0])},Object.defineProperty(t,"isPageCourseLib",{get:function(){return Boolean(document.getElementById(r.default.siteDataId))},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageStep",{get:function(){return!!document.getElementById(r.default.stepDataId)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageQuiz",{get:function(){return t.isClassElementPresent(r.default.quizClass)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageVideo",{get:function(){return t.isClassElementPresent(r.default.videoCourseLibClass)},enumerable:!0,configurable:!0}),t.getNavigationBar=function(){return document.querySelector("nav ul")},t.getSiteData=function(){var t=document.getElementById(r.default.siteDataId);return t?JSON.parse(t.innerText):null},Object.defineProperty(t,"canUseKeyboardShortcuts",{get:function(){var e=document.activeElement;return!e||!e.isContentEditable&&!t.illegalActiveTagNamesForShortcuts.includes(e.tagName.toLowerCase())},enumerable:!0,configurable:!0}),t.illegalActiveTagNamesForShortcuts=["input","textarea"],t}();e.default=o},function(t,e,n){"use strict";var r=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.autoBind=function(e){for(var n,o,i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];var s=Object.getPrototypeOf(e);0===i.length&&(i=Object.getOwnPropertyNames(s));try{for(var u=r(i),l=u.next();!l.done;l=u.next()){var c=l.value,d=Object.getOwnPropertyDescriptor(s,c);null!=d&&"function"==typeof d.value&&(t.protectedJavaScriptProperties.includes(c)||t.bindMethod(s,c,d))}}catch(t){n={error:t}}finally{try{l&&!l.done&&(o=u.return)&&o.call(u)}finally{if(n)throw n.error}}},t.bindMethod=function(t,e,n){var r=n.value;Object.defineProperty(t,e,{configurable:!0,get:function(){if(this===t||this.hasOwnProperty(e))return r;var n=r.bind(this);return Object.defineProperty(this,e,{value:n,configurable:!0,writable:!0}),n}})},t.protectedJavaScriptProperties=Object.getOwnPropertyNames(Object.getPrototypeOf({})),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={prefix:"__cl_helper:",videoPlaybackSpeed:"videoPlaybackSpeed",sidebarExpanded:"sidebarExpanded"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=function(){function t(){}return t.getLocalStorageKey=function(t){return r.default.prefix+t},t.setItem=function(e,n){window.localStorage.setItem(t.getLocalStorageKey(e),n)},t.getItem=function(e){return window.localStorage.getItem(t.getLocalStorageKey(e))},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(7),i=n(8),a=n(9),s=n(12),u=n(18);n(2).default.isPageCourseLib&&r.default.loadModules(new o.default,new s.default,new a.default,new u.default,new i.default)},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.start=function(){var t=document.createElement("script");t.src="https://kit.fontawesome.com/f92be839c2.js",t.crossOrigin="anonymous",document.head.appendChild(t)},e}(n(0).default);e.default=i},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(2),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.start=function(){var t=a.default.getSiteData();if(t){var e=document.querySelector("."+i.default.msuLinkHeaderClass+" a");e&&e.setAttribute("href",t.root)}},e}(n(0).default);e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),s=n(1),u=n(3),l=n(11),c=n(2),d=function(t){function e(){var e=t.call(this)||this;return u.default.autoBind(e),e.tryToGoToNextQuestion=l.default.debounceMethod(100,e.tryToGoToNextQuestion),e.quizContainer=document.getElementsByClassName(s.default.quizClass)[0],e}return o(e,t),e.getNextQuestionButton=function(){return document.querySelector("."+s.default.quizClass+" button")},e.prototype.startQuizWithResult=function(){if(!this.quizContainer)return!1;var t=this.quizContainer.querySelector("a");return!!t&&(!!t.innerText.includes("click to proceed to the quiz.")&&(t.click(),!0))},e.prototype.tryToGoToNextQuestion=function(){var t=e.getNextQuestionButton();t&&t.innerText.toLowerCase().includes("next")&&t.click()},e.prototype.addNextButtonHooks=function(){var t=this;document.addEventListener("keydown",function(n){e.quizContinueKeys.includes(n.key)&&(t.startQuizWithResult()||t.tryToGoToNextQuestion())})},e.prototype.onNewQuizQuestion=function(){var t,e,n=this.quizContainer.getElementsByTagName("input"),r=!1;try{for(var o=i(n),a=o.next();!a.done;a=o.next()){var s=a.value;s.setAttribute("autocomplete","off"),r||s.hidden||"hidden"===s.type||"none"===s.style.display||(s.focus(),r=!0)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}},e.prototype.start=function(){c.default.isPageQuiz&&(this.addNextButtonHooks(),new a.default({onQuestion:this.onNewQuizQuestion}).listen())},e.quizContinueKeys=["Enter","ArrowRight"],e}(n(0).default);e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(3),i=function(){function t(t){this.params=t,this.quizContainer=document.getElementsByClassName(r.default.quizClass)[0],this.currentQuestion=0,o.default.autoBind(this)}return t.prototype.getQuestionDataFromMatch=function(t){return{current:parseInt(t[1]),total:parseInt(t[2])}},t.prototype.onContainerMutate=function(e,n){var r=this.quizContainer.querySelector("h2");if(r&&t.questionRegex.test(r.innerText)){n.disconnect();var o=r.innerText.match(t.questionRegex);if(o){var i=this.getQuestionDataFromMatch(o);this.currentQuestion=i.current,this.params.onStart&&this.params.onStart(i),this.params.onQuestion&&this.params.onQuestion(i),this.listenForQuizQuestionChange()}}},t.prototype.onQuizHeaderMutation=function(){var e=this.quizContainer.querySelector("h2");if(e&&t.questionRegex.test(e.innerText)){var n=e.innerText.match(t.questionRegex);if(n){var r=this.getQuestionDataFromMatch(n);r.current!==this.currentQuestion&&(this.currentQuestion=r.current,this.params.onQuestion&&this.params.onQuestion(r))}}},t.prototype.listenForQuizQuestionChange=function(){new MutationObserver(this.onQuizHeaderMutation).observe(this.quizContainer,{subtree:!0,characterData:!0,childList:!0})},t.prototype.listenForQuizStart=function(){new MutationObserver(this.onContainerMutate).observe(this.quizContainer,{subtree:!0,childList:!0,characterData:!0,attributes:!0})},t.prototype.listen=function(){this.listenForQuizStart()},t.questionRegex=/^question (\d+) of (\d+)$/i,t}();e.default=i},function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.debounceMethod=function(t,e){var n=0;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var a=Date.now();a-n<t||(e.apply(void 0,o(r)),n=a)}},t}();e.default=i},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},a=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),u=n(1),l=n(4),c=n(14),d=n(3),f=n(15),p=n(2),h=n(5),y=n(0),v=n(16),m=function(t){function e(){var n=t.call(this)||this;return n.sectionNameToIndex={},d.default.autoBind(n),n.data=e.getStepData(),n.metadata=n.processData(n.data),n}return o(e,t),e.getStepData=function(){var t=document.getElementById(u.default.stepDataId);if(!t)return null;var e=t.innerText;return JSON.parse(e)},e.prototype.processData=function(t){if(!t)return null;if(!t.step)return{isStepEnabled:!1};for(var e,n=0;n<t.sections.length;++n){var r=t.sections[n];this.sectionNameToIndex[r.name]=n,e||r.tag!==t.current||(e={section:r,index:n})}return e?{isStepEnabled:!0,current:e}:{isStepEnabled:!0}},e.prototype.getProgressString=function(t){return"("+t+"/"+this.totalSections+")"},Object.defineProperty(e.prototype,"totalSections",{get:function(){return this.data&&this.data.sections&&this.data.sections.length||0},enumerable:!0,configurable:!0}),e.prototype.onSectionHoverMutate=function(t){var e,n;try{for(var r=i(t),o=r.next();!o.done;o=r.next()){var a=o.value,s=void 0;if(a.target instanceof HTMLElement)s=a.target;else{if("characterData"!==a.type||!this.sectionHoverDiv)continue;s=this.sectionHoverDiv}var u=s.innerText.trim();if(this.sectionNameToIndex.hasOwnProperty(u)||(u.endsWith("(cont)")&&(u=u.replace(/\s+\(cont\)\s*/,"").trim()),this.sectionNameToIndex.hasOwnProperty(u))){s.innerText+=" "+this.getProgressString(this.sectionNameToIndex[u]+1);break}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},e.prototype.addNavBarProgressIndicator=function(){var t=p.default.getNavigationBar();if(t&&this.metadata&&this.metadata.current){var e=document.createElement("li");e.innerText="Progress: "+this.getProgressString(this.metadata.current.index+1),t.appendChild(e)}},e.prototype.addHoverProgressIndicator=function(){var t=document.querySelector("."+u.default.stepProgressClass+" div");t&&(this.sectionHoverDiv=t,new MutationObserver(this.onSectionHoverMutate).observe(t,{characterData:!0,attributes:!0,subtree:!0}))},e.prototype.addProgressIndicators=function(){this.addNavBarProgressIndicator(),this.addHoverProgressIndicator()},e.prototype.addDuplicateNav=function(){var t=document.getElementsByClassName(u.default.navDivClass)[0];if(t){var e=document.getElementsByClassName("content")[0];if(e){var n=t.cloneNode(!0),r=t.getElementsByClassName("cl-step-completed-next")[0],o=n.getElementsByClassName("cl-step-completed-next")[0];(r||o)&&o.addEventListener("click",function(t){t.preventDefault(),r.click()});var i=t.querySelector("canvas"),a=n.querySelector("canvas");i&&a&&(f.default.cloneCanvas(i,a),a.title="Hovering on the duplicate nav is not currently supported"),e.insertAdjacentElement("afterend",n)}else console.error("Could not find content to duplicate navigation bar to")}else console.error("Could not find navigation bar to duplicate")},e.getRemainingWidthPerSide=function(){var t=a(e.stepBodyLimitsInPx,2)[1],n=(document.body.clientWidth-t)/2,r=document.getElementsByClassName(u.default.owenBodyClass)[0];if(!r)return n;var o=getComputedStyle(r);return o.marginLeft?Number.parseInt(o.marginLeft.replace(/[^-\d.]/g,"")):n},e.prototype.addSidebar=function(){var t,n;if(this.data&&this.metadata&&this.metadata.current){var r=Math.max(e.getRemainingWidthPerSide(),e.sidebarMinWidthInPx);console.log("width should be",r);var o=document.createElement("div"),a=document.createElement("div"),u=document.createElement("div"),d=document.createElement("table");o.className=s.default.classPrefix+"step-sidebar",o.style.width=r+"px",a.className=s.default.classPrefix+"sidebar-header";var f=0;try{for(var p=i(this.data.sections),y=p.next();!y.done;y=p.next()){var v=y.value,m=document.createElement("tr"),b=document.createElement("td"),g=document.createElement("i");b.appendChild(g);var _=e.sectionTypeToIconName[v.type]||e.sectionTypeToIconName.Unknown,x=s.default.classPrefix+"section-status-"+v.status,w=s.default.classPrefix+"section-current-"+(v.tag===this.metadata.current.section.tag);if(g.className=_+" "+x+" "+w,v.status===c.default.done||v.status===c.default.viewed){var P="First viewed at "+new Date(1e3*v.look).toLocaleString();v.status===c.default.done&&(P+=", marked complete at "+new Date(1e3*v.access).toLocaleString(),f++),b.title=P}else b.title="Not yet viewed";var S=document.createElement("td"),k=document.createElement("a");S.appendChild(k),k.href=v.url,k.innerText=v.name,m.appendChild(b),m.appendChild(S),d.appendChild(m)}}catch(e){t={error:e}}finally{try{y&&!y.done&&(n=p.return)&&n.call(p)}finally{if(t)throw t.error}}u.innerText=this.data.name+" "+this.getProgressString(f);var C=!0,T=document.createElement("i"),O=function(){if(h.default.setItem(l.default.sidebarExpanded,C),C)o.style.height=window.innerHeight+"px";else{var t=Number.parseInt((window.getComputedStyle(o).paddingTop||"0").replace(/[^\d]/g,""));o.style.height=a.offsetHeight+2*t+"px"}a.title="Click to "+(C?"collapse":"expand"),o.style.overflow=C?"auto":"hidden",d.style.visibility=C?"visible":"collapse",T.className=s.default.classPrefix+"sidebar-expand-icon fas fa-"+(C?"minus":"plus")};a.addEventListener("click",function(t){t.preventDefault(),C=!C,O()}),a.appendChild(u),a.appendChild(T),o.appendChild(a),o.appendChild(d),document.body.appendChild(o);var M=o.offsetWidth-o.clientWidth;M>0&&(o.style.width=r-M+"px");var E="true"===h.default.getItem(l.default.sidebarExpanded);O(),E!=C&&(C=E,O())}},e.prototype.start=function(){p.default.isPageStep&&(this.addProgressIndicators(),this.addDuplicateNav(),this.addSidebar(),(new v.default).start())},e.stepBodyLimitsInPx=[575,1e3],e.sidebarMinWidthInPx=250,e.sectionTypeToIconName={V:"fas fa-video",S:"fas fa-pencil-alt",Q:"fas fa-vial",T:"fas fa-hammer",Unknown:"fas fa-question"},e}(y.default);e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={classPrefix:"cl-helper-"}},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.done="D",t.viewed="V",t.notViewed="N"}(r||(r={})),e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.cloneCanvas=function(t,e){var n=e.getContext("2d");n&&(e.width=t.width,e.height=t.height,n.drawImage(t,0,0))},t}();e.default=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},a=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(e,"__esModule",{value:!0});var s=n(17),u=n(2),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stepNavController=new s.default,e.shortcuts=new Map,e}return o(e,t),e.prototype.addKeyboardHooks=function(){var t=this;window.addEventListener("keydown",function(e){var n,r;if(u.default.canUseKeyboardShortcuts&&e.shiftKey&&"Shift"!==e.key)try{for(var o=i(t.shortcuts),s=o.next();!s.done;s=o.next()){var l=a(s.value,2),c=l[0],d=l[1];if(c.includes(e.key))return d(),void e.preventDefault()}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}})},e.prototype.start=function(){this.shortcuts.set(["N"],this.stepNavController.goToNext),this.shortcuts.set(["B"],this.stepNavController.goToPrevious),this.shortcuts.set(["L"],this.stepNavController.goToList),this.shortcuts.set(["M"],this.stepNavController.goToNextAndMark),this.addKeyboardHooks()},e}(n(0).default);e.default=l},function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(3),a=function(){function t(e){i.default.autoBind(this),e||(e=document.getElementsByClassName(o.default.navDivClass)[0]),this.listLink=t.imgToLink(e.querySelector(o.default.navListSelector));var n=r(Array.from(e.querySelectorAll(o.default.navArrowsSelector)),3),a=n[0],s=n[1],u=n[2];this.previousLink=t.imgToLink(a),this.nextLink=t.imgToLink(s),this.nextAndMarkLink=t.imgToLink(u)}return t.imgToLink=function(t){return t?t.parentElement:null},t.prototype.goToList=function(){this.listLink&&this.listLink.click()},t.prototype.goToPrevious=function(){this.previousLink&&this.previousLink.click()},t.prototype.goToNext=function(){this.nextLink&&this.nextLink.click()},t.prototype.goToNextAndMark=function(){this.nextAndMarkLink&&this.nextAndMarkLink.click()},t}();e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),l=n(4),c=n(19),d=n(3),f=n(2),p=n(5),h=function(t){function e(){var n=t.call(this)||this;return n._playbackRate=e.getPlaybackSpeedFromStorage(),d.default.autoBind(n),n}return o(e,t),e.getPlaybackSpeedFromStorage=function(){var t=p.default.getItem(l.default.videoPlaybackSpeed);if(!t)return 1;var e=Number.parseFloat(t);return Number.isNaN(e)?1:e},e.prototype.onMutation=function(t){var e,n;try{for(var r=s(t),o=r.next();!o.done;o=r.next()){var i=o.value;if(i.target instanceof Element&&i.target.classList.contains(u.default.videoElementClass))return void this.addVideoHooks(i.target)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},e.prototype.toggleVideoState=function(){return i(this,void 0,void 0,function(){return a(this,function(t){return this._video?this._video.paused?[2,this._video.play()]:[2,this._video.pause()]:[2]})})},e.prototype.onTap=function(){this.toggleVideoState().catch(function(t){return console.error("Unable to toggle video state:",t)})},e.prototype.updatePlaybackRate=function(t){this._video&&(t=Math.max(0,Math.min(t,16)),this._playbackRate=t,this._video.playbackRate=t,p.default.setItem(l.default.videoPlaybackSpeed,t),this._playbackDisplay&&(this._playbackDisplay.innerText="Playback Speed: "+t))},e.prototype.addKeyHandlers=function(t){var n=this;this._windowKeyHandlers&&window.removeEventListener("keydown",this._windowKeyHandlers),this._windowKeyHandlers=function(r){if(f.default.canUseKeyboardShortcuts)return["ArrowLeft"].includes(r.key)?(t.currentTime=Math.max(t.currentTime-e._secondsToScrub,0),void r.preventDefault()):["ArrowRight"].includes(r.key)?(t.currentTime=Math.min(t.duration,t.currentTime+e._secondsToScrub),void r.preventDefault()):["_","-"].includes(r.key)?(n.updatePlaybackRate(n._playbackRate-e._playbackRateIncrementInSeconds),void r.preventDefault()):["+","="].includes(r.key)?(n.updatePlaybackRate(n._playbackRate+e._playbackRateIncrementInSeconds),void r.preventDefault()):["0"].includes(r.key)?(n.updatePlaybackRate(1),void r.preventDefault()):[" ","Space","Enter"].includes(r.key)?(n.onTap(),void r.preventDefault()):void 0},window.addEventListener("keydown",this._windowKeyHandlers)},e.prototype.addTapHandler=function(t){new c.default(t,this.onTap).listen()},e.prototype.addVideoPlayHandler=function(t){var e=this;t.addEventListener("play",function(){t.playbackRate=e._playbackRate})},e.prototype.setupPlaybackDisplay=function(){if(!this._playbackDisplay){var t=document.getElementsByClassName(u.default.videoCourseLibClass)[0];t&&(this._playbackDisplay=document.createElement("div"),this.updatePlaybackRate(this._playbackRate),t.insertAdjacentElement("afterend",this._playbackDisplay))}},e.prototype.centerPlayButton=function(t){var e=t.offsetHeight,n=t.offsetWidth,r=document.getElementsByClassName(u.default.videoPlayButtonClass)[0];if(r&&r instanceof HTMLElement){var o=r.offsetHeight,i=r.offsetWidth;if(e&&n&&o&&i){var a=(e-o)/2,s=(n-i)/2;r.style.top=a+"px",r.style.left=s+"px"}}},e.prototype.addVideoHooks=function(t){if(this._video!==t){var e=document.getElementsByClassName(u.default.videoContainerClass)[0];e&&e instanceof HTMLElement&&(this._videoContainer=e,this._video=t,this.setupPlaybackDisplay(),this.addVideoPlayHandler(t),this.addTapHandler(e),this.addKeyHandlers(t),this.centerPlayButton(e),this.updatePlaybackRate(this._playbackRate))}},e.prototype.start=function(){if(f.default.isPageVideo){var t=document.querySelector(u.default.videoElementSelector);t&&this.addVideoHooks(t);var e=document.getElementsByClassName(u.default.videoCourseLibClass)[0];new MutationObserver(this.onMutation).observe(e,{childList:!0,subtree:!0})}},e._secondsToScrub=5,e._playbackRateIncrementInSeconds=.125,e}(n(0).default);e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(){function t(t,e){this.element=t,this.onTap=e,r.default.autoBind(this),this._isActive=!1,this._initialTouchTime=0}return t.getMovementDelta=function(t,e){return{x:t.pageX-e.pageX,y:t.pageY-e.pageY}},t.prototype.onTouchStart=function(t){t instanceof TouchEvent&&1===t.touches.length&&(this._initialTouch=t.touches[0],this._initialTouchTime=Date.now(),this._isActive=!0)},t.prototype.onTouchMove=function(e){if(e instanceof TouchEvent&&(this._lastTouch=e.touches[0],this._initialTouch)){var n=t.getMovementDelta(this._lastTouch,this._initialTouch);Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2))>=t._dragMaxSqrtDistance&&(this._isActive=!1)}},t.prototype.onTouchEnd=function(e){e instanceof TouchEvent&&this._isActive&&(Date.now()-this._initialTouchTime>=t._tapMaxTimeMs||this.onTap())},t.prototype.addHooks=function(){this.element.addEventListener("touchstart",this.onTouchStart),this.element.addEventListener("touchmove",this.onTouchMove),this.element.addEventListener("touchend",this.onTouchEnd)},t.prototype.listen=function(){this.addHooks()},t._tapMaxTimeMs=200,t._dragMaxSqrtDistance=20,t}();e.default=o}]);
//# sourceMappingURL=bundle.js.map