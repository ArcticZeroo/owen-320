!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";var o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.loadModules=function(){for(var t,e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{for(var a=o(n),i=a.next();!i.done;i=a.next()){i.value.start()}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={quizClass:"cl-quiz",videoCourseLibClass:"cl-video",videoElementSelector:"video.vjs-tech",videoElementClass:"vjs-tech",videoContainerClass:"video-js",stepDataId:"cl-step",siteDataId:"cl-site",msuLinkHeaderClass:"masthead",videoPlayButtonClass:"vjs-big-play-button",stepProgressClass:"cl-step-progress",navDivClass:"cl-stepnav-div",navArrowsSelector:'img[alt="Mark Complete"]',navListSelector:'img[alt="Return to Step"]',owenBodyClass:"body"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=function(){function t(){}return t.isClassElementPresent=function(t){var e=document.getElementsByClassName(t);return!!(e&&e.length&&e[0])},Object.defineProperty(t,"isPageCourseLib",{get:function(){return Boolean(document.getElementById(o.default.siteDataId))},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageStep",{get:function(){return!!document.getElementById(o.default.stepDataId)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageQuiz",{get:function(){return t.isClassElementPresent(o.default.quizClass)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"isPageVideo",{get:function(){return t.isClassElementPresent(o.default.videoCourseLibClass)},enumerable:!0,configurable:!0}),t.getNavigationBar=function(){return document.querySelector("nav ul")},t.getSiteData=function(){var t=document.getElementById(o.default.siteDataId);return t?JSON.parse(t.innerText):null},Object.defineProperty(t,"canUseKeyboardShortcuts",{get:function(){var e=document.activeElement;return!e||!e.isContentEditable&&!t.illegalActiveTagNamesForShortcuts.includes(e.tagName.toLowerCase())},enumerable:!0,configurable:!0}),t.illegalActiveTagNamesForShortcuts=["input","textarea"],t}();e.default=r},function(t,e,n){"use strict";var o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.autoBind=function(e){for(var n,r,a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var s=Object.getPrototypeOf(e);0===a.length&&(a=Object.getOwnPropertyNames(s));try{for(var u=o(a),l=u.next();!l.done;l=u.next()){var c=l.value,d=Object.getOwnPropertyDescriptor(s,c);null!=d&&"function"==typeof d.value&&(t.protectedJavaScriptProperties.includes(c)||t.bindMethod(s,c,d))}}catch(t){n={error:t}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}},t.bindMethod=function(t,e,n){var o=n.value;Object.defineProperty(t,e,{configurable:!0,get:function(){if(this===t||this.hasOwnProperty(e))return o;var n=o.bind(this);return Object.defineProperty(this,e,{value:n,configurable:!0,writable:!0}),n}})},t.protectedJavaScriptProperties=Object.getOwnPropertyNames(Object.getPrototypeOf({})),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={prefix:"__cl_helper:",videoPlaybackSpeed:"videoPlaybackSpeed",sidebarExpanded:"sidebarExpanded"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=function(){function t(){}return t.getLocalStorageKey=function(t){return o.default.prefix+t},t.setItem=function(e,n){window.localStorage.setItem(t.getLocalStorageKey(e),n)},t.getItem=function(e){return window.localStorage.getItem(t.getLocalStorageKey(e))},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(7),a=n(8),i=n(9),s=n(12),u=n(18);n(2).default.isPageCourseLib&&o.default.loadModules(new r.default,new s.default,new i.default,new u.default,new a.default)},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){var t=document.createElement("script");t.src="https://kit.fontawesome.com/f92be839c2.js",t.crossOrigin="anonymous",document.head.appendChild(t)},e}(n(0).default);e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(2),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){var t=i.default.getSiteData();if(t){var e=document.querySelector("."+a.default.msuLinkHeaderClass+" a");e&&e.setAttribute("href",t.root)}},e}(n(0).default);e.default=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),s=n(1),u=n(3),l=n(11),c=n(2),d=function(t){function e(){var e=t.call(this)||this;return u.default.autoBind(e),e.tryToGoToNextQuestion=l.default.debounceMethod(100,e.tryToGoToNextQuestion),e.quizContainer=document.getElementsByClassName(s.default.quizClass)[0],e}return r(e,t),e.getNextQuestionButton=function(){return document.querySelector("."+s.default.quizClass+" button")},e.prototype.startQuizWithResult=function(){if(!this.quizContainer)return!1;var t=this.quizContainer.querySelector("a");return!!t&&(!!t.innerText.includes("click to proceed to the quiz.")&&(t.click(),!0))},e.prototype.tryToGoToNextQuestion=function(){var t=e.getNextQuestionButton();t&&t.innerText.toLowerCase().includes("next")&&t.click()},e.prototype.addNextButtonHooks=function(){var t=this;document.addEventListener("keydown",function(n){e.quizContinueKeys.includes(n.key)&&(t.startQuizWithResult()||t.tryToGoToNextQuestion())})},e.prototype.onNewQuizQuestion=function(){var t,e,n=this.quizContainer.getElementsByTagName("input"),o=!1;try{for(var r=a(n),i=r.next();!i.done;i=r.next()){var s=i.value;s.setAttribute("autocomplete","off"),o||s.hidden||"hidden"===s.type||"none"===s.style.display||(s.focus(),o=!0)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},e.prototype.start=function(){c.default.isPageQuiz&&(this.addNextButtonHooks(),new i.default({onQuestion:this.onNewQuizQuestion}).listen())},e.quizContinueKeys=["Enter","ArrowRight"],e}(n(0).default);e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),a=function(){function t(t){this.params=t,this.quizContainer=document.getElementsByClassName(o.default.quizClass)[0],this.currentQuestion=0,r.default.autoBind(this)}return t.prototype.getQuestionDataFromMatch=function(t){return{current:parseInt(t[1]),total:parseInt(t[2])}},t.prototype.onContainerMutate=function(e,n){var o=this.quizContainer.querySelector("h2");if(o&&t.questionRegex.test(o.innerText)){n.disconnect();var r=o.innerText.match(t.questionRegex);if(r){var a=this.getQuestionDataFromMatch(r);this.currentQuestion=a.current,this.params.onStart&&this.params.onStart(a),this.params.onQuestion&&this.params.onQuestion(a),this.listenForQuizQuestionChange()}}},t.prototype.onQuizHeaderMutation=function(){var e=this.quizContainer.querySelector("h2");if(e&&t.questionRegex.test(e.innerText)){var n=e.innerText.match(t.questionRegex);if(n){var o=this.getQuestionDataFromMatch(n);o.current!==this.currentQuestion&&(this.currentQuestion=o.current,this.params.onQuestion&&this.params.onQuestion(o))}}},t.prototype.listenForQuizQuestionChange=function(){new MutationObserver(this.onQuizHeaderMutation).observe(this.quizContainer,{subtree:!0,characterData:!0,childList:!0})},t.prototype.listenForQuizStart=function(){new MutationObserver(this.onContainerMutate).observe(this.quizContainer,{subtree:!0,childList:!0,characterData:!0,attributes:!0})},t.prototype.listen=function(){this.listenForQuizStart()},t.questionRegex=/^question (\d+) of (\d+)$/i,t}();e.default=a},function(t,e,n){"use strict";var o=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},r=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){}return t.debounceMethod=function(t,e){var n=0;return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];var i=Date.now();i-n<t||(e.apply(void 0,r(o)),n=i)}},t}();e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i};Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),u=n(1),l=n(4),c=n(14),d=n(3),f=n(15),p=n(2),h=n(5),y=n(0),v=n(16),m=function(t){function e(){var n=t.call(this)||this;return n.sectionNameToIndex={},d.default.autoBind(n),n.data=e.getStepData(),n.metadata=n.processData(n.data),n}return r(e,t),e.getStepData=function(){var t=document.getElementById(u.default.stepDataId);if(!t)return null;var e=t.innerText;return JSON.parse(e)},e.prototype.processData=function(t){if(!t)return null;if(!t.step)return{isStepEnabled:!1};for(var e,n=0;n<t.sections.length;++n){var o=t.sections[n];this.sectionNameToIndex[o.name]=n,e||o.tag!==t.current||(e={section:o,index:n})}return e?{isStepEnabled:!0,current:e}:{isStepEnabled:!0}},e.prototype.getProgressString=function(t){return"("+t+"/"+this.totalSections+")"},Object.defineProperty(e.prototype,"totalSections",{get:function(){return this.data&&this.data.sections&&this.data.sections.length||0},enumerable:!0,configurable:!0}),e.prototype.onSectionHoverMutate=function(t){var e,n;try{for(var o=a(t),r=o.next();!r.done;r=o.next()){var i=r.value,s=void 0;if(i.target instanceof HTMLElement)s=i.target;else{if("characterData"!==i.type||!this.sectionHoverDiv)continue;s=this.sectionHoverDiv}var u=s.innerText.trim();if(this.sectionNameToIndex.hasOwnProperty(u)||(u.endsWith("(cont)")&&(u=u.replace(/\s+\(cont\)\s*/,"").trim()),this.sectionNameToIndex.hasOwnProperty(u))){s.innerText+=" "+this.getProgressString(this.sectionNameToIndex[u]+1);break}}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},e.prototype.addNavBarProgressIndicator=function(){var t=p.default.getNavigationBar();if(t&&this.metadata&&this.metadata.current){var e=document.createElement("li");e.innerText="Progress: "+this.getProgressString(this.metadata.current.index+1),t.appendChild(e)}},e.prototype.addHoverProgressIndicator=function(){var t=document.querySelector("."+u.default.stepProgressClass+" div");t&&(this.sectionHoverDiv=t,new MutationObserver(this.onSectionHoverMutate).observe(t,{characterData:!0,attributes:!0,subtree:!0}))},e.prototype.addProgressIndicators=function(){this.addNavBarProgressIndicator(),this.addHoverProgressIndicator()},e.prototype.addDuplicateNav=function(){var t=document.getElementsByClassName(u.default.navDivClass)[0];if(t){var e=document.getElementsByClassName("content")[0];if(e){var n=t.cloneNode(!0),o=t.getElementsByClassName("cl-step-completed-next")[0],r=n.getElementsByClassName("cl-step-completed-next")[0];(o||r)&&r.addEventListener("click",function(t){t.preventDefault(),o.click()});var a=t.querySelector("canvas"),i=n.querySelector("canvas");a&&i&&(f.default.cloneCanvas(a,i),i.title="Hovering on the duplicate nav is not currently supported"),e.insertAdjacentElement("afterend",n)}else console.error("Could not find content to duplicate navigation bar to")}else console.error("Could not find navigation bar to duplicate")},e.prototype.addSidebar=function(){var t,n;if(this.data&&this.metadata&&this.metadata.current){var o=document.getElementsByClassName(u.default.owenBodyClass)[0];if(o){var r=i(e.stepBodyLimitsInPx,1)[0],d=Number.parseInt((getComputedStyle(o).paddingLeft||(r/2).toString()).replace(/[^\d]/g,"")),f=Math.max(d,e.sidebarMinWidthInPx),p=document.createElement("div"),y=document.createElement("div"),v=document.createElement("div"),m=document.createElement("table");p.className=s.default.classPrefix+"step-sidebar",p.style.width=f+"px",y.className=s.default.classPrefix+"sidebar-header";var b=0;try{for(var g=a(this.data.sections),_=g.next();!_.done;_=g.next()){var x=_.value,w=document.createElement("tr"),P=document.createElement("td"),S=document.createElement("i");P.appendChild(S);var k=e.sectionTypeToIconName[x.type]||e.sectionTypeToIconName.Unknown,T=s.default.classPrefix+"section-status-"+x.status,C=s.default.classPrefix+"section-current-"+(x.tag===this.metadata.current.section.tag);if(S.className=k+" "+T+" "+C,x.status===c.default.done||x.status===c.default.viewed){var O="First viewed at "+new Date(1e3*x.look).toLocaleString();x.status===c.default.done&&(O+=", marked complete at "+new Date(1e3*x.access).toLocaleString(),b++),P.title=O}else P.title="Not yet viewed";var M=document.createElement("td"),E=document.createElement("a");M.appendChild(E),E.href=x.url,E.innerText=x.name,w.appendChild(P),w.appendChild(M),m.appendChild(w)}}catch(e){t={error:e}}finally{try{_&&!_.done&&(n=g.return)&&n.call(g)}finally{if(t)throw t.error}}v.innerText=this.data.name+" "+this.getProgressString(b);var N=!0,j=document.createElement("i"),L=function(){if(h.default.setItem(l.default.sidebarExpanded,N),N)p.style.height=window.innerHeight+"px";else{var t=Number.parseInt((window.getComputedStyle(p).paddingTop||"0").replace(/[^\d]/g,""));p.style.height=y.offsetHeight+2*t+"px"}p.style.overflow=N?"auto":"hidden",m.style.visibility=N?"visible":"collapse",j.className=s.default.classPrefix+"sidebar-expand-icon fas fa-"+(N?"minus":"plus")};y.addEventListener("click",function(t){t.preventDefault(),N=!N,L()}),y.appendChild(v),y.appendChild(j),p.appendChild(y),p.appendChild(m),document.body.appendChild(p);var D=p.offsetWidth-p.clientWidth;D>0&&(p.style.width=f-D+"px");var I="true"===h.default.getItem(l.default.sidebarExpanded);L(),I!=N&&(N=I,L())}}},e.prototype.start=function(){p.default.isPageStep&&(this.addProgressIndicators(),this.addDuplicateNav(),this.addSidebar(),(new v.default).start())},e.stepBodyLimitsInPx=[575,1e3],e.sidebarMinWidthInPx=250,e.sectionTypeToIconName={V:"fas fa-video",S:"fas fa-pencil-alt",Q:"fas fa-vial",T:"fas fa-hammer",Unknown:"fas fa-question"},e}(y.default);e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={classPrefix:"cl-helper-"}},function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.done="D",t.viewed="V",t.notViewed="N"}(o||(o={})),e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.cloneCanvas=function(t,e){var n=e.getContext("2d");n&&(e.width=t.width,e.height=t.height,n.drawImage(t,0,0))},t}();e.default=o},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i};Object.defineProperty(e,"__esModule",{value:!0});var s=n(17),u=n(2),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stepNavController=new s.default,e.shortcuts=new Map,e}return r(e,t),e.prototype.addKeyboardHooks=function(){var t=this;window.addEventListener("keydown",function(e){var n,o;if(u.default.canUseKeyboardShortcuts&&e.shiftKey&&"Shift"!==e.key)try{for(var r=a(t.shortcuts),s=r.next();!s.done;s=r.next()){var l=i(s.value,2),c=l[0],d=l[1];if(c.includes(e.key))return d(),void e.preventDefault()}}catch(t){n={error:t}}finally{try{s&&!s.done&&(o=r.return)&&o.call(r)}finally{if(n)throw n.error}}})},e.prototype.start=function(){this.shortcuts.set(["N"],this.stepNavController.goToNext),this.shortcuts.set(["B"],this.stepNavController.goToPrevious),this.shortcuts.set(["L"],this.stepNavController.goToList),this.shortcuts.set(["M"],this.stepNavController.goToNextAndMark),this.addKeyboardHooks()},e}(n(0).default);e.default=l},function(t,e,n){"use strict";var o=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(3),i=function(){function t(e){a.default.autoBind(this),e||(e=document.getElementsByClassName(r.default.navDivClass)[0]),this.listLink=t.imgToLink(e.querySelector(r.default.navListSelector));var n=o(Array.from(e.querySelectorAll(r.default.navArrowsSelector)),3),i=n[0],s=n[1],u=n[2];this.previousLink=t.imgToLink(i),this.nextLink=t.imgToLink(s),this.nextAndMarkLink=t.imgToLink(u)}return t.imgToLink=function(t){return t?t.parentElement:null},t.prototype.goToList=function(){this.listLink&&this.listLink.click()},t.prototype.goToPrevious=function(){this.previousLink&&this.previousLink.click()},t.prototype.goToNext=function(){this.nextLink&&this.nextLink.click()},t.prototype.goToNextAndMark=function(){this.nextAndMarkLink&&this.nextAndMarkLink.click()},t}();e.default=i},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,a){function i(t){try{u(o.next(t))}catch(t){a(t)}}function s(t){try{u(o.throw(t))}catch(t){a(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,s)}u((o=o.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),l=n(4),c=n(19),d=n(3),f=n(2),p=n(5),h=function(t){function e(){var n=t.call(this)||this;return n._playbackRate=e.getPlaybackSpeedFromStorage(),d.default.autoBind(n),n}return r(e,t),e.getPlaybackSpeedFromStorage=function(){var t=p.default.getItem(l.default.videoPlaybackSpeed);if(!t)return 1;var e=Number.parseFloat(t);return Number.isNaN(e)?1:e},e.prototype.onMutation=function(t){var e,n;try{for(var o=s(t),r=o.next();!r.done;r=o.next()){var a=r.value;if(a.target instanceof Element&&a.target.classList.contains(u.default.videoElementClass))return void this.addVideoHooks(a.target)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}},e.prototype.toggleVideoState=function(){return a(this,void 0,void 0,function(){return i(this,function(t){return this._video?this._video.paused?[2,this._video.play()]:[2,this._video.pause()]:[2]})})},e.prototype.onTap=function(){this.toggleVideoState().catch(function(t){return console.error("Unable to toggle video state:",t)})},e.prototype.updatePlaybackRate=function(t){this._video&&(t=Math.max(0,Math.min(t,16)),this._playbackRate=t,this._video.playbackRate=t,p.default.setItem(l.default.videoPlaybackSpeed,t),this._playbackDisplay&&(this._playbackDisplay.innerText="Playback Speed: "+t))},e.prototype.addKeyHandlers=function(t){var n=this;this._windowKeyHandlers&&window.removeEventListener("keydown",this._windowKeyHandlers),this._windowKeyHandlers=function(o){if(f.default.canUseKeyboardShortcuts)return["ArrowLeft"].includes(o.key)?(t.currentTime=Math.max(t.currentTime-e._secondsToScrub,0),void o.preventDefault()):["ArrowRight"].includes(o.key)?(t.currentTime=Math.min(t.duration,t.currentTime+e._secondsToScrub),void o.preventDefault()):["_","-"].includes(o.key)?(n.updatePlaybackRate(n._playbackRate-e._playbackRateIncrementInSeconds),void o.preventDefault()):["+","="].includes(o.key)?(n.updatePlaybackRate(n._playbackRate+e._playbackRateIncrementInSeconds),void o.preventDefault()):["0"].includes(o.key)?(n.updatePlaybackRate(1),void o.preventDefault()):[" ","Space","Enter"].includes(o.key)?(n.onTap(),void o.preventDefault()):void 0},window.addEventListener("keydown",this._windowKeyHandlers)},e.prototype.addTapHandler=function(t){new c.default(t,this.onTap).listen()},e.prototype.addVideoPlayHandler=function(t){var e=this;t.addEventListener("play",function(){t.playbackRate=e._playbackRate})},e.prototype.setupPlaybackDisplay=function(){if(!this._playbackDisplay){var t=document.getElementsByClassName(u.default.videoCourseLibClass)[0];t&&(this._playbackDisplay=document.createElement("div"),this.updatePlaybackRate(this._playbackRate),t.insertAdjacentElement("afterend",this._playbackDisplay))}},e.prototype.centerPlayButton=function(t){var e=t.offsetHeight,n=t.offsetWidth,o=document.getElementsByClassName(u.default.videoPlayButtonClass)[0];if(o&&o instanceof HTMLElement){var r=o.offsetHeight,a=o.offsetWidth;if(e&&n&&r&&a){var i=(e-r)/2,s=(n-a)/2;o.style.top=i+"px",o.style.left=s+"px"}}},e.prototype.addVideoHooks=function(t){if(this._video!==t){var e=document.getElementsByClassName(u.default.videoContainerClass)[0];e&&e instanceof HTMLElement&&(this._videoContainer=e,this._video=t,this.setupPlaybackDisplay(),this.addVideoPlayHandler(t),this.addTapHandler(e),this.addKeyHandlers(t),this.centerPlayButton(e),this.updatePlaybackRate(this._playbackRate))}},e.prototype.start=function(){if(f.default.isPageVideo){var t=document.querySelector(u.default.videoElementSelector);t&&this.addVideoHooks(t);var e=document.getElementsByClassName(u.default.videoCourseLibClass)[0];new MutationObserver(this.onMutation).observe(e,{childList:!0,subtree:!0})}},e._secondsToScrub=5,e._playbackRateIncrementInSeconds=.125,e}(n(0).default);e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=function(){function t(t,e){this.element=t,this.onTap=e,o.default.autoBind(this),this._isActive=!1,this._initialTouchTime=0}return t.getMovementDelta=function(t,e){return{x:t.pageX-e.pageX,y:t.pageY-e.pageY}},t.prototype.onTouchStart=function(t){t instanceof TouchEvent&&1===t.touches.length&&(this._initialTouch=t.touches[0],this._initialTouchTime=Date.now(),this._isActive=!0)},t.prototype.onTouchMove=function(e){if(e instanceof TouchEvent&&(this._lastTouch=e.touches[0],this._initialTouch)){var n=t.getMovementDelta(this._lastTouch,this._initialTouch);Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2))>=t._dragMaxSqrtDistance&&(this._isActive=!1)}},t.prototype.onTouchEnd=function(e){e instanceof TouchEvent&&this._isActive&&(Date.now()-this._initialTouchTime>=t._tapMaxTimeMs||this.onTap())},t.prototype.addHooks=function(){this.element.addEventListener("touchstart",this.onTouchStart),this.element.addEventListener("touchmove",this.onTouchMove),this.element.addEventListener("touchend",this.onTouchEnd)},t.prototype.listen=function(){this.addHooks()},t._tapMaxTimeMs=200,t._dragMaxSqrtDistance=20,t}();e.default=r}]);
//# sourceMappingURL=bundle.js.map